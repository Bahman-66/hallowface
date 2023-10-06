@echo off

rem Check if app.js exists in the dist directory
if exist "dist\app.js" (
  node dist\app.js %*
) else (
  node ..\dist\app.js %*
)
