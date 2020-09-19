import {form, openedFormBtn} from "./display-form.js";
import {
  RegExps, 
  ErrorTexts, 
  MIN_LENGTH_NICKNAME, 
  MAX_LENGTH_NICKNAME, 
  MIN_LENGTH_PASSWORD, 
  MIN_LENGTH_CHECK_PASSWORD } from "../utils/const.js";
import {isEveryTrue, 
  removeCurrentErrors, 
  addErrorElement, 
  deleteErrorsMark,
  markSuccessPasswordListElement, 
  markErrorPasswordListElement
} from "../utils/utils.js"

const nickNameField = form.querySelector(`#nickname`);
const emailField = form.querySelector(`#email`);
const nickNameContainer = nickNameField.parentNode;
const emailContainer = emailField.parentNode;

const validityList = {
  nickname: false,
  email: false,
  password: false,
  confirmation: false,
  agreement: false
};

const isNickNameTrueLength = (inputValue) => {
  return inputValue.length < MIN_LENGTH_NICKNAME || inputValue.length > MAX_LENGTH_NICKNAME
}

const isNickNameTrueSymbols = (inputValue) => {
  return !RegExps.NICKNAME.ALL.test(inputValue);
}
const isNickNameFirstLetter = (inputValue) => {
  return !RegExps.NICKNAME.FIRST_LETTER.test(inputValue[0]);
}

const checkNicknameLength = (inputValue) => {
  if (isNickNameTrueLength(inputValue)) {
    addErrorElement(nickNameField, nickNameContainer, ErrorTexts.nickname.length, `nick-length-error`);
    nickNameField.classList.add(`error`);
    return false;
  }
  
  deleteErrorsMark(nickNameField);
  return true;
}

const checkNicknameTrueSymbols = (inputValue) => {
  if (isNickNameTrueSymbols(inputValue)) {
    addErrorElement(nickNameField, nickNameContainer, ErrorTexts.nickname.symbols, `nick-symbols-error`);
    return false;
  }

  deleteErrorsMark(nickNameField);
  return true;
}

const checkNickNameFirstLetter = (inputValue) => {
  if (isNickNameFirstLetter(inputValue)) {
    addErrorElement(nickNameField, nickNameContainer, ErrorTexts.nickname.firstLetter, `nick-first-letter-error`);
    return false;
  }

  deleteErrorsMark(nickNameField);
  return true;
}

const addErrorsForNickname = () => {
  const inputValue = nickNameField.value;

  const currentErrors = nickNameContainer.querySelectorAll(`.form__error`);

  if (currentErrors) {
    removeCurrentErrors(currentErrors);
  }

  const nickNameChecks = [checkNicknameLength(inputValue), checkNicknameTrueSymbols(inputValue), checkNickNameFirstLetter(inputValue)];

  if (nickNameChecks.every(isEveryTrue)) {
    validityList.nickname = true;
    nickNameField.classList.remove(`error`);
  } else {
    validityList.nickname = false;
  }
}

const removeErrorsForNickname = () => {
  const inputValue = nickNameField.value;

  const lengthErrorElement = nickNameContainer.querySelector(`#nick-length-error`);
  const symbolsErrorElement = nickNameContainer.querySelector(`#nick-symbols-error`);
  const firstLetterErrorElement = nickNameContainer.querySelector(`#nick-first-letter-error`);

  if (lengthErrorElement && !isNickNameTrueLength(inputValue)) {
    lengthErrorElement.remove();
  }

  if (symbolsErrorElement && !isNickNameTrueSymbols(inputValue)) {
    symbolsErrorElement.remove();
  }

  if (firstLetterErrorElement && !isNickNameFirstLetter(inputValue)) {
    firstLetterErrorElement.remove();
  }
}

// Email

const isEmailTrueAdress = (inputValue) => {
  return !RegExps.EMAIL.test(inputValue)
}

