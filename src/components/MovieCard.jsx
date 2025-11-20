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
    // <div className="movie-card flex flex-col justify-start items-start">
    //   <div className="maincards relative mt-6 sm:w-[220px] sm:h-[140px] sm:mt-6 lg:w-[280px] lg:h-[174px] lg:mt-8 group">
    //     <img src={image} className="w-full h-full object-cover rounded-lg" />

    //     {/* bookmark: keep it above the overlay */}
    //     <div className="bkmak absolute top-1 right-3 md:top-3.5 md:right-6 text-white cursor-pointer w-[50px] h-[50px] rounded-full hover:bg-[#10141E50] flex items-center justify-center z-30">
    //       {bookmarkIcon}
    //     </div>

    //     {/* play overlay — invisible by default, appears on hover or when focused */}
    //     <button
    //       type="button"
    //       className={
    //         "absolute top-10 left-13 md:top-18 py-1.5 ps-1.5 pe-4 md:left-25 flex items-center justify-center rounded-full " +
    //         "bg-[#FFFFFF25] backdrop-blur-sm gap-2 " +
    //         "opacity-0 pointer-events-none transition-opacity duration-200 " +
    //         "group-hover:opacity-100 group-hover:pointer-events-auto " +
    //         "focus:opacity-100 focus:pointer-events-auto z-20 cursor-pointer"
    //       }
    //     >
    //       <IoMdPlayCircle />
    //       <p className="text-[14px]">Play</p>
    //     </button>
    //   </div>

    //   <div className="movie-details flex flex-col justify-start items-start">
    //     <div className="cardico flex items-center justify-start gap-[3px] sm:gap-[5px] lg:gap-[7px]">
    //       <p className="m-0 text-[8px] sm:text-[12px] lg:text-[13px] font-normal text-white">
    //         {year}
    //       </p>

    //       <p className="dott mb-1 text-[3px] font-semibold leading-none">.</p>

    //       <span className="doicon flex items-center justify-start gap-[3px] sm:gap-[5px] text-white">
    //         {type === "movie" ? (
    //           <RiFilmFill className="text-[15px]" />
    //         ) : (
    //           <PiTelevisionFill className="text-[15px]" />
    //         )}
    //         <p className="m-0 tvvvm text-[8px] sm:text-[12px] lg:text-[13px] font-normal">
    //           {type === "movie" ? "Movie" : "TV Series"}
    //         </p>
    //       </span>

    //       <p className="dott mb-1 text-[3px] font-semibold leading-none">.</p>

    //       <p className="m-0 text-[8px] sm:text-[12px] lg:text-[13px] font-normal text-white">
    //         {rated}
    //       </p>
    //     </div>

    //     <div className="cardtits">
    //       <p className="m-0 text-[12px] sm:text-[16px] lg:text-[18px] font-normal text-white">
    //         {title}
    //       </p>
    //     </div>
    //   </div>
    // </div>
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
