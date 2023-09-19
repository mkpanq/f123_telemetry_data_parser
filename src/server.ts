import dgram from 'node:dgram';

export class Server {
    PORT: number = 20777;

    private readonly listener: dgram.Socket;

    constructor() {
        this.listener = dgram.createSocket('udp4');
        console.log('Listener initialized\n')
    }

    public start(): void {
        const serverSetup = this.setupListening().setupMessageReceiving();

        serverSetup.listener.bind(this.PORT)
    }

    private setupListening(): this {
        this.listener.on('listening', () => {
            const address = this.listener.address()

            console.log('Address: ', address.address, 'Port: ', address.port)
        });

        return this
    }

    private setupMessageReceiving(): this {
        this.listener.on('message', (message) => {
            console.log('Message', message.toString())
        });

        return this
    }
}