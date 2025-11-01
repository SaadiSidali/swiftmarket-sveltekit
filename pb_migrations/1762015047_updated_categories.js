/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("di90cc152v5432y")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != null",
    "deleteRule": "@request.auth.id != null",
    "updateRule": "@request.auth.id != null"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("di90cc152v5432y")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "updateRule": null
  }, collection)

  return app.save(collection)
})
