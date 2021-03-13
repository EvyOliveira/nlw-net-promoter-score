import express, { response } from "express";

const app = express();

//http://localhost:3333/users
app.get("/users", (request, response) => {
  return response.json({message: "Hello World - NLW #4!"})
});

app.listen(3333, () => console.log("Server is running!")); 