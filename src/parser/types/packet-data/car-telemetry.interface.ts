import {HeaderBasePacket} from "../header-base.interface";

interface CarTelemetry {
    readonly m_speed: number;
    readonly m_throttle: number;
    readonly m_steer: number;
    readonly m_brake: number;
    readonly m_clutch: number;
    readonly m_gear: number;
    readonly m_engineRPM: number;
    readonly m_drs: number;
    readonly m_revLightsPercent: number;
    readonly m_revLightsBitValue: number;
    readonly m_brakesTemperature: number[];
    readonly m_tyresSurfaceTemperature: number[];
    readonly m_tyresInnerTemperature: number[];
    readonly m_engineTemperature: number;
    readonly m_tyresPressure: number[];
    readonly m_surfaceType: number[];
}

export interface CarTelemetryPacket extends HeaderBasePacket {
    readonly m_carTelemetryData: CarTelemetry[];
    readonly m_mfdPanelIndex: number;
    readonly m_mfdPanelIndexSecondaryPlayer: number;
    readonly m_suggestedGear: number;
}