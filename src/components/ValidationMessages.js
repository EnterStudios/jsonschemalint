//TODO: split this into two separate validation messages and validation errors component

function ValidationMessagesController() {
  // Only the "error" messages
  this.errorMessages = function(messages) {
    return messages && messages.filter(a => typeof a.dataPath !== 'undefined');
  };

  // Only "simple" messages
  this.simpleMessages = function(messages) {
    return messages && messages.filter(a => typeof a.dataPath === 'undefined');
  }
}

angular.module('app').component('validationMessages', {
  restrict: 'E',
  templateUrl: require('ngtemplate-loader!html-loader!./validation-messages.html'),
  controller: ValidationMessagesController,
  bindings: {
    messages: '='
  }
});