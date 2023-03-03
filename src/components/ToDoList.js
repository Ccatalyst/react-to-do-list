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
	const addToDoItem = (item) => {
		if (!item.text) {
			return;
		}
		const newToDo = [item, ...list];
		setList(newToDo);
	};

	const completeToDo = (id) => {
		let updatedTodo = list.map((item) => {
			if (item.id === id) {
				item.isComplete = !item.isComplete;
			}
			return item;
		});
		console.log("test");
		setList(updatedTodo);
	};
	const editToDo = (id, newValue) => {
		if (!newValue.text) {
			return;
		}
		setList((prev) => prev.map((item) => (item.id === id ? newValue : item)));
	};
	const deleteToDoItem = (id) => {
		const updatedToDo = [...list].filter((item) => item.id !== id);

		setList(updatedToDo);
	};
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>ToDoList</h1>
			<ToDoForm onSubmit={addToDoItem} />
			{list.map((item) => {
				return (
					<ToDoItem
						id={item.id}
						text={item.text}
						importance={item.importance}
						key={item.id}
						isComplete={item.isComplete}
						completeToDo={completeToDo}
						editToDo={editToDo}
						deleteToDoItem={deleteToDoItem}
					/>
				);
			})}
		</div>
	);
};

export default ToDoList;
