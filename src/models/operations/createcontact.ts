/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateContactResponse =
  | components.SimplePublicObject
  | Uint8Array
  | string;

/** @internal */
export const CreateContactResponse$inboundSchema: z.ZodType<
  CreateContactResponse,
  z.ZodTypeDef,
  unknown
> = z.union([components.SimplePublicObject$inboundSchema, b64$.zodInbound]);

/** @internal */
export type CreateContactResponse$Outbound =
  | components.SimplePublicObject$Outbound
  | Uint8Array;

/** @internal */
export const CreateContactResponse$outboundSchema: z.ZodType<
  CreateContactResponse$Outbound,
  z.ZodTypeDef,
  CreateContactResponse
> = z.union([components.SimplePublicObject$outboundSchema, b64$.zodOutbound]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateContactResponse$ {
  /** @deprecated use `CreateContactResponse$inboundSchema` instead. */
  export const inboundSchema = CreateContactResponse$inboundSchema;
  /** @deprecated use `CreateContactResponse$outboundSchema` instead. */
  export const outboundSchema = CreateContactResponse$outboundSchema;
  /** @deprecated use `CreateContactResponse$Outbound` instead. */
  export type Outbound = CreateContactResponse$Outbound;
}

export function createContactResponseToJSON(
  createContactResponse: CreateContactResponse,
): string {
  return JSON.stringify(
    CreateContactResponse$outboundSchema.parse(createContactResponse),
  );
}

export function createContactResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateContactResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateContactResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateContactResponse' from JSON`,
  );
}
