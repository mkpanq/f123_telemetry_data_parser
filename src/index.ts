import {UdpServer} from "./udp-server";
import {HeaderParser} from "./header-parser";

const port: number = 20777;
const server = new UdpServer(new HeaderParser());

server.start(port);