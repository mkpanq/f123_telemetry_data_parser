import {
    BaseParser, CarDamagePacketParser,
    CarSetupPacketParser, CarStatusPacketParser, CarTelemetryPacketParser, FinalClassificationPacketParser,
    LapDataPacketParser, LobbyInfoPacketParser, MotionExPacketParser,
    MotionPacketParser,
    PacketType,
    ParticipantsPacketParser, SessionHistoryDataPacketParser,
    SessionPacketParser, TyreSetsPacketParser
} from "./parsers";
import {Parser} from "binary-parser";

export class PacketParser extends BaseParser<PacketType> {
    call(message: Buffer): PacketType {
        return this.parseBuffer(message);
    }

    constructor() {
        super();

        this.useContextVars()
            .nest("m_header", {
            type: new Parser()
                .uint16le('m_packetFormat')
                .uint8('m_gameYear')
                .uint8('m_gameMajorVersion')
                .uint8('m_gameMinorVersion')
                .uint8('m_packetVersion')
                .uint8('m_packetId')
                .uint64('m_sessionUID')
                .floatle('m_sessionTime')
                .uint32('m_frameIdentifier')
                .uint32('m_overallFrameIdentifier')
                .uint8('m_playerCarIndex')
                .uint8('m_secondaryPlayerCarIndex')}
        ).choice({
            tag: (vars: { m_header: {m_packetId: number} }) => vars.m_header.m_packetId,
            choices: {
                0: new MotionPacketParser(),
                1: new SessionPacketParser(),
                2: new LapDataPacketParser(),
                3: new Parser(), //TODO: EventsPacketParser !
                4: new ParticipantsPacketParser(),
                5: new CarSetupPacketParser(),
                6: new CarTelemetryPacketParser(),
                7: new CarStatusPacketParser(),
                8: new FinalClassificationPacketParser(),
                9: new LobbyInfoPacketParser(),
                10: new CarDamagePacketParser(),
                11: new SessionHistoryDataPacketParser(),
                12: new TyreSetsPacketParser(),
                13: new MotionExPacketParser()
            },
            defaultChoice: new Parser()
        })
    }
}