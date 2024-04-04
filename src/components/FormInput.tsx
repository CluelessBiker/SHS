import { ChangeEvent, FC } from 'react';
import styles from '../styles/FormInput.module.css';

type Props = {
  type?: string;
  label: string;
  value: string | number;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: FC<Props> = ({ type = 'text', label, value, error, onChange }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputLabel} htmlFor={value as string}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={value as string}
        className={styles.input}
        aria-label={`${label} input field`}
      />
      {error && <p className={styles.inputP}>{error}</p>}
    </div>
  );
};

export default FormInput;
