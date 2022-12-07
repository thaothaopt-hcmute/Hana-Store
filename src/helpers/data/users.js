import {GENDER, USER_ROLE} from 'constants/appConstants';

export const USERS = [
  {
    id: 'P1234503',
    lastName: 'Le Thuy Linh',
    firstName: 'Linh',
    role: USER_ROLE.EMP,
    staffID: 'P1234503',
    gender: GENDER.FEMALE,
    avatar: '',
    salaryUnit: 1, // $/h
  },
  {
    id: 'P1234502',
    lastName: 'Nguyen Hoang An',
    firstName: 'An',
    role: USER_ROLE.EMP,
    staffID: 'P1234502',
    avatar: '',
    gender: GENDER.MALE,
    salaryUnit: 1, // $/h
  },
  {
    id: 'P1234501',
    lastName: 'Pham Hoang Thi',
    firstName: 'Thi',
    role: USER_ROLE.MANAGE,
    staffID: 'P1234501',
    gender: GENDER.FEMALE,
    avatar: '',
    salaryUnit: 1, // $/h
  },
];
