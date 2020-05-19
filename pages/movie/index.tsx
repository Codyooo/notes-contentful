/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-18 19:53:19
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-19 18:47:14
 */

import { GridList, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";
import { IMovieFields } from "../../@types/generated/contentful";
import Popover from "@material-ui/core/Popover";
import RatingCard from "../../components/RatingCard";
import css from "./index.less";
import { getMoivesAsync } from "../../service";

export interface IMovieData extends Omit<IMovieFields, "cover"> {
  cover: string;
  id: string;
}

const MoviePage = () => {
  const [movieData, setMovieData] = useState<IMovieData[]>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentId, setCurrentId] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const fetchMovie = async (movieName = "") => {
    const movies = await getMoivesAsync(movieName);
    setMovieData(movies);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className={css.wrapper}>
      <TextField
        label="搜索"
        fullWidth={true}
        style={{ marginBottom: 14 }}
        placeholder="电影标题模糊查找"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={(e) => {
          e.key === "Enter" && fetchMovie(searchValue);
        }}
      />
      <div className={css["movie_list"]}>
        {movieData.map((movie) => (
          <div key={movie.id} className={css["movie_item"]}>
            <img
              className={`${css.cover} ${css["MuiGridListTile-imgFullWidth"]}`}
              src={movie.cover}
              onClick={(e) => {
                setCurrentId(movie.id);
                setAnchorEl(e.currentTarget);
              }}
            />

            <Popover
              open={Boolean(anchorEl) && movie.id === currentId}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={() => setAnchorEl(null)}
            >
              <RatingCard
                desc={movie.desc}
                rating={movie.rating}
                tags={movie.actors}
                title={movie.title}
              />
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
