import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { useUnit } from "effector-react";
import {
  $editingNews,
  $editTitle,
  $editContent,
  changeEditTitle,
  changeEditContent,
  closeEdit,
  updateNews,
} from "../model/newsStore";

export function EditDialog() {
  const [editing, title, content] = useUnit([
    $editingNews,
    $editTitle,
    $editContent,
  ]);
  const [onTitleChange, onContentChange, onClose, onUpdate] = useUnit([
    changeEditTitle,
    changeEditContent,
    closeEdit,
    updateNews,
  ]);

  if (!editing) return null;

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Редактировать новость</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}
      >
        <TextField
          label="Заголовок"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          fullWidth
          autoFocus
          sx={{ mt: 1 }}
        />
        <TextField
          label="Содержимое"
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          fullWidth
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button
          onClick={() => {
            onUpdate({
              id: editing.id,
              title,
              content,
              createdAt: editing.createdAt,
            });
            onClose();
          }}
          variant="contained"
        >
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
