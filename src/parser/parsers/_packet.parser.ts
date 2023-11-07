import {Parser} from "binary-parser";
import {BasePacket, MotionPacket} from "../types";
import {SessionPacket} from "../types/session.interface";
import {LapDataPacket} from "../types/lap-data.interface";
import {ParticipantsPacket} from "../types/participants.interface";

export class BaseParser<TPacketType extends PacketType> extends Parser {
    parseBuffer(buffer: Buffer): TPacketType {
        return this.parse(buffer);
    }
}


// TODO: BasePacket type should be separated from to-parsed packet types !
export type PacketType = BasePacket | MotionPacket | SessionPacket | LapDataPacket | ParticipantsPacket;