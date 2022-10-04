(function(e){function t(t){for(var c,o,i=t[0],s=t[1],u=t[2],b=0,d=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/country-app-v2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0bd9":function(e,t,n){},"0cbf":function(e,t,n){},"10e8":function(e,t,n){},"1c06":function(e,t,n){"use strict";n("ae61")},"203f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["B"])("Header"),s=Object(c["B"])("router-view");return Object(c["u"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(i,{onSwitchTheme:o.toggleTheme,userTheme:this.userTheme},null,8,["onSwitchTheme","userTheme"]),Object(c["j"])(s)],64)}var a=function(e){return Object(c["x"])("data-v-bd228b1c"),e=e(),Object(c["v"])(),e},o={class:"header"},i=a((function(){return Object(c["g"])("h1",{class:"header__title"},"Where in the world?",-1)})),s={for:"checkbox",class:"header__switch-label"},u=a((function(){return Object(c["g"])("span",null,"🌙",-1)})),l=a((function(){return Object(c["g"])("span",null,"☀️",-1)}));function b(e,t,n,r,a,b){return Object(c["u"])(),Object(c["f"])("div",o,[i,Object(c["g"])("div",null,[Object(c["g"])("input",{onChange:t[0]||(t[0]=function(t){return e.$emit("switchTheme")}),id:"checkbox",type:"checkbox",class:"header__switch-checkbox"},null,32),Object(c["g"])("label",s,[u,l,Object(c["g"])("div",{class:Object(c["q"])(["header__switch-toggle",{"header__switch-toggle--checked":"dark"===n.userTheme}])},null,2)])])])}var d={name:"Header",props:{userTheme:String}},g=(n("62a8"),n("6b0d")),j=n.n(g);const O=j()(d,[["render",b],["__scopeId","data-v-bd228b1c"]]);var h=O,p={name:"App",components:{Header:h},data:function(){return{userTheme:"light"}},mounted:function(){var e=this.getTheme();this.setTheme(e)},methods:{toggleTheme:function(){var e=localStorage.getItem("user-theme");"light"===e?this.setTheme("dark"):this.setTheme("light")},getTheme:function(){return localStorage.getItem("user-theme")},setTheme:function(e){localStorage.setItem("user-theme",e),this.userTheme=e,document.documentElement.className=e}}};n("7564");const f=j()(p,[["render",r]]);var m=f,v=n("ecee"),y=n("ad3d"),_=n("c074"),w=n("f2d1"),k=n("b702"),C=n("6c02"),D={class:"home"},S={className:"home__researches-container"};function B(e,t,n,r,a,o){var i=Object(c["B"])("SearchBar"),s=Object(c["B"])("filterByRegion"),u=Object(c["B"])("CountryList");return Object(c["u"])(),Object(c["f"])("div",D,[Object(c["g"])("div",S,[Object(c["j"])(i,{onUpdateBySearch:o.onSearch},null,8,["onUpdateBySearch"]),Object(c["j"])(s,{onSelectedRegion:t[0]||(t[0]=function(e){return o.onSelect(e)})})]),Object(c["j"])(u,{filtered:o.filtered},null,8,["filtered"])])}var x=n("1da1"),T=(n("96cf"),n("d3b7"),n("4de4"),n("ac1f"),n("1276"),n("caad"),n("2532"),n("b0c0"),n("466d"),n("5377"),{key:0,class:"countries-list__cards"}),A={key:1,class:"countries-list__loader"},N=Object(c["g"])("h2",null,"Loading...",-1),R=[N];function L(e,t,n,r,a,o){var i=Object(c["B"])("Card");return n.filtered.length?(Object(c["u"])(),Object(c["f"])("div",T,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.filtered,(function(t,n){return Object(c["u"])(),Object(c["d"])(i,Object(c["o"])({index:n,img:t.flags.png,key:t.name.common,country:t.name.common,population:t.population,region:t.region,code:t.cca3,capital:t.capital||void 0},e.$attrs),null,16,["index","img","country","population","region","code","capital"])})),128))])):(Object(c["u"])(),Object(c["f"])("div",A,R))}var P={class:"country-card"},I={class:"country-card__container"},$=["src"],W={class:"country-card__text-content"},H=Object(c["i"])(" Population: "),M=Object(c["i"])(" Region: "),F=Object(c["i"])(" Capital: ");function J(e,t,n,r,a,o){var i=Object(c["B"])("router-link");return Object(c["u"])(),Object(c["f"])("div",P,[Object(c["j"])(i,{to:{name:"Details",params:{name:n.code}}},{default:Object(c["H"])((function(){return[Object(c["g"])("div",I,[Object(c["g"])("img",{alt:"product-image",src:n.img},null,8,$),Object(c["g"])("div",W,[Object(c["g"])("h2",null,Object(c["D"])(n.country.substring(0,17)),1),Object(c["g"])("h3",null,[H,Object(c["g"])("span",null,Object(c["D"])(o.numberWithCommas),1)]),Object(c["g"])("h3",null,[M,Object(c["g"])("span",null,Object(c["D"])(n.region),1)]),Object(c["g"])("h3",null,[F,(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(n.capital,(function(e){return Object(c["u"])(),Object(c["f"])("span",{key:e},Object(c["D"])(e),1)})),128))])])])]})),_:1},8,["to"])])}n("a9e3"),n("5319"),n("25f0");var U={name:"Card",props:{img:String,population:Number,country:String,region:String,capital:Array,code:String},computed:{numberWithCommas:function(){return this.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}};n("a279");const V=j()(U,[["render",J],["__scopeId","data-v-0be8ca48"]]);var E=V,q={name:"CountryList",components:{Card:E},props:{filtered:Array}};n("1c06");const K=j()(q,[["render",L]]);var z=K,G={class:"search-bar"},Q={class:"search-bar__content"};function X(e,t,n,r,a,o){var i=Object(c["B"])("font-awesome-icon");return Object(c["u"])(),Object(c["f"])("div",G,[Object(c["g"])("div",Q,[Object(c["j"])(i,{icon:"search",color:"gray"}),Object(c["I"])(Object(c["g"])("input",{type:"text",name:"country",placeholder:"Search for a country","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.keyword=e}),onKeyup:t[1]||(t[1]=function(e){return o.passSearchedValue()})},null,544),[[c["F"],a.keyword]])])])}var Y={name:"SearchBar",data:function(){return{keyword:""}},methods:{passSearchedValue:function(){this.$emit("updateBySearch",this.keyword)}}};n("a53b");const Z=j()(Y,[["render",X],["__scopeId","data-v-38851808"]]);var ee=Z,te=Object(c["h"])('<option value="all regions" data-v-4c1e492c>Filter by Region</option><option value="africa" data-v-4c1e492c>Africa</option><option value="americas" data-v-4c1e492c>Americas</option><option value="asia" data-v-4c1e492c>Asia</option><option value="europe" data-v-4c1e492c>Europe</option><option value="oceania" data-v-4c1e492c>Oceania</option>',6),ne=[te];function ce(e,t,n,r,a,o){return Object(c["u"])(),Object(c["f"])("div",null,[Object(c["g"])("select",{className:"select-filter",onChange:t[0]||(t[0]=function(e){return o.onChange(e)})},ne,32)])}var re={name:"filterByRegion",methods:{onChange:function(e){var t=e.target.value;this.$emit("selectedRegion",t)}}};n("b8f6");const ae=j()(re,[["render",ce],["__scopeId","data-v-4c1e492c"]]);var oe=ae,ie="https://restcountries.com/v3.1",se={name:"Home",components:{SearchBar:ee,filterByRegion:oe,CountryList:z},data:function(){return{countries:[],searchedCountry:null,region:"",countryDetails:{}}},beforeMount:function(){this.getCountries()},methods:{getCountries:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(ie,"/all"));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,e.countries=c;case 7:case"end":return t.stop()}}),t)})))()},onSearch:function(e){this.searchedCountry=e},onSelect:function(e){this.region=e}},computed:{filtered:function(){var e=this;return this.searchedCountry?this.countries.filter((function(t){return e.searchedCountry.toLowerCase().split(" ").every((function(e){return t.name.common.toLowerCase().includes(e)}))})):""!==this.region||"all regions"!==this.region?this.countries.filter((function(t){return e.region.toLowerCase().split(" ").every((function(e){return t.region.toLowerCase().match(e)}))})):(console.log(this.countries),this.countries)}}};n("9b67");const ue=j()(se,[["render",B]]);var le=ue,be={key:0,class:"details"},de={class:"details__go-back-container"},ge=Object(c["g"])("span",{class:"details__go-back-button-text"},"Back",-1),je={class:"details__card-container"},Oe={class:"details__card-items"},he={class:"details__card-items-img"},pe=["alt","src"],fe={class:"details__card-content"},me={class:"details__content-rows"},ve={class:"details__content-title"},ye={class:"details__content-rows"},_e=Object(c["g"])("span",{class:"details__items-key"},"Native name:",-1),we=Object(c["g"])("span",{class:"details__items-key"},"Capital:",-1),ke={class:"details__content-rows"},Ce=Object(c["g"])("span",{class:"details__items-key"},"Population:",-1),De=Object(c["g"])("span",{class:"details__items-key"},"Currencies:",-1),Se={class:"details__content-rows"},Be=Object(c["g"])("span",{class:"details__items-key"},"Région:",-1),xe=Object(c["g"])("span",{class:"details__items-key"},"Languages:",-1),Te={class:"details__content-rows"},Ae=Object(c["g"])("span",{class:"details__items-key"},"Sub regions:",-1),Ne=Object(c["g"])("span",{class:"details__items-key"},"Top Level Domain:",-1),Re={class:"details__borders-container"},Le=Object(c["g"])("h3",{class:"details__border-countries"},"Border Countries:",-1),Pe={key:0,class:"details__borders"},Ie=["onClick"];function $e(e,t,n,r,a,o){var i=Object(c["B"])("font-awesome-icon");return a.countryDetails?(Object(c["u"])(),Object(c["f"])("div",be,[Object(c["g"])("div",de,[Object(c["g"])("button",{class:"details__go-back-button",onClick:t[0]||(t[0]=Object(c["J"])((function(e){return o.goBack()}),["prevent"]))},[Object(c["j"])(i,{icon:"arrow-left",color:"gray"}),ge])]),Object(c["g"])("section",je,[Object(c["g"])("div",Oe,[Object(c["g"])("div",he,[Object(c["g"])("img",{alt:"Flag of ".concat(a.countryDetails.name.common),src:a.countryDetails.flags.png},null,8,pe)]),Object(c["g"])("article",fe,[Object(c["g"])("div",me,[Object(c["g"])("span",null,[Object(c["g"])("h2",ve,Object(c["D"])(a.countryDetails.name.common),1)])]),Object(c["g"])("div",ye,[Object(c["g"])("span",null,[Object(c["g"])("h3",null,[_e,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(o.nativeNames)),1)])]),Object(c["g"])("h3",null,[we,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(a.countryDetails.capital)),1)])]),Object(c["g"])("div",ke,[Object(c["g"])("span",null,[Object(c["g"])("h3",null,[Ce,Object(c["g"])("span",null,Object(c["D"])(o.numberWithCommas),1)])]),Object(c["g"])("h3",null,[De,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(o.currencies)),1)])]),Object(c["g"])("div",Se,[Object(c["g"])("span",null,[Object(c["g"])("h3",null,[Be,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(a.countryDetails.region)),1)])]),Object(c["g"])("h3",null,[xe,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(o.languages)),1)])]),Object(c["g"])("div",Te,[Object(c["g"])("span",null,[Object(c["g"])("h3",null,[Ae,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(a.countryDetails.subregion)),1)])]),Object(c["g"])("h3",null,[Ne,Object(c["g"])("span",null,Object(c["D"])(o.valueOrNA(a.countryDetails.tld)),1)])]),Object(c["g"])("div",Re,[Le,a.countryDetails.borders?(Object(c["u"])(),Object(c["f"])("div",Pe,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(a.countryDetails.borders,(function(e,t){return Object(c["u"])(),Object(c["f"])("div",{key:t},[Object(c["g"])("ul",null,[Object(c["g"])("li",{class:"details__border-items",onClick:function(t){return o.searchCountryWithCode(e)}},Object(c["D"])(e),9,Ie)])])})),128))])):Object(c["e"])("",!0)])])])])])):Object(c["e"])("",!0)}n("99af"),n("a15b"),n("498a"),n("4e82"),n("d81d"),n("07ac");var We={name:"Details",data:function(){return{countryDetails:null}},mounted:function(){var e=this.$route.params.name;e&&this.getCountryDetails(e)},methods:{goBack:function(){this.$router.push("/")},searchCountryWithCode:function(e){return this.$router.push({name:"Details",params:{name:e}})},getCountryDetails:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function n(){var c,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e,r=["name","region","subregion","capital","population","languages","currencies","flags","borders","tld","cca3"],n.prev=2,n.next=5,fetch("".concat(ie,"/alpha/").concat(c.toLowerCase(),"?fields=").concat(r.join(",")));case 5:return a=n.sent,n.next=8,a.json();case 8:t.countryDetails=n.sent,n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](2),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})))()},valueOrNA:function(e){return Array.isArray(e)&&(e=e.join(", ")),e?e.trim():"N/A"}},computed:{numberWithCommas:function(){return this.countryDetails.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},nativeNames:function(){return Object.values(this.countryDetails.name.nativeName).map((function(e){return e.common})).sort().join(", ")},languages:function(){return Object.values(this.countryDetails.languages).sort().join(", ")},currencies:function(){return Object.values(this.countryDetails.currencies).map((function(e){return"".concat(e.name," (").concat(e.symbol,")")})).sort().join(", ")}},watch:{"$route.params.name":{handler:function(e){this.getCountryDetails(e)}}}};n("71b8");const He=j()(We,[["render",$e]]);var Me=He,Fe=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:le},{path:"/details/:name",name:"Details",component:Me}],Je=Object(C["a"])({history:Object(C["b"])(),routes:Fe}),Ue=Je;v["d"].add(_["a"]),v["d"].add(w["a"]),v["d"].add(k["a"]),v["b"].watch();var Ve=Object(c["c"])(m);Ve.use(Ue),Ve.component("font-awesome-icon",y["a"]),Ve.mount("#app")},"62a8":function(e,t,n){"use strict";n("c0c7")},"71b8":function(e,t,n){"use strict";n("0bd9")},7564:function(e,t,n){"use strict";n("d02d")},"9b67":function(e,t,n){"use strict";n("d534")},a279:function(e,t,n){"use strict";n("203f")},a53b:function(e,t,n){"use strict";n("0cbf")},ae61:function(e,t,n){},b8f6:function(e,t,n){"use strict";n("10e8")},c0c7:function(e,t,n){},d02d:function(e,t,n){},d534:function(e,t,n){}});
//# sourceMappingURL=app.b8a5cfda.js.map