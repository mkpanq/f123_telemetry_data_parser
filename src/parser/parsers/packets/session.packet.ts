import {BaseParser} from "../packet-data.parser";
import {SessionPacket} from "../../types";
import {Parser} from "binary-parser";

export class SessionPacketParser extends BaseParser<SessionPacket> {
    constructor() {
        super();

        this.uint8('m_weather')
            .int8('m_trackTemperature')
            .int8('m_airTemperature')
            .uint8('m_totalLaps')
            .uint16le('m_trackLength')
            .uint8('m_sessionType')
            .int8('m_trackId')
            .uint8('m_formula')
            .uint16le('m_sessionTimeLeft')
            .uint16le('m_sessionDuration')
            .uint8('m_pitSpeedLimit')
            .uint8('m_gamePaused')
            .uint8('m_isSpectating')
            .uint8('m_spectatorCarIndex')
            .uint8('m_sliProNativeSupport')
            .uint8('m_numMarshalZones')
            .array('m_marshalZones', {
                type: new Parser()
                    .floatle('m_zoneStart')
                    .int8('m_zoneFlag'),
                length: 21
            })
            .uint8('m_safetyCarStatus')
            .uint8('m_networkGame')
            .uint8('m_numWeatherForecastSamples')
            .array('m_weatherForecastSamples', {
                type: new Parser()
                    .uint8('m_sessionType')
                    .uint8('m_timeOffset')
                    .uint8('m_weather')
                    .int8('m_trackTemperature')
                    .int8('m_trackTemperatureChange')
                    .int8('m_airTemperature')
                    .int8('m_airTemperatureChange')
                    .uint8('m_rainPercentage'),
                length: 56
            })
            .uint8('m_forecastAccuracy')
            .uint8('m_aiDifficulty')
            .uint32('m_seasonLinkIdentifier')
            .uint32('m_weekendLinkIdentifier')
            .uint32('m_sessionLinkIdentifier')
            .uint8('m_pitStopWindowIdealLap')
            .uint8('m_pitStopWindowLatestLap')
            .uint8('m_pitStopRejoinPosition')
            .uint8('m_steeringAssist')
            .uint8('m_brakingAssist')
            .uint8('m_gearboxAssist')
            .uint8('m_pitAssist')
            .uint8('m_pitReleaseAssist')
            .uint8('m_ERSAssist')
            .uint8('m_DRSAssist')
            .uint8('m_dynamicRacingLine')
            .uint8('m_dynamicRacingLineType')
            .uint8('m_gameMode')
            .uint8('m_ruleSet')
            .uint32('m_timeOfDay')
            .uint8('m_sessionLength')
            .uint8('m_speedUnitsLeadPlayer')
            .uint8('m_temperatureUnitsLeadPlayer')
            .uint8('m_speedUnitsSecondaryPlayer')
            .uint8('m_temperatureUnitsSecondaryPlayer')
            .uint8('m_numSafetyCarPeriods')
            .uint8('m_numVirtualSafetyCarPeriods')
            .uint8('m_numRedFlagPeriods')
    }
}