import React, {useState, useEffect, useRef} from 'react';

type TodoFormProps = {
  addTodo: (title: string) => void
}

function TodoForm({addTodo}: TodoFormProps) {
  // 로직 부분
  const [title, setTitle] = useState<string>('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  })
  // 화면 부분
  return (
    <section>
      <div className="form">
        <form action="/create" method="post" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <input
              className="form__element"
              id="title"
              name="title"
              type="text"
              placeholder="Write a new todo"
              value={title}
              onChange={handleChange}
              ref={inputRef}
            />
            <button
              className="form__button"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TodoForm