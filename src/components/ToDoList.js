import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
const styles = {
	container: {
		border: "1px solid black",
		width: "50%",
		margin: "auto",
		justifyContent: "center",
	},
	header: {
		textAlign: "center",
	},
};

const ToDoList = () => {
	const [list, setList] = useState([]);
	console.log(list.map((item) => console.log(item)));
	const addToDoItem = (item) => {
		if (!item.text) {
			return;
		}
		const newToDo = [item, ...list];
		setList(newToDo);
	};

	const toDoDone = (id) => {
		let updatedTodo = list.map((item) => {
			if (item.id === id) {
				item.isComplete = !item.isComplete;
			}
			return item;
		});
		setList(updatedTodo);
	};
	const editToDo = (id) => {};

	return (
		<div style={styles.container}>
			<h1 style={styles.header}>ToDoList</h1>
			<ToDoForm onSubmit={addToDoItem} />
			{list.map((item) => {
				return <ToDoItem id={item.id} text={item.text} importance={item.importance} key={item.id} />;
			})}
		</div>
	);
};

export default ToDoList;
