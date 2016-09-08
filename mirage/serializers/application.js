// The serializer is the translator once we have the data. We usually do not modify this.
// Ember data wants data formatted a certain way, and the API may be formatted another.
// You will not write these yourself.

import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
});
