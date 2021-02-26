import React from 'react';
// import Counter from './Counter';
import Counter2 from './Counter2';
import Greetings from './Greetings';
import MyForm from './MyForm';

type params = {
  title: string,
  desc: string
}

function Practice () {
  const print = (text: string): void => {
    console.log('text', text)
  }
  const onSubmit = (form: params) => {
    console.log('form', form)
  }

  return (
    <>
      <Greetings
        name={'dasom'}
        optional={'option입니다'}
        print={print}
      />
      {/* <Counter /> */}
      <Counter2 />
      <MyForm onSubmit={onSubmit} />
    </>
  );
}

export default Practice;
