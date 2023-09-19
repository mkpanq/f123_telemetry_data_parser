import {UdpServer} from "./udp-server";
import {HeaderParser} from "./parser/parser";

const port: number = 20777;
const parser = new HeaderParser();
const server = new UdpServer(parser);

server.start(port);