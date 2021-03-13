import express, { response } from "express";

const app = express();

//http://localhost:3333/users
app.get("/users", (request, response) => {
  return response.json({message: "Hello World - NLW #4!"})
});

// 1º parâmetro: rota (recurso API)
// 2º parâmetro: resquest, response
app.post("/", (request, response) => {
  return response.json({message: "Os dados foram salvos com sucesso!"})
});

app.listen(3333, () => console.log("Server is running!")); 