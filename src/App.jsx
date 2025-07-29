import "./App.css";

import { Container, Typography } from "@mui/material";
import { NewsList } from "./components/NewsList";
import { EditDialog } from "./components/EditDialog";

export default function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Новости
      </Typography>
      <NewsList />
      <EditDialog />
    </Container>
  );
}
