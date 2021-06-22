import { useState } from "react";

const SetInterests = ({ onInterestChange }) => {
  const [inputVal, setinputVal] = useState("");

  // Hold the value here and then it makes clearing the form easier if you want
  const handleChange = (e) => {
    setinputVal(e.target.value);
  };

  const setNewInterest = (event) => {
    event.preventDefault();
    onInterestChange(inputVal);
    setinputVal("");
  };

  return (
    <>
      <div className="addFavourites">
        <h3>What are you interested in</h3>
        <form onSubmit={setNewInterest}>
          <label>New Interest: </label>
          <input
            onChange={handleChange}
            type="text"
            value={inputVal}
            placeholder="New Interest"
            id="newInterest"
            name="newInterest"
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};

export default SetInterests;
