import { Paper, Typography, Container, Box, Button } from '@mui/material'
import { CheckBox } from '@mui/icons-material'
export default function Success() {
    return (
        <Container maxWidth="md" sx={{}}>
            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 4,
                    flexGrow: 1,
                    width: '100%',
                    textAlign: "center",
                    my: 2,
                    height: '50vh',
                }}>
                <CheckBox sx={{ fontSize: 200, color: 'green' }} />

                <Box>
                    <Typography variant="h4" color="primary" gutterBottom>
                        Gửi yêu cầu thành công
                    </Typography>
                    <Typography variant="body1">
                        Vui lòng chờ trong lúc máy in xử lý và thực hiện yêu cầu của bạn
                    </Typography>
                </Box>
                <Box>
                    <Button>Trở về</Button>
                    <Button>Tiếp tục in</Button>
                    <Button variant='contained'>Mua trang</Button>
                </Box>
            </Paper>
        </Container>
    )
}
