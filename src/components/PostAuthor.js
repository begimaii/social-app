import { useSelector } from "react-redux";
import { selectAllUsers } from "../store/usersSlice";

const PostAuthor = () => {
  const users = useSelector(selectAllUsers);
};
export default PostAuthor