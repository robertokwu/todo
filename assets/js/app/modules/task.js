/*
 * Author  : Robert Okwu
 */

define(['jquery','underscore','backbone','models/task','collections/tasks'],function($,_,Backbone,Task,Tasks){
	
	var TaskModule = (function(){
		
		var _collection = null;
		 function _init(){
			 _collection = new Tasks();
		 }
		 function _completed(){
			 return _collection.where({completed:true});
		 }
		 function _newTasks(){
			// console.log(_collection.where({completed:false}));
			 return _collection.where({completed:false});
		 }
		 function _completedCount(){
			 return _collection.where({completed:true}).length;
		 }
		 function _newTaskCount(){
			 return _collection.where({completed:false}).length;
		 }
		 function _add(parameters){
			 var _id = _.uniqueId('task_');
			 _collection.add({
				 id:_id,
				 title:parameters.title,
				 description:parameters.description,
				 completed:false
			 });
		 }
		 function _delete(id){
			var _model =  _collection.remove(id);
		 }
		 function _complete(id){
			 var _model = _collection.remove(id);
			 _collection.add({
				 id:_model.get("id"),
				 title:_model.get("title"),
				 description:_model.get("description"),
				 completed:true
			 });
		 }
		 return{
			 init:_init,
			 completed:_completed,
			 newTasks:_newTasks,
			 completedCount:_completedCount,
			 newTaskCount:_newTaskCount,
			 collection:_collection,
			 add:_add,
			 _delete:_delete,
			 complete:_complete
		 };
	})(Task,Tasks,$,_,Backbone);
	
	TaskModule.init();
	return TaskModule;
});