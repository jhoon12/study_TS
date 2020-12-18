import React from 'react';
import ReducerSample from './ReducerSample';

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <ReducerSample onSubmit={onSubmit}/>;
};

export default App;