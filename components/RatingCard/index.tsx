/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-19 11:08:33
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-19 18:43:28
 */
import { Typography, Chip, Card } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { memo } from "react";
import ReactMarkDown from "react-markdown";

import { withStyles } from "@material-ui/core/styles";
import "./index.less";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

type IMovieDetailCardPros = {
  title: string;
  rating: number;
  tags: string[];
  desc: string;
};
const MovieDetailCard = ({
  title,
  tags,
  desc,
  rating,
}: IMovieDetailCardPros) => {
  return (
    <Card style={{ width: 280, padding: 16 }}>
      <Typography gutterBottom variant="h6" component="h2" color={"primary"}>
        {title}
      </Typography>

      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledRating
          value={rating / 2}
          readOnly
          size="small"
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
        <span style={{ marginLeft: 10, color: "palevioletred", fontSize: 14 }}>
          {rating.toFixed(1)}
        </span>
      </div>

      <div style={{ marginTop: 8 }}>
        {tags.map((item) => (
          <Chip
            label={item}
            key={item}
            variant="outlined"
            style={{ marginRight: 4, cursor: "pointer" }}
            color={"primary"}
            size="small"
          />
        ))}
      </div>
      <div
        style={{
          background: "#f5f5f5",
          borderTop: "1px solid #ddd",
          padding: "20px 25px",
          color: "#666",
          margin: "-16px",
          marginTop: "16px",
          marginBottom: "-24px",
          fontSize: "13px",
          height: 200,
          overflow: "scroll",
        }}
      >
        <ReactMarkDown source={desc} escapeHtml={false} />
        {/* {desc} */}
      </div>
    </Card>
  );
};

export default memo(MovieDetailCard);
