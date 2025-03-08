import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [secondsRotation, setSecondsRotation] = useState((time.getSeconds() / 60) * 360);
  const [minutesRotation, setMinutesRotation] = useState((time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6);
  const [hoursRotation, setHoursRotation] = useState(((time.getHours() % 12) / 12) * 360 + (time.getMinutes() / 60) * 30);
  const [disableTransition, setDisableTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newSecondsRotation = (now.getSeconds() / 60) * 360;
      const newMinutesRotation = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6;
      const newHoursRotation = ((now.getHours() % 12) / 12) * 360 + (now.getMinutes() / 60) * 30;

      // 시계침이 360도(0도)에 위치할 때 transition을 disabled
      if (newSecondsRotation === 0 || newMinutesRotation === 0 || newHoursRotation === 0) {
        setDisableTransition(true);
        setTimeout(() => setDisableTransition(false), 50); // transition 다시 활성화
      }

      setTime(now);
      setSecondsRotation(newSecondsRotation);
      setMinutesRotation(newMinutesRotation);
      setHoursRotation(newHoursRotation);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="squircle" className="flex justify-center items-center bg-[#D9D9D9] w-[325px] h-[325px] rounded-[40px]">
      {/* 배경 원 */}
      <div className="relative w-64 h-64 bg-white rounded-full shadow-xl border-[6px] border-gray-300 flex items-center justify-center">
        {/* 초침 */}
        <div
          className="bottom-[50%] absolute w-0.5 h-[45%] bg-red-500 rounded-full"
          style={{
            transformOrigin: "50% 100%",
            transform: `rotate(${secondsRotation}deg)`,
            transition: disableTransition ? "none" : "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)",
          }}
        />
        {/* 분침 */}
        <div
          className="bottom-[50%] absolute w-1 h-[40%] bg-gray-800 rounded-full"
          style={{
            transformOrigin: "50% 100%",
            transition: "all 0.2s ease-in-out",
            transform: `rotate(${minutesRotation}deg)`,
          }}
        />
        {/* 시침 */}
        <div
          className="bottom-[50%] absolute w-1.5 h-[30%] bg-black rounded-full"
          style={{
            transformOrigin: "50% 100%",
            transition: "all 0.2s ease-in-out",
            transform: `rotate(${hoursRotation}deg)`,
          }}
        />
      </div>
      {/* 중앙 원 */}
      <div className="absolute w-4 h-4 bg-black rounded-full" />
    </div>
  );
}
