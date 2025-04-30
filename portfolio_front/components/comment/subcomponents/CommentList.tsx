import { CommentType } from "@/types/comment";
import { deleteComment } from "@/utils/api";
import { FaPerson, FaTrash } from "react-icons/fa6";

interface CommentListProps {
  comments: CommentType[];
  onCommentDeleted: () => Promise<void>;
}

const CommentList = ({ comments, onCommentDeleted }: CommentListProps) => {
  const handleDelete = async (commentId: number) => {
    try {
      await deleteComment(commentId.toString());
      await onCommentDeleted();
    } catch (error) {
      console.error("댓글 삭제 중 오류 발생:", error);
      alert("댓글 삭제에 실패했습니다.");
    }
  };

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <div className="comment-header">
            <p className="comment-author">
              <FaPerson /> {comment.author}
            </p>
            <button
              className="comment-delete"
              onClick={() => handleDelete(Number(comment.id))}
            >
              <FaTrash />
            </button>
          </div>
          <p className="comment-content">{comment.content}</p>
          <p className="comment-date">
            {new Date(comment.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
