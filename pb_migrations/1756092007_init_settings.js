/// <reference path="../pb_data/types.d.ts" />
migrate(
	(app) => {
		// add up queries...
		let settings = app.settings();

		// for all available settings fields you could check
		// /jsvm/interfaces/core.Settings.html
		settings.s3.endpoint = process.env.S3_ENDPOINT;
		settings.s3.bucket = process.env.S3_BUCKET;
		settings.s3.region = process.env.S3_REGION;
		settings.s3.accessKeyId = process.env.S3_ACCESS_KEY_ID;
		settings.s3.secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

		app.save(settings);
	},
	(app) => {
		// add down queries...
	}
);
