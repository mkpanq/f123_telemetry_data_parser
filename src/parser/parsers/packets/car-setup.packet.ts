import {PacketHeaderParser} from "../_header.parser";
import {Parser} from "binary-parser";
import {BaseParser} from "../_packet.parser";
import {CarSetupPacket} from "../../types";

export class CarSetupPacketParser extends BaseParser<CarSetupPacket> {
    constructor() {
        super();

        this.nest({type: new PacketHeaderParser()})
            .nest({
                type: new Parser()
                    .array("m_carSetups", {
                        type: new Parser()
                            .uint8('m_frontWing')
                            .uint8('m_rearWing')
                            .uint8('m_onThrottle')
                            .uint8('m_offThrottle')
                            .floatle('m_frontCamber')
                            .floatle('m_rearCamber')
                            .floatle('m_frontToe')
                            .floatle('m_rearToe')
                            .uint8('m_frontSuspension')
                            .uint8('m_rearSuspension')
                            .uint8('m_frontAntiRollBar')
                            .uint8('m_rearAntiRollBar')
                            .uint8('m_frontSuspensionHeight')
                            .uint8('m_rearSuspensionHeight')
                            .uint8('m_brakePressure')
                            .uint8('m_brakeBias')
                            .floatle('m_rearLeftTyrePressure')
                            .floatle('m_rearRightTyrePressure')
                            .floatle('m_frontLeftTyrePressure')
                            .floatle('m_frontRightTyrePressure')
                            .uint8('m_ballast')
                            .floatle('m_fuelLoad'),
                        length: 22
                    })
            });
    }
}