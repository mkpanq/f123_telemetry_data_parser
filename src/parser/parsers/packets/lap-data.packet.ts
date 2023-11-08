import {BaseParser} from "../packet-data.parser";
import {Parser} from "binary-parser";
import {LapDataPacket} from "../../types";

export class LapDataPacketParser extends BaseParser<LapDataPacket> {
    constructor() {
        super();

        this.array("m_lapData", {
            type: new Parser()
                .uint32('m_lastLapTimeInMS')
                .uint32('m_currentLapTimeInMS')
                .uint16le('m_sector1TimeInMS')
                .uint8('m_sector1TimeMinutes')
                .uint16le('m_sector2TimeInMS')
                .uint8('m_sector2TimeMinutes')
                .uint16le('m_deltaToCarInFrontInMS')
                .uint16le('m_deltaToRaceLeaderInMS')
                .floatle('m_lapDistance')
                .floatle('m_totalDistance')
                .floatle('m_safetyCarDelta')
                .uint8('m_carPosition')
                .uint8('m_currentLapNum')
                .uint8('m_pitStatus')
                .uint8('m_numPitStops')
                .uint8('m_sector')
                .uint8('m_currentLapInvalid')
                .uint8('m_penalties')
                .uint8('m_totalWarnings')
                .uint8('m_cornerCuttingWarnings')
                .uint8('m_numUnservedDriveThroughPens')
                .uint8('m_numUnservedStopGoPens')
                .uint8('m_gridPosition')
                .uint8('m_driverStatus')
                .uint8('m_resultStatus')
                .uint8('m_pitLaneTimerActive')
                .uint16le('m_pitLaneTimeInLaneInMS')
                .uint16le('m_pitStopTimerInMS')
                .uint8('m_pitStopShouldServePen'),
            length: 22
            })
            .uint8('m_timeTrialPBCarIdx')
            .uint8('m_timeTrialRivalCarIdx')
    }
}
