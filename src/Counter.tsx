import React, {useState} from 'react';

function Counter() {
  const [number,  setNumber] = useState<number>(0)
  const onIncrease = () => setNumber(number + 1)
  const onDecrease = () => {
    if (number <= 0) return
    setNumber(number - 1)
  }
  return (
    <div>
      <strong>useState 사용</strong>
      <div>{number}</div>
      <button type="button" onClick={onIncrease}>count +1</button>
      <button type="button" onClick={onDecrease}>count -1</button>
    </div>
  )
}

export default Counter