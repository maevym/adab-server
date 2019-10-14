const db = require('./conn');

module.exports = (http) => {
    const io = require('socket.io')(http);
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
        let connectedRoomId;

        socket.on('join_room', (roomId) => {
            socket.join(roomId);
            connectedRoomId = roomId;
            console.log('a user connected to room #' + roomId);
        });

        socket.on('message', (msg) => {
            io.to(connectedRoomId).emit('message', msg);

            const query = "UPDATE sessions SET content = content || ? || ' ' WHERE session_id = ?";
            db.run(query, [msg, connectedRoomId]);

        });

        socket.on('disconnect_room', () => {
            socket.leave(connectedRoomId, () => {
                connectedRoomId = null;
            });
        });

        socket.on('disconnect', () => {
            console.log('a user disconnected');
        });

    });

};