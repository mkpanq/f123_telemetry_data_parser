interface HeaderData {
    readonly m_packetFormat: number;
    readonly m_gameYear: number;
    readonly m_gameMajorVersion: number;
    readonly m_gameMinorVersion: number;
    readonly m_packetVersion: number;
    readonly m_packetId: number;
    readonly m_sessionUID: number;
    readonly m_sessionTime: number;
    readonly m_frameIdentifier: number;
    readonly m_overallFrameIdentifier: number;
    readonly m_playerCarIndex: number;
    readonly m_secondaryPlayerCarIndex: number;
}

export interface HeaderBasePacket {
    readonly m_header: HeaderData;
}