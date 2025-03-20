# ErrorT

An error occurred.

## Example Usage

```typescript
import { ErrorT } from "mcp-hubspot/models/components";

let value: ErrorT = {
  correlationId: "aeb5f871-7f07-4993-9211-075dc63e7cbf",
  links: {
    "knowledge-base": "https://www.hubspot.com/products/service/knowledge-base",
  },
  message: "Invalid input (details will vary based on the error)",
  category: "VALIDATION_ERROR",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `subCategory`                                                                                                    | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | A specific category that contains more specific detail about the error                                           |                                                                                                                  |
| `context`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_minus_sign:                                                                                               | Context about the error condition                                                                                | {<br/>"missingScopes": [<br/>"scope1",<br/>"scope2"<br/>],<br/>"invalidPropertyName": [<br/>"propertyValue"<br/>]<br/>} |
| `correlationId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A unique identifier for the request. Include this value with any error reports or support tickets                | aeb5f871-7f07-4993-9211-075dc63e7cbf                                                                             |
| `links`                                                                                                          | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | A map of link names to associated URIs containing documentation about the error or recommended remediation steps | {<br/>"knowledge-base": "https://www.hubspot.com/products/service/knowledge-base"<br/>}                          |
| `message`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | A human readable message describing the error along with remediation steps where appropriate                     | Invalid input (details will vary based on the error)                                                             |
| `category`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The error category                                                                                               | VALIDATION_ERROR                                                                                                 |
| `errors`                                                                                                         | [components.ErrorDetail](../../models/components/errordetail.md)[]                                               | :heavy_minus_sign:                                                                                               | further information about the error                                                                              |                                                                                                                  |