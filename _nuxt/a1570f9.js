(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{329:function(t,e,n){"use strict";n(17),n(76),n(77),n(13),n(33),n(34);var r={name:"DataDownloadButton",components:{},props:["type","filterParams","selectedFilterDimension"],data:function(){return{}},computed:{filePath:function(){return"https://data.humdata.org/dataset/iati-covid19-funding"},isProd:function(){return this.$store.state.isProd}},methods:{downloadAllData:function(){this.$mixpanelTrackLink(this.filePath,"download all data"),window.open(this.filePath)},downloadFilteredData:function(t){var param="*"===this.filterParams[this.selectedFilterDimension]?null:this.filterParams[this.selectedFilterDimension],e=this.selectedFilterDimension.split("#")[1];"flows"===this.type&&e.includes("org")&&(e="org+id");var n="off"!==this.filterParams.humanitarian,r="off"!==this.filterParams.strict,o="flows"===this.type?this.proxyLinkFlows(param,e,n,r):this.proxyLinkTransactions(param,e,n,r);this.$mixpanelTrackLink(o,"download filtered data"),window.open(o)},checkToken:function(t,e,n){if(!e.includes(t))throw new Error("Bad "+n+": "+t+". Expected one of "+String(e))},proxyLinkTransactions:function(t,e,n,r){var o={url:"https://ocha-dap.github.io/hdx-scraper-iati-viz/transactions.csv"};return null!==t&&(this.checkToken(e,["org+id","country","sector"],"selection type"),o.filter01="select",o["select-query01-01"]=e+"="+t),n&&(o.filter02="select",o["select-query02-01"]="indicator+humanitarian=1"),r&&(o.filter03="select",o["select-query03-01"]="indicator+strict=1"),o.filter04="count",o["count-tags04"]="date+month,org+id,org+name,org+type,sector,country,activity+code,x_transaction_type",o["count-header04-01"]="Net money (USD)",o["count-type04-01"]="sum",o["count-pattern04-01"]=o["count-column04-01"]="#value+net",o["count-header04-02"]="Total money (USD)",o["count-type04-02"]="sum",o["count-pattern04-02"]=o["count-column04-02"]="#value+total",o.filter05="select",o["select-query05-01"]="value>0",o.filter06="sort",o["sort-tags06"]="date+month,org+name,x_transaction_type,value+total","https://proxy.hxlstandard.org/data?"+new URLSearchParams(o).toString()},proxyLinkFlows:function(t,e,n){var r={url:"https://ocha-dap.github.io/hdx-scraper-iati-viz/flows.csv"};return null!==t&&(r.filter01="select",r["select-query01-01"]="org+id+reporting="+t),e&&(r.filter02="select",r["select-query02-01"]="indicator+humanitarian=1"),n&&(r.filter03="select",r["select-query03-01"]="indicator+strict=1"),r.filter04="count",r["count-tags04"]="org+id+reporting,org+name+reporting,org+reporting+type,org+id+provider,org+name+provider,org+provider+type,org+id+receiver,org+name+receiver,org+receiver+type,x_transaction_direction",r["count-header04-01"]="Total money (USD)",r["count-type04-01"]="sum",r["count-pattern04-01"]=r["count-column04-01"]="#value+total",r.filter05="select",r["select-query05-01"]="value>0",r.filter06="sort",r["sort-tags06"]="value+total",r["sort-reverse06"]="on","https://proxy.hxlstandard.org/data?"+new URLSearchParams(r).toString()}}},o=n(41),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-dropdown",{staticClass:"download-button",attrs:{id:"downloadDropdown",text:"Download Data",block:"",variant:"outline-dark"},on:{click:function(e){return t.onClick(e)}}},[n("b-dropdown-item",{on:{click:function(e){return t.downloadAllData()}}},[t._v("\n      View data on HDX\n    ")]),t._v(" "),n("b-dropdown-item",{on:{click:function(e){return t.downloadFilteredData()}}},[t._v("\n      View filtered data\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},334:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("6476f70f",content,!0,{sourceMap:!1})},335:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("e402c668",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("46ce1893",content,!0,{sourceMap:!1})},347:function(t,e,n){"use strict";n(334)},348:function(t,e,n){var r=n(39)(!1);r.push([t.i,".badges{display:flex;justify-content:space-between}#sankeyChart{height:400px;width:100%}.node rect{cursor:move;fill-opacity:.9;shape-rendering:crispEdges}.node text{pointer-events:none;text-shadow:0 1px 0 #fff}.link{fill:none;stroke:#000;stroke-opacity:.3}.linkHover{stroke-opacity:.5}.linkText{fill:#000;text-shadow:1px 1px 3px #fff;cursor:default}",""]),t.exports=r},349:function(t,e,n){"use strict";n(335)},350:function(t,e,n){var r=n(39)(!1);r.push([t.i,".chart[data-v-6ad68780]{width:100%;height:500px}",""]),t.exports=r},351:function(t,e,n){"use strict";n(336)},352:function(t,e,n){var r=n(39)(!1);r.push([t.i,"abbr[data-original-title],abbr[title]{text-decoration:none;cursor:auto}@media only screen and (max-width:992px){.iati-viz h2.header .badge.info-icon.badge-pill{width:14px}}",""]),t.exports=r},369:function(t,e,n){"use strict";n.r(e);n(3),n(2),n(4),n(5);var r=n(21),o=n(0),l=n(22),c=n(20),d=(n(62),n(331),n(43),n(13),n(42),n(8),n(1),n(80),n(10),n(72)),f=n.n(d),h=n(333),m=n.n(h),v=n(328),y=n.n(v),_=n(57),x=(n(77),n(76),n(14),n(367)),k=n(363),w={name:"SankeyChart",props:["chartData"],data:function(){return{maximumVisibleItems:10,chart:null,width:10,height:10,selectedLink:null,colors:["#418FDE","#E56A54","#ECA154","#E2E868","#A4D65E","#71DBD4","#9063CD","#D3BC8D","#82B5E9","#EFA497","#F4C799","#C6E69B","#AEEAE6","#418FDE","#E56A54","#ECA154","#E2E868","#A4D65E","#71DBD4","#9063CD","#D3BC8D","#82B5E9","#EFA497","#F4C799"]}},computed:{tooltips:function(){return this.$store.state.tooltips},nodes:function(){return this.sankey.nodes},links:function(){return this.sankey.links},maxNodeDepth:function(){var t=this.sankey.nodes.map((function(t){return t.depth}));return Math.max.apply(Math,Object(c.a)(t))},sankey:function(){var t=this.chartData.nodes,e=this.chartData.links,n=Object(k.a)().nodeId((function(t){return t.name})).nodeWidth(20).nodePadding(8).extent([[1,5],[this.width-1,this.height-10]]);return n({nodes:t.map((function(t){return Object.assign({},t)})),links:e.map((function(t){return Object.assign({},t)}))})},sankeyLinkPaths:function(){return Object(k.b)()}},mounted:function(){this.makeChart(),window.addEventListener("resize",this.onResize),this.onResize()},methods:{truncate:function(t){return t.length>50&&(t=t.substr(0,50)+"..."),t},mouseoverLink:function(t){this.selectedLink=t},mouseleaveLink:function(t){this.selectedLink=null},sankeyLinkPath:function(t){return this.sankeyLinkPaths(t)},numberFormatter:function(t){return 0===t?"0":t?y()(t).format("$0,0"):""},labelXPosition:function(link){return this.maxNodeDepth<2?link.source.x1+(link.target.x0-link.source.x1)/2:link.source.x1>this.width/2?link.source.x1+6:link.target.x0-6},labelYPosition:function(link){if(this.maxNodeDepth<2)return(link.y1+link.y0)/2;var t=link.source.x1>this.width/2,e=t?link.y0:link.y1;return e=Math.abs(e-this.height/2)<15&&t?e-15:e},labelAnchor:function(link){return this.maxNodeDepth<2?"middle":link.source.x1>this.width/2?"start":"end"},color:function(t){return"» (unspecified org)"===t.name?"#999":this.colors[t.index]},makeChart:function(){Object(x.a)("#sankeyChart").append("svg").attr("width",this.width).attr("height",this.height)},onResize:function(){this.width=this.$el.offsetWidth,this.height=500}}},D=(n(347),n(41)),O={components:{SankeyChart:Object(D.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"badges"},[n("div",[n("b-badge",{attrs:{variant:"dark"}},[t._v("\n        Provider Org\n      ")]),t._v(" "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.sankeyProviderLabel}},[t._v("\n        ?\n      ")])],1),t._v(" "),n("div",[t.maxNodeDepth>1?n("b-badge",{attrs:{variant:"dark"}},[t._v("\n        Reporting Org\n      ")]):t._e()],1),t._v(" "),n("div",[n("b-badge",{attrs:{variant:"dark"}},[t._v("\n        Receiver Org\n      ")]),t._v(" "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.sankeyReceiverLabel}},[t._v("\n        ?\n      ")])],1)]),t._v(" "),n("div",{ref:"sankeyChart",attrs:{id:"sankeyChart"}},[n("svg",{attrs:{width:t.width,height:t.height}},[n("pattern",{attrs:{id:"diagonalHatch",width:"10",height:"10",patternTransform:"rotate(45 0 0)",patternUnits:"userSpaceOnUse"}},[n("line",{staticStyle:{stroke:"black","stroke-width":"1"},attrs:{x1:"0",y1:"0",x2:"0",y2:"10"}})]),t._v(" "),n("g",t._l(t.nodes,(function(e){return n("rect",t._b({key:e.index,staticClass:"node",attrs:{x:e.x0,y:isNaN(e.y0)?0:e.y0,height:isNaN(e.y1)||isNaN(e.y0)?0:Math.max(e.y1-e.y0,0),width:e.x1-e.x0,fill:"» (unspecified org)"==e.name?"url(#diagonalHatch)":t.color(e)}},"rect",t.nodes,!1))})),0),t._v(" "),n("g",t._l(t.links,(function(link){return n("g",t._b({key:link.index,class:t.selectedLink==link.index?"link linkHover":"link",staticStyle:{"mix-blend-mode":"multiply"},attrs:{id:"link-"+link.index}},"g",t.links,!1),[n("linearGradient",{attrs:{id:link.index+"-gradient",x1:link.source.x1,x2:link.target.x0,gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":t.color(link.source),offset:"0%"}}),t._v(" "),n("stop",{attrs:{"stop-color":t.color(link.target),offset:"100%"}})],1),t._v(" "),n("path",{attrs:{d:t.sankeyLinkPaths(link),stroke:"url(#"+link.index+"-gradient)","stroke-width":Math.max(1,link.width)},on:{mouseover:function(e){return t.mouseoverLink(link.index)},mouseleave:function(e){return t.mouseleaveLink(link.index)}}})],1)})),0),t._v(" "),n("g",{attrs:{"font-family":"sans-serif","font-size":"12"}},t._l(t.nodes,(function(e){return n("text",t._b({key:e.index,attrs:{x:e.x0<t.width/2?e.x1+6:e.x0-6,y:isNaN(e.y1)||isNaN(e.y1)?0:(e.y1+e.y0)/2,"text-anchor":e.x0<t.width/2?"start":"end",dy:"0.35em"}},"text",t.nodes,!1),[t._v("\n          "+t._s(t.truncate(e.name))+"\n          "),n("title",[t._v(t._s(e.name))])])})),0),t._v(" "),n("g",{attrs:{"font-family":"sans-serif","font-size":"12"}},t._l(t.links,(function(link){return n("g",t._b({key:link.index+"-label",staticClass:"linkText",style:t.selectedLink==link.index?"display: block;":"display: none;",on:{mouseover:function(e){return t.mouseoverLink(link.index)},mouseleave:function(e){return t.mouseleaveLink(link.index)}}},"g",t.links,!1),[n("text",{attrs:{x:t.labelXPosition(link),y:isNaN(link.y0)||isNaN(link.y1)?0:t.labelYPosition(link),width:link.width,dy:"0.35em","text-anchor":t.labelAnchor(link)}},[t._v("\n            USD "+t._s(t.numberFormatter(link.value))+"\n          ")])])})),0)])])])}),[],!1,null,null,null).exports},props:["items","params"],data:function(){return{maximumVisibleItems:10}},computed:{orgNameIndex:function(){return this.$store.state.orgNameIndex},chartData:function(){var t=this,e=function(t){if(void 0===t)return t;return["USAID redacted this field in accordance with the Principled Exceptions outlined in the Office of Management and Budget Bulletin 12-01.","USAID redacted this field in accordance with the exceptions outlined in the Foreign Aid Transparency and Accountability Act of 2016."].includes(t)?"Redacted":t},n=function(n,r){return"outgoing".includes(r)?"".concat(e(n["#org+name+provider"])||e(t.getOrgName(n["#org+id+reporting"]))||"UNKNOWN"," »"):"".concat(e(n["#org+name+provider"]))},r=function(n,r){return"outgoing".includes(r)?"» ".concat(e(n["#org+name+receiver"])):"".concat(e(t.getOrgName(n["#org+id+reporting"]))," »")},o=Object(c.a)(this.items).sort((function(a,b){return a["#value+total"]>b["#value+total"]?-1:1}));return{nodes:o.reduce((function(summary,t){var e=n(t,t["#x_transaction_direction"]),o=r(t,t["#x_transaction_direction"]);return summary.includes(e)||summary.push(e),summary.includes(o)||summary.push(o),summary}),[]).map((function(t){return{name:t}})),links:o.map((function(t){return{source:n(t,t["#x_transaction_direction"]),target:r(t,t["#x_transaction_direction"]),value:Math.round(t["#value+total"])}}))}}},methods:{getOrgName:function(t){var e=this.orgNameIndex.filter((function(e){return e["#org+id+reporting"]===t}));return void 0!==e[0]?e[0]["#org+name+reporting"]:""}}};n(349);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var P={components:{SankeyChart:Object(D.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.chartData.links.length>0?[n("div",{staticClass:"chart"},[n("client-only",[n("sankey-chart",{attrs:{"chart-data":t.chartData}})],1)],1)]:[n("b-alert",{staticClass:"text-muted text-center",attrs:{show:"",variant:"warning"}},[t._v("\n      No flows match the filters you've chosen\n    ")])]],2)}),[],!1,null,"6ad68780",null).exports,DownloadDataButton:n(329).a},data:function(){return{title:_.a.head.title,selectedFilterDimension:"#org+id+reporting",selectedFilter:"*",selectedFilterLabel:"all reporting organizations",quickFilters:[{name:"Asian Development Bank",id:"xm-dac-46004"},{name:"Inter-American Development Bank",id:"xi-iati-iadb"},{name:"UNOCHA - Central Emergency Response Fund (CERF)",id:"xm-ocha-cerf"},{name:"United Nations Development Programme",id:"xm-dac-41114"},{name:"United States Agency for International Development (USAID)",id:"us-gov-1"},{name:"World Food Programme",id:"xm-dac-41140"}],strictToggleOptions:[{label:"Loose",value:"off"},{label:"Strict",value:"on"}],humanitarianToggleOptions:[{label:"No",value:"off"},{label:"Yes",value:"on"}],activityCount:0,fullData:[],filteredData:[],filterParams:{},orgNameIndex:[],lastUpdatedDate:"",months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},head:function(){return{title:_.a.head.title+": Spending Flows"}},computed:{isBusy:function(){return 0===this.fullData.length},tooltips:function(){return this.$store.state.tooltips},isProd:function(){return this.$store.state.isProd},reportingOrgs:function(){var t=this,e=Object(c.a)(new Set(this.fullData.map((function(t){return t["#org+id+reporting"]}))));return e=e.map((function(e){var n={};return n.value=e,n.text=t.getOrgName(e),n})),this.populateSelect(e,"All reporting organizations")}},updated:function(){this.createStickyHeader()},mounted:function(){var t=this;this.filterParams={humanitarian:"off",strict:"off"},this.filterParams["#org+id+reporting"]=this.selectedFilter;_.a.dev;f.a.get("https://raw.githubusercontent.com/mcarans/iati_test_results/main/climate/reporting_orgs.json").then((function(e){t.orgNameIndex=e.data.data,t.$store.commit("setorgNameIndex",e.data.data),t.$nextTick((function(){"org"in t.$route.query&&(t.filterParams["#org+id+reporting"]=t.selectedFilter=t.$route.query.org,t.selectedFilterLabel=t.getOrgName(t.$route.query.org)),"humanitarian"in t.$route.query&&(t.filterParams.humanitarian=t.$route.query.humanitarian),"strict"in t.$route.query&&(t.filterParams.strict=t.$route.query.strict),t.loadData()}))}))},methods:{loadData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_.a.dev?"":"/viz-iati-climate/",r="https://raw.githubusercontent.com/mcarans/iati_test_results/main/climate/flows.json",e.next=4,f.a.get(n+"tooltips.csv").then((function(e){return m()().fromString(e.data).then((function(e){t.$store.commit("setTooltips",e)}))}));case 4:return e.next=6,f.a.get(r).then((function(e){var n=e.data.metadata,r=new Date(n["#date+run"]),o=t.months[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear();t.lastUpdatedDate=o,t.fullData=e.data.data,t.updateFilteredData()}));case 6:case"end":return e.stop()}}),e)})))()},urlQuery:function(){var t={};return"*"!==this.filterParams["#org+id+reporting"]&&(t.org=this.filterParams["#org+id+reporting"]),"off"!==this.filterParams.humanitarian&&(t.humanitarian=this.filterParams.humanitarian),"off"!==this.filterParams.strict&&(t.strict=this.filterParams.strict),t},updateRouter:function(){this.$router.push({name:"spending_flows",query:this.urlQuery()})},updateFilteredData:function(){this.filteredData=this.filterData(),this.updateRouter()},filterData:function(){var t=this.fullData.map((function(i){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},i)})),e=this.filterParams,n=this.selectedFilterDimension;return e[n]&&"*"!==e[n]&&(t=t.filter((function(t){return t[n]===e[n]}))),"on"===e.humanitarian&&(t=t.filter((function(t){return 1===t["#indicator+bool+humanitarian"]}))),"on"===e.strict&&(t=t.filter((function(t){return 1===t["#indicator+bool+strict"]}))),"off"!==e.humanitarian&&"off"!==e.strict||(t=this.aggregateFlows(t)),this.activityCount=t.length,t=this.partitionData(t)},aggregateFlows:function(data){return data.reduce((function(t,e){var pattern="incoming"===e["#x_transaction_direction"]?"#org+name+provider":"#org+name+receiver",n=t.find((function(a){return""!==a[pattern]&&a["#org+id+reporting"]===e["#org+id+reporting"]&&a[pattern]===e[pattern]}));return n?n["#value+total"]+=e["#value+total"]:t.push(e),t}),[])},partitionData:function(data){var t=data.reduce((function(t,element){return t["incoming"===element["#x_transaction_direction"]?0:1].push(element),t}),[[],[]]),e=Object(r.a)(t,2),n=e[0],o=e[1];return n=this.formatData(n),o=this.formatData(o),n.concat(o)},formatData:function(t){return t.sort((function(a,b){return a["#value+total"]>b["#value+total"]?-1:1})).slice(0,10)},onSelect:function(t){this.selectedFilter=t,this.filterParams[this.selectedFilterDimension]=t,this.selectedFilterLabel="*"!==t?this.getOrgName(t):"all reporting organizations",this.updateFilteredData()},onToggle:function(t){this.filterParams[t.target.parentElement.id]=t.target.value,this.updateFilteredData()},onQuickFilter:function(t){t.preventDefault(),this.onSelect(t.target.id)},populateSelect:function(data,t){var e=data.reduce((function(t,e){return t.push({value:e.value,text:e.text}),t}),[]).sort((function(a,b){return a.text<b.text?-1:1}));return e.unshift({value:"*",text:t}),e},getOrgName:function(t){var e=this.orgNameIndex.filter((function(e){return e["#org+id+reporting"]===t}));return void 0!==e[0]?e[0]["#org+name+reporting"]:""},getOrgID:function(t){return this.orgNameIndex.filter((function(e){return e["#org+name+reporting"]===t}))[0]["#org+id+reporting"]},numberFormatter:function(t){return 0===t?"0":t?y()(t).format("0,0"):""},createStickyHeader:function(){var t=document.getElementsByClassName("header-sticky")[0];this.loaded||void 0===t||(this.loaded=!0,new IntersectionObserver((function(t){var e=Object(r.a)(t,1)[0];return e.target.classList.toggle("is-stuck",e.intersectionRatio<1)}),{threshold:[1]}).observe(t))},scrollTo:function(t){var e=this.$refs[t].offsetTop-100;window.scrollTo(0,e)}}},F=P,N=(n(351),Object(D.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isBusy?[n("div",{staticClass:"custom-loader text-center text-secondary mt-5"},[n("b-spinner",{staticClass:"align-middle"}),t._v(" "),n("strong",[t._v("Loading...")])],1)]:t._e(),t._v(" "),t.isBusy?t._e():[n("hr",{staticClass:"mt-4 mb-0"}),t._v(" "),n("div",{staticClass:"header-sticky"},[n("div",{staticClass:"container"},[n("h2",[t.activityCount>t.filteredData.length?n("span",[t._v("Top "),n("b",[t._v(t._s(t.filteredData.length))]),t._v(" of ")]):t._e(),n("b",[t._v(t._s(t.numberFormatter(t.activityCount)))]),t._v(" "),t.filteredData.length>1||0===t.filteredData.length?n("span",[t._v("spending flows")]):n("span",[t._v("spending flow")]),t._v(" reported by "),n("b",[t._v(t._s(t.selectedFilterLabel))])]),t._v(" "),n("a",{staticClass:"anchor",on:{click:function(e){return t.scrollTo("filters")}}},[t._v("Customize filters")])])]),t._v(" "),n("hr",{staticClass:"mt-0 mb-4"}),t._v(" "),n("b-container",[n("b-row",{ref:"filters"},[n("b-col",{attrs:{cols:"12",lg:"7"}},[n("h3",[t._v("\n            Reporting organization\n            "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.reportingOrg}},[t._v("\n              ?\n            ")])],1),t._v(" "),n("v-select",{staticClass:"filter-select filter-select-org mb-3",attrs:{value:t.selectedFilter,options:t.reportingOrgs,"get-option-key":function(option){return option.value},"get-option-label":function(option){return option.text},reduce:function(option){return option.value}},on:{input:t.onSelect},scopedSlots:t._u([{key:"search",fn:function(e){var r=e.attributes,o=e.events;return[n("input",t._g(t._b({staticClass:"vs__search",attrs:{placeholder:"Type organization name here"}},"input",r,!1),o))]}}],null,!1,2633457986)}),t._v(" "),n("div",{staticClass:"quick-filter-list mb-3"},[t._v("\n            Quick filters:\n            "),n("ul",{staticClass:"horizontal-list d-inline"},t._l(t.quickFilters,(function(filter){return n("li",{key:filter.id},[n("a",{attrs:{id:filter.id,href:"#",title:filter.name},on:{click:t.onQuickFilter}},[t._v(t._s(filter.name))])])})),0)])],1),t._v(" "),n("b-col",[n("b-row",[n("b-col",[t._v("\n              Filter for COVID-19 related flows\n              "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.flowsCOVID}},[t._v("\n                ?\n              ")]),t._v(":\n            ")],1),t._v(" "),n("b-col",[n("b-button-group",{attrs:{id:"strict"}},t._l(t.strictToggleOptions,(function(e,r){return n("b-button",{key:r,class:{active:e.value===t.filterParams.strict},attrs:{value:e.value},on:{click:function(e){return t.onToggle(e)}}},[t._v("\n                  "+t._s(e.label)+"\n                ")])})),1)],1)],1),t._v(" "),n("hr",{staticClass:"my-3"}),t._v(" "),n("b-row",[n("b-col",[t._v("\n              Only show humanitarian flows\n              "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.flowsHumanitarian}},[t._v("\n                ?\n              ")]),t._v(":\n            ")],1),t._v(" "),n("b-col",[n("b-button-group",{attrs:{id:"humanitarian"}},t._l(t.humanitarianToggleOptions,(function(e,r){return n("b-button",{key:r,class:{active:e.value===t.filterParams.humanitarian},attrs:{value:e.value},on:{click:function(e){return t.onToggle(e)}}},[t._v("\n                  "+t._s(e.label)+"\n                ")])})),1)],1)],1),t._v(" "),n("hr",{staticClass:"my-3"}),t._v(" "),n("b-row",[n("b-col",{staticClass:"my-3",attrs:{cols:"12",md:"8"}},[n("DownloadDataButton",{attrs:{type:"flows","filter-params":t.filterParams,"selected-filter-dimension":t.selectedFilterDimension}})],1)],1)],1)],1),t._v(" "),n("h2",{staticClass:"header mt-3"},[t._v("\n        Spending Flows \n        "),n("b-badge",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"info-icon p-0",attrs:{variant:"dark",pill:"",title:t.tooltips.sankeyHeader}},[t._v("\n          ?\n        ")])],1),t._v(" "),n("SankeyChart",{attrs:{items:t.filteredData,params:t.filterParams}}),t._v(" "),n("div",{staticClass:"small text-muted mt-5 ml-4"},[t._v("\n        "+t._s(t.lastUpdatedDate)+" | IATI\n      ")]),t._v(" "),n("hr")],1)]],2)}),[],!1,null,null,null));e.default=N.exports}}]);