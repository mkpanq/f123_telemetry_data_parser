import dgram from 'node:dgram';
import {HeaderParser} from "./header-parser";

export class Server {
    private readonly listener: dgram.Socket;

    constructor() {
        this.listener = dgram.createSocket('udp4');
        console.log('Listener initialized\n')
    }

    public start(port: number): void {
        const serverSetup = this.setupListening().setupMessageReceiving();

        serverSetup.listener.bind(port)
    }

    // Connection configuration
    private setupListening(): this {
        this.listener.on('listening', () => {
            const address = this.listener.address()

            console.log('Address: ', address.address, 'Port: ', address.port)
        });

        return this
    }

    // Data receiving configuration
    private setupMessageReceiving(): this {
        const headerParser = new HeaderParser();
        this.listener.on('message', (message) => {

            const parsedData = headerParser.parseHeader(message);
            console.log('Message Received:\n');
            console.log(parsedData)
        });

        return this
    }
}