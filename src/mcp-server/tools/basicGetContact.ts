/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { basicGetContact } from "../../funcs/basicGetContact.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetContactRequest$inboundSchema,
};

export const tool$basicGetContact: ToolDefinition<typeof args> = {
  name: "basic-get-contact",
  description:
    `Retrieve a contact by its ID (\`contactId\`) or by a unique property (\`idProperty\`). You can specify what is returned using the \`properties\` query parameter.`,
  scopes: ["read"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await basicGetContact(
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
