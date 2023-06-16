import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import '../../App.css';

interface Todo {
  id: number;
  title: string;
  subTasks?: Todo[];
}

const TodoList: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newSubTaskTitle, setNewSubTaskTitle] = useState('');

  const addTodo = () => {
    const newTodo: Todo = {
      id: todos.length + 1,
      title: newTodoTitle,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  const addSubTask = (parentId: number) => {
    const parentTodo = todos.find((todo) => todo.id === parentId);
    if (parentTodo) {
      const newSubTask: Todo = {
        id: parentTodo.id * 10 + (parentTodo.subTasks?.length || 0) + 1,
        title: newSubTaskTitle,
      };
      parentTodo.subTasks = parentTodo.subTasks || [];
      parentTodo.subTasks.push(newSubTask);
      setTodos([...todos]);
      setNewSubTaskTitle('');
    }
  };

  return (
    <div className="dashboard">
      <h2>To-Do List</h2>
      {user && (
        <div className="tasklist">
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.title}
                {todo.subTasks && (
                  <ul>
                    {todo.subTasks.map((subTask) => (
                      <li key={subTask.id}>{subTask.title}</li>
                    ))}
                  </ul>
                )}
                <div>
                  <input
                      type="text"
                      className="todo-input"
                      value={newSubTaskTitle}
                      onChange={(e) => setNewSubTaskTitle(e.target.value)}
                      placeholder="Enter a new sub-task"
                    />
                  <button className="todo-button" onClick={() => addSubTask(todo.id)}>
                    Add Sub Task
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <input
                type="text"
                className="todo-input"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Enter a new to-do"
              />
            <button className="todo-button" onClick={addTodo}>Add To-do</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
