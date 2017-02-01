angular.module('Woodus', ['ngMaterial'])
.controller('mainController',
function ($scope) {

    $scope.options = [{creature : "Dracolord (Human Form)", sources : [["Great Dragon","Demon-at-arms"]]},
        {creature : "Great Dragon", sources : [["Yabby","Drakularge"],["Wrecktor","Drakularge"],["Wormonger","Drakularge"],["Winky","Drakularge"],["Wild Slime","Drakularge"],["Wild Boarfish","Drakularge"],["Weedie","Drakularge"],["Weartiger","Drakularge"],["Weaken Beakon","Drakularge"],["Wax Murderer","Drakularge"],["Walking Corpse","Drakularge"],["Tyrantosaurus","Drakularge"],["Tyrantosaurus","Bjorn"],["Treeface","Drakularge"],["Teeny Sanguini X","Drakularge"],["Teeny Sanguini","Drakularge"],["Swarmtroop","Drakularge"],["Stump Chump","Drakularge"],["Stark Raven","Drakularge"],["Spitnik","Drakularge"],["Spiked Hare","Drakularge"],["Soulspawn","Drakularge"],["Snowmangler","Drakularge"],["Snowbird","Drakularge"],["Snapdragon","Drakularge"],["Snapdragon","Bjorn"],["Snail Slime","Drakularge"],["Slime X","Drakularge"],["Slime Stack","Drakularge"],["Slime Knight","Drakularge"],["Slime","Drakularge"],["Skipper","Drakularge"],["Skeleton X","Drakularge"],["Skeleton Soldier","Drakularge"],["Skeleton","Drakularge"],["Skelegon","Drakularge"],["Skelegon","Bjorn"],["Silvapithecus","Drakularge"],["She-slime","Drakularge"],["Shell Slime","Drakularge"],["Shadow","Drakularge"],["Seedy Weedie","Drakularge"],["See Urchin","Drakularge"],["Seasaur","Drakularge"],["Seasaur","Bjorn"],["Sea Dragon","Drakularge"],["Sea Dragon","Bjorn"],["Scorpion","Drakularge"],["Scissor Beatle","Drakularge"],["Satyr","Drakularge"],["Rubble Slime","Drakularge"],["Rotten Egg","Drakularge"],["Rockbomb","Drakularge"],["Robbin' Huddle","Drakularge"],["Restless Armour","Drakularge"],["Red Dragon","Drakularge"],["Red Dragon","Bjorn"],["Puppeteer","Drakularge"],["Powie Yowie","Drakularge"],["Platypunk","Drakularge"],["Pink Sanguini","Drakularge"],["Phantom Swordsman","Drakularge"],["Phantom Fencer","Drakularge"],["Paws","Drakularge"],["Pan Piper","Drakularge"],["Orc","Drakularge"],["Octavian Sentry","Drakularge"],["Notso Macho","Drakularge"],["Noble Gasbagon","Drakularge"],["Noble Gasbagon","Bjorn"],["Night Emperor","Drakularge"],["Nardragon","Drakularge"],["Nardragon","Bjorn"],["Mummy Boy","Drakularge"],["Muddy Hand","Drakularge"],["Mud Mannequin","Drakularge"],["Mottle Slime","Drakularge"],["Missing Lynx","Drakularge"],["Mischievous Mole","Drakularge"],["Mimic","Drakularge"],["Metal Slime Knight","Drakularge"],["Metal Slime","Drakularge"],["Metal Dragon","Drakularge"],["Metal Dragon","Bjorn"],["Merman","Drakularge"],["Mental Pitcher","Drakularge"],["Megalodon","Drakularge"],["Megalodon","Bjorn"],["Mecha-mynah","Drakularge"],["Maniacal Mole","Drakularge"],["Malevolamp","Drakularge"],["Magmalice","Drakularge"],["Magic Slime","Drakularge"],["Lump Wizard","Drakularge"],["Liquid Metal Slime","Drakularge"],["Lips","Drakularge"],["Lethal Armour","Drakularge"],["Lesser Demon","Drakularge"],["Komodo","Drakularge"],["Komodo","Bjorn"]]},
        {creature : "Demon-at-arms", sources : [["Yabby","Jamirus"],["Yabby","Boss Troll"],["Yabby","Archdemon"],["Wrecktor","Stark Raven"],["Wrecktor","Seedy Weedie"],["Wrecktor","Megalodon"],["Wrecktor","Maniacal Mole"],["Wrecktor","Living Statue"],["Wrecktor","King Cureslime"],["Wrecktor","Jamirus"],["Wrecktor","Heligator"],["Wrecktor","Gigantes"],["Wrecktor","Frou-frou"],["Wrecktor","Fright Knight"],["Wrecktor","Drakularge"],["Wrecktor","Dark Slime Knight"],["Wrecktor","Cross Bones"],["Wrecktor","Boss Troll"],["Wrecktor","Bjorn"],["Wrecktor","Archdemon"],["Wormonger","Jamirus"],["Wormonger","Boss Troll"],["Wormonger","Archdemon"],["Winky","Stark Raven"],["Winky","Seedy Weedie"],["Winky","Megalodon"],["Winky","Maniacal Mole"],["Winky","Living Statue"],["Winky","King Cureslime"],["Winky","Jamirus"],["Winky","Heligator"],["Winky","Gigantes"],["Winky","Frou-frou"],["Winky","Fright Knight"],["Winky","Drakularge"],["Winky","Dark Slime Knight"],["Winky","Cross Bones"],["Winky","Boss Troll"],["Winky","Bjorn"],["Winky","Archdemon"],["Wild Slime","Jamirus"],["Wild Slime","Boss Troll"],["Wild Slime","Archdemon"],["Wild Boarfish","Jamirus"],["Wild Boarfish","Boss Troll"],["Wild Boarfish","Archdemon"],["Wight King","Stark Raven	 	generic	Rank DecreaseWight King","Heligator	 	generic	Rank DecreaseWeedie","Jamirus"],["Weedie","Boss Troll"],["Weedie","Archdemon"],["Weartiger","Jamirus"],["Weartiger","Boss Troll"],["Weartiger","Archdemon"],["Weaken Beakon","Jamirus"],["Weaken Beakon","Boss Troll"],["Weaken Beakon","Archdemon"],["Wax Murderer","Jamirus"],["Wax Murderer","Boss Troll"],["Wax Murderer","Archdemon"],["Walking Corpse","Jamirus"],["Walking Corpse","Boss Troll"],["Walking Corpse","Archdemon"],["Wailin' Weed","Stark Raven"],["Wailin' Weed","Heligator"],["Ultra Slime","Living Statue"],["Tyrantosaurus","Jamirus"],["Tyrantosaurus","Boss Troll"],["Tyrantosaurus","Archdemon"],["Trode","Fright Knight	 	generic	Rank DecreaseTrode","Cross Bones	 	generic	Rank DecreaseTreeface","Jamirus"],["Treeface","Boss Troll"],["Treeface","Archdemon"],["Trauminator","Seedy Weedie	 	generic	Rank DecreaseTrauminator","King Cureslime	 	generic	Rank DecreaseTrauminator","Dark Slime Knight	 	generic	Rank DecreaseTrap Box","Seedy Weedie	 	generic	Rank DecreaseTrap Box","King Cureslime	 	generic	Rank DecreaseTrap Box","Dark Slime Knight	 	generic	Rank DecreaseTortured Soul","Stark Raven"],["Tortured Soul","Heligator"],["Thornella","Fright Knight"],["Thornella","Cross Bones"],["Teeny Sanguini X","Jamirus"],["Teeny Sanguini X","Boss Troll"],["Teeny Sanguini X","Archdemon"],["Teeny Sanguini","Jamirus"],["Teeny Sanguini","Boss Troll"],["Teeny Sanguini","Archdemon"],["Swarmtroop","Jamirus"],["Swarmtroop","Boss Troll"],["Swarmtroop","Archdemon"],["Stump Chump","Jamirus"],["Stump Chump","Boss Troll"],["Stump Chump","Archdemon"],["Stormsgate Citadel","Seedy Weedie"],["Stormsgate Citadel","King Cureslime"],["Stormsgate Citadel","Dark Slime Knight"],["Stark Raven","Skeleton XY"]]}
    ];
    
    $scope.skills = {"Dracolord (Human Form)": "Niflheim",
                     "Great Dragon":"Ice",
                     "Demon-at-arms":"Crack & Zam",
                     "Yabby":"Mage Aid"
                 };

    $scope.creatureCache = {};
    
    $scope.desiredCreature = [new Creature("Dracolord (Human Form)", -1, 0, 0)];
    
    function Creature(name, offspring) {
        this.name = name;
        this.offspring = offspring;
        this.found = false;
        this.options = getCreatureOptions(name);
        this.parents = [];
        this.parentOptions = getPedigreeList(this.options);
        this.parentHolder;
        this.pedigree;
        this.mate;
        this.addParent = function(parentName) {
          this.parents.push(new Creature(parentName, this));
        };
        this.newParents = function () {
            this.addParent(this.pedigree);
            var mates = this.mate.split(",");
            for (var a = 0; a < mates.length; a++) {
                this.addParent(mates[a]);
            }
        };
        this.bred = function () {
            if (this.found) {
                this.found = false;
            } else {
                this.parents = [];
                this.found = true;
            }
        };
        this.image = getImage(name);
        this.getCombinedSkills = function () {
            return getSkills(this.name, this.parents)
        };
        this.getMateOptions = function () {
            var mateOptions = [];
            for(var a = 0; a < this.options.length; a++) {
                if(this.options[a].indexOf(this.pedigree) > -1) {
                    var option = "";
                    for(var b = 0; b < this.options[a].length; b++) {
                        if (this.pedigree !== this.options[a][b]) {
                            if (option !== "") option += ",";
                            option += this.options[a][b];
                        }
                    }
                    mateOptions.push(option);
                }
            }
            return mateOptions;
        };
    }
    
    function getImage(name) {
        switch(name) {
            case "Dracolord (Human Form)":
                return "http://www.woodus.com/den/gallery/graphics/dqm5ds/monstericons/dracolord.png";
            case "Great Dragon":
                return "http://www.woodus.com/den/gallery/graphics/dqm5ds/monstericons/great_dragon.png";
            case "Yabby":
                return "http://www.woodus.com/den/gallery/graphics/dqm5ds/monstericons/yabby.png";
            case "Demon-at-arms":
                return "http://www.woodus.com/den/gallery/graphics/dqm5ds/monstericons/demon_at_arms.png";
            default:
                return;
        }
    }
    
    function getCreatureOptions(creatureName) {
        if (!$scope.creatureCache[creatureName]) $scope.creatureCache[creatureName] = lookupCreature(creatureName);
        return $scope.creatureCache[creatureName];
    }
    
    function getSkills(name, parents) {
        var skills = lookupSkills(name);
        for(var a = 0; a < parents.length; a++) {
            var addedSkill = getSkills(parents[a].name, parents[a].parents);
            if (addedSkill) {
                skills += ", " + addedSkill;
            }
        }
        return skills;
    }
    
    
    function lookupCreature(creatureName) {
        for(var index in $scope.options) {
            if ($scope.options[index].creature === creatureName) {
                return $scope.options[index].sources;
            }
        }
    }
    
    function lookupSkills(creatureName) {
        var skill = $scope.skills[creatureName];
        if (skill !== undefined) {
            return skill;
        }
    }

    $scope.formatParents = function(parents) {
        var formatter = parents[0];
        for(var a = 1; a < parents.length; a++) {
            formatter += " + " + parents[a];
        }
        return formatter;
    };
    
    function getPedigreeList(options) {
        var list = [];
        for (optionNum in options) {
            for (a = 0; a < options[optionNum].length; a++) {
                list.push(options[optionNum][a]);
            }
        }
        return filterParentList(list);
    }
    
    function filterParentList(parentList) {
        var seen = {};
        return parentList.filter(function(parent) {
            return seen[parent] ? false : (seen[parent] = true);
        });
    }
}
);