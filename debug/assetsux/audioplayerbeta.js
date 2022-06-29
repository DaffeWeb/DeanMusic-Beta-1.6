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
let minimizedplayer2 = document.getElementById("onlyminiplayer2");
let miniimageside = document.getElementById("imageviewablemini");
let miniimageside2 = document.getElementById("imageviewablemini2");
let userplaytimeline = document.getElementById("userplaytimeline");
let homelinktop = document.getElementById("user_link_home");
let minititle = document.getElementById("miniplayerviewsongtitle");
let miniartist = document.getElementById("miniplayerviewsongartist");
let contarrowup = document.getElementById("userdropdown_iconcontain");
let gigaimagebg = document.getElementById("user_imagebgfade");
let songitems = document.getElementsByClassName("playerappsong");

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
    const songurlaudio = playersong.getAttribute("data-linkurlaudio");

    let versonospace = songplayid.replace(/\s/g, "");

    document.getElementById("playeroptionmini").innerHTML = "expand_more";

    homelinktop.style.color = "#676767";
    homelinktop.style.fontWeight = "500";
    homelinktop.style.cursor = "pointer";
    gigaimagebg.style.backgroundImage = `url(${songurlimg})`;

    console.log(versonospace)

    userplayiconactions.style.position = "absolute";
    userplayiconactions.style.opacity = "0";
    if(window.innerWidth < 1290){
        userplaytimeline.style.width = "calc(100% - 30%)";
        document.getElementById("playeroptionmini").style.display = "unset";
        contarrowup.style.display = "flex";
    }
    else{
        userplaytimeline.style.width = "calc(100% - 40%)";
    }
    userplayiconactions.style.transform = "translateY(200%)";
    miniimageside.style.transform = "translateY(100%)";
    miniimageside.style.opacity = "0";
    minititle.style.opacity = "0";
    miniartist.style.opacity = "0";
    gigaimagebg.style.opacity = "0.3";
    gigaimagebg.style.transition = "opacity 0.5s 0.5s ease-in-out";

    let conditionedplaysongtitle = `${title} - ${artist}`;

    document.title = conditionedplaysongtitle;

    miniplayer.style.height = "70px";
    miniplayer.style.opacity = "1";
    miniplayer.style.pointerEvents = "all";

    imagecontainerplayer.style.backgroundImage = `url(${songurlimg})`;
    miniimageside.style.backgroundImage = `url(${songurlimg})`;
    miniimageside2.style.backgroundImage = `url(${songurlimg})`;
    miniartist.innerHTML = artist;
    minititle.innerHTML = title;

    wrappersongselected = 1;

    wrapperPlayer.style.transform = "translateY(0%)";
    document.body.style.overflow = "hidden";

    currentwrapperopen = 1;

    playerviewtitle.innerHTML = title;
    playerviewartist.innerHTML = artist;
    playeraudiomain.src = songurlaudio;
    playeraudiomain.load();

    playerisplayed = 0;

    playerPlay();

    for(var i=0; i<songitems.length; i++){
        songitems[i].classList.remove("playing");
    }

    playersong.classList.add("playing");
}

document.addEventListener("keydown", e =>{
    console.log(e)
    e.preventDefault();
    if(e.code === "Space"){
        playerPlay();
    }
    else if(e.code === "ArrowLeft"){
        playerReset30();
    }
    else if(e.code === "ArrowRight"){
        playerFor10();
    }
})

function playerinputsin(playerobj){
    playerobj.style.transform = "scale(0.9)";
}

function playerinputsout(playerobj){
    playerobj.style.transform = "scale(1.0)";
}

function minimizesongplayer(e){
    if(currentwrapperopen == 1){
        currentwrapperopen = 0;
        wrapperPlayer.style.transform = "translateY(100%)";
        gigaimagebg.style.transition = "opacity 0.2s 0.0s ease-in-out";
        gigaimagebg.style.opacity = "0";
        document.body.style.overflow = "auto";
        e.innerHTML = "expand_less";
        userplayiconactions.style.position = "unset";
        userplayiconactions.style.opacity = "1";
        if(window.innerWidth < 1290){
            userplaytimeline.style.width = "calc(100% - 30%)";
            e.style.display = "none";
            contarrowup.style.display = "none";
        }
        else{
            userplaytimeline.style.width = "calc(100% - 60%)";
        }
        userplayiconactions.style.transform = "translateY(0%)";
        miniimageside.style.transform = "translateY(0%)";
        miniimageside.style.opacity = "1";
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            homelinktop.style.color = "#ffffff";
        }
        else{
            homelinktop.style.color = "#000000";
        }
        homelinktop.style.fontWeight = "600";
        homelinktop.style.cursor = "default";
        minititle.style.opacity = "1";
        miniartist.style.opacity = "1";
    }
    else if(currentwrapperopen == 0){
        currentwrapperopen = 1;
        gigaimagebg.style.opacity = "0.3";
        gigaimagebg.style.transition = "opacity 0.5s 0.5s ease-in-out";
        wrapperPlayer.style.transform = "translateY(0%)";
        document.body.style.overflow = "hidden";
        e.innerHTML = "expand_more";
        userplayiconactions.style.position = "absolute";
        userplayiconactions.style.opacity = "0";
        userplaytimeline.style.width = "calc(100% - 30%)";
        if(window.innerWidth < 1290){
            e.style.display = "unset";
            contarrowup.style.display = "flex";
        }
        userplayiconactions.style.transform = "translateY(200%)";
        miniimageside.style.transform = "translateY(100%)";
        miniimageside.style.opacity = "0";
        homelinktop.style.color = "#676767";
        homelinktop.style.fontWeight = "500";
        homelinktop.style.cursor = "pointer";
        minititle.style.opacity = "0";
        miniartist.style.opacity = "0";
    }
}

function homeopentry(){
    if(currentwrapperopen == 1){
        currentwrapperopen = 0;
        gigaimagebg.style.transition = "opacity 0.2s 0.0s ease-in-out";
        gigaimagebg.style.opacity = "0";
        wrapperPlayer.style.transform = "translateY(100%)";
        document.body.style.overflow = "auto";
        document.getElementById("playeroptionmini").innerHTML = "expand_less";
        userplayiconactions.style.position = "unset";
        userplayiconactions.style.opacity = "1";
        if(window.innerWidth < 1290){
            userplaytimeline.style.width = "calc(100% - 30%)";
            document.getElementById("playeroptionmini").style.display = "none";
            contarrowup.style.display = "none";
        }
        else{
            userplaytimeline.style.width = "calc(100% - 60%)";
        }
        userplayiconactions.style.transform = "translateY(0%)";
        miniimageside.style.transform = "translateY(0%)";
        miniimageside.style.opacity = "1";
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            homelinktop.style.color = "#ffffff";
        }
        else{
            homelinktop.style.color = "#000000";
        }
        homelinktop.style.fontWeight = "600";
        homelinktop.style.cursor = "default";
        minititle.style.opacity = "1";
        miniartist.style.opacity = "1";
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
            minimizedplayer2.innerHTML = "pause_circle";
            minimizedplayer.innerHTML = "pause_circle";
            widenedplayer.innerHTML = "pause_circle";
        }
        else if(playerisplayed == 1){
            playeraudiomain.pause();
            playerisplayed = 0;
            minimizedplayer2.innerHTML = "play_circle";
            minimizedplayer.innerHTML = "play_circle";
            widenedplayer.innerHTML = "play_circle";
        }
        else if(playerisplayed != 0 || playerisplayed != 1){
            alert("Error occured in the playing, We encourage to report this so it will be fixed sooner!");
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

    if(playerisplayed == 0){
        playerisplayed = 0;
        playerPlay();
    }
})

function playerReset30(){
    let goback30s = (playeraudiomain.currentTime - 10);
    playeraudiomain.currentTime = goback30s;
}

function playerFor10(){
    let gofor10s = (playeraudiomain.currentTime + 10);
    playeraudiomain.currentTime = gofor10s;
}