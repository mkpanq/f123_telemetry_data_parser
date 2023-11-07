import {MotionPacketParser, PacketHeaderParser, BaseParser, PacketType} from "./parsers";
import {NoParserFoundError} from "./errors";
import {SessionPacketParser} from "./parsers/packets/session.packet";
import {LapDataPacketParser} from "./parsers/packets/lap-data.packet";

export class PacketParser {
    static call(message: Buffer): PacketType {
        const packetId = new PacketHeaderParser().getPacketId(message);
        const parser = this.getParser(packetId);
        if (!parser) { throw new NoParserFoundError(packetId); }

        return parser.parseBuffer(message);
    }
    
    private static getParser(packetId: number): BaseParser<PacketType> | undefined {
        switch (packetId) {
            case 0:
                return new MotionPacketParser();
            case 1:
                return new SessionPacketParser();
            case 2:
                return new LapDataPacketParser();
            case 3:
                return;
            case 4:
                return;
            case 5:
                return;
            case 6:
                return;
            case 7:
                return;
            case 8:
                return;
            case 9:
                return;
            case 10:
                return;
            case 11:
                return;
            case 12:
                return;
            case 13:
                return;
            default:
                return;
        }
    }
}