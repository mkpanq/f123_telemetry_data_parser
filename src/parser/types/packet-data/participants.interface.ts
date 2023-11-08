import {PacketHeader} from "../header-base.interface";

interface ParticipantData {
    readonly m_aiControlled: number;
    readonly m_driverId: number;
    readonly m_networkId: number;
    readonly m_teamId: number;
    readonly m_myTeam: number;
    readonly m_raceNumber: number;
    readonly m_nationality: number;
    readonly m_name: string;
    readonly m_yourTelemetry: number;
    readonly m_showOnlineNames: number;
    readonly m_platform: number;
}

export interface ParticipantsPacket extends PacketHeader {
    readonly m_numActiveCars: number;
    readonly m_participants: ParticipantData[];
}