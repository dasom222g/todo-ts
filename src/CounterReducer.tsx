import React, {useReducer} from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' } | { type: 'RESET' }

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'RESET':
      return 0
    default:
      return state
      // throw new Error('no action')
  }
}

function CounterReducer() {
  // 로직 부분
  const [count, dispatch] = useReducer(reducer, 0)
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

export default CounterReducer