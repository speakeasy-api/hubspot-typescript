/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SearchContactsResponse =
  | components.CollectionResponseWithTotalSimplePublicObjectForwardPaging
  | Uint8Array
  | string;

/** @internal */
export const SearchContactsResponse$inboundSchema: z.ZodType<
  SearchContactsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components
    .CollectionResponseWithTotalSimplePublicObjectForwardPaging$inboundSchema,
  b64$.zodInbound,
]);

/** @internal */
export type SearchContactsResponse$Outbound =
  | components.CollectionResponseWithTotalSimplePublicObjectForwardPaging$Outbound
  | Uint8Array;

/** @internal */
export const SearchContactsResponse$outboundSchema: z.ZodType<
  SearchContactsResponse$Outbound,
  z.ZodTypeDef,
  SearchContactsResponse
> = z.union([
  components
    .CollectionResponseWithTotalSimplePublicObjectForwardPaging$outboundSchema,
  b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SearchContactsResponse$ {
  /** @deprecated use `SearchContactsResponse$inboundSchema` instead. */
  export const inboundSchema = SearchContactsResponse$inboundSchema;
  /** @deprecated use `SearchContactsResponse$outboundSchema` instead. */
  export const outboundSchema = SearchContactsResponse$outboundSchema;
  /** @deprecated use `SearchContactsResponse$Outbound` instead. */
  export type Outbound = SearchContactsResponse$Outbound;
}

export function searchContactsResponseToJSON(
  searchContactsResponse: SearchContactsResponse,
): string {
  return JSON.stringify(
    SearchContactsResponse$outboundSchema.parse(searchContactsResponse),
  );
}

export function searchContactsResponseFromJSON(
  jsonString: string,
): SafeParseResult<SearchContactsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchContactsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchContactsResponse' from JSON`,
  );
}
