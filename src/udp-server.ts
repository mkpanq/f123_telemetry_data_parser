import dgram from 'node:dgram';

type UdpSocket = dgram.Socket;

export class UdpServer {
    private readonly parser;

    constructor(parser: any) {
        this.parser = parser
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
        const parsedData = this.parser.parseHeader(message);

        console.log(parsedData)
    }
}
