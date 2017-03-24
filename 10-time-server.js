var net = require('net');

var server = net.createServer(function listener(socket) {
    var date = new Date();
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth() + 1;
    dateMonth = dateMonth.toString();
    if (dateMonth.length < 2) {
        dateMonth = "0"+dateMonth;
    }
    var dateDay = date.getDate().toString();
    if (dateDay.length < 2) {
        dateDay = "0"+dateDay;
    }
    var dateHours = date.getHours().toString();
    if (dateHours.length < 2) {
        dateHours = "0"+dateHours;
    }
    var dateMinutes = date.getMinutes().toString();
    if (dateMinutes.length < 2) {
        dateMinutes = "0"+dateMinutes;
    }
    var dateString = dateYear+"-"+dateMonth+"-"+dateDay+" "+dateHours+":"
                    +dateMinutes;
    socket.end(dateString+"\n");
})

server.listen(process.argv[2]);