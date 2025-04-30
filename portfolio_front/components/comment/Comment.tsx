"use client";

import { useEffect, useState } from "react";
import "../../components/styles/comment.css";
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
    const data = await getAllComments();
    const filtered = data.filter(
      (comment) => comment.project.id === Number(projectId)
    );
    console.log(filtered);
    setComments(filtered);
  };

  useEffect(() => {
    fetchComments();
  }, [projectId]);

  return (
    <div className="comments-section">
      <h2 className="comments-title">피드백</h2>
      <CommentForm projectId={projectId} onCommentAdded={fetchComments} />
      <CommentList comments={comments} onCommentDeleted={fetchComments} />
    </div>
  );
};

export default Comment;
