import {MotionExPacket} from "../../types";
import {BaseParser} from "../packet-data.parser";

export class MotionExPacketParser extends BaseParser<MotionExPacket> {
    constructor() {
        super();

        this.array('m_suspensionPosition', { type: 'floatle', length: 4 })
            .array('m_suspensionVelocity', { type: 'floatle', length: 4 })
            .array('m_suspensionAcceleration', { type: 'floatle', length: 4 })
            .array('m_wheelSpeed', { type: 'floatle', length: 4 })
            .array('m_wheelSlipRatio', { type: 'floatle', length: 4 })
            .array('m_wheelSlipAngle', { type: 'floatle', length: 4 })
            .array('m_wheelLatForce', { type: 'floatle', length: 4 })
            .array('m_wheelLongForce', { type: 'floatle', length: 4 })
            .floatle('m_heightOfCOGAboveGround')
            .floatle('m_localVelocityX')
            .floatle('m_localVelocityY')
            .floatle('m_localVelocityZ')
            .floatle('m_angularVelocityX')
            .floatle('m_angularVelocityY')
            .floatle('m_angularVelocityZ')
            .floatle('m_angularAccelerationX')
            .floatle('m_angularAccelerationY')
            .floatle('m_angularAccelerationZ')
            .floatle('m_frontWheelsAngle')
            .array('m_wheelVertForce', { type: 'floatle', length: 4 })
    }
}