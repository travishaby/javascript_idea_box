$(document).ready(function(){
  $.getJSON('/api/v1/ideas')
    .then(function(ideas){
      ideas.forEach(function(idea){
      $("#ideas-list").append('<div class="row center"><h3>' +
                                         idea.title +
                                  ' (' + idea.quality + ')' + '</h3><h4>' +
                                         idea.body + '</h4></div>')
      })
    })
    .fail(function(){ console.log("call failed") });
});
