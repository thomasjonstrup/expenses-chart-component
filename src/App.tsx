import React from "react";
import Card from "./components/Card";
import logo from "./images/logo.svg";

function App() {
	return (
		<div className="container">
			<div className="content">
				<header className="header">
					<div>
						<h2 className="header__text">My balance</h2>
						<h2 className="header__price">$921.48</h2>
					</div>
					<div className="header__logo">
						<img src={logo} className="App-logo" alt="logo" />
					</div>
				</header>
				<main>
					<Card />
				</main>
				<footer className="footer">
					<div className="footer__attribution">
						Challenge by{" "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
						>
							Frontend Mentor
						</a>
						. Coded by{" "}
						<a href="https://github.com/thomasjonstrup">
							Thomas Jonstrup
						</a>
						.
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
