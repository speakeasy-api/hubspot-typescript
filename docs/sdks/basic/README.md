# Basic
(*basic*)

## Overview

### Available Operations

* [getProperties](#getproperties) - Get the list of all groups that are available on any hubspot object.
* [getCompany](#getcompany) - Retrieve a company
* [updateCompany](#updatecompany) - Update a company
* [getContact](#getcontact) - Retrieve a contact
* [updateContact](#updatecontact) - Update a contact
* [createContact](#createcontact) - Create a contact
* [getDeal](#getdeal) - Read
* [updateDeal](#updatedeal) - Update
* [createDeal](#createdeal) - Create

## getProperties

Get the list of all properties that are available on any hubspot object.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.getProperties({
    objectType: "deals",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicGetProperties } from "mcp-hubspot/funcs/basicGetProperties.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicGetProperties(hubspot, {
    objectType: "deals",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPropertiesRequest](../../models/operations/getpropertiesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPropertiesResponse](../../models/operations/getpropertiesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCompany

Retrieve a company by its ID (`companyId`) or by a unique property (`idProperty`). You can specify what is returned using the `properties` query parameter.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.getCompany({
    companyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicGetCompany } from "mcp-hubspot/funcs/basicGetCompany.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicGetCompany(hubspot, {
    companyId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCompanyRequest](../../models/operations/getcompanyrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCompanyResponse](../../models/operations/getcompanyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateCompany

Update a company by ID (`companyId`) or unique property value (`idProperty`). Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.updateCompany({
    companyId: "<id>",
    simplePublicObjectInput: {
      properties: {
        "property_date": "1572480000000",
        "property_radio": "option_1",
        "property_number": "17",
        "property_string": "value",
        "property_checkbox": "false",
        "property_dropdown": "choice_b",
        "property_multiple_checkboxes": "chocolate;strawberry",
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicUpdateCompany } from "mcp-hubspot/funcs/basicUpdateCompany.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicUpdateCompany(hubspot, {
    companyId: "<id>",
    simplePublicObjectInput: {
      properties: {
        "property_date": "1572480000000",
        "property_radio": "option_1",
        "property_number": "17",
        "property_string": "value",
        "property_checkbox": "false",
        "property_dropdown": "choice_b",
        "property_multiple_checkboxes": "chocolate;strawberry",
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCompanyRequest](../../models/operations/updatecompanyrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateCompanyResponse](../../models/operations/updatecompanyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getContact

Retrieve a contact by its ID (`contactId`) or by a unique property (`idProperty`). You can specify what is returned using the `properties` query parameter.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.getContact({
    contactId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicGetContact } from "mcp-hubspot/funcs/basicGetContact.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicGetContact(hubspot, {
    contactId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetContactRequest](../../models/operations/getcontactrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetContactResponse](../../models/operations/getcontactresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateContact

Update a contact by ID (`contactId`) or unique property value (`idProperty`). Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.updateContact({
    contactId: "<id>",
    simplePublicObjectInput: {
      properties: {
        "property_date": "1572480000000",
        "property_radio": "option_1",
        "property_number": "17",
        "property_string": "value",
        "property_checkbox": "false",
        "property_dropdown": "choice_b",
        "property_multiple_checkboxes": "chocolate;strawberry",
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicUpdateContact } from "mcp-hubspot/funcs/basicUpdateContact.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicUpdateContact(hubspot, {
    contactId: "<id>",
    simplePublicObjectInput: {
      properties: {
        "property_date": "1572480000000",
        "property_radio": "option_1",
        "property_number": "17",
        "property_string": "value",
        "property_checkbox": "false",
        "property_dropdown": "choice_b",
        "property_multiple_checkboxes": "chocolate;strawberry",
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateContactRequest](../../models/operations/updatecontactrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateContactResponse](../../models/operations/updatecontactresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createContact

Create a single contact. Include a `properties` object to define [property values](https://developers.hubspot.com/docs/guides/api/crm/properties) for the contact, along with an `associations` array to define [associations](https://developers.hubspot.com/docs/guides/api/crm/associations/associations-v4) with other CRM records.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.createContact({
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicCreateContact } from "mcp-hubspot/funcs/basicCreateContact.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicCreateContact(hubspot, {
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SimplePublicObjectInputForCreate](../../models/components/simplepublicobjectinputforcreate.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateContactResponse](../../models/operations/createcontactresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getDeal

Read a Deal Object identified by `{dealId}`. `{dealId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.getDeal({
    dealId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicGetDeal } from "mcp-hubspot/funcs/basicGetDeal.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicGetDeal(hubspot, {
    dealId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDealRequest](../../models/operations/getdealrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetDealResponse](../../models/operations/getdealresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateDeal

Perform a partial update of an Object identified by `{dealId}`. `{dealId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.updateDeal({
    dealId: "<id>",
    simplePublicObjectInput: {
      properties: {
        "property_date": "1572480000000",
        "property_radio": "option_1",
        "property_number": "17",
        "property_string": "value",
        "property_checkbox": "false",
        "property_dropdown": "choice_b",
        "property_multiple_checkboxes": "chocolate;strawberry",
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicUpdateDeal } from "mcp-hubspot/funcs/basicUpdateDeal.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicUpdateDeal(hubspot, {
    dealId: "<id>",
    simplePublicObjectInput: {
      properties: {
        "property_date": "1572480000000",
        "property_radio": "option_1",
        "property_number": "17",
        "property_string": "value",
        "property_checkbox": "false",
        "property_dropdown": "choice_b",
        "property_multiple_checkboxes": "chocolate;strawberry",
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDealRequest](../../models/operations/updatedealrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateDealResponse](../../models/operations/updatedealresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createDeal

Create a deal with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard deals is provided.

### Example Usage

```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.basic.createDeal({
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
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { basicCreateDeal } from "mcp-hubspot/funcs/basicCreateDeal.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await basicCreateDeal(hubspot, {
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
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.SimplePublicObjectInputForCreate](../../models/components/simplepublicobjectinputforcreate.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateDealResponse](../../models/operations/createdealresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |