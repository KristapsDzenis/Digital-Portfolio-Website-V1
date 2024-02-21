// Javascript file

// Next/previous controls for image viewer
let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("pp_image");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
}

// function for removing overlay on My CV page
function off(){
    var i = document.getElementById('cv_overlay');
    i.style.display =  'none';
}

// functions for light and dark mode
function lightmode()
    {
        let i = document.getElementById('checkbox');
        if (i.checked == true){
            document.getElementById('style').setAttribute('href', 'css/lightmode.css');
            document.getElementById('style_2').setAttribute('href', 'css/lightmode_2.css');
            document.getElementById('style_3').setAttribute('href', 'css/lightmode_3_index.css');
            document.getElementById('style_4').setAttribute('href', 'css/lightmode_3_skills.css');
            document.getElementById('style_5').setAttribute('href', 'css/lightmode_3_mycv.css');
            document.getElementById('style_6').setAttribute('href', 'css/lightmode_3_projects.css');

        } else {
            document.getElementById('style').setAttribute('href', 'css/frame.css');
            document.getElementById('style_2').setAttribute('href', 'css/fonts.css');
            document.getElementById('style_3').setAttribute('href', 'css/index.css');
            document.getElementById('style_4').setAttribute('href', 'css/skills.css');
            document.getElementById('style_5').setAttribute('href', 'css/my_cv.css');
            document.getElementById('style_6').setAttribute('href', 'css/projects.css');
        }
    }

function darkmode(y,z,a,b,c,d)
    {
        document.getElementById('style').setAttribute('href', y);
        document.getElementById('style_2').setAttribute('href', z);
        document.getElementById('style_3').setAttribute('href', a);
        document.getElementById('style_4').setAttribute('href', b);
        document.getElementById('style_5').setAttribute('href', c);
        document.getElementById('style_6').setAttribute('href', d);
    }

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);
window.onload = navHighlighter;
// function for navigation bar to indicate current section of website

function navHighlighter() {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll("section[id]");
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 175;
        var sectionId = current.getAttribute("id");

        // switching classes for navbar according to position of scrollY and sectionId
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector("nav a[href*=" + sectionId + "]").classList.add("current");
        } else {
            document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("current");
        }
    });

    // detects current zoom level of the browser
    let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;

    // !!!! switching classes for navbar underline according to position of scrollY !!!!
    // for resolutions over 1100px
    if (window.innerWidth >= 1110){
        if (scrollY >= 0 && scrollY <= 650) {
            document.getElementById("home").classList.add("current2");
            document.getElementById("skills").classList.remove("current2");
        }

        if (scrollY >= 650 && scrollY <= 1350) {
            document.getElementById("home").classList.remove("current2");
            document.getElementById("skills").classList.add("current2");
            document.getElementById("cv").classList.remove("current2");
        }

        // for resolutions over 3840px (4K)
        if (window.screen.width >= 3839){
            if (scrollY >= 1400 && scrollY <= 1450) {
                document.getElementById("skills").classList.remove("current2");
                document.getElementById("cv").classList.add("current2");
                document.getElementById("projects").classList.remove("current2");
            }

            if (scrollY >= 1450) {
                document.getElementById("cv").classList.remove("current2");
                document.getElementById("projects").classList.add("current2");
                document.querySelector('nav a[href*="middle_4"]').classList.add("current");
                document.querySelector('nav a[href*="middle_3"]').classList.remove("current");
            }
        }

        // for resolutions between 2225px and 3840px
        if (window.screen.width >= 2225 && window.screen.width <= 3838){
            if (scrollY >= 1350 && scrollY <= 2100) {
                document.getElementById("skills").classList.remove("current2");
                document.getElementById("cv").classList.add("current2");
                document.getElementById("projects").classList.remove("current2");
            }
            if (scrollY >= 2100) {
                document.getElementById("cv").classList.remove("current2");
                document.getElementById("projects").classList.add("current2");
                document.querySelector('nav a[href*="middle_4"]').classList.add("current");
                document.querySelector('nav a[href*="middle_3"]').classList.remove("current");
            }
        }

        // for resolutions between 1100px and 2225px
        if (window.screen.width >= 1110 && window.screen.width <= 2225) {
            if (scrollY >= 1350 && scrollY <= 2100) {
                document.getElementById("skills").classList.remove("current2");
                document.getElementById("cv").classList.add("current2");
                document.getElementById("projects").classList.remove("current2");
            }

            if (scrollY >= 2100) {
                document.getElementById("cv").classList.remove("current2");
                document.getElementById("projects").classList.add("current2");
                document.querySelector('nav a[href*="middle_4"]').classList.add("current");
                document.querySelector('nav a[href*="middle_3"]').classList.remove("current");
            }
        }
    // for resolutions under 1100px
    } else if (window.innerWidth <= 1109){
        if (scrollY >= 0 && scrollY <= 1200) {
            document.getElementById("home").classList.add("current2");
            document.getElementById("skills").classList.remove("current2");
        }

        // for resolutions between 1100px and 620px
        if (window.innerWidth <= 1109 && window.innerWidth >= 621) {
            if (scrollY >= 1200 && scrollY <= 2300) {
                document.getElementById("home").classList.remove("current2");
                document.getElementById("skills").classList.add("current2");
                document.getElementById("cv").classList.remove("current2");
            }

            if (scrollY >= 2300 && scrollY <= 4000) {
                document.getElementById("skills").classList.remove("current2");
                document.getElementById("cv").classList.add("current2");
                document.getElementById("projects").classList.remove("current2");
            }


            if (scrollY >= 4000) {
                document.getElementById("cv").classList.remove("current2");
                document.getElementById("projects").classList.add("current2");
            }
        }

        // for resolutions under 620px
        if (window.innerWidth <= 621) {
            if (scrollY >= 1200 && scrollY <= 2500) {
                document.getElementById("home").classList.remove("current2");
                document.getElementById("skills").classList.add("current2");
                document.getElementById("cv").classList.remove("current2");
            }

            if (scrollY >= 2500 && scrollY <= 4100) {
                document.getElementById("skills").classList.remove("current2");
                document.getElementById("cv").classList.add("current2");
                document.getElementById("projects").classList.remove("current2");
            }

            if (scrollY >= 4100) {
                document.getElementById("cv").classList.remove("current2");
                document.getElementById("projects").classList.add("current2");
            }
        }
    }

    // !!!! switching OPACITY for sections according to position of scrollY !!!!
    // for resolutions over 6000px (8K)
    if (window.screen.width >= 6000) {
        if (scrollY >= 0 && scrollY <= 800) {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '1';
        }
    }

    // for resultions between 5000px and 5999px  (5K)
    if (window.screen.width >= 4501 && window.screen.width <= 5999){
        if (window.screen.height >= 2700 && window.screen.height <= 3500) {
            if (scrollY >= 0 && scrollY <= 800) {
                document.getElementById("middle").style.opacity = '1';
                document.getElementById("middle_2").style.opacity = '1';
                document.getElementById("middle_3").style.opacity = '1';
                document.getElementById("middle_4").style.opacity = '0';
            }

            if (scrollY >= 800) {
                document.getElementById("middle").style.opacity = '0';
                document.getElementById("middle_2").style.opacity = '0';
                document.getElementById("middle_3").style.opacity = '1';
                document.getElementById("middle_4").style.opacity = '1';
            }
        } else {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '1';
        }
    }

    // for resolutions between 3840px and 5000px (4K)
    if (window.screen.width >= 3839 && window.screen.width <= 4500) {
        if (window.screen.height >= 2160 && window.screen.height <= 2700 && zoom > 38){
            if (scrollY >= 0 && scrollY <= 800) {
                document.getElementById("middle").style.opacity = '1';
                document.getElementById("middle_2").style.opacity = '1';
                document.getElementById("middle_3").style.opacity = '0';
                document.getElementById("middle_4").style.opacity = '0';
            }

            if (scrollY >= 800 && scrollY <= 1000) {
                document.getElementById("middle").style.opacity = '0';
                document.getElementById("middle_2").style.opacity = '0';
            }

            if (scrollY >= 1000) {
                document.getElementById("middle_3").style.opacity = '1';
                document.getElementById("middle_4").style.opacity = '1';
            }
        } else {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '1';
        }
    }

    // for resolutions between 2225px and 3840px
    if (window.screen.width >= 2225 && window.screen.width <= 3838){
        if (window.screen.height >= 1440 && window.screen.height <= 2160 && zoom > 50){
            if (scrollY >= 0 && scrollY <= 900) {
                document.getElementById("middle").style.opacity = '1';
                document.getElementById("middle_2").style.opacity = '1';
                document.getElementById("middle_3").style.opacity = '0';
            }

            if (scrollY >= 900 && scrollY <= 1000) {
                document.getElementById("middle").style.opacity = '0';
                document.getElementById("middle_2").style.opacity = '0';
            }

            if (scrollY >= 1000 && scrollY <= 1700) {
                document.getElementById("middle_3").style.opacity = '1';
                document.getElementById("middle_4").style.opacity = '0';
            }

            if (scrollY >= 1700){
            document.getElementById("middle_4").style.opacity = '1';
            }
        } else {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '1';
        }
    }

    // for resolutions between 1110px and 2225px
    if (window.screen.width >= 1110 && window.screen.width <= 2225) {
        if (window.screen.height >= 720 && window.screen.height <= 1080 && zoom > 67){
            if (scrollY >= 0 && scrollY <= 300) {
                document.getElementById("middle").style.opacity = '1';
                document.getElementById("middle_2").style.opacity = '0';
            }

            if (scrollY >= 300 && scrollY <= 900) {
                document.getElementById("middle").style.opacity = '0';
                document.getElementById("middle_2").style.opacity = '1';
                document.getElementById("middle_3").style.opacity = '0';
            }

            if (scrollY >= 900 && scrollY <= 2400) {
                document.getElementById("middle_2").style.opacity = '0';
                document.getElementById("middle_3").style.opacity = '1';
                document.getElementById("middle_4").style.opacity = '0';
            }

            if (scrollY >= 2400){
                document.getElementById("middle_3").style.opacity = '0';
                document.getElementById("middle_4").style.opacity = '1';
            }
        } else {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '1';
        }

    }

    // for resolutions between 620px and 1110px
    if (window.innerWidth <= 1109 && window.innerWidth >= 621) {
        if (scrollY >= 0 && scrollY <= 1100) {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '0';
        }

        if (scrollY >= 1100 && scrollY <= 2200) {
            document.getElementById("middle").style.opacity = '0';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '0';
        }

        if (scrollY >= 2200 && scrollY <= 3400) {
            document.getElementById("middle_2").style.opacity = '0';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '0';
        }

        if (scrollY >= 3400){
            document.getElementById("middle_3").style.opacity = '0';
            document.getElementById("middle_4").style.opacity = '1';
        }
    }

    // for resolutions under 620px
    if (window.innerWidth <= 621) {
        if (scrollY >= 0 && scrollY <= 1100) {
            document.getElementById("middle").style.opacity = '1';
            document.getElementById("middle_2").style.opacity = '0';
        }

        if (scrollY >= 1100 && scrollY <= 2200) {
            document.getElementById("middle").style.opacity = '0';
            document.getElementById("middle_2").style.opacity = '1';
            document.getElementById("middle_3").style.opacity = '0';
        }

        if (scrollY >= 2200 && scrollY <= 3800) {
            document.getElementById("middle_2").style.opacity = '0';
            document.getElementById("middle_3").style.opacity = '1';
            document.getElementById("middle_4").style.opacity = '0';
        }

        if (scrollY >= 3800){
            document.getElementById("middle_3").style.opacity = '0';
            document.getElementById("middle_4").style.opacity = '1';
        }
    }
}
