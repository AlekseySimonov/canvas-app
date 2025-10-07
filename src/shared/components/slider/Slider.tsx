import styles from "./_slider.module.scss"

interface SliderProps {
	size: number;
	onSizeChange: (size: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ size, onSizeChange }) => {
	return (
		<div className={styles.slider}>
			<input
				type="range"
				min="1"
				max="100"
				value={size}
				step="1"
				onChange={(event) => onSizeChange(Number(event.target.value))}
			/>
			{size} px
		</div>
	);
};