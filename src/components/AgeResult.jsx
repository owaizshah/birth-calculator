function AgeResult({ ageDetails, Error }) {
  return (
    <div className=" text-6xl font-extrabold italic space-y-1 mt-6 md:mt-1">
      <p>
        <span className=" text-purple-600">{ageDetails.year}</span> years
      </p>
      <p>
        <span className=" text-purple-600">{ageDetails.month}</span> months
      </p>
      <p>
        <span className=" text-purple-600">{ageDetails.day}</span> days
      </p>
    </div>
  );
}

export default AgeResult;
