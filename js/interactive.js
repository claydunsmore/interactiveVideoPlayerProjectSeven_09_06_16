/**
 * Created by User on 9/5/2016.
 */
(function(win, doc) {
    var video = document.getElementById("video");
    var subtitles = document.getElementById("subtitles");
    var syncData = [
        {"end": "4.130","start": "0.240","text": "Now that we've looked at the architecture of the internet, let's see how you might" },
        {"end": "7.535","start": "4.130","text": "connect your personal devices to the internet inside your house." },
        {"end": "11.270","start": "7.535","text": "Well there are many ways to connect to the internet, and" },
        {"end": "13.960","start": "11.270","text": "most often people connect wirelessly." },
        {"end": "17.940","start": "13.960","text": "Let's look at an example of how you can connect to the internet." },
        {"end": "22.370","start": "17.940","text": "If you live in a city or a town, you probably have a coaxial cable for" },
        {"end": "26.880","start": "22.370","text": "cable Internet, or a phone line if you have DSL, running to the outside of" },
        {"end": "30.920","start": "26.880","text": "your house, that connects you to the Internet Service Provider, or ISP." },
        {"end": "34.730","start": "30.920","text": "If you live far out in the country, you'll more likely have" },
        {"end": "39.430","start": "34.720","text": "a dish outside your house, connecting you wirelessly to your closest ISP, or" },
        {"end": "41.190","start": "39.430","text": "you might also use the telephone system." },
        {"end": "46.300","start": "41.190","text": "Whether a wire comes straight from the ISP hookup outside your house, or" },
        {"end": "49.270","start": "46.300","text": "it travels over radio waves from your roof," },
        {"end": "53.760","start": "49.270","text": "the first stop a wire will make once inside your house, is at your modem." },
        {"end": "57.780","start": "53.760","text": "A modem is what connects the internet to your network at home." },
        {"end": "60.000","start": "57.780","text": "A few common residential modems are DSL or" }

    ];
    createSubtitle();

    function createSubtitle()
    {
        var element;
        for (var i = 0; i < syncData.length; i++) {
            element = document.createElement('span');
            element.setAttribute("id", "c_" + i);
            element.innerText = syncData[i].text + " ";
            subtitles.appendChild(element);
        }
    }

    video.addEventListener("timeupdate", function(e){
        syncData.forEach(function(element, index, array){
            if( video.currentTime >= element.start && video.currentTime <= element.end )
                subtitles.children[index].style.color = 'orange';
        });
    });
}(window, document));
