# SimplePublicObjectInputForCreate

## Example Usage

```typescript
import { SimplePublicObjectInputForCreate } from "mcp-hubspot/models/components";

let value: SimplePublicObjectInputForCreate = {
  associations: [
    {
      types: [
        {
          associationCategory: "HUBSPOT_DEFINED",
          associationTypeId: 2,
        },
      ],
      to: {
        id: "101",
      },
    },
  ],
  properties: {
    "amount": "1500.00",
    "dealname": "Custom data integrations",
    "pipeline": "default",
    "closedate": "2019-12-07T16:50:06.678Z",
    "dealstage": "presentationscheduled",
    "hubspot_owner_id": "910901",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `associations`                                                                                     | [components.PublicAssociationsForObject](../../models/components/publicassociationsforobject.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `objectWriteTraceId`                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | Record<string, *string*>                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |