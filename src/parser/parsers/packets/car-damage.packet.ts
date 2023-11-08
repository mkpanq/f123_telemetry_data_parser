import {CarDamagePacket} from "../../types";
import {Parser} from "binary-parser";
import {BaseParser} from "../packet-data.parser";

export class CarDamagePacketParser extends BaseParser<CarDamagePacket> {
    constructor() {
        super();

        this.array("m_carMotionData", {
            type: new Parser()
                .array('m_tyresWear', { type: 'floatle', length: 4 })
                .array('m_tyresDamage', { type: 'uint8', length: 4 })
                .array('m_brakesDamage', { type: 'uint8', length: 4 })
                .uint8('m_frontLeftWingDamage')
                .uint8('m_frontRightWingDamage')
                .uint8('m_rearWingDamage')
                .uint8('m_floorDamage')
                .uint8('m_diffuserDamage')
                .uint8('m_sidepodDamage')
                .uint8('m_drsFault')
                .uint8('m_ersFault')
                .uint8('m_gearBoxDamage')
                .uint8('m_engineDamage')
                .uint8('m_engineMGUHWear')
                .uint8('m_engineESWear')
                .uint8('m_engineCEWear')
                .uint8('m_engineICEWear')
                .uint8('m_engineMGUKWear')
                .uint8('m_engineTCWear')
                .uint8('m_engineBlown')
                .uint8('m_engineSeized'),
            length: 22
        })
    }
}