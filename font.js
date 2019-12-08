(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<main class=\"content\">\r\n  <div class=\"dropdown\">\r\n            <label for=\"font\">please select the name of font you would like to match: </label>\r\n            <div class=\"font\">\r\n                <select id=\"inputFont\" class=\"dropdown-content\" name=\"filter-city\">\r\n                <option selected value=\"\">Rubik</option>\r\n                <option>Karla</option>\r\n                <option>Roboto</option>\r\n                <option>Domine</option>\r\n                <option>PT Serif</option>\r\n                <option>Poppins</option>\r\n                <option>Alegreya Sans SC</option>\r\n                <option>Source Sans Pro</option>\r\n                <option>Cabin</option>\r\n                <option>Old Standard TT</option>\r\n                </select>\r\n            </div>\r\n    </div>\r\n\r\n    "
    + container.escapeExpression(((helper = (helper = helpers.output || (depth0 != null ? depth0.output : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"output","hash":{},"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":20,"column":14}}}) : helper)))
    + "\r\n    \r\n</main>\r\n";
},"useData":true});
})();