'use strict';

angular.module('portfolioApp')
  .controller('ContactCtrl', function($scope) {
    $scope.sendMail = function(sub, body) {
      var link = 'mailto:l.dupont@hotmail.be' + '&subject='  + encodeURIComponent(sub) + '&body=' + encodeURIComponent(body);

      window.location.href = link;
      
      $scope.subject = '';
      $scope.content = '';
    };
  });
