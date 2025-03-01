import { createContext } from "react";

export const State = createContext({
    isPlaying: false,
    page: 0,
    index: 0,
    changePlayingState: () => {},
    changeStateToForward: () => {},
    changeStateToBackward: () => {},
})