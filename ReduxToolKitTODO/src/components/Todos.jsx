import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/TODO/todoSlice'

function Todos() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  

  return (
    <>
      <div>
        {todos.map((todo) => {
          return (
            <div className='flex gap-5' key={todo.id}>
              <li className='list-none p-2 bg-gray-300'>{todo.text}
              </li>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className=' cursor-pointer px-2 py-1 bg-red-400 text-white rounded-sm font-semibold'
              >
                 x
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Todos