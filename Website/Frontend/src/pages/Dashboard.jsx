import { Container, Typography, Box, Paper } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { userInfo } = useAuth();
  console.log(userInfo);

  if (!userInfo) {
    return (
      <Container>
        <Typography variant="h4" color="error">
          Please login to access this page
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {userInfo.role === "Student" ? (
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="text.secondary">
              User Name:
            </Typography>
            <Typography variant="body1">{`${userInfo.lname} ${userInfo.fname}`}</Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="text.secondary">
              Email:
            </Typography>
            <Typography variant="body1">{userInfo.email}</Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="text.secondary">
              Pages Left:
            </Typography>
            <Typography variant="body1">{userInfo.page_remain}</Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color="text.secondary">
              Bank Account:
            </Typography>
            <Typography variant="body1">{`${userInfo.bank_name}: ${userInfo.bank_card}`}</Typography>
          </Box>
        </Paper>
      ) : (
        <Container>
          <Typography variant="h4" color="error">
            Admin
          </Typography>
          <Typography variant="body1">Username: {userInfo.username}</Typography>
        </Container>
      )}
    </Container>
  );
}
