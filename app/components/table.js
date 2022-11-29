import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { faker } from '@faker-js/faker';

export default class Table extends Component {
  @service('emt-themes/ember-bootstrap-v5')
  ebs5Theme;

  @service('emt-themes/plain-html')
  plainHtmlTheme;

  @service('emt-themes/bootstrap3')
  defaultTheme;

  @service('emt-themes/ember-paper')
  emberPaperTheme;

  themeInstance = this.ebs5Theme;

  columns = [
    {
      title: 'Name',
      propertyName: 'name',
    },
    {
      title: 'age',
      propertyName: 'name',
    },
  ];

  get data() {
    const persons = [];
    for (let i = 0; i < 100; i++) {
      persons.push({
        id: i,
        name: faker.name.fullName(),
        age: faker.datatype.number({ max: 100 }),
      });
    }
    return persons;
  }

  tableName = 'My Table';
}
