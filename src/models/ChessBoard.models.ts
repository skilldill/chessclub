import { Figure } from "./Figures.models";

export type CellColor = 'white' | 'black';

export interface Cell {
    figure?: Figure;
}