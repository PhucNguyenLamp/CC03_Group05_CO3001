import { Paper, Typography, Container, Tabs, Tab } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'

const columns2 = [
    { field: 'id', headerName: 'STT', type: 'number', width: 70 },
    { field: 'transactionId', headerName: 'Mã giao dịch', width: 200 },
    { field: 'time', headerName: 'Thời gian', width: 130 },
    { field: 'paper', headerName: 'Loại giấy', width: 100 },
    { field: 'pages', headerName: 'Số trang mua', type: 'number', width: 100 },
    { field: 'price', headerName: 'Tổng cộng', width: 170 },
];

const rows2 = [
    { id: 1, transactionId: '7362738490', time: '15:40 12/11', paper: 'A4', pages: 40, price: "20.000VND" },
    { id: 2, transactionId: '7362738490', time: '15:40 12/11', paper: 'A4', pages: 40, price: "20.000VND" },
    { id: 3, transactionId: '7362738490', time: '15:40 12/11', paper: 'A4', pages: 40, price: "20.000VND" },
    { id: 4, transactionId: '7362738490', time: '15:40 12/11', paper: 'A4', pages: 40, price: "20.000VND" },
    { id: 5, transactionId: '7362738490', time: '15:40 12/11', paper: 'A4', pages: 40, price: "20.000VND" },
    { id: 6, transactionId: '7362738490', time: '15:40 12/11', paper: 'A4', pages: 40, price: "20.000VND" },
];

const columns1 = [
    { field: 'id', headerName: 'STT', type: 'number', width: 70 },
    { field: 'time', headerName: 'Thời điểm in', width: 130 },
    { field: 'printer', headerName: 'Máy in', width: 130 },
    {
        field: 'address',
        headerName: 'Địa điểm',
        width: 150,
    },
    {
        field: 'document',
        headerName: 'Tên tài liệu',
        width: 190,
    },
    { field: 'pages', headerName: 'Số trang', type: 'number', width: 80 },
];

const rows1 = [
    { id: 1, time: '15:40 12/11', printer: 'TOSHIBA', address: "CS1/B3-102", document: "BTL_CNPM_2024.pdf", pages: 52 },
    { id: 2, time: '15:40 12/11', printer: 'TOSHIBA', address: "CS1/B3-102", document: "BTL_CNPM_2024.pdf", pages: 52 },
    { id: 3, time: '15:40 12/11', printer: 'TOSHIBA', address: "CS1/B3-102", document: "BTL_CNPM_2024.pdf", pages: 52 },
    { id: 4, time: '15:40 12/11', printer: 'TOSHIBA', address: "CS1/B3-102", document: "BTL_CNPM_2024.pdf", pages: 52 },
    { id: 5, time: '15:40 12/11', printer: 'TOSHIBA', address: "CS1/B3-102", document: "BTL_CNPM_2024.pdf", pages: 52 },
    { id: 6, time: '15:40 12/11', printer: 'TOSHIBA', address: "CS1/B3-102", document: "BTL_CNPM_2024.pdf", pages: 52 },
];


export default function History() {
    const [value, setValue] = React.useState(0);
    const [data, setData] = useState({ rows: rows1, columns: columns1 });
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        // Switch data based on the tab index
        if (newValue === 0) {
            setData({ rows: rows1, columns: columns1 });
        } else if (newValue === 1) {
            setData({ rows: rows2, columns: columns2 });
        }
    }
    return (
        <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', }} >
            <Paper
                elevation={5}
                sx={{
                    height: '70vh',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                    width: '100%',
                    textAlign: "center",
                    my: 2,
                }}
            >
                <Typography variant="h4" color="primary" gutterBottom>
                    Lịch Sử
                </Typography>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="In ấn" />
                    <Tab label="Thanh toán" />
                </Tabs>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data.rows}
                        columns={data.columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                    />
                </Paper>
            </Paper>
        </Container>
    )
}
