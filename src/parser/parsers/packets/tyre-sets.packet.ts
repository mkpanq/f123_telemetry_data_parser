import {TyreSetsPacket} from "../../types";
import {Parser} from "binary-parser";
import {BaseParser} from "../packet-data.parser";

export class TyreSetsPacketParser extends BaseParser<TyreSetsPacket> {
    constructor() {
        super();

        this.uint8('m_carIdx')
            .array("m_tyreSetData", {
                type: new Parser()
                    .uint8('m_actualTyreCompound')
                    .uint8('m_visualTyreCompound')
                    .uint8('m_wear')
                    .uint8('m_available')
                    .uint8('m_recommendedSession')
                    .uint8('m_lifeSpan')
                    .uint8('m_usableLife')
                    .int16le('m_lapDeltaTime')
                    .uint8('m_fitted'),
                length: 20
            })
            .uint8('m_fittedIdx')
    }
}