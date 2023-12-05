const form = document.querySelector('#form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zip-code');
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#password-conf');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
