export interface APIForumTopic {
    /** The title of the forum topic (min length 1; max length 500) */
    title: string;
    /** The content of the forum topic (min length 1; max length 4000) */
    content: string;
}

/** @link https://www.guilded.gg/docs/api/forums/ForumTopicCreate */
export type APIForumTopicPOST = APIForumTopic;

/** @link https://www.guilded.gg/docs/api/forums/ForumTopicUpdate */
export type APIForumTopicPUT = Partial<APIForumTopic>;

export interface APIForumTopicQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string;
    /** The max size of the page (default 25; min 1; max 100) */
    limit?: number;
}