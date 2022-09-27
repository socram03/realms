import { GuildedChatEmbed } from "../index";

export interface APIChannelMessage {
    /** If set, this message will only be seen by those mentioned or replied to */
    isPrivate?: boolean;
    /** If set, this message will not notify any mentioned users or roles (default false) */
    isSilent?: boolean;
    /** Message IDs to reply to (min items 1; max items 5) */
    replyMessageIds?: string[];
    /** The content of the message (min length 1; max length 4000) */
    content?: string;
    /**
     * At this time, only one embed is supported per message, and attachments are not supported.
     * If you need to send more than one embed or upload attachments, consider creating the message via a webhook. (min items 1; max items 1)
     */
    embeds?: GuildedChatEmbed[];
}

/** @link https://www.guilded.gg/docs/api/chat/ChannelMessageCreate */
export type APIChannelMessagePOST = APIChannelMessage;

/** @link https://www.guilded.gg/docs/api/chat/ChannelMessageUpdate */
export type APIChannelMesssagePUT = Pick<APIChannelMessage, 'content' | 'embeds'>;

/** 
 * @link https://www.guilded.gg/docs/api/chat/ChannelMessageReadMany
 * Results returned will be ordered ascending by the message's `createdAt`.
 * `before` and `after` will filter based on the message's createdAt
 */
export interface APIReadManyChannelMessageQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string;
    /** Order will be reversed when compared to before or when omitting this parameter altogether */
    after?: string;
    /** The max size of the page (default 50; min 1; max 100) */
    limit?: number;
    /** Whether to include private messages between all users in response (default false) */
    incluedPrivate?: boolean;
}