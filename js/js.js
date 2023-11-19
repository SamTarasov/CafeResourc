const btnForOpenMenu = document.getElementById('bnt_open_menu');
const btnForOpenMenu2 = document.getElementById('btn_for_open_menu_768');
const btnForOpenMenu3 = document.getElementById('btn_for_open_menu_3');
const openMenu = document.getElementById('menu_open');
const heroImgWithText = document.getElementById('hero');
const sliderWindow = document.getElementById('slider_block');
const fotoWindow = document.getElementById('foto_block');
const appWindow = document.getElementById('app_block');




btnForOpenMenu.addEventListener('click', function(){
    openMenu.classList.toggle('menu_none');
    heroImgWithText.classList.toggle('hero_none');
    sliderWindow.classList.toggle('slider_none');
    fotoWindow.classList.toggle('foto_none');
    appWindow.classList.toggle('app_none');
})


btnForOpenMenu2.addEventListener('click', function(){
    openMenu.classList.toggle('menu_none');
    heroImgWithText.classList.toggle('hero_none');
    sliderWindow.classList.toggle('slider_none');
    fotoWindow.classList.toggle('foto_none');
    appWindow.classList.toggle('app_none');
    openNav768.style.display = 'none';
    btnForOpenNav768.style.display = 'block';
    btnForCloseNav768.style.display = 'none';
})

btnForOpenMenu3.addEventListener('click', function(){
    openMenu.classList.toggle('menu_none');
    heroImgWithText.classList.toggle('hero_none');
    sliderWindow.classList.toggle('slider_none');
    fotoWindow.classList.toggle('foto_none');
    appWindow.classList.toggle('app_none');
})




const btnOpenCoffee = document.getElementById('btn_coffee');
const btnOpenTea = document.getElementById('btn_tea');
const btnOpenDessert = document.getElementById('btn_dessert');

const openMenuCoffee = document.getElementById('menu_coffee');
const openMenuTea = document.getElementById('menu_tea');
const openMenuDessert = document.getElementById('menu_dessert');



btnOpenCoffee.addEventListener('click', function(){
    openMenuCoffee.style.display = 'grid';
    openMenuTea.style.display = 'none';
    openMenuDessert.style.display = 'none';

    btnOpenCoffee.classList.add('menu_cat_item_active');
    btnOpenTea.classList.remove('menu_cat_item_active');
    btnOpenDessert.classList.remove('menu_cat_item_active');
})

btnOpenTea.addEventListener('click', function(){
    openMenuCoffee.style.display = 'none';
    openMenuTea.style.display = 'grid';
    openMenuDessert.style.display = 'none';

    btnOpenCoffee.classList.remove('menu_cat_item_active');
    btnOpenTea.classList.add('menu_cat_item_active');
    btnOpenDessert.classList.remove('menu_cat_item_active');
})

btnOpenDessert.addEventListener('click', function(){
    openMenuCoffee.style.display = 'none';
    openMenuTea.style.display = 'none';
    openMenuDessert.style.display = 'grid';

    btnOpenCoffee.classList.remove('menu_cat_item_active');
    btnOpenTea.classList.remove('menu_cat_item_active');
    btnOpenDessert.classList.add('menu_cat_item_active');
})






// POP
// Coffee
// 1
const btnOpenPopIrish = document.getElementById('irish');
const openIrisPop = document.getElementById('pop_up_irish');
const closeBtn = document.querySelectorAll('.close_modal');

btnOpenPopIrish.addEventListener('click', function(){
    openIrisPop.style.display = 'block';
})

closeBtn.forEach(a => {
    a.addEventListener('click', function() {
        // Получаем ближайший родительский элемент с классом pop_up и скрываем его
        const modal = this.closest('.pop_up');
        modal.style.display = 'none';
    });
});



//2
const btnOpenPopKahlua = document.getElementById('kahlua_coffee');
const openKahulaPop = document.getElementById('pop_up_kahlua');


btnOpenPopKahlua.addEventListener('click', function(){
    openKahulaPop.style.display = 'block';
})

//3
const btnOpenPopHoneyRaf = document.getElementById('honey_raf');
const openHoneyPop = document.getElementById('pop_up_honey');


btnOpenPopHoneyRaf.addEventListener('click', function(){
    pop_up_honey.style.display = 'block';
})

//4
const btnOpenPopIceCapuccino = document.getElementById('ice_cappuccino');
const openIcePop = document.getElementById('pop_up_ice');


btnOpenPopIceCapuccino.addEventListener('click', function(){
    pop_up_ice.style.display = 'block';
})

//5
const btnOpenPopEspresso = document.getElementById('espresso');
const openEspressoPop = document.getElementById('pop_up_espresso');


btnOpenPopEspresso.addEventListener('click', function(){
    openEspressoPop.style.display = 'block';
})

//6
const btnOpenPopLatte = document.getElementById('latte');
const openLattePop = document.getElementById('pop_up_latte');


btnOpenPopLatte.addEventListener('click', function(){
    openLattePop.style.display = 'block';
})

//7
const btnOpenPopLatteMacchiato = document.getElementById('latte_macchiato');
const openMacchiatoPop = document.getElementById('pop_up_macchiato');


