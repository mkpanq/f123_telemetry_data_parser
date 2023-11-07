import {FinalClassificationPacket, MotionPacket} from "../../types";
import {PacketHeaderParser} from "../_header.parser";
import {Parser} from "binary-parser";
import {BaseParser} from "../_packet.parser";

export class FinalClassificationPacketParser extends BaseParser<FinalClassificationPacket> {
    constructor() {
        super();

        this.nest({type: new PacketHeaderParser()})
            .uint8('m_numCars')
            .nest({
                type: new Parser()
                    .array("m_classificationData", {
                        type: new Parser()
                            .uint8('m_position')
                            .uint8('m_numLaps')
                            .uint8('m_gridPosition')
                            .uint8('m_points')
                            .uint8('m_numPitStops')
                            .uint8('m_resultStatus')
                            .uint32('m_bestLapTimeInMS')
                            .doublele('m_totalRaceTime')
                            .uint8('m_penaltiesTime')
                            .uint8('m_numPenalties')
                            .uint8('m_numTyreStints')
                            .array('m_tyreStintsActual', { type: 'uint8', length: 8 })
                            .array('m_tyreStintsVisual', { type: 'uint8', length: 8 })
                            .array('m_tyreStintsEndLaps', { type: 'uint8', length: 8 }),
                        length: 22
                    })
            });
    }
}