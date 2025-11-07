/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		// add up queries...
		const collection = app.findCollectionByNameOrId('config');

		const record = new Record(collection);
		record.set('key', 'use_captcha');
		record.set('value', ''); // empty for false, any value for true
		app.save(record);

		const record2 = new Record(collection);
		record2.set('key', 'google_analytics');
		record2.set('value', 'your_google_analytics_id');
		app.save(record2);

		const record3 = new Record(collection);
		record3.set('key', 'tiktok_pixel');
		record3.set('value', 'your_tiktok_pixel_id');
		app.save(record3);

		const record4 = new Record(collection);
		record4.set('key', 'facebook_url');
		record4.set('value', '');
		app.save(record4);

		// instagram_url
		const record5 = new Record(collection);
		record5.set('key', 'instagram_url');
		record5.set('value', '');
		app.save(record5);
	},
	(app) => {
		// add down queries...

		try {
			// const record = app.findRecordsByFilter('key', 'facebook_pixel');
			const record = app.findRecordsByFilter('key', 'use_captcha');
			if (record) {
				app.delete(record);
			}
			const record2 = app.findRecordsByFilter('key', 'google_analytics');
			if (record2) {
				app.delete(record2);
			}
			const record3 = app.findRecordsByFilter('key', 'tiktok_pixel');
			if (record3) {
				app.delete(record3);
			}
			const record4 = app.findRecordsByFilter('key', 'facebook_url');
			if (record4) {
				app.delete(record4);
			}
			const record5 = app.findRecordsByFilter('key', 'instagram_url');
			if (record5) {
				app.delete(record5);
			}
		} catch (error) {}
	}
);
