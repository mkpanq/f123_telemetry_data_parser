import {PacketHeader} from "../types";
import {Parser} from "binary-parser";
import {BaseParser} from "./packet-data.parser";
import {MotionPacketParser} from "./packets";

export class PacketHeaderParser extends BaseParser<PacketHeader> {
    constructor() {
        super();

        this.nest('m_header', {
            type: new Parser()
                .uint16le('m_packetFormat')
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
        })
        // TODO: Implement refactor ! Use one packet parser, use choice instead of switch
        // .choice({
        //     tag: 'm_packetId',
        //     choices: {
        //         1: new MotionPacketParser()
        //     }
        // });
    }

    getPacketId(buffer: Buffer): number {
        return this.parseBuffer(buffer)['m_header']['m_packetId'];
    }
}