document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelectorAll('.chuyenslide li');
    var slideShow = document.querySelectorAll('.cacslide ul li');
    var soSlide = 3;
    for (var k = 0; k < btn.length; k++) {
        btn[k].onclick = function () {
            clearInterval(time);
            //remove class kichhoat
            for (var i = 0; i < btn.length; i++) {
                btn[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');

            var vitri = 0;
            var btnActive = this;
            for (vitri = 0; btnActive = btnActive.previousElementSibling; vitri++) { }
            chuyenslide(vitri);
        }
    }

    chuyenslide = function (slide) {
        for (var n = 0; n < slideShow.length; n++) {
            slideShow[n].classList.remove('active');
        }
        slideShow[slide].classList.add('active');
    }

    //b1 Tinh xem dang ở slide số mấy
    //b2 cho tất cả slide ẩn đi và cho số tt của slide tính được + 1 hiện lên và cả nút nữa (using nextElementSibling)
    //b3 check xem đã đến slide cuối cùng chưa cho slide tự quay lại.

    var time = setInterval(function () {
        //lấy vị trí hiện tại của slide đang được active
        var vitri = 0;
        var slideHientai = document.querySelector('.cacslide ul li.active');
        for (vitri = 0; slideHientai = slideHientai.previousElementSibling; vitri++) { }
        //check xem đã đên slide cuối chưa
        // nếu chưa đến thì hoạt động bình thường
        // nếu đến rồi thì quay trở lại slide đầu tiên
        if (vitri == slideShow.length - 1) {
            vitri = 0;
        }

        for (var n = 0; n < slideShow.length; n++) {
            slideShow[n].classList.remove('active');
            btn[n].classList.remove('kichhoat');
        }
        slideShow[vitri].nextElementSibling.classList.add('active');
        btn[vitri].nextElementSibling.classList.add('kichhoat');

    }, 4000);
}, false)