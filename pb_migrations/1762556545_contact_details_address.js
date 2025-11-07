/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		// add up queries...
		// add up queries: create contact detail config records
		const collection = app.findCollectionByNameOrId('config');

		const record = new Record(collection);
		record.set('key', 'address');
		record.set('value', '');
		app.save(record);
	},
	(app) => {
		// add down queries...
		try {
			const record = app.findRecordsByFilter('key', 'address');
			if (record) {
				app.delete(record);
			}
		} catch (error) {}
	}
);
