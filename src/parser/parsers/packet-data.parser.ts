import {Parser} from "binary-parser";
import {
    CarDamagePacket,
    CarSetupPacket, CarStatusPacket,
    CarTelemetryPacket, EventPacket, FinalClassificationPacket,
    LapDataPacket, LobbyInfoPacket, MotionExPacket,
    MotionPacket,
    ParticipantsPacket, SessionHistoryDataPacket,
    SessionPacket, TyreSetsPacket
} from "../types";

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
    | EventPacket

export class BaseParser<TPacketType extends PacketType> extends Parser {
    parseBuffer(buffer: Buffer): TPacketType {
        return this.parse(buffer);
    }
}

