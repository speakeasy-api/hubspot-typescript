/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PreviousPage = {
  before: string;
  link?: string | undefined;
};

/** @internal */
export const PreviousPage$inboundSchema: z.ZodType<
  PreviousPage,
  z.ZodTypeDef,
  unknown
> = z.object({
  before: z.string(),
  link: z.string().optional(),
});

/** @internal */
export type PreviousPage$Outbound = {
  before: string;
  link?: string | undefined;
};

/** @internal */
export const PreviousPage$outboundSchema: z.ZodType<
  PreviousPage$Outbound,
  z.ZodTypeDef,
  PreviousPage
> = z.object({
  before: z.string(),
  link: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PreviousPage$ {
  /** @deprecated use `PreviousPage$inboundSchema` instead. */
  export const inboundSchema = PreviousPage$inboundSchema;
  /** @deprecated use `PreviousPage$outboundSchema` instead. */
  export const outboundSchema = PreviousPage$outboundSchema;
  /** @deprecated use `PreviousPage$Outbound` instead. */
  export type Outbound = PreviousPage$Outbound;
}

export function previousPageToJSON(previousPage: PreviousPage): string {
  return JSON.stringify(PreviousPage$outboundSchema.parse(previousPage));
}

export function previousPageFromJSON(
  jsonString: string,
): SafeParseResult<PreviousPage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PreviousPage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PreviousPage' from JSON`,
  );
}
