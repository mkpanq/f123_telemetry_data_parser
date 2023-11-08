import {BaseParser} from "../packet-data.parser";
import {ParticipantsPacket} from "../../types";
import {PacketHeaderParser} from "../header.parser";
import {Parser} from "binary-parser";

export class ParticipantsPacketParser extends BaseParser<ParticipantsPacket> {
    constructor() {
        super();

        this.nest({type: new PacketHeaderParser()})
            .nest({
                type: new Parser()
                    .uint8('m_numActiveCars')
                    .array("m_participants", {
                        type: new Parser()
                            .uint8('m_aiControlled')
                            .uint8('m_driverId')
                            .uint8('m_networkId')
                            .uint8('m_teamId')
                            .uint8('m_myTeam')
                            .uint8('m_raceNumber')
                            .uint8('m_nationality')
                            .string('m_name', {length: 48})
                            .uint8('m_yourTelemetry')
                            .uint8('m_showOnlineNames')
                            .uint8('m_platform'),
                        length: 22
                    })
            });
    }
}
