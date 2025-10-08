export const tools = ["pencil", "rubber"] as const;

type ValueOf<T> = T[keyof T]

export type ToolType = ValueOf<typeof tools>

