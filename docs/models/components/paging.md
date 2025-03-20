# Paging

## Example Usage

```typescript
import { Paging } from "mcp-hubspot/models/components";

let value: Paging = {
  next: {
    link: "?after=NTI1Cg%3D%3D",
    after: "NTI1Cg%3D%3D",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `next`                                                             | [components.NextPage](../../models/components/nextpage.md)         | :heavy_minus_sign:                                                 | N/A                                                                | {<br/>"after": "NTI1Cg%3D%3D",<br/>"link": "?after=NTI1Cg%3D%3D"<br/>} |
| `prev`                                                             | [components.PreviousPage](../../models/components/previouspage.md) | :heavy_minus_sign:                                                 | N/A                                                                |                                                                    |