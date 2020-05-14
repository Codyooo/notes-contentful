/**
 * @file: description
 * @author: hufan
 * @Date: 2020-05-11 14:33:41
 * @LastEditors: hufan
 * @LastEditTime: 2020-05-12 18:34:21
 */
import { useForm, Controller } from "react-hook-form";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import moment from "moment";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Comments = (props) => {
  const { postId, onCreate, comments, loading } = props;
  const { control, handleSubmit, reset } = useForm();
  const [open, setOpen] = React.useState(false);
  const onSubmit = async (data) => {
    reset();
    await onCreate(data);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  const renderCommentList = () => {
    return (
      <Paper style={{ padding: 30, marginTop: 20 }}>
        {loading && <CircularProgress />}
        {comments.map((c) => (
          <li key={c.date}>
            {c.comment} ----------------
            {moment(c.date).format("YYYY-MM-DD hh:mm:ss")}
          </li>
        ))}
      </Paper>
    );
  };
  return (
    <div>
      <Paper style={{ padding: 30 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={Input}
            fullWidth={true}
            name="comment"
            control={control}
            placeholder="Write a response..."
            defaultValue=""
          />
        </form>
      </Paper>

      {renderCommentList()}

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
        >
          评论成功!
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Comments;
