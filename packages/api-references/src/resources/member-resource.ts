import { GuildedUser, GuildedUserSummary } from './user-resource';

/** @link https://www.guilded.gg/docs/api/members */
export interface BaseGuildedMember<User extends GuildedUserSummary> {
    /** The user object */
	user: User;
	/** (must have unique items true) */
	roleIds: number[];
}

/** @link https://www.guilded.gg/docs/api/members/ServerMemberSummary */
export interface GuildedMemberSummary extends BaseGuildedMember<GuildedUserSummary> {};

/** @link https://www.guilded.gg/docs/api/members/ServerMember */
export interface GuildedMember extends BaseGuildedMember<GuildedUser> {
    /** The nickname of member */
	nickname?: string;
    /** The ISO 8601 timestamp that the member was created at */
    joinedAt: string;
    /** If the member is server owner (default false) */
    isOwner?: boolean;
}

/** @link https://www.guilded.gg/docs/api/member-bans/ServerMemberBan */
export interface GuildedMemberBan {
    /** The user object */
    user: GuildedUserSummary;
    /** The reason for the ban as submitted by the banner */
    reason?: string;
    /** The ID of the user who created this server member ban */
    createdBy: string;
    /** The ISO 8601 timestamp that the server member ban was created at */
    createdAt: string;
}
