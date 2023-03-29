import { FormProps } from './AddCardForm.props';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Htag } from '../../components/Htag/Htag';
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ValidFields } from './AddCardForm.props';

import cn from 'classnames';

import styles from './AddCardForm.module.css';
import classNames from 'classnames';

export const AddCardForm = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidFields>();

  const { setDataState } = props;

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const options = [{ name: 'Male' }, { name: 'Female' }, { name: 'Optimus Prime' }];

  const eye = ['', 'blue', 'brown', 'green'];
  const messengers = ['Telegram', 'Viber', 'WhatsApp', 'Skype', 'VK Messenger'];

  const onSubmit = (data: ValidFields) => {
    console.log(data);
    setDataState(data);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div className={cn(styles.container)}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.form)}>
        <Htag tag="h2">Form for creating a new card:</Htag>
        <div className={styles.wrapper}>
          <label htmlFor="name" className={styles.item}>
            <span>Name:</span>
            <Input
              id="name"
              type={'text'}
              placeholder={'Enter name'}
              error={errors.name}
              {...register('name', {
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 characters in length.',
                },
                required: {
                  value: true,
                  message: 'Required field',
                },
              })}
            />
          </label>

          <label htmlFor="date" className={styles.item}>
            <span>Birthday:</span>
            <Input
              id="date"
              type={'date'}
              aria-label="date"
              {...register('date', {
                required: {
                  value: true,
                  message: 'Required field. Enter the date.',
                },
              })}
              className={styles.date}
              error={errors.date}
            />
          </label>

          <label htmlFor="eye" className={styles.item}>
            <span>Eye color:</span>
            <select
              id="eye"
              aria-label="eye"
              className={cn(styles.select, {
                [styles.errorEye]: errors.eye,
              })}
              {...register('eye')}
            >
              {eye.map((item) => {
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
              id="age"
              type={'number'}
              aria-label="age"
              placeholder={'Enter age'}
              error={errors.age}
              {...register('age', {
                required: {
                  value: true,
                  message: 'Required field. Enter correct value.',
                },
              })}
            />
          </label>

          <div className={styles.options}>
            <span>Messengers:</span>
            <div
              className={cn(styles.sex, {
                [styles.errorMessengers]: errors.messengers,
              })}
            >
              {messengers.map((item, i) => {
                return (
                  <label key={item} className={styles.option}>
                    <span>{item}</span>
                    <Input
                      id="check"
                      type="checkbox"
                      {...register('messengers')}
                      aria-label={'messengers' + i}
                      value={item}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.options}>
            <span>Gender:</span>
            <div
              className={cn(styles.sex, {
                [styles.errorMessengers]: errors.gender,
              })}
            >
              {options.map((item, i) => {
                return (
                  <label key={item.name} className={styles.option}>
                    <span>{item.name}</span>
                    <Input
                      id="id"
                      type="radio"
                      aria-label={'gender' + i}
                      {...register('gender')}
                      value={item.name}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          <label htmlFor="imagefield" className={styles.item}>
            <span>Picture:</span>
            <Input
              type={'file'}
              accept="image/x-png,image/gif,image/jpeg,image/png"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Required field. Please select an image.',
                },
              })}
              id={'imagefield'}
              aria-label="image"
              name="image"
              error={errors.image}
            />
          </label>

          <Button type="submit" appearance="primary" className={styles.button} role="button">
            <span>Submit</span>
          </Button>
        </div>
      </form>

      <SuccessMessage
        success={isSuccess}
        message={'Congratulations! Your card has been successfully created.'}
      />
    </div>
  );
};
