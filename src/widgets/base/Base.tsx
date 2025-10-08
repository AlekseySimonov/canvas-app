import { Outlet } from "react-router"
import { Header } from "../header"

const Base = () => {
	return (
		<div>
			<Header />
			<main>
				<Outlet/>
			</main>
		</div>
	)
}

export default Base