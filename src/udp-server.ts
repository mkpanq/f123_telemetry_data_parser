import dgram from 'node:dgram';
import {PacketParser} from "./parser";

type UdpSocket = dgram.Socket;

export class UdpServer {

    public start(port: number): void {
        const socket = this.initSocket();

        socket.bind(port)
    }

    private initSocket(): UdpSocket {
        const socket = dgram.createSocket('udp4');

        socket.on('message', (message) => {
            try {
                const packetParser = new PacketParser();
                const parsedPacket = packetParser.call(message);

                if (parsedPacket) { console.log(parsedPacket); }
            } catch (error) {
                console.error(error);
            }
        });

        return socket;
    }

}
