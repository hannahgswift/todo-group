import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  verb() {
    return faker.hacker.verb(1);
  },
});
