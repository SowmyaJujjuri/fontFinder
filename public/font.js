(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['output'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"output\">\n        <div class=\"chosen-font\">\n          <span class=\"chosen-header\" style=\"font-family: "
    + alias4(((helper = (helper = helpers.font || (depth0 != null ? depth0.font : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"font","hash":{},"data":data,"loc":{"start":{"line":3,"column":58},"end":{"line":3,"column":66}}}) : helper)))
    + "\">\n          <h2>This is a header in your chosen font, "
    + alias4(((helper = (helper = helpers.font || (depth0 != null ? depth0.font : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"font","hash":{},"data":data,"loc":{"start":{"line":4,"column":52},"end":{"line":4,"column":60}}}) : helper)))
    + "</h2>\n          </span>\n          <span class=\"paired-para\" style=\"font-family: "
    + alias4(((helper = (helper = helpers.fontPairing || (depth0 != null ? depth0.fontPairing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fontPairing","hash":{},"data":data,"loc":{"start":{"line":6,"column":56},"end":{"line":6,"column":71}}}) : helper)))
    + "\">\n          <p>This is paragraph in your paired font, "
    + alias4(((helper = (helper = helpers.fontPairing || (depth0 != null ? depth0.fontPairing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fontPairing","hash":{},"data":data,"loc":{"start":{"line":7,"column":52},"end":{"line":7,"column":67}}}) : helper)))
    + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus volutpat a orci et hendrerit. In nunc justo, tincidunt eu turpis quis, luctus rutrum neque.\n            Pellentesque dignissim, elit ut sollicitudin maximus, enim sapien tristique justo, id cursus\n            risus orci nec dui. Quisque vestibulum eros ut metus convallis, eget auctor massa interdum. </p>\n          </span>\n        </div>\n        <div class=\"paired-font\">\n          <span class=\"paired-header\" style=\"font-family: "
    + alias4(((helper = (helper = helpers.fontPairing || (depth0 != null ? depth0.fontPairing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fontPairing","hash":{},"data":data,"loc":{"start":{"line":14,"column":58},"end":{"line":14,"column":73}}}) : helper)))
    + "\">\n          <h2>This is a header in your paired font, "
    + alias4(((helper = (helper = helpers.fontPairing || (depth0 != null ? depth0.fontPairing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fontPairing","hash":{},"data":data,"loc":{"start":{"line":15,"column":52},"end":{"line":15,"column":67}}}) : helper)))
    + "</h2>\n          </span>\n          <span class=\"chosen-para\" style=\"font-family: "
    + alias4(((helper = (helper = helpers.font || (depth0 != null ? depth0.font : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"font","hash":{},"data":data,"loc":{"start":{"line":17,"column":56},"end":{"line":17,"column":64}}}) : helper)))
    + "\">\n          <p>This is paragraph in your chosen font, "
    + alias4(((helper = (helper = helpers.font || (depth0 != null ? depth0.font : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"font","hash":{},"data":data,"loc":{"start":{"line":18,"column":52},"end":{"line":18,"column":60}}}) : helper)))
    + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            Phasellus volutpat a orci et hendrerit. In nunc justo, tincidunt eu turpis quis, luctus rutrum neque.\n            Pellentesque dignissim, elit ut sollicitudin maximus, enim sapien tristique justo, id cursus\n            risus orci nec dui. Quisque vestibulum eros ut metus convallis, eget auctor massa interdum. </p>\n          </span>\n        </div>\n        <div class=\"doggo\" style=\"font-family: "
    + alias4(((helper = (helper = helpers.fontPairing || (depth0 != null ? depth0.fontPairing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fontPairing","hash":{},"data":data,"loc":{"start":{"line":24,"column":47},"end":{"line":24,"column":62}}}) : helper)))
    + "\">\r\n        <footer>\r\n          <h3>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</h3>\r\n          <h3>The quick brown fox jumps over the lazy dog</h3>\r\n        </footer>\r\n        </div>\r\n</div>\r\n";
=======
},"useData":true});
})();