import React, {useEffect, useRef, useCallback} from 'react'
import useReactRouter from 'use-react-router'
import useInputs from '../hook/useInputs';

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
  const [updateData, onChange, reset] = useInputs(selectedItem)
  const titleRef = useRef<HTMLInputElement>(null)
  const descRef = useRef<HTMLTextAreaElement>(null)

  const handlePress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (descRef.current) descRef.current.focus()
    }
  }, [descRef])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(e)
  }, [onChange])

  const goHome = useCallback(():void => {
    history.push('/')
  }, [history])

  const submitUpdateAndGoHome = useCallback((e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (window.confirm('Are you sure you wish to update this item?')) {
      goHome()
      updateTodo(updateData)
      reset()
    }
  }, [updateData, goHome, updateTodo, reset])

  const handleCancel = useCallback(() => {
    if (window.confirm('Are you sure to cancel?')) {
      goHome()
    }
  }, [goHome])

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus()
  }, [])

  useEffect(() => {
    // console.log('history', history)
  }, [history, match, location])

  // 화면 부분
  console.log('TodoUpdateForm render')
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

export default React.memo(TodoUpdateForm)