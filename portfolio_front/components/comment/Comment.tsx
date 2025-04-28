import { useState } from "react";
import CommentForm from "./subcomponents/CommentForm";
import "../../components/css/comment.css";
import CommentList from "./subcomponents/CommentList";

type Comment = {
  id: number;
  text: string;
};

const Comment = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const handleCommentSubmit = (newComment: string) => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), text: newComment }]);
    }
  };

  return (
    <div className="comments-section">
      <h2 className="comments-title">댓글</h2>
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comment;
