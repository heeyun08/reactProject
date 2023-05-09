/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '이자카야 후기']);
  let [like, likeChange] = useState(0); //likeChange : like를 대체할 데이터

  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ ()=>{titleChange(['여자 코트 추천', '강남 우동 맛집', '이자카야 후기'])} }>button</button>
      <div className='list'>
        <h3> { title[0] } <span onClick={ ()=>{likeChange(like+1)} }>❤️</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { title[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
