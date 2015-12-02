function deleteIdea(){
  $("[id^='delete-']").on('click', function(){
    var ideaDeleteButton = $(this);
    var ideaId = ideaDeleteButton.attr("id").substr(7, 8)
    $.ajax({
      type: 'DELETE',
      url:  'api/v1/ideas/' + ideaId,
      success: function() {
        removeIdea(ideaDeleteButton);
      },
      error: function(error) {
        console.log(error.responseText)
      }
    });
  });
};

function removeIdea(deleteButton){
  deleteButton.parent().remove();
};
