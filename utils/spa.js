const AdmZip = require("adm-zip");
const zipLocal = require("zip-local");

const fs = require('fs');
module.exports = {
    backup: function(mainDir, type){
        var typeO = (type == "Clean") ? "CLEAN" : new Date().toISOString().slice(0, 10);
        try {
            console.log("--Backup--  \n   Saving xpui.spa");
            fs.createReadStream(mainDir + "/Apps/xpui.spa").pipe(fs.createWriteStream(mainDir + "/Apps/["+typeO+"]xpui.spa"));
            console.log("   Saving login.spa");
            fs.createReadStream(mainDir + "/Apps/login.spa").pipe(fs.createWriteStream(mainDir + "/Apps/["+typeO+"]login.spa"));
        }catch(e) {
            console.log(e)
        }
    },
    restoreBackup: function(mainDir,type){
        if(type == "Clean"){
            console.log("Restoring Backup");
            fs.createReadStream(mainDir + "/Apps/[CLEAN]xpui.spa").pipe(fs.createWriteStream(mainDir + "/Apps/xpui.spa"));
            fs.createReadStream(mainDir + "/Apps/[CLEAN]login.spa").pipe(fs.createWriteStream(mainDir + "/Apps/login.spa"));
        }
    },

    readFile: (mainDir, file) => { return new AdmZip(mainDir + "/Apps/xpui.spa").readAsText(file)},
    writeFile: (mainDir, insert, file) => {
        new AdmZip(mainDir + "/Apps/xpui.spa").extractAllTo(mainDir + "/Apps/xpui");
        fs.writeFileSync(mainDir + "/Apps/xpui/index.html", insert);
        zipLocal.sync.zip(mainDir + "/Apps/xpui").compress().save(mainDir + "/Apps/xpui.spa");
        fs.rmdirSync(mainDir + "/Apps/xpui/",{ recursive: true });
    }
};
