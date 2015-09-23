/*
 * Author  : Robert Okwu
 */

define(["jquery","underscore","backbone"],function($,_,Backbone){
	
	var Task = Backbone.Model.extend({
			defaults:{
				'id':null,
				'title':null,
				'description':null,
				'completed':false
			}
	});
	
	return Task;
});