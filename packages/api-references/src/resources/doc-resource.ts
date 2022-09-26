import { GuildedMentions } from "./channel-resource";

/** @link https://www.guilded.gg/docs/api/docs/Doc */
export interface GuildedDoc {
    /** The ID of the doc (min 1) */
    id: number;
    /** The ID of the server */
    serverId: string;
    /** The ID of the channel */
    channelId: string;
    /** The title of the doc (min length 1) */
    title: string;
    /** The content of the doc */
    content: string;
    /** Mentions */
    mentions?: GuildedMentions[];
    /** The ISO 8601 timestamp that the doc was created at */
    createdAt: string;
    /** The ID of the user who created this doc */
    createdBy: string;
    /** The ISO 8601 timestamp that the doc was updated at, if relevant */
    updateAt?: string;
    /** The ID of the user who updated this doc */
    updatedBy?: string;
}