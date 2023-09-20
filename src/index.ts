import {UdpServer} from "./udp-server";
import {MotionPacketParser} from "./parser/parser";

const port: number = 20777;
const parser = new MotionPacketParser();
const server = new UdpServer(parser);

server.start(port);