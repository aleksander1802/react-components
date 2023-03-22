import { FormProps } from './AddCardForm.props';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import React, { Component, FormEvent, createRef } from 'react';

import cn from 'classnames';

import styles from './AddCardForm.module.css';

export class AddCardForm extends Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  selectSexOptions: string[] = ['Male', 'Female', 'Optimus Prime'];

  textInputRef = createRef<HTMLInputElement>();

  handleClick() {
    console.log(this.textInputRef.current?.value);
  }

  handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  render() {
    const { className } = this.props;
    return (
      <div className={cn(className, styles.formWrapper)}>
        <form onSubmit={(e) => this.handleSubmit(e)} className={cn(styles.form)} {...this.props}>
          Create new card form:
          <label htmlFor="name">
            First name:
            <Input
              required
              id="name"
              type={'text'}
              placeholder={'Enter name'}
              ref={this.textInputRef}
            />
          </label>
          <label htmlFor="lastName">
            Last Name:
            <Input required id="lastName" type={'text'} placeholder={'Enter last name'} />
          </label>
          <label htmlFor="age">
            Age:
            <Input
              required
              id="age"
              type={'number'}
              placeholder={'Enter age'}
              className={styles.age}
            />
          </label>
          <label htmlFor="sex">
            Sex:
            <select id="sex">
              {this.selectSexOptions.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </label>
          <Input name="exampleInput" type={'test'} />
          <Input type={'radio'} />
          <Input type={'file'} />
          <Button
            type="submit"
            appearance="primary"
            className={styles.button}
            onClick={this.handleClick}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
