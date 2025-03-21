/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateDealRequest = {
  dealId: string;
  /**
   * The name of a property whose values are unique for this object type
   */
  idProperty?: string | undefined;
  simplePublicObjectInput: components.SimplePublicObjectInput;
};

export type UpdateDealResponse =
  | components.SimplePublicObject
  | Uint8Array
  | string;

/** @internal */
export const UpdateDealRequest$inboundSchema: z.ZodType<
  UpdateDealRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  dealId: z.string(),
  idProperty: z.string().optional(),
  SimplePublicObjectInput: components.SimplePublicObjectInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "SimplePublicObjectInput": "simplePublicObjectInput",
  });
});

/** @internal */
export type UpdateDealRequest$Outbound = {
  dealId: string;
  idProperty?: string | undefined;
  SimplePublicObjectInput: components.SimplePublicObjectInput$Outbound;
};

/** @internal */
export const UpdateDealRequest$outboundSchema: z.ZodType<
  UpdateDealRequest$Outbound,
  z.ZodTypeDef,
  UpdateDealRequest
> = z.object({
  dealId: z.string(),
  idProperty: z.string().optional(),
  simplePublicObjectInput: components.SimplePublicObjectInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    simplePublicObjectInput: "SimplePublicObjectInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDealRequest$ {
  /** @deprecated use `UpdateDealRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateDealRequest$inboundSchema;
  /** @deprecated use `UpdateDealRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateDealRequest$outboundSchema;
  /** @deprecated use `UpdateDealRequest$Outbound` instead. */
  export type Outbound = UpdateDealRequest$Outbound;
}

export function updateDealRequestToJSON(
  updateDealRequest: UpdateDealRequest,
): string {
  return JSON.stringify(
    UpdateDealRequest$outboundSchema.parse(updateDealRequest),
  );
}

export function updateDealRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDealRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDealRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDealRequest' from JSON`,
  );
}

/** @internal */
export const UpdateDealResponse$inboundSchema: z.ZodType<
  UpdateDealResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.SimplePublicObject$inboundSchema, b64$.zodInbound]);

/** @internal */
export type UpdateDealResponse$Outbound =
  | components.SimplePublicObject$Outbound
  | Uint8Array;

/** @internal */
export const UpdateDealResponse$outboundSchema: z.ZodType<
  UpdateDealResponse$Outbound,
  z.ZodTypeDef,
  UpdateDealResponse
> = z.union([components.SimplePublicObject$outboundSchema, b64$.zodOutbound]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateDealResponse$ {
  /** @deprecated use `UpdateDealResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateDealResponse$inboundSchema;
  /** @deprecated use `UpdateDealResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateDealResponse$outboundSchema;
  /** @deprecated use `UpdateDealResponse$Outbound` instead. */
  export type Outbound = UpdateDealResponse$Outbound;
}

export function updateDealResponseToJSON(
  updateDealResponse: UpdateDealResponse,
): string {
  return JSON.stringify(
    UpdateDealResponse$outboundSchema.parse(updateDealResponse),
  );
}

export function updateDealResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDealResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDealResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDealResponse' from JSON`,
  );
}
