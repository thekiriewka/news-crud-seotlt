import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteNews, openEdit } from "../model/newsStore";

export function NewsItem({ item }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body1">{item.content}</Typography>
        <IconButton onClick={() => openEdit(item)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteNews(item.id)}>
          <DeleteIcon />
        </IconButton>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {new Date(item.createdAt).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
