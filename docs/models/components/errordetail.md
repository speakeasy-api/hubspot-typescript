# ErrorDetail

## Example Usage

```typescript
import { ErrorDetail } from "mcp-hubspot/models/components";

let value: ErrorDetail = {
  context: {
    "missingScopes": [
      "scope1",
      "scope2",
    ],
  },
  message: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `subCategory`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | A specific category that contains more specific detail about the error                       |                                                                                              |
| `code`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The status code associated with the error detail                                             |                                                                                              |
| `in`                                                                                         | *string*                                                                                     | :heavy_minus_sign:                                                                           | The name of the field or parameter in which the error was found.                             |                                                                                              |
| `context`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_minus_sign:                                                                           | Context about the error condition                                                            | {<br/>"missingScopes": [<br/>"scope1",<br/>"scope2"<br/>]<br/>}                              |
| `message`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | A human readable message describing the error along with remediation steps where appropriate |                                                                                              |