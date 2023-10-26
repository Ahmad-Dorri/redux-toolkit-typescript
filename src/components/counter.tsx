import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const Counter = () => {
  const counter = useSelector((state: RootState) => state.counter);
  return <div>{counter.value}</div>;
};

export default Counter;
