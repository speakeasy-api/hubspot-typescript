# FilterGroup

## Example Usage

```typescript
import { FilterGroup } from "mcp-hubspot/models/components";

let value: FilterGroup = {
  filters: [
    {
      propertyName: "<value>",
      operator: "CONTAINS_TOKEN",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `filters`                                                | [components.Filter](../../models/components/filter.md)[] | :heavy_check_mark:                                       | N/A                                                      |