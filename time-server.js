const net = require('net');

const server = net.createServer(socket => {
  const date = new Date();
  let formattedDate = `${date.getFullYear()}-`;
  const createFormattedDate = () => {
    if (date.getMonth() < 9) {
      formattedDate += `0${date.getMonth() + 1}-`;
    } else {
      formattedDate += `${date.getMonth()}-`;
    }
    if (date.getDate() < 10) {
      formattedDate += `0${date.getDate()} `;
    } else {
      formattedDate += `${date.getDate()} `;
    }
    if (date.getHours() < 10) {
      formattedDate += `0${date.getHours()}:`;
    } else {
      formattedDate += `${date.getHours()}:`;
    }
    if (date.getMinutes() < 10) {
      formattedDate += `0${date.getMinutes()}\n`;
    } else {
      formattedDate += `${date.getMinutes()}\n`;
    }
  };
  createFormattedDate();
  socket.end(formattedDate);
});

server.listen(process.argv[2]);
