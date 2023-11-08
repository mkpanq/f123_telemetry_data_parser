import {HeaderBasePacket} from "../header-base.interface";

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

export interface EventPacket extends HeaderBasePacket {
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