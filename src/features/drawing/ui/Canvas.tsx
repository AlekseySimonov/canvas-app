import { useEffect, useRef } from "react";
import { drawTool } from "../model/drawTool";
import type { DrawingOptions } from "../model/types";
import styles from "./_canvas.module.scss"

export const Canvas: React.FC<{ options: DrawingOptions }> = ({ options }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return console.error("Canvas error");

		const context = canvas.getContext("2d");
		if (!context) return console.error("Context error");

		context.moveTo(0, 0);

		let mouseClick: ((e: MouseEvent) => void) | null = null;

		switch (options.tool) {
			case "pencil":
				mouseClick = () => drawTool(canvas, context, options);
				break;
			case "rubber":
				mouseClick = () => drawTool(canvas, context, { ...options, color: '#ffffff' });
				break;
			default:
				mouseClick = () => drawTool(canvas, context, options);
		}

		canvas.addEventListener("mousedown", mouseClick);

		return () => {
			canvas.removeEventListener("mousedown", mouseClick);
		};

	}, [options]);

	return (
		<div className={styles.canvas}>
			<canvas ref={canvasRef}
				width={'1000px'}
				height={'400px'}
				style={{cursor:"crosshair"}}
				className={styles.canvas_draw}
			>
				Your browser does not support canvas
			</canvas>
		</div>

	);
};