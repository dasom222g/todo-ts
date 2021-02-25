import React, { useEffect, useRef, useCallback } from 'react';
import useInputs from '../hook/useInputs';

type TodoFormProps = {
  addTodo: (title: string) => void
}

function TodoForm({addTodo}: TodoFormProps) {
  // 로직 부분
  const [form, onChange, reset] = useInputs({
    title: ''
  })

  const {title} = form

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }, [onChange])

  const handleSubmit = useCallback((e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(title)
    reset()
  }, [title, addTodo, reset])

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  })
  // 화면 부분
  console.log('TodoForm render')
  return (
    <section>
      <div className="form">
        <form action="/create" method="post" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <input
              className="form__element"
              id="title"
              name="title"
              type="title"
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

export default React.memo(TodoForm)