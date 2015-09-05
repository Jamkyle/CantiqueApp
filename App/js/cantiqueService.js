cantiqueService = (function () {


    var findById = function (id) {
            var deferred = $.Deferred();
            var cantique = null;
            var l = cantiques.length;
            for (var i = 0; i < l; i++) {
              console.log(cantiques[i].id == parseInt(id));
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
                return (element.content).toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
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


       cantiques = [
            {"id": 813, "title": "Tia zaza",
            "content": "Tia zaza tia zaza ny jesosy nay",
            "trad": "Voici le jour que Dieu a créer"
          },
            {"id": 224, "title": "Tafavory izahay",
             "content": "Tafavory izahay, bla bla bla bla",
              "trad": "Voici le jour que Dieu a créer"
            },
            {"id": 175, "title": "Avia fanahy masina o",
             "content": "Avia fanahy masina o, aminay",
              "trad": "Voici le jour que Dieu a créer"
            }
       ];

    // The public API
    return {
        findById: findById,
        findByTitle: findByTitle,
        findByContent: findByContent,
        findByNum: findByNum
    };

}());
