<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->