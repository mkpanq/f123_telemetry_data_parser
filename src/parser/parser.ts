import {Parser} from "binary-parser";
import {MotionPacket} from "./types";

export class MotionPacketParser extends Parser {
    constructor() {
        super();

        this.nest('m_header', {
            type: new Parser()
                .uint16('m_packetFormat')
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
                .uint8('m_secondaryPlayerCarIndex')
        }).nest({
            type: new Parser()
                .array("m_carMotionData", {
                    type: new Parser()
                        .floatle('m_worldPositionX')
                        .floatle('m_worldPositionY')
                        .floatle('m_worldPositionZ')
                        .floatle('m_worldVelocityX')
                        .floatle('m_worldVelocityY')
                        .floatle('m_worldVelocityZ')
                        .int16('m_worldForwardDirX')
                        .int16('m_worldForwardDirY')
                        .int16('m_worldForwardDirZ')
                        .int16('m_worldRightDirX')
                        .int16('m_worldRightDirY')
                        .int16('m_worldRightDirZ')
                        .floatle('m_gForceLateral')
                        .floatle('m_gForceLongitudinal')
                        .floatle('m_gForceVertical')
                        .floatle('m_yaw')
                        .floatle('m_pitch')
                        .floatle('m_roll'),
                    length: 22
                })
        });
    }

    parseBuffer(buffer: Buffer): MotionPacket {
        return this.parse(buffer);
    }
}

