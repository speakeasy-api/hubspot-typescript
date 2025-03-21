/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PublicAssociationsForObject,
  PublicAssociationsForObject$inboundSchema,
  PublicAssociationsForObject$Outbound,
  PublicAssociationsForObject$outboundSchema,
} from "./publicassociationsforobject.js";

export type SimplePublicObjectInputForCreate = {
  associations: Array<PublicAssociationsForObject>;
  objectWriteTraceId?: string | undefined;
  properties: { [k: string]: string };
};

/** @internal */
export const SimplePublicObjectInputForCreate$inboundSchema: z.ZodType<
  SimplePublicObjectInputForCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  associations: z.array(PublicAssociationsForObject$inboundSchema),
  objectWriteTraceId: z.string().optional(),
  properties: z.record(z.string()),
});

/** @internal */
export type SimplePublicObjectInputForCreate$Outbound = {
  associations: Array<PublicAssociationsForObject$Outbound>;
  objectWriteTraceId?: string | undefined;
  properties: { [k: string]: string };
};

/** @internal */
export const SimplePublicObjectInputForCreate$outboundSchema: z.ZodType<
  SimplePublicObjectInputForCreate$Outbound,
  z.ZodTypeDef,
  SimplePublicObjectInputForCreate
> = z.object({
  associations: z.array(PublicAssociationsForObject$outboundSchema),
  objectWriteTraceId: z.string().optional(),
  properties: z.record(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimplePublicObjectInputForCreate$ {
  /** @deprecated use `SimplePublicObjectInputForCreate$inboundSchema` instead. */
  export const inboundSchema = SimplePublicObjectInputForCreate$inboundSchema;
  /** @deprecated use `SimplePublicObjectInputForCreate$outboundSchema` instead. */
  export const outboundSchema = SimplePublicObjectInputForCreate$outboundSchema;
  /** @deprecated use `SimplePublicObjectInputForCreate$Outbound` instead. */
  export type Outbound = SimplePublicObjectInputForCreate$Outbound;
}

export function simplePublicObjectInputForCreateToJSON(
  simplePublicObjectInputForCreate: SimplePublicObjectInputForCreate,
): string {
  return JSON.stringify(
    SimplePublicObjectInputForCreate$outboundSchema.parse(
      simplePublicObjectInputForCreate,
    ),
  );
}

export function simplePublicObjectInputForCreateFromJSON(
  jsonString: string,
): SafeParseResult<SimplePublicObjectInputForCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimplePublicObjectInputForCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimplePublicObjectInputForCreate' from JSON`,
  );
}
