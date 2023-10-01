import React from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);
  const [item, setItem] = React.useState("");
  const [state, setState] = React.useState([]);

  function typing(e) {
    setItem(e.target.value);
  }
  function Add() {
    if (/^\s+$/.test(item)) {
    } else {
      setTasks([...tasks, item]);
      setState([...state, false]);
      setItem("");
    }
  }
  function clear() {
    const a = [...tasks];
    const b = [...state];
    var i = 0;
    while (i < a.length) {
      if (b[i]) {
        a.splice(i, 1);
        b.splice(i, 1);
      } else ++i;
    }
    setTasks(a);
    setState(b);
  }
  function createItem(task, index) {
    function toggleDecoration() {
      const newState = [...state];
      newState[index] = !newState[index];
      setState(newState);
    }

    return (
      <li
        key={index}
        style={{ textDecoration: state[index] ? "line-through" : "none" }}
        onDoubleClick={toggleDecoration}
      >
        {task}
      </li>
    );
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input onChange={typing} value={item}></input>
      <button onClick={Add}>Add</button>
      <ul>{tasks.map(createItem)}</ul>
      <button className="clearbtn" onClick={clear}>
        Clear
      </button>
    </div>
  );
}

export default App;
