function filterIdeas(){
  $("#filter").keyup(function(){
    var filter = $(this).val(), count = 0;

    $(".idea").each(function(){
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
      } else {
        $(this).show();
        count++;
      }
    });

    var numberItems = count;
    $("#filter-count").text("Number of Ideas = " + count);
  });
  $("#filter").keypress(function(event){
    if(event.which == 13) {
      event.preventDefault;
    }
  });
}
