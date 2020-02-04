const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection', function(socket) {
        console.log(socket.id);
    });
};