import React from 'react';
import "./App.css";
export default function App() {  
  const [newItem, setNewItem] = React.useState('')
  const [todoList, setTodoList] = React.useState([])
  const [doneList, setDoneList] = React.useState([])
  const [error, setError] = React.useState(null)

  const handleAdd = () => {
    if (newItem === '') {
      setError('Please enter an item')
      return
    }
    setTodoList([...todoList, newItem])
    setNewItem('')
    setError(null)
  }

  const handleDelete = (index) => {
    setTodoList(todoList.filter((item, i) => i !== index))
  }

  const handleDone = (index) => {
    setDoneList([...doneList, todoList[index]])
    handleDelete(index)
  }
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }




  return <>
    <div className='position'> 
      <div className="container bg-light w-100 bg-opacity-50 rounded position-absolute top-0 start-0">
        <h1 className='fs-1 text-center'>Todo List</h1>
        <div className="input-group mb-3">
          <input
          type="text"
          className='form-control'
          id='input'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="Enter a new item"
          />
          <button className='btn btn-outline-secondary' onClick={handleAdd}>Add</button>
        </div>
        {error && <p className="error">{error}</p>}
          <h2>To do</h2>
        <div className="input-group mb-3">
          <ul className='list-group'>
            {todoList.map((item, index) => (
              <li className='list-group-item' key={index}>
                <h3><span className='badge bg-light text-dark'>{item}</span></h3>
                  <div className='bt-group'>
                  <button className="badge bg-success" onClick={() => handleDone(index)}>Done</button>
                  <button className="badge bg-danger" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      <div className="list-container">
        <h2 className=''>Done</h2>
        <ul>
          {doneList.map((item, index) => (
            <li key={index}>
              <span className='badge bg-light text-dark text-decoration-line-through'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  </>
}



