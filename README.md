# aptitude-test
### Setup
Điều kiện: Đã tải source code về máy

#### Setup Frontend

B1: Installation Vuejs bằng cách chạy lệnh:  `npm install -g @vue/cli`

B2: Vào thư mục **aptitude-test/frontend/vue-aptitude** chạy lệnh : `npm run serve`

#### Setup Backtend

B1: Thực hiện tải và cài đặt XAMPP theo link:
[https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)

B2: Tạo thư mục **be_aptitude** trong thư mục htdocs ( **C:\xampp\htdocs** đối với Windows
hoặc **opt/lampp/htdocs** đối với Ubuntu)

B3: Copy tất cả các file của thư mục **aptitude-test/backend** vào thư mục **be_aptitude** vừa tạo

B4: Thực hiện mở XAMPP. Mở chương trình trong Start menu nếu bạn sử dụng máy tính Windows,
hoặc chạy lệnh `sudo /opt/lampp/lampp start` đối với Ubuntu

B5: Truy cập localhost/phpmyadmin sau đó import file aptitude.sql vào database

B6: Vào file **store.js** theo đường dẫn **aptitude-test/frontend/vue-aptitude/src/store.js**,
sau đó chỉnh sửa đường dẫn ở **dòng 45** thành đường dẫn đến file **productRequest.php**. Ví dụ http://localhost:8080/be_aptitude/productRequest.php

B7: Vào thư mục **aptitude-test/frontend/vue-aptitude** chạy lệnh : `npm run serve`



