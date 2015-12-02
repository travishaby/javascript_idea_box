function changeQuality(){
  $(".up-button").on('click', function(){
    var ideaUpButton = $(this);
    var ideaId = ideaUpButton.parent().attr("id");

    var updateQualityParams = {
      idea: {
        quality: 1
      }
    };

    updateQuality(ideaId, updateQualityParams);
  });

  $(".down-button").on('click', function(){
    var ideaDownButton = $(this);
    var ideaId = ideaDownButton.parent().attr("id");

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
      updateQualityLabel(response);
    },
    error: function(error) {
      console.log(error.responseText)
    }
  });
}

function updateQualityLabel(response){
  var id = response.id
  var new_quality = response.quality
  var new_quality_element = $('#' + id).children().first().next()
  new_quality_element.replaceWith('<h4> (' + new_quality + ')</h4>')
}
