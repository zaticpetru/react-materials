type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <label className="flex-column">
      {label}
      <input className="form-input" value={value} onChange={onChange} />
    </label>
  );
};
