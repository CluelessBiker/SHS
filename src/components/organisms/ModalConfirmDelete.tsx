import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ModalBase from '../molecules/ModalBase';

type Props = {
  text: string;
  open: boolean;
  handleDelete: () => void;
  setOpen: (value: boolean) => void;
};

const ModalConfirmDelete: FC<Props> = ({ text, open, setOpen, handleDelete }) => {
  const { t } = useTranslation();

  return (
    <ModalBase open={open} setOpen={setOpen}>
      <p>{t('modals.confirmDelete.sure', { item: text })}</p>
      <p>{t('modals.confirmDelete.noUndo')}</p>
      <div>
        <button onClick={() => setOpen(false)}>{t('buttons.cancel')}</button>
        <button onClick={handleDelete}>{t('buttons.del')}</button>
      </div>
    </ModalBase>
  );
};

export default ModalConfirmDelete;
