class HomeCtrl {
  constructor(AppConstants, stream, User) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.stream = stream;
    this._User = User;
  }


}

export default HomeCtrl;
