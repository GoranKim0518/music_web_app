import { createContext } from "react";

export const State = createContext({
    isPlaying: false,
    index: 0,
    changePlayingState: () => {},
})