import {GENDER, USER_ROLE, STATUS} from 'constants/appConstants';

export const USERS = [
  {
    id: 'P1234503',
    lastName: 'Le Thuy',
    firstName: 'Linh',
    dob: '10/1/2000',
    role: USER_ROLE.EMP,
    staffID: 'P1234503',
    gender: GENDER.FEMALE,
    avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
    salaryUnit: 1, // $/h
    status: STATUS.ACTIVE,
  },
  {
    id: 'P1234502',
    lastName: 'Nguyen Hoang',
    firstName: 'An',
    dob: '1/10/2000',
    role: USER_ROLE.EMP,
    staffID: 'P1234502',
    avatar: '',
    gender: GENDER.MALE,
    salaryUnit: 1, // $/h
    status: STATUS.ACTIVE,
  },
  {
    id: 'P1234501',
    lastName: 'Pham Hoang ',
    firstName: 'Thi',
    dob: '12/11/1999',
    role: USER_ROLE.MANAGE,
    staffID: 'P1234501',
    gender: GENDER.FEMALE,
    avatar: '',
    salaryUnit: 1, // $/h
    status: STATUS.DEACTIVATED,
  },
];
