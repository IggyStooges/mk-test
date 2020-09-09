import {ANIMATION_DURATION} from "../utils/const.js";

export const form = document.querySelector(`.registration__form`);

export const openedFormBtn = document.querySelector(`.registration__open-form-btn`);
const closeBtn = form.querySelector(`.form__close-btn`);

const openedFormBtnClickHandler = () => {
  form.classList.add(`form--opened`);
  openedFormBtn.classList.add(`visually-hidden`);
};

const closeBtnClickHandler = () => {
  form.classList.add(`form--closed`);
  setTimeout(() => {
    form.classList.remove(`form--opened`, `form--closed`);
    openedFormBtn.classList.remove(`visually-hidden`);

  }, ANIMATION_DURATION);

  formContainer.classList.remove(`form__container-wrap--next-step`);

  const passwordsrequiredElements = form.querySelectorAll(`.form__password-required-list li`);

  const errorElements = form.querySelectorAll(`.form__error`);

  passwordsrequiredElements.forEach(element => {
    element.classList.remove(`error`, `success`);
  });

  if (errorElements.length) {
    errorElements.forEach(element => {
      element.remove();
    });
  }

  form.reset();
};

const nextStepBtn = form.querySelector(`.form__next-step-btn`);

const formContainer = form.querySelector(`.form__container-wrap`);

const nextStepBtnClickHandler = () => {
  formContainer.classList.add(`form__container-wrap--next-step`);
}

export default function displayForm() {
  openedFormBtn.addEventListener(`click`, openedFormBtnClickHandler);
  closeBtn.addEventListener(`click`, closeBtnClickHandler);
  nextStepBtn.addEventListener(`click`, nextStepBtnClickHandler);
};