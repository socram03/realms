export const SUCCESSFUL = 200;
export const CONTENT_CREATED = 201;
export const NOT_RETURNED = 204;
export const UNACCEPTABLE = 400;
export const INVALID_TOKEN = 401;
export const MISSING_PERMISSIONS = 403;
export const NOT_EXIST = 404;
export const REQUEST_CONFLICTED = 409;
export const RATE_LIMITED = 429;
export const SERVER_ERROR = 500;
export const SERVER_OVERLOADED = 502;
export const SERVER_UNAVAILABLE = 504;

/** @link https://www.guilded.gg/docs/api/http_status_codes */
export enum HTTPStatusCodes {
	/** The request was successful */
	Successful = SUCCESSFUL,
	/** The content was created */
	ContentCreated = CONTENT_CREATED,
	/** No content returned */
	NotReturned = NOT_RETURNED,
	/** The request was unacceptable, often due to missing parameters */
	Unacceptable = UNACCEPTABLE,
	/** The access token is missing or invalid */
	InvalidToken = INVALID_TOKEN,
	/** The bot does not have the necessary permissions */
	MissingPermissions = MISSING_PERMISSIONS,
	/** The requested resource does not exist */
	NotExist = NOT_EXIST,
	/** The request conflicted with another request */
	RequestConflicted = REQUEST_CONFLICTED,
	/** The bot was performing requests too often and is being rate limited */
	RateLimited = RATE_LIMITED,
	/** Something went wrong on our end */
	ServerError = SERVER_ERROR,
	/** Rare, server could be overloaded or unavailable */
	ServerOverloaded = SERVER_OVERLOADED,
	ServerUnavailable = SERVER_UNAVAILABLE,
}

/** @link https://www.guilded.gg/docs/api/http_api_errors */
export interface HTTPAPIErrors {
	// Undocumented
	code: string;
	message: string;
	// Undocumented, it may save you some debugging time!
	meta: Record<string, unknown[]>;
}

/** CUSTOM TYPES */

export type ObjectIdentity<T> = T extends infer U
	? {
			[K in keyof U]: U[K];
	  }
	: never;

export type PickPartial<T, Keys extends keyof T> = ObjectIdentity<
	{
		[K in Exclude<keyof T, Keys>]: T[K];
	} & {
		[K in Keys]?: T[K] | undefined;
	}
>;

export type MakeRequired<T, K extends keyof T> = ObjectIdentity<T & { [P in K]-?: T[P] }>;
