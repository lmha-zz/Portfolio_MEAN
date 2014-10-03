myResume.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		title: "Lisa May Ha",
		templateUrl: '/partials/resume.html',
	})
	.when('/projects',
	{
		title: "Portfolio",
		templateUrl: '/partials/projects.html'
	})
	$routeProvider.otherwise({'redirectTo': "/"});
})

myResume.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);