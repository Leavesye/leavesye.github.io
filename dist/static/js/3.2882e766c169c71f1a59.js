webpackJsonp([3],{UcVG:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("vDDk"),a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("list-page",{attrs:{pc:e.pc}}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showEdit,expression:"showEdit"}],attrs:{id:"edit-dict"}},[i("el-form",{ref:"editForm",staticClass:"edit-form",attrs:{"label-position":"left","label-width":"100px",model:e.editForm,rules:e.rules}},[i("common-form",{attrs:{formConfig:e.formConfig,layoutConfig:e.layoutConfig,form:e.editForm}}),e._v(" "),i("el-row",{staticStyle:{"text-align":"center"}},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSave()}}},[e._v("确定")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleCloseEdit}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var s=function(e){i("zX0W")},o=i("vSla")(n.a,a,!1,s,"data-v-6a9a7792",null);t.default=o.exports},q8rg:function(e,t,i){"use strict";t.b=function(){return Object(n.a)({url:"/admin/menu/system/permission/buttons/108",method:"get"})},t.c=function(){return Object(n.a)({url:"/interface/projects/init",method:"get"})},t.a=function(e){return Object(n.a)({url:"/interface/projects",method:"get",params:e})};var n=i("vLgD");i("TIfe")},vDDk:function(e,t,i){"use strict";(function(e){var n=i("rVsN"),a=i.n(n),s=i("q8rg"),o=i("0xDb"),r=i("nFx2"),l=i("0j9R"),c=i("Y0Uy"),d=i.n(c),h=i("1fno");t.a={name:"api-project",components:{ListPage:r.a,CommonForm:l.a},data:function(){return{type:1,showEdit:!1,editLayerIndex:0,editForm:{id:"",tableName:"",field:"",fieldName:"",text:"",value:"",sort:""},layoutConfig:{xs:24,sm:24,md:24},formConfig:[{type:1,label:"项目名称",key:"name"},{type:3,label:"访问权限",key:"accessPermission",options:[]},{type:1,label:"生产根地址",key:"base_url_pro"},{type:1,label:"测试根地址",key:"base_url_test"},{type:2,label:"项目描述",key:"desc"},{type:1,label:"开发根地址",key:"base_url_dev"},{type:1,label:"项目版本",key:"sort"}],rules:{tableName:[{required:!0,message:"表名不能为空",trigger:"blur"}],field:[{required:!0,message:"列名不能为空",trigger:"blur"}],fieldName:[{required:!0,message:"列描述不能为空",trigger:"blur"}],text:[{required:!0,message:"字典文本值不能为空",trigger:"blur"}],value:[{required:!0,message:"字典值不能为空",trigger:"blur"}]},pc:{search:{form:{id:"",projectName:"",accessPermission:"",sort:"id",order:"desc",offset:0,limit:10,menuId:108},layoutConfig:{xs:24,sm:12,md:8},formConfig:[{type:1,label:"项目名称",key:"name"},{type:3,label:"访问权限",key:"permission",options:[]}],btns:[{text:"搜索",cb:this.handleSearch}]},functions:{checkList:["项目名称","项目描述","生产根地址","访问权限","项目版本"],handleExpandAll:this.handleExpandAll,rightBtns:[{text:"添加",icon:"el-icon-circle-plus",cb:this.handleAdd},{text:"编辑",icon:"el-icon-edit",cb:this.handleEdit},{text:"删除",icon:"el-icon-delete",cb:this.handleDelete}]},table:{dataList:[],handleSelectRow:this.handleSelectRow,selectedRow:null,isLoading:!1,expandAll:!1,thead:[{text:"项目id",field:"id",hidden:!0},{text:"项目名称",field:"name",hidden:!1},{text:"项目描述",field:"desc",hidden:!1},{text:"生产根地址",field:"base_url_pro",hidden:!1},{text:"测试根地址",field:"base_url_test",hidden:!0},{text:"开发根地址",field:"base_url_dev",hidden:!0},{text:"访问权限",field:"permission",hidden:!1},{text:"项目版本",field:"version",hidden:!1}]},pagination:{pageSizes:[10,25,50,100],pageSize:10,handleSizeChange:this.handleSizeChange,handleCurrentChange:this.handleCurrentChange,currentPage:1,total:0}}}},watch:{"pc.functions.checkList":function(e){d.a.each(this.pc.table.thead,function(t){var i=!1;d.a.each(e,function(e){t.text==e&&(t.hidden=!1,i=!0)}),i||(t.hidden=!0)})}},methods:{handleSearch:function(){this.loadData()},handleSizeChange:function(e){this.pc.search.form.limit=e,this.pc.search.form.offset=this.pc.search.form.limit*(this.pc.pagination.currentPage-1),this.loadData()},handleCurrentChange:function(e){this.pc.pagination.currentPage=e,this.pc.search.form.offset=this.pc.search.form.limit*(this.pc.pagination.currentPage-1),this.loadData()},handleSelectRow:function(e){this.pc.table.selectedRow=e,console.log(e)},handleExpandAll:function(){this.pc.table.expandAll=!this.pc.table.expandAll},handleAdd:function(){this.type=1,this.showEdit=!0,this.editLayerIndex=h.a.open({type:1,title:"添加字典",area:["800px","500px"],content:e("#edit-dict")})},handleEdit:function(){var t=this;if(!this.pc.table.selectedRow)return this.$message({type:"warning",message:"请先选中表格中的某一记录！"}),!1;this.type=2,this.showEdit=!0,this.editForm.id=this.pc.table.selectedRow.id,getDictById(this.editForm.id).then(function(e){var i=e.dictInfo;t.editForm.tableName=i.tableName,t.editForm.fieldName=i.fieldName,t.editForm.field=i.field,t.editForm.text=i.text,t.editForm.sort=i.sort,t.editForm.value=i.value}),this.editLayerIndex=h.a.open({type:1,title:"编辑字典",area:["800px","500px"],content:e("#edit-dict")})},resetEditForm:function(){this.editForm={id:"",tableName:"",field:"",fieldName:"",text:"",value:"",sort:""}},handleCloseEdit:function(){h.a.close(this.editLayerIndex)},handleSave:function(){var e=this;this.$refs.editForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;1==e.type?create(e.editForm).then(function(){e.$message({type:"success",message:"添加成功"}),e.handleCloseEdit(),e.loadData(),e.resetEditForm()}):update(e.editForm).then(function(){e.$message({type:"success",message:"修改成功"}),e.resetEditForm(),e.handleCloseEdit(),e.loadData()})})},handleDelete:function(){var e=this;if(!this.pc.table.selectedRow)return this.$message({type:"warning",message:"请先选中表格中的某一记录！"}),!1;this.$confirm("确定要删除吗?","信息",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){del(e.pc.table.selectedRow.id).then(function(){e.loadData(),e.$message({type:"success",message:"删除成功!"})})}).catch(function(){})},loadData:function(){var e=this;return this.pc.table.isLoading=!0,Object(s.a)(this.pc.search.form).then(function(t){console.log(t);var i=t;e.pc.table.dataList=Object(o.a)(i.rows),e.pc.pagination.total=i.total,e.pc.table.isLoading=!1}).catch(function(t){console.log(t),e.pc.table.isLoading=!1})},getOptions:function(){var e=this;return Object(s.c)().then(function(t){e.pc.search.formConfig[1].options=t.accessPermissionSelect}).catch(function(e){console.log(e)})},getBtns:function(){var e=this;return Object(s.b)().then(function(t){var i=t.data,n=d.a.clone(e.pc.functions.rightBtns);d.a.each(i,function(e){d.a.find(n,function(t){return t.text===e.name})||n.push({text:e.name,icon:e.icon,cb:function(){}})}),n=d.a.filter(n,function(e){return d.a.find(i,function(t){return e.text==t.name})}),e.pc.functions.rightBtns=n})}},mounted:function(){a.a.all([this.loadData(),this.getOptions(),this.getBtns()])}}}).call(t,i("L7Pj"))},wEKl:function(e,t,i){(e.exports=i("BkJT")(!1)).push([e.i,"\n.edit-form[data-v-6a9a7792] {\n  margin: 20px;\n}\n",""])},zX0W:function(e,t,i){var n=i("wEKl");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("8bSs")("62c42b93",n,!0)}});