import React, {useReducer} from 'react';
import { countReducer } from './countReducer';

export type Action = { type: 'INCREASE' } | { type: 'DECREASE' } | { type: 'RESET' }

function Counter2() {
  // 로직 부분
  const [count, dispatch] = useReducer(countReducer, 0)
  const onIncrease = () => dispatch({ type: 'INCREASE'})
  const onDecrease = () => {
    if (count <= 0) return
    dispatch({ type: 'DECREASE' })
  }
  const onReset = () => dispatch({ type: 'RESET' })
  // 화면 부분
  console.log('CounterReducer render')
  return (
    <div>
      <strong>useReducer 사용</strong>
      <div>{count}</div>
      <button type="button" onClick={onIncrease}>count +1</button>
      <button type="button" onClick={onDecrease}>count -1</button>
      <button type="button" onClick={onReset}>count reset</button>
    </div>
  )
}

export default Counter2