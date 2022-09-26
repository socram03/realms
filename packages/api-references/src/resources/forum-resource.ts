import { GuildedMentions } from './channel-resource';

/** @link https://www.guilded.gg/docs/api/forums/ForumTopicSummary */
export interface GuildedForumTopicSummary {
	/** The ID of the forum topic */
	id: number;
	/** The ID of the server */
	serverId: string;
	/** The ID of the channel */
	channelId: string;
	/** The title of the forum topic (min length 1; max length 500) */
	title: string;
	/** The ISO 8601 timestamp that the forum topic was created at */
	createdAt: string;
	/** The ID of the user who created this forum topic */
	createdBy: string;
	/** The ID of the webhook who created this forum topic, if it was created by a webhook */
	createdByWebhookId?: string;
	/** The ISO 8601 timestamp that the forum topic was updated at, if relevant */
	updatedAt?: string;
	/**
	 * The ISO 8601 timestamp that the forum topic was bumped at.
	 * This timestamp is updated whenever there is any activity on the posts within the forum topic.
	 */
	bumpedAt?: string;
	/** If forum topic is pinned (default false) */
	isPinned?: boolean;
	/** If forum topic is locked (default false) */
	isLocked?: boolean;
}

/** @link https://www.guilded.gg/docs/api/forums/ForumTopic */
export interface GuildedForumTopic extends GuildedForumTopicSummary {
	/** The content of the forum topic */
	content: string;
	/** Mentions */
	mentions: GuildedMentions[];
}
