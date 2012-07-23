window.chilla = {
  init: function() {
    this.container = $('.container');
    this.attachEventListeners();
  },

  attachEventListeners: function() {
    this.container.on('change', '#purpose', this._onSelectChange);
  },

  _onSelectChange: function(event) {
    switch (event.currentTarget.value) {
      case '2':
        $('#purpose-options').show();
        break;
      default:
        $('#purpose-options').hide();
    }
  }
};

$(function() { chilla.init(); });