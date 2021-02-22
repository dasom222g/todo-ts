import React, {useState, useEffect, useRef} from 'react';

export interface prams {
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoFormProps = {
  selectedItem: prams
  addTodo: (title: string) => void
}

function TodoForm({selectedItem, addTodo}: TodoFormProps) {
  // 로직 부분
  const [title, setTitle] = useState<string>(selectedItem ? selectedItem.title : '')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmitAdd = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  const handleSubmitUpdate = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
        {!selectedItem ?
          (
            <form action="/create" method="post" onSubmit={handleSubmitAdd}>
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
          ) : (
            <form action="/update" method="post" onSubmit={handleSubmitUpdate}>
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
              </div>
            </form>
          )
        }
      </div>
    </section>
  )
}

TodoForm.defaultProps = {
  selectedItem: null,
  addTodo: null
}

export default TodoForm