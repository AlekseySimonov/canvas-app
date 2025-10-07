import { Slider } from "@/shared/components/slider";
import type { DrawingOptions, ToolType } from "../model/types";
import styles from "./_toolBar.module.scss";
import { Button } from "@/shared/components/button";

interface ToolbarProps {
	options: DrawingOptions;
	onColorChange: (color: string) => void;
	onToolChange: (tool: ToolType) => void;
	onSizeChange: (size: number) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
	options,
	onColorChange,
	onToolChange,
	onSizeChange,
}) => {

	return (
		<div className={styles.toolbar}>
			<label>
				<h1>TOOLS</h1>
				<div>
						<Button
							title="pencil"
							active={options.tool === "pencil"}
							onClick={() => onToolChange("pencil")}
						/>
						<Button
							title='rubber'
							active={options.tool === 'rubber'}
							onClick={() => onToolChange('rubber')}
						/>
				</div>
			</label>

			<label>
				<h1>COLOR</h1>
				<input
					type="color"
					value={options.color}
					onChange={(event) => onColorChange(event.target.value)}
				/>
			</label>

			<label>
				<h1>WIDTH</h1>
				<Slider size={options.size} onSizeChange={onSizeChange} />
			</label>
		</div>
	);
};