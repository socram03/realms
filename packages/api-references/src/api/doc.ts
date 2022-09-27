export interface APIDoc {
    /** The title of the doc (min length 1) */
    title: string;
    /** The content of the doc */
    content: string;
}

/** @link https://www.guilded.gg/docs/api/docs/DocCreate */
export type APIDocPOST = APIDoc;

/** @link https://www.guilded.gg/docs/api/docs/DocUpdate */
export type APIDocPUT = APIDoc;

export interface APIDocQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string;
    /** The max size of the page (default 25; min 1; max 100) */
    limit?: number;
}