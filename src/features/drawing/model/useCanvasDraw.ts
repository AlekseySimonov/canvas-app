import { useEffect } from "react";
import { drawTool } from "./drawTool";
import type { DrawFn, DrawingOptions } from "./types";
import { setupCanvasHandlers } from "./eventHandlers";

export const useCanvasDraw = (
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
	options: DrawingOptions
) => {
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		let drawFn: DrawFn;

		switch (options.tool) {
			case "pencil":
				drawFn = (ctx, x, y, opts) => drawTool(ctx, x, y, opts);
				break;

			case "rubber":
				drawFn = (ctx, x, y, opts) => drawTool(ctx, x, y, { ...opts, color: "#ffffff" });
				break;

			default:
				drawFn = (ctx, x, y, opts) => drawTool(ctx, x, y, opts);
				break;
		}

		const cleanup = setupCanvasHandlers(canvas, context, options, drawFn);

		return cleanup;

	}, [canvasRef, options]);
};
