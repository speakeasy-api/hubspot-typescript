/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  SearchCompaniesAcceptEnum,
  searchSearchCompanies,
} from "../funcs/searchSearchCompanies.js";
import {
  SearchContactsAcceptEnum,
  searchSearchContacts,
} from "../funcs/searchSearchContacts.js";
import {
  SearchDealsAcceptEnum,
  searchSearchDeals,
} from "../funcs/searchSearchDeals.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { SearchCompaniesAcceptEnum } from "../funcs/searchSearchCompanies.js";

export { SearchContactsAcceptEnum } from "../funcs/searchSearchContacts.js";

export { SearchDealsAcceptEnum } from "../funcs/searchSearchDeals.js";

export class Search extends ClientSDK {
  /**
   * Search for companies
   *
   * @remarks
   * Search for companies by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   */
  async searchCompanies(
    request: components.PublicObjectSearchRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: SearchCompaniesAcceptEnum;
    },
  ): Promise<operations.SearchCompaniesResponse> {
    return unwrapAsync(searchSearchCompanies(
      this,
      request,
      options,
    ));
  }

  /**
   * Search for contacts
   *
   * @remarks
   * Search for contacts by filtering on properties, searching through associations, and sorting results. Learn more about [CRM search](https://developers.hubspot.com/docs/guides/api/crm/search#make-a-search-request).
   */
  async searchContacts(
    request: components.PublicObjectSearchRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: SearchContactsAcceptEnum;
    },
  ): Promise<operations.SearchContactsResponse> {
    return unwrapAsync(searchSearchContacts(
      this,
      request,
      options,
    ));
  }

  async searchDeals(
    request: components.PublicObjectSearchRequest,
    options?: RequestOptions & { acceptHeaderOverride?: SearchDealsAcceptEnum },
  ): Promise<operations.SearchDealsResponse> {
    return unwrapAsync(searchSearchDeals(
      this,
      request,
      options,
    ));
  }
}
