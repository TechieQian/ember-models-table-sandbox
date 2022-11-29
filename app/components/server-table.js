import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { persons, columns } from '../utils/data';

export default class ServerTable extends Component {
  @service('emt-themes/ember-bootstrap-v5')
  ebs5Theme;

  themeInstance = this.ebs5Theme;

  @tracked
  queuedModel = this.args.persons;

  @tracked
  currentPageNumber = 1;

  itemsCount = persons.length;

  @tracked
  pageSize;

  @action
  doQuery(query) {
    const pageSize = query.pageSize;
    const start = this.currentPageNumber * pageSize;
    const sliced = persons.slice(start, start + pageSize);
    this.queuedModel = sliced;
    return Promise.resolve(this.queuedModel);
  }

  @action
  onDisplayDataChanged(displayData) {
    this.currentPageNumber = displayData.currentPageNumber;
    this.pageSize = displayData.pageSize;
  }

  get data() {
    return persons;
  }

  get columns() {
    return columns;
  }
}
