@echo off
setlocal

echo Starting Healthome PostgreSQL...
docker compose up -d postgres
if errorlevel 1 exit /b 1

echo Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 exit /b 1

if not exist .env copy .env.local.example .env
call npm run db:generate
if errorlevel 1 exit /b 1
call npm run db:deploy
if errorlevel 1 exit /b 1
call npm run db:seed
if errorlevel 1 exit /b 1

echo Healthome backend is ready. Run: npm start
