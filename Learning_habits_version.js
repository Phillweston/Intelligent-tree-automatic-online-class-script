var ti = $("body");
var video = $(".catalogue_ul1 li[id*=video-] .catalogue_title");
var i = 1;
var v = 1;
var startTime = new Date().getTime(); //开始时间
var endTime = startTime + 60*25*1000; //结束时间 25分钟
video.css("color", "blue");
console.log("已选取" + video.length + "个小节,并已用蓝色标明");
setTimeout(function () {
    $('.speedTab15').click();
    $('.volumeIcon').click();
    console.log("已进行静音和1.5倍加速");
}, 3000);
ti.on("DOMNodeInserted", function (e) {
    var now = new Date().getTime();
    if(now-endTime >= 0){
        ti.off("DOMNodeInserted");
        if(window.confirm("已观看25分钟，是否返回首页？")){
            window.location.href = "https://onlineh5.zhihuishu.com/onlineWeb.html#/studentIndex";
        }
    }
 
    if (e.target.textContent == "关闭") {
        console.log("检测到第" + i + "个弹题窗口");
        window.setTimeout(function () {
            // document.getElementById("tmDialog_iframe").contentWindow.document.getElementsByClassName("answerOption")[0].getElementsByTagName("input")[0].click();
            $('#tmDialog_iframe')[0].contentWindow.$('.answerOption input[type="radio"]')[0].click();
            setTimeout(function () {
                $(".popbtn_cancel").click();
                console.log("已关闭");
            }, 1000);
        }, 2000);
        i++;
    } else if (e.target.textContent == "本节视频,累计观看时间『100%』") {
        console.log("检测到视频观看完成，准备跳到下一节");
        $('.next_lesson_bg').find('a').trigger('click');
        console.log("已跳转");
        setTimeout(function () {
            $('.volumeIcon').click();
            $('.speedTab15').click();
            console.log("已进行静音和1.5倍加速");
        }, 6000);
        v++;
        console.log("目前播放了" + v + "个视频");
    }
});
