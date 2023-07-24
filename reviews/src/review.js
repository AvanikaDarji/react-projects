import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(() => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex(() => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex == index) {
      randomIndex = index + 1;
    }
    setIndex(() => {
      return checkNumber(randomIndex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4> {name} </h4>
      <p>{job}</p> <p>{text}</p>
      <div class="button-container">
        <button class="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button class="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <div class="button-container">
        <button class="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </div>
    </article>
  );
};
export default Review;
