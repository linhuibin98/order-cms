(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-689f8a64"],{"31c9":function(e,t,n){"use strict";var a=n("34a2"),r=n.n(a);r.a},"34a2":function(e,t,n){},daea:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"orders_container"},[e._m(0),e._v(" "),n("el-table",{attrs:{data:e.tableData,border:"","cell-style":{textAlign:"center"},"header-cell-style":{textAlign:"center"}}},[n("el-table-column",{attrs:{type:"index",index:e.computeIndex,label:"序号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"性别"}}),e._v(" "),n("el-table-column",{attrs:{prop:"num",label:"工号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"position",label:"职位"}}),e._v(" "),n("el-table-column",{attrs:{prop:"salary",label:"月薪"}}),e._v(" "),n("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.handleEdit(t)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-pagination",{attrs:{total:e.total,"current-page":e.page,"page-size":e.limit,background:"",layout:"total, prev, pager, next"},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"next-click":e.handleNext,"prev-click":e.handlePrev,"current-change":e.changePageEvent}}),e._v(" "),n("el-dialog",{attrs:{title:"信息编辑",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.currentEdit}},[n("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentEdit.name,callback:function(t){e.$set(e.currentEdit,"name",t)},expression:"currentEdit.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentEdit.sex,callback:function(t){e.$set(e.currentEdit,"sex",t)},expression:"currentEdit.sex"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"工号","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentEdit.num,callback:function(t){e.$set(e.currentEdit,"num",t)},expression:"currentEdit.num"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"职位","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentEdit.position,callback:function(t){e.$set(e.currentEdit,"position",t)},expression:"currentEdit.position"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"月薪","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentEdit.salary,callback:function(t){e.$set(e.currentEdit,"salary",t)},expression:"currentEdit.salary"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.currentEdit.remark,callback:function(t){e.$set(e.currentEdit,"remark",t)},expression:"currentEdit.remark"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm(e.currentEdit.index)}}},[e._v("确 定")])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h1",[e._v("员工管理")])])}],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={data:function(){return{tableData:[{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999",remark:""},{name:"李四",sex:"男",num:"002",position:"厨师长",salary:"12222"},{name:"王五",sex:"男",num:"003",position:"厨师",salary:"9999"},{name:"严无",sex:"男",num:"004",position:"厨师",salary:"19999"},{name:"贾晓晓",sex:"女",num:"005",position:"服务员",salary:"6666"},{name:"甄世大",sex:"男",num:"006",position:"厨师",salary:"9999"},{name:"白月光",sex:"男",num:"007",position:"服务员",salary:"19999"},{name:"邓邓等",sex:"男",num:"008",position:"厨师",salary:"19999"},{name:"奥特曼",sex:"男",num:"009",position:"超人",salary:"199999"},{name:"王强",sex:"男",num:"010",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"011",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"012",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"},{name:"王强",sex:"男",num:"001",position:"经理",salary:"19999"}],currentEdit:{name:"",sex:"",num:"",position:"",salary:"",remark:"",index:0},currentEditIndex:0,dialogFormVisible:!1,total:0,page:1,limit:6,formLabelWidth:"50px"}},computed:{computeIndex:function(){return(this.page-1)*this.limit+1}},created:function(){this.total=this.tableData.length},methods:{changePageEvent:function(){},handleEdit:function(e){this.currentEdit=o({},e.row),this.currentEditIndex=e.$index,this.dialogFormVisible=!0},handleDelete:function(e){var t=this;this.$confirm("确认删除？",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.tableData.splice(e.$index,1),t.$message({message:"删除成功",type:"success"})})).catch((function(e){}))},handleNext:function(){},handlePrev:function(){},handleConfirm:function(e){this.tableData[this.currentEditIndex]=this.currentEdit,this.dialogFormVisible=!1}}},c=s,u=(n("31c9"),n("2877")),m=Object(u["a"])(c,a,r,!1,null,null,null);t["default"]=m.exports}}]);