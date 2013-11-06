var Select = function(target, changeHandler) {
    
    this.target = target;
    this.menu = target.find(".select-menu");
    this.itemHeight = target.height();
    
    this.isOpen = false;
    this.selectedItem = null;
    this.changeHandler = changeHandler;
    
    // event handlers
    this.menu.find("a").live("click", $.proxy(this.select, this));
    
    // update
    this.updateState();
    this.reset();
}

Select.prototype.toggle = function() {
    
    this.isOpen = !this.isOpen;  
    this.updateState();
}

Select.prototype.select = function(event) {
    
    event.preventDefault();
    
    if (this.isOpen) {
    
        this.selectedItem = $(event.currentTarget);
        
        if (this.changeHandler) this.changeHandler();
    }
        
    this.toggle();
}

Select.prototype.reset = function() {
        
    this.menu.animate({scrollTop: 0}, 500, 'easeOutSine');
    this.selectedItem = this.menu.children(":first").find("a");
}

Select.prototype.updateState = function() {
    
    if (this.isOpen) {
        
        this.menu.addClass("open");
        this.target.focus();
        if (!Modernizr.touch) this.menu.delay(500).mousemove($.proxy(this.mouseScroll, this));
    } else {
        
        this.menu.removeClass("open");
        if (!Modernizr.touch) this.menu.unbind('mousemove');
        if (this.selectedItem) this.menu.animate({scrollTop: (this.selectedItem.parent().index()) * this.itemHeight}, 500, 'easeOutSine');
    }
}

Select.prototype.mouseScroll = function(event) {
    
    var parentOffset = $(this.menu).parent().offset();
    var y = (event.pageY - parentOffset.top - this.itemHeight);
    var h = this.menu.height();
    var t = ((this.itemHeight * this.menu.children().length) + h);
    var p = (y / h);
    
    this.menu.scrollTop(Math.floor(t * p));
}