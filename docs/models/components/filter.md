# Filter

## Example Usage

```typescript
import { Filter } from "mcp-hubspot/models/components";

let value: Filter = {
  propertyName: "<value>",
  operator: "GTE",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `highValue`                                                | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `propertyName`                                             | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `values`                                                   | *string*[]                                                 | :heavy_minus_sign:                                         | N/A                                                        |
| `value`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `operator`                                                 | [components.Operator](../../models/components/operator.md) | :heavy_check_mark:                                         | null                                                       |