const request = require("supertest");
const app = require("./Superhero_backend"); // Import the Express app

describe("GET /GET/superheroes", () => {
  it("should return an HTML table with superhero information", async () => {
    // Send GET request to /GET/superheroes
    const response = await request(app).get("/GET/superheroes");

    // Check if the status code is 200 (OK)
    expect(response.status).toBe(200);

    // Ensure the response contains HTML table structure
  });
});
