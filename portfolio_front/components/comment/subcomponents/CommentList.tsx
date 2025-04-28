interface Comment {
  id: number;
  text: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: CommentListProps) => {
  return (
    <div className="comments-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment-item">
          <p className="comment-text">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
