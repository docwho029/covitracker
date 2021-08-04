var firstToSecond = anime.timeline({
        easing: 'easeInOutExpo',
        duration: 1000,
        autoplay: false,
        // delay: 1000,
    });

    firstToSecond.add({
        targets: '#wave',
        duration:1000,
        d: [
            {value:"M0 1024V0C0 0 371 3 383 1.50011C395 0.00021553 489 0.5 757.5 0.5C1026 0.5 1019 1 1035 1.00001C1051 1.00002 1409 0 1409 0H1440V1024H0Z"}
        ]
    }, 0)
    .add({
        targets: '#credits',
        duration:1000,
        d: 'M880 6.50003C882 -7.99998 1440 9.5 1440 9.5V1029H4.00009C4.00009 1029 -9.15527e-05 800.478 481.5 682C963 563.522 1019.98 672.5 1106 489C1192.02 305.5 878 21 880 6.50003Z',
    }, 0)
    .add({
        targets: '#section-one',
        duration:500,
        opacity: [1,0],
    }, 0)
    .add({
        targets: '#section-two',
        duration:500,
        opacity: [0,1],
    }, 500)
    
