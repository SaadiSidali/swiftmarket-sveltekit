/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("di90cc152v5432y")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_mxITHPy7uv` ON `categories` (`slug`)",
      "CREATE INDEX `idx_4NwYcnUQvA` ON `categories` (`parent`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("di90cc152v5432y")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `idx_mxITHPy7uv` ON `categories` (`slug`)"
    ]
  }, collection)

  return app.save(collection)
})
