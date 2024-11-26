
# Các API Backend

## 1. Đăng nhập
**`POST /login`**  
- **Mô tả**: Dùng để đăng nhập.  
- **Yêu cầu**:  
  ```json
  {
    "username": "<string>",
    "password": "<string>",
    "role": "<string>"
  }
  ```
![image](https://github.com/user-attachments/assets/50070656-5dda-4a3f-b834-47f7661eff15)

---

## 2. Đăng ký
**`POST /register`**  
- **Mô tả**: Dùng để đăng ký tài khoản mới.  
- **Yêu cầu**:  
  ```json
  {
    "username": "<string>",
    "password": "<string>",
    "role": "<string>",
    "thông tin ngân hàng": "<string>"
  }
  ```

---

## 3. Lệnh in
**`POST /print`**  
- **Mô tả**: Gửi lệnh in.  
- **Yêu cầu**:  Thông tin bên dưới và 1 file pdf/docx.  
  ![Yêu cầu lệnh in](https://github.com/user-attachments/assets/9cfa1e50-ef0a-44ec-ae30-9968769e0bf1)

---
## 4. Lịch sử thanh toán
**`GET /history-payment`**  
- **Mô tả**: Lấy lịch sử thanh toán.  
- **Yêu cầu**:  
  ```json
  {
    "username": "<string>"
  }
  ```
- **Phản hồi**:  
  ![Lịch sử thanh toán](https://github.com/user-attachments/assets/c795dfdd-c288-442d-95b0-417798052964)

---

## 5. Lịch sử in
**`GET /history-print`**  
- **Mô tả**: Lấy lịch sử in.  
- **Yêu cầu**:  
  ```json
  {
    "username": "<string>"
  }
  ```
- **Phản hồi**:  
  ![Lịch sử in](https://github.com/user-attachments/assets/0f8b5242-315f-4274-ba21-a39985b4af68)

---

## 7. Mua thêm trang
**`POST /buy`**  
- **Mô tả**: Mua thêm số lượng trang.  
- **Yêu cầu**:  
  ```json
  {
    "số tiền": "<integer>",
    "số trang": "<integer>"
  }
  ```
Cho màn mua trang  

## 6. Thông tin người dùng
**`GET /user`**  
- **Mô tả**: Lấy thông tin người dùng.  
- **Phản hồi**:  
  ```json
  {
    "username": "<string>",
    "số trang còn lại": "<integer>",
    "tài khoản ngân hàng": "<object>"
  }
  ```
Cho màn dashboard
---

