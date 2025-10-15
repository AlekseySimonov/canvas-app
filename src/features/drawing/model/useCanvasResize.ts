import { useCallback, useEffect, useState } from "react";

export const useCanvasResize = (
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
	containerRef: React.RefObject<HTMLDivElement | null>
) => {
	const [size, setSize] = useState({ width: 1000, height: 1000 });

	const resizeHandler = useCallback(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		const inMemCanvas = canvasRef.current;
		if (!inMemCanvas) return;
		const inMemCtx = inMemCanvas.getContext("2d");
		if (!inMemCtx) return;

		inMemCanvas.width = canvas.width;
		inMemCanvas.height = canvas.height;
		inMemCtx.drawImage(canvas, 0, 0);

		const { clientWidth, clientHeight } = container;
		canvas.width = clientWidth;
		canvas.height = clientHeight;

		setSize({ width: clientWidth, height: clientHeight });

		context.drawImage(inMemCanvas, 0, 0);
	}, [canvasRef, containerRef]);

	useEffect(() => {
		window.addEventListener("resize", resizeHandler);
		resizeHandler();
		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [resizeHandler]);

	return size;
};
