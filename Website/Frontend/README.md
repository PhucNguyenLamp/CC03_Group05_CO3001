# note routes cho backend

`POST /login` để login, req = {username, password, role} <br>
`POST /resgister` để đăng kí, req = {username, password, role, thông tin ngân hàng} <br>
`GET /history-payment`, res = {username} kiểu dữ liệu như sau <br>
![image](https://github.com/user-attachments/assets/c795dfdd-c288-442d-95b0-417798052964) <br>

`GET /history-print`, req = {username} kiểu dữ liệu như sau <br>
![image](https://github.com/user-attachments/assets/0f8b5242-315f-4274-ba21-a39985b4af68) <br>

`POST /print`, dùng để gửi lệnh in, res như hình + payload file <br>
![image](https://github.com/user-attachments/assets/9cfa1e50-ef0a-44ec-ae30-9968769e0bf1) <br>

`GET /user`, dùng để lấy thông tin người dùng
res = {username, số trang còn lại, tài khoản ngân hàng} <br>

`POST /buy`, mua thêm trang, req = {số tiền, số trang} <br>
