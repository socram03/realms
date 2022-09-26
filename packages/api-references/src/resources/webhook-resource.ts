/** @link https://www.guilded.gg/docs/api/webhook/Webhook */
export interface GuildedWebhook {
    /** The ID of the webhook */
    id: string;
    /** The name of the webhook (min length 1; max length 128) */
    name: string;
    /** The ID of the server */
    serverId: string;
    /** The ID of the channel */
    channelId: string;
    /** The ISO 8601 timestamp that the webhook was created at */
    createdAt: string;
    /** The ID of the user who created this webhook */
    createdBy: string;
    /** The ISO 8601 timestamp that the webhook was deleted at */
    deletedAt?: string;
    /** The token of the webhook */
    token?: string;
}