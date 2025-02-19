import movePrevButton from "../assets/music_buttons/movePrevButton.svg";
import pauseButton from"../assets/music_buttons/pauseButton.svg";
import moveNextButton from "../assets/music_buttons/moveNextButton.svg";
import playingButton from "../assets/music_buttons/playingButton.svg";

export default function PlayListFooter() {
    return (
        <div className="flex flex-row items-center">
            <button className="hover:cursor-pointer">
                <img src={movePrevButton} alt='prev_music_button_svg' />
            </button>
            <button className="ml-[40px] mr-[40px] hover:cursor-pointer">
                <img src={pauseButton} alt='pause_music_button_svg' />
            </button>
            <button className="hover:cursor-pointer">
                <img src={moveNextButton} alt='next_music_button_svg' />
            </button>
        </div>
    )
}