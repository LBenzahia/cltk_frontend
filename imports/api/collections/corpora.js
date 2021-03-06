import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Corpora = new Meteor.Collection('corpora');

Corpora.schema = new SimpleSchema({
	title: {
		type: String,
		max: 60,
	},
	slug: {
		type: String,
		max: 200,
		optional: true,
	},

	corpusLanguages: {
		type: [String],
		max: 60,
	},

	createdAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			}
			return null;
		},
	},
	updatedAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isUpdate) {
				return new Date();
			}
			return null;
		},
	},


});

Corpora.attachSchema(Corpora.schema);
Corpora.friendlySlugs('title');

export default Corpora;
