define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["welcome"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel text-center\">\n\n<p>"
    + escapeExpression(((stack1 = (depth0 && depth0.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n<p>\n\n<a href=\""
    + escapeExpression(((stack1 = (depth0 && depth0.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n\n"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n\n</a>\n\n</p>\n\n</div>\n";
  return buffer;
  });

return this["JST"];

});