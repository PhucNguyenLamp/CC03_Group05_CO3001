import { PostAdd } from "@mui/icons-material";
import { Container, Paper, Typography, Button, Box } from "@mui/material";

export default function UploadFiles() {
  return (
    <Container maxWidth="md" sx={{ }}>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 4,
          my: 2,
          textAlign: "center",
        }}
      >
        {/* Title */}

        <Box>
          <Typography variant="h4" color="primary" gutterBottom>
            In Tài Liệu
          </Typography>
          <Typography variant="body1">
            Hãy tải file bạn cần in và bắt đầu công việc
          </Typography>
        </Box>

        {/* Upload Button */}
        <Button variant="contained" color="primary" sx={{ mt: 2 }} size="large">
          Tải File
        </Button>

        {/* Drag-and-Drop Section */}
        <Box>
          <Box
            sx={{
              border: "2px dashed",
              borderColor: "primary.main",
              borderRadius: 2,
              p: 3,
              mt: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PostAdd fontSize="large" color="primary" />
            <Typography variant="body2" color="textSecondary">
              Hoặc kéo thả file vào đây
            </Typography>
          </Box>
  
          {/* Supported Formats */}
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            Các định dạng được hỗ trợ: .doc, .dox, .pdf, .xlsx
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
