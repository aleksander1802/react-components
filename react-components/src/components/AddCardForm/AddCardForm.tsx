import { FormProps } from './AddCardForm.props';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import React, { Component, FormEvent, createRef } from 'react';
import { Htag } from '../../components/Htag/Htag';

import cn from 'classnames';

import styles from './AddCardForm.module.css';

export class AddCardForm extends Component<FormProps> {
  options = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
    { id: 3, name: 'Optimus Prime' },
  ];

  eye = ['blue', 'brown', 'green'];
  messengers = ['Telegram', 'Viber', 'WhatsApp', 'Skype', 'VK Messenger'];
  genderRefs: HTMLInputElement[] = [];
  messengersRefs: HTMLInputElement[] = [];

  setRef = (ref: HTMLInputElement) => {
    this.genderRefs.push(ref);
  };

  setMessangersRef = (ref: HTMLInputElement) => {
    this.messengersRefs.push(ref);
  };

  textInputRef = createRef<HTMLInputElement>();
  dateRef = createRef<HTMLInputElement>();
  selectEyeColorRef = createRef<HTMLSelectElement>();
  ageInputRef = createRef<HTMLInputElement>();
  genderRef = createRef<HTMLInputElement>();
  messengersInputRef = createRef<HTMLInputElement>();
  resetForm = createRef<HTMLFormElement>();

  handleClick = (): void => {
    this.genderRefs.find((item) => item.checked);
    this.messengersRefs.map((item) => console.log(item.checked === true ? item.value : null));
  };

  handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
  };

  render() {
    const { className } = this.props;
    return (
      <div className={cn(className, styles.container)}>
        <form onSubmit={(e) => this.handleSubmit(e)} className={cn(styles.form)} {...this.props}>
          <Htag tag="h2">Creating a new card form:</Htag>
          <div className={styles.wrapper}>
            <label htmlFor="name" className={styles.item}>
              <span>Name:</span>
              <Input
                required
                id="name"
                type={'text'}
                placeholder={'Enter name'}
                ref={this.textInputRef}
              />
            </label>

            <label htmlFor="date" className={styles.item}>
              <span>Birthday:</span>
              <Input required id="date" type={'date'} className={styles.date} ref={this.dateRef} />
            </label>

            <label htmlFor="eye" className={styles.item}>
              <span>Eye color:</span>
              <select id="eye" className={styles.select} ref={this.selectEyeColorRef}>
                {this.eye.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>

            <label htmlFor="age" className={styles.item}>
              <span>Age:</span>
              <Input
                required
                id="age"
                type={'number'}
                placeholder={'Enter age'}
                className={styles.age}
                ref={this.ageInputRef}
              />
            </label>

            <div className={styles.options}>
              <span>Messengers: </span>
              <div className={styles.sex}>
                {this.messengers.map((item) => {
                  return (
                    <label key={item} className={styles.option}>
                      <span>{item}</span>
                      <Input
                        id="check"
                        type="checkbox"
                        name="checkbox"
                        ref={this.setMessangersRef}
                        value={item}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div className={styles.options}>
              <span>Gender: </span>
              <div className={styles.sex}>
                {this.options.map((item) => {
                  return (
                    <label key={item.id} className={styles.option}>
                      <span>{item.name}</span>
                      <Input
                        required
                        id="id"
                        type="radio"
                        name="gender"
                        ref={this.setRef}
                        value={item.id}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <Input type={'file'} />

            <Button
              type="submit"
              appearance="primary"
              className={styles.button}
              onClick={this.handleClick}
            >
              <span>Submit</span>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
