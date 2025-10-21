/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2010100745")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "bool4189106488",
    "name": "supports_home_delivery",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "bool203857494",
    "name": "supports_stop_desk",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2010100745")

  // remove field
  collection.fields.removeById("bool4189106488")

  // remove field
  collection.fields.removeById("bool203857494")

  return app.save(collection)
})
