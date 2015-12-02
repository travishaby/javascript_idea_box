function allIdeas(){
  $.getJSON('/api/v1/ideas')
    .then(function(ideas){
      ideas = ideas.sort(function(a, b){
        a.updated_at > b.updated_at
      });

      ideas.forEach(function(idea){
        renderIdea(idea);
      })
      deleteIdea(); //this is here because it wasnt triggering in idea_box.js
    })
    .fail(function(){ console.log("api request failed") });
};

function renderIdea(idea){
  $("#ideas-list").prepend('<div class="col m8 idea" id="'
                          + idea.id + '"><h3>'
                          + idea.title + ' ('
                          + idea.quality + ')'
                          + '</h3><h5>'
                          + truncateBody(idea.body, 100)
                          + '<div class="row">'
                          + '</h5><button class="btn" id="delete-'
                          + idea.id + '">Delete</button>'
                          + '<button class="btn side-space up-button">'
                          + '<i class="material-icons">thumb_up</i>'
                          + '</button>'
                          + '<button class="btn side-space down-button">'
                          + '<i class="col material-icons">thumb_down</i></div>'
                          + '</button>'
                          + '</div>');
};

function truncateBody(body, maxLength){
  var trimmed = "";
  var words = body.split(' ');
  if (body.length < maxLength) { return body; };
  var potential;
  for (var i = 0; i < words.length; i++) {
    potential = words[i] + trimmed;
    if (potential.length > maxLength) { break; };
    trimmed = ' ' + potential;
  }
  return trimmed.trim() + '...';
}
