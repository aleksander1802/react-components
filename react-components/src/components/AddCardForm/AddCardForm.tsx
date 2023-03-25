import { FormProps } from './AddCardForm.props';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import React, { Component, FormEvent, createRef } from 'react';
import { Htag } from '../../components/Htag/Htag';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

import cn from 'classnames';

import styles from './AddCardForm.module.css';

export class AddCardForm extends Component<FormProps> {
  state = {
    formCardArray: [],
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

  setRef = (ref: HTMLInputElement) => {
    this.genderRefs.push(ref);
  };

  setMessengersRef = (ref: HTMLInputElement) => {
    this.messengersRefs.push(ref);
  };

  nameInputRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  selectEyeColorRef = createRef<HTMLSelectElement>();
  ageInputRef = createRef<HTMLInputElement>();
  genderRef = createRef<HTMLInputElement>();
  messengersInputRef = createRef<HTMLInputElement>();
  imageRef = createRef<HTMLInputElement>();
  resetForm = createRef<HTMLFormElement>();

  nameInputValidation = (data: React.RefObject<HTMLInputElement>) => {
    if (!/^[A-Z]/.test(data.current!.value) || data.current!.value.trim().length <= 3) {
      return true;
    } else {
      return false;
    }
  };

  dateInputValidation = (data: React.RefObject<HTMLInputElement>) => {
    if (data.current?.value.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  ageInputValidation = (data: React.RefObject<HTMLInputElement>) => {
    const ageLimit = 200;
    if (
      data.current?.value.length === 0 ||
      +data.current!.value > ageLimit ||
      +data.current!.value === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  eyeInputValidation = (data: React.RefObject<HTMLSelectElement>) => {
    if (data.current?.value.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  messengersInputValidation = (data: HTMLInputElement[]) => {
    if (!data.some((item) => item.checked)) {
      return true;
    } else {
      return false;
    }
  };

  genderInputValidation = (data: HTMLInputElement[]) => {
    if (!data.some((item) => item.checked)) {
      return true;
    } else {
      return false;
    }
  };

  imageInputValidation = (data: React.RefObject<HTMLInputElement>) => {
    if (data.current?.value === '') {
      return true;
    } else {
      return false;
    }
  };

  validationFormFields = () => {
    this.setState(
      {
        validation: {
          errorName: this.nameInputValidation(this.nameInputRef),
          errorDate: this.dateInputValidation(this.dateRef),
          errorEye: this.eyeInputValidation(this.selectEyeColorRef),
          errorAge: this.ageInputValidation(this.ageInputRef),
          errorMessengers: this.messengersInputValidation(this.messengersRefs),
          errorGender: this.genderInputValidation(this.genderRefs),
          errorFile: this.imageInputValidation(this.imageRef),
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
            },
            () => {
              this.props.setDataState(this.state.formCardArray);
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
                className={cn({
                  [styles.error]: this.state.validation.errorName,
                  [styles.errorname]: this.state.validation.errorName,
                })}
              />
            </label>

            <label htmlFor="date" className={styles.item}>
              <span>Birthday:</span>
              <Input
                id="date"
                type={'date'}
                ref={this.dateRef}
                className={cn(styles.date, {
                  [styles.error]: this.state.validation.errorDate,
                  [styles.errorDate]: this.state.validation.errorDate,
                })}
              />
            </label>

            <label htmlFor="eye" className={styles.item}>
              <span>Eye color:</span>
              <select
                id="eye"
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
              {<ErrorMessage error={this.state.validation.errorEye} message={'Required field'} />}
            </label>

            <label htmlFor="age" className={styles.item}>
              <span>Age:</span>
              <Input
                id="age"
                type={'number'}
                placeholder={'Enter age'}
                className={cn(styles.age, {
                  [styles.error]: this.state.validation.errorAge,
                  [styles.errorAge]: this.state.validation.errorAge,
                })}
                ref={this.ageInputRef}
              />
            </label>

            <div className={styles.options}>
              <span>Messengers: </span>
              <div
                className={cn(styles.sex, {
                  [styles.errorMessengers]: this.state.validation.errorMessengers,
                })}
              >
                {this.messengers.map((item) => {
                  return (
                    <label key={item} className={styles.option}>
                      <span>{item}</span>
                      <Input
                        id="check"
                        type="checkbox"
                        name="checkbox"
                        ref={this.setMessengersRef}
                        value={item}
                      />
                    </label>
                  );
                })}
              </div>
              {
                <ErrorMessage
                  error={this.state.validation.errorMessengers}
                  message={'Required field'}
                />
              }
            </div>

            <div className={styles.options}>
              <span>Gender: </span>
              <div
                className={cn(styles.sex, {
                  [styles.errorMessengers]: this.state.validation.errorGender,
                })}
              >
                {this.options.map((item) => {
                  return (
                    <label key={item.id} className={styles.option}>
                      <span>{item.name}</span>
                      <Input id="id" type="radio" name="gender" ref={this.setRef} value={item.id} />
                    </label>
                  );
                })}
              </div>
              {
                <ErrorMessage
                  error={this.state.validation.errorGender}
                  message={'Required field'}
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
                className={cn({
                  [styles.error]: this.state.validation.errorFile,
                })}
              />
              <ErrorMessage error={this.state.validation.errorFile} message={'Required field'} />
            </label>

            <Button type="submit" appearance="primary" className={styles.button}>
              <span>Submit</span>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
