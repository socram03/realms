import { PickPartial } from '../reference';

export interface APIWebhook {
	/** The name of the webhook (min length 1; max length 128) */
	name: string;
	/** Channel ID to create the webhook in */
	channelId: string;
}

/** @link https://www.guilded.gg/docs/api/webhook/WebhookCreate */
export type APIWebhookPOST = APIWebhook;

export interface APIWebhookQuery {
	/** ID of the channel you want to filter for webhooks */
	channelId: string;
}

/** @link https://www.guilded.gg/docs/api/webhook/WebhookUpdate */
export type APIWebhookPUT = PickPartial<APIWebhook, 'channelId'>;