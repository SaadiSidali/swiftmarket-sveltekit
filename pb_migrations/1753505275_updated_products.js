/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // remove field
  collection.fields.removeById("editor1843675174")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1843675174",
    "maxSize": 0,
    "name": "description",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
