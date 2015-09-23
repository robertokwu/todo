/*
 * Author  : Robert Okwu
 */

define(['jquery','underscore','backbone','models/task'],function($,_,Backbone,Task){
	
	var Tasks = Backbone.Collection.extend({
		model:Task
	});
	
	return Tasks;
});