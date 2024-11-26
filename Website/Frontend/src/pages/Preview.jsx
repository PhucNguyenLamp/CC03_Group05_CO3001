import {
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Radio,
    Typography,
    Container,
    Table,
    Button,
    Box,
    Stepper,
    Step,
    StepLabel,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from "@mui/material";
import { useState, useEffect } from "react";
import docx from "../assets/docx.png";
import pdf from "../assets/pdf.png";
import { useNavigate } from 'react-router';
import { useLocation } from "react-router-dom";

const printers = [
    { id: 1, name: "TOSHIBA e-STUDIO2520AC", location: "CS1 / B3-102" },
    { id: 2, name: "TOSHIBA e-STUDIO4528AG", location: "CS1 / B3-102" },
    { id: 3, name: "Canon Pixma TR4570S", location: "CS1 / B9-304" },
    { id: 4, name: "Canon LBP226Dw", location: "CS2 / H6-604" },
    { id: 5, name: "Canon MF461DW", location: "CS2 / H6-602" },
];

const user = { pages: 10 };

const steps = ['Chọn máy in', 'Chọn chế độ in'];

export default function Preview() {
    const [selectedPrinter, setSelectedPrinter] = useState(1);
    const [pdfUrl, setPdfUrl] = useState("");
    const [number, setNumber] = useState(1);
    const [side, setSide] = useState(1);
    const [sidesInOnePage, setSidesInOnePage] = useState(1);
    const [range, setRange] = useState("all");
    const [paperSize, setPaperSize] = useState("A4");

    const [activeStep, setActiveStep] = useState(0);



    const navigate = useNavigate();
    const location = useLocation();
    const { file } = location.state;
    console.log(file);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1); // Go to next step
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1); // Go to previous step
        } else {
            navigate('/print'); // Navigate to the previous page if at the first step
        }
    };

    const handleRadioChange = (id) => {
        setSelectedPrinter(id);
    };

    useEffect(() => {
        if (file) {
            const fileUrl = URL.createObjectURL(file); // Create a temporary URL
            setPdfUrl(fileUrl); // Set it to the state
        }
        return () => {
            // Clean up the URL when the component unmounts
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [file]);
    return (
        <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5, my: 2 }}>
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', p: 5, height: 800 }}>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep} alternativeLabel >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                    {activeStep == 0 ? (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 5,
                                    justifyContent: "space-between",
                                    width: 500,
                                    alignItems: "center",
                                    // minwidth: 500,
                                }}
                            >
                                <Box sx={{ height: '100%', width: 80 }}>
                                    <img src={pdf} alt="Document Icon" style={{ height: "100%", width: "100%" }} />
                                </Box>
    
                                <Box>
                                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            Tên file:
                                        </Typography>
                                        <Typography variant="body1">{file.name}</Typography>
                                    </Box>
    
                                    <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 0.5 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            Kích thước:
                                        </Typography>
                                        <Typography variant="body1">{file.size / 1000}kB</Typography>
                                    </Box>
    
                                    {/* <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 0.5 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        Số trang:
                                    </Typography>
                                    <Typography variant="body1">34</Typography>
                                </Box> */}
                                </Box>
                            </Box>
    
    
    
    
                            <TableContainer component={Paper} sx={{ maxWidth: 600, mt: 2, maxHeight: 400 }}>
                                <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                                    Chọn máy in
                                </Typography>
                                <Table>
                                    <TableHead sx={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
                                        <TableRow>
                                            <TableCell align="center">ID</TableCell>
                                            <TableCell >Tên</TableCell>
                                            <TableCell >Địa điểm</TableCell>
                                            <TableCell align="center">Chọn</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {printers.map((printer) => (
                                            <TableRow key={printer.id}>
                                                <TableCell align="center">{printer.id}</TableCell>
                                                <TableCell>{printer.name}</TableCell>
                                                <TableCell>{printer.location}</TableCell>
                                                <TableCell align="center">
                                                    <Radio
                                                        checked={selectedPrinter === printer.id}
                                                        onChange={() => handleRadioChange(printer.id)}
                                                        color="primary"
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
    
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, }}>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}
                                    onClick={() => navigate('/print')}> Trở lại </Button>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}
                                    onClick={() => { handleNext(); }}> Xác nhận </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-between", width: 500, height: 700 }}>
                                <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                                    Xác nhận in
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                                    <strong>Máy in:</strong> {printers.find((printer) => printer.id === selectedPrinter).name} để in tài liệu
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                                    <strong>Địa điểm in:</strong> {printers.find((printer) => printer.id === selectedPrinter).location}
                                </Typography>
                                <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
                                    <strong>Số trang in còn lại:</strong> {user.pages}
                                </Typography>
    
    
                                <TextField variant="outlined" label="Số lượng" sx={{ mt: 2 }} fullWidth value={number} onChange={(e) => setNumber(e.target.value)}/>
                                    <TextField variant="outlined" label="Số mặt" sx={{ mt: 2 }} fullWidth value={side} onChange={(e) => setSide(e.target.value)} />
                                    <TextField variant="outlined" label="Số trang một mặt" sx={{ mt: 2, mb: 2 }} fullWidth value={sidesInOnePage} onChange={(e) => setSidesInOnePage(e.target.value)} />
                                <FormControl fullWidth>
                                    <InputLabel id="phamvilabel">Phạm vi</InputLabel>
                                    <Select
                                        labelId="phamvilabel"
                                        id="phamvi"
                                        sx={{ mb: 2 }}
                                        value={range}
                                        label="Phạm vi"
                                        onChange={(e) => setRange(e.target.value)}
                                    >
                                        <MenuItem value={"all"}>Toàn bộ</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="kichthuoclabel">Loại giấy</InputLabel>
                                    <Select
                                        labelId="kichthuoclabel"
                                        sx={{}}
                                        value={paperSize}
                                        label="Loại giấy"
                                        onChange={(e) => setPaperSize(e.target.value)}
                                    >
                                        <MenuItem value={"A5"}>A5</MenuItem>
                                        <MenuItem value={"A4"}>A4</MenuItem>
                                        <MenuItem value={"A3"}>A3</MenuItem>
                                        <MenuItem value={"A2"}>A2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2, }}>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}
                                    onClick={() => { handleBack(); }}> Trở lại </Button>
                                <Button variant="contained" color="primary" sx={{ mt: 2 }}
                                    onClick={() => { navigate('/success'); }}> Xác nhận </Button>
                            </Box>
                        </>
                    )}
                </Paper>
    
    
                <Paper>
                    <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>
                        Bản xem trước
                    </Typography>
                    <Box sx={{ width: 600 }}>
                        {pdfUrl ? (
                            <iframe src={pdfUrl} width="100%" height="700"></iframe>
                        ) : (
                            <Typography variant="body1">Loading PDF...</Typography>
                        )}
                    </Box>
    
                </Paper>
            </Box>
        </Container>
    )
}
