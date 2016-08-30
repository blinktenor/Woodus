var Woodus = angular.module('Woodus', []);

function mainController($scope, $http) {

//    $scope.monsterData = [{creature: "Dracolord (Human Form)", sources: [{"Servant": ["Andreal", "GreatDrak"]}]},
//        {creature: "Rayburn", sources: [{"LizardMan":["WingSlime","Trumpeter","MadCat","FaceTree"]},{"Any Dragon":["MadCondor"]}]}];
//    ,
//        {creature: "Dracolord (Dragon)", sources: [{"DracoLord (Human Form)": "Divinegon"}]},
//        {creature: "LordDraco", sources: [{"DracoLord (Dragon)": "Orligon"}]},
//        {creature: "Hargon", sources: [{"WhiteKing": "MetalKing"}]},
//        {creature: "Sidoh", sources: [{"Jamirus": "Rosevine"}]},
//        {creature: "Genosidoh", sources: [{"Sidoh": "Titanis"}]},
//        {creature: "Baramos", sources: [{"Hargon": "Orochi"}]},
//        {creature: "Zoma", sources: [{"DracoLord (Human Form)": "Sidoh"}, {"DracoLord (Dragon)": "Sidoh"}]},
//        {creature: "Asurazoma", sources: [{"Zoma": "PsychoPiz"}]},
//        {creature: "Pizzaro", sources: [{"Durran": "Divinegon"}]},
//        {creature: "Psychopiz", sources: [{"Pizzaro": "Esterk"}]},
//        {creature: "Esterk", sources: [{"Pizzaro": "Gorago"}, {"Pizzaro": "Kingleo"}]},
//        {creature: "Mirudraas", sources: [{"Esterk": "GoldSlime"}]},
//        {creature: "Mirudraas (Transformed)", sources: [{"Mirudraas": "Orligon"}]},
//        {creature: "Mudou", sources: [{"Baramos": "Gorago"}]},
//        {creature: "Deathmore", sources: [{"Mirudraas": "Azurile"}, {"Mirudraas (Transformed)": "Zoma"}, {"Zoma": "Mirudraas"}, {"Zoma": "Mirudraas (Transformed)"}, {"Zoma": "Azurile"}]},
//        {creature: "Deathmore (Transformed)", sources: [{"DeathMore": "Titanis"}, {"DeathMore": "Armorpion"}]},
//        {creature: "Deathmore (Final Form)", sources: [{"Deathmore (Transformed)": "DarkMate"}, {"Deathmore (Transformed)": "Mudou"}, {"Deathmore (Transformed)": "Poseidon"}]},
//        {creature: "Darkdrium", sources: [{"Deathmore (Final Form)": "GranSlime"}, {"Deathmore (Final Form)": "AsuraZoma"}, {"Deathmore (Transformed)": "Watabou"}]},
//        {creature: "Orgodemir", sources: [{"PsychoPiz": "Niterich"}]},
//        {creature: "Orgodemir (Transformed)", sources: [{"Orgodemir": "LordDraco"}]}];

    $scope.currentTree = {"0":
                [
                    {
                        "level": 0,
                        "pos": 0,
                        "name": "DracoLord (Human)",
                        "offspring": -1,
                        "parents": [[1, 0], [1, 1]],
                        "found": false,
                        "options": []
                    }
                ],
        "1":
                [
                    {
                        "level": 1,
                        "pos": 0,
                        "name": "Servant",
                        "offspring": [1, 1],
                        "parents": [[2, 0], [2, 1]],
                        "found": false,
                        "options": []
                    },
                    {
                        "level": 1,
                        "pos": 1,
                        "name": "Great Drak",
                        "offspring": [1, 1],
                        "parents": [],
                        "found": true,
                        "options": []
                    }
                ],
        "2":
                [
                    {
                        "level": 2,
                        "pos": 0,
                        "name": "Skeletor",
                        "offspring": [2, 1],
                        "parents": [],
                        "found": true,
                        "options": []
                    },
                    {
                        "level": 2,
                        "pos": 1,
                        "name": "Skeletor",
                        "offspring": [2, 1],
                        "parents": [[3, 2], [3, 3]],
                        "found": false,
                        "options": []
                    },
                    {},
                    {}
                ],
        "3":
                [
                    {
                        "options": ["boneslave", "your mom"],
                        "optionData":[
                            {
                                "primary": "boneslave",
                                "mate": ["boneslave"]
                            },
                            {
                                "primary": "your mom",
                                "mate": ["your other mom", "your dad"]
                            }
                        ]
                    },
                    {},
                    {
                        "level": 3,
                        "pos": 2,
                        "name": "Boneslave",
                        "offspring": [3, 2],
                        "parents": [],
                        "found": true,
                        "options": []
                    },
                    {
                        "level": 3,
                        "pos": 3,
                        "name": "Boneslave",
                        "offspring": [3, 2],
                        "parents": [],
                        "found": true,
                        "options": []
                    },
                    {},
                    {},
                    {},
                    {}
                ]
    };

    $scope.selected;

    $scope.Math = window.Math;

    $scope.$watch('selected', function (oldValue, newValue) {
    });

    $scope.foundCreature = function (creature) {
        $scope.currentTree[creature.level][creature.pos].found = !creature.found;
        if (!creature.found)
        {
            console.log("already found, get rid of parents!");
            //get the parents
            //remove them and set them as {}
            removeParentsAndDown(creature);
            $scope.currentTree[creature.level][creature.pos].parents = [];
        } else
        {
            console.log("Not found, here are my parents!");
            //add selector for parents
        }
    };

    function removeParentsAndDown(creature) {
        var parents = creature.parents;
        for (var a = 0; a < parents.length; a++) {
            removeParentsAndDown($scope.currentTree[parents[a][0]][creature.parents[a][1]]);
            $scope.currentTree[parents[a][0]][creature.parents[a][1]] = {};
        }
    }
}
