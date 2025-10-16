import { useCallback, useEffect } from "react";

export const useCanvasResize = (
	canvasRef: React.RefObject<HTMLCanvasElement | null>,
	containerRef: React.RefObject<HTMLDivElement | null>
) => {

	const resizeHandler = useCallback(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;

		const context = canvas.getContext("2d");
		if (!context) return;

		const ratio = window.devicePixelRatio || 1
		const prevImage = context.getImageData(0, 0, canvas.width, canvas.height);

		const { clientWidth, clientHeight } = container;
		canvas.width = clientWidth * ratio;
		canvas.height = clientHeight * ratio;
		context.scale(ratio, ratio);

		context.putImageData(prevImage, 0, 0);

	}, [canvasRef, containerRef]);

	useEffect(() => {
		window.addEventListener("resize", resizeHandler);
		resizeHandler();
		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [resizeHandler]);
};
