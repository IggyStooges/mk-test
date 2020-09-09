export const MIN_LENGTH_NICKNAME = 3;
export const MAX_LENGTH_NICKNAME = 40;
export const MIN_LENGTH_PASSWORD = 6;
export const MIN_LENGTH_CHECK_PASSWORD = 2;
export const ANIMATION_DURATION = 300;

export const RegExps = {
  NICKNAME: {
    ALL: /^[a-zA-Z0-9_]+$/i,
    FIRST_LETTER: /^[a-zA-Z]+$/i,
  },
  EMAIL: /^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,
  PASSWORD: /^[A-z0-9\!.=_]+$/
};

export const ErrorTexts = {
  nickname: {
    length: `Никнейм должен содержать не менее 3 и не более 40 символов.`,
    symbols: `Никнейм должен содержать только латинские буквы, цифры и символ подчеркивания.`,
    firstLetter: `Никнейм может начинаться только с буквы.`
  },
  email: `E-mail должен быть валидным адресом электронной почты.`,
  password: {
    equal: `Никнейм не должен совпадать с ником или почтовым адресом`,
    symbols: `Никнейм должен содержать только латинские буквы, цифры и символы !.=_`
  },
  PASSWORD_CONFIRMATION: `Введённые пароли не совпадают`
}