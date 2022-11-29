import Route from '@ember/routing/route';
import { persons } from '../utils/data';

export default class ServerpaginatedRoute extends Route {
  model() {
    return persons.slice(0, 10);
  }
}
