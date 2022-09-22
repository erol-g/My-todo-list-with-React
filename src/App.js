//  01 August 2022  //

import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [input, setInput] = useState({ value: "", isDone: false });
	const [list, setList] = useState([]);

	const addToDo = (newInput) => {
		setList([...list, newInput]);
		setInput({ value: " " });
	};

	const markDone = (i) => {
		setList(
			list.map((item) => {
				if (item.id === i) {
					item.isDone = !item.isDone;
				}
				return item;
			}),
		);
	};

	const deleteItem = (i) => {
		const updatedList = list.filter((item) => item.id !== i);
		setList(updatedList);
	};

	const dateAndTime = () => new Date().getFullYear();

	return (
		<>
			<div className="container">
				<header className="header-h1">
					<h1>MY TO DO LIST</h1>
				</header>
				<main className="main-input-btn-ul">
					<input
						type="text"
						placeholder="I can do it .."
						value={input.value}
						onChange={(e) =>
							setInput({
								value: e.target.value,
								id: Math.round(Math.random() * 10),
							})
						}
						onKeyPress={(e) =>
							e.key === "Enter"
								? addToDo(input)
								: setInput({ value: e.target.value })
						}
					/>
					<button onClick={() => addToDo(input)}> Add </button>
					<ul>
						{list.map((item) => {
							return (
								<li style={{ listStyleType: "number", textAlign: "center" }}>
									<div style={{ textAlign: "center", width: "100%" }}>
										<h2
											style={{
												color: item.isDone ? "green" : "black",
												margin: "10px",
												border: "2px solid black",
												backgroundColor: "white",
											}}
										>
											{" "}
											{item.value}
										</h2>
									</div>
									<button
										style={{
											color: item.isDone ? "green" : "red",
											border: item.isDone ? "2px solid green" : "4px solid red",
										}}
										onClick={() => markDone(item.id)}
									>
										DONE
									</button>
									<button onClick={() => deleteItem(item.id)}>DELETE</button>
								</li>
							);
						})}
					</ul>
				</main>
				<footer>{dateAndTime()}</footer>
			</div>
		</>
	);
};

export default App;
