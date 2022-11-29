import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Funday Quiz</h2>
          {/* {limit} */}
          <div className="form-control">
            <label htmlFor="limit">number of questions</label>
            <input
              type="number"
              name="limit"
              id="limit"
              value={quiz.limit}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={20}
            />
          </div>
          {/* {category} */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="arts_and_literature">Arts & Literature</option>
              <option value="film_and_tv">Film & TV</option>
              <option value="food_and_drink">Food & Drink</option>
              <option value="general_knowledge">General Knowledge</option>
              <option value="geography">Geography</option>
              <option value="history">History</option>
              <option value="music">Music</option>
              <option value="science">Science</option>
              <option value="society_and_culture">Society & Culture</option>
              <option value="sport_and_leisure">Sport & Leisure</option>
            </select>
          </div>
          {/* {difficulty} */}
          <div className="form-control">
            <label htmlFor="difficulty">Select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;