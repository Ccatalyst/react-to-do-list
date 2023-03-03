import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

const ToDoItem = ({ id, text, importance, isComplete, completeToDo, editToDo, deleteToDoItem }) => {
	const importanceColor = () => {
		if (isComplete) {
			return "#808080";
		} else {
			if (importance === "high") {
				return "red";
			}
			if (importance === "medium") {
				return "orange";
			}
			return "yellow";
		}
	};

	const styles = {
		container: {
			border: "1px solid black",
			width: "60%",
			margin: "auto",
			background: importanceColor(),
		},
		buttonContainer: {
			display: "flex",
			justifyContent: "right",
		},
		header: {
			textAlign: "center",
		},
	};
	const [edit, setEdit] = useState({
		id: null,
		text: "",
		importance: "",
	});

	const submitUpdate = (value) => {
		editToDo(edit.id, value);
		setEdit({ id: null, value: "", eagerness: "" });
	};
	if (edit.id) {
		return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
	}
	return (
		<div style={styles.container}>
			<h3>{text}</h3>
			<div style={styles.buttonContainer}>
				<button onClick={() => setEdit({ id: id, text: text, importance: importance })}>Edit Item</button>
				<button onClick={() => completeToDo(id)}>Complete</button>
				<button onClick={() => deleteToDoItem(id)}>Delete</button>
			</div>
		</div>
	);
};
export default ToDoItem;
