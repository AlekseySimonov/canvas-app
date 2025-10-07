import { Outlet } from "react-router"
import { Header } from "../header"
import styles from "./_base.module.scss"

const Base = () => {
	return (
		<div className={styles.base}>
			<Header />
			<main>
				<Outlet/>
			</main>
		</div>
	)
}

export default Base