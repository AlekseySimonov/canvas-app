import styles from "./_header.module.scss"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_logo}>
				Web Paint
			</div>
		</header>
	)
}
