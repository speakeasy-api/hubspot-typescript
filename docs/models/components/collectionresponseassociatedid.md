# CollectionResponseAssociatedId

## Example Usage

```typescript
import { CollectionResponseAssociatedId } from "mcp-hubspot/models/components";

let value: CollectionResponseAssociatedId = {
  paging: {
    next: {
      link: "?after=NTI1Cg%3D%3D",
      after: "NTI1Cg%3D%3D",
    },
  },
  results: [
    {
      id: "<id>",
      type: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `paging`                                                             | [components.Paging](../../models/components/paging.md)               | :heavy_minus_sign:                                                   | N/A                                                                  |
| `results`                                                            | [components.AssociatedId](../../models/components/associatedid.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |