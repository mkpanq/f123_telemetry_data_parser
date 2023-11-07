import {BasePacket} from "./_base.interface";

interface LapHistoryData {
    readonly m_lapTimeInMS: number;
    readonly m_sector1TimeInMS: number;
    readonly m_sector1TimeMinutes: number;
    readonly m_sector2TimeInMS: number;
    readonly m_sector2TimeMinutes: number;
    readonly m_sector3TimeInMS: number;
    readonly m_sector3TimeMinutes: number;
    readonly m_lapValidBitFlags: number;
}

interface TyreStintHistoryData {
    readonly m_endLap: number;
    readonly m_tyreActualCompound: number;
    readonly m_tyreVisualCompound: number;
}

export interface SessionHistoryDataPacket extends BasePacket {
    readonly m_carIdx: number;
    readonly m_numLaps: number;
    readonly m_numTyreStints: number;
    readonly m_bestLapTimeLapNum: number;
    readonly m_bestSector1LapNum: number;
    readonly m_bestSector2LapNum: number;
    readonly m_bestSector3LapNum: number;
    readonly m_lapHistoryData: LapHistoryData[];
    readonly m_tyreStintsHistoryData: TyreStintHistoryData[];
}