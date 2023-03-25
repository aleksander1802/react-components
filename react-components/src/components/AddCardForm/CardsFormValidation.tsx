export const nameInputValidation = (data: React.RefObject<HTMLInputElement>) => {
  if (!/^[A-Z]/.test(data.current!.value) || data.current!.value.trim().length <= 1) {
    return true;
  } else {
    return false;
  }
};

export const dateInputValidation = (data: React.RefObject<HTMLInputElement>) => {
  if (data.current?.value.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const ageInputValidation = (data: React.RefObject<HTMLInputElement>) => {
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

export const eyeInputValidation = (data: React.RefObject<HTMLSelectElement>) => {
  if (data.current?.value.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const messengersInputValidation = (data: HTMLInputElement[]) => {
  if (!data.some((item) => item.checked)) {
    return true;
  } else {
    return false;
  }
};

export const genderInputValidation = (data: HTMLInputElement[]) => {
  if (!data.some((item) => item.checked)) {
    return true;
  } else {
    return false;
  }
};

export const imageInputValidation = (data: React.RefObject<HTMLInputElement>) => {
  if (data.current?.value === '') {
    return true;
  } else {
    return false;
  }
};
