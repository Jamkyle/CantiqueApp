
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
        }
        var cantiques = [ {
    "id": 1,
    "title": "ANDRIANANAHARY MASINA INDRINDRA",
    "strophe": [
    //   {
    //   "sid": 1,
    //   "content": "",
    //   "trad": ""
    // },
      {
      "sid": 1,
      "content": "Andriananahary masina indrindra Ny anjelinao izay mitoetra aminao Mifamaly hoe : Masina indrindra Andriananahary, Telo Izay Iray.",
      "trad": "Seigneur Dieu Créateur, tu es Très Saint ! Tes anges qui t’entourent s’exclament àTour de rôles : Saint Très Saint, notre Dieu Créateur Qui est Trois en Un"
    },
      {
      "sid": 2,
      "content": "Andriananahary masina indrindra Na tsy hita aza izao ny voninahitrao ! Masina indrindra Hianao irery. Andriananahary, Telo Izay Iray. ",
      "trad": "Seigneur Dieu Créateur, tu es très Saint ! Même si nous ne voyons pas ta gloire ! Toi Seul es Très Saint Notre Dieu Créateur qui est Trois en Un "
    },
      {
      "sid": 3,
      "content": "Zava-manana aina samy mankalaza Sady manambara Anao Izay tompony izao; Hianao irery  no mitahy azy, Andriananahary Telo Izay Iray. Telo Izay Iray.",
      "trad": "Tous les êtres vivant te célèbrent Tous t’acclament comme leur Seigneur Toi seul les bénis Notre Dieu Créateur qui est Trois en Un "
    },
      {
      "sid": 4,
      "content": "Andriananahary feno hatsarana ! He, ny fitahianao izay mpanomponao, Tsara dia tsara ny omenao azy, Andriananahary Telo Izay Iray.",
      "trad": "Notre Dieu Créateur plein de bonté ! Tu donnes ta Grâce à tes Serviteurs ! Tu leur donnes ce qui est meilleur ! Notre Dieu Créateur qui est Trois en Un "
    },
      {
      "sid": 5,
      "content": "Andriananahary masina indrindra Izahay mpanomponao ta-hankalaza Anao Feno fahendrena, feno fiantrana Andriananahary, Telo Izay Iray. ",
      "trad": "Seigneur Dieu Créateur, tu es très Saint ! Tes serviteurs te célèbrent Tu es plein de sagesse, Tu es plein de pitié Notre Dieu Créateur qui est Trois en Un "
    }
      ]
    },
    {
      "id": 2,
      "title": "MISAORA AN'I ZANAHARY",
      "strophe": [
        {
        "sid": 1,
        "content": "Misaora an’i Zanahary Izao olona tontolo izao, Dia mankalaza Azy Fa anton’izao rehetra izao.",
        "trad": "Remerciez le Créateur Tous les hommes de la terre Et célébrez – Le Car c’est grâce à lui que ce monde existe"},
        {
        "sid": 2,
        "content": "Andriananahary masina indrindra Na tsy hita aza izao ny voninahitrao ! Masina indrindra Hianao irery. Andriananahary, Telo Izay Iray. ",
        "trad": "Seigneur Dieu Créateur, tu es très Saint ! Même si nous ne voyons pas ta gloire ! Toi Seul es Très Saint Notre Dieu Créateur qui est Trois en Un "},
        {
          "sid": 3,
          "content": "Dia ampitomboy ny sainay Hahalala ny teninao, Hahafantatra marina Izay sitraky ny fonao. ",
          "trad": "Augmente notre savoir Pour que l’on connaisse ta Parole, Pour que l’on connaisse la vérité, Ce que tu désires en Ton Cœur"
        }
        ]
      },
      {
        "id": 3,
        "title": "ISAORANA ANIE",
        "strophe": [
          {
          "sid": 1,
          "content": "Isaorana anie Andriamanitsika, Fa fitahiam-be, nomeny ho antsika, Hatreo am-bohoka, Ka mandrak’antitra Isika henika  ny soan’ny lanitra ",
          "trad": "Remercions le Seigneur notre Dieu Car il nous a donné  une grande bénédiction Du ventre de nos mères,  à nos vieux jours Nous sommes remplis  de la beauté du ciel "
        },
          {
          "sid": 2,
          "content": "Tsy mety tapitra, na lany ny hareny Tsy hita faritra  ny sisa izay omeny  Fanahy sambatra  sy fo miadana  no efa santatra  Izay ananana ",
          "trad": "Sa richesse est infinie et éternel Les restes qu’il donne  sont immenses Un esprit heureux  et un cœur en paix  Sont les prémices de ce que l’on héritera"
        },
          {
            "sid": 3,
            "content": "Ny Ray sy Zanaka sy ny Fanahy koa, Derain’ny masina  ho Tompo iray tokoa Andriamanitray,  be fahasoavana No anateranay izay fisaorana",
            "trad": "Les Saints célèbrent Le Père, le Fils et le Saint – Esprit Comme leur seul Seigneur Seigneur notre Dieu, plein de Grâce C’est à toi que nous amenons nos remerciements"
          }
          ]
        },
        {
          "id": 4,
          "title": "MAMY NY FITIANAO",
          "strophe": [
            {
            "sid": 1,
            "content": "Mamy ny fitianao, Ry Jehovah Tomponay ; Foinao ny Zanakao, Ho Mpanavotra anay Tsy mba misy tokinay Afa-tsy ny Zanakao. Ka misaotra Anao  izahay Noho ny fitianao.",
            "trad": "Ton Amour est Précieux, Jéhovah notre Seigneur Tu as donné ton Fils pour qu’il soit notre Sauveur Il n’y a qu’une chose en laquelle nous puissions avoir confiance, ton Fils Et nous te remercions pour ton Amour "
          },
            {
            "sid": 2,
            "content": "Mamy ny fitianao, Mahafaly fo tokoa ; Izahay avelanao Mba hibebaka  avokoa. Lasa lavitra izahay, Nefa notadiavinao ; Efa ratsy izahay Nefa tsy nafoinao.",
            "trad": "Ton Amour est Précieux, il réjouit notre cœur Tu nous permets de nous repentir On s’était éloigné de toi,  mais tu es venu nous chercher Nous étions mauvais,  mais tu ne nous as pas abandonné "
          },
            {
              "sid": 3,
              "content": "Mamy ny fitianao, Izay andraisanao anay Honina ao an-dapanao Raha  ho faty izahay ; Noho ny ratsy izay natao, Loza no anjaranay, Nefa namboaranao Paradisa izahay. ",
              "trad": "C’est avec ton Amour  Précieux que tu nous accueilles Pour qu’on demeure dans ton palais Lorsque nous quitterons cette terre ; A cause du mal que nous avons fait, le malheur était notre héritage Mais Tu nous as construis un Paradis"
            },
            {
            "sid": 4,
            "content": "Mamy re, ry Tomponay ! Izao fitianao izao. Ka indreto izahay Avy mba hisaotra Anao Raiso re izao saotra izao Fa fanati-tsitrapo ; Tsy mba mendrika ho Anao, Nefa vokatry ny fo. ",
            "trad": "Notre Seigneur, que ton Amour est Précieux Ainsi, nous venons te rendre grâce Reçois nos remerciements  Car ce sont des offrandes volontaires Tu mérites bien plus, mais ce sont des dons de joie de notre cœur "
          },
            ]
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
