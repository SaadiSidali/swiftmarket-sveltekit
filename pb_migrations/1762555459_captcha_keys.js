/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		// add up queries...
		const collection = app.findCollectionByNameOrId('config');

		const record = new Record(collection);
		record.set('key', 'captcha_site_key');
		record.set('value', '6Leb1gUsAAAAABafEfLD4bPEUKTw2i50qt0Y-Yov');
		app.save(record);

		const record2 = new Record(collection);
		record2.set('key', 'captcha_secret_key');
		record2.set('value', '6Leb1gUsAAAAAAUqL8LEeoOgCPepTpuyR9K59s0K');
		app.save(record2);
	},
	(app) => {
		// add down queries...

		try {
			// const record = app.findRecordsByFilter('key', 'facebook_pixel');
			const record = app.findRecordsByFilter('key', 'captcha_site_key');
			if (record) {
				app.delete(record);
			}

			const record2 = app.findRecordsByFilter('key', 'captcha_secret_key');
			if (record2) {
				app.delete(record2);
			}
		} catch (error) {}
	}
);
