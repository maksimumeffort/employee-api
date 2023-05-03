import * as yup from "yup";

const thisYear = +new Date().toString().split(" ")[3];

// phone number can start with 0, or with 3/2 and so on.
const phoneRegExp = /^0?[2,3,4,7,8][0-9]{8}$/;

export const FormSchema = yup.object().shape({
  name: yup.string().required(),
  middleName: yup.string().optional(),
  lastName: yup.string().required(),
  contractType: yup.string().required(),
  workType: yup.string().required(),
  startDay: yup.string().required(),
  startMonth: yup.string().required(),
  startYear: yup.string().required(),
  finalDay: yup.string().optional(),
  finalMonth: yup.string().optional(),
  finalYear: yup.string().optional(),
  isOngoing: yup.boolean().required(),
  email: yup.string().email().required(),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  // not sure if that is all validation required for address
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
