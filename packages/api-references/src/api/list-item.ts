export interface APIListItem {
    /** The message of the list item */
    message: string;
    /** */
    note: {
        /** The note of the list item */
        content: string;
    }
}

/** @link https://www.guilded.gg/docs/api/listItems/ListItemCreate */
export type APIListItemPOST = APIListItem;

/** @link https://www.guilded.gg/docs/api/listItems/ListItemUpdate */
export type APIListItemPUT = Partial<APIListItem>;