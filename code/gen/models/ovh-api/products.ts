import {Schema} from '../../src/schema';

// imported from https://eu.api.ovh.com:443/1.0/products.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "basePath": "https://eu.api.ovh.com/1.0",
  "models": {
    "products.list.Item.RegionTagsEnum": {
      "description": "Item tags for region where it is available",
      "enum": [
        "CA",
        "EU",
        "US"
      ],
      "enumType": "string",
      "id": "RegionTagsEnum",
      "namespace": "products.list.Item"
    }
  },
  "resourcePath": "/products"
}