const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray'); 
const calculateDistance = require('./utils/calculateDistance');

const connections = []; // litthe workaround, maybe should be stored on a database
let io;

exports.setupWebsocket = (server) => {
    io = socketio(server);
    io.on('connection', function(socket) {
        const { latitude, longitude, techs } = socket.handshake.query;
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs)
        });
    });
};

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 10
            && connection.techs.some(item => techs.includes(item));
    });
};

exports.sendMessages = (sendTo, message, data) => {
    sendTo.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
};