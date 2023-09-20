export class NoParserFoundError extends Error {
    constructor(packetId: number) {
        super(`No parser found for packet id ${packetId}`);
    }
}