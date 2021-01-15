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
# CHia cấu trúc dự án thành MVC
# cấu hình kết nối mongodbd với mongoose
#1Cài đặt
yarn add mongoose
yarn add @types/mongoose --dev
#2 Kết nối DB
  private ConnecttoMongoDB(){
        try {
            var connectstring='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
            mongoose.connect(connectstring, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            });
            console.log('ket noi thanh cong');
        } catch (error) {
            console.log('khong ket noi duoc db');
        }
      

    }
    // cấu hình env
    step1: yarn add dotenv
    step2: yarn add cross-env -dev
    step3: add require('dotenv').config(); vào file server.ts
    step4: tạo file .env ở thư mục gốc (/)
    # Các middware
    hpp bảo vệ các tấn cống parametter
    helmet add các header bảo mật cho http req,res
    morgan dùng để logging cho dự án
    cors cho phép domain của cliend nào được vào
    
    