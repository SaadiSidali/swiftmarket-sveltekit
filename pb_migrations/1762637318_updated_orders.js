/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_VvBmWddB5i` ON `orders` (`products`)",
      "CREATE INDEX `idx_pqPLmTh39L` ON `orders` (`phone`)",
      "CREATE INDEX `idx_alQn5gUnFV` ON `orders` (`wilaya`)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2063623452",
    "max": 0,
    "min": 0,
    "name": "status",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_VvBmWddB5i` ON `orders` (`products`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("text2063623452")

  return app.save(collection)
})
