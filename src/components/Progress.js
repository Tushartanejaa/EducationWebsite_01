import React from "react";

const Progress = () => {
  return (
    <div style={{ backgroundColor: "burlywood" }}>
      <form>
        <label>NAME</label>
        <input type="text" placeholder="Enter your Name" />
        <br></br>
        <label>ENTER mail id</label>
        <input type="email" />
        <br></br>
        <label> Enter Password</label>
        <input type="password" />
        <br></br>
        <label>Enter the name of your course</label>
        <br />
        <br />
        <input type="radio" value="je" name="section" id="JEE" />
        <label for="sectionida">JEE</label>
        <input type="radio" value="COD" name="section" id="cod" />
        <label for="sectionidb">Coding</label>
        <input type="radio" value="DA" name="section" id="DA" />
        <label for="sectionidc">Data Analytics</label>
        <input type="radio" value="ds" name="section" id="DS" />
        <label for="sectionida">Data Scientist</label>
        <input type="radio" value="upsc" name="section" id="UPsc" />
        <label for="sectionidb">Upsc</label>
        <input type="radio" value="crypto" name="section" id="crypt" />
        <label for="sectionidc">CryptoCurrency</label>
        <br></br>
        <h4>Enter the course id</h4>
        <label>ID </label>{" "}
        <input type="text" placeholder="Enter your course id here" />
        <button>Submit</button>
        <h3>
          <p>
            Your full progress chart will be available in 24 hrs once you fill
            the form
          </p>
        </h3>
      </form>
    </div>
  );
};

export default Progress;
