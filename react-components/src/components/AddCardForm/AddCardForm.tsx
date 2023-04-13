import { FormFields } from './AddCardForm.props';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Htag } from '../../components/Htag/Htag';
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormCard } from './AddCardForm.props';
import { Select } from '../../components/Select/Select';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import cn from 'classnames';
import styles from './AddCardForm.module.css';
import { setForm } from '../../components/CardsEspeciallyForForm/formSlice';
import { useAppDispatch } from '../../hooks/dispatch.hook';

export const AddCardForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({ reValidateMode: 'onSubmit' });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const options = ['Male', 'Female', 'Optimus Prime'];
  const eye = ['blue', 'brown', 'green'];
  const messengers = ['Telegram', 'Viber', 'WhatsApp', 'Skype', 'VK Messenger'];
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormFields) => {
    const validData: FormCard = {
      name: data.name,
      date: data.date,
      eye: data.eye,
      age: data.age,
      messengers: data.messengers,
      gender: data.gender,
      image: URL.createObjectURL(data.image[0]),
    };
    dispatch(setForm(validData));

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
    reset();
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
              aria-label="name"
              error={errors.name}
              {...register('name', {
                required: {
                  value: true,
                  message: 'Required field.',
                },
                minLength: {
                  value: 2,
                  message: 'Must be at least 2 characters in length.',
                },
                pattern: { value: /^[A-Z]/, message: 'The first letter must be uppercase.' },
              })}
            />
            {errors.name && <ErrorMessage error={errors.name} data-testid="name-input" />}
          </label>

          <label htmlFor="date" className={styles.item}>
            <span>Birthday:</span>
            <Input
              id="date"
              type={'date'}
              aria-label="date"
              className={styles.date}
              error={errors.date}
              {...register('date', {
                required: {
                  value: true,
                  message: 'Required field. Enter the full date.',
                },
              })}
            />
            {errors.date && <ErrorMessage error={errors.date} />}
          </label>

          <label htmlFor="eye" className={styles.item}>
            <span>Eye color:</span>
            <Select
              register={register}
              options={eye}
              label={'eye'}
              aria-label="eye"
              error={errors.eye}
              errorMesage={'Please select an eye color.'}
            />
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
                pattern: {
                  value: /^[1-9][0-9]?$|^100$/,
                  message: 'The value should be between 1 and 100.',
                },
              })}
            />
            {errors.age && <ErrorMessage error={errors.age} />}
          </label>

          <div className={styles.options}>
            <span>Messengers:</span>
            <div
              className={cn(styles.sex, {
                [styles.error]: errors.messengers,
              })}
            >
              {messengers.map((item, i) => {
                return (
                  <label key={i} className={styles.option}>
                    <span>{item}</span>
                    <Input
                      id="check"
                      type="checkbox"
                      aria-label={'messengers' + i}
                      value={item}
                      {...register(`messengers`, {
                        required: {
                          value: true,
                          message: 'Please select one or several messengers.',
                        },
                      })}
                    />
                  </label>
                );
              })}
              {errors.messengers && <ErrorMessage error={errors.messengers} />}
            </div>
          </div>

          <div className={styles.options}>
            <span>Gender:</span>
            <div
              className={cn(styles.sex, {
                [styles.error]: errors.gender,
              })}
            >
              {options.map((item, i) => {
                return (
                  <label key={i} className={styles.option}>
                    <span>{item}</span>
                    <Input
                      type="radio"
                      aria-label={'gender' + i}
                      value={item}
                      error={errors.gender}
                      {...register('gender', {
                        required: {
                          value: true,
                          message: 'Please select gender.',
                        },
                      })}
                    />
                    {errors.gender && <ErrorMessage error={errors.gender} />}
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
              aria-label="image"
              error={errors.image}
              {...register('image', {
                required: {
                  value: true,
                  message: 'Required field. Please select an image.',
                },
              })}
            />
            {errors.image && <ErrorMessage error={errors.image} />}
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
