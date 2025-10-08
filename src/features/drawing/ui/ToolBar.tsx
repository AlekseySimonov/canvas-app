import { Slider } from "@/shared/components/slider";
import type { DrawingOptions} from "../model/types";
import styles from "./_toolBar.module.scss";
import { Button } from "@/shared/components/button";
import { tools, type ToolType } from "../model/constants";

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
			<section>
				<h1>TOOLS</h1>
				<div>
					{tools.map((tool) => (
						<Button
							key={tool}
							title={tool}
							active={options.tool === tool}
							onClick={() => onToolChange(tool)}
						/>
					))}
				</div>
			</section>

			<section>
				<h1>COLOR</h1>
				<input
					type="color"
					value={options.color}
					onChange={(event) => onColorChange(event.target.value)}
				/>
			</section>

			<section>
				<h1>WIDTH</h1>
				<Slider size={options.size} onSizeChange={onSizeChange} />
			</section>
		</div>
	);
};