const fs = require('fs');
const pl = require('./utils/payload')
const spa = require('./utils/spa')
const cd = require('./utils/cmd')
console.log();

var mainDir = process.env.APPDATA + "/Spotify";
if (fs.existsSync(mainDir+ "/Spotify.exe")) {
   // Backup.Clean(mainDir);
  // spa.restoreBackup(mainDir, "Clean");
  // plspa.backup(mainDir, "Clean");
  pl.installtScript(mainDir);
   pl.installCSS(mainDir);
  cd.runSpotify(mainDir,true);
}else{
    console.log("No encontrado");
}