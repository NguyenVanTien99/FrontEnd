
const REGEX_CREDIT_CARD = /^\d{16}$|^\d{4}[- ]\d{4}[- ]\d{4}[- ]\d{4}$/;
const REGEX_IS_NUMBER = /^\d+$/;
const REGEX_IS_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_IS_URL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const REGEX_ONLY_NUMBER_AND_CHARACTER = /^[a-zA-Z0-9]*$/;


console.log(REGEX_ONLY_NUMBER_AND_CHARACTER.test("SADA.S"));
