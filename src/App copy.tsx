import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import { shallowEqual } from 'react-redux';

import { useAppSelector, useAppDispatch } from './store';
// 为ts类型方便而做的两个hook函数
import { changeMessageAction } from './store/modules/counter';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';

function App() {
  const dispatch = useAppDispatch();
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  );
  function handleChangeMessage() {
    dispatch(changeMessageAction('12345'));
  }
  return (
    <div className="App">
      <AppHeader></AppHeader>

      <Suspense fallback="">
        <div className="">{useRoutes(routes)}</div>
      </Suspense>
      <h2>计数:{count}</h2>
      <h2>消息:{message}</h2>
      <button onClick={handleChangeMessage}>点击修改message</button>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
