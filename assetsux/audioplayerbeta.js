let wrapperPlayer = document.getElementById("user_idviewablesongtitlequeue_");
let playerviewtitle = document.getElementById("title_viewplayer");
let playerviewartist = document.getElementById("artist_viewplayer");
let playeraudiomain = document.getElementById("audioWraplayer");
let appcontainer = document.getElementById("webappcontainer");
let progressbar = document.getElementById("prgressbar");
let progressarea = document.getElementById("progressmodeplay");
let widenedplayer = document.getElementById("onlymainplayer");
let imagecontainerplayer = document.getElementById("imagecontainerplayer_titleplayer");
let miniplayer = document.getElementById("userbottom_miniplayer");
let maxvoltrack = document.getElementById("volumetracker_maximized");
let maxvoltrk = document.getElementById("uservoltrackmaxi");
let userplayiconactions = document.getElementById("userplayiconactions");
let minimizedplayer = document.getElementById("onlyminiplayer");
let miniimageside = document.getElementById("imageviewablemini");
let userplaytimeline = document.getElementById("userplaytimeline");

let currentwrapperopen = 0;
let wrappersongselected = 0;
let playerisplayed = 0;
let playersongend = playeraudiomain.ended;
let maxvoltrkopen = 0;

function wrapperopensong(playersong){
    const title = playersong.getAttribute("data-title");
    const artist = playersong.getAttribute("data-artist");
    const songplayid = playersong.getAttribute("data-title");
    const songurlimg = playersong.getAttribute("data-urlimage");

    userplayiconactions.style.position = "absolute";
    userplayiconactions.style.opacity = "0";
    userplaytimeline.style.width = "calc(100% - 40%)";
    userplayiconactions.style.transform = "translateX(-200%)";
    miniimageside.style.transform = "translateY(100%)";
    miniimageside.style.opacity = "0";

    let conditionedplaysongtitle = `${title} - ${artist}`;

    document.title = conditionedplaysongtitle;

    miniplayer.style.height = "70px";
    miniplayer.style.opacity = "1";
    miniplayer.style.pointerEvents = "all";

    imagecontainerplayer.style.backgroundImage = `url(${songurlimg})`;
    miniimageside.style.backgroundImage = `url(${songurlimg})`;

    wrappersongselected = 1;

    wrapperPlayer.style.transform = "translateY(0%)";
    document.body.style.overflow = "hidden";

    currentwrapperopen = 1;

    playerviewtitle.innerHTML = title;
    playerviewartist.innerHTML = artist;
    playeraudiomain.src = `musicaudios/${songplayid}.mp3`;
    playeraudiomain.load();

    playerPlay(widenedplayer);
}

function minimizesongplayer(e){
    if(currentwrapperopen == 1){
        currentwrapperopen = 0;
        wrapperPlayer.style.transform = "translateY(100%)";
        document.body.style.overflow = "auto";
        e.innerHTML = "expand_less";
        userplayiconactions.style.position = "unset";
        userplayiconactions.style.opacity = "1";
        userplaytimeline.style.width = "calc(100% - 60%)";
        userplayiconactions.style.transform = "translateX(0%)";
        miniimageside.style.transform = "translateY(0%)";
        miniimageside.style.opacity = "1";
    }
    else if(currentwrapperopen == 0){
        currentwrapperopen = 1;
        wrapperPlayer.style.transform = "translateY(0%)";
        document.body.style.overflow = "hidden";
        e.innerHTML = "expand_more";
        userplayiconactions.style.position = "absolute";
        userplayiconactions.style.opacity = "0";
        userplaytimeline.style.width = "calc(100% - 40%)";
        userplayiconactions.style.transform = "translateX(-200%)";
        miniimageside.style.transform = "translateY(100%)";
        miniimageside.style.opacity = "0";
    }
}

function playeraudiochange(e){
    let macval = e.value;
    let conditionedval = (macval / 100);
    playeraudiomain.volume = conditionedval;
}

function voltrackmaxbtn(){
    if(maxvoltrkopen == 0){
        maxvoltrack.style.display = "flex";
        maxvoltrkopen = 1;
    }
    else if(maxvoltrkopen == 1){
        maxvoltrack.style.display = "none";
        maxvoltrkopen = 0;
    }
    else{
        alert("Error With Opening");
    }
}

function playerPlay(){
    if(wrappersongselected == 1){
        if(playerisplayed == 0){
            playeraudiomain.play();
            playerisplayed = 1;
            minimizedplayer.innerHTML = "pause_circle";
            widenedplayer.innerHTML = "pause_circle";
        }
        else if(playerisplayed == 1){
            playeraudiomain.pause();
            playerisplayed = 0;
            minimizedplayer.innerHTML = "play_circle";
            widenedplayer.innerHTML = "play_circle";
        }
        else if(playerisplayed != 0 || playerisplayed != 1){
            alert("Error occured in the playing, We encourage to report this so it will be fixed sooner!")
        }
    }
}

playeraudiomain.addEventListener("timeupdate", (e)=>{
    const currentTm = e.target.currentTime;
    const currentDur = e.target.duration;
    let prgresswidth = (currentTm / currentDur) * 100;
    progressbar.style.width = `${prgresswidth}%`;
    let musctotl = document.getElementById("totaldurat");
    let muscrem = document.getElementById("remtime");

    playeraudiomain.addEventListener("loadeddata", ()=>{

        let audioDurat = playeraudiomain.duration;
        let totalmin = Math.floor(audioDurat / 60);
        let totalsec = Math.floor(audioDurat % 60);
        if(totalsec < 10){
            totalsec = `0${totalsec}`;
        }
        musctotl.innerHTML = `${totalmin}:${totalsec}`;
    })

    playeraudiomain.addEventListener("ended", ()=>{
        playeraudiomain.currentTime = 0;
        playerPlay(widenedplayer);
    })

    let currmin = Math.floor(currentTm / 60);
    let currsec = Math.floor(currentTm % 60);
    if(currsec < 10){
        currsec = `0${currsec}`;
    }
    muscrem.innerHTML = `${currmin}:${currsec}`;
})

progressarea.addEventListener("click", (e)=>{
    let prgresswidthval = progressarea.clientWidth;
    let clickoffset = e.offsetX;
    let songduration = playeraudiomain.duration;

    playeraudiomain.currentTime = (clickoffset / prgresswidthval) * songduration;
})

function playerReset30(){
    let goback30s = (playeraudiomain.currentTime - 10);
    playeraudiomain.currentTime = goback30s;
}