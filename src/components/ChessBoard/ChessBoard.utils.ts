import { CellColor } from "models";

export const getColorByCoords = (x: number, y: number, revers = false): CellColor => {
    if (revers) {
        if (y % 2 === 0) {
            if (x % 2 === 0) {
                return 'white';
            } else {
                return 'black';
            }
        } else {
            if (x % 2 === 0) {
                return 'black';
            } else {
                return 'white';
            }
        }
    }

    if (y % 2 === 0) {
        if (x % 2 === 0) {
            return 'black';
        } else {
            return 'white';
        }
    } else {
        if (x % 2 === 0) {
            return 'white';
        } else {
            return 'black';
        }
    }
} 