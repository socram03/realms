export interface APIUpdateMemberNickname {
	/** The nickname to assign to the member */
	nickname: string;
}

/** @link https://www.guilded.gg/docs/api/members/MemberNicknameUpdate */
export type APIUpdateMemberNicknamePUT = APIUpdateMemberNickname;

export interface APIServerMemberBan {
    /** The reason for the ban */
    reason: string;
}

/** @link https://www.guilded.gg/docs/api/member-bans/ServerMemberBanCreate */
export type APIServerMemberBanPOST = APIServerMemberBan;