/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1194031162",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "image/png",
      "image/vnd.mozilla.apng",
      "image/jpeg",
      "image/webp",
      "image/tiff",
      "image/bmp",
      "image/x-icon",
      "image/avif",
      "image/svg+xml"
    ],
    "name": "gallery",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [
      "300x300"
    ],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1194031162",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "gallery",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
