function allIdeas(){
  $.getJSON('/api/v1/ideas')
    .then(function(ideas){
      ideas = ideas.sort(function(a, b){
        a.updated_at > b.updated_at
      });

      ideas.forEach(function(idea){
        renderIdea(idea);
      })
    })
    .fail(function(){ console.log("api request failed") });
};

function renderIdea(idea){
  $("#ideas-list").prepend('<div class="col m8 idea" id="'
                          + idea.id + '"><h3>'
                          + idea.title + ' ('
                          + idea.quality + ')'
                          + '</h3><h4 class="">'
                          + truncateBody(idea.body, 100)
                          + '</h4><button class="btn" id="delete-'
                          + idea.id + '">Delete</div>');
};

function truncateBody(body, maxLength){
  var trimmedString = body.substr(0, maxLength);
  return trimmedString = trimmedString.substr(0,
                  Math.min(trimmedString.length,
                  trimmedString.lastIndexOf(" "))) + '...'
}
