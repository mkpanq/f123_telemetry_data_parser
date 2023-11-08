import {Parser} from "binary-parser";
import {
    PacketHeader, CarDamagePacket,
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

export type PacketType =
    | MotionPacket
    | SessionPacket
    | LapDataPacket
    | ParticipantsPacket
    | CarSetupPacket
    | CarTelemetryPacket
    | CarStatusPacket
    | FinalClassificationPacket
    | LobbyInfoPacket
    | CarDamagePacket
    | TyreSetsPacket
    | MotionExPacket
    | SessionHistoryDataPacket
