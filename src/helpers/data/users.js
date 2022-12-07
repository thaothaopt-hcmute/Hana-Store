import {GENDER, USER_ROLE} from 'constants/appConstants';

export const USERS = [
  {
    id: 'P1234503',
    full_name: 'Le Thuy Linh',
    first_name: 'Linh',
    role: USER_ROLE.EMP,
    staffID: 'P1234503',
    gender: GENDER.FEMALE,
    image: '',
    salaryUnit: 1, // $/h
  },
  {
    id: 'P1234502',
    full_name: 'Nguyen Hoang An',
    first_name: 'An',
    role: USER_ROLE.EMP,
    staffID: 'P1234502',
    image: '',
    gender: GENDER.MALE,

    salaryUnit: 1, // $/h
  },
  {
    id: 'P1234501',
    full_name: 'Pham Hoang Thi',
    first_name: 'Thi',
    role: USER_ROLE.MANAGE,
    staffID: 'P1234501',
    gender: GENDER.FEMALE,

    image: '',
  },
];
