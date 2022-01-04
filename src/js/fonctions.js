function bases() {
    let animation = anime({
        targets: '.full1',
        translateX: 250,
        autoplay: false
    });
    return animation.play;
}

function carrousel8Images() {

    let images = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });
    
    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            return 3*delta + 2*d;
        }
    });
    anim15.add({
        translateX: [{value: 500, duration: d, easing: 'easeInOutSine'}, 
                     {value: 500, duration: 0, delay: delta}]
    });
}

    animC.add({
        targets: images,
        translateX: [{value: 500, duration: d},
                     {value: '-500', durataion: 0, delay: function(img,ind) {
                                        if (ind == 0) return 3*delta + 2*d;
                                        if (ind == 1) return 2*delta + d;
                                        if (ind == 2) return delta;
                                        return 0;
                                    }
                     },
                     {value: 0, duration: function(img,ind) {
                                    if (ind == 3) return 0;
                                    return d;
                                }
                     }],
        easing: 'easeInOutSine',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            return 4*delta + 3*d;
        }
    });
}