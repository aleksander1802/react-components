import { FieldError, UseFormRegister, Path } from 'react-hook-form';
import { ValidFieldsFileList } from '../../components/AddCardForm/AddCardForm.props';

export interface SelectProps {
  label: Path<ValidFieldsFileList>;
  register: UseFormRegister<ValidFieldsFileList>;
  options: string[];
  errorMesage: string;
  error?: FieldError;
}
