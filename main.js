var widgetHtml = function(widget, columnSize) {
  var widgetTitle = widget.title;
  var widgetUrl = widget.url;
  var titleHtml = '';

  if (widgetUrl === 'twitter-1') {
    return '<div class="widget col col-md-3 text-center">'
    + '<a height="1500" data-chrome="nofooter noscrollbar" class="twitter-timeline" href="https://twitter.com/search?q=lexington%2C%20ky" data-widget-id="587634091325050880">Tweets about lexington, ky</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'
    + '</div>';
  }
  if (widgetUrl === 'twitter-2') {
    return '<div class="widget col col-md-3 text-center">'
      + '<a data-chrome="nofooter noscrollbar" class="twitter-timeline" href="https://twitter.com/search?q=%40jimgraylexky" data-widget-id="587731792108646400">Tweets about @jimgraylexky</a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'
    + '</div>';
  }
  if (widgetTitle) {
    titleHtml = '    <div class="panel-heading">'
     + '      <h3 class="panel-title"><a href="' + widgetUrl + '" target="_blank">' + widgetTitle + '</a></h3>'
     + '    </div>'
   }

  return '<div class="widget col col-md-' + columnSize + '">'
   + '  <div class="panel panel-default">'
   + titleHtml
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
    url: "http://raidsonline.com/?address=Lexington,%20KY&zoom=12"
  },
  'building-permits': {
    title: "Weekly Building Permits",
    url: "http://charte.herokuapp.com/?%7B%22dataUrl%22%3A%22https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1GRcqZCmAbPTrSHwULfw2j9RESyUc1an7109cyfHonIY%2Fpub%3Fgid%3D624646597%26single%3Dtrue%26output%3Dcsv%22%2C%22color%22%3A%22dark%22%2C%22charts%22%3A%5B%7B%22type%22%3A%22line%22%7D%5D%7D"
  },
  'tweetbeam': {
    title: 'Twitter Activity',
    url: 'http://www.tweetbeam.com/show?query=lexington%2C%20ky'
  },
  'fire-status': {
    title: 'Fire Department Status',
    url: 'http://fire.lexingtonky.gov/open/status/status.htm'
  },
  'twitter-1': {
    url: 'twitter-1',
  },
  'twitter-2': {
    url: 'twitter-2',
  },
  'traffic': {
    title: 'Traffic Overview',
    url: 'https://bluetoad.trafficcast.com/map/standalone?key=bbutsRLTdoPlhkw2lzDOdw%3D%3D&fullscreen=1'
  },
  'cartoon': {
    title: 'Joel Pett Cartoon',
    url: 'cartoon.html'
  }
};
var rowHtml = function(widgets) {
  var colWidth = 6;
  var widgets = _.map(widgets, function(widget) {
    return widgetHtml(widget, widget.colWidth || colWidth);
  });
  return '<div class="row top-buffer">' + widgets.join('') + '</div>';
};
