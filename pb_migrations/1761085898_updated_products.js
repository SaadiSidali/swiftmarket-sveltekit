/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2708086759",
    "hidden": false,
    "id": "relation3309110367",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "image",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2708086759",
    "hidden": false,
    "id": "relation1194031162",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "gallery",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // remove field
  collection.fields.removeById("relation3309110367")

  // remove field
  collection.fields.removeById("relation1194031162")

  return app.save(collection)
})
