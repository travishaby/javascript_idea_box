function allIdeas(){
  $.getJSON('/api/v1/ideas')
    .then(function(ideas){
      ideas = ideas.sort(function(a, b){
        a.updated_at > b.updated_at
      }).reverse();
      ideas.forEach(function(idea){
        renderIdea(idea);
      })
    })
    .fail(function(){ console.log("api request failed") });
};

function renderIdea(idea){
  var ideaId = idea.id
  var editForm =
      '<form class="hide" id="edit-form-' + ideaId + '">'
      + '<label for="idea_title">Title</label>'
      + '<input type="text" name="idea[title]" id="update-title' + ideaId + '">'
      + '<label for="idea_body">Body</label>'
      + '<input type="text" name="idea[body]" id="update-body' + ideaId + '">'
      + '<button class="btn" id="update-button-' + ideaId + '">Update</button>'
    + '</form>'

  $("#ideas-list").prepend('<div class="col m8 idea" id="'
                          + ideaId + '"><h3>'
                          + idea.title + '</h3><h5> ('
                          + idea.quality
                          + ')</h5><h5>'
                          + truncateBody(idea.body, 100)
                          + '</h5><div class="row">'
                          + '<button class="btn" id="delete-'
                          + ideaId + '">Delete</button>'
                          + '<button class="btn" id="edit-'
                          + ideaId + '">Edit</button>'
                          + '<button class="btn side-space up-button">'
                          + '<i class="material-icons">thumb_up</i>'
                          + '</button>'
                          + '<button class="btn side-space down-button">'
                          + '<i class="col material-icons">thumb_down</i></div>'
                          + '</button>'
                          + editForm
                          + '</div>');
};

function truncateBody(body, maxLength){
  var trimmed = "";
  var words = body.split(' ');
  if (body.length < maxLength) { return body; };
  var potential;
  for (var i = 0; i < words.length; i++) {
    potential = trimmed + words[i];
    if (potential.length > maxLength) { break; };
    trimmed = potential + ' ';
  }
  return trimmed.trim() + '...';
}
