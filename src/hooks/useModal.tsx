import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useModal = () => {
  const modalType = useSelector((state: RootState) => state.modal.type);
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  return {
    modalType,
    isModalOpen,
  };
};
