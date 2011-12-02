(function( $ ){
  $.fn.formSavior = function(options) {
	return this.each(function() {

		var cfg = {
			'msg'   : 'There are unsaved changes on this form',
			'noprompt' : 'noprompt
      	};
		
		if ( options ) { 
        	$.extend( cfg, options );
     	}
		
		var originals = '';
		var showalert = true;
		
		var $form = $(this);
		$win = $(window);
		$doc = $(document);
		
		function saveOriginals() {	
			originals = $form.serialize();
		}
		
		function allowSave() {
			showalert = false;
		}
		
		function savePrompt() {
			current = $form.serialize();
			if(current != originals && showalert === true && !$form.hasClass(cfg.noprompt)) {
				return cfg.msg;
			}
		}
		$doc.ready(saveOriginals);
		$form.submit(allowSave);
		$win.bind('beforeunload', savePrompt);
	});

  };
})( jQuery );