import { Cell } from "./ChessBoard.models";

export type PawnMoveType = 'first' | 'default' | 'attack';

export interface MoveByPawn {
    pos: number[];
    typeMove: PawnMoveType;
}

export type OnCheckPossible = (state: Cell[][], figurePos: number[], targetPos: number[]) => boolean;

export type DiagonalDirections = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
export type VerticalAndHorizontalDirections = 'top' | 'right' | 'bottom' | 'left';