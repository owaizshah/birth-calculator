import Input from "./components/Input";
import AgeResult from "./components/AgeResult";
import { useState } from "react";

function App() {
  const [ageDetails, setAgeDetails] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  });
  const [isError, setIsError] = useState(false);

  const handleError = (value) => {
    setIsError(value);
  };

  const handleDetails = (values) => {
    setAgeDetails(values);
  };

  return (
    <div className=" max-w-sm rounded-t-3xl rounded-bl-3xl rounded-br-[6rem] container p-5 py-10 bg-white shadow-md m-5 flex flex-col justify-center mt-32 md:max-w-lg">
      <Input
        ageDetails={ageDetails}
        handleDetails={handleDetails}
        Error={isError}
        handleError={handleError}
      />
      <AgeResult ageDetails={ageDetails} Error={isError} />
    </div>
  );
}

export default App;
