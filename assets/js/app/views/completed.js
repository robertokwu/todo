/*
 * Author  : Robert Okwu
 */
 
 define(["jquery","underscore","backbone","text!tmpl/completedTask.html",'modules/task'],function($,_,Backbone,CompleteHtml,Task){
	 var TaskView = Backbone.View.extend({
		 initialize:function(){
			 
		 },
		 render:function(model){
			 var _model = model;
			 var _template =_.template( $("#completedTaskTmpl").html());
			 var _vars = {id:_model.id, title: _model.title, description:_model.description};
			 var _html = _template(_vars);
			 $("#completedTasksBody").prepend(_html);
		 }
	 });
	 
	 var CompletedView = Backbone.View.extend({
		 el:$("body"),
		 initialize:function(){
			 this.views = null;
			 this.taskIds = [];
			 $("body").append(CompleteHtml);
		 },
		 render:function(models){
			 var _template = $("#completedTasksTmpl").html();
			 $("#wrapper").html(_.template(_template));
			 this.views = [];
			 for(var i = 0; i < models.length; i++){
				 this.views[i] = new TaskView();
				 this.views[i].render(models[i].toJSON());
			 }
		 },
		 events:{
			 "click #completedTaskCreate":'newTask',
			 "click .completedTasks":'selectTask',
			 "click #completedTaskDelete":"deleteTasks"
		 },
		 newTask:function(){
			 window.location.hash = "/newtask";
		 },
		 selectTask:function(e){
			 var _targetId = e.currentTarget.id;
			 if(this.findById(_targetId)){
				this.taskIds = this.deselectTask(_targetId);
				$("#"+_targetId).removeClass("selected");
			 }
			 else{
				 this.taskIds.push(_targetId);
				 $("#"+_targetId).addClass("selected");
			 }
			
		 },
		 findById:function(id){
			 var _found= false;
			 for(var i=0 ; i < this.taskIds.length;i++){
				 if(this.taskIds[i] == id){
					 _found = true;
					 break;
				 }else
					 _found = false;
			 }
			 return _found;
		 },
		 deselectTask:function(id){
			 var _newArray = [];
			 for(var i = 0; i < this.taskIds.length;i++){
				 
				 if(this.taskIds[i] == id){
					 delete this.taskIds[i];
				 }else{
					 _newArray.push(this.taskIds[i]);
				 }
					 
			 }
			 return _newArray;
		 },
		 deleteTasks:function(){
			 if(this.taskIds.length > 0){
				 for(var i = 0; i < this.taskIds.length;i++){
					 Task._delete(this.taskIds[i]);
				 }
				 delete this.taskIds;
				 this.taskIds = [];
			 }
			if(!Task.completedCount() > 0){
				window.location.hash = "/newtasks";
			}else{
				this.render(Task.completed());
			}
				
		 }
	 });
	 
	 return new CompletedView();
	 
 });