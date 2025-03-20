# GetPropertiesRequest

## Example Usage

```typescript
import { GetPropertiesRequest } from "mcp-hubspot/models/operations";

let value: GetPropertiesRequest = {
  objectType: "deals",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `objectType`                                                   | [operations.ObjectType](../../models/operations/objecttype.md) | :heavy_check_mark:                                             | The type of the object for which to retrieve properties.       |