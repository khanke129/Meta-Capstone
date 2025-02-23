import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
	return (
<nav>
			<img src="Asset 14@4x.png" />

			<ul>
				<Link to="/">Home</Link>
                <Link to="/booking">Book a table</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</ul>
		</nav>
	)
}

export default Header
