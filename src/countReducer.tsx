import { Action } from './CounterReducer';

export function countReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
    // throw new Error('no action')
  }
}
