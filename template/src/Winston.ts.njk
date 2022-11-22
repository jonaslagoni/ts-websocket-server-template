'use strict';
import * as winston from 'winston';
import DailyRotateFile = require('winston-daily-rotate-file');

const rotationTransport = new DailyRotateFile({
	filename: 'rust-api-%DATE%.log',
	datePattern: 'YYYY-MM-DD-HH',
	zippedArchive: true,
	maxSize: '20m',
	maxFiles: '14d',
	dirname: './logger/logs'
});

const consoleTransport = new winston.transports.Console({
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.simple()
	),
	level: 'debug'
});
const errorLog = winston.createLogger({
	transports: [rotationTransport, consoleTransport]
});

const debugLog = winston.createLogger({
	transports: [rotationTransport, consoleTransport]
});

function logError(msg: string, obj?: any) {
	errorLog.log('error', msg, obj);
}

function logDebug(msg: string, obj?: any) {
	debugLog.log('debug', msg, obj);
}

function logInfo(msg: string, obj?: any) {
	debugLog.log('info', msg, obj);
}

function logExpressRequest(req: any, name: string) {
	logInfo(`${name}: Request was from ip: ${req.ip}`);
	logInfo(`${name}: Body was: ${JSON.stringify(req.body)}`);
	logInfo(`${name}: Params was: ${JSON.stringify(req.params)}`);
	logInfo(`${name}: Query was: ${JSON.stringify(req.query)}`);
	logInfo(`${name}: Headers was: ${JSON.stringify(req.headers)}`);
}
export { logError, logDebug, logInfo, logExpressRequest };
