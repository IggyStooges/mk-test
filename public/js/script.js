!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){t(2),e.exports=t(1)},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var n={NICKNAME:{ALL:/^[a-zA-Z0-9_]+$/i,FIRST_LETTER:/^[a-zA-Z]+$/i},EMAIL:/^[a-zA-Z0-9._]+[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/,PASSWORD:/^[A-z0-9\!.=_]+$/},o={length:"Никнейм должен содержать не менее 3 и не более 40 символов.",symbols:"Никнейм должен содержать только латинские буквы, цифры и символ подчеркивания.",firstLetter:"Никнейм может начинаться только с буквы."},i="E-mail должен быть валидным адресом электронной почты.",a={equal:"Пароль не должен совпадать с ником или почтовым адресом",symbols:"Пароль должен содержать только латинские буквы, цифры и символы !.=_"},u="Введённые пароли не совпадают",l=document.querySelector(".registration__form"),s=document.querySelector(".registration__open-form-btn"),c=l.querySelector(".form__close-btn"),f=function(){l.classList.add("form--opened"),s.classList.add("visually-hidden")},d=function(){l.classList.add("form--closed"),setTimeout((function(){l.classList.remove("form--opened","form--closed"),s.classList.remove("visually-hidden")}),300),v.classList.remove("form__container-wrap--next-step");var e=l.querySelectorAll(".form__password-required-list li"),r=l.querySelectorAll(".form__error"),t=l.querySelectorAll(".form__input");e.forEach((function(e){e.classList.remove("error","success")})),r.length&&r.forEach((function(e){e.remove()})),t.length&&t((function(e){e.classList.remove("error")})),l.reset()},m=l.querySelector(".form__next-step-btn"),v=l.querySelector(".form__container-wrap"),y=function(){v.classList.add("form__container-wrap--next-step")};function p(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var S=function(e){return!0===e},g=function(e){var r,t=p(e);try{for(t.s();!(r=t.n()).done;){r.value.remove()}}catch(e){t.e(e)}finally{t.f()}},_=function(e,r,t,n){r.insertAdjacentHTML("beforeend",'<span class="form__error" id="'.concat(n,'"> ').concat(t," </span>")),e.classList.add("error"),e.setCustomValidity(t)},L=function(e){e.setCustomValidity("")},h=function(e){return e.classList.add("success"),e.classList.remove("error"),!0},A=function(e){e.classList.remove("success"),e.classList.add("error")};function q(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return E(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==t.return||t.return()}finally{if(u)throw i}}}}function E(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var j=l.querySelector("#nickname"),O=l.querySelector("#email"),k=j.parentNode,x=O.parentNode,I={nickname:!1,email:!1,password:!1,confirmation:!1,agreement:!1},M=function(e){return e.length<3||e.length>40},T=function(e){return!n.NICKNAME.ALL.test(e)},N=function(e){return!n.NICKNAME.FIRST_LETTER.test(e[0])},P=function(e){return M(e)?(_(j,k,o.length,"nick-length-error"),j.classList.add("error"),!1):(L(j),!0)},z=function(e){return T(e)?(_(j,k,o.symbols,"nick-symbols-error"),!1):(L(j),!0)},C=function(e){return N(e)?(_(j,k,o.firstLetter,"nick-first-letter-error"),!1):(L(j),!0)},Z=function(){var e=j.value,r=k.querySelector("#nick-length-error"),t=k.querySelector("#nick-symbols-error"),n=k.querySelector("#nick-first-letter-error");r&&!M(e)&&r.remove(),t&&!T(e)&&t.remove(),n&&!N(e)&&n.remove()},R=function(e){return!n.EMAIL.test(e)},$=function(){var e=j.value,r=k.querySelector("#email-error");r&&!R(e)&&r.remove()},D=l.querySelector("#password"),F=D.parentNode,K=l.querySelector(".form__password-required-list"),U=K.querySelector('li[data-password-validate="length"]'),V=K.querySelector('li[data-password-validate="number"]'),W=K.querySelector('li[data-password-validate="register"]'),H=!1,J=!1,B=!1,G=!1,Q=function(e){if(!(e.length>=6))return H&&A(U),!1;H=!0,h(U)},X=function(e){if(!e.match(/[0-9]/g))return J&&A(V),!1;J=!0,h(V)},Y=function(e){if(!e.match(/[A-Z]/g))return B&&A(W),!1;B=!0,h(W)},ee=function(){var e=D.value;if(ne(e),!G){if(e.length<2)return;G=!0}var r=[X(e),Q(e),Y(e)];!!r.every(S)},re=function(e){if(!(e.length&&e===j.value||e===O.value)){var r=F.querySelectorAll(".form__error");return r&&g(r),L(D),!0}_(D,F,a.equal,"password-equal-error")},te=function(e){return n.PASSWORD.test(e)||_(D,F,a.symbols,"password-symbol-error"),!0},ne=function(e){var r=F.querySelector("#password-equal-error"),t=F.querySelector("#password-symbol-error");r&&!re(e)&&r.remove(),t&&!te(e)&&t.remove()},oe=l.querySelector("#password-confirmation"),ie=oe.parentNode,ae=function(){var e=oe.value,r=ie.querySelector(".form__error");r&&r.remove(),e===D.value?(I.confirmation=!0,L(oe),oe.classList.remove("error")):(I.confirmation=!1,_(oe,ie,u,"passwod-confiramtion-error"))},ue=function(){var e,r;e=D.value,(r=F.querySelectorAll(".form__error"))&&g(r),[te(e),re(e)].every(S)?(I.password=!0,D.classList.remove("error")):(I.password=!1,D.classList.add("error")),ae()},le=l.querySelector("#agreement"),se=function(){le.checked?(le.classList.remove("error"),I.agreement=!0):(le.classList.add("error"),I.agreement=!1)};s.addEventListener("click",f),c.addEventListener("click",d),m.addEventListener("click",y),j.addEventListener("change",(function(){var e,r;e=j.value,(r=k.querySelectorAll(".form__error"))&&g(r),[P(e),z(e),C(e)].every(S)?(I.nickname=!0,j.classList.remove("error")):I.nickname=!1,G&&re(D.value)})),j.addEventListener("input",Z),O.addEventListener("change",(function(){!function(){var e=O.value,r=x.querySelectorAll(".form__error");if(r&&g(r),R(e))return I.email=!1,void _(O,x,i,"email-error");L(O),O.classList.remove("error"),I.email=!0}(),G&&re(D.value)})),O.addEventListener("input",$),D.addEventListener("input",ee),D.addEventListener("change",ue),oe.addEventListener("change",ae),oe.addEventListener("input",ae),le.addEventListener("change",se),l.addEventListener("change",(function(){Object.values(I).every(S)?l.querySelector(".form__next-step-btn").removeAttribute("disabled"):l.querySelector(".form__next-step-btn").setAttribute("disabled","disabled")})),l.addEventListener("submit",(function(e){e.preventDefault();var r,t=[],n=w(new FormData(l).entries());try{for(n.s();!(r=n.n()).done;){var o=r.value,i="".concat(o[0]);t.push(q({},i,o[1]))}}catch(e){n.e(e)}finally{n.f()}l.classList.remove("form--opened"),s.classList.remove("visually-hidden"),s.setAttribute("disabled","disabled"),console.log(JSON.stringify(t))}))}]);