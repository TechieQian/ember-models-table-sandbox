import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { persons, columns } from '../utils/data';

export default class Table extends Component {
  @service('emt-themes/ember-bootstrap-v5')
  ebs5Theme;

  themeInstance = this.ebs5Theme;

  get data() {
    return persons;
  }

  get columns() {
    return columns;
  }
}
