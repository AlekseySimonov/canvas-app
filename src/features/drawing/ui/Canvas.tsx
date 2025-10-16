import { useRef } from "react";
import type { DrawingOptions } from "../model/types";
import styles from "./_canvas.module.scss"
import { useCanvasDraw } from "../model/useCanvasDraw";
import { useCanvasResize } from "../model/useCanvasResize";

export const Canvas: React.FC<{ options: DrawingOptions }> = ({ options }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useCanvasDraw(canvasRef, options);
	useCanvasResize(canvasRef, containerRef);

	return (
		<div className={styles.canvas} ref={containerRef}>
			<canvas ref={canvasRef}
				className={styles.canvas_draw}
			>
				Your browser does not support canvas
			</canvas>
		</div>

	);
};