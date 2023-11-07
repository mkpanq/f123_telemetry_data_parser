import {
    MotionPacketParser,
    PacketHeaderParser,
    BaseParser,
    PacketType,
    SessionPacketParser,
    LapDataPacketParser,
    ParticipantsPacketParser,
    CarSetupPacketParser,
    CarTelemetryPacketParser,
    CarStatusPacketParser,
    FinalClassificationPacketParser,
    CarDamagePacketParser,
    TyreSetsPacketParser,
    LobbyInfoPacketParser,
    MotionExPacketParser
} from "./parsers";
import {NoParserFoundError} from "./errors";


export class PacketParser {
    static call(message: Buffer): PacketType {
        const packetId = new PacketHeaderParser().getPacketId(message);
        const parser = this.getParser(packetId);
        if (!parser) { throw new NoParserFoundError(packetId); }

        return parser.parseBuffer(message);
    }
    
    private static getParser(packetId: number): BaseParser<PacketType> | undefined {
        switch (packetId) {
            case 0:  return new MotionPacketParser();
            case 1:  return new SessionPacketParser();
            case 2:  return new LapDataPacketParser();
            case 3:  return;
            case 4:  return new ParticipantsPacketParser();
            case 5:  return new CarSetupPacketParser();
            case 6:  return new CarTelemetryPacketParser();
            case 7:  return new CarStatusPacketParser();
            case 8:  return new FinalClassificationPacketParser();
            case 9:  return new LobbyInfoPacketParser();
            case 10: return new CarDamagePacketParser();
            case 11: return;
            case 12: return new TyreSetsPacketParser();
            case 13: return new MotionExPacketParser()
            default: return;
        }
    }
}