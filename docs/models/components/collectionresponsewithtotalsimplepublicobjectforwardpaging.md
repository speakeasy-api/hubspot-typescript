# CollectionResponseWithTotalSimplePublicObjectForwardPaging

## Example Usage

```typescript
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from "mcp-hubspot/models/components";

let value: CollectionResponseWithTotalSimplePublicObjectForwardPaging = {
  total: 932692,
  paging: {
    next: {
      link: "?after=NTI1Cg%3D%3D",
      after: "NTI1Cg%3D%3D",
    },
  },
  results: [
    {
      createdAt: new Date("2019-10-30T03:30:17.883Z"),
      archived: false,
      id: "512",
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
      updatedAt: new Date("2019-12-07T16:50:06.678Z"),
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `total`                                                                          | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `paging`                                                                         | [components.ForwardPaging](../../models/components/forwardpaging.md)             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `results`                                                                        | [components.SimplePublicObject](../../models/components/simplepublicobject.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |