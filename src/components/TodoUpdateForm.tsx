import React, {useState, useEffect, useRef} from 'react'
import useReactRouter from 'use-react-router'


export interface params { // object 초기값 세팅
  id: number,
  title: string,
  desc: string,
  isComplete: boolean
}

type TodoUpdateFormProps = {
  selectedItem: params,
  updateTodo: (updateItem: params) => void
}

function TodoUpdateForm({selectedItem, updateTodo}: TodoUpdateFormProps) {
  // 로직 부분
  const { history, match, location } = useReactRouter()
  const [updateData, setUpdateData] = useState(selectedItem)

  const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (descRef.current) descRef.current.focus()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = e.target
    setUpdateData({
      ...updateData,
      [name]: value
    })
  }

  // const goBack = () => {
  //   history.goBack()
  // }

  const goHome = () => {
    history.push('/')
  }

  const submitUpdateAndGoHome = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (window.confirm('Are you sure you wish to update this item?')) {
      goHome()
      updateTodo(updateData)
    }
  }

  const handleCancel = () => {
    if (window.confirm('Are you sure to cancel?')) {
      goHome()
    }
  }

  useEffect(() => {
    console.log('history', history)
  }, [history, match, location])

  const titleRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus()
  }, [])

  // 화면 부분
  return (
    <section>
      <div className="form">
        <form action="/update" method="post" onSubmit={(e) => {e.preventDefault()}}>
          <div className="form-wrap">
            <input
              className="form__element"
              id="title"
              name="title"
              type="text"
              placeholder="Write a new todo"
              value={updateData.title}
              onKeyPress={handlePress}
              onChange={handleChange}
              ref={titleRef}
            />
          </div>
          <div className="todo__detail-desc">
            <textarea
              placeholder="Write a note.."
              name="desc"
              value={updateData.desc}
              onChange={handleChange}
              ref={descRef}
            ></textarea>
          </div>
          <div className="button-area">
            <button
              type="button"
              className="button-base button-base--cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-base"
              onClick={submitUpdateAndGoHome}
              >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default TodoUpdateForm