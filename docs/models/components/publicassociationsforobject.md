# PublicAssociationsForObject

## Example Usage

```typescript
import { PublicAssociationsForObject } from "mcp-hubspot/models/components";

let value: PublicAssociationsForObject = {
  types: [
    {
      associationCategory: "USER_DEFINED",
      associationTypeId: 321523,
    },
  ],
  to: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `types`                                                                    | [components.AssociationSpec](../../models/components/associationspec.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |
| `to`                                                                       | [components.PublicObjectId](../../models/components/publicobjectid.md)     | :heavy_check_mark:                                                         | N/A                                                                        |