app.directive('history', function (HistoryFactory) {

    HistoryFactory.loadHistory();

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'js/directives/history.html',
        link: function (scope) {
            scope.history = HistoryFactory.getHistory();
            var history = scope.history;

            scope.saveList = [];

            scope.addToSaveList = function(req) {
            	// var copy = _.cloneDeep(req);
            	// console.log("request to save", copy);
            	// scope.saveList.push(copy);

            	var idx = scope.saveList.indexOf(req);

            	if (idx > -1) {
            		scope.saveList.splice(idx, 1);
            	} else {
            		scope.saveList.push(req);
            	}

            	console.log("saveList", scope.saveList);
            	console.log("saveListlength", scope.saveList.length);
            }

            
            scope.saveToFile = function() {
            	var saveList = scope.saveList;

            	if (saveList.length === 0) {
            		saveList = scope.history;
            	}

            	saveList = angular.toJson(saveList, true);	// setting true option  prettifies the json
            	var blob = new Blob([saveList], { type: "application/json; charset=utf-8;" });	// create json array data

            	var downloadLink = angular.element('<a></a>');

                downloadLink.attr('href', window.URL.createObjectURL(blob));
                downloadLink.attr('download', 'history.json');
				downloadLink[0].click();
            }
            
        }
    };

});