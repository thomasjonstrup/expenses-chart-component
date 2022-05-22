import React from "react";
import Chart from "./Chart";

type Props = {};

const Card = (props: Props) => {
	return (
		<div className="card">
			<div className="card__header">
				<h1 className="card__title">Spending - Last 7 days</h1>
			</div>
			<div className="card__body">
				<Chart />
			</div>
			<div className="card__footer">
				<div>
					<p className="card__description">Total this month</p>
					<h2>$478.33</h2>
				</div>
				<div>
					<p className="card__total">+2.4%</p>
					<p className="card__description">from last month</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
