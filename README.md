# AngularCli (angular4x & ssr & pwa)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.0.

## Concepts Integrate with
- Angular-Universal
- ServiceWorker

## Development server
```bash
## สำหรับ dev server รันผ่าน `http://localhost:4000/`.
## for a dev server. Navigate to `http://localhost:4000/`. 

## แอฟนี้ จะ auto reload เมื่อมีการแก้ไข code ในโปรเจ็ค
## The app will automatically reload if you change any of the source files.

npm start
```

## Build / Production
```bash
## สำหรับการ deploy ใช้คำสั่งนี้ครับ
npm run deploy

## อัพโหลด โฟลเดอร์ dist เพื่อ รันบน server
## Deploy dist folder to app server

Structure of dist folder:

/dist/server <-- expressjs
/dist/client <-- angular


## รัน ssr บน server
node /dist/server/bin/www.js
```
## Build / Production (Docker Compose)
```bash
## สำหรับ deploy ร่วมกับ docker
## deploy project with docker

./build.sh

## หรือ 

cd docker
docker-compose up

##ต้องการให้ docker run mode demon(background mode)
docker-compose up -d

```


## Note
```bash
This is project for starter concepts if you want to do your project please check and fix bug about this project.
## Thank.

โครงการนี้สร้างมาเพื่อ ทดสอบการทำงานของ ssr(universal) ร่วมกับ pwa concepts ครับ ยังมีบัคอยู่ครับ แต่จากการทดสอบใช้งานได้ครับ
ถ้าเจอปัญหา สามารถแจ้งหรือ Contributions เพื่อแก้ปัญหากับเราได้คับ
## ขอบคุณครับ
```
