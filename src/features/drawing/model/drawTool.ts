import type { DrawingOptions } from "./types";

export const drawTool = (
	context: CanvasRenderingContext2D,
	x: number,
	y: number,
	options: DrawingOptions
) => {
	const { color, size } = options;

	context.strokeStyle = color;
	context.lineWidth = size;
	context.lineCap = "round";
	context.lineJoin = "round";

	context.lineTo(x, y);
	context.stroke();
};
