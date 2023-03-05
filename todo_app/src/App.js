import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [todoItem, setTodoItem] = useState(() => "");
    const [changedTodo, setChangedTodo] = useState(() => "");
    const [todos, setTodos] = useState(() => []);

    const verify = (e) => {
        e.preventDefault();
        if (todoItem === "") {
            alert("Enter Some Todo Item");
        }
        else {
            addItem();
        }
    }

    const addItem = () => {
        setTodos((prevTodos) => [...prevTodos, {
            item: todoItem,
            readOnly: true,
        }]);
        setTodoItem("");
    }

    const editItem = (e, ind) => {
        let remain = JSON.parse(JSON.stringify(todos));
        let editable = remain.filter(item => !item.readOnly);
        if (editable.length > 0) {
            alert("Please Save Todos First");
            return;
        }
        remain[ind].readOnly = false;
        setTodos(remain)
        setChangedTodo(remain[ind].item)
        e.target.parentNode.childNodes[0].focus();
    }

    const update = (ind) => {
        if (changedTodo === "") {
            alert("Enter Some Todo Item");
        }
        else {
            const updatedTodos = JSON.parse(JSON.stringify(todos));
            updatedTodos.splice(ind, 1, { item: changedTodo, readOnly: true })
            setTodos(updatedTodos);
        }
    }

    const deleteItem = (e) => {
        let remain = JSON.parse(JSON.stringify(todos));
        remain.splice(e, 1)
        setTodos(() => remain);
    }

    const deleteAll = () => {
        setTodos(() => []);
    }

    return (
        <div className={"container"}>
            <h1>PIAIC CNC Quarter 2 Todo App</h1>
            <h2>Syed Talha Askari PIAIC92809</h2>
            <div className={"inputArea"}>
                <form onSubmit={verify} className={"d-inline"}>
                    <input type={"text"} placeholder={"Enter Todo Item"} maxLength={25} id={"todoItem"} value={todoItem} onChange={e => setTodoItem(e.target.value)} />
                    <button type="submit" onClick={verify}>Add</button>
                </form>
                <button onClick={deleteAll}>Delete All</button>
            </div>
            <div className={"listArea"}>
                <ol>
                    {todos.map((todo, ind) => <li key={ind}>
                        <input value={todo.readOnly ? todo.item : changedTodo} readOnly={todo.readOnly} className={"input"} maxLength={25} onChange={e => setChangedTodo(e.target.value)} />
                        <button onClick={(e) => todo.readOnly ? editItem(e, ind) : update(ind)}>{todo.readOnly ? "Edit" : "Update"}</button>
                        <button onClick={() => deleteItem(ind)}>Delete</button>
                    </li>)}
                </ol>
            </div>
        </div>
    )
}

export default App;