/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // remove field
  collection.fields.removeById("file1194031162")

  // remove field
  collection.fields.removeById("file3309110367")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // add field
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

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [
      "image/png",
      "image/jpeg",
      "image/vnd.mozilla.apng",
      "image/webp",
      "image/tiff",
      "image/bmp",
      "image/x-icon",
      "image/avif",
      "image/svg+xml"
    ],
    "name": "image",
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
})
