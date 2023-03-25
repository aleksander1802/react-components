import { FormProps } from './AddCardForm.props';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Component, FormEvent, createRef } from 'react';
import { Htag } from '../../components/Htag/Htag';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage';
import { nameInputValidation } from './CardsFormValidation';
import { dateInputValidation } from './CardsFormValidation';
import { ageInputValidation } from './CardsFormValidation';
import { eyeInputValidation } from './CardsFormValidation';
import { messengersInputValidation } from './CardsFormValidation';
import { genderInputValidation } from './CardsFormValidation';
import { imageInputValidation } from './CardsFormValidation';

import cn from 'classnames';

import styles from './AddCardForm.module.css';

export class AddCardForm extends Component<FormProps> {
  state = {
    formCardArray: [],
    isValid: false,
    validation: {
      errorName: false,
      errorDate: false,
      errorEye: false,
      errorAge: false,
      errorMessengers: false,
      errorGender: false,
      errorFile: false,
    },
  };

  options = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Optimus Prime' },
  ];

  eye = ['', 'blue', 'brown', 'green'];
  messengers = ['Telegram', 'Viber', 'WhatsApp', 'Skype', 'VK Messenger'];
  genderRefs: HTMLInputElement[] = [];
  messengersRefs: HTMLInputElement[] = [];

  nameInputRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  selectEyeColorRef = createRef<HTMLSelectElement>();
  ageInputRef = createRef<HTMLInputElement>();
  genderRef = createRef<HTMLInputElement>();
  messengersInputRef = createRef<HTMLInputElement>();
  imageRef = createRef<HTMLInputElement>();
  resetForm = createRef<HTMLFormElement>();
  setRef = (ref: HTMLInputElement) => {
    this.genderRefs.push(ref);
  };

  setMessengersRef = (ref: HTMLInputElement) => {
    this.messengersRefs.push(ref);
  };

  validationFormFields = () => {
    this.setState(
      {
        validation: {
          errorName: nameInputValidation(this.nameInputRef),
          errorDate: dateInputValidation(this.dateRef),
          errorEye: eyeInputValidation(this.selectEyeColorRef),
          errorAge: ageInputValidation(this.ageInputRef),
          errorMessengers: messengersInputValidation(this.messengersRefs),
          errorGender: genderInputValidation(this.genderRefs),
          errorFile: imageInputValidation(this.imageRef),
        },
      },
      () => {
        const falseValues = Object.values(this.state.validation);
        if (falseValues.every((item) => !item)) {
          const newItem = {
            name: this.nameInputRef.current!.value,
            date: this.dateRef.current!.value,
            eye: this.selectEyeColorRef.current!.value,
            age: this.ageInputRef.current!.value,
            messengers: this.messengersRefs
              .filter((item) => item.checked)
              .map((item) => item.value),
            gender: this.genderRefs.filter((item) => item.checked).map((item) => item.value),
            image: this.imageRef.current!.files![0],
          };

          this.setState(
            {
              formCardArray: [...this.state.formCardArray, newItem],
              isValid: true,
            },
            () => {
              this.props.setDataState(this.state.formCardArray);
              const modalDisplayTime = 3000;
              setTimeout(() => {
                this.setState({
                  isValid: false,
                });
              }, modalDisplayTime);
            }
          );

          this.resetForm.current?.reset();
        }
      }
    );
  };

  handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    this.validationFormFields();
  };

  render() {
    return (
      <div className={cn(styles.container)}>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          className={cn(styles.form)}
          ref={this.resetForm}
        >
          <Htag tag="h2">Creating a new card form:</Htag>
          <div className={styles.wrapper}>
            <label htmlFor="name" className={styles.item}>
              <span>Name:</span>
              <Input
                id="name"
                type={'text'}
                placeholder={'Enter name'}
                ref={this.nameInputRef}
                aria-label="name"
                className={cn({
                  [styles.error]: this.state.validation.errorName,
                })}
              />
              <ErrorMessage
                error={this.state.validation.errorName}
                message={
                  'The first letter must be uppercase. Must be at least 2 characters in length.'
                }
              />
            </label>

            <label htmlFor="date" className={styles.item}>
              <span>Birthday:</span>
              <Input
                id="date"
                type={'date'}
                aria-label="date"
                ref={this.dateRef}
                className={cn(styles.date, {
                  [styles.error]: this.state.validation.errorDate,
                })}
              />
              <ErrorMessage
                error={this.state.validation.errorDate}
                message={'Required field. Enter the date.'}
              />
            </label>

            <label htmlFor="eye" className={styles.item}>
              <span>Eye color:</span>
              <select
                id="eye"
                aria-label="eye"
                className={cn(styles.select, {
                  [styles.errorEye]: this.state.validation.errorEye,
                })}
                ref={this.selectEyeColorRef}
              >
                {this.eye.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              {
                <ErrorMessage
                  error={this.state.validation.errorEye}
                  message={'Please select eye color.'}
                />
              }
            </label>

            <label htmlFor="age" className={styles.item}>
              <span>Age:</span>
              <Input
                id="age"
                type={'number'}
                aria-label="age"
                placeholder={'Enter age'}
                className={cn(styles.age, {
                  [styles.error]: this.state.validation.errorAge,
                })}
                ref={this.ageInputRef}
              />
              <ErrorMessage
                error={this.state.validation.errorDate}
                message={'Required field. Enter correct value.'}
              />
            </label>

            <div className={styles.options}>
              <span>Messengers:</span>
              <div
                className={cn(styles.sex, {
                  [styles.errorMessengers]: this.state.validation.errorMessengers,
                })}
              >
                {this.messengers.map((item, i) => {
                  return (
                    <label key={item} className={styles.option}>
                      <span>{item}</span>
                      <Input
                        id="check"
                        type="checkbox"
                        name="checkbox"
                        ref={this.setMessengersRef}
                        aria-label={'messengers' + i}
                        value={item}
                      />
                    </label>
                  );
                })}
              </div>
              {
                <ErrorMessage
                  error={this.state.validation.errorMessengers}
                  message={'Please select messengers.'}
                />
              }
            </div>

            <div className={styles.options}>
              <span>Gender:</span>
              <div
                className={cn(styles.sex, {
                  [styles.errorMessengers]: this.state.validation.errorGender,
                })}
              >
                {this.options.map((item, i) => {
                  return (
                    <label key={item.id} className={styles.option}>
                      <span>{item.name}</span>
                      <Input
                        id="id"
                        type="radio"
                        name="gender"
                        aria-label={'gender' + i}
                        ref={this.setRef}
                        value={item.id}
                      />
                    </label>
                  );
                })}
              </div>
              {
                <ErrorMessage
                  error={this.state.validation.errorGender}
                  message={'Please select gender.'}
                />
              }
            </div>

            <label htmlFor="imagefield" className={styles.item}>
              <span>Picture:</span>
              <Input
                type={'file'}
                accept="image/x-png,image/gif,image/jpeg,image/png"
                ref={this.imageRef}
                id={'imagefield'}
                aria-label="image"
                className={cn({
                  [styles.error]: this.state.validation.errorFile,
                })}
              />
              <ErrorMessage
                error={this.state.validation.errorFile}
                message={'Please select image.'}
              />
            </label>

            <Button type="submit" appearance="primary" className={styles.button} role="button">
              <span>Submit</span>
            </Button>
          </div>
        </form>

        <SuccessMessage
          success={this.state.isValid}
          message={'Congratulations! Your card has been successfully created.'}
        />
      </div>
    );
  }
}
