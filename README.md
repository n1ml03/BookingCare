mở xampp tạo 1 database quan_ly_benh_vien

mở 2 tab VSCode 1 là frondend 2 là backend
trong tab back end chạy câu lệnh 'npx sequelize-cli db:migrate'

sau đó vào database thêm dữ liệu

chạy 'npm install' và 'npm start' ở cả 2 tab VSCode
=> action này sẽ tự mở lên trang home

chạy xong vào trang wep này tạo 1 tài khoản admin 'http://localhost:8080/crud'

tạo xong vào trang wep http://localhost:3000/login đăng nhập

ấn váo (Người dùng) ở góc trái trên cùng chọn vào CRUD REDUX
-tạo tối thiểu 6 tài khoản có vai trò là bác sĩ, tải ảnh đại diện

tiếp tục ấn vào (Người dùng)
-chọn Quản lí bác sĩ và khai thông tin chi tiết
-chọn Quản lí kế hoạch khám bệnh và chọn các lịch khám cho bác sĩ
=> khi ở trang home click vào 1 bác sĩ bất kì sẽ hiển thị thông tin tạo ở trên