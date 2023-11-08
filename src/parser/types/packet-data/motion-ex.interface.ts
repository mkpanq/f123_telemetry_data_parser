import {PacketHeader} from "../header-base.interface";

export interface MotionExPacket extends PacketHeader {
    readonly m_suspensionPosition: number[];
    readonly m_suspensionVelocity: number[];
    readonly m_suspensionAcceleration: number[];
    readonly m_wheelSpeed: number[];
    readonly m_wheelSlipRatio: number[];
    readonly m_wheelSlipAngle: number[];
    readonly m_wheelLatForce: number[];
    readonly m_wheelLongForce: number[];
    readonly m_heightOfCOGAboveGround: number;
    readonly m_localVelocityX: number;
    readonly m_localVelocityY: number;
    readonly m_localVelocityZ: number;
    readonly m_angularVelocityX: number;
    readonly m_angularVelocityY: number;
    readonly m_angularVelocityZ: number;
    readonly m_angularAccelerationX: number;
    readonly m_angularAccelerationY: number;
    readonly m_angularAccelerationZ: number;
    readonly m_frontWheelsAngle: number;
    readonly m_wheelVertForce: number[];
}