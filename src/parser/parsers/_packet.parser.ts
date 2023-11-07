import {Parser} from "binary-parser";
import {
    BasePacket,
    CarSetupPacket,
    CarTelemetryPacket,
    LapDataPacket,
    MotionPacket,
    ParticipantsPacket,
    SessionPacket
} from "../types";


export class BaseParser<TPacketType extends PacketType> extends Parser {
    parseBuffer(buffer: Buffer): TPacketType {
        return this.parse(buffer);
    }
}


// TODO: BasePacket type should be separated from to-parsed packet types !
export type PacketType =
    BasePacket |
    MotionPacket |
    SessionPacket |
    LapDataPacket |
    ParticipantsPacket |
    CarSetupPacket |
    CarTelemetryPacket;