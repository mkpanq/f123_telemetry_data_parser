import {MotionPacket} from "../../types";
import {Parser} from "binary-parser";
import {BaseParser} from "../packet-data.parser";

export class MotionPacketParser extends BaseParser<MotionPacket> {
    constructor() {
        super();

        this.array("m_carMotionData", {
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
    }
}