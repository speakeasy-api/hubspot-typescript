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

export type UpdateCompanyRequest = {
  companyId: string;
  /**
   * The name of a property whose values are unique for this object
   */
  idProperty?: string | undefined;
  simplePublicObjectInput: components.SimplePublicObjectInput;
};

export type UpdateCompanyResponse =
  | components.SimplePublicObject
  | Uint8Array
  | string;

/** @internal */
export const UpdateCompanyRequest$inboundSchema: z.ZodType<
  UpdateCompanyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string(),
  idProperty: z.string().optional(),
  SimplePublicObjectInput: components.SimplePublicObjectInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "SimplePublicObjectInput": "simplePublicObjectInput",
  });
});

/** @internal */
export type UpdateCompanyRequest$Outbound = {
  companyId: string;
  idProperty?: string | undefined;
  SimplePublicObjectInput: components.SimplePublicObjectInput$Outbound;
};

/** @internal */
export const UpdateCompanyRequest$outboundSchema: z.ZodType<
  UpdateCompanyRequest$Outbound,
  z.ZodTypeDef,
  UpdateCompanyRequest
> = z.object({
  companyId: z.string(),
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
export namespace UpdateCompanyRequest$ {
  /** @deprecated use `UpdateCompanyRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateCompanyRequest$inboundSchema;
  /** @deprecated use `UpdateCompanyRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateCompanyRequest$outboundSchema;
  /** @deprecated use `UpdateCompanyRequest$Outbound` instead. */
  export type Outbound = UpdateCompanyRequest$Outbound;
}

export function updateCompanyRequestToJSON(
  updateCompanyRequest: UpdateCompanyRequest,
): string {
  return JSON.stringify(
    UpdateCompanyRequest$outboundSchema.parse(updateCompanyRequest),
  );
}

export function updateCompanyRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCompanyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCompanyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCompanyRequest' from JSON`,
  );
}

/** @internal */
export const UpdateCompanyResponse$inboundSchema: z.ZodType<
  UpdateCompanyResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.SimplePublicObject$inboundSchema, b64$.zodInbound]);

/** @internal */
export type UpdateCompanyResponse$Outbound =
  | components.SimplePublicObject$Outbound
  | Uint8Array;

/** @internal */
export const UpdateCompanyResponse$outboundSchema: z.ZodType<
  UpdateCompanyResponse$Outbound,
  z.ZodTypeDef,
  UpdateCompanyResponse
> = z.union([components.SimplePublicObject$outboundSchema, b64$.zodOutbound]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateCompanyResponse$ {
  /** @deprecated use `UpdateCompanyResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateCompanyResponse$inboundSchema;
  /** @deprecated use `UpdateCompanyResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateCompanyResponse$outboundSchema;
  /** @deprecated use `UpdateCompanyResponse$Outbound` instead. */
  export type Outbound = UpdateCompanyResponse$Outbound;
}

export function updateCompanyResponseToJSON(
  updateCompanyResponse: UpdateCompanyResponse,
): string {
  return JSON.stringify(
    UpdateCompanyResponse$outboundSchema.parse(updateCompanyResponse),
  );
}

export function updateCompanyResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateCompanyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateCompanyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateCompanyResponse' from JSON`,
  );
}
