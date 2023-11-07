import {BasePacket} from "./_base.interface";

interface FinalClassification {
    readonly m_position: number;
    readonly m_numLaps: number;
    readonly m_gridPosition: number;
    readonly m_points: number;
    readonly m_numPitStops: number;
    readonly m_resultStatus: number;
    readonly m_bestLapTimeInMS: number;
    readonly m_totalRaceTime: number;
    readonly m_penaltiesTime: number;
    readonly m_numPenalties: number;
    readonly m_numTyreStints: number;
    readonly m_tyreStintsActual: number[];
    readonly m_tyreStintsVisual: number[];
    readonly m_tyreStintsEndLaps: number[];
}

export interface FinalClassificationPacket extends BasePacket {
    readonly m_numCars: number;
    readonly m_classificationData: FinalClassification[];
}
