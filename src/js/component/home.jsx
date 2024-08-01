import React, { useState } from "react";


//include images into your bundle


//create your first component
export function Home() {
	const [SelectedColor, setSelectedColor] = useState("green");
	
	return (
		<div className="Container">
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"light red" + (SelectedColor === "red" ? " glow" : "")
					}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" + (SelectedColor === "yellow" ? " glow" : "")
					}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"light green" + (SelectedColor === "green" ? " glow" : "")
					}></div>
			</div>
			</div>


	);
};

export default Home;
