import * as yup from "yup";

const thisYear = +new Date().toString().split(" ")[3];
const range = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys()).map((x) => x + start);

// phone number can start with 0, or with 3/2 and so on.
const phoneRegExp = /^0?[2,3,4,7,8][0-9]{8}$/;
// valid days array
const dayRange = Array.from(Array(31).keys()).map((x) => x + 1);
const validDays = dayRange.map((x) => {
  return x > 9 ? `${x}` : `0${x}`;
});
// valid months array
const monthRange = Array.from(Array(12).keys()).map((x) => x + 1);
const validMonths = monthRange.map((x) => {
  return x > 9 ? `${x}` : `0${x}`;
});

// valid years array
const yearRange = range(thisYear - 100, thisYear);
const validYears = yearRange.map((x) => `${x}`);

// address validation using addressr (if code is 200 allow to proceed)
// https://addressr.io/api-docs

export const FormSchema = yup.object().shape({
  name: yup.string().required(),
  middleName: yup.string().optional(),
  lastName: yup.string().required(),
  contractType: yup.string().required(),
  workType: yup.string().required(),
  startDay: yup.string().required().oneOf(validDays),
  startMonth: yup.string().required().oneOf(validMonths),
  startYear: yup.string().required().oneOf(validYears),
  finalDay: yup.string().optional().oneOf(validDays),
  finalMonth: yup.string().optional().oneOf(validMonths),
  finalYear: yup.string().optional().oneOf(validYears),
  isOngoing: yup.boolean().required(),
  email: yup.string().email().required(),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  // insert checker for the 200 code for address
  address: yup.string(),
  hoursPerWeek: yup
    .number()
    .min(1)
    .max(24 * 7)
    .required(),
});

export type FormInputs = {
  name: string;
  middleName: string;
  lastName: string;
  contractType: string;
  workType: string;
  startDay: string | null;
  startMonth: string | null;
  startYear: string | null;
  finishDay: string | null;
  finishMonth: string | null;
  finishYear: string | null;
  isOngoing: boolean;
  email: string;
  mobile: string;
  address: string;
  hoursPerWeek: number;
  exampleRequired: string;
};
