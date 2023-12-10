function chosevideo(h) {
            var video = document.getElementById('v');
            var video_box = [
                "video/proud_of_turk.mp4",
                "video/qashqai.mp4",
                "video/war.mp4",
                "video/three-person.mp4",
                "video/turan.mp4",
                "video/Sumerians.mp4"
            ];
            video.src = video_box[h];
            video.onloadstart();
            video.load();
            video.play();
        }
function chosehtml(b) {
    if (b == 6) {
        var imageurl = "Turkey";
    }
    if (b == 5) {
        var imageurl = "azerbyjan";
    }
    if (b == 4) {
        var imageurl = "kyr";
    }
    if (b == 3) {
        var imageurl = "turkmen";
    }
    if (b == 2) {
        var imageurl = "ghash"
    }
    if (b == 1) {
        var imageurl = "uzbekistan";
    }
    window.location.replace("country.html?" + imageurl);
}
