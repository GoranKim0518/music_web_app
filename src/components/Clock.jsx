import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // 1초마다 현재 시간을 업데이트
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 정리
  }, []);

  const seconds = time.getSeconds(); // 초
  const minutes = time.getMinutes(); // 분
  const hours = time.getHours() % 12; // 시 (12시간 기준)

  // 초침 회전 계산 (초마다 +6도씩 회전)
  const secondRotation = seconds * 6; 

  // 분침 회전 계산 (분마다 +6도씩 회전, 초마다 조금씩 보정)
  const minuteRotation = minutes * 6 + seconds * 0.1; // 초마다 0.1도씩 회전 보정

  // 시침 회전 계산 (시마다 +30도씩 회전, 분마다 0.5도씩 보정)
  const hourRotation = hours * 30 + minutes * 0.5; // 분마다 0.5도씩 회전 보정

  return (
    <div
      id="squircle"
      className="flex justify-center items-center bg-[#D9D9D9] w-[325px] h-[325px] rounded-[40px]"
    >
      <div className="relative w-64 h-64 bg-white rounded-full shadow-xl border-[6px] border-gray-300 flex items-center justify-center">
        {/* 시침 */}
        <div
          className="absolute w-1.5 h-[30%] bg-black rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translateX(-50%) translateY(-100%) rotate(${hourRotation}deg)`,
            transformOrigin: "50% 100%",
            transition: "transform 0.5s ease-in-out",
          }}
        />

        {/* 분침 */}
        <div
          className="absolute w-1 h-[40%] bg-gray-800 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translateX(-50%) translateY(-100%) rotate(${minuteRotation}deg)`,
            transformOrigin: "50% 100%",
            transition: "transform 0.5s ease-in-out",
          }}
        />

        {/* 초침 */}
        <div
          className="absolute w-0.5 h-[45%] bg-red-500 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: `translateX(-50%) translateY(-100%) rotate(${secondRotation}deg)`,
            transformOrigin: "50% 100%",
            transition: "transform 0.1s linear",
          }}
        />

        {/* 중앙 원 */}
        <div className="absolute w-4 h-4 bg-black rounded-full" />
      </div>
    </div>
  );
}
