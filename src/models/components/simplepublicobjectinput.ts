/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SimplePublicObjectInput = {
  objectWriteTraceId?: string | undefined;
  properties: { [k: string]: string };
};

/** @internal */
export const SimplePublicObjectInput$inboundSchema: z.ZodType<
  SimplePublicObjectInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  objectWriteTraceId: z.string().optional(),
  properties: z.record(z.string()),
});

/** @internal */
export type SimplePublicObjectInput$Outbound = {
  objectWriteTraceId?: string | undefined;
  properties: { [k: string]: string };
};

/** @internal */
export const SimplePublicObjectInput$outboundSchema: z.ZodType<
  SimplePublicObjectInput$Outbound,
  z.ZodTypeDef,
  SimplePublicObjectInput
> = z.object({
  objectWriteTraceId: z.string().optional(),
  properties: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimplePublicObjectInput$ {
  /** @deprecated use `SimplePublicObjectInput$inboundSchema` instead. */
  export const inboundSchema = SimplePublicObjectInput$inboundSchema;
  /** @deprecated use `SimplePublicObjectInput$outboundSchema` instead. */
  export const outboundSchema = SimplePublicObjectInput$outboundSchema;
  /** @deprecated use `SimplePublicObjectInput$Outbound` instead. */
  export type Outbound = SimplePublicObjectInput$Outbound;
}

export function simplePublicObjectInputToJSON(
  simplePublicObjectInput: SimplePublicObjectInput,
): string {
  return JSON.stringify(
    SimplePublicObjectInput$outboundSchema.parse(simplePublicObjectInput),
  );
}

export function simplePublicObjectInputFromJSON(
  jsonString: string,
): SafeParseResult<SimplePublicObjectInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimplePublicObjectInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimplePublicObjectInput' from JSON`,
  );
}