const addErrorsForEmail = () => {
  const inputValue = emailField.value;
  const currentErrors = emailContainer.querySelectorAll(`.form__error`);

  if (currentErrors) {
    removeCurrentErrors(currentErrors);
  }

  if (isEmailTrueAdress(inputValue)) {
    validityList.email = false;
    addErrorElement(emailField, emailContainer, ErrorTexts.email, `email-error`);
    return;
  }

  deleteErrorsMark(emailField);
  emailField.classList.remove(`error`);

  validityList.email = true;
}

const removeErrorsForEmail = () => {
  const inputValue = nickNameField.value;

  const emailErrorElement = nickNameContainer.querySelector(`#email-error`);

  if (emailErrorElement && !isEmailTrueAdress(inputValue)) {
    emailErrorElement.remove();
  }
}

const passwordField = form.querySelector(`#password`);
const passwordInputContainer = passwordField.parentNode;

const passwordRequirementList = form.querySelector(`.form__password-required-list`);
const requiredPasswordLengthElement = passwordRequirementList.querySelector(`li[data-password-validate="length"]`);
const requiredPasswordNumberElement = passwordRequirementList.querySelector(`li[data-password-validate="number"]`);
const requiredPasswordRegisterElement = passwordRequirementList.querySelector(`li[data-password-validate="register"]`);
let isPasswordWillMoreMinLength = false;
let isPasswordWillHasnumber = false;
let isPasswordWillHighRegister = false;
let isPasswordHasInput = false;
let isPasswordInputValid = false;

const checkPasswordLength = (inputValue) => {
  if (inputValue.length >= MIN_LENGTH_PASSWORD) {
    isPasswordWillMoreMinLength = true;
    markSuccessPasswordListElement(requiredPasswordLengthElement);
    return true;
  }
  else {
    if (isPasswordWillMoreMinLength) {
      markErrorPasswordListElement(requiredPasswordLengthElement);
    }
    return false;
  }
}

const checkPasswordHasnumber = (inputValue) => {
  if (inputValue.match(/[0-9]/g)) {
    isPasswordWillHasnumber = true;
    markSuccessPasswordListElement(requiredPasswordNumberElement);
    return true;
  }
  else {
    if (isPasswordWillHasnumber) {
      markErrorPasswordListElement(requiredPasswordNumberElement);
    }
    return false;
  }
}

const checkPasswordRegister = (inputValue) => {
  if (inputValue.match(/[A-Z]/g)) {
    isPasswordWillHighRegister = true;
    markSuccessPasswordListElement(requiredPasswordRegisterElement);
    return true;
  }
  else {
    if (isPasswordWillHighRegister) {
      markErrorPasswordListElement(requiredPasswordRegisterElement);
    }
    return false;
  }
}

const passwordInputHandler = () => {
  const inputValue = passwordField.value;
  removePasswordErrors(inputValue);

  if (!isPasswordHasInput) {
    if (inputValue.length < MIN_LENGTH_CHECK_PASSWORD) {
      return
    } else {
      isPasswordHasInput = true;
    }
  }

  const passwordChecks = [checkPasswordHasnumber(inputValue), checkPasswordLength(inputValue), checkPasswordRegister(inputValue)];

  if (passwordChecks.every(isEveryTrue)) {
    console.log(checkPasswordHasnumber(inputValue))
    isPasswordInputValid = true;
  } else {
    console.log(passwordChecks.every(isEveryTrue))

    isPasswordInputValid = false;
  }
}

const isPasswordEqualAnotherField = (inputValue) => {
  removePasswordErrors(inputValue);

  if (inputValue.length && inputValue === nickNameField.value || inputValue === emailField.value) {
    addErrorElement(passwordField, passwordInputContainer, ErrorTexts.password.equal, `password-equal-error`);
    return false;
  } else {
    return true;
  }

}

const isPasswordTrueSymbols = (inputValue) => {
  if (inputValue.length && !RegExps.PASSWORD.test(inputValue)) {
    addErrorElement(passwordField, passwordInputContainer, ErrorTexts.password.symbols, `password-symbol-error`);
    return
  }
  return true;
}

