"use client";

import { Modal } from "./Modal";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  subject: string;
};

export function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
  subject,
}: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Confirm Delete">
      <p className="text-sm text-muted-foreground mb-6">
        Are you sure you want to delete{" "}
        <strong className="text-foreground">{subject}</strong>? This action
        cannot be undone.
      </p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm border border-border text-foreground hover:bg-muted transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-sm bg-destructive text-destructive-foreground hover:opacity-90 transition-opacity"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
