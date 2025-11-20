import { RiFilmFill } from "react-icons/ri";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import { PiTelevisionBold } from "react-icons/pi";
import Play from "../../assets/playbutton copy.svg";
import { GoDotFill } from "react-icons/go";

const MovieCarousel = ({ data, updateUI }) => {
  const { user, token } = useAuth();
  // const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative overflow-x-auto w-full">
      <div className="flex justify-start items-center gap-3 transition-all duration-1000 ease-in-out md:gap-5">
        {data.slice(0, 12).map((movie) => {
          const { _id, image, title, year, type, rated, bookmarkedBy } = movie;

          const bookmarkIcon = bookmarkedBy.includes(user?.id) ? (
            <IoBookmark
              onClick={() => {
                updateUI("remove", _id, token, user?.id);
              }}
              className="md:text-[25px] text-[20px]"
            />
          ) : (
            <IoBookmarkOutline
              onClick={() => {
                updateUI("add", _id, token, user?.id);
              }}
              className="md:text-[25px] text-[20px]"
            />
          );
          return (
            // <div key={_id} className="relative mt-6">
            //   <div className="sm:w-[470px] sm:h-[230px] overflow-hidden relative w-[240px] group h-[140px]">
            //     <img
            //       src={image}
            //       className="w-full h-full object-cover rounded-lg filter brightness-[70%]"
            //       alt="Movie"
            //     />
            //     <div className="absolute top-1 right-3 md:top-3.5 md:right-6 text-white cursor-pointer w-[50px] h-[50px] rounded-full hover:bg-[#10141E50] flex items-center justify-center z-30 text-[25px]">
            //       {bookmarkIcon}
            //     </div>

            //     <button
            //       type="button"
            //       className={
            //         "absolute top-11 left-17 md:top-22 py-1.5 ps-1.5 pe-4 md:left-45 flex items-center justify-center rounded-full " +
            //         "bg-[#FFFFFF25] backdrop-blur-sm gap-3 " +
            //         "opacity-0 pointer-events-none transition-opacity duration-200 " +
            //         "group-hover:opacity-100 group-hover:pointer-events-auto " +
            //         "focus:opacity-100 focus:pointer-events-auto z-20 cursor-pointer"
            //       }
            //     >
            //       <IoMdPlayCircle className="text-white text-[40px]" />
            //       <p className="text-[16px] text-white">Play</p>
            //     </button>
            //   </div>

            //   <div className="absolute bottom-5 left-6 flex flex-col justify-start items-start">
            //     <div className="flex justify-start items-center gap-2 text-white text-sm font-normal md:gap-1 md:text-xs">
            //       <p className="m-0">{year}</p>
            //       <p className="mb-0.5">.</p>
            //       <span className="flex justify-start items-center gap-1 md:gap-0.5">
            //         {type === "movie" ? <RiFilmFill /> : <PiTelevisionFill />}
            //         <p className="m-0">
            //           {type === "movie" ? "Movie" : "TV Series"}
            //         </p>
            //       </span>
            //       <p className="mb-0.5">.</p>
            //       <p className="m-0">{rated}</p>
            //     </div>
            //     <p className="m-0 text-white text-xl font-normal md:text-sm">
            //       {title}
            //     </p>
            //   </div>
            // </div>
            <div key={_id} className="relative mt-6">
              <div className="w-[240px] h-[140px] overflow-hidden relative sm:w-[470px] sm:h-[230px]">
                <img
                  src={image}
                  className="w-full h-full object-cover rounded-lg filter brightness-[70%]"
                  alt="Movie"
                />

                <div
                  className="absolute inset-0  flex justify-center items-center bg-black/50 
                        rounded-lg opacity-0 hover:opacity-100 transition duration-300 "
                >
                  <button className="flex justify-center items-center gap-2 cursor-pointer bg-white/25 text-[18px] w-[117px] h-[48px] rounded-[28px] ">
                    <img src={Play} alt="" />
                    Play
                  </button>
                </div>
                <div className=" absolute z-10 top-[5px] right-[5px] text-white cursor-pointer rounded-full hover:bg-white/40 w-[50px] h-[50px]  flex items-center justify-center  ">
                  {bookmarkIcon}
                </div>
              </div>

              <div className="absolute bottom-5 left-6 flex flex-col justify-start items-start ">
                <div className="flex justify-start items-center gap-2 text-white text-[15px] font-normal md:gap-1 opacity-70  ">
                  <p className="m-0">{year}</p>
                  <p className="   ">
                    <GoDotFill />
                  </p>
                  <span className=" flex items-center justify-start gap-[3px] sm:gap-[5px] text-white">
                    {type === "movie" ? <RiFilmFill /> : <PiTelevisionBold />}
                    <p className="m-0 tvvvm text-[8px] sm:text-[12px] lg:text-[13px] font-normal">
                      {type === "movie" ? "Movies" : "Tv Series"}
                    </p>
                  </span>
                  <p className="   ">
                    <GoDotFill />
                  </p>
                  <p className="m-0">{rated}</p>
                </div>
                <p className="m-0 text-white text-[24px] font-normal ">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarousel;
