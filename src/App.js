import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Container from './components/Container';

function App() {
	// states
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);
	const [addItem, setAddItem] = useState('');
	const [filteredItems, setFilteredItems] = useState([]);
	const [deleteItems, setDeleteItems] = useState([]);
	const [completeItems, setCompleteItems] = useState([]);
	const [activeItems, setActiveItems] = useState([]);
	const [filter, setFilter] = useState('');

	// functions
	const getInput = (e) => {
		setInput(e.target.value);
	};
	const addItemHandler = (e) => {
		e.preventDefault();
		setFilteredItems([...filteredItems, input]);
		setActiveItems([...activeItems, input]);
		setTodos([...todos, input]);
		setInput('');
	};
	const deleteHandler = (id) => {
		todos.filter((item, index) => console.log(item, index));
		setFilteredItems(filteredItems.filter((item, index) => index !== id));
		setActiveItems(activeItems.filter((item, index) => index !== id));
		let deletedItem = filteredItems.filter((item, index) => index === id);
		setDeleteItems([...deleteItems, deletedItem.join('')]);
	};

	const completeHandler = (id) => {
		todos.filter((item, index) => console.log(item, index));
		setFilteredItems(filteredItems.filter((item, index) => index !== id));
		setActiveItems(activeItems.filter((item, index) => index !== id));
		let completedItem = filteredItems.filter((item, index) => index === id);
		setCompleteItems([...completeItems, completedItem.join('')]);
	};

	const filterHandler = (e) => {
		let option = e.target.value;
		if (option === 'completed') {
			setFilteredItems(completeItems);
		} else if (option === 'deleted') {
			setFilteredItems(deleteItems);
		} else if (option === 'active') {
			setFilteredItems(activeItems);
		}
		console.log(e.target.value);
	};

	const editHandler = (id) => {
		console.log(id);
		let todoItem = filteredItems.find((todo, index) => index === id);
		console.log(todoItem);
		setFilteredItems(filteredItems.filter((item, index) => index !== id));
		console.log('edit handler activates');
	};
	return (
		<div className='app'>
			<Title />
			<Form
				getInput={getInput}
				input={input}
				setInput={setInput}
				addItem={addItem}
				setAddItem={setAddItem}
				addItemHandler={addItemHandler}
			/>
			<Container
				filteredItems={filteredItems}
				setFilteredItems={setFilteredItems}
				deleteHandler={deleteHandler}
				completeHandler={completeHandler}
				filterHandler={filterHandler}
				setFilter={setFilter}
				filter={filter}
				editHandler={editHandler}
			/>
		</div>
	);
}

export default App;
