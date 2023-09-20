import dgram from 'node:dgram';
import {PacketParser} from "./parser";

type UdpSocket = dgram.Socket;

export class UdpServer {
    okPackets: number;
    errorPackets: number;

    constructor() {
        this.errorPackets = 0;
        this.okPackets = 0;
    }

    public start(port: number): void {
        const socket = this.initSocket();

        socket.bind(port)
    }

    private initSocket(): UdpSocket {
        const socket = dgram.createSocket('udp4');

        socket.on('message', (message) => {
            try {
                const parsedPacket = PacketParser.call(message);
                console.log(parsedPacket);
                this.okPackets += 1;
            } catch (error) {
                this.errorPackets += 1;
            }

            // console.log(`OK: ${this.okPackets}`)
            // console.log(`Error: ${this.errorPackets}`)
        });

        return socket;
    }

}
