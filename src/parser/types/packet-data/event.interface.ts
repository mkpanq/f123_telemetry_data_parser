import {PacketHeader} from "../header-base.interface";

interface FastestLapEvent {
    readonly vehicleIdx: number;
    readonly lapTime: number;
}

interface RetirementEvent {
    readonly vehicleIdx: number;
}

interface TeamMateInPitsEvent {
    readonly vehicleIdx: number;
}

interface RaceWinnerEvent {
    readonly vehicleIdx: number;
}

interface PenaltyEvent {
    readonly penaltyType: number;
    readonly infringementType: number;
    readonly vehicleIdx: number;
    readonly otherVehicleIdx: number;
    readonly time: number;
    readonly lapNum: number;
    readonly placesGained: number;
}

interface SpeedTrapEvent {
    readonly vehicleIdx: number;
    readonly speed: number;
    readonly isOverallFastestInSession: number;
    readonly isDriverFastestInSession: number;
    readonly fastestVehicleIdxInSession: number;
    readonly fastestSpeedInSession: number;
}

interface StartLightsEvent {
    readonly numLights: number;
}

interface DriveThroughPenaltyServedEvent {
    readonly vehicleIdx: number;
}

interface StopGoPenaltyServedEvent {
    readonly vehicleIdx: number;
}

interface FlashbackEvent {
    readonly flashbackFrameIdentifier: number;
    readonly flashbackSessionTime: number;
}

interface ButtonsEvent {
    readonly buttonStatus: number;
}

interface OvertakeEvent {
    readonly overtakingVehicleIdx: number;
    readonly beingOvertakenVehicleIdx: number;
}

export interface EventPacket extends PacketHeader {
    readonly m_eventStringCode: string;
    readonly m_eventDetails: (
        | FastestLapEvent
        | RetirementEvent
        | TeamMateInPitsEvent
        | RaceWinnerEvent
        | PenaltyEvent
        | SpeedTrapEvent
        | StartLightsEvent
        | DriveThroughPenaltyServedEvent
        | StopGoPenaltyServedEvent
        | FlashbackEvent
        | ButtonsEvent
        | OvertakeEvent
        );
}

export type EventWithDetailsCode =
    | 'FTLP'
    | 'RTMT'
    | 'TMPT'
    | 'RCWN'
    | 'PENA'
    | 'SPTP'
    | 'STLG'
    | 'DTSV'
    | 'SGSV'
    | 'FLBK'
    | 'BUTN'
    | 'OVTK'

export type EventWithoutDetailsCode =
    | 'SSTA'
    | 'SEND'
    | 'DRSE'
    | 'DRSD'
    | 'CHQF'
    | 'LGOT'
    | 'RDFL'

export type EventCode = EventWithDetailsCode | EventWithoutDetailsCode;

export const EVENT_NUMBER_CODE: Record<EventCode, number> = {
    'SSTA': 0,
    'SEND': 1,
    'FTLP': 2,
    'RTMT': 3,
    'DRSE': 4,
    'DRSD': 5,
    'TMPT': 6,
    'CHQF': 7,
    'RCWN': 8,
    'PENA': 9,
    'SPTP': 10,
    'STLG': 11,
    'LGOT': 12,
    'DTSV': 13,
    'SGSV': 14,
    'FLBK': 15,
    'BUTN': 16,
    'RDFL': 17,
    'OVTK': 18
}