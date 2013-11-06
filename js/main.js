// vars

var menuObj = new Menu(); /* js/menu.js */
var questionsObj = new Questions(); /* js/questions.js */
var sharingData = []; /* ajax/form.php */
var init = true;
var siteStart = true;
var state = window.history.pushState !== undefined;
var currentPage;

// functions

function loadPage(url) {
    
    $("#page-loader").fadeIn(400, function() {
        
        $("#page-container").load(url, function() {
            
            $("#page-loader").delay(800).fadeOut(800);
            
            if (siteStart) {
                
                siteStart = false;
                
                $('.menu').fadeIn();
                $('.logo').fadeIn();
            }            
        });
    });
    
    // close menu if its open
    if (menuObj.isMenuOpen()) {
        menuObj.toggleMenu();
    }
}

function handlePage(page) {
    
    if (currentPage == page) return;
    
    currentPage = page;
    
    switch(page) {
        
        default:
            loadPage($.address.state() + "home/index.html");
            $.address.title('MELODY EDUCATION - HOME');
            break;
            
        case "/pic":
            loadPage($.address.state() + "pic/index.html");
            $.address.title('MELODY EDUCATION - PICS');
            break;
            
        case "/team":
            loadPage($.address.state() + "team/index.html");
            $.address.title('MELODY EDUCATION - TEAMS');
            break;
                        
        case "/feature":
            loadPage($.address.state() + "feature/index.html"); 
            $.address.title('MELODY EDUCATION - FEATURE');
            break;
            
        case "/prize":
            loadPage($.address.state() + "prize/index.html");  
            $.address.title('MELODY EDUCATION - PRIZE');
            break;
            
        case "/contacts":
            loadPage($.address.state() + "contacts/index.html");  
            $.address.title('MELODY EDUCATION - PRIZE');
            break;
    }
    
    // skip
    skipUrlBar();
    
}

function skipUrlBar() {
    /mobile/i.test(navigator.userAgent) && setTimeout(function () {
        window.scrollTo(0, 1);
    }, 1000);
}

// ui

$(document).ready(function() {
    
    $.ajaxSetup({
        cache: false
    });
    
    $.address.state("").init(function() {

        $('.menu .nav .nav-item:nth-child(1) a').address();
        $('.menu .nav .nav-item:nth-child(2) a').address();
        $('.menu .nav .nav-item:nth-child(3) a').address();
        $('.menu .nav .nav-item:nth-child(4) a').address();
        $('.menu .nav .nav-item:nth-child(5) a').address();
        $('.logo').address();
        
    }).change(function(event) {
        
        if (state && init) {
            
            init = false;
            
            if ($.browser.mozilla || $.browser.opera) {
                handlePage(firstPage); // firstPage variable is found on index.php
            }
            
        } else {
            
            handlePage(event.path);            
        }
        
    });
    
    // skip url bar
    skipUrlBar();
    
});

/* anim */

function animateCloud(cloud, offset) {
    
    var css = {};
    
    if (offset) {
        css = {backgroundPosition: "30px 0"};
        cloud.css({backgroundPosition: "0px 0"});
    } else {
        css = {backgroundPosition: "0px 0"};
        cloud.css({backgroundPosition: "30px 0"});
    }
    
    TweenMax.to(cloud, 3, {css: css, repeat: -1, yoyo: true, delay: .5, ease: Quad.easeInOut});
}