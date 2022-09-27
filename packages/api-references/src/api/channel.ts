import { GuildedChannelTypes } from '../index';

export interface APIBaseChannelCreate {
	/** The type of channel to create */
	type: GuildedChannelTypes;
}

// Due to early access, it is only available to create channels on servers
export interface APIServerChannel extends APIBaseChannelCreate {
    /** The name of the channel (min length 1; max length 100) */
	name: string;
    /** The topic of the channel (min length 1; max length 512) */
	topic?: string;
    /** Whether the channel can be accessed from users who are not member of the server (default false) */
	isPublic?: boolean;
    /** 
     * The server that the channel should be created in.
     * Optional if providing a groupId or categoryId
     */
    serverId?: string;
    /**
     * The group that the channel should be created in. 
     * If not provided, channel will be created in the "Server home" group from serverId or in the group that corresponds to the categoryId parameter
     */
    groupId?: string;
    /** The category the channel should go in. If not provided, channel will be a top-level channel */
    categoryId?: number;
}

/**
 * @link https://www.guilded.gg/docs/api/channels/ChannelCreate
 * Early access note: only server channels are supported at this time (coming soon™: DM Channels!)
 */
export type APIServerChannelPOST = APIServerChannel;

/** 
 * @link https://www.guilded.gg/docs/api/channels/ChannelUpdate
 * Early access note: only server channels are supported at this time (coming soon™: DM Channels!)
 */
export type APIServerChannelPUT = Partial<Pick<APIServerChannel, 'isPublic' | 'name' | 'topic'>>;