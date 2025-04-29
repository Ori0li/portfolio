"use client";

import { createComment } from "@/utils/api";
import { useState } from "react";

interface CommentFormProps {
  projectId: string;
  onCommentAdded: () => Promise<void>;
}

const CommentForm = ({ projectId, onCommentAdded }: CommentFormProps) => {
  const [formData, setFormData] = useState({
    author: "",
    content: "",
    project: Number(projectId),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createComment({
        author: formData.author,
        content: formData.content,
        project: Number(projectId),
      });

      setFormData({ author: "", content: "", project: Number(projectId) });
      await onCommentAdded();
    } catch (error) {
      console.error("댓글 작성 중 오류 발생:", error);
      alert("댓글 작성에 실패했습니다.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          className="comment-author"
          value={formData.author}
          onChange={handleChange}
          placeholder="작성자"
          required
        />
        <textarea
          name="content"
          className="comment-input"
          value={formData.content}
          onChange={handleChange}
          placeholder="댓글을 입력하세요"
          required
        />
        <button type="submit" className="comment-submit">
          등록
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
