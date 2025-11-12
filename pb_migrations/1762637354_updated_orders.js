/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_VvBmWddB5i` ON `orders` (`products`)",
      "CREATE INDEX `idx_pqPLmTh39L` ON `orders` (`phone`)",
      "CREATE INDEX `idx_alQn5gUnFV` ON `orders` (`wilaya`)",
      "CREATE INDEX `idx_3hIDVRneX9` ON `orders` (`status`)",
      "CREATE INDEX `idx_Rx4pPeDGtk` ON `orders` (`created`)",
      "CREATE INDEX `idx_4AoUkUGAdx` ON `orders` (`updated`)",
      "CREATE INDEX `idx_qY4527o7of` ON `orders` (`trackingNumber`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3527180448")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_VvBmWddB5i` ON `orders` (`products`)",
      "CREATE INDEX `idx_pqPLmTh39L` ON `orders` (`phone`)",
      "CREATE INDEX `idx_alQn5gUnFV` ON `orders` (`wilaya`)"
    ]
  }, collection)

  return app.save(collection)
})
