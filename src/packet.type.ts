export type PacketHeader = {}


interface UdpPacket<TPacketType> {
    readonly header: PacketHeader;
    readonly packet: TPacketType;
}