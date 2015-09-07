
cantiqueService = (function () {
    var findById = function (id) {
            var deferred = $.Deferred();
            var cantique = null;
            var l = cantiques.length;
            for (var i = 0; i < l; i++) {
                if (parseInt(cantiques[i].id) == parseInt(id)) {
                    cantique = cantiques[i];
                    break;
                }
            }
            deferred.resolve(cantique);
            return deferred.promise();
        },

        findByTitle = function (searchKey) {
            var deferred = $.Deferred();
            var results = cantiques.filter(function (element) {
                return (element.title).toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByContent = function (searchKey) {
            var deferred = $.Deferred();
            var results = cantiques.filter(function (element) {
              var content;
              var items = element.strophe.map(function(item){
                content = getStrophe(item);
              });
              return content.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },
        findByNum = function (searchKey) {
            var deferred = $.Deferred();
            var results = cantiques.filter(function (element) {
                return (element.id).toString().indexOf(searchKey) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },
        cantiques;

        $.getJSON('App/json/data.json', function(data){cantiques = data});

        function getStrophe(element){
          return element.content
        }

    // The public API
    return {
        findById: findById,
        findByTitle: findByTitle,
        findByContent: findByContent,
        findByNum: findByNum
    };

}());
