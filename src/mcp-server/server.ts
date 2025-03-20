/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { HubspotCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$basicCreateContact } from "./tools/basicCreateContact.js";
import { tool$basicCreateDeal } from "./tools/basicCreateDeal.js";
import { tool$basicGetCompany } from "./tools/basicGetCompany.js";
import { tool$basicGetContact } from "./tools/basicGetContact.js";
import { tool$basicGetDeal } from "./tools/basicGetDeal.js";
import { tool$basicGetProperties } from "./tools/basicGetProperties.js";
import { tool$basicUpdateCompany } from "./tools/basicUpdateCompany.js";
import { tool$basicUpdateContact } from "./tools/basicUpdateContact.js";
import { tool$basicUpdateDeal } from "./tools/basicUpdateDeal.js";
import { tool$searchSearchCompanies } from "./tools/searchSearchCompanies.js";
import { tool$searchSearchContacts } from "./tools/searchSearchContacts.js";
import { tool$searchSearchDeals } from "./tools/searchSearchDeals.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  hubspotToken?: SDKOptions["hubspotToken"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "Hubspot",
    version: "0.1.0",
  });

  const client = new HubspotCore({
    hubspotToken: deps.hubspotToken,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$basicGetProperties);
  tool(tool$basicGetCompany);
  tool(tool$basicUpdateCompany);
  tool(tool$basicGetContact);
  tool(tool$basicUpdateContact);
  tool(tool$basicCreateContact);
  tool(tool$basicGetDeal);
  tool(tool$basicUpdateDeal);
  tool(tool$basicCreateDeal);
  tool(tool$searchSearchCompanies);
  tool(tool$searchSearchContacts);
  tool(tool$searchSearchDeals);

  return server;
}
