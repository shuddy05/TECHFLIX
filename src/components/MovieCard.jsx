import { RiFilmFill } from "react-icons/ri";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { PiTelevisionBold } from "react-icons/pi";

import useAuth from "../hooks/useAuth";
import Play from "../assets/playbutton copy.svg"
const MovieCard = ({ movie, updateUI }) => {
  const { user, token } = useAuth();
  const { _id, image, title, year, type, rated, bookmarkedBy = [] } = movie;

  const isBookmarked =
    Array.isArray(bookmarkedBy) && bookmarkedBy.includes(user?.id);

  const bookmarkIcon = isBookmarked ? (
    <IoBookmark
      onClick={() => updateUI("remove", _id, token, user?.id)}
      className="md:text-[25px] text-[20px]"
    />
  ) : (
    <IoBookmarkOutline
      onClick={() => updateUI("add", _id, token, user?.id)}
      className="md:text-[25px] text-[20px]"
    />
  );
  return (
    
    <div className=" text-white flex relative  flex-col justify-start items-start ">
      <div className=" relative  mt-6 mb-2 sm:w-[220px] sm:h-[140px] sm:mt-6 lg:w-[280px] lg:h-[174px] lg:mt-8">
        <img src={image} className="w-full h-full object-cover rounded-lg" />
        <div
          className="absolute inset-0  flex justify-center items-center bg-black/50 
        rounded-lg opacity-0 hover:opacity-100 transition duration-500 "
        >
          <button className="flex justify-center items-center gap-2 cursor-pointer bg-white/25 text-[18px] w-[117px] h-[48px] rounded-[28px] ">
            <img src={Play} alt="" />
            Play
          </button>
        </div>
        <div className=" absolute z-10 top-[5px] right-[5px] text-white cursor-pointer rounded-full hover:bg-white/40 w-[40px] h-[40px]  flex items-center justify-center  ">
          {bookmarkIcon}
        </div>
      </div>

      <div className=" flex flex-col justify-start items-start">
        <div className=" flex items-center justify-between gap-[3px] sm:gap-[5px] lg:gap-[7px] text-white opacity-70 ">
          <p className="m-0 text-[8px] sm:text-[12px] lg:text-[13px] font-normal ">
            {year}
          </p>

          <p className="   ">
            <GoDotFill />
          </p>

          <span className=" flex items-center justify-start gap-[3px] sm:gap-[5px] ">
            {type === "movie" ? <RiFilmFill /> : <PiTelevisionBold />}
            <p className="m-0 tvvvm text-[8px] sm:text-[12px] lg:text-[13px] font-normal">
              {type === "movie" ? "Movies" : "Tv Series"}
            </p>
          </span>

          <p className="   ">
            {" "}
            <GoDotFill />
          </p>

          <p className="m-0 text-[8px] sm:text-[12px] lg:text-[13px] font-normal">
            {rated}
          </p>
        </div>

        <div className="">
          <p className=" text-[12px] sm:text-[16px] lg:text-[18px] text-start  ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
