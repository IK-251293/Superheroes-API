const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

let superHeroes = [];

// Middleware
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json()); // Parse JSON bodies

// Route to handle form submission
app.post("/POST/superheroes", (req, res) => {
  const [fullname, superpower, humbleness] = req.body;
  superHeroes.push([fullname, superpower, humbleness]);
  superHeroes.sort((a, b) => Number(b[2]) - Number(a[2]));

  console.log(superHeroes);

  //console.log("Received Data:", [fullname, superpower, humbleness]);
  //
  // Responding to the client
  res.send(`Hello ${superHeroes}`);
});

app.get("/GET/superheroes", (req, res) => {
  // Responding to the client
  res.send(
    ` <table border="1" style="width: 60%; margin: 20px auto; border-collapse: collapse; text-align: center;">
        <thead>
            <tr style="background-color: #007BFF; color: white;">
                <th>Hero Name</th>
                <th>Super Powers</th>
                <th>Humility Score</th>
            </tr>
        </thead>
        <tbody>
            ${superHeroes
              .map(
                (hero) => `
                <tr>
                    <td>${hero[0]}</td>
                    <td>${hero[1]}</td>
                    <td>${hero[2]}</td>
                </tr>`
              )
              .join("")}
        </tbody>
    </table>`
  );
});

module.exports = app;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