const passwordChangeHandler = () => {
  const inputValue = passwordField.value;

  const currentErrors = passwordInputContainer.querySelectorAll(`.form__error`);

  if (currentErrors) {
    removeCurrentErrors(currentErrors);
  }

  const passwordChecks = [isPasswordTrueSymbols(inputValue), isPasswordEqualAnotherField(inputValue)]

  if (passwordChecks.every(isEveryTrue) && isPasswordInputValid) {
    validityList.password = true;
    passwordField.classList.remove(`error`);
    deleteErrorsMark(passwordField);
  } else {
    validityList.password = false;
    passwordField.classList.add(`error`);
  }
}

const removePasswordErrors = (inputValue) => {
  const equalErrorElement = passwordInputContainer.querySelector(`#password-equal-error`);
  const symbolsErrorElement = passwordInputContainer.querySelector(`#password-symbol-error`);

  if (equalErrorElement && !isPasswordEqualAnotherField(inputValue)) {
    equalErrorElement.remove();
  }

  if (symbolsErrorElement && !isPasswordTrueSymbols(inputValue)) {
    symbolsErrorElement.remove();
  }
}

const passwordConfirmationField = form.querySelector(`#password-confirmation`);
const passwordConfirmationContainer = passwordConfirmationField.parentNode;

const passwordConfirmationChangehandler = () => {
  const inputValue = passwordConfirmationField.value;

  const error = passwordConfirmationContainer.querySelector(`.form__error`);

  if (error) {
    error.remove();
  }

  if (inputValue === passwordField.value) {
    validityList.confirmation = true;
    deleteErrorsMark(passwordConfirmationField);
    passwordConfirmationField.classList.remove(`error`);
  } else {
    validityList.confirmation = false;
    addErrorElement(passwordConfirmationField, passwordConfirmationContainer, ErrorTexts.PASSWORD_CONFIRMATION, `passwod-confiramtion-error`)
  }
}

const passwordFieldsChangeHandler = () => {
  passwordChangeHandler();
  passwordConfirmationChangehandler();
}

const agreementCheckbox = form.querySelector(`#agreement`);

const agreementChangehandler = () => {
  if (agreementCheckbox.checked) {
    agreementCheckbox.classList.remove(`error`);
    validityList.agreement = true;
  } else {
    agreementCheckbox.classList.add(`error`);
    validityList.agreement = false;
  }
}

export default function validateForm() {
  nickNameField.addEventListener(`change`, () => {
    addErrorsForNickname();
    if(isPasswordHasInput) {
      isPasswordEqualAnotherField(passwordField.value);
    }
  });
  nickNameField.addEventListener(`input`, removeErrorsForNickname);
  emailField.addEventListener(`change`, () => {
    addErrorsForEmail();
    if(isPasswordHasInput) {
      isPasswordEqualAnotherField(passwordField.value);
    }
  });
  emailField.addEventListener(`input`, removeErrorsForEmail);

  passwordField.addEventListener(`input`, passwordInputHandler);
  passwordField.addEventListener(`change`, passwordFieldsChangeHandler);

  passwordConfirmationField.addEventListener(`change`, passwordConfirmationChangehandler);
  passwordConfirmationField.addEventListener(`input`, passwordConfirmationChangehandler);

  agreementCheckbox.addEventListener(`change`, agreementChangehandler);


  form.addEventListener(`change`, () => {
    const validityListValues = Object.values(validityList);

    if (validityListValues.every(isEveryTrue)) {
      form.querySelector(`.form__next-step-btn`).removeAttribute(`disabled`)
    } else {
      form.querySelector(`.form__next-step-btn`).setAttribute(`disabled`, `disabled`)
    }
  });

  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const entires = formData.entries();
    let adaptedFormData = [];

    for (const input of entires) {
      const key = `${input[0]}`;

      adaptedFormData.push({
        [key]: input[1]}
      );
    }
    form.classList.remove(`form--opened`);
    openedFormBtn.classList.remove(`visually-hidden`);
    openedFormBtn.setAttribute(`disabled`, `disabled`);
    
    console.log(JSON.stringify(adaptedFormData));
  });
}