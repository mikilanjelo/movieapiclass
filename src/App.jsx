
import './App.css';
import GetMovie from './MovieContext';
import List from './component/List';
import Form from './component/Form';
import Banner from './component/Banner';
import React, {useState} from 'react';

function App() {
  const[theme, setTheme]=useState('dark')
  const setToogle = ()=>{
    setTheme(theme === 'dark'? 'light' : 'dark')
  }
  return (
    <div className={theme}>
      <GetMovie>
      <button onClick={setToogle}>{theme === 'dark' ? 'light': 'dark'}</button>
      <Form />
      <Banner />
      <List />
    </GetMovie>
    </div>
  );
}

export default App;
