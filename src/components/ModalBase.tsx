import '../App.css';
import styles from '../styles/ModalBase.module.css';
import { FC, ReactNode } from 'react';
import { Box, Modal } from '@mui/material';

type Props = {
  open: boolean;
  children: ReactNode;
  setOpen: (open: boolean) => void;
};

const ModalBase: FC<Props> = ({ open, setOpen, children }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`${styles.modal}`}>{children}</Box>
      </Modal>
    </div>
  );
};

export default ModalBase;
