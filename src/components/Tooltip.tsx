import React, { useState } from "react";

type Props = {
	content: string;
	delay?: number;
	direction: string;
	children: React.ReactNode;
};

const Tooltip = (props: Props) => {
	let timemout: any;

	const [active, setActive] = useState<boolean>(false);

	const showTip = () => {
		timemout = setTimeout(() => {
			setActive(true);
		}, props.delay || 400);
	};

	const hideTip = () => {
		clearInterval(timemout);
		setActive(false);
	};

	return (
		<div
			className="tooltip-wrapper"
			onMouseEnter={showTip}
			onMouseLeave={hideTip}
		>
			{props.children}
			{active && (
				<div className={`tooltip tooltip--${props.direction}`}>
					{props.content}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
