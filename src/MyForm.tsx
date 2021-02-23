import React, {useState} from 'react';

type params = { // 객체
  title: string,
  desc: string
}

type MyFormProps = {
  onSubmit: (form: params) => void
}

function MyForm({onSubmit}: MyFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    desc: ''
  })
  const {title, desc} = formData
  // 로직 부분
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({
      ...formData, // 객체 복사
      [name]: value // 키값에 value값으로 변경
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(formData)
  }
  // 화면 부분
  return (
    <div>
      <form action="/create" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={change}
        />
        <input
          type="text"
          name="desc"
          value={desc}
          onChange={change}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default MyForm