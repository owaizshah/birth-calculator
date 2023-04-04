import { useState } from "react";
import Button from "./Button";

function Input({ ageDetails, handleDetails, Error, handleError }) {
  const [day, setday] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [valid, setvalid] = useState(false);

  const errorBorder = " border-red-500";
  const errorText = "text-red-500";

  let errorDay = (
    <p className="text-[10px] italic text-red-500 mt-1">
      This filed is required
    </p>
  );

  let errorMonth = (
    <p className="text-[10px] italic text-red-500 mt-1">
      This filed is required
    </p>
  );

  let errorYear = (
    <p className="text-[10px] italic text-red-500 mt-1">
      This filed is required
    </p>
  );

  const handleChange = (e, set) => {
    set(Number(e.target.value));
  };

  const onHandleClick = () => {
    let recday = new Date().getDate();
    let recmonth = new Date().getMonth() + 1;
    let recyear = new Date().getFullYear();

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day === "" || month === "" || year === "") {
      handleError(true);
      return;
    }

    if (day > 31 || month > 31 || year > recyear) {
      setvalid(true);
      handleError(false);
      return;
    }

    if (day > recday) {
      recday = recday + months[recmonth - 1];
      recmonth = recmonth - 1;
    }
    if (month > recmonth) {
      recmonth = recmonth + 12;
      recyear = recyear - 1;
    }

    handleError(false);
    handleDetails({
      day: Math.abs(recday - day),
      month: Math.abs(recmonth - month),
      year: Math.abs(recyear - year),
    });
  };

  return (
    <div>
      <div className=" flex space-x-5">
        <div>
          <p
            className={`mb-1 text-[10px] text-slate-500 font-bold tracking-widest ${
              Error && errorText
            } ${valid && errorText}`}
          >
            DAY
          </p>
          <input
            placeholder="DD"
            onChange={(e) => handleChange(e, setday)}
            value={day}
            className={` border p-2 w-24 text-lg rounded-md font-bold outline-none focus:border-purple-500 caret-purple-500 ${
              Error && errorBorder
            } ${valid && errorBorder}`}
            type="number"
          />

          {Error && errorDay}
          {valid && (
            <p className="text-[10px] italic text-red-500 mt-1">
              Must be a valid day
            </p>
          )}
        </div>
        <div>
          <p
            className={`mb-1 text-[10px] text-slate-500 font-bold tracking-widest ${
              Error && errorText
            } ${valid && errorText}`}
          >
            MONTH
          </p>
          <input
            placeholder="MM"
            value={month}
            onChange={(e) => handleChange(e, setMonth)}
            type="number"
            className={` border p-2 w-24 text-lg rounded-md font-bold outline-none focus:border-purple-500 caret-purple-500 ${
              Error && errorBorder
            } ${valid && errorBorder}`}
          />
          {Error && errorMonth}
          {valid && (
            <p className="text-[10px] italic text-red-500 mt-1">
              Must be a valid month
            </p>
          )}
        </div>
        <div>
          <p
            className={`mb-1 text-[10px] text-slate-500 font-bold tracking-widest ${
              Error && errorText
            } ${valid && errorText}`}
          >
            YEAR
          </p>
          <input
            placeholder="YYYY"
            value={year}
            onChange={(e) => handleChange(e, setYear)}
            type="number"
            className={` border p-2 w-24 text-lg rounded-md font-bold outline-none focus:border-purple-500 caret-purple-500 ${
              Error && errorBorder
            } ${valid && errorBorder}`}
          />
          {Error && errorYear}
          {valid && (
            <p className="text-[10px] italic text-red-500 mt-1">
              Must be in the past
            </p>
          )}
        </div>
      </div>

      <Button onHandleClick={onHandleClick} />
    </div>
  );
}

export default Input;
