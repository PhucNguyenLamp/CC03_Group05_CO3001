import { Container, Typography, Box, Paper } from "@mui/material";

const information = {
  name: "Adobe After Effects",
  pagesLeft: 10,
  bankAccount: "123456789",
};

export default function Dashboard() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="text.secondary">
            User Name:
          </Typography>
          <Typography variant="body1">{information.name}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="text.secondary">
            Pages Left:
          </Typography>
          <Typography variant="body1">{information.pagesLeft}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" color="text.secondary">
            Bank Account:
          </Typography>
          <Typography variant="body1">{information.bankAccount}</Typography>
        </Box>
      </Paper>
    </Container>
  );
}
