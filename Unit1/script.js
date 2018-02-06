window.addEventListener("DOMContentLoaded", function () {
    var btnRight = document.querySelector('.btns .right'),
        btnLeft = document.querySelector('.btns .left'),
        slides = document.querySelectorAll('.slides ul li'),
        curentSlideIndex = 0,
        totalSlide = slides.length;

    var changeSlide = function (huongchuyen) {
        var slideNow = slides[curentSlideIndex];
        //xác định chỉ sô của phần tử tiếp theo trên phần tử hiện tại
        if (huongchuyen == 'right') {
            (curentSlideIndex < totalSlide - 1) ? curentSlideIndex++ : curentSlideIndex = 0;

        } else {
            (curentSlideIndex > 0) ? curentSlideIndex-- : curentSlideIndex = totalSlide - 1;
        }

        var nextSlide = slides[curentSlideIndex];

        //remove class active và remove trước khi add
        for (var i = 0; i < totalSlide; i++) {
            slides[i].className = '';
        }
        //khi ấn next add class remove slide cũ và add class active vào slide hiện tại        
        var hientai = '', tiep = '';
        if (huongchuyen == 'right') {
            hientai = 'slideout';
            tiep = 'slidein'
        } else {
            tiep = 'lui1';
            hientai = 'lui2'
        }
        slideNow.classList.add('remove');
        slideNow.classList.add(hientai);
        nextSlide.classList.add('active');
        nextSlide.classList.add(tiep);
    }

    var time = setInterval(function () {
        changeSlide('right');
    }, 4000);

    btnRight.onclick = function () {
        clearInterval(time);
        changeSlide('right');
    }
    btnLeft.onclick = function () {
        clearInterval(time);
        changeSlide('left');
    }
    document.addEventListener('keyup',function(e){
        clearInterval(time);
        var huong = '';
        if(e.keyCode == 39){
            huong ='right';
        }
        if(e.keyCode == 37){
            huong ='left';
        }
        changeSlide(huong);
    })
;
}, false)