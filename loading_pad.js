const eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_loading = (hook_name, args, cb) =>{
  args.content = eejs.require("ep_loading_pad/templates/loading.html") ;
  return {};
}

exports.eejsBlock_timesliderLoading = (hook_name, args, cb) =>{
  args.content = eejs.require("ep_loading_pad/templates/loading.html") ;
  return {};
}

exports.eejsBlock_styles = (hook_name, args, cb) =>{
  args.content = args.content + "<link href='../static/plugins/ep_loading_pad/static/css/loading_pad.css' rel='stylesheet'>";
  return {};
}
exports.eejsBlock_timesliderStyles = (hook_name, args, cb) =>{
  args.content = args.content + "<link href='../static/plugins/ep_loading_pad/static/css/loading_pad.css' rel='stylesheet'>";
  return {};
}
