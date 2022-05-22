import React, { useState } from "react";

import data from "../data/data.json";
import Tooltip from "./Tooltip";

type Props = {};

type ChartData = {
	day: string;
	amount: number;
};

const Chart = (props: Props) => {
	console.log("data :>> ", data);

	const [chartData, setChartData] = useState<ChartData[]>(data);

	return (
		<div className="chart">
			{chartData.map((chartItem: ChartData) => {
				return (
					<div className="chart__item" key={chartItem.day}>
						<Tooltip
							content={chartItem.amount.toString()}
							direction="top"
						>
							<div
								className="chart__amount"
								style={{
									height: `${chartItem.amount * 2}px`,
									backgroundColor:
										chartItem.amount > 50
											? "var(--cyan)"
											: "var(--soft-red)",
								}}
							/>
						</Tooltip>
						<div className="chart__day">{chartItem.day}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Chart;
