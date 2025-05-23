/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HubspotCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

export enum UpdateContactAcceptEnum {
  applicationJson = "application/json",
  wildcardRootWildcard = "*/*",
}

/**
 * Update a contact
 *
 * @remarks
 * Update a contact by ID (`contactId`) or unique property value (`idProperty`). Provided property values will be overwritten. Read-only and non-existent properties will result in an error. Properties values can be cleared by passing an empty string.
 */
export function basicUpdateContact(
  client: HubspotCore,
  request: operations.UpdateContactRequest,
  options?: RequestOptions & { acceptHeaderOverride?: UpdateContactAcceptEnum },
): APIPromise<
  Result<
    operations.UpdateContactResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: HubspotCore,
  request: operations.UpdateContactRequest,
  options?: RequestOptions & { acceptHeaderOverride?: UpdateContactAcceptEnum },
): Promise<
  [
    Result<
      operations.UpdateContactResponse,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.UpdateContactRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.SimplePublicObjectInput, {
    explode: true,
  });

  const pathParams = {
    contactId: encodeSimple("contactId", payload.contactId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/crm/v3/objects/contacts/{contactId}")(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: options?.acceptHeaderOverride || "application/json;q=1, */*;q=0",
  }));

  const secConfig = await extractSecurity(client._options.hubspotToken);
  const securityInput = secConfig == null ? {} : { hubspotToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "updateContact",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.hubspotToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PATCH",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.UpdateContactResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.UpdateContactResponse$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
    M.bytes("default", operations.UpdateContactResponse$inboundSchema, {
      ctype: "*/*",
    }),
  )(response);
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
