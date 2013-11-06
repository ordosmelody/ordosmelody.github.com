var Menu = function() {
    
    this.menuOpen = false;
    
    $('.menu .toggle .toggle-btn').click($.proxy(this.toggleMenu, this));
}

Menu.prototype.toggleMenu = function(event) {	
    
    if (event) event.preventDefault();
    
    this.menuOpen = !this.menuOpen;
    
    if (this.menuOpen) {
        $('.overlay').fadeIn();
        $('.menu .nav').addClass('nav-open');
        $('.menu .toggle').addClass('toggle-open');
        $('.menu .toggle .content').addClass('content-open');
    } else {
        $('.overlay').fadeOut();
        $('.menu .nav').removeClass('nav-open');
        $('.menu .toggle').removeClass('toggle-open');
        $('.menu .toggle .content').removeClass('content-open');
    }
}

Menu.prototype.isMenuOpen = function() {
    return this.menuOpen;
};