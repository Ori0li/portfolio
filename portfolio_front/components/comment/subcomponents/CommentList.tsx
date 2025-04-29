import { CommentType } from "@/types/comment";
import { deleteComment } from "@/utils/api";

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
            <p className="comment-author">👤 {comment.author}</p>
            <button
              className="comment-delete"
              onClick={() => handleDelete(Number(comment.id))}
            >
              삭제
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
