/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_m9ZOd4a2ms` ON `products` (`price`)",
      "CREATE INDEX `idx_efcj2anU2F` ON `products` (`slug`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("03d3rm3tlmoiuxm")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
