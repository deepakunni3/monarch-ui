(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["analytics"],{"017c":function(t,a,s){},"2d3b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"selenium_id_content"}},[s("div",{staticClass:"container-fluid monarch-container",attrs:{id:"monarch-home-container"}},[t._m(0),s("div",{staticClass:"col-xs-12 col-md-9"},[s("div",{staticClass:"alert alert-dismissible alert-warning"},[t._v("FIXME")]),s("b-pagination",{attrs:{"total-rows":100,"per-page":25,size:"md"},model:{value:t.page,callback:function(a){t.page=a},expression:"page"}}),s("div",{staticClass:"search-results-rows"},[s("table",{staticClass:"search-results-table table table-striped table-sm simpletable",attrs:{id:"selenium_id_"+t.selenium_id}},[t._m(1),s("tbody",t._l(t.searchResults,function(a,e){return s("tr",{key:e,staticClass:"search-result-item"},[s("td",[s("router-link",{attrs:{to:a.toLink}},[t._v("\n                  "+t._s(a.label)+"\n                ")])],1),s("td",[t._v(t._s(a.category))]),s("td",[t._v(t._s(a.taxon))]),s("td",{domProps:{innerHTML:t._s(a.highlight)}})])}))])])],1),s("footer",{staticClass:"footer"},[s("home-footer")],1)])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"intro"},[s("div",{staticClass:"intro-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 py-2"},[s("p",{staticClass:"intro-text"},[t._v("\n                Search Results\n              ")])])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{attrs:{width:"25%"}},[t._v("Term")]),s("th",{attrs:{width:"15%"}},[t._v("Category")]),s("th",{attrs:{width:"25%"}},[t._v("Taxon")]),s("th",[t._v("Matching String")])])])}],i=s("4795"),r=s.n(i),c=s("cb0c"),o=s("2944"),l=s("a74f"),u={name:"Search",components:{"home-footer":o["default"]},data:function(){return{facets:[],user_facets:{},results:[],highlight:{},searchResults:{},page:0,rows:25,numFound:0,numRowsDisplayed:0,selenium_id:"",searching:!0}},mounted:function(){var t=this.$route.params.query,a=this.$route.params.rows?this.$route.params.rows:25;this.search(t,this.page,a)},methods:{search:function(){var t=Object(c["a"])(r.a.mark(function t(a,s,e){var n,i=this;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["g"](a,s,e);case 3:n=t.sent,this.searchResults=[],this.searchParams={},this.searchFacets={},n.docs.forEach(function(t,a){var s=n.highlighting[t.id],e={category:t.category[0],taxon:t.taxon_label,label:t.label[0],curie:t.id,rows:i.rows,highlight:s.highlight,toLink:"/"+t.category[0]+"/"+t.id,match:s.match,hasHighlight:s.has_highlight};i.searchResults.push(e)}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log("Search ERROR",t.t0,this);case 13:case"end":return t.stop()}},t,this,[[0,10]])}));return function(a,s,e){return t.apply(this,arguments)}}()}},h=u,f=(s("3de7"),s("2877")),d=Object(f["a"])(h,e,n,!1,null,null,null);d.options.__file="Search.vue";a["default"]=d.exports},"31b9":function(t,a,s){"use strict";var e=s("e129"),n=s.n(e);a["default"]=n.a},"31bf":function(t,a,s){t.exports=s.p+"img/tax-heat-plotly.6e271a4e.png"},"32d0":function(t,a,s){"use strict";var e=s("ce13"),n=s.n(e);n.a},"3de7":function(t,a,s){"use strict";var e=s("017c"),n=s.n(e);n.a},"41f2":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("br"),e("br"),e("h1",[t._v("Monarch Data Graphs")]),e("br"),e("section",{staticClass:"data-dashboard text-center"},[e("h2",[t._v("Monarch Associations")]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm"},[e("router-link",{staticClass:"btn btn-link",attrs:{to:"/analytics",role:"button"}},[e("img",{staticStyle:{"max-height":"35px"},attrs:{src:s("a89b"),alt:"disease"}})]),t._m(0)],1),e("div",{staticClass:"col-sm"},[e("router-link",{staticClass:"btn btn-link",attrs:{to:"/analytics",role:"button"}},[e("img",{staticStyle:{"max-height":"35px"},attrs:{src:s("8b26"),alt:"genes"}})]),t._m(1)],1),e("div",{staticClass:"col-sm"},[e("router-link",{staticClass:"btn btn-link",attrs:{to:"/analytics",role:"button"}},[e("img",{staticStyle:{"max-height":"35px"},attrs:{src:s("9360"),alt:"models"}})]),t._m(2)],1)])])]),t._m(3),e("footer-all")],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"network-name"},[s("br"),s("b",[t._v("218,313")]),s("br"),t._v("Disease-Phenotype Associations")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"network-name"},[s("br"),s("b",[t._v("793,526")]),s("br"),t._v("Gene-Phenotype Associations")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"network-name"},[s("br"),s("b",[t._v("20,870")]),s("br"),t._v("Model Associations")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"analytics"},[e("div",[e("h2",[t._v("Counts of species-specific data integrated into Monarch")]),e("img",{staticClass:"center-block text-center img-fluid",staticStyle:{"max-height":"300px"},attrs:{src:s("31bf")}}),e("h4",[t._v("For the top 15 species in Monarch")])])])}],i=s("43a9"),r={name:"Analytics",components:{"footer-all":i["default"]},data:function(){return{}},mounted:function(){}},c=r,o=(s("32d0"),s("2877")),l=Object(o["a"])(c,e,n,!1,null,null,null);l.options.__file="Analytics.vue";a["default"]=l.exports},"43a9":function(t,a,s){"use strict";var e=s("9af4"),n=s("31b9"),i=(s("8936"),s("2877")),r=Object(i["a"])(n["default"],e["a"],e["b"],!1,null,null,null);r.options.__file="FooterAll.vue",a["default"]=r.exports},8936:function(t,a,s){"use strict";var e=s("f49e"),n=s.n(e);n.a},"9af4":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer-all"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),t._m(1),s("div",{staticClass:"col-3"},[s("router-link",{attrs:{to:"/page/about"}},[s("i",{staticClass:"fa fa-info fa-fw"}),s("span",{staticClass:"network-name"},[t._v("\n            About Monarch\n          ")])])],1),t._m(2)])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-3"},[s("i",{staticClass:"fa fa-creative-commons fa-fw"}),t._v("\n        CC-BY 3.0, except where noted.\n      ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-3"},[s("a",{attrs:{href:"mailto:info@monarchinitiative.org"}},[s("i",{staticClass:"fa fa-envelope fa-fw"}),s("span",{staticClass:"network-name"},[t._v("Contact Us")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-3"},[s("a",{attrs:{href:"https://archive.monarchinitiative.org/latest/"}},[s("i",{staticClass:"fa fa-download fa-fw"}),s("span",{staticClass:"network-name"},[t._v("\n            Data Downloads\n          ")])])])}];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return n})},ce13:function(t,a,s){},e129:function(t,a){},f49e:function(t,a,s){}}]);
//# sourceMappingURL=analytics.9ad14496.js.map