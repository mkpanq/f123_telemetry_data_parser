import {HeaderBasePacket} from "../header-base.interface";

interface CarSetupData {
    readonly m_frontWing: number;
    readonly m_rearWing: number;
    readonly m_onThrottle: number;
    readonly m_offThrottle: number;
    readonly m_frontCamber: number;
    readonly m_rearCamber: number;
    readonly m_frontToe: number;
    readonly m_rearToe: number;
    readonly m_frontSuspension: number;
    readonly m_rearSuspension: number;
    readonly m_frontAntiRollBar: number;
    readonly m_rearAntiRollBar: number;
    readonly m_frontSuspensionHeight: number;
    readonly m_rearSuspensionHeight: number;
    readonly m_brakePressure: number;
    readonly m_brakeBias: number;
    readonly m_rearLeftTyrePressure: number;
    readonly m_rearRightTyrePressure: number;
    readonly m_frontLeftTyrePressure: number;
    readonly m_frontRightTyrePressure: number;
    readonly m_ballast: number;
    readonly m_fuelLoad: number;
}

export interface CarSetupPacket extends HeaderBasePacket {
    readonly m_carSetups: CarSetupData[];
}