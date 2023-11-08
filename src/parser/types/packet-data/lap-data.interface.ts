import {HeaderBasePacket} from "../header-base.interface";

interface LapData {
    readonly m_lastLapTimeInMS: number;
    readonly m_currentLapTimeInMS: number;
    readonly m_sector1TimeInMS: number;
    readonly m_sector1TimeMinutes: number;
    readonly m_sector2TimeInMS: number;
    readonly m_sector2TimeMinutes: number;
    readonly m_deltaToCarInFrontInMS: number;
    readonly m_deltaToRaceLeaderInMS: number;
    readonly m_lapDistance: number;
    readonly m_totalDistance: number;
    readonly m_safetyCarDelta: number;
    readonly m_carPosition: number;
    readonly m_currentLapNum: number;
    readonly m_pitStatus: number;
    readonly m_numPitStops: number;
    readonly m_sector: number;
    readonly m_currentLapInvalid: number;
    readonly m_penalties: number;
    readonly m_totalWarnings: number;
    readonly m_cornerCuttingWarnings: number;
    readonly m_numUnservedDriveThroughPens: number;
    readonly m_numUnservedStopGoPens: number;
    readonly m_gridPosition: number;
    readonly m_driverStatus: number;
    readonly m_resultStatus: number;
    readonly m_pitLaneTimerActive: number;
    readonly m_pitLaneTimeInLaneInMS: number;
    readonly m_pitStopTimerInMS: number;
    readonly m_pitStopShouldServePen: number;
}

export interface LapDataPacket extends HeaderBasePacket {
    readonly m_lapData: LapData[];
    readonly m_timeTrialPBCarIdx: number;
    readonly m_timeTrialRivalCarIdx: number;
}

