import {useDispatch, useSelector} from 'react-redux';
import {hideModal, showModal} from '@store/ui/actions';
import {RootState} from '@core/types/redux';
import {ModalProps} from '@core/types/modal';

export const useModal = () => {
  const dispatch = useDispatch();
  const modal: ModalProps = useSelector((state: RootState) => state.ui.modal);
  const closeModal = () => {
    dispatch(hideModal());
  };
  const openModal = (data: ModalProps) => {
    dispatch(showModal(data));
  };
  return {modal, openModal, closeModal};
};
