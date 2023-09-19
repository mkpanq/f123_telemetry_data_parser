import {Parser} from "binary-parser";
import {BasePacket, MotionPacket} from "./types";

// TODO: Base packet should not be here, if its extended by MotionPacket (?)
type PacketTypes = MotionPacket;

// For parsing header and additional data per parser use:
// https://github.com/keichi/binary-parser#arrayname-options - array of parsers (for all cars data)
// https://github.com/keichi/binary-parser#choicename-options - choice for different packet types, depended on packageId
export class UdpParser<TPacketTypes extends PacketTypes> extends Parser {
    // constructor() {
    //     super();
    //
    //     this.uint16('m_packetFormat')
    //         .uint8('m_gameYear')
    //         .uint8('m_gameMajorVersion')
    //         .uint8('m_gameMinorVersion')
    //         .uint8('m_packetVersion')
    //         .uint8('m_packetId')
    //         .uint64('m_sessionUID')
    //         .floatle('m_sessionTime')
    //         .uint32('m_frameIdentifier')
    //         .uint32('m_overallFrameIdentifier')
    //         .uint8('m_playerCarIndex')
    //         .uint8('m_secondaryPlayerCarIndex')
    // }

    parseBuffer(buffer: Buffer): TPacketTypes {
        return this.parse(buffer);
    }
}

// export class MotionParser extends UdpParser<MotionPacket> {
//     constructor() {
//         super();
//
//         this.uint16('m_packetFormat')
//             .uint8('m_gameYear')
//             .uint8('m_gameMajorVersion')
//             .uint8('m_gameMinorVersion')
//             .uint8('m_packetVersion')
//             .uint8('m_packetId')
//             .uint64('m_sessionUID')
//             .floatle('m_sessionTime')
//             .uint32('m_frameIdentifier')
//             .uint32('m_overallFrameIdentifier')
//             .uint8('m_playerCarIndex')
//             .uint8('m_secondaryPlayerCarIndex')
//     }
// }