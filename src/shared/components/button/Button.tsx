import styles from "./_button.module.scss"
interface ButtonProps {
	title: string;
	active?: boolean;
	onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, active, onClick }) => {
	return (
		<button
			className={`${styles.button} ${active ? styles.active : ""}`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}