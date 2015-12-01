function createIdea(){

  $("#save-button").on('click', function(){
    var ideaTitle = $('#new-title').val()
    var ideaBody = $('#new-body').val()

    $('#new-title').val('')
    $('#new-body').val('')
    
    var postParams = {
      idea: {
        title: ideaTitle,
         body: ideaBody
      }
    }
    console.log(postParams)
  });

};
