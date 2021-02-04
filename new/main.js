

document.getElementById('btn').addEventListener('click', random_bg_color);

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var fontColor = "rgb(" + x + "," + y + "," + z + ")";

document.getElementById('container-bg').style.background = bgColor;
document.querySelector('.container').style.color = fontColor;
}

