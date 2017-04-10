import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import DisplayErrors from './display-errors.component';
componentsModule.component('displayErrors', DisplayErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import OpenUrl from './open-url.directive';
componentsModule.directive('openUrl', OpenUrl);

export default componentsModule;