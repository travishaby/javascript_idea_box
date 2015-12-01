function createIdea(){

  $("#save-button").on('click', function(){
    var ideaTitle = $('#new-title').val();
    var ideaBody = $('#new-body').val();

    $('#new-title').val('');
    $('#new-body').val('');

    var postParams = {
      idea: {
        title: ideaTitle,
         body: ideaBody
      }
    };

    $.ajax({
      type: 'POST',
      url:  '/api/v1/ideas',
      data: postParams,
      success: function(newIdea) {
        renderIdea(newIdea);
      },
      error: function(error) {
        console.log(error.responseText)
      }
    });

  });
};
