(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b660257"],{"634a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orders_container"},[e._m(0),e._v(" "),a("el-table",{attrs:{data:e.tableData,border:"","cell-style":{textAlign:"center"},"header-cell-style":{textAlign:"center"}}},[a("el-table-column",{attrs:{type:"index",index:e.computeIndex,label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"num",label:"订单编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"买家姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userPhone",label:"买家手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"下单时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"订单总价"}}),e._v(" "),a("el-table-column",{attrs:{label:"详情"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.handleLook(t)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{total:e.total,"current-page":e.page,"page-size":e.limit,background:"",layout:"total, prev, pager, next"},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"next-click":e.handleNext,"prev-click":e.handlePrev,"current-change":e.changePageEvent}}),e._v(" "),a("el-dialog",{attrs:{title:"订单详情",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{attrs:{data:e.currentLook,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"商品编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"num",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价"}}),e._v(" "),a("el-table-column",{attrs:{label:"总价"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((t.row.num*t.row.price).toFixed(2)))])]}}])})],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("订单管理")])])}],l=(a("8e6e"),a("456d"),a("ac6a"),a("96cf"),a("3b8d")),o=a("bd86"),c=a("c24f"),i=a("2f62");function u(e){return e<10?"0"+e:e}function s(e){e=e&&new Date(e)||new Date;var t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate(),r=e.getHours(),l=e.getMinutes(),o=e.getSeconds();return a=u(a),n=u(n),r=u(r),l=u(l),o=u(o),"".concat(t,"-").concat(a,"-").concat(n," ").concat(r,":").concat(l,":").concat(o)}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={data:function(){return{tableData:[],currentLook:[],dialogTableVisible:!1,total:0,page:1,limit:6}},computed:b({},Object(i["b"])(["id"]),{computeIndex:function(){return(this.page-1)*this.limit+1}}),created:function(){this.reqOrders()},methods:{reqOrders:function(){var e=this;Object(l["a"])(regeneratorRuntime.mark((function t(){var a,n,r,l,o,i,u,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,n=e.page,r=e.limit,t.next=3,Object(c["g"])({id:a,page:n,limit:r});case 3:l=t.sent,0===l.errorCode&&(o=l.data,i=l.pagination,u=i.page,p=i.total,o.forEach((function(e){e.time=s(e.time)})),e.tableData=o,e.page=u,e.total=p);case 5:case"end":return t.stop()}}),t)})))()},handleLook:function(e){this.currentLook=e.row.foods,this.dialogTableVisible=!0},changePageEvent:function(){this.reqOrders()},handleNext:function(){this.page+=1},handlePrev:function(){this.page-=1}}},f=d,g=(a("dac8"),a("2877")),m=Object(g["a"])(f,n,r,!1,null,null,null);t["default"]=m.exports},"824d":function(e,t,a){},dac8:function(e,t,a){"use strict";var n=a("824d"),r=a.n(n);r.a}}]);