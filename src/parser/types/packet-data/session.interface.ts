import {BasePacket} from "../header-base.interface";

interface WeatherForecastSample {
    readonly m_sessionType: number;
    readonly m_timeOffset: number;
    readonly m_weather: number;
    readonly m_trackTemperature: number;
    readonly m_trackTemperatureChange: number;
    readonly m_airTemperature: number;
    readonly m_airTemperatureChange: number;
    readonly m_rainPercentage: number;
}

interface MarshallZone {
    readonly m_zoneStart: number;
    readonly m_zoneFlag: number;
}

export interface SessionPacket extends BasePacket {
    readonly m_weather: number;
    readonly m_trackTemperature: number;
    readonly m_airTemperature: number;
    readonly m_totalLaps: number;
    readonly m_trackLength: number;
    readonly m_sessionType: number;
    readonly m_trackId: number;
    readonly m_formula: number;
    readonly m_sessionTimeLeft: number;
    readonly m_sessionDuration: number;
    readonly m_pitSpeedLimit: number;
    readonly m_gamePaused: number;
    readonly m_isSpectating: number;
    readonly m_spectatorCarIndex: number;
    readonly m_sliProNativeSupport: number;
    readonly m_numMarshalZones: number;
    readonly m_marshalZones: MarshallZone[];
    readonly m_safetyCarStatus: number;
    readonly m_networkGame: number;
    readonly m_numWeatherForecastSamples: number;
    readonly m_weatherForecastSamples: WeatherForecastSample[];
    readonly m_forecastAccuracy: number;
    readonly m_aiDifficulty: number;
    readonly m_seasonLinkIdentifier: number;
    readonly m_weekendLinkIdentifier: number;
    readonly m_sessionLinkIdentifier: number;
    readonly m_pitStopWindowIdealLap: number;
    readonly m_pitStopWindowLatestLap: number;
    readonly m_pitStopRejoinPosition: number;
    readonly m_steeringAssist: number;
    readonly m_brakingAssist: number;
    readonly m_gearboxAssist: number;
    readonly m_pitAssist: number;
    readonly m_pitReleaseAssist: number;
    readonly m_ERSAssist: number;
    readonly m_DRSAssist: number;
    readonly m_dynamicRacingLine: number;
    readonly m_dynamicRacingLineType: number;
    readonly m_gameMode: number;
    readonly m_ruleSet: number;
    readonly m_timeOffDay: number;
    readonly m_sessionLength: number;
    readonly m_speedUnitsLeadPlayer: number;
    readonly m_temperatureUnitsLeadPlayer: number;
    readonly m_speedUnitsSecondaryPlayer: number;
    readonly m_temperatureUnitsSecondaryPlayer: number;
    readonly m_numSafetyCarPeriods: number;
    readonly m_numVirtualSafetyCarPeriods: number;
    readonly m_numRedFlagPeriods: number;
}

