import { useModal } from '../../hooks/useModal';
import { ModalType } from '../../store/slices/modal-slice';
const AddTodoModal = () => {
  const { isModalOpen, modalType } = useModal();
  if (modalType === ModalType.AddTodo && isModalOpen)
    return <div>AddTodoModal</div>;
  return null;
};

export default AddTodoModal;
