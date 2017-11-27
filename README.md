# AngularCli (angular4x & ssr & pwa)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0.

## Concepts Integrate with
- Angular-Universal
- ServiceWorker

## Development server
```bash
Run `ng serve` or `npm start` 
## for a dev server. Navigate to `http://localhost:4000/`. 
## The app will automatically reload if you change any of the source files.
```

## Build / Production

```bash
## สำหรับการ deploy ใช้คำสั่งนี้ครับ
npm run deploy

## อัพโหลด โฟลเดอร์ dist เพื่อ รันบน server
## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/brower <-- angular


## รัน ssr บน server
node /dist/server/bin/www.js
```

## Note

This is project for starter concepts if you want to clone to do someting please check and fixbug for me 
Thank.

โครงการนี้สร้างมาเพื่อ ทดสอบการทำงานของ ssr(universal) ร่วมกับ pwa concepts ครับ ยังมีบัคอยู่ครับ แต่จากการทดสอบใช้งานได้ครับ
ถ้าเจอปัญหา สามารถแจ้งหรือ Contributions เพื่อแก้ปัญหากับเราได้คับ
ขอบคุณครับ