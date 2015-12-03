function editIdea(){
  $("#wrapper").on('click', "[id^='edit-']", function(){
    var $ideaDiv = $(this).parent().parent();
    var ideaId = $ideaDiv.attr("id");
    var $editForm = $("#edit-form-" + ideaId)
    var $updateButton = $editForm.children().last();

    $editForm.toggleClass("hide");
    updateIdea(ideaId, $updateButton);
  });
}

function updateIdea(id, $updateButton){
  $updateButton.on('click', function(event){
    event.preventDefault();
    var new_title = $(this).siblings()[1];
    var new_body = $(this).siblings()[3];
    var updateParams = {
      idea: {
        title: $(new_title).val(),
        body: $(new_body).val()
      }
    };
    updateQuality(id, updateParams);
    $(this).parent().toggleClass("hide");
  })
}

function updateTitleText(idea, idea_element){
  var new_title = idea.title
  var idea_title_element = $(idea_element)[0]
  $(idea_title_element).replaceWith('<h3>' + new_title + '</h3>')
}

function updateBodyText(idea, idea_element){
  var new_body = idea.body
  var idea_body_element = $(idea_element)[2]
  $(idea_body_element).replaceWith('<h5>'
    + truncateBody(new_body, 100)
    + '</h5>')
}
