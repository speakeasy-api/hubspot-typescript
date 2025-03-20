# SimplePublicObjectWithAssociations

## Example Usage

```typescript
import { SimplePublicObjectWithAssociations } from "mcp-hubspot/models/components";

let value: SimplePublicObjectWithAssociations = {
  createdAt: new Date("2024-04-14T22:19:54.875Z"),
  id: "<id>",
  properties: {
    "amount": "1500.00",
    "closedate": "2019-12-07T16:50:06.678Z",
    "createdate": "2019-10-30T03:30:17.883Z",
    "dealname": "Custom data integrations",
    "dealstage": "presentationscheduled",
    "hs_lastmodifieddate": "2019-12-07T16:50:06.678Z",
    "hubspot_owner_id": "910901",
    "pipeline": "default",
  },
  updatedAt: new Date("2023-05-29T11:30:35.227Z"),
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `associations`                                                                                                         | Record<string, [components.CollectionResponseAssociatedId](../../models/components/collectionresponseassociatedid.md)> | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `archived`                                                                                                             | *boolean*                                                                                                              | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `archivedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `propertiesWithHistory`                                                                                                | Record<string, [components.ValueWithTimestamp](../../models/components/valuewithtimestamp.md)[]>                       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | Record<string, *string*>                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |