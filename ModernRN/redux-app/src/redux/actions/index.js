import { SELECTED_SONG } from "../type";

export const seleteSong = song => {
    return {
        type: SELECTED_SONG,
        payload: song
    };
};