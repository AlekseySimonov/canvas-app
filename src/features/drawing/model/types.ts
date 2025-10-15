import type { ToolType } from "./constants";

export interface DrawingOptions {
	color: string;
	size: number;
	tool: ToolType;
}

export type DrawFn = (
	context: CanvasRenderingContext2D,
	x: number,
	y: number,
	options: DrawingOptions
) => void;
