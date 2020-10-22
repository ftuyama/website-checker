$(document).ready(() => {
    var audioUrl = chrome.runtime.getURL(`assets/cash1.wav`);
    var audio = new Audio(audioUrl);
    var audioCtx = new AudioContext();
    var source = audioCtx.createMediaElementSource(audio);

    // create a gain node
    var gainNode = audioCtx.createGain();
    gainNode.gain.value = 10;
    source.connect(gainNode);

    // connect the gain node to an output destination
    gainNode.connect(audioCtx.destination);

    console.log(new Date().toISOString());
    setTimeout(() => {
        var LookFor = "Não há horários disponíveis no momento. Tente novamente mais tarde!";
        if($('body:contains("' + LookFor + '")').length == 0) {
            var LoginMessage = "Senha";
            audio.play();
            if ($('body:contains("'+ LoginMessage + '")').length == 0) {
                alert("Found: " + LookFor);
            }else{
                alert("Session Expired: Please, login again" );
            }
        }
        else {
            location.reload();
        }
    }, 30000);
});
