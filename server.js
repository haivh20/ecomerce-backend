const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

const server = app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exiting...");
  });
});
