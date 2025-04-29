"use client";

import { useEffect, useState } from "react";
import "../../components/css/comment.css";
import CommentList from "./subcomponents/CommentList";
import { getAllComments } from "@/utils/api";
import { CommentType } from "@/types/comment";
import CommentForm from "./subcomponents/CommentForm";

interface CommentProps {
  projectId: string;
}

const Comment = ({ projectId }: CommentProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  const fetchComments = async () => {
    const data = await getAllComments(projectId);
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, [projectId]);

  return (
    <div className="comments-section">
      <h2 className="comments-title">댓글</h2>
      <CommentForm projectId={projectId} onCommentAdded={fetchComments} />
      <CommentList comments={comments} onCommentDeleted={fetchComments} />
    </div>
  );
};

export default Comment;
