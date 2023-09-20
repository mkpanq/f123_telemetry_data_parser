import {BasePacket} from "../types";
import {Parser} from "binary-parser";
import {BaseParser} from "./_packet.parser";

export class PacketHeaderParser extends BaseParser<BasePacket> {
    constructor() {
        super();

        this.nest('m_header', {
            type: new Parser()
                .uint16('m_packetFormat')
                .uint8('m_gameYear')
                .uint8('m_gameMajorVersion')
                .uint8('m_gameMinorVersion')
                .uint8('m_packetVersion')
                .uint8('m_packetId')
                .uint64('m_sessionUID')
                .floatle('m_sessionTime')
                .uint32('m_frameIdentifier')
                .uint32('m_overallFrameIdentifier')
                .uint8('m_playerCarIndex')
                .uint8('m_secondaryPlayerCarIndex')
        });
    }

    getPacketId(buffer: Buffer): number {
        return this.parseBuffer(buffer)['m_header']['m_packetId'];
    }
}