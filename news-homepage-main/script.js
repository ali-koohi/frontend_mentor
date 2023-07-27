
const img = document.getElementById('web3_news_container_image');
const iconMenu = document.getElementById('icon_menu');
const iconMenuClose = document.getElementById('icon_menu_close');
const body = document.getElementsByTagName("body")[0];

window.addEventListener('resize', () => {
    changeWeb3NewsContainerImage(window.innerWidth);
})

const openMenu = () => {
    iconMenuClose.style.transition = "0.5s";
    iconMenuClose.style.transitionDelay = "0.5s";
    document.getElementById('my_menu').style.width = "100%";
    document.getElementById('my_content_menu').style.width = "80%";
    iconMenuClose.style.width = "24px";
    iconMenuClose.style.height = "24px";
    document.body.style.overflow = 'hidden';
}

const closeMenu = () => {
    document.getElementById('my_content_menu').style.width = 0;
    iconMenuClose.style.transition = "0.1s";
    iconMenuClose.style.width = 0;
    iconMenuClose.style.height = 0;
    document.body.style.overflow = 'visible';
    setTimeout(() => {
        document.getElementById('my_menu').style.width = 0;
    }, 500)
}

iconMenu.addEventListener('click', openMenu);
iconMenuClose.addEventListener('click', closeMenu);


const changeWeb3NewsContainerImage = (size) => {
    if (isDekstopSize(size)) {
        img?.setAttribute('src', './assets/images/image-web-3-desktop.jpg');
    } else {
        img?.setAttribute('src', './assets/images/image-web-3-mobile.jpg');
    }
}


const changeBodyScrollable = (enable) => {
    if (enable) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
}

changeBodyScrollable(false)

const isDekstopSize = size => size > 768;

// init
changeWeb3NewsContainerImage(window.innerWidth);
