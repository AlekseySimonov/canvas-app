export type ToolType = "pencil" | "rubber" | "line" | "rectangle" | "circle";

export interface DrawingOptions {
	color: string;
	size: number;
	tool: ToolType;
}
