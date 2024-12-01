
module.exports = {
    runSpotify: function(mainDir,devtools){
        require('child_process').exec('cmd /c '+mainDir+'/Spotify.exe --remote-debugging-port=9222', function(){
            // …your callback code may run here…
         });
    }
};