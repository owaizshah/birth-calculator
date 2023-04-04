import Arrow from "../images/icon-arrow.svg";

function Button({ onHandleClick }) {
  return (
    <div className="mt-10 md:mt-1 ">
      <button
        onClick={onHandleClick}
        className=" bg-purple-500 rounded-full p-5 w-[71px] h-[71px] z-10 relative translate-x-[8rem] md:translate-x-[24rem] hover:bg-black transition"
      >
        <img src={Arrow} alt="Arrow" />
      </button>
      <div className="h-[2px] w-[320px] bg-slate-300 -translate-y-10 md:w-[450px]"></div>
    </div>
  );
}

export default Button;
