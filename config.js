const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUUwYkcyRUovdWh4QXQxQmpJSFhXWGN6bURBTjhIQVNMalhkdFpoTHpXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlRBU3VadmxweWxXSjc1ZTJ1L0swdVJJZEp1aWlTNGh3bWN1TG1GSSszQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQ0E2WXlvNEI4QS9NNFdVOFNad2VjZ1BaUjluSUFlVWN2bG90Q0pEUEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSjhXcjZMN040TkNPUGc4eSt1cnZjSC9vTXQzS0g5aUp6YVU2QTgrNm13PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFdCtxY3l5Q0tWdUFacFNmbWM2Rjh5MUhkcThJbFBFR25GVDBINFR2a289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEWXhmK3dCWGNhQVpCekdyeS9HWTkzcVZkOW1US1JIVWNsRWFzRlUwM2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0M3Tjl4c1lRcHFYM2QvR2cyWnA2OW0xTlVZSW51TEhreDN1TldJR0xsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibk92ZmNrT1pBVkhYbnVFQkRhTWUwQXZzdHNwaEdnWWV0dHdWaExaTjBuaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhtZFMxZFpGOW1DOHZ1ano3bisvVElPTXdUY2ZONm81WlVNMkgvbDVTOUVFeklhOTY0QmV1RXNSaG1ieUt4d3FrWExNTVZFeWw3am52dmlwUGtTVUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5Ijoiell5QzE5M3FDNkc3dytTRk8xV0ttMWZNNVRZc0YvbDZWNzJuUHg3QUU2RT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZHhBay1uQl9Td2k3a3c1M3ZZNGtIQSIsInBob25lSWQiOiJlYTAzNTUyYS0yMWU3LTQxYTQtYjkyYy0zNzZlM2FjNDc4NmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmxiZVdidUdZT1JGRDRuUDBoVGExcDRXZDRrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngyMzVhVGpORUhpbjBVRDNMRmVnR2FUdEtmbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMR1hWTTFaWCIsIm1lIjp7ImlkIjoiMjY3NzY2NjA5MDI6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2agfCdmb7wnZm88J2ZtPCdmb4g8J2ZsfCdmoYg8J2ZuPCdmbjwnZm4WyDwnZqB8J2Zs10ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05yNXdhWURFT2FoNjdvR0dCb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRvQnAwUXRCVEN4NXM3blVUbGdKUWdXd2ROMGkzbXBxTWJxMDJ3YWd0VFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpIYzJZL2M2dUVXMW5lOFB5Z0JrNkhGUmJHNGhVbU9ZaGFzdmZLSzRNN2N6cUlhVWZlR3J0cUhPUGdtendsTTF5cm4xYzV1NVVzM2JmNWFlcFlmZkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvZTBsMnE1Rk1PeG03NWFRVTVTWkNGY2RieFFLTU51aG1Bb29JcXlwQTgvS3FVSERsSEZUcE5nalU0MDBtM1lCMm12UDczQ1lVYldROC92aE4wb0VBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Nzc2NjYwOTAyOjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE2QWFkRUxRVXdzZWJPNTFFNVlDVUlGc0hUZEl0NXFhakc2dE5zR29MVTEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQwMDQ5ODF9", //paste your session_id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", 
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
AUTO_REACT: process.env.AUTO_REACT || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",    
};
