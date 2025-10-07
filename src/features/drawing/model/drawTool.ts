import type { DrawingOptions } from "./types";

export const drawTool = (
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	options: DrawingOptions
) => {
	const { color, size} = options;

	context.beginPath();

	const onMouseMove = (event: MouseEvent) =>{
		context.lineTo(event.offsetX, event.offsetY);
		context.strokeStyle = color;
		context.lineWidth = size;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.stroke();
	}
	canvas.addEventListener("mousemove", onMouseMove);

	const onMouseUp = () => {
		context.closePath()
		canvas.removeEventListener("mousemove", onMouseMove);
		canvas.removeEventListener("mouseup", () => context.closePath());
	};

	canvas.addEventListener("mouseup", onMouseUp);
};
