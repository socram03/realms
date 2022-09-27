export interface APIAwardXP {
    /** The amount of XP to award (min -1000; max 1000) */
    amount: number;
}

export interface APISetXP {
    /** The total XP to set on the user (min -1000000000; max 1000000000) */
    total: number;
}

/** @link https://www.guilded.gg/docs/api/server-xp/ServerXpForUserCreate */
export type APIServerAwardXPPOST = APIAwardXP;

/** @link https://www.guilded.gg/docs/api/server-xp/ServerXpForUserUpdate */
export type APIMemberSetXPPUT = APISetXP;

/** @link https://www.guilded.gg/docs/api/server-xp/ServerXpForRoleCreate */
export type APIRoleAwardXPPOST = APIAwardXP;