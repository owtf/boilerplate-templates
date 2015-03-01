(function(){
  $("a[href='#'").click(function(e) {
    e.preventDefault();
  });

  var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
    var html = $(this).parent().html();
    $("#source-modal pre").text(html);
    $("#source-modal").modal();
  });

  $('.bs-component [data-toggle="popover"]').popover();
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  $(".bs-component").hover(function(){
    $(this).append($button);
    $button.show();
  }, function(){
    $button.hide();
  });
});

var data = [{ "name": "Cross Site Scripting (XSS)", "link": "/templates/xss"}, {"name": "SQL Injection", "link": "/templates/sql-injection"}]


var vulns = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: data
});

vulns.initialize();

$('#vuln .typeahead').typeahead(null, {
  name: 'matched-links',
  displayKey: 'name',
  source: vulns.ttAdapter(),
  templates: {
    empty: [
      '<div class="empty-message">',
      'unable to find any matching vulns',
      '</div>'
    ].join('\n'),
    suggestion: function(data){
      return '<h5><a href="' + data.link + '">' + data.name + '</a></h5>';
    }
  }
});
