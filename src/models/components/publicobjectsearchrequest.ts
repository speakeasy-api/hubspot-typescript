/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FilterGroup,
  FilterGroup$inboundSchema,
  FilterGroup$Outbound,
  FilterGroup$outboundSchema,
} from "./filtergroup.js";

export type PublicObjectSearchRequest = {
  query?: string | undefined;
  limit?: number | undefined;
  after?: string | undefined;
  sorts?: Array<string> | undefined;
  properties?: Array<string> | undefined;
  filterGroups?: Array<FilterGroup> | undefined;
};

/** @internal */
export const PublicObjectSearchRequest$inboundSchema: z.ZodType<
  PublicObjectSearchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string().optional(),
  limit: z.number().int().optional(),
  after: z.string().optional(),
  sorts: z.array(z.string()).optional(),
  properties: z.array(z.string()).optional(),
  filterGroups: z.array(FilterGroup$inboundSchema).optional(),
});

/** @internal */
export type PublicObjectSearchRequest$Outbound = {
  query?: string | undefined;
  limit?: number | undefined;
  after?: string | undefined;
  sorts?: Array<string> | undefined;
  properties?: Array<string> | undefined;
  filterGroups?: Array<FilterGroup$Outbound> | undefined;
};

/** @internal */
export const PublicObjectSearchRequest$outboundSchema: z.ZodType<
  PublicObjectSearchRequest$Outbound,
  z.ZodTypeDef,
  PublicObjectSearchRequest
> = z.object({
  query: z.string().optional(),
  limit: z.number().int().optional(),
  after: z.string().optional(),
  sorts: z.array(z.string()).optional(),
  properties: z.array(z.string()).optional(),
  filterGroups: z.array(FilterGroup$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PublicObjectSearchRequest$ {
  /** @deprecated use `PublicObjectSearchRequest$inboundSchema` instead. */
  export const inboundSchema = PublicObjectSearchRequest$inboundSchema;
  /** @deprecated use `PublicObjectSearchRequest$outboundSchema` instead. */
  export const outboundSchema = PublicObjectSearchRequest$outboundSchema;
  /** @deprecated use `PublicObjectSearchRequest$Outbound` instead. */
  export type Outbound = PublicObjectSearchRequest$Outbound;
}

export function publicObjectSearchRequestToJSON(
  publicObjectSearchRequest: PublicObjectSearchRequest,
): string {
  return JSON.stringify(
    PublicObjectSearchRequest$outboundSchema.parse(publicObjectSearchRequest),
  );
}

export function publicObjectSearchRequestFromJSON(
  jsonString: string,
): SafeParseResult<PublicObjectSearchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PublicObjectSearchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PublicObjectSearchRequest' from JSON`,
  );
}
