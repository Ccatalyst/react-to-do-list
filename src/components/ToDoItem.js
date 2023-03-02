import React from "react";

const ToDoItem = ({ id, text, importance }) => {
	const importanceColor = () => {
		if (importance == "high") {
			return "red";
		}
		if (importance == "medium") {
			return "orange";
		}
		return "yellow";
	};
	const styles = {
		container: {
			border: "1px solid black",
			display: "flex",
			width: "50%",
			margin: "auto",
			justifyContent: "center",
			background: importanceColor(),
		},
		header: {
			textAlign: "center",
		},
	};
	return (
		<div style={styles.container}>
			<h3>{text}</h3>
			<button>Edit Item</button>
			<button>Complete</button>
		</div>
	);
};
export default ToDoItem;
