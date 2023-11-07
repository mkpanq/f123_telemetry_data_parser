import {Parser} from "binary-parser";
import {
    BasePacket, CarDamagePacket,
    CarSetupPacket, CarStatusPacket,
    CarTelemetryPacket, FinalClassificationPacket,
    LapDataPacket, LobbyInfoPacket, MotionExPacket,
    MotionPacket,
    ParticipantsPacket, SessionHistoryDataPacket,
    SessionPacket, TyreSetsPacket
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
    CarTelemetryPacket |
    CarStatusPacket |
    FinalClassificationPacket |
    LobbyInfoPacket |
    CarDamagePacket |
    TyreSetsPacket |
    MotionExPacket |
    SessionHistoryDataPacket;