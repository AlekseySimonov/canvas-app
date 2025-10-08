// export type ToolType = "pencil" | "rubber" | "line" | "rectangle" | "circle";

import type { ToolType } from "./constants";

export interface DrawingOptions {
	color: string;
	size: number;
	tool: ToolType;
}
