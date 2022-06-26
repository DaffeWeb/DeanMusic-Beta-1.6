let random = 
    [
       'LET THEM IN NOW',
       'DECLINE THE USER ENTRY',
       'LET THEM IN NOW',
       'DECLINE THE USER ENTRY',
       'LET THEM IN NOW',
    ];

document.getElementById("userid_agree").addEventListener("click", ()=>{
    var randomnow = random[Math.floor(Math.random() * random.length)];
    document.getElementById("userid_agree").style.display = "none";
    document.getElementById("loadingporg").style.display = "unset";
    localStorage.setItem("useragreedata", "agreed");
    setTimeout(function(){
        if(randomnow == "LET THEM IN NOW"){
            window.location = "index.html";
        }
        else if(randomnow == "DECLINE THE USER ENTRY"){
            document.getElementById("texterror").style.display = "unset";
            setTimeout(function(){
                document.getElementById("texterror").innerHTML = "Retrying to submit your agreement..";
                setTimeout(function(){
                    document.getElementById("loadingporg").style.display = "none";
                    document.getElementById("texterror").innerHTML = "Seems like the server keeps rejecting your submission, try refreshing and try again.";
                }, 5000);
            },5000);
        }
    }, 3000)
})