import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { addNews } from "../model/newsStore";

export function NewsForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (!trimmedTitle || !trimmedContent) return;

    addNews({
      id: Date.now(),
      title: trimmedTitle,
      content: trimmedContent,
      createdAt: new Date().toISOString(),
    });

    setTitle("");
    setContent("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mb: 2,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <TextField
        fullWidth
        label="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        multiline
        label="Содержимое"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        Добавить новость
      </Button>
    </Box>
  );
}
