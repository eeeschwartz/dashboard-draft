var widgetHtml = function(widget, columnSize) {
  var widgetTitle = widget.title;
  var widgetUrl = widget.url;
  return '<div class="widget col col-md-' + columnSize + '">'
   + '  <div class="panel panel-default">'
   + '    <div class="panel-heading">'
   + '      <h3 class="panel-title"><a href="' + widgetUrl + '" target="_blank">' + widgetTitle + '</a></h3>'
   + '    </div>'
   + '    <div class="panel-body">'
   + '      <div class="embed-responsive embed-responsive-16by9">'
   + '        <iframe seamless="seamless" scrolling="no" class="embed-responsive-item" src="' + widgetUrl + '" style="font-size: 50%"></iframe>'
   + '      </div>'
   + '    </div>'
   + '  </div>'
   + '</div>'
}

var widgetsByName = {
  'lexingtonky-visitors': {
    title: "LexingtonKY.gov Visitors",
    url: "http://lexingtonky-visitors.herokuapp.com"
  },
  'raids-online': {
    title: "Crime Map",
    url: "http://www.raidsonline.com/?address=Lexington,%20KY"
  },
  'building-permits': {
    title: "Weekly building permits",
    url: "http://www.charted.co/?{%22dataUrl%22%3A%22https%3A%2F%2Fdl.dropboxusercontent.com%2Fu%2F70416620%2Fbuilding-permits-year-over-year.csv%22%2C%22color%22%3A%22dark%22%2C%22charts%22%3A[{%22title%22%3A%22Weekly%20Permits%22}]}"
  },
  'tweetbeam': {
    title: 'Twitter activity',
    url: 'http://www.tweetbeam.com/show?query=lexington%2C%20ky'
  }
};
var rowHtml = function(widgets) {
  var colWidth = 6;
  var widgets = _.map(widgets, function(widget) {
    return widgetHtml(widget, colWidth);
  });
  return '<div class="row top-buffer">' + widgets.join('') + '</div>';
};
