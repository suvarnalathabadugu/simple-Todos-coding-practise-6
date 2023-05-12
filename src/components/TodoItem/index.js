// Write your code here
import './index.css'

const ToDoItem = props => {
  const {toDoListDetails, deleteTodo} = props
  const {id, title} = toDoListDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default ToDoItem
