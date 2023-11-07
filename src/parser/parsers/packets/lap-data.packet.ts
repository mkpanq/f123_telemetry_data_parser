import {BaseParser} from "../_packet.parser";
import {PacketHeaderParser} from "../_header.parser";
import {Parser} from "binary-parser";
import {LapDataPacket} from "../../types/lap-data.interface";

export class LapDataPacketParser extends BaseParser<LapDataPacket> {
    constructor() {
        super();

        this.nest({type: new PacketHeaderParser()})
            .nest({
                type: new Parser()
                    .array("m_lapData", {
                        type: new Parser()
                            .uint32('m_lastLapTimeInMS')
                            .uint32('m_currentLapTimeInMS')
                            .uint16('m_sector1TimeInMS')
                            .uint8('m_sector1TimeMinutes')
                            .uint16('m_sector2TimeInMS')
                            .uint8('m_sector2TimeMinutes')
                            .uint16('m_deltaToCarInFrontInMS')
                            .uint16('m_deltaToRaceLeaderInMS')
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
                            .uint16('m_pitLaneTimeInLaneInMS')
                            .uint16('m_pitStopTimerInMS')
                            .uint8('m_pitStopShouldServePen'),
                        length: 22
                    })
                    .uint8('m_timeTrialPBCarIdx')
                    .uint8('m_timeTrialRivalCarIdx')
            });
    }
}
