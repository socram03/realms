import { GuildedMentions } from './channel-resource';

/** @link https://www.guilded.gg/docs/api/listItems/ListItemSummary */
export interface GuildedListItemSummary<
	Note extends GuildedListItemSummaryNote = GuildedListItemSummaryNote,
> {
	/** The ID of the list item */
	id: string;
	/** The ID of the server */
	serverId: string;
	/** The ID of the channel */
	channelId: string;
	/** The message of the list item */
	message: string;
	/** Mentions */
	mentions?: GuildedMentions[];
	/** The ISO 8601 timestamp that the list item was created at */
	createdAt: string;
	/** The ID of the user who created this list item */
	createdBy: string;
	/** The ID of the webhook who created this list item, if it was created by a webhook */
	createdByWebhookId?: string;
	/** The ISO 8601 timestamp that the message was updated at, if relevant */
	updatedAt?: string;
	/** The ID of the user who updated this list item */
	updatedBy?: string;
	/** The ID of the parent list item if this list item is nested */
	parentListItemId?: string;
	/** The ISO 8601 timestamp that the list item was completed at */
	completedAt?: string;
	/** The note object */
	note?: Note;
}

/** @link https://www.guilded.gg/docs/api/listItems/ListItem */
export interface GuildedListItem extends GuildedListItemSummary<GuildedListItemNote> {};

export interface GuildedListItemSummaryNote {
	/** The ISO 8601 timestamp that the note was created at. If this field is populated, then there's a note associated with the list item */
	createdAt: string;
	/** The ID of the user who created this note */
	createdBy: string;
	/** The ISO 8601 timestamp that the note was updated at, if relevant */
	updatedAt?: string;
	/** The ID of the user who updated this note */
	updatedBy?: string;
}

export interface GuildedListItemNote extends GuildedListItemSummaryNote {
    /** Mentions */
    mentions?: GuildedMentions[];
    /** The note of the list item */
    content: string;
}