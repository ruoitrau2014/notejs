# Bài học
File gitignore quyết định những file,module, thư mục không được đẩy lên source control (github,gitlab)
file README.md chứa các thông tin dự án; các comment...
# các comment cần nhớ
E:\Nodejs>yarn init
E:\Nodejs>git init    #khởi tạo git
git commit -m "Intial commit"
git add * 
git commit -m "Intial commit"
PS E:\Nodejs> git config --global user.name "ruoitrau2014"
PS E:\Nodejs> git config --global user.email "nganv1986@gmail.com"
PS E:\Nodejs> git remote add origin https://github.com/ruoitrau2014/notejs.git
PS E:\Nodejs> git branch -M main
PS E:\Nodejs> git push -u origin main

# cấu hình typecript
tsc --init
# cài đặt express
yarn add express
# cấu hình
 "scripts": {
    "server":"nodemon src/server.ts"
  },
# chạy dứng dụng
yarn server
# Lưu ý khi chạy phải save hết