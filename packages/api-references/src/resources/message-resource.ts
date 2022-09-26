import { GuildedMentions } from "./channel-resource";

/** @link https://www.guilded.gg/docs/api/chat/ChatMessage */
export interface GuildedChatMessage {
    /** The ID of the message */
    id: string;
    /** 
     * The type of chat message.
     * "system" messages are generated by Guilded, while "default" messages are user or bot-generated.
     */
    type: GuildedChatMessageTypes;
    /** The ID of the server */
    serverId?: string;
    /** The ID of the channel */
    channelId: string;
    /** The content of the message */
    content?: string;
    /** (min items 1; max items 10) */
    embeds?: GuildedChatEmbed[];
    /** Message IDs that were replied to (min items 1; max items 5) */
    replyMessageIds: string[];
    /** If set, this message will only be seen by those mentioned or replied to */
    isPrivate?: boolean;
    /** If set, this message did not notify mention or reply recipients (default false) */
    isSilent?: boolean;
    /**  Mentions */
    mentions?: GuildedMentions[];
    /** The ISO 8601 timestamp that the message was created at */
    createdAt: string;
    /** The ISO 8601 timestamp that the message was created at */
    createdBy: string;
    /** The ID of the webhook who created this message, if it was created by a webhook */
    createdByWebhookId?: string;
    /** The ISO 8601 timestamp that the message was updated at, if relevant */
    updatedAt?: string;

}

export enum GuildedChatMessageTypes {
    default = "default",
    system = "system"
}

/** @link https://www.guilded.gg/docs/api/chat/ChatEmbed */
export interface GuildedChatEmbed {
    /** Main header of the embed (max length 256) */
    title?: string;
    /** Subtext of the embed (max length 2048) */
    description?: string;
    /** URL to linkify the title field with (max length 1024) */
    url?: string;
    /** Decimal value of the color that the left border should be (min 0; max 16777215) */
    color?: number;
    /** A small section at the bottom of the embed */
    footer?: GuildedChatEmbedFooter;
    /** A timestamp to put in the footer */
    timestamp?: string;
    /** An image to the right of the embed's content */
    thumbnail?: GuildedChatEmbedThumbnail;
    /** The main picture to associate with the embed */
    image?: GuildedChatEmbedImage;
    /** A small section above the title of the embed */
    author?: GuildedChatEmbedAuthor;
    /** Table-like cells to add to the embed (max items 25) */
    fields?: GuildedChatEmbedField[];
}

export interface GuildedChatEmbedFooter {
    /**  URL of a small image to put in the footer (max length 1024) */
    icon_url?: string;
    /** Text of the footer (max length 2048) */
    text: string;
}

export interface GuildedChatEmbedThumbnail {
    /** URL of the image (max length 1024) */
    url?: string;
};

export interface GuildedChatEmbedImage {
    /** URL of the image (max length 1024) */
    url?: string;
}

export interface GuildedChatEmbedAuthor {
    /** Name of the author (max length 256) */
    name?: string;
    /** URL to linkify the author's name field (max length 1024) */
    url?: string;
    /** URL of a small image to display to the left of the author's name (max length 1024) */
    icon_url?: string;
}

export interface GuildedChatEmbedField {
    /** Header of the table-like cell (max length 256) */
    name: string;
    /** Subtext of the table-like cell (max length 1024) */
    value: string;
    /** If the field should wrap or not (default false) */
    inline: boolean;
}