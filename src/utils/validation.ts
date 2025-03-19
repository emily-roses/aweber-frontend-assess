export enum ValidationErrors {
  LengthError,
  UppercaseError,
  LowercaseError,
  NumberError,
  SpecialError,
  MatchError,
}

export const isValidPassword = (
  password: string
): true | Set<ValidationErrors> => {
  const errors: Set<ValidationErrors> = new Set();
  const passwordCharSet = new Set(password.split(""));

  if (!isLongerThan(password)) errors.add(ValidationErrors.LengthError);
  if (passwordCharSet.intersection(uppercaseSet).size === 0)
    errors.add(ValidationErrors.UppercaseError);
  if (passwordCharSet.intersection(lowercaseSet).size === 0)
    errors.add(ValidationErrors.LowercaseError);
  if (passwordCharSet.intersection(digitSet).size === 0)
    errors.add(ValidationErrors.NumberError);
  if (passwordCharSet.intersection(specialSet).size === 0)
    errors.add(ValidationErrors.SpecialError);

  if (errors.size > 0) return errors;
  return true;
};

export const isMatching = (string1: string, string2: string) =>
  string1 === string2;

const isLongerThan = (testString: string, minCharacters = 6) => {
  return testString.length >= minCharacters;
};

const uppercaseSet = new Set([
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const);

const lowercaseSet = new Set([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const);

const digitSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

const specialSet = new Set([
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  '"',
  "'",
  "<",
  ",",
  ">",
  ".",
]);
