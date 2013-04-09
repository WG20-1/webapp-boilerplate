require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery',
		'handlebars': 'vendor/handlebars/handlebars',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone'
	}
});

require(['views/app'], function(AppView) {
	new AppView();
});