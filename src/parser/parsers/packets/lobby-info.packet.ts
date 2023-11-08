import {LobbyInfoPacket} from "../../types";
import {Parser} from "binary-parser";
import {BaseParser} from "../packet-data.parser";

export class LobbyInfoPacketParser extends BaseParser<LobbyInfoPacket> {
    constructor() {
        super();

        this.uint8('m_numPlayers')
            .array("m_lobbyPlayers", {
                type: new Parser()
                    .uint8('m_aiControlled')
                    .uint8('m_teamId')
                    .uint8('m_nationality')
                    .uint8('m_platform')
                    .string('m_name', {length: 48})
                    .uint8('m_carNumber')
                    .uint8('m_readyStatus'),
                length: 22
            })
    }
}