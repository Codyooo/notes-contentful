/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-19 14:08:28
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-19 14:45:38
 */
import { useForm, Controller } from "react-hook-form";
import { Button, Grid, TextField } from "@material-ui/core";

type IMovieForm = {
  onSave: (data: any) => void;
};

type FormProps = {};

const MovieForm = (props: IMovieForm) => {
  const { control, errors, register, handleSubmit } = useForm<FormProps>();

  const onSubmit = (data: FormProps) => {
    console.log("form", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Controller
            as={TextField}
            label={"名称"}
            name="title"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            as={TextField}
            name="rating"
            autoComplete={"off"}
            label={"评分"}
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            as={TextField}
            name="actors"
            label="主演"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            as={TextField}
            label={"封面"}
            name="cover"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            as={TextField}
            label={"简介"}
            name="desc"
            control={control}
            defaultValue=""
          />
        </Grid>

        <Grid item xs={6}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Button color="primary" type="submit" variant="contained">
              提交
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default MovieForm;
