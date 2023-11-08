import {PacketHeader} from "../header-base.interface";

interface TyreSetsData {
    readonly m_actualTyreCompound: number;
    readonly m_visualTyreCompound: number;
    readonly m_wear: number;
    readonly m_available: number;
    readonly m_recommendedSession: number;
    readonly m_lifeSpan: number;
    readonly m_usableLife: number;
    readonly m_lapDeltaTime: number;
    readonly m_fitted: number;
}

export interface TyreSetsPacket extends PacketHeader {
    readonly m_carIds: number;
    readonly m_tyreSetData: TyreSetsData[];
    readonly m_fittedIdx: number
}