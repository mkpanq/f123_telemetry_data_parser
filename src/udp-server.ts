import dgram from 'node:dgram';
import {UdpParser} from "./parser/parser";

type UdpSocket = dgram.Socket;

export class UdpServer {
    readonly parser: UdpParser<any>;

    constructor(parser: UdpParser<any>) {
        this.parser = parser;
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
        console.log(this.parser.parseBuffer(message));
    }
}
