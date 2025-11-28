const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Nagutom Venson C. \n");
  res.write("ITBA-4101 \n");
  res.write("Attitude > Inteligence");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});