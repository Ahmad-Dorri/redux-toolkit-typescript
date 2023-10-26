import { useDispatch } from 'react-redux';
import Counter from './components/counter';
import { increamentAsync } from './store/slices/counter-slice';
import { AppDispatch } from './store/store';
import { useTheme } from './hooks/useTheme';
import { ModalType, onClose, onOpen } from './store/slices/modal-slice';
import AddTodoModal from './components/modals/add-todo-modal';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { themeChanger } = useTheme();
  return (
    <div>
      hello world
      <Counter />
      <button onClick={() => dispatch(increamentAsync(10))}>increament</button>
      <button onClick={() => themeChanger()}>change theme</button>
      <button onClick={() => dispatch(onOpen(ModalType.AddTodo))}>
        open add todo modal
      </button>
      <button onClick={() => dispatch(onClose())}>close modal</button>
      <AddTodoModal />
    </div>
  );
}

export default App;
