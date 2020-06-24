var eejs = require('ep_etherpad-lite/node/eejs/');


var before = "<div class='loading_message'>";
var during = "I am plugin"
var after = "</div>";
var html = before + during + after;


exports.eejsBlock_loading = function (hook_name, args, cb) {
  args.content = eejs.require("ep_loading_pad/templates/loading.html") ;
}

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='../static/plugins/ep_loading_pad/static/css/loading_pad.css' rel='stylesheet'>";
  return cb();
}