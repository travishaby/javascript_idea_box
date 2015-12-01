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
                          + '</h3><h4 class="truncate">'
                          + idea.body + '</h4></div>');
};
