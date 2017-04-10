export default class Stream {
	constructor (AppConstants, $http) {
		'ngInject';

		this._AppConstants = AppConstants;
		this._$http = $http;
	}

	getStream() {
		return this._$http({
			url: this._AppConstants.streamApi,
			method: 'JSONP'
		}).then((res) => res.data);
	}
}