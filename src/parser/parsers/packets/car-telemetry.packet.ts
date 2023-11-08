import {Parser} from "binary-parser";
import {BaseParser} from "../packet-data.parser";
import {CarTelemetryPacket} from "../../types";

export class CarTelemetryPacketParser extends BaseParser<CarTelemetryPacket> {
    constructor() {
        super();

        this.array("m_carTelemetryData", {
            type: new Parser()
                .uint16le('m_speed')
                .floatle('m_throttle')
                .floatle('m_steer')
                .floatle('m_brake')
                .uint8('m_clutch')
                .int8('m_gear')
                .uint16le('m_engineRPM')
                .uint8('m_drs')
                .uint8('m_revLightsPercent')
                .uint16le('m_revLightsBitValue')
                .array('m_brakesTemperature', { type: 'uint16le', length: 4 })
                .array('m_tyresSurfaceTemperature', { type: 'uint8', length: 4 })
                .array('m_tyresInnerTemperature', { type: 'uint8', length: 4 })
                .uint16le('m_engineTemperature')
                .array('m_tyresPressure', { type: 'floatle', length: 4 })
                .array('m_surfaceType', { type: 'uint8', length: 4 }),
            length: 22
        })
            .uint8('m_mfdPanelIndex')
            .uint8('m_mfdPanelIndexSecondaryPlayer')
            .int8('m_suggestedGear')
    }
}