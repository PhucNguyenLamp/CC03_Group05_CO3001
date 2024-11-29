import { Paper, Typography, Container, Tabs, Tab } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'



const PurchasePage = () => {
    const [selectedPaper, setSelectedPaper] = useState("A4");
    const handlePaperChange = (event) => {
        setSelectedPaper(event.target.value); // Cập nhật loại giấy được chọn
      };
      const [selectedTab, setSelectedTab] = useState("BKPay");

      // Hàm xử lý khi người dùng chọn tab
      const handleTabClick = (tab) => {
        setSelectedTab(tab);
      };
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f4f9", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* Purchase Info */}
        <div style={panelStyle}>
          <h1 style={{ marginBottom: "10px",textAlign:"center",fontSize: '24px'  }}><b>Thông tin mua</b></h1>
          <div style={{ marginBottom: "20px" }}>
            <label style={labelStyle}>Loại giấy</label>
            <select style={inputStyle} value ={selectedPaper} onChange={handlePaperChange}>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="A4">A4</option>
              <option value="A5">A5</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Số lượng trang</label>
            <input
              type="number"
              defaultValue={50}
              style={{ ...inputStyle, width: "100px" }}
              min="1"
              max="500"
            />
            <p style={{ fontSize: "12px", color: "#555" }}>
             
            </p>
          </div>

          {/* Invoice */}
          <div style={{ marginTop: "20px" }}>
            <hr style={{ border: '1px solid #2A3E50', width: '100%' }} />
            <h3 style={{ marginBottom: "10px",marginTop: "10px",textAlign:"center" ,fontSize:'18px'}}><b>Hóa đơn</b></h3>
            <div style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", padding: '10px', width: '700px' ,borderRadius: "5px", padding :"50px"}}>
            <div style={invoiceRowStyle}>
              <span>Loại giấy</span>
              <span>{selectedPaper}</span>
            </div>
            <div style={invoiceRowStyle}>
              <span>Số lượng</span>
              <span>50</span>
            </div>
            <div style={invoiceRowStyle}>
              <span>Đơn giá</span>
              <span>400 VND/trang</span>
            </div>
            <hr style={{ border: '1px solid #2A3E50', width: '100%' }} />
            <div style={{ ...invoiceRowStyle,marginTop:"10px", fontWeight: "bold" }}>
              <span>Tổng cộng</span>
              <span>20.000 VND</span>
            </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div style={panelStyle}>
          
          <h1 style={{ marginBottom: "20px",textAlign:"center",fontSize: '24px'  }}><b>Phương thức thanh toán</b></h1>
          <div style={paymentTabsStyle}>
          <button
          style={{ ...tabButtonStyle, ...(selectedTab === "Momo" ? selectedTabStyle : {}) }}
          onClick={() => handleTabClick("Momo")} // Chọn tab Momo
        >
          Momo
        </button>

        <button
          style={{ ...tabButtonStyle, ...(selectedTab === "BKPay" ? selectedTabStyle : {}) }}
          onClick={() => handleTabClick("BKPay")} // Chọn tab BKPay
        >
          BKPay
        </button>
        <button
          style={{ ...tabButtonStyle, ...(selectedTab === "Ngân hàng" ? selectedTabStyle : {}) }}
          onClick={() => handleTabClick("Ngân hàng")} // Chọn tab Ngân hàng
        >
          Ngân hàng
        </button>
          </div>
          <div style={{marginTop:"20px"}}>
        {selectedTab === "Momo" && <p>Thanh toán qua Momo</p>}
        {selectedTab === "BKPay" && <p>Thanh toán qua BKPay</p>}
        {selectedTab === "Ngân hàng" && <p>Thanh toán qua Ngân hàng</p>}
      </div>
          <div style={{ marginTop: "10px" }}>
            <div style={infoRowStyle}>
              <span>MSSV</span>
              <span><b>2223456</b></span>
            </div>
            <div style={infoRowStyle}>
              <span>Họ và Tên</span>
              <span><b>Trần Văn Đại</b></span>
            </div>
            <div style={infoRowStyle}>
              <span>Email sinh viên</span>
              <span><b>dai.tranvan@hcmut.edu.vn</b></span>
            </div>
            <div style={infoRowStyle}>
              <span>Mã lớp</span>
              <span><b>CC22KHM1</b></span>
            </div>
            <div style={infoRowStyle}>
              <span>Số điện thoại</span>
              <span><b>0989112222</b></span>
            </div>
            <div style={infoRowStyle}>
              <span>Khoa</span>
              <span><b>Khoa học và Kỹ thuật máy tính</b></span>
            </div>
            <div>
              <span>Mã Qr</span>
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=150x150" alt="QR Code" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button style={{ ...actionButtonStyle, backgroundColor: "#007bff", color: "white" }}>
            Trở lại
            </button>
        <button style={{ ...actionButtonStyle, backgroundColor: "#007bff", color: "white" }}>
          Xác nhận 
        </button>
      </div>
     
    </div>
  );
};

// Styles




const panelStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  flex: 1,
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "14px",
};

const invoiceRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const paymentTabsStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const tabButtonStyle = {
  flex: 1,
  padding: "10px",
  backgroundColor: "#ddd",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "5px",
};

const infoRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const actionButtonStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};
const selectedTabStyle = {
  backgroundColor: "#007bff", // Màu nền khi được chọn
  color: "black", // Màu chữ khi được chọn
};

export default PurchasePage;

