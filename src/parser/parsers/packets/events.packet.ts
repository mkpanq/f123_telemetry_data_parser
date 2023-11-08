import {BaseParser} from "../packet-data.parser";
import {EVENT_NUMBER_CODE, EventCode, EventPacket, EventWithDetailsCode} from "../../types";
import {Parser} from "binary-parser";

export class EventsPacketParser extends BaseParser<EventPacket> {
    constructor() {
        super();

        this.string('m_eventStringCode', { length: 4 })
            .choice('m_eventDetails', {
                tag: (vars: { m_eventStringCode: string }) => EVENT_NUMBER_CODE[vars.m_eventStringCode as EventCode],
                choices: {
                    [EVENT_NUMBER_CODE['FTLP']]: EVENT_PARSER_CODE['FTLP'],
                    [EVENT_NUMBER_CODE['RTMT']]: EVENT_PARSER_CODE['RTMT'],
                    [EVENT_NUMBER_CODE['TMPT']]: EVENT_PARSER_CODE['TMPT'],
                    [EVENT_NUMBER_CODE['RCWN']]: EVENT_PARSER_CODE['RCWN'],
                    [EVENT_NUMBER_CODE['PENA']]: EVENT_PARSER_CODE['PENA'],
                    [EVENT_NUMBER_CODE['SPTP']]: EVENT_PARSER_CODE['SPTP'],
                    [EVENT_NUMBER_CODE['STLG']]: EVENT_PARSER_CODE['STLG'],
                    [EVENT_NUMBER_CODE['DTSV']]: EVENT_PARSER_CODE['DTSV'],
                    [EVENT_NUMBER_CODE['SGSV']]: EVENT_PARSER_CODE['SGSV'],
                    [EVENT_NUMBER_CODE['FLBK']]: EVENT_PARSER_CODE['FLBK'],
                    [EVENT_NUMBER_CODE['BUTN']]: EVENT_PARSER_CODE['BUTN'],
                    [EVENT_NUMBER_CODE['OVTK']]: EVENT_PARSER_CODE['OVTK'],
                },
                defaultChoice: new Parser()
            })
    }
}

export const EVENT_PARSER_CODE: Record<EventWithDetailsCode, Parser> = {
    'FTLP': new Parser().uint8('vehicleIdx').floatle('lapTime'),
    'RTMT': new Parser().uint8('vehicleIdx'),
    'TMPT': new Parser().uint8('vehicleIdx'),
    'RCWN': new Parser().uint8('vehicleIdx'),
    'PENA': new Parser().uint8('penaltyType')
                        .uint8('infringementType')
                        .uint8('vehicleIdx')
                        .uint8('otherVehicleIdx')
                        .uint8('time')
                        .uint8('lapNum')
                        .uint8('placesGained'),
    'SPTP': new Parser().uint8('vehicleIdx')
                        .floatle('speed')
                        .uint8('isOverallFastestInSession')
                        .uint8('isDriverFastestInSession')
                        .uint8('fastestVehicleIdxInSession')
                        .floatle('fastestSpeedInSession'),
    'STLG': new Parser().uint8('numLights'),
    'DTSV': new Parser().uint8('vehicleIdx'),
    'SGSV': new Parser().uint8('vehicleIdx'),
    'FLBK': new Parser().uint32('flashbackFrameIdentifier')
                        .floatle('flashbackSessionTime'),
    'BUTN': new Parser().uint32('buttonStatus'),
    'OVTK': new Parser().uint8('overtakingVehicleIdx')
                        .uint8('beingOvertakenVehicleIdx'),
}

