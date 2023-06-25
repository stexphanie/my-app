import React, { useState, useRef } from "react";
import Movie from "./Movie";

export default function AddMovieForm() {
  const [movies, setMovies] = useState([]);
  const title = useRef();
  const grade = useRef();

  function addMovie(event) {
    event.preventDefault();
    if (!title.current.value) {
      alert("Ange en titel för att spara filmen");
    } else if (grade.current.value <= 0) {
      alert("Ange ett betyg för att spara filmen");
    } else {
      const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

      setMovies([
        ...movies,
        {
          id: newId,
          title: title.current.value,
          grade: grade.current.value,
        },
      ]);

      title.current.value = "";
      grade.current.value = "0";
    }
  }

  function deleteItem(id) {
    setMovies(movies.filter((item) => item.id !== id));
  }
  function orderTitle() {
    const sortTitle = [...movies].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setMovies(sortTitle);
  }

  function orderGrade() {
    const sortGrade = [...movies].sort((a, b) => {
      return b.grade - a.grade;
    });
    setMovies(sortGrade);
  }

  return (
    <div>
      <form className="border-bottom pb-4">
        <fieldset>
          <legend>Lägg till en film</legend>

          <label for="title-field">Titel:</label>
          <input type="text" id="title-field" class="form-control" ref={title} />

          <label for="rating-field">Betyg:</label>

          <select type="text" id="rating-field" class="form-control" ref={grade}>
            <option value="0">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" class="btn btn-success mt-3" value="Spara film" onClick={addMovie} />
        </fieldset>
      </form>

      <h2>Filmer</h2>

      <ul className="list-group">
        {movies.map((movie) => (
          <Movie key={movie.id} item={movie} deleteItem={deleteItem} />
        ))}
      </ul>
      <button class="btn btn-primary" onClick={orderTitle}>
        Alfabetisk ordning
      </button>

      <button class="btn btn-primary" onClick={orderGrade}>
        Betygsordning
      </button>
    </div>
  );
}
