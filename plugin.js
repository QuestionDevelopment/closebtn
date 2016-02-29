//http://stackoverflow.com/questions/18956257/how-to-add-an-ajax-save-button-with-loading-gif-to-ckeditor-4-2-1-working-samp

CKEDITOR.plugins.add( 'closebtn', {
    icons: 'closebtn',
    init: function( editor ) {
        editor.addCommand( 'closetoolbar', {
        	exec : function(editor){
                CKEDITOR.instances[editor.name].fire("closebtn");
                CKEDITOR.instances[editor.name].updateElement();
                CKEDITOR.instances[editor.name].destroy();
        	}
    });


//add the save button to the toolbar

        editor.ui.addButton( 'closebtn', {
            label: 'Close',
            command: 'closetoolbar'
           // toolbar: 'insert'
        });


    }
});
