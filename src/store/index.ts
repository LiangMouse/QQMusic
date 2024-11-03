import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import counterReducer from './modules/counter';
import recommendReducer from '@/views/discover/c-pages/recommend/store/recomend';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
});

type DispatchType = typeof store.dispatch;
type GetStateFnType = typeof store.getState;
export type IRootState = ReturnType<GetStateFnType>;
// useAppSelector的hook封装
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;
export type AppDispatch = typeof store.dispatch;
export default store;
