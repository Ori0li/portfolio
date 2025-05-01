import { motion, AnimatePresence } from "framer-motion";
import Comment from "./Comment";
import { memo } from "react";
import "../styles/commentModal.css";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
}

const CommentModal = memo(
  ({ isOpen, onClose, projectId }: CommentModalProps) => {
    if (!isOpen) return null;

    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="모달 닫기"
            >
              ✕
            </button>
            <Comment projectId={projectId} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }
);

CommentModal.displayName = "CommentModal";

export default CommentModal;
