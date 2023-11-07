import {PacketHeaderParser} from "../_header.parser";
import {Parser} from "binary-parser";
import {BaseParser} from "../_packet.parser";
import {CarTelemetryPacket} from "../../types";

export class CarTelemetryPacketParser extends BaseParser<CarTelemetryPacket> {
    constructor() {
        super();

        this.nest({type: new PacketHeaderParser()})
            .nest({
                type: new Parser()
                    .array("m_carTelemetryData", {
                        type: new Parser()
                            .uint16('m_speed')
                            .floatle('m_throttle')
                            .floatle('m_steer')
                            .floatle('m_brake')
                            .uint8('m_clutch')
                            .int8('m_gear')
                            .uint16('m_engineRPM')
                            .uint8('m_drs')
                            .uint8('m_revLightsPercent')
                            .uint16('m_revLightsBitValue')
                            .array('m_brakesTemperature', { type: 'uint16', length: 4 })
                            .array('m_tyresSurfaceTemperature', { type: 'uint8', length: 4 })
                            .array('m_tyresInnerTemperature', { type: 'uint8', length: 4 })
                            .uint16('m_engineTemperature')
                            .array('m_tyresPressure', { type: 'floatle', length: 4 })
                            .array('m_surfaceType', { type: 'uint8', length: 4 }),
                        length: 22
                    })
                    .uint8('m_mfdPanelIndex')
                    .uint8('m_mfdPanelIndexSecondaryPlayer')
                    .int8('m_suggestedGear')
            });
    }
}