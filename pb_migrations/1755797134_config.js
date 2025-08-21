/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		let facebookPixelRecord = app.findCollectionByNameOrId('config');

		let record = new Record(facebookPixelRecord);
		record.set('key', 'facebook_pixel');
		record.set('value', 'your_facebook_pixel_id');
		app.save(record);
	},
	(app) => {
		try {
			// let record = app.findRecordsByFilter('key', 'facebook_pixel');
			let record = app.findRecordsByFilter('key', 'facebook_pixel');
			if (record) {
				app.delete(record);
			}
		} catch (error) {}
	}
);
