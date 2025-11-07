/// <reference path="../pb_data/types.d.ts" />
// Migration to create contact detail config records
migrate(
	(app) => {
		// add up queries: create contact detail config records
		const collection = app.findCollectionByNameOrId('config');

		const record = new Record(collection);
		record.set('key', 'phone1');
		record.set('value', '');
		app.save(record);

		const record2 = new Record(collection);
		record2.set('key', 'phone2');
		record2.set('value', '');
		app.save(record2);

		const record3 = new Record(collection);
		record3.set('key', 'email');
		record3.set('value', '');
		app.save(record3);

		// lat, lng config records can be added later if needed
		const record4 = new Record(collection);
		record4.set('key', 'location');
		record4.set('value', '');
		app.save(record4);
	},
	(app) => {
		// down queries: remove the added config records
		try {
			const record = app.findRecordsByFilter('key', 'phone1');
			if (record) {
				app.delete(record);
			}
			const record2 = app.findRecordsByFilter('key', 'phone2');
			if (record2) {
				app.delete(record2);
			}
			const record3 = app.findRecordsByFilter('key', 'email');
			if (record3) {
				app.delete(record3);
			}
			const record4 = app.findRecordsByFilter('key', 'location');
			if (record4) {
				app.delete(record4);
			}
		} catch (error) {}
	}
);
