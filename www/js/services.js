var service = angular.module('MyApp.services', []);

module.factory('VaderService', function() {
    var VaderClass = function(padawan) {
        this.name = padawan;
        this.speak = function () {
            return 'Join the dark side ' + this.name;
        }
    }

    return VaderClass;
});