import React from 'react';

type GreetingProps = { // 이 컴포넌트의 props선언
  name: string,
  desc: string,
  optional?: string,
  print: (text: string) => void
}

// state

function Greetings ({name, desc, optional, print}: GreetingProps) {
  print(name) // props로 받은 name값
  return (
    <div>
      <div>Hello {name}!</div>
      <strong>{desc}</strong>
      {optional && <span>{optional}</span>}
    </div>
  )
}

Greetings.defaultProps = {
  desc: 'no description'
}


export default Greetings