import { FC, ReactNode } from 'react';
import { Modal } from '@mui/material';
import BoxModal from '../atoms/BoxModal';

type Props = {
  open: boolean;
  children: ReactNode;
  setOpen: (open: boolean) => void;
};

const ModalBase: FC<Props> = ({ open, setOpen, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxModal>{children}</BoxModal>
    </Modal>
  );
};

export default ModalBase;
