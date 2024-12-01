var spa = require('./spa.js')
module.exports = {
    installtScript: function(mainDir){
        var file =  spa.readFile(mainDir, "index.html").split("<body>");
        file[0]+= '<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>';
        file[0]+= '<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>';
        
        //file[0]+= '<script>document.querySelector("#main > div > div.Root__top-container > nav > div.tUwyjggD2n5KvEtP5z1B > ul").insertAdjacentHTML("beforeend", `<li class="eNs6P3JYpf2LScgTDHc6"><div class="GlueDropTarget GlueDropTarget--tracks GlueDropTarget--albums GlueDropTarget--artists GlueDropTarget--playlists GlueDropTarget--playlists"><a class="link-subtle ATUzFKub89lzvkmvhpyE" draggable="false" href="/Plugins"><span class="material-icons">extension</span><span class="Type__TypeElement-goli3j-0 gnbLuy ellipsis-one-line">Plugins</span></a></div></li>`)</script>';
        file[0]+= "<body><script>console.log('Exploit Injected')</script>";
        console.log("Inject Payload");
        spa.writeFile(mainDir, file.join(""), "index.html");
    },
    installCSS: function(mainDir){
        var file =  spa.readFile(mainDir, "index.html").split("</head>");
        file[0]+= '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></head>';
        //file[0]+= "<body><script>console.log('  -CSS Load')</script>";
        file[0]+= "<body><script>console.log('Load CSS: Default')</script>";
        console.log("Inject Custom CSS");
        spa.writeFile(mainDir, file.join(""), "index.html");
    }
};