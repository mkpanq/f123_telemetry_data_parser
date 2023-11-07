import {BasePacket} from "./_base.interface";

interface CarDamageData {
    readonly m_tyresWear: number[];
    readonly m_tyresDamage: number[];
    readonly m_brakesDamage: number[];
    readonly m_frontLeftWingDamage: number;
    readonly m_frontRightWingDamage: number;
    readonly m_rearWingDamage: number;
    readonly m_floorDamage: number;
    readonly m_diffuserDamage: number;
    readonly m_sidepodDamage: number;
    readonly m_drsFault: number;
    readonly m_ersFault: number;
    readonly m_gearBoxDamage: number;
    readonly m_engineDamage: number;
    readonly m_engineMGUHWear: number;
    readonly m_engineESWear: number;
    readonly m_engineCEWear: number;
    readonly m_engineICEWear: number;
    readonly m_engineMGUKWear: number;
    readonly m_engineTCWear: number;
    readonly m_engineBlown: number;
    readonly m_engineSeized: number;
}

export interface CarDamagePacket extends BasePacket {
    readonly m_carDamageData: CarDamageData[];
}