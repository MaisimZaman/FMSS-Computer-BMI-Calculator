//for ui we will use tailwind css
//add tailwind cdn in index.html

//importing useState
import { useState } from "react";

//The main function which contains every logic and UI on the screen
export default function App() {
  //This usestate contains the variable 'height' which stores the inputted height
  const [height, setHeight] = useState("");
  //This usestate contains the variable 'width' which stores the inputted width
  const [weight, setWeight] = useState("");

  //This usestae contains the variable 'bmiResult' which is the total calculated result for the bmi
  const [bmiResult, setBmiResult] = useState(null);

  //This usestae contains the variable 'status' which tells somebody if they are underweight, normal or overweight
  const [status, setStatus] = useState("");

  //This function will perform all the logic to calculate BMI
  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  //this function takes bmi as a parameter and goes through if statments to set the bmiResult variable
  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  //All the html and CSS code for UI and styling (Dont worry about understading all the styling for now)
  return (
    <div className="w-full max-w-xs m-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-center mb-4 text-xl"> BMI Calculator</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Height "
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Weight
          </label>
          <input
            className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Weight"
            type="Weight in kg"
            placeholder="Weight in Kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </form>
    </div>
  );
}
