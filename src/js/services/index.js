import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// UserService
import UserService from './user.service';
servicesModule.service('User', UserService);

// JWT Service
import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

// Stream Service
import StreamService from './stream.service';
servicesModule.service('Stream', StreamService);

export default servicesModule;