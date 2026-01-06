const http = require("http");

const users = [{ name: "Abhishek" }];

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(users));
    console.log(users);
  } else if (req.url === "/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsedData = JSON.parse(body);
        users.push(parsedData);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "User added successfully",
            users,
          })
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid JSON");
      }
    });
  } else if (req.url === "/users") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 page not found");
  }
});

server.listen(3000, () => {
  console.log(`Server running at port http://localhost:3000`);
});
