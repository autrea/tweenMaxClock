var small_hand = document.getElementById("clock_small_hand");
var big_hand = document.getElementById("clock_big_hand");

var myVar = setInterval(init, 1000);



function init() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    console.log(h,m,s);

    var SENTINAL = true;

    var lc = 6;
    var bc = 30;

    var small_position = m * lc;
    var big_position = h * bc;

    TweenMax.set(small_hand, { transformOrigin: "50% 100%", rotation: small_position });
    TweenMax.set(big_hand, { transformOrigin: "50% 100%", rotation: big_position });


    TweenMax.to(big_hand, 1, { rotation: big_position, repeat: -1, ease: Power4.easeInOut });
    TweenMax.to(small_hand, 1, { rotation: small_position, repeat: -1, ease: Power4.easeInOut });


// TweenMax.to(big_hand, 60 * 60 * 12, { rotation: big_start, ease: Power0.easeNone });
// TweenMax.to(small_hand, 60 * 12, { rotation: small_start, ease: Power0.easeNone });

// TweenMax.set(small_hand, { transformOrigin: "50% 100%", rotation: small_start });
// TweenMax.set(big_hand, { transformOrigin: "50% 100%", rotation: big_start });
}

console.log();