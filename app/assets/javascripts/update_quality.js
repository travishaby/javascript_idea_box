function changeQuality(){
  $("#wrapper").on('click', ".up-button", function(){
    var ideaUpButton = $(this);
    var ideaId = ideaUpButton.parent().parent().attr("id");
    var updateQualityParams = {
      idea: {
        quality: 1
      }
    };
    updateQuality(ideaId, updateQualityParams);
  });

  $("#wrapper").on('click', ".down-button", function(){
    var ideaDownButton = $(this);
    var ideaId = ideaDownButton.parent().parent().attr("id");
    var updateQualityParams = {
      idea: {
        quality: -1
      }
    };
    updateQuality(ideaId, updateQualityParams);
  });
}

function updateQuality(id, updateParams){
  $.ajax({
    type: 'PATCH',
    url:  'api/v1/ideas/' + id,
    data: updateParams,
    success: function(response) {
      updateIdeaAttributes(response);
    },
    error: function(error) {
      console.log(error.responseText)
    }
  });
}

function updateIdeaAttributes(idea){
  var id = idea.id
  var idea_element = $('#' + id).children()

  updateTitleText(idea, idea_element);
  updateQualityText(idea, idea_element);
  updateBodyText(idea, idea_element);
}

function updateQualityText(idea, idea_element){
  var new_quality = idea.quality
  var idea_quality_element = idea_element[1]
  $(idea_quality_element).replaceWith('<h5> (' + new_quality + ')</h5>')
}
