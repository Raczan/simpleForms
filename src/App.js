import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { programs } from './js/programs';

const App = () => {
  const [page, setPage] = useState(1);

  function handleChange(event, value) {
    setPage(value);
  }

  useEffect(() => {
    document.getElementById('form').reset();
    document.getElementById('result').innerHTML = '';
  }, [page]);

  useEffect(() => {
    document.getElementById('form').addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }, []);

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div style={{ width: 500, height: 300 }}>
        <div className="d-flex flex-column">
          <h4 className="text-center">{programs[page].title}</h4>
          <form
            id="form"
            class="input-group mb-2 mt-5"
            autocomplete="off"
            onSubmit={programs[page].execute}
          >
            {programs[page].inputs.map((input) => (
              <input
                id={input.id}
                type="text"
                class="form-control"
                placeholder={input.placeholder}
                required
              />
            ))}
            <button class="btn btn-outline-secondary" type="submit" id="submit">
              Ejecutar
            </button>
          </form>
          <div className="d-flex gap-2">
            <p className="fst-italic">Resultado: </p>
            <p id="result" className="d-inline-block text-truncate"></p>
          </div>
        </div>
        <Stack spacing={2} className="mt-5 d-flex align-items-center">
          <Pagination
            count={21}
            page={page}
            color="primary"
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};

export default App;
