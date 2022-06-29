import { Cell } from "./ChessBoard.models";

export type PawnMoveType = 'first' | 'default' | 'attack';

export interface MoveByPawn {
    pos: number[];
    typeMove: PawnMoveType;
}

export type OnCheckPossible = (state: Cell[][], figurePos: number[], targetPos: number[]) => boolean;