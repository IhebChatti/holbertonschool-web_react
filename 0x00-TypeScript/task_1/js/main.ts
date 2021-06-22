interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number,
}

function printTeacher(firstName: string, lastName: string) {
  return firstName.charAt(0) + '. ' + lastName;
}

//---------------------------- TESTS ----------------------------//
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

printTeacher("John", "Doe");
