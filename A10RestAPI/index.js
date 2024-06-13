const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

////////////////////////////////////
// Server site render file
app.get("/users", (req, res) => {
  const html = `
    <ul>
     ${users.map((user) => `<li>${user.first_name}</li>`).join("")} 
    `;
  res.send(html);
});
////////////////////////////////////
// Hybrid Sever

// REST APIs Routes

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("api/users", (req, res) => {
  // TODO : Create new User
  return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  // TODO : Edit the user with ID
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  // TODO : delete the user with ID
  return res.json({ status: "pending" });
});

//-------- OR we can combine in One -----------
app
  .get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // TODO : Edit the user with ID
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // TODO : delete the user with ID
    return res.json({ status: "pending" });
  });

app.listen(PORT, () => console.log(`Server has started at PORT ${PORT}`));
