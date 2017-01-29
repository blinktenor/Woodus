angular.module('Woodus', [])
//.config(function($mdIconProvider) {
//    $mdIconProvider
//      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
//      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
//  })
.controller('mainController',
function ($scope) {

    $scope.options = [{creature : "Dracolord (Human Form)", sources : [{"Servant" : "Andreal"}, {"Servant" : "GreatDrak"}]},
{creature : "Dracolord (Dragon)", sources : [{"DracoLord (Human Form)" : "Divinegon"}]},
{creature : "LordDraco", sources : [{"DracoLord (Dragon)" : "Orligon"}]},
{creature : "Hargon", sources : [{"WhiteKing" : "MetalKing"}]},
{creature : "Sidoh", sources : [{"Jamirus" : "Rosevine"}]},
{creature : "Genosidoh", sources : [{"Sidoh" : "Titanis"}]},
{creature : "Baramos", sources : [{"Hargon" : "Orochi"}]},
{creature : "Zoma", sources : [{"DracoLord (Human Form)" : "Sidoh"},{"DracoLord (Dragon)" : "Sidoh"}]},
{creature : "Asurazoma", sources : [{"Zoma" : "PsychoPiz"}]},
{creature : "Pizzaro", sources : [{"Durran" : "Divinegon"}]},
{creature : "Psychopiz", sources : [{"Pizzaro" : "Esterk"}]},
{creature : "Esterk", sources : [{"Pizzaro" : "Gorago"},{"Pizzaro" : "Kingleo"}]},
{creature : "Mirudraas", sources : [{"Esterk" : "GoldSlime"}]},
{creature : "Mirudraas (Transformed)", sources : [{"Mirudraas" : "Orligon"}]},
{creature : "Mudou", sources : [{"Baramos" : "Gorago"}]},
{creature : "Deathmore", sources : [{"Mirudraas" : "Azurile"}, {"Mirudraas (Transformed)" : "Zoma"}, {"Zoma" : "Mirudraas"}, {"Zoma" : "Mirudraas (Transformed)"},{"Zoma" : "Azurile"}]},
{creature : "Deathmore (Transformed)", sources : [{"DeathMore" : "Titanis"},{"DeathMore" : "Armorpion"}]},
{creature : "Deathmore (Final Form)", sources : [{"Deathmore (Transformed)" : "DarkMate"},{"Deathmore (Transformed)" : "Mudou"},{"Deathmore (Transformed)" : "Poseidon"}]},
{creature : "Darkdrium", sources : [{"Deathmore (Final Form)" : "GranSlime"},{"Deathmore (Final Form)" : "AsuraZoma"},{"Deathmore (Transformed)" : "Watabou"}]},
{creature : "Orgodemir", sources : [{"PsychoPiz" : "Niterich"}]},
{creature : "Orgodemir (Transformed)", sources : [{"Orgodemir" : "LordDraco"}]}];

    $scope.creatureCache = {};

    function removeParentsAndDown(creature) {
        var parents = creature.parents;
        for (var a = 0; a < parents.length; a++) {
            removeParentsAndDown($scope.currentTree[parents[a][0]][creature.parents[a][1]]);
            $scope.currentTree[parents[a][0]][creature.parents[a][1]] = {};
        }
    }
    
    var totalCritters = 1;
    $scope.desiredCreature = [new Creature("Dracolord (Human Form)", -1, 0, 0)];
    
    function Creature(name, offspring) {
        this.name = name;
        this.offspring = offspring;
        this.found = false;
        this.options = getCreatureOptions(name);
        this.parents = [];
        this.addParent = function(parentName) {
          this.parents.push(new Creature(parentName, this));
        };
        this.bred = function () {
            if (this.found) {
                this.found = false;
            } else {
                this.parents = [];
                this.found = true;
            }
        };
    }
    
    function getCreatureOptions(creatureName) {
        if (!$scope.creatureCache[creatureName]) $scope.creatureCache[creatureName] = lookupCreature(creatureName);
        return $scope.creatureCache[creatureName];
    }
    
    function lookupCreature(creatureName) {
        for(var index in $scope.options) {
            if ($scope.options[index].creature === creatureName) {
                return $scope.options[index].sources;
            }
        }
    }
    
    $scope.addLeaf = function () {
        var critter = getRandomCritter();
        critter.addParent("Servant");
        totalCritters++;
    };
    
    function getRandomCritter() {
        var selected = Math.floor(Math.random() * (totalCritters - 1)) + 1;
        return getCritter($scope.desiredCreature[0], selected);
    }
    
    function getCritter(creature, selected) {
        if (selected === 1) {
            return creature;
        }
        for(var a = 0; a < creature.parents.length; a++) {
            selected--;
            var crit = getCritter(creature.parents[a], selected);
            if (typeof(crit) === 'object') {
                return crit;
            } else {
                selected = crit;
            }
        }
        return selected;
    }
    
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });
}
);