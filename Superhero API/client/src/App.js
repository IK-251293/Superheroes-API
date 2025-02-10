import React from "react";

export default function App() {
  function submitHandler(e) {
    e.preventDefault();
    const fullname = e.target.elements.fullname.value;
    const superpower = e.target.elements.superpower.value;
    const humbleness = e.target.elements.humbleness.value;
    fetch("http://localhost:8000/POST/superheroes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([fullname, superpower, humbleness]),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
  }
  function goToSuperheroesPage() {
    window.location.href = "http://localhost:8000/GET/superheroes";
  }
  return (
    <div class="App">
      <h2>Superheroes</h2>
      <div>
        <form onSubmit={submitHandler}>
          <div class="input-fields">
            <input
              type="text"
              name="fullname"
              class="hero-fields"
              placeholder="Hero name:"
            />
            <input
              type="text"
              name="superpower"
              class="hero-fields"
              placeholder="Hero superpower:"
            />
            <input
              type="number"
              name="humbleness"
              class="hero-fields"
              placeholder="Humility score:"
              min="1"
              max="10"
            />
          </div>
          <button class="button" type="submit" value="Submit">
            Submit
          </button>
        </form>
        <button class="button" onClick={goToSuperheroesPage}>
          List of superheroes
        </button>
      </div>
    </div>
  );
}
