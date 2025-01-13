$(document).ready(function(){

    var swiper1 = new Swiper(".main-swiper", {
      loop: true, // 무한반복
      slidesPerView: 1,
      // centeredSlides:true,
      autoplay: {
        delay:3500,
        disableOninteraction:false,
      }, // 자동재생
      allowTouchMove: true,
      // cssMode: true, <- false로 해야 기본 swiper 동작으로 되돌릴 수 있음. (주석처리하고 드래그 안되는 거 고침)
      speed: 2000, // 슬라이드 속도
      direction: 'horizontal',
      effect: 'slide', // 전환 효과 슬라이드
      freemode: true,
      debugger: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets", // 점 타입
        clickable: true, // 점 클릭
      },
      });


    var swiper2 = new Swiper(".best-swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      scrollbar : {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        },
    });


    var swiper3 = new Swiper(".new-swiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      scrollbar : {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3.3,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1300: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        },
    });


    var swiper4 = new Swiper(".lookbook-swiper", {
        slidesPerView: 3.8,
        spaceBetween: 30,
        loop: true,
        centeredSlides:true,
        scrollbar : {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 1.8,
            spaceBetween: 14,
          },
          800: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView:3.4,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 3.8,
            spaceBetween: 30,
          },
        },
      });


    var swiper5 = new Swiper(".banner-box", {
      loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      });


    var swiper6 = new Swiper(".sale-box .product-box", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      breakpoints: {
          300: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          500: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2.6,
            spaceBetween: 20,
          },
          // 1000: {
          //   slidesPerView:3.2,
          //   spaceBetween: 25,
          // },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
    });
    
    // go-top 클릭 시 화면 맨 위로 이동
    $('.go-top').click(function(e){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop : 0
      },500)
    });

    $(window).scroll(function(){
      if($(window).width() <= 800){
        if($(window).scrollTop()>50){
          $('.go-top').fadeIn()
        }else{
          $('.go-top').fadeOut()
        }
      }

    })

    // header에 마우스가 오버되었을 때 on클래스추가
    // $('header').mouseover(function(){
    //   $('header').addClass('on')
    // })
    // $('header').mouseleave(function(){
    //   var scTop = $(window).scrollTop();
    //   if(scTop > 40){}
    //   $('header').removeClass('on')
    // })

    // scroll 했을 때 header first-nav는 사라지고 second-nav는 고정되게
    $(window).scroll(function(){
      var scTop = $(window).scrollTop();
      // console.log(scTop);
      if(scTop > 50){
        $('header').addClass('on')
        // $('.first-nav').css({
        //   display : 'none'
        // })
        $('.first-nav').slideUp(300)
      }else{
        if($(window).width() > 800) {
          $('header').removeClass('on')
          // $('.first-nav').css({
            //   display : 'flex'
            // })
            $('.first-nav').slideDown(200)
            
          }else{
            $('header').removeClass('on')
            $('.first-nav').hide();
        }
      }
    })

    // mobile- brand 클릭하면 popup 나오게 (슬라이드)
    $('header .second-nav .menu .brand').click(function(){
      $('.brand-popup').addClass('active')
      // css에서 transition을 썼기 때문에 slideDown말고 class만 추가함
      // $('.brand-popup').slideDown(200)
    })
    $('.brand-popup .popup-wrapper .up').click(function(){
      $('.brand-popup').removeClass('active')
      // $('.brand-popup').slideUp(200)

    })

    // mobile-tap에서 메뉴 클릭하면 옆에서 메뉴창 나오게
    $('.mobile-tap .button-box .menu').click(function(){
      $(this).addClass('on')
      $(this).siblings().removeClass('on')
      $('.menu-popup').addClass('active')
      $('.dim').addClass('active')
    })
    $('.menu-popup .close').click(function(){
      $('.menu-popup').removeClass('active')
      $('.dim').removeClass('active')
    })

    // product랑 category 연결해서 클릭하면 해당 콘텐츠가 나오게
    $('.category-box .left li a').click(function(e){
      e.preventDefault();
      $('.category-box .left li a').removeClass('active');
      $(this).addClass('active');
      // $(this).siblings().removeClass('active');

      var idx = $(this).parent('li').index();
      $('.contents-box li').removeClass('on');
      $('.contents-box li').eq(idx).addClass('on');
    })
    // $('.category-box .left li').eq(0).find('a').trigger('active');
    
    // search아이콘 누르면 검색창 나오게
    $('.search-box .ico_search').click(function(){
      $('.search-box').toggleClass('on')
    })
    $(window).on("load", function(){
      $('.search-box').removeClass('on')
    })
    $('.search-box .cancel').click(function(){
      $('.search-box').removeClass('on')
    })

    // lookbook에서 +아이콘 누르면 그에 해당되는 상품 팝업창이 뜨게
    // 팝업창 열고 닫을 때때
    $('.lookbook .detail-btn').click(function(){
      // 내가 클릭한 버튼의 부모 슬라이드 (closest:가장 가까운 조상 요소)
      var slide = $(this).closest('.swiper-slide');
      var productId = slide.data("product");
      // 클릭한 버튼의 데이터 구분
      var detailId = $(this).data("detail");

      // 슬라이드의 데이터 읽기
      var image = slide.data("image");
      var brand = slide.data("brand");
      var code = slide.data("code");
      var name = slide.data("name");
      var standardPrice = slide.data("standard-price");
      var sale = slide.data("sale");
      var discountPrice = slide.data("discount-price");

      // 팝업 내용에 데이터 넣기
      // $(".lookbook-popup .popup-img").css("background-image", `url(${image})`);
      // $(".lookbook-popup .brand").html(`${brand} <span>${code}</span>`);
      // $(".lookbook-popup .name").text(name);
      // $(".lookbook-popup .standard").text(`${standardPrice}원`);
      // $(".lookbook-popup .sale").text(sale);
      // $(".lookbook-popup .discount").text(`${standardPrice}원`);
      // $(".lookbook-popup .discount").html(`${discountPrice}<span>원</span>`);


        // 상품 데이터 가져오기(사용자 정의 함수 = getProductData : 내가 작성한 사용자 정의 함수로, 상품 데이터를 가져오는 역할을 한다. 이 함수는 별도로 작성된 데이터(products 객체)를 참조하여 productId와 detailId에 맞는 데이터를 반환한다.)
        var productData = getProductData(productId, detailId);
      // getProductData 함수를 사용한 이유
      // 1. 데이터 관리: products와 같은 데이터를 중앙 집중식으로 관리하고, html태그의 data-* 속성을 간소화한다.
      // 2. 유지보수 : 데이터 변경 시, 함수 내부의 데이터만 수정하면 되므로 효율적이다.
      // 3. 재사용성 : 다양한 위치에서 동일한 데이터를 가져올 수 있는 기능을 제공한다.



        // 팝업에 데이터 반영
        $(".lookbook-popup .popup-img").css("background-image", `url(${productData.image})`);
        $(".lookbook-popup .brand").html(`${productData.brand} <span>${productData.code}</span>`);
        $(".lookbook-popup .name").text(productData.name);
        $(".lookbook-popup .standard").text(`${productData.standardPrice}원`);
        $(".lookbook-popup .sale").text(`${productData.sale}`);
        $(".lookbook-popup .discount").html(`${productData.discountPrice}<span>원</span>`);

        // 팝업 열기
        $(".lookbook-popup").addClass("on");
    })
    // 팝업 닫기
    $('.lookbook-popup .popup-exit').click(function(){
      $('.lookbook-popup').removeClass('on')
    })

    // 상품 데이터 가져오기 함수
    function getProductData(productId, detailId) {
      var products = {
        1: {
          1: { 
            image: "images/lookbook01-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBJ040W2",
            name: "IV 롱 오리털",
            standardPrice: "438,000",
            sale: "28%",
            discountPrice: "315,360"
          }
        },
        2: {
          1: { 
            image: "images/lookbook02-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCJ020B1",
            name: "BK 벨트 롱 오리털 JP",
            standardPrice: "398,000",
            sale: "28%",
            discountPrice: "286,560"
          } 
        },
        3: {
          1: {
            image: "images/lookbook03-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBJ020B1",
            name: "BK 벨트 롱 오리털 JP",
            standardPrice: "398,000",
            sale: "28%",
            discountPrice: "286,560"
          },
          2: {
            image: "images/lookbook03-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT010W2",
            name: "IV 토끼 맨투맨",
            standardPrice: "83,000",
            sale: "28%",
            discountPrice: "59,760"
          }
        },
        4: {
          1: {
            image: "images/lookbook04-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBJ010B4",
            name: "실버 샤이닝 오리털 JP",
            standardPrice: "395,000",
            sale: "28%",
            discountPrice: "284,400"
          },
          2: {
            image: "images/lookbook04-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBP030B1",
            name: "BK 토끼 와이드 팬츠",
            standardPrice: "89,000",
            sale: "28%",
            discountPrice: "64,080"
          }
        },
        5: {
          1: { 
            image: "images/lookbook05-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCJ010P1",
            name: "PK 리본 오리털 JP",
            standardPrice: "328,000",
            sale: "28%",
            discountPrice: "236,160"
          } 
        },
        6: {
          1: {
            image: "images/lookbook06-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT050B1",
            name: "BK 토끼 맨투맨",
            standardPrice: "78,000",
            sale: "28%",
            discountPrice: "56,160"
          },
          2: {
            image: "images/lookbook06-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBP030B1",
            name: "BK 토끼 와이드 팬츠",
            standardPrice: "89,000",
            sale: "28%",
            discountPrice: "64,080"
          }
        },
        7: {
          1: {
            image: "images/lookbook07-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT050B1",
            name: "BK 토끼 맨투맨",
            standardPrice: "78,000",
            sale: "28%",
            discountPrice: "56,160"
          },
          2: {
            image: "images/lookbook07-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KAP050B1",
            name: "BK TAPE 장식 레깅스",
            standardPrice: "63,000",
            sale: "28%",
            discountPrice: "45,360"
          }
        },
        8: {
          1: {
            image: "images/lookbook08-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCT030P4",
            name: "PK 반집업 골지 TS",
            standardPrice: "83,000",
            sale: "28%",
            discountPrice: "59,760"
          },
          2: {
            image: "images/lookbook08-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCP010P4",
            name: "PK 골지 일자핏 PT",
            standardPrice: "68,000",
            sale: "28%",
            discountPrice: "48,960"
          }
        },
        9: {
          1: {
            image: "images/lookbook09-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT050B1",
            name: "블랙 레이어드 MTM",
            standardPrice: "69,000",
            sale: "28%",
            discountPrice: "49,680"
          },
          2: {
            image: "images/lookbook09-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCP030B1",
            name: "블랙 벨로아 와이드 PT",
            standardPrice: "57,000",
            sale: "28%",
            discountPrice: "41,040"
          }
        },
        10: {
          1: { 
            image: "images/lookbook10-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCO020P4",
            name: "핑크 트위드 점퍼 SK",
            standardPrice: "165,000",
            sale: "28%",
            discountPrice: "118,800"
          } 
        },
        11: {
          1: {
            image: "images/lookbook11-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT050B1",
            name: "BK 모직 야구 JP",
            standardPrice: "218,000",
            sale: "28%",
            discountPrice: "156,960"
          },
          2: {
            image: "images/lookbook11-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KAS010B1",
            name: "BK 리본 장식 주름 SK",
            standardPrice: "89,000",
            sale: "28%",
            discountPrice: "64,080"
          }
        },
        12: {
          1: {
            image: "images/lookbook12-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBW011Y1",
            name: "옐로우 케이블 니트 VT",
            standardPrice: "129,000",
            sale: "28%",
            discountPrice: "92,880"
          },
          2: {
            image: "images/lookbook12-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KAS010B1",
            name: "BK 리본 장식 주름 SK",
            standardPrice: "89,000",
            sale: "28%",
            discountPrice: "64,080"
          }
        },
        13: {
          1: {
            image: "images/lookbook13-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT060Y1",
            name: "YE 토끼 맨투맨",
            standardPrice: "83,000",
            sale: "28%",
            discountPrice: "59,760"
          },
          2: {
            image: "images/lookbook13-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBP040B1",
            name: "BK 배색 치랭스",
            standardPrice: "83,000",
            sale: "28%",
            discountPrice: "59,760"
          }
        },
        14: {
          1: {
            image: "images/lookbook14-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCT010W2",
            name: "IV 곰토끼 MTM",
            standardPrice: "78,000",
            sale: "28%",
            discountPrice: "56,160"
          },
          2: {
            image: "images/lookbook14-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCS010Y4",
            name: "골드 샤이닝 주름 SK",
            standardPrice: "89,000",
            sale: "28%",
            discountPrice: "64,080"
          }
        },
        15: {
          1: {
            image: "images/lookbook15-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBT010W2",
            name: "IV 토끼 맨투맨",
            standardPrice: "83,000",
            sale: "28%",
            discountPrice: "59,760"
          },
          2: {
            image: "images/lookbook15-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBP060B4",
            name: "GY 주름 치랭스",
            standardPrice: "89,000",
            sale: "28%",
            discountPrice: "64,080"
          }
        },
        16: {
          1: { 
            image: "images/lookbook16-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCC010Y4",
            name: "BG 토글장식 CT",
            standardPrice: "389,000",
            sale: "28%",
            discountPrice: "290,080"
          } 
        },
        17: {
          1: { 
            image: "images/lookbook17-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBC020W2",
            name: "IV 펄 카라 코트",
            standardPrice: "348,000",
            sale: "28%",
            discountPrice: "250,560"
          } 
        },
        18: {
          1: {
            image: "images/lookbook18-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBC010B1",
            name: "BK 펄 카라 코트",
            standardPrice: "358,000",
            sale: "28%",
            discountPrice: "257,760"
          },
          2: {
            image: "images/lookbook18-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KBO010B1",
            name: "트위드 주름 OP",
            standardPrice: "159,000",
            sale: "28%",
            discountPrice: "114,480"
          }
        },
        19: {
          1: {
            image: "images/lookbook19-1-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCW011R1",
            name: "레드 ST 배색 가디건",
            standardPrice: "156,000",
            sale: "28%",
            discountPrice: "112,320"
          },
          2: {
            image: "images/lookbook19-2-popup-image.jpeg",
            brand: "Tiffany",
            code: "T45KCO010B1",
            name: "BK 체크 트위드 점퍼 SK",
            standardPrice: "178,000",
            sale: "28%",
            discountPrice: "128,160"
          }
        },

      };
    
      return products[productId][detailId];

      // 안전한 코드 작성
      // return products[productId]?.[detailId] || null;
      // -> productId나 detailId가 잘못되었을 경우 에러가 발생할 수 있다. 이를 방지하려면 안전한 접근 방식을 추가한다. '?.'는 옵셔널 체이닝(optional chaining)으로 해당 키가 존재하지 않을 경우 undefined를 반환한다. 데이터가 없으면 null을 반환하여 안전하게 처리할 수 있다.
    }


    // 다른 방법
  //   var popupImg = [
  //     "images/lookbook01-popup-image.jpeg",
  //     "images/lookbook02-popup-image.jpeg",
  //     "images/lookbook03-popup-image.jpeg",
  //     "images/lookbook04-popup-image.jpeg",
  //     "images/lookbook05-popup-image.jpeg",
  //     "images/lookbook01-popup-image.jpeg",
  //     "images/lookbook07-popup-image.jpeg",
  //     "images/lookbook08-popup-image.jpeg",
  //     "images/lookbook09-popup-image.jpeg",
  //     "images/lookbook10-popup-image.jpeg",
  //     "images/lookbook11-popup-image.jpeg",
  //     "images/lookbook12-popup-image.jpeg",
  //     "images/lookbook13-popup-image.jpeg",
  //     "images/lookbook14-popup-image.jpeg",
  //     "images/lookbook15-popup-image.jpeg",
  //     "images/lookbook16-popup-image.jpeg",
  //     "images/lookbook17-popup-image.jpeg",
  //     "images/lookbook18-popup-image.jpeg",
  //     "images/lookbook19-popup-image.jpeg"
  //   ]

  //   var popupBrand = [
  //     "Tiffany T46KAO030N6",
  //     "Tiffany E65HXU654W5",
  //     "Tiffany H46GER843G5",
  //     "Tiffany 346HG454F65",
  //     "Tiffany N13E54G54E3",
  //     "Tiffany HG8744365F4",
  //     "Tiffany M654U5UUYT2",
  //     "Tiffany W54G6854EF7",
  //     "Tiffany M12WERH654G",
  //     "Tiffany NF654E3RHW8",
  //     "Tiffany UO465TYI455",
  //     "Tiffany ETY5432W1R8",
  //     "Tiffany QA122B654E3",
  //     "Tiffany Q656H54GG59",
  //     "Tiffany MF12354TET8",
  //     "Tiffany SWEBH456F82",
  //     "Tiffany VB5465S49E5",
  //     "Tiffany K6YURYTJ456",
  //     "Tiffany WRH4568W4N2",
  //   ]

  //   var popupName = [
  //     "IV 롱 오리털털",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //     "하트벨벳샤 OP",
  //   ]

  //   var popupStandard = [
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //     "438,000원",
  //   ]

  //   var popupDiscountSale = [
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //     "28%",
  //   ]

  //   var popupDiscount = [
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //     "315,360원",
  //   ]
    
  //   $('.lookbook .detail-btn').each(function(index){
  //     $(this).on('click',function(){
  //       $('.lookbook .popup-img').attr('src',popupImg[index]);
  //       $('.lookbook .popup-txt .brand').text(popupBrand[index]);
  //       $('.lookbook .popup-txt .name').text(popupName[index]);
  //       $('.lookbook .popup-txt .standard').text(popupStandard[index]);
  //       $('.lookbook .popup-txt .sale').text(popupDiscountSale[index]);
  //       $('.lookbook .popup-txt .discount').text(popupDiscount[index]);
  //     })
  //   })


  //   $('.lookbook .detail-btn').click(function(){
  //     $('.lookbook-popup').addClass('on')

    
  //   $('.lookbook-popup .popup-exit').click(function(){
  //     $('.lookbook-popup').removeClass('on')
  //   })
  // })
})