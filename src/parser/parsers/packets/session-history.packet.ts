import {SessionHistoryDataPacket} from "../../types";
import {Parser} from "binary-parser";
import {BaseParser} from "../packet-data.parser";

export class SessionHistoryDataPacketParser extends BaseParser<SessionHistoryDataPacket> {
    constructor() {
        super();

        this.uint8('m_carIdx')
            .uint8('m_numLaps')
            .uint8('m_numTyreStints')
            .uint8('m_bestLapTimeLapNum')
            .uint8('m_bestSector1LapNum')
            .uint8('m_bestSector2LapNum')
            .uint8('m_bestSector3LapNum')
            .array("m_lapHistoryData", {
                type: new Parser()
                    .uint32le('m_lapTimeInMS')
                    .uint16le('m_sector1TimeInMS')
                    .uint8('m_sector1TimeMinutes')
                    .uint16le('m_sector2TimeInMS')
                    .uint8('m_sector2TimeMinutes')
                    .uint16le('m_sector3TimeInMS')
                    .uint8('m_sector3TimeMinutes')
                    .uint8('m_lapValidBitFlags'),
                length: 100
            })
            .array("m_tyreStintsHistoryData", {
                type: new Parser()
                    .uint8('m_endLap')
                    .uint8('m_tyreActualCompound')
                    .uint8('m_tyreVisualCompound'),
                length: 8
            })
    }
}