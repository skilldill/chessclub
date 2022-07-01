import { Cell } from "./ChessBoard.models";

export type PawnMoveType = 'first' | 'default' | 'attack';

export interface MoveByPawn {
    pos: number[];
    typeMove: PawnMoveType;
}

export type OnCheckPossible = (state: Cell[][], figurePos: number[], targetPos: number[]) => boolean;

export type MoveDirection = 'top' | 'right' | 'bottom' | 'left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';