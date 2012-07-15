window.gallery = {
  init: function() {
    this.gallery = $('#gallery');
    this.attachEventListeners();
  },

  attachEventListeners: function() {
    this.gallery.on('click', 'a#prev', $.proxy(this._onPreviousClick, this));
    this.gallery.on('click', 'a#next', $.proxy(this._onNextClick, this));
    this.gallery.on('click', 'a.thumbnail', $.proxy(this._onThumbnailClick, this));
  },

  _onPreviousClick: function(event) {
    console.log(event.currentTarget);
    return false;
  },

  _onNextClick: function(event) {
    console.log(event.currentTarget);
    return false;
  },

  _onThumbnailClick: function(event) {
    var $thumb = $(event.currentTarget),
        imageId = $thumb.data('image');

    $thumb.parent('li').addClass('current').siblings().removeClass('current');
    imageId = (imageId < 10 ? '0' : '') + imageId;

    $('#gallery-main li.current').fadeOut(300, function() {
      $(this).removeClass('current');
    });

    $('#gallery-main li[data-image=' + imageId + ']')
      .prependTo('#gallery-main')
      .fadeIn(300, function() { $(this).addClass('current'); });

    return false;
  }
};

$(function(){ gallery.init(); });