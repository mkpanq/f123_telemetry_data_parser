import {UdpServer} from "./udp-server";

const port: number = 20777;
const server = new UdpServer();

server.start(port);