/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		const facebookPixelRecord = app.findCollectionByNameOrId('config');

		const record = new Record(facebookPixelRecord);
		record.set('key', 'facebook_pixel');
		record.set('value', 'your_facebook_pixel_id');
		app.save(record);
	},
	(app) => {
		try {
			// const record = app.findRecordsByFilter('key', 'facebook_pixel');
			const record = app.findRecordsByFilter('key', 'facebook_pixel');
			if (record) {
				app.delete(record);
			}
		} catch (error) {}
	}
);
