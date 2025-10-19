```markdown
# NodeMVC Learning Platform

یک پلتفرم آموزشی تحت وب با معماری MVC که با Node.js و Express ساخته شده است.
این پروژه برای ارائه دوره‌های آموزشی آنلاین طراحی شده است.

## 🚀 ویژگی‌ها
- **مدیریت دوره‌های آموزشی** - ایجاد و دسته‌بندی دوره‌ها
- **سیستم کاربری** - ثبت‌نام، ورود و پروفایل کاربران
- **پنل مدیریت** - مدیریت محتوا و کاربران
- **قالب ریسپانسیو** - طراحی واکنش‌گرا با Bootstrap
- **معماری MVC** - کدهای منظم و قابل توسعه

## 🛠 تکنولوژی‌ها
- **Backend:** Node.js + Express.js
- **Frontend:** Bootstrap + EJS
- **Architecture:** MVC Pattern
- **Database:** MongoDB + Mongoos

## 📦 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js (نسخه ۱۴ یا بالاتر)
- npm یا yarn
- MongoDB

### مراحل نصب

1. **کلون کردن ریپازیتوری:**
```bash
git clone https://github.com/AmirHMohammadi1/nodemvc.git
cd nodemvc
```

2. **نصب dependencies:**
```bash
npm install
```

3. **تنظیم فایل محیطی:**
```bash
cp .env.example .env
```
سپس فایل `.env` را ویرایش کرده و مقادیر مناسب را قرار دهید.

4. **راه‌اندازی دیتابیس:**
   

6. **اجرای پروژه:**
```bash
# حالت توسعه
npm run dev

# یا حالت تولید
npm start
```

6. **دسترسی به برنامه:**
مرورگر را باز کرده و به آدرس زیر بروید:
```
http://localhost:3000
```

## 🏗 ساختار پروژه
```
nodemvc/
├── app/
│   ├── controllers/     # کنترلرهای برنامه
│   │   ├── CourseController.js
│   │   ├── UserController.js
│   │   └── AdminController.js
│   ├── models/         # مدل‌های دیتابیس
│   ├── views/          # فایل‌های EJS
│   │   ├── front/
│   │   ├── admin/
│   │   └── partials/
│   └── middleware/     # میدلورهای سفارشی
├── config/             # تنظیمات برنامه
│   ├── database.js
│   └── app.js
├── routes/             # تعریف روترها
│   ├── web.js
│   └── api.js
├── public/             # فایل‌های استاتیک
│   ├── css/
│   ├── js/
│   ├── images/
│   └── uploads/
├── .env.example        # نمونه فایل محیطی
├── package.json
└── server.js          # فایل اصلی اجرای برنامه
```

## 📝 نحوه استفاده

### برای دانشجویان:
- مشاهده دوره‌های آموزشی
- ثبت‌نام در دوره‌ها
- دسترسی به محتوای آموزشی

### برای مدرسین:
- ایجاد دوره‌های جدید
- مدیریت محتوای آموزشی
- مشاهده گزارش‌ها

### برای مدیران:
- دسترسی به پنل مدیریت:
```
http://localhost:3000/admin
```
- مدیریت کاربران و دوره‌ها
- مشاهده آمار و گزارش‌ها

## 🎯 وضعیت پروژه
🟡 **در حال توسعه** - این پروژه در حال تکمیل شدن است و ویژگی‌های جدیدی اضافه خواهند شد.

### ویژگی‌های در دست توسعه:
- [ ] سیستم پرداخت
- [ ] آزمون‌های آنلاین
- [ ] سیستم نظردهی
- [ ] اعلان‌ها
- [ ] API برای موبایل

## 🤝 مشارکت در توسعه

ما از مشارکت‌های شما استقبال می‌کنیم! برای همکاری:

1. **فورک کردن ریپازیتوری**
   - روی دکمه Fork در گیت‌هاب کلیک کنید

2. **ایجاد برنچ جدید**
```bash
git checkout -b feature/feature-name
```

3. **انجام تغییرات و کامیت**
```bash
git add .
git commit -m "Add new feature"
```

4. **پوش کردن به ریپازیتوری**
```bash
git push origin feature/feature-name
```

5. **ایجاد Pull Request**
   - به ریپازیتوری اصلی مراجعه کرده و Pull Request ایجاد کنید

### دستورالعمل‌های مشارکت:
- کدها باید تمیز و قابل خواندن باشند
- قبل از ارسال PR مطمئن شوید تست‌ها پاس می‌شوند

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

```text
MIT License

Copyright (c) 2024 Amir H. Mohammadi

اجازه کپی، استفاده و توزیع این نرم‌افزار به شرط ذکر نام مالک مجاز است.
```

## 📞 تماس با توسعه‌دهنده

برای ارتباط با من می‌توانید از روش‌های زیر استفاده کنید:

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-00CC99?style=for-the-badge&logo=google-chrome&logoColor=white)](https://amirhmohammadi1.github.io/my-resume/)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/AmirHMohammadi/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:a.h.mohammadi5@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/mr_amir_developer)

### گزارش باگ و درخواست ویژگی‌های جدید:
لطفاً باگ‌ها و پیشنهادات خود را از طریق [Issues گیت‌هاب](https://github.com/AmirHMohammadi1/nodemvc/issues) گزارش دهید.

---

**⭐ اگر این پروژه را مفید یافتید، لطفاً به آن ستاره دهید!**
