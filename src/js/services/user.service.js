export default class User {
	constructor(JWT, AppConstants, $http, $state, $q, $window) {
		'ngInject';

		this._JWT = JWT;
		this._AppConstants = AppConstants;
		this._$http = $http;
		this._$state = $state;
		this._$q = $q;
		this._$window = $window;
		
		// object to store the user's prop
		this.current = null;
	}

	attemptAuth(type, credentials) {
		let route = (type === 'login') ? '/login' : '';
		return this._$http({
			url: this._AppConstants.authApi + '/users' + route,
			method: 'POST',
			data: { user: credentials }
		})
		.then(
			(res) => { 
				// store the JWT token
				this._JWT.save(res.data.user.token);

				// on success, store the user's info
				this.current = res.data.user; 
				return res;
			}
		);
	}

	logout() {
		this.current = null;
		this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
		this._$state.go('app.logout');
		this._$window.location.reload();
		console.log('logging off');
	}

	verifyAuth() {
		let deferred = this._$q.defer();

		// if JWT DNE
		if(!this._JWT.get()) {
			deferred.resolve(false);
			return deferred.promise;
		}

		// if JWT exist and user is set
		if(this.current) {
			deferred.resolve(true);

		} else {
			this._$http({
				url: this._AppConstants.authApi + '/user',
				method: 'GET',
			})
			.then(
				(res) => {
					this.current = res.data.user;
					deferred.resolve(true);
				},
				(err) => {
					this._JWT.destory();
					deferred.resolve(false);
				}
			);
		}
		return deferred.promise;
	}

	  ensureAuthIs(bool) {
	    let deferred = this._$q.defer();

	    this.verifyAuth().then((authValid) => {
	      // if it's the opposite, redirect home
	      if (authValid !== bool) {
	        this._$state.go('app.home');
	        deferred.resolve(false);
	      } else {
	        deferred.resolve(true);
	      }
	    })

    	return deferred.promise;
	}
}