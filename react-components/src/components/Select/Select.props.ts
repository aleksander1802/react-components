import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { FormFields } from '../../components/AddCardForm/AddCardForm.props';

export interface SelectProps {
  label: Path<FormFields>;
  register: UseFormRegister<FormFields>;
  options: string[];
  errorMesage: string;
  error?: FieldError;
}