btnOpenPopLatteMacchiato.addEventListener('click', function(){
    openMacchiatoPop.style.display = 'block';
})

//8
const btnOpenPopCoffeeWithMilk = document.getElementById('cofe_with_milk');
const openCognacPop = document.getElementById('pop_up_cognac');


btnOpenPopCoffeeWithMilk.addEventListener('click', function(){
    openCognacPop.style.display = 'block';
})

// TEA

//1
const btnOpenPopMoroccan = document.getElementById('moroccan');
const openMorrocanPop = document.getElementById('pop_up_moroccan');


btnOpenPopMoroccan.addEventListener('click', function(){
    openMorrocanPop.style.display = 'block';
})

//2
const btnOpenPopGinger = document.getElementById('ginger');
const openGingerPop = document.getElementById('pop_up_ginger');


btnOpenPopGinger.addEventListener('click', function(){
    openGingerPop.style.display = 'block';
})

//3
const btnOpenPopCranberry = document.getElementById('cranberry');
const openCranberryPop = document.getElementById('pop_up_cranberry');


btnOpenPopCranberry.addEventListener('click', function(){
    openCranberryPop.style.display = 'block';
})

//4
const btnOpenPopSeaBuckthron = document.getElementById('sea_buckthron');
const openBuckthornPop = document.getElementById('pop_up_buckthorn');


btnOpenPopSeaBuckthron.addEventListener('click', function(){
    openBuckthornPop.style.display = 'block';
})

// Dessert

//1
const btnOpenPopMarble = document.getElementById('marble');
const openMarblePop = document.getElementById('pop_up_marble');


btnOpenPopMarble.addEventListener('click', function(){
    openMarblePop.style.display = 'block';
})

//2
const btnOpenPopRedVelvet = document.getElementById('red_velvet');
const openVelvetPop = document.getElementById('pop_up_velvet');


btnOpenPopRedVelvet.addEventListener('click', function(){
    openVelvetPop.style.display = 'block';
})

//3
const btnOpenPopCheesecakes = document.getElementById('cheesecakes');
const openCheesecakesPop = document.getElementById('pop_up_cheesecakes');


btnOpenPopCheesecakes.addEventListener('click', function(){
    openCheesecakesPop.style.display = 'block';
})

//4
const btnOpenPopCremeBrule = document.getElementById('creme_brule');
const openBrulesPop = document.getElementById('pop_up_brulee');


btnOpenPopCremeBrule.addEventListener('click', function(){
    openBrulesPop.style.display = 'block';
})

//5
const btnOpenPopPancakes = document.getElementById('pancakes');
const openPancakesPop = document.getElementById('pop_up_pancakes');


btnOpenPopPancakes.addEventListener('click', function(){
    openPancakesPop.style.display = 'block';
})

//6
const btnOpenPopHoneyCake = document.getElementById('honey_cake');
const openHoneyCakePop = document.getElementById('pop_up_honey_cake');


btnOpenPopHoneyCake.addEventListener('click', function(){
    openHoneyCakePop.style.display = 'block';
})

//7
const btnOpenPopChocolateCake = document.getElementById('chocolate_cake');
const openChocolateCakePop = document.getElementById('pop_up_chocolate_cake');


btnOpenPopChocolateCake.addEventListener('click', function(){
    openChocolateCakePop.style.display = 'block';
})

//8
const btnOpenPopBlackForest = document.getElementById('black_forest');
const openBlackForestPop = document.getElementById('pop_up_black_forest');


btnOpenPopBlackForest.addEventListener('click', function(){
    openBlackForestPop.style.display = 'block';
})


// Slider

const slider = ["slider_1", "slider_2", "slider_3"];

let currentSlide = 0;
let touchStartX;

function showSlide() {
  const sliderImage = document.getElementById(slider[currentSlide]);
  sliderImage.style.display = 'block';
}

function hideAllSlides() {
  slider.forEach(id => {
    const slide = document.getElementById(id);
    slide.style.display = 'none';
  });
}

function nextSlide() {
  hideAllSlides();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlide();
}

function prevSlide() {
  hideAllSlides();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlide();
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    const touchEndX = event.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    const threshold = 50;

    if (deltaX > threshold) {
      prevSlide();
    } else if (deltaX < -threshold) {
      nextSlide();
    }
  }

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  

document.addEventListener("DOMContentLoaded", function () {
  hideAllSlides();  // Скрыть все слайды при загрузке страницы
  showSlide();     // Показать только первый слайд

  const nextButton = document.getElementById("next_btn");
  const prevButton = document.getElementById("prev_btn");

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});



const btnForOpenNav768 = document.getElementById('btn_open_menu');
const btnForCloseNav768 = document.getElementById('btn_close_menu');
const openNav768 = document.getElementById('nav_about_768');

btnForOpenNav768.addEventListener('click', function(){
    openNav768.style.display = 'flex';
    btnForOpenNav768.style.display = 'none';
    btnForCloseNav768.style.display = 'block';
})

btnForCloseNav768.addEventListener('click', function(){
    openNav768.style.display = 'none';
    btnForOpenNav768.style.display = 'block';
    btnForCloseNav768.style.display = 'none';
})