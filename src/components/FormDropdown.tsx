import { ChangeEvent, FC } from 'react';
import styles from '../styles/FormInput.module.css';
import { Language } from '../types/Language.ts';

type Props = {
  label: string;
  error?: string;
  data: Language[];
  selected: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const FormDropdown: FC<Props> = ({ label, data, error, selected, onChange }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputLabel} htmlFor={label}>
        {label}
      </label>
      <select name={label} id={label} onChange={onChange} className={styles.input}>
        {data.map((it: Language) => (
          <option value={it.id} selected={it.id === selected}>
            {it.name}
          </option>
        ))}
      </select>
      {error && <p className={styles.inputP}>{error}</p>}
    </div>
  );
};

export default FormDropdown;
