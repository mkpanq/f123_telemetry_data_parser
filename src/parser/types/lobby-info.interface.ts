import {BasePacket} from "./_base.interface";

interface LobbyInfo {
    readonly m_aiControlled: number;
    readonly m_teamId: number;
    readonly m_nationality: number;
    readonly m_platform: number;
    readonly m_name: string;
    readonly m_carNumber: number;
    readonly m_readyStatus: number;
}

export interface LobbyInfoPacket extends BasePacket {
    readonly m_numPlayers: number;
    readonly m_lobbyPlayers: LobbyInfo[];
}