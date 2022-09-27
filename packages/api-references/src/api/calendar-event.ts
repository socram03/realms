import { CalendarEventRsvpStatus } from "../index";

export interface APICalendarEvent {
    /** The name of the event (min length 1; max length 60) */
    name: string;
    /**  The description of the event (min length 1; max length 8000) */
    description?: string;
    /** The location of the event (min length 1; max length 8000) */
    location?: string;
    /** The ISO 8601 timestamp that the event starts at */
    startsAt?: string;
    /** A URL to associate with the event */
    url?: string;
    /** The color of the event when viewing in the calendar (min 0; max 16777215) */
    color?: number;
    /** The number of RSVPs to allow before waitlisting RSVPs (min 1) */
    rsvpLimit?: number;
    /** The duration of the event in minutes (min 1) */
    duration?: number;
    /** If event is private */
    isPrivate?: boolean;
}

/** @link https://www.guilded.gg/docs/api/calendarEvents/CalendarEventCreate */
export type APICalendarEventPOST = APICalendarEvent;

/** https://www.guilded.gg/docs/api/calendarEvents/CalendarEventUpdate */
export type APICalendarEventPATCH = Partial<APICalendarEvent>;

export interface APICalendarEventRsvp {
    status: CalendarEventRsvpStatus;
}

/** @link https://www.guilded.gg/docs/api/calendarEvents/CalendarEventRsvpUpdate */
export type APICalendarEventRsvpPUT = APICalendarEventRsvp;

/**
 * Results returned will be ordered ascending by the event's `startsAt`.
 * `before` and `after` will filter based on the event's `startsAt`
 * @link https://www.guilded.gg/docs/api/calendarEvents/CalendarEventReadMany
 */
export interface APIReadManyCalendarEventQuery {
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    before?: string;
    /** An ISO 8601 timestamp that will be used to filter out results for the current page */
    after?: string;
    /** The max size of the page (default 25; min 1; max 500) */
    limit?: number;
}
