import {PacketHeader} from "../header-base.interface";

export interface CarMotionData {
    readonly m_worldPositionX: number;
    readonly m_worldPositionY: number;
    readonly m_worldPositionZ: number;
    readonly m_worldVelocityX: number;
    readonly m_worldVelocityY: number;
    readonly m_worldVelocityZ: number;
    readonly m_worldForwardDirX: number;
    readonly m_worldForwardDirY: number;
    readonly m_worldForwardDirZ: number;
    readonly m_worldRightDirX: number;
    readonly m_worldRightDirY: number;
    readonly m_worldRightDirZ: number;
    readonly m_gForceLateral: number;
    readonly m_gForceLongitudinal: number;
    readonly m_gForceVertical: number;
    readonly m_yaw: number;
    readonly m_pitch: number;
    readonly m_roll: number;
}

export interface MotionPacket extends PacketHeader {
    readonly m_carMotionData: CarMotionData[];
}