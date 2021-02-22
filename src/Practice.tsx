import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';

type Prams = {
  title: string,
  desc: string
}

function Practice () {
  const print = (text: string): void => {
    console.log('text', text)
  }
  const onSubmit = (form: Prams) => {
    console.log('form', form)
  }
  return (
    <>
      <Greetings
        name={'dasom'}
        optional={'option입니다'}
        print={print}
      />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </>
  );
}

export default Practice;
