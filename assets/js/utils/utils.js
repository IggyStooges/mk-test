export const isEveryTrue = (element) => {
  return element === true;
};

export const removeCurrentErrors = (currentErrors) => {
  for (const error of currentErrors) {
    error.remove();
  }
};

export const addErrorElement = (field, container, errorText, errorId) => {
  container.insertAdjacentHTML(
    `beforeend`,
    `<span class="form__error" id="${errorId}"> ${errorText} </span>`
  );
  field.classList.add(`error`);
  field.setCustomValidity(errorText);
};

export const deleteErrorsMark = (field) => {
  field.setCustomValidity(``);
};

export const markSuccessPasswordListElement = (element) => {
  element.classList.add(`success`);
  element.classList.remove(`error`);
  return true;
};

export const markErrorPasswordListElement = (element) => {
  element.classList.remove(`success`);
  element.classList.add(`error`);
};
