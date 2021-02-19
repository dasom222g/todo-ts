import React from 'react';
import Greetings from './Greetings';

function App () {
  function print (text: string): void {
    console.log('text', text)
  }
  return (
    <Greetings
      name={'dasom'}
      optional={'option입니다'}
      print={print}
    />
  );
}

export default App;
