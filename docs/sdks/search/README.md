# Search

## Overview

### Available Operations

* [searchCompanies](#searchcompanies) - Search for companies
* [searchContacts](#searchcontacts) - Search for contacts
* [searchDeals](#searchdeals)

## searchCompanies

Search for companies by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchCompanies" method="post" path="/crm/v3/objects/companies/search" -->
```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.search.searchCompanies({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { searchSearchCompanies } from "mcp-hubspot/funcs/searchSearchCompanies.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await searchSearchCompanies(hubspot, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchSearchCompanies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PublicObjectSearchRequest](../../models/components/publicobjectsearchrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchCompaniesResponse](../../models/operations/searchcompaniesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## searchContacts

Search for contacts by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchContacts" method="post" path="/crm/v3/objects/contacts/search" -->
```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.search.searchContacts({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { searchSearchContacts } from "mcp-hubspot/funcs/searchSearchContacts.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await searchSearchContacts(hubspot, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchSearchContacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PublicObjectSearchRequest](../../models/components/publicobjectsearchrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchContactsResponse](../../models/operations/searchcontactsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## searchDeals

### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchDeals" method="post" path="/crm/v3/objects/deals/search" -->
```typescript
import { Hubspot } from "mcp-hubspot";

const hubspot = new Hubspot({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const result = await hubspot.search.searchDeals({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HubspotCore } from "mcp-hubspot/core.js";
import { searchSearchDeals } from "mcp-hubspot/funcs/searchSearchDeals.js";

// Use `HubspotCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hubspot = new HubspotCore({
  hubspotToken: process.env["HUBSPOT_HUBSPOT_TOKEN"] ?? "",
});

async function run() {
  const res = await searchSearchDeals(hubspot, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchSearchDeals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PublicObjectSearchRequest](../../models/components/publicobjectsearchrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchDealsResponse](../../models/operations/searchdealsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |