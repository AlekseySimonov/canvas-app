import type { DrawFn, DrawingOptions } from "./types";

export const getCoordinates = (e: MouseEvent | TouchEvent, canvas: HTMLCanvasElement) => {
	if (e instanceof MouseEvent) {
		return { x: e.offsetX, y: e.offsetY };
	}
	const rect = canvas.getBoundingClientRect();
	const touch = e.touches[0] || e.changedTouches[0];
	return {
		x: touch.clientX - rect.left,
		y: touch.clientY - rect.top,
	};
};

export const setupCanvasHandlers = (
	canvas: HTMLCanvasElement,
	context: CanvasRenderingContext2D,
	options: DrawingOptions,
	drawFn: DrawFn,
) => {
	let isDrawing = false;

	const start = (event: MouseEvent | TouchEvent) => {
		event.preventDefault?.();
		isDrawing = true;
		context.beginPath();

		const { x, y } = getCoordinates(event, canvas);
		context.moveTo(x, y);
	};

	const move = (event: MouseEvent | TouchEvent) => {
		if (!isDrawing) return;
		const { x, y } = getCoordinates(event, canvas);
		drawFn(context, x, y, options);
	};

	const end = () => {
		if (!isDrawing) return;
		isDrawing = false;
		context.closePath();
	};

	canvas.addEventListener("mousedown", start);
	canvas.addEventListener("mousemove", move);
	canvas.addEventListener("mouseup", end);
	canvas.addEventListener("mouseleave", end);

	canvas.addEventListener("touchstart", start, { passive: false });
	canvas.addEventListener("touchmove", move, { passive: false });
	canvas.addEventListener("touchend", end);
	canvas.addEventListener("touchcancel", end);

	return () => {
		canvas.removeEventListener("mousedown", start);
		canvas.removeEventListener("mousemove", move);
		canvas.removeEventListener("mouseup", end);
		canvas.removeEventListener("mouseleave", end);

		canvas.removeEventListener("touchstart", start);
		canvas.removeEventListener("touchmove", move);
		canvas.removeEventListener("touchend", end);
		canvas.removeEventListener("touchcancel", end);
	};
};

