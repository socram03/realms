/** @link https://www.guilded.gg/docs/api/members/UserSummary */
export interface GuildedUserSummary {
    /** The ID of the user */
    id: string;
    /** 
     * The type of user.
     * If this property is absent, it can assumed to be of type user 
     */
    type?: GuildedUserTypes;
    /** The name of the user */
    name: string;
    /** The avatar image associated with the user */
    avatar?: string;
}

/** @link https://www.guilded.gg/docs/api/members/User */
export interface GuildedUser extends GuildedUserSummary {
    /** The banner image associated with the user */
    banner?: string;
    /** The ISO 8601 timestamp that the user was created at */
    createdAt: string;
}

export enum GuildedUserTypes {
    user = 'user',
    bot = 'bot'
}
