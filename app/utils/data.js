import { faker } from '@faker-js/faker';

const persons = [];
for (let i = 0; i < 100; i++) {
  persons.push({
    id: i,
    name: faker.name.fullName(),
    age: faker.datatype.number({ max: 100 }),
  });
}

const columns = [
  { title: 'Id', propertyName: 'id' },
  {
    title: 'Name',
    propertyName: 'name',
  },
  {
    title: 'age',
    propertyName: 'age',
  },
];

export { columns, persons };
