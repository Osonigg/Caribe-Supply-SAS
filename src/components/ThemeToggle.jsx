import React from "react";
import "../App.css";

function ThemeToggle() {
  return (
    <div className="dropdown bd-mode-toggle text-dark">
      <div>
        <svg xmlns="www.w3.org" class="d-none" >
          <symbol id="check2" viewBox="0 0 20 20">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </symbol>
          <symbol id="circle-half" viewBox="0 0 20 20">
            <path d="M8 15A7 7 0 1 0 8 1vE7a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </symbol>
          <symbol id="moon-stars-fill" viewBox="0 0 20 20">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.299 7.3 7.299q.292-.001.56-.026a.76.76 0 0 1 .744.708v.01a.76.76 0 0 1-.744.708A8.75 8.75 0 0 1 7.3 14.716 8.75 8.75 0 0 1 0 7.353 8.75 8.75 0 0 1 6 .278z" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162.173.499a.217.217 0 0 0 .143.143l.499.173 1.162.387a.217.217 0 0 1 0 .412l-1.162.387-.499.173a.217.217 0 0 0-.143.143l-.173.499-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162-.173-.499a.217.217 0 0 0-.143-.143l-.499-.173-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387.499-.173a.217.217 0 0 0 .143-.143l.173-.499.387-1.162z" />
          </symbol>
          <symbol id="sun-fill" viewBox="0 0 20 20">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.828a.5.5 0 0 0 0-.707l-1.414-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 0 .707 0zM4.464 4.465a.5.5 0 0 0-.707 0L2.343 5.88a.5.5 0 1 0 .707.708l1.414-1.415a.5.5 0 0 0 0-.707z" />
          </symbol>
        </svg>
      </div>

      <button
        className="btn btn-bd-primary dropdown-toggle d-flex align-items-center"
        id="bd-theme"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme (dark)"
      >
        <svg className="bi theme-icon" aria-hidden="true" width="20px" height="20px">
          <use href="#sun-fill"></use>
        </svg>
        <span className="visually-hidden text-dark" id="bd-theme-text">
          Toggle theme
        </span>
      </button>

      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        aria-labelledby="bd-theme-text"
      >
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center active"
            data-bs-theme-value="light"
            aria-pressed="true"
          >
            <svg className="bi me-1 opacity-50" aria-hidden="true" width="20px" height="20px">
              <use href="#sun-fill"></use>
            </svg>
            Light
            <svg className="bi ms-auto d-none" aria-hidden="true"width="20px" height="20px">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="dark"
            aria-pressed="false"
          >
            <svg className="bi me-1 opacity-50" aria-hidden="true"width="20px" height="20px">
              <use href="#moon-stars-fill"></use>
            </svg>
            Dark
            <svg className="bi ms-auto d-none" aria-hidden="true"width="20px" height="20px">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="dropdown-item d-flex align-items-center"
            data-bs-theme-value="auto"
            aria-pressed="false"
          >
            <svg className="bi me-1 opacity-50" aria-hidden="true" width="20px" height="20px">
              <use href="#circle-half"></use>
            </svg>
            Auto
            <svg className="bi ms-auto d-none" aria-hidden="true" width="20px" height="20px">
              <use href="#check2"></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ThemeToggle;
