import dgram from 'node:dgram';
import {MotionPacketParser} from "./parser/parser";

type UdpSocket = dgram.Socket;

export class UdpServer {
    readonly parser: MotionPacketParser;
    OKpackets: number;
    errorPackets: number;

    constructor(parser: MotionPacketParser) {
        this.parser = parser;
        this.errorPackets = 0;
        this.OKpackets = 0;
    }

    public start(port: number): void {
        const socket = this.initSocket();

        socket.bind(port)
    }

    private initSocket(): UdpSocket {
        const socket = dgram.createSocket('udp4');

        socket.on('message', (message) => {
            this.parse(message);
        });

        return socket;
    }

    private parse(message: Buffer): void {
        try {
            const data = this.parser.parseBuffer(message)
            this.OKpackets += 1;
            if (data['m_header']['m_packetId'] == 0) {
                console.log(data);
            }
            console.log(`OK: ${this.OKpackets}`)
            console.log(`Error: ${this.errorPackets}`)
        } catch (e) {
            this.errorPackets += 1;
            console.log(`OK: ${this.OKpackets}`)
            console.log(`Error: ${this.errorPackets}`)
        }
    }
}
