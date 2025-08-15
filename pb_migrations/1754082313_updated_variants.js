/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_FceogL2C3r` ON `variants` (`product`)",
      "CREATE INDEX `idx_ROfMUI4zma` ON `variants` (`slug`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text724990059",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2560465762",
    "max": 0,
    "min": 0,
    "name": "slug",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "json3622966325",
    "maxSize": 0,
    "name": "meta",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "03d3rm3tlmoiuxm",
    "hidden": false,
    "id": "relation1542800728",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "product",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4090891256")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  // remove field
  collection.fields.removeById("text724990059")

  // remove field
  collection.fields.removeById("text2560465762")

  // remove field
  collection.fields.removeById("json3622966325")

  // update field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "03d3rm3tlmoiuxm",
    "hidden": false,
    "id": "relation1542800728",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
