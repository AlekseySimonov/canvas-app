import { useState } from "react";
import styles from "./_editorPage.module.scss"
import { Canvas, Toolbar, type ToolType } from "@/features/drawing";

const EditorPage = () => {
	const [color, setColor] = useState('#000000');
	const [tool, setTool] = useState<ToolType>('pencil');
	const [size, setSize] = useState<number>(10);

	return (
		<div className={styles.workplace}>
			<Toolbar
				options={{color, tool, size}}
				onColorChange={setColor}
				onToolChange={setTool}
				onSizeChange={setSize}
			/>
			<Canvas options={{ color, tool, size }} />
		</div>
	)
}

export default EditorPage