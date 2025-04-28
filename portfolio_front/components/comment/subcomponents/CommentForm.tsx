import { useState, FormEvent } from "react";

interface CommentFormProps {
  onSubmit: (comment: string) => void;
}

const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력하세요"
        className="comment-input"
      />
      <button type="submit" className="comment-submit">
        댓글 작성
      </button>
    </form>
  );
};

export default CommentForm;
