/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';
import { SinkTestList } from './sink/sinkTest';
import { SinkTestListInstance } from './sink/sinkTest';
import { SinkValidateList } from './sink/sinkValidate';
import { SinkValidateListInstance } from './sink/sinkValidate';

type SinkSinkType = 'kinesis';

type SinkStatus = 'initialized'|'validating'|'active'|'failed';

/**
 * Initialize the SinkList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function SinkList(version: V1): SinkListInstance;

interface SinkListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SinkContext;
  /**
   * create a SinkInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SinkListInstanceCreateOptions, callback?: (error: Error | null, item: SinkInstance) => any): Promise<SinkInstance>;
  /**
   * Streams SinkInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: SinkInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SinkInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SinkListInstanceEachOptions, callback?: (item: SinkInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sink
   *
   * @param sid - The sid
   */
  get(sid: string): SinkContext;
  /**
   * Retrieve a single target page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  /**
   * Retrieve a single target page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  /**
   * Lists SinkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SinkInstance[]) => any): Promise<SinkInstance[]>;
  /**
   * Lists SinkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SinkListInstanceOptions, callback?: (error: Error | null, items: SinkInstance[]) => any): Promise<SinkInstance[]>;
  /**
   * Retrieve a single page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  /**
   * Retrieve a single page of SinkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SinkListInstancePageOptions, callback?: (error: Error | null, items: SinkPage) => any): Promise<SinkPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property description - The description
 * @property sinkConfiguration - The sink_configuration
 * @property sinkType - The sink_type
 */
interface SinkListInstanceCreateOptions {
  description: string;
  sinkConfiguration: object;
  sinkType: SinkSinkType;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SinkListInstanceEachOptions {
  callback?: (item: SinkInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SinkListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SinkListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SinkPayload extends SinkResource, Page.TwilioResponsePayload {
}

interface SinkResource {
  date_created: Date;
  date_updated: Date;
  description: string;
  links: string;
  sid: string;
  sink_configuration: object;
  sink_type: SinkSinkType;
  status: SinkStatus;
  url: string;
}

interface SinkSolution {
}


declare class SinkContext {
  /**
   * Initialize the SinkContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a SinkInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SinkInstance) => any): Promise<SinkInstance>;
  /**
   * remove a SinkInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SinkInstance) => any): Promise<boolean>;
  sinkTest: SinkTestListInstance;
  sinkValidate: SinkValidateListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class SinkInstance extends SerializableClass {
  /**
   * Initialize the SinkContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: SinkPayload, sid: string);

  private _proxy: SinkContext;
  dateCreated: Date;
  dateUpdated: Date;
  description: string;
  /**
   * fetch a SinkInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SinkInstance) => any): Promise<SinkInstance>;
  links: string;
  /**
   * remove a SinkInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SinkInstance) => any): Promise<boolean>;
  sid: string;
  sinkConfiguration: any;
  /**
   * Access the sinkTest
   */
  sinkTest(): SinkTestListInstance;
  sinkType: SinkSinkType;
  /**
   * Access the sinkValidate
   */
  sinkValidate(): SinkValidateListInstance;
  status: SinkStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class SinkPage extends Page<V1, SinkPayload, SinkResource, SinkInstance> {
  /**
   * Initialize the SinkPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SinkSolution);

  /**
   * Build an instance of SinkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SinkPayload): SinkInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SinkContext, SinkInstance, SinkList, SinkListInstance, SinkListInstanceCreateOptions, SinkListInstanceEachOptions, SinkListInstanceOptions, SinkListInstancePageOptions, SinkPage, SinkPayload, SinkResource, SinkSinkType, SinkSolution, SinkStatus }
