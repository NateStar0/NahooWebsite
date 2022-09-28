
@echo off
color 06

npm run build
color 07
robocopy D:/Dev/Website/Public/game D:/Dev/nahoo/dist/game /COPYALL /E
pause
