(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7640403a"],{7732:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"goods_container"},[e._m(0),e._v(" "),o("div",{staticClass:"tool"},[o("el-input",{staticClass:"input",attrs:{placeholder:"输入搜索内容"},model:{value:e.q,callback:function(t){e.q=t},expression:"q"}}),o("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("搜索商品")]),e._v(" "),o("el-dropdown",{on:{command:e.handleCommand}},[o("el-button",{attrs:{type:"primary"}},[e._v("\n        批量操作"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{icon:"el-icon-delete",command:"delete"}},[e._v("删除选中")]),e._v(" "),o("el-dropdown-item",{attrs:{icon:"el-icon-remove",command:"cancel"}},[e._v("取消选择")])],1)],1),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("添加商品")])],1),e._v(" "),o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","max-height":"480"},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"45"}}),e._v(" "),o("el-table-column",{attrs:{type:"index",label:"序号",width:"50px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"food_name",label:"名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"food_price",label:"价格",sortable:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"food_ingredient",label:"原料"}}),e._v(" "),o("el-table-column",{attrs:{prop:"food_cat_name",label:"分类",filters:e.cates,"filter-method":e.catFilterHandler}}),e._v(" "),o("el-table-column",{attrs:{prop:"food_commend",label:"推荐"}}),e._v(" "),o("el-table-column",{attrs:{prop:"food_sales",label:"销量",sortable:""}}),e._v(" "),o("el-table-column",{attrs:{label:"操作",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(o){return e.handleEdit(t)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(o){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),o("el-dialog",{attrs:{title:"警告",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("span",[e._v("确认删除该商品")]),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:e.confimDelete}},[e._v("确 定")])],1)]),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogFormVisible,width:"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t},closed:e.dialogCloseEvent}},[o("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[o("h2",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.dialogTitle))])]),e._v(" "),o("el-form",{attrs:{model:e.currentGoods,"label-position":"left","label-width":"50px"}},[o("el-form-item",{attrs:{label:"名称"}},[o("el-input",{attrs:{width:"200px"},model:{value:e.currentGoods.food_name,callback:function(t){e.$set(e.currentGoods,"food_name",t)},expression:"currentGoods.food_name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"价格"}},[o("el-input",{attrs:{size:"mini"},model:{value:e.currentGoods.food_price,callback:function(t){e.$set(e.currentGoods,"food_price",t)},expression:"currentGoods.food_price"}},[o("template",{slot:"append"},[e._v("\n            元\n          ")])],2)],1),e._v(" "),o("el-form-item",{attrs:{label:"原料"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.currentGoods.food_ingredient,callback:function(t){e.$set(e.currentGoods,"food_ingredient",t)},expression:"currentGoods.food_ingredient"}})],1),e._v(" "),o("el-form-item",{staticClass:"classify",attrs:{label:"分类"}},[o("el-select",{attrs:{placeholder:"选择分类"},model:{value:e.currentGoods.food_cat_name,callback:function(t){e.$set(e.currentGoods,"food_cat_name",t)},expression:"currentGoods.food_cat_name"}},e._l(e.cates,(function(e,t){return o("el-option",{key:t,attrs:{label:e.value,value:e.value}})})),1),e._v(" "),o("el-input",{directives:[{name:"show",rawName:"v-show",value:e.iptVisible,expression:"iptVisible"}],staticClass:"classify_ipt",attrs:{placeholder:"分类名称"},model:{value:e.newClassifyName,callback:function(t){e.newClassifyName=t},expression:"newClassifyName"}}),e._v(" "),o("el-button",{staticClass:"add_btn",attrs:{type:"primary"},on:{click:e.handleAddClassify}},[e._v(e._s(e.btnText))])],1),e._v(" "),o("el-form-item",{attrs:{label:"推荐"}},[o("el-switch",{model:{value:e.currentGoods.food_commend,callback:function(t){e.$set(e.currentGoods,"food_commend",t)},expression:"currentGoods.food_commend"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.confirmChange}},[e._v(e._s(e.dialogBtnText))])],1)],1)],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"title"},[o("h1",[e._v("商品管理")])])}],a=(o("8e6e"),o("456d"),o("20d6"),o("ac6a"),o("96cf"),o("3b8d")),r=o("bd86"),s=o("c24f"),l=o("2f62");function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){Object(r["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var u={data:function(){return{tableData:[],dialogVisible:!1,dialogFormVisible:!1,initGoods:{food_name:"",food_price:"",food_ingredient:"",food_commend:0,food_cat_name:""},currentGoods:{},dialogTitle:"",dialogBtnText:"",iptVisible:!1,btnText:"添加分类",newClassifyName:"",cates:[],q:"",multipleSelection:[]}},computed:d({},Object(l["c"])(["id"])),created:function(){var e=this;Object(a["a"])(regeneratorRuntime.mark((function t(){var o,n,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["e"])(e.id);case 2:o=t.sent,n=o.data,i=n.goods,a=n.cates,i.forEach((function(e){e.food_commend=e.food_commend?"是":"否"})),e.tableData=i,e.cates=a.map((function(e){return{text:e,value:e}}));case 7:case"end":return t.stop()}}),t)})))()},methods:{confimDelete:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,o,n,i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.currentGoods,o=t.food_id,n=t.food_cat_name,e.next=3,Object(s["b"])({food_id:o,food_cat_name:n});case 3:i=e.sent,a=0===i.errorCode?"success":"error",this.$message({message:i.message,type:a}),0===i.errorCode&&(r=this.tableData.findIndex((function(e){return e.food_id==o})),this.tableData.splice(r,1)),this.dialogVisible=!1;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleDelete:function(e){this.currentGoods=e.row,this.dialogVisible=!0},handleEdit:function(e){this.dialogTitle="商品信息修改",this.dialogBtnText="修改",this.currentGoods=JSON.parse(JSON.stringify(e.row)),this.currentGoods.food_commend="是"===this.currentGoods.food_commend,this.dialogFormVisible=!0},confirmChange:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,o,n,i,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object.keys(this.currentGoods).some((function(e){return""===a.currentGoods[e]})),!t){e.next=3;break}return e.abrupt("return",this.$message({message:"不能为空",type:"warning"}));case 3:if(this.dialogFormVisible=!1,this.currentGoods.food_commend=this.currentGoods.food_commend?1:0,"商品添加"!==this.dialogTitle){e.next=12;break}return e.next=8,Object(s["a"])(this.currentGoods);case 8:o=e.sent,0===o.errorCode&&(this.tableData=o.data),e.next=16;break;case 12:return e.next=14,Object(s["l"])(this.currentGoods);case 14:o=e.sent,0===o.errorCode&&(n=JSON.parse(JSON.stringify(this.currentGoods)),n.food_commend=1===this.currentGoods.food_commend?"是":"否",i=this.tableData.findIndex((function(e){return e.food_id==n.food_id})),this.tableData[i]=n);case 16:this.$message({message:o.message,type:"success"});case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleAdd:function(){this.currentGoods=d({},this.initGoods),this.dialogTitle="商品添加",this.dialogBtnText="添加",this.dialogFormVisible=!0},handleAddClassify:function(){this.iptVisible?""!==this.newClassifyName?(this.cates.unshift({text:this.newClassifyName,value:this.newClassifyName}),this.currentGoods["food_cat_name"]=this.newClassifyName,this.$message({message:"添加成功",type:"success"}),this.btnText="添加分类",this.iptVisible=!1):this.$message({message:"请输入分类名称",type:"warning"}):(this.btnText="确认",this.iptVisible=!0)},dialogCloseEvent:function(){this.btnText="添加分类",this.iptVisible=!1},catFilterHandler:function(e,t,o){var n=o["property"];return t[n]===e},handleSearch:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.q){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(s["j"])(this.q);case 4:t=e.sent,this.tableData=t.data;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCommand:function(e){this.multipleSelection.length&&("delete"===e?this.dialogVisible=!0:this.$refs.multipleTable.clearSelection())},handleSelectionChange:function(e){this.multipleSelection=e}}},f=u,m=(o("cc07"),o("2877")),p=Object(m["a"])(f,n,i,!1,null,null,null);t["default"]=p.exports},af72:function(e,t,o){},cc07:function(e,t,o){"use strict";var n=o("af72"),i=o.n(n);i.a}}]);