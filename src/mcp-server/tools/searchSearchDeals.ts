/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { searchSearchDeals } from "../../funcs/searchSearchDeals.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.PublicObjectSearchRequest$inboundSchema,
};

export const tool$searchSearchDeals: ToolDefinition<typeof args> = {
  name: "search-search-deals",
  description:
    `Search for deals by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await searchSearchDeals(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
