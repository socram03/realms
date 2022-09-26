/** @link https://www.guilded.gg/docs/api/servers/Server */
export interface GuildedServer {
    /** The ID of the server */
    id: string;
    /** The ID of the user who created this server */
    ownerId: string;
    /** The type of server designated from the server's settings page */
    type?: GuildedServerTypes;
    /** The name given to the server */
    name?: string;
    /** The URL that the server can be accessible from.  */
    url?: string;
    /** The description associated with the server */
    about?: string;
    /** The avatar image associated with the server */
    avatar?: string;
    /** The banner image associated with the server */
    banner?: string;
    /** The timezone associated with the server */
    timezone?: string;
    /** The verified status of the server */
    isVerifed?: boolean;
    /**
     * The channel ID of the default channel of the server.
     * Useful for welcome messages
     */
    defaultChannelId?: string;
    /** The ISO 8601 timestamp that the server was created at */
    createdAt: string;
}

export enum GuildedServerTypes {
	team = 'team',
	organization = 'organization',
	community = 'community',
	clan = 'clan',
	guild = 'guild',
	friends = 'friends',
	streaming = 'streaming',
	other = 'other',
}
