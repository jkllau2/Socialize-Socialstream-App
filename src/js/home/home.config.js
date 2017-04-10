function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve: {
    	stream: function(Stream) {
    		return Stream.getStream().then(
    			(stream) => stream,
    			(err) => console.log('error in home ' + err)
    		);
    	}
    }
  });

};

export default HomeConfig;
