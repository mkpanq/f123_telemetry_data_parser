import {BasePacket} from "../header-base.interface";

export interface CarStatus {
    readonly m_tractionControl: number;
    readonly m_antiLockBrakes: number;
    readonly m_fuelMix: number;
    readonly m_frontBrakeBias: number;
    readonly m_pitLimiterStatus: number;
    readonly m_fuelInTank: number;
    readonly m_fuelCapacity: number;
    readonly m_fuelRemainingLaps: number;
    readonly m_maxRPM: number;
    readonly m_idleRPM: number;
    readonly m_maxGears: number;
    readonly m_drsAllowed: number;
    readonly m_drsActivationDistance: number;
    readonly m_actualTyreCompound: number;
    readonly m_visualTyreCompound: number;
    readonly m_tyresAgeLaps: number;
    readonly m_vehicleFiaFlags: number;
    readonly m_enginePowerICE: number;
    readonly m_enginePowerMGUK: number;
    readonly m_ersStoreEnergy: number;
    readonly m_ersDeployMode: number;
    readonly m_ersHarvestedThisLapMGUK: number;
    readonly m_ersHarvestedThisLapMGUH: number;
    readonly m_ersDeployedThisLap: number;
    readonly m_networkPaused: number;
}

export interface CarStatusPacket extends BasePacket {
    readonly m_carStatusData: CarStatus[];
}