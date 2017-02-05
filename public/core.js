angular.module('Woodus', ['ngMaterial'])
        .controller('mainController',
                function ($scope) {
                       
                    function init() {
                        reorderUpgradedSkills();
                    }
                    
                    function reorderUpgradedSkills() {
                        for(var uberSkill in $scope.skillUpgrades) {
                            var uberSkillArrays = $scope.skillUpgrades[uberSkill]; 
                            for(var index = 0; index < uberSkillArrays.length; index++) {
                                for(var singleArrayIndex = 0; singleArrayIndex < uberSkillArrays[index].length; singleArrayIndex++) {
                                    var skillName = uberSkillArrays[index][singleArrayIndex];
                                    var skillArray = uberSkillArrays[index].slice();
                                    skillArray.splice(skillArray.indexOf(skillName), 1);
                                    var skillJson = {};
                                    skillName = skillName.replace(/\s\d/g , '');
                                    if ($scope.skillLookup[skillName] !== undefined) {
                                        skillJson = $scope.skillLookup[skillName];
                                    }
                                    var uberSkillArray = [];
                                    if (skillJson[uberSkill] !== undefined) {
                                        uberSkillArray = skillJson[uberSkill];
                                    }
                                    uberSkillArray.push(skillArray);
                                    skillJson[uberSkill] = uberSkillArray;
                                    $scope.skillLookup[skillName] = skillJson;
                                }
                            }
                        }
                    }
                    
                    $scope.skillLookup = {};
                    
                    $scope.starters = ["Dracolord (Human Form)"];
                    
                    $scope.options = [{creature: "Dracolord (Human Form)", sources: [["Great Dragon", "Demon-at-arms"]]},
                        {creature: "Great Dragon", sources: [["Yabby", "Drakularge"], ["Wrecktor", "Drakularge"], ["Wormonger", "Drakularge"], ["Winky", "Drakularge"], ["Wild Slime", "Drakularge"], ["Wild Boarfish", "Drakularge"], ["Weedie", "Drakularge"], ["Weartiger", "Drakularge"], ["Weaken Beakon", "Drakularge"], ["Wax Murderer", "Drakularge"], ["Walking Corpse", "Drakularge"], ["Tyrantosaurus", "Drakularge"], ["Tyrantosaurus", "Bjorn"], ["Treeface", "Drakularge"], ["Teeny Sanguini X", "Drakularge"], ["Teeny Sanguini", "Drakularge"], ["Swarmtroop", "Drakularge"], ["Stump Chump", "Drakularge"], ["Stark Raven", "Drakularge"], ["Spitnik", "Drakularge"], ["Spiked Hare", "Drakularge"], ["Soulspawn", "Drakularge"], ["Snowmangler", "Drakularge"], ["Snowbird", "Drakularge"], ["Snapdragon", "Drakularge"], ["Snapdragon", "Bjorn"], ["Snail Slime", "Drakularge"], ["Slime X", "Drakularge"], ["Slime Stack", "Drakularge"], ["Slime Knight", "Drakularge"], ["Slime", "Drakularge"], ["Skipper", "Drakularge"], ["Skeleton X", "Drakularge"], ["Skeleton Soldier", "Drakularge"], ["Skeleton", "Drakularge"], ["Skelegon", "Drakularge"], ["Skelegon", "Bjorn"], ["Silvapithecus", "Drakularge"], ["She-slime", "Drakularge"], ["Shell Slime", "Drakularge"], ["Shadow", "Drakularge"], ["Seedy Weedie", "Drakularge"], ["See Urchin", "Drakularge"], ["Seasaur", "Drakularge"], ["Seasaur", "Bjorn"], ["Sea Dragon", "Drakularge"], ["Sea Dragon", "Bjorn"], ["Scorpion", "Drakularge"], ["Scissor Beatle", "Drakularge"], ["Satyr", "Drakularge"], ["Rubble Slime", "Drakularge"], ["Rotten Egg", "Drakularge"], ["Rockbomb", "Drakularge"], ["Robbin' Huddle", "Drakularge"], ["Restless Armour", "Drakularge"], ["Red Dragon", "Drakularge"], ["Red Dragon", "Bjorn"], ["Puppeteer", "Drakularge"], ["Powie Yowie", "Drakularge"], ["Platypunk", "Drakularge"], ["Pink Sanguini", "Drakularge"], ["Phantom Swordsman", "Drakularge"], ["Phantom Fencer", "Drakularge"], ["Paws", "Drakularge"], ["Pan Piper", "Drakularge"], ["Orc", "Drakularge"], ["Octavian Sentry", "Drakularge"], ["Notso Macho", "Drakularge"], ["Noble Gasbagon", "Drakularge"], ["Noble Gasbagon", "Bjorn"], ["Night Emperor", "Drakularge"], ["Nardragon", "Drakularge"], ["Nardragon", "Bjorn"], ["Mummy Boy", "Drakularge"], ["Muddy Hand", "Drakularge"], ["Mud Mannequin", "Drakularge"], ["Mottle Slime", "Drakularge"], ["Missing Lynx", "Drakularge"], ["Mischievous Mole", "Drakularge"], ["Mimic", "Drakularge"], ["Metal Slime Knight", "Drakularge"], ["Metal Slime", "Drakularge"], ["Metal Dragon", "Drakularge"], ["Metal Dragon", "Bjorn"], ["Merman", "Drakularge"], ["Mental Pitcher", "Drakularge"], ["Megalodon", "Drakularge"], ["Megalodon", "Bjorn"], ["Mecha-mynah", "Drakularge"], ["Maniacal Mole", "Drakularge"], ["Malevolamp", "Drakularge"], ["Magmalice", "Drakularge"], ["Magic Slime", "Drakularge"], ["Lump Wizard", "Drakularge"], ["Liquid Metal Slime", "Drakularge"], ["Lips", "Drakularge"], ["Lethal Armour", "Drakularge"], ["Lesser Demon", "Drakularge"], ["Komodo", "Drakularge"], ["Komodo", "Bjorn"]]},
                        {creature: "Demon-at-arms", sources: [["Yabby", "Jamirus"], ["Yabby", "Boss Troll"], ["Yabby", "Archdemon"], ["Wrecktor", "Stark Raven"], ["Wrecktor", "Seedy Weedie"], ["Wrecktor", "Megalodon"], ["Wrecktor", "Maniacal Mole"], ["Wrecktor", "Living Statue"], ["Wrecktor", "King Cureslime"], ["Wrecktor", "Jamirus"], ["Wrecktor", "Heligator"], ["Wrecktor", "Gigantes"], ["Wrecktor", "Frou-frou"], ["Wrecktor", "Fright Knight"], ["Wrecktor", "Drakularge"], ["Wrecktor", "Dark Slime Knight"], ["Wrecktor", "Cross Bones"], ["Wrecktor", "Boss Troll"], ["Wrecktor", "Bjorn"], ["Wrecktor", "Archdemon"], ["Wormonger", "Jamirus"], ["Wormonger", "Boss Troll"], ["Wormonger", "Archdemon"], ["Winky", "Stark Raven"], ["Winky", "Seedy Weedie"], ["Winky", "Megalodon"], ["Winky", "Maniacal Mole"], ["Winky", "Living Statue"], ["Winky", "King Cureslime"], ["Winky", "Jamirus"], ["Winky", "Heligator"], ["Winky", "Gigantes"], ["Winky", "Frou-frou"], ["Winky", "Fright Knight"], ["Winky", "Drakularge"], ["Winky", "Dark Slime Knight"], ["Winky", "Cross Bones"], ["Winky", "Boss Troll"], ["Winky", "Bjorn"], ["Winky", "Archdemon"], ["Wild Slime", "Jamirus"], ["Wild Slime", "Boss Troll"], ["Wild Slime", "Archdemon"], ["Wild Boarfish", "Jamirus"], ["Wild Boarfish", "Boss Troll"], ["Wild Boarfish", "Archdemon"], ["Wight King", "Stark Raven	 	generic	Rank DecreaseWight King", "Heligator	 	generic	Rank DecreaseWeedie", "Jamirus"], ["Weedie", "Boss Troll"], ["Weedie", "Archdemon"], ["Weartiger", "Jamirus"], ["Weartiger", "Boss Troll"], ["Weartiger", "Archdemon"], ["Weaken Beakon", "Jamirus"], ["Weaken Beakon", "Boss Troll"], ["Weaken Beakon", "Archdemon"], ["Wax Murderer", "Jamirus"], ["Wax Murderer", "Boss Troll"], ["Wax Murderer", "Archdemon"], ["Walking Corpse", "Jamirus"], ["Walking Corpse", "Boss Troll"], ["Walking Corpse", "Archdemon"], ["Wailin' Weed", "Stark Raven"], ["Wailin' Weed", "Heligator"], ["Ultra Slime", "Living Statue"], ["Tyrantosaurus", "Jamirus"], ["Tyrantosaurus", "Boss Troll"], ["Tyrantosaurus", "Archdemon"], ["Trode", "Fright Knight	 	generic	Rank DecreaseTrode", "Cross Bones	 	generic	Rank DecreaseTreeface", "Jamirus"], ["Treeface", "Boss Troll"], ["Treeface", "Archdemon"], ["Trauminator", "Seedy Weedie	 	generic	Rank DecreaseTrauminator", "King Cureslime	 	generic	Rank DecreaseTrauminator", "Dark Slime Knight	 	generic	Rank DecreaseTrap Box", "Seedy Weedie	 	generic	Rank DecreaseTrap Box", "King Cureslime	 	generic	Rank DecreaseTrap Box", "Dark Slime Knight	 	generic	Rank DecreaseTortured Soul", "Stark Raven"], ["Tortured Soul", "Heligator"], ["Thornella", "Fright Knight"], ["Thornella", "Cross Bones"], ["Teeny Sanguini X", "Jamirus"], ["Teeny Sanguini X", "Boss Troll"], ["Teeny Sanguini X", "Archdemon"], ["Teeny Sanguini", "Jamirus"], ["Teeny Sanguini", "Boss Troll"], ["Teeny Sanguini", "Archdemon"], ["Swarmtroop", "Jamirus"], ["Swarmtroop", "Boss Troll"], ["Swarmtroop", "Archdemon"], ["Stump Chump", "Jamirus"], ["Stump Chump", "Boss Troll"], ["Stump Chump", "Archdemon"], ["Stormsgate Citadel", "Seedy Weedie"], ["Stormsgate Citadel", "King Cureslime"], ["Stormsgate Citadel", "Dark Slime Knight"], ["Stark Raven", "Skeleton XY"]]}
                    ];

                    $scope.creatureCache = {};
                    $scope.desiredCreatureSwitch;
                    $scope.desiredCreature = [];
                    
                    $scope.addDesired = function() {
                        $scope.desiredCreature.push(new Creature($scope.desiredCreatureSwitch));
                    };
                    
                    $scope.removeDesired = function(creature) {
                        if ($scope.desiredCreature.indexOf(creature) > -1) {
                            $scope.desiredCreature.splice($scope.desiredCreature.indexOf(creature), 1);
                        }
                    };
                    
                    $scope.formatSkills = function (skills) {
                      return skills.join(", ");
                    };
                    
                    function Creature(name) {
                        this.name = name;
                        this.found = false;
                        this.options = getCreatureOptions(name);
                        this.parents = [];
                        this.parentOptions = getPedigreeList(this.options);
                        this.parentHolder;
                        this.pedigree;
                        this.mate;
                        this.addParent = function (parentName) {
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
                            return addUpgradedSkills(getSkills(this.name, this.parents));
                        };
                        this.getMateOptions = function () {
                            var mateOptions = [];
                            for (var a = 0; a < this.options.length; a++) {
                                if (this.options[a].indexOf(this.pedigree) > -1) {
                                    //TODO use splice and index of to make this list instead
                                    var option = "";
                                    for (var b = 0; b < this.options[a].length; b++) {
                                        if (this.pedigree !== this.options[a][b]) {
                                            if (option !== "")
                                                option += ",";
                                            option += this.options[a][b];
                                        }
                                    }
                                    mateOptions.push(option);
                                }
                            }
                            return mateOptions;
                        };
                    }
                    
                    function addUpgradedSkills(skillArray) {
                        for(var a = 0; a < skillArray.length; a++) {
                            var possibleUpgrades = $scope.skillLookup[skillArray[a]];
                            for(var uberSkill in possibleUpgrades) {
                                if(checkSkillArrayForMatch(possibleUpgrades[uberSkill], skillArray) && skillArray.indexOf(uberSkill) < 0) {
                                    skillArray.push(uberSkill);
                                }
                            }
                        }
                        return skillArray;
                    }
                    
                    function checkSkillArrayForMatch(arrayToCheck, currentSkills) {
                        for (var a = 0; a < arrayToCheck.length; a++) {
                            var found = 0;
                            for (var b = 0; b < arrayToCheck[a].length; b++) {
                                for(var c = 0; c < currentSkills.length; c++) {
                                    if(arrayToCheck[a][b].indexOf(currentSkills[c]) > -1) {
                                        found++;
                                    }
                                }
                            }
                            if (found === arrayToCheck[a].length) {
                                return true;
                            }
                        }
                        return false;
                    }

                    function getImage(name) {
                        switch (name) {
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
                        if (!$scope.creatureCache[creatureName])
                            $scope.creatureCache[creatureName] = lookupCreature(creatureName);
                        return $scope.creatureCache[creatureName];
                    }

                    function getSkills(name, parents) {
                        var skills = [lookupSkills(name)];
                        for (var a = 0; a < parents.length; a++) {
                            var addedSkill = getSkills(parents[a].name, parents[a].parents);
                            if (addedSkill.length > 0) {
                                skills = skills.concat(addedSkill);
                            }
                        }
                        return skills;
                    }


                    function lookupCreature(creatureName) {
                        for (var index in $scope.options) {
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

                    $scope.formatParents = function (parents) {
                        var formatter = parents[0];
                        for (var a = 1; a < parents.length; a++) {
                            formatter += " + " + parents[a];
                        }
                        return formatter;
                    };
                    function getPedigreeList(options) {
                        var list = [];
                        for (var optionNum in options) {
                            for (a = 0; a < options[optionNum].length; a++) {
                                list.push(options[optionNum][a]);
                            }
                        }
                        return filterParentList(list);
                    }

                    function filterParentList(parentList) {
                        var seen = {};
                        return parentList.filter(function (parent) {
                            return seen[parent] ? false : (seen[parent] = true);
                        });
                    }
                    
                    $scope.skills = {"Dracolord (Human Form)": "Niflheim",
                        "Great Dragon": "Frizz & Bang",
                        "Demon-at-arms": "Frizz & Zam",
                        "Yabby": "Mage Aid"
                    };

                    $scope.skillUpgrades = {"Über Dark Dynamiter": [["Frizz & Bang 3", "Frizz & Zam 3"],
                            ["Frizz & Bang 3", "Bang & Zam 3"],
                            ["Frizz & Bang 3", "Woosh & Zam 3"],
                            ["Frizz & Bang 3", "Crack & Zam 3"],
                            ["Frizz & Zam 3", "Bang & Woosh 3"],
                            ["Frizz & Zam 3", "Bang & Crack 3"],
                            ["Frizz & Zam 3", "Bang & Zap 3"],
                            ["Frizz & Zam 3", "Bang & Zam 3"],
                            ["Frizz & Bang 3", "Estark"],
                            ["Frizz & Woosh 3", "Bang & Zam 3"],
                            ["Frizz & Woosh 3", "Rhapthorne 2"],
                            ["Frizz & Zap 3", "Bang & Zam 3"],
                            ["Frizz & Zap 3", "Rhapthorne 2"],
                            ["Woosh & Zam 3", "Nimzo"],
                            ["Crack & Zam 3", "Nimzo"],
                            ["Frizz & Woosh 3", "Bang & Woosh 3", "Woosh & Zam 3"],
                            ["Frizz & Woosh 3", "Bang & Woosh 3", "Crack & Zam 3"],
                            ["Frizz & Woosh 3", "Bang & Crack 3", "Woosh & Zam 3"],
                            ["Frizz & Woosh 3", "Bang & Crack 3", "Crack & Zam 3"],
                            ["Frizz & Woosh 3", "Bang & Zap 3", "Woosh & Zam 3"],
                            ["Frizz & Woosh 3", "Bang & Zap 3", "Crack & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Woosh 3", "Woosh & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Woosh 3", "Crack & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Crack 3", "Woosh & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Crack 3", "Crack & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Zap 3", "Woosh & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Zap 3", "Crack & Zam 3"],
                            ["Bang & Zam 3", "Frizz & Sizz 3"],
                            ["Frizz & Bang 3", "Sizz & Zam 3"],
                            ["Sizz & Zam 3", "Ruin"],
                            ["Frizz & Woosh 3", "Bang & Crack 3", "Sizz & Zap 3"],
                            ["Frizz & Zam 3", "Bang & Woosh 3", "Crack & Sizz 3"]],
                        "Über Blessed Blizzardier": [["Frizz & Woosh 3", "Crack & Zap 3"],
                            ["Frizz & Zap 3", "Woosh & Crack 3"],
                            ["Bang & Woosh 3", "Crack & Zap 3"],
                            ["Bang & Crack 3", "Woosh & Zap 3"],
                            ["Bang & Zap 3", "Woosh & Crack 3"],
                            ["Woosh & Crack 3", "Crack & Zap 3"],
                            ["Woosh & Crack 3", "Woosh & Zap 3"],
                            ["Woosh & Zap 3", "Crack & Zap 3"],
                            ["Frizz & Zap 3", "Dhoulmagus"],
                            ["Frizz & Zap 3", "Rhapthorne"],
                            ["Bang & Zap 3", "Dhoulmagus"],
                            ["Bang & Zap 3", "Rhapthorne"],
                            ["Woosh & Crack 3", "Wulfspade 2"],
                            ["Woosh & Crack 3", "Dragovian Lord"],
                            ["Woosh & Zap 3", "Crack & Zam 3"],
                            ["Woosh & Zap 3", "Diamagon 2"],
                            ["Woosh & Zap 3", "Estark"],
                            ["Woosh & Zam 3", "Crack & Zap 3"],
                            ["Frizz & Woosh 3", "Frizz & Zap 3", "Bang & Crack 3"],
                            ["Frizz & Woosh 3", "Bang & Crack 3", "Bang & Zap 3"],
                            ["Frizz & Zap 3", "Bang & Woosh 3", "Frizz & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Crack 3", "Woosh & Zam 3"],
                            ["Bang & Woosh 3", "Bang & Crack 3", "Bang & Zap 3"],
                            ["Bang & Crack 3", "Bang & Zap 3", "Woosh & Zam 3"],
                            ["Frizz & Woosh 3", "Frizz & Zap 3", "Crack & Zam 3"],
                            ["Frizz & Zap 3", "Woosh & Zam 3", "Crack & Zam 3"],
                            ["Bang & Woosh 3", "Bang & Zap 3", "Crack & Zam 3"],
                            ["Bang & Zap 3", "Woosh & Zam 3", "Crack & Zam 3"],
                            ["Crack & Sizz 3", "Zoma"],
                            ["Sizz & Zap 3", "Empyrea"],
                            ["Frizz & Woosh 3", "Woosh & Zap 3", "Crack & Sizz 3"],
                            ["Frizz & Zap 3", "Crack & Zam 3", "Sizz & Zap 3"]],
                        "Über Mage": [["Über Dark Dynamiter", "Über Blessed Blizzardier"],
                            ["Frizz & Woosh 3", "Crack & Zap 3", "Rhapthorne 2"],
                            ["Frizz & Zap 3", "Woosh & Crack 3", "Rhapthorne 2"],
                            ["Frizz & Bang 3", "Woosh & Zap 3", "Crack & Zam 3"],
                            ["Frizz & Bang 3", "Woosh & Zam 3", "Crack & Zap 3"],
                            ["Frizz & Woosh 3", "Bang & Zap 3", "Crack & Zam 3"],
                            ["Frizz & Woosh 3", "Bang & Zam 3", "Crack & Zap 3"],
                            ["Frizz & Zap 3", "Bang & Woosh 3", "Crack & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Crack 3", "Woosh & Zam 3"],
                            ["Frizz & Zap 3", "Bang & Zam 3", "Woosh & Crack 3"],
                            ["Frizz & Zam 3", "Bang & Woosh 3", "Crack & Zap 3"],
                            ["Frizz & Zam 3", "Bang & Crack 3", "Woosh & Zap 3"],
                            ["Frizz & Zam 3", "Bang & Zap 3", "Woosh & Crack 3"],
                            ["Über Dark Dynamiter", "Über Zapologist"],
                            ["Über Blessed Blizzardier", "Über Zapologist"],
                            ["Frizz & Bang 3", "Woosh & Crack 3", "Sizz & Zap 3"],
                            ["Frizz & Woosh 3", "Bang & Crack 3", "Sizz & Zam 3"]],
                        "Über Breath": [["Breath 3", "Bad Breath"],
                            ["Bad Breath", "Dragonlord"],
                            ["Bad Breath", "Dragovian Lord"],
                            ["Bad Breath", "Rhapthorne 2"],
                            ["Fire 3", "Ice 3", "Bad Breath"],
                            ["Fire 3", "Ice 3", "Graveheart"],
                            ["Bad Breath", "Leopold", "Nimzo"],
                            ["Dragovian Lord", "Über Zapologist"],
                            ["Über Zapologist", "Zenith Dragon"],
                            ["Fire 3", "Breath 3", "Über Zapologist"]],
                        "Über Knight": [["Cleric", "Cluboon 3"],
                            ["Captain Crow", "Cluboon 3"],
                            ["Firewind Slashes", "Darklight Slashes", "Captain Crow"],
                            ["Firewind Slashes", "Thunderwind Slashes", "Iceplosion Slashes", "Darklight Slashes"],
                            ["Thunderwind Slashes", "Iceplosion Slashes", "Captain Crow"],
                            ["Firewind Slashes", "Iceplosion Slashes", "Cleric"],
                            ["Thunderwind Slashes", "Darklight Slashes", "Diamagon 3"],
                            ["Iceplosion Slashes", "Darklight Slashes", "Cluboon 3"],
                            ["Fire Fighter", "Boom Boxer", "Wind Blower", "Icemeister", "White Knight", "Dark Knight"]],
                        "Über Healer": [["Healer", "Cure-all", "Mage Aid"],
                            ["Healer", "Mage Aid", "Crusader"],
                            ["Healer", "Cure-all", "Bolsterer"],
                            ["Healer", "Cleanser", "Cleric"],
                            ["Healer", "Mage Aid", "Bolsterer"],
                            ["Healer", "Mage Aid", "Barricade"],
                            ["Cure-all", "Crusader", "Cleric"],
                            ["Healer", "Mage Aid", "Hawkhart 3"],
                            ["Barricade", "Crusader", "Cleric"]],
                        "Über Helpful": [["Saboteur", "Thief"],
                            ["Champion", "Defender", "Thief"],
                            ["Fortifier", "Enfeebler", "Saboteur"],
                            ["Champion", "Defender", "Saboteur", "Antimagic 2", "Trickster"],
                            ["Champion", "Defender", "Mage Aid", "Enfeebler", "Saboteur", "Antimagic 2"]],
                        "Über Charmer": [["Seal", "Hypnotist"],
                            ["Hypnotist", "Fear-monger"],
                            ["Hypnotist", "Cold Sleep"],
                            ["Hypnotist", "Diabolist"],
                            ["Hypnotist", "Hive Mind"],
                            ["Hypnotist", "Mage"],
                            ["Cold Sleep", "Diabolist"]],
                        "Über Zapologist": [["Fire 3", "Sizz & Zap 3"],
                            ["Breath 3", "Sizz & Zap 3"],
                            ["Hawkhart", "Frizz & Sizz 3"],
                            ["Dragonlord", "Bang & Sizz 3"],
                            ["Wulfspade 3", "Sizz & Zap 3"],
                            ["Frizz & Sizz 3", "Orochi"],
                            ["Frizz & Zap 3", "Bang & Sizz 3"],
                            ["Frizz & Bang 3", "Sizz & Zap 3"],
                            ["Bang & Zap 3", "Frizz & Sizz 3"],
                            ["Bang & Zam 3", "Woosh & Sizz 3", "Crack & Sizz 3"],
                            ["Frizz & Woosh 3", "Crack & Sizz 3", "Sizz & Zam 3"],
                            ["Crack & Zap 3", "Sizz & Zam 3", "Sizz & Zam 3"]],
                        "Über Health Boost": [["Attack Boost 3", "Martial Artist", "Boom Boxer", "Healer"]],
                        "Über Magic Boost": [["Wisdom Boost 3", "Mage", "Dark Knight", "Mage Aid"]],
                        "Über Attack Boost": [["Attack Boost 3", "Warrior", "Fire Fighter", "Sag Ward"]],
                        "Über Defence Boost": [["Defence Boost 3", "Priest", "Wind Blower", "Sap Ward"]],
                        "Über Agility Boost": [["Agility Boost 3", "Thief", "Icemeister", "Decelerate Ward"]],
                        "Über Wisdom Boost": [["Wisdom Boost 3", "Sage", "White Knight", "Dim Ward"]],
                        "Über Heat Ward": [["Frizz Ward", "Fire Breath Ward"]],
                        "Über Cold Ward": [["Crack Ward", "Ice Breath Ward"]],
                        "Über Windblast Ward": [["Bang Ward", "Woosh Ward"]],
                        "Über Darklight Ward": [["Zap Ward", "Zam Ward"]],
                        "Firewind Slashes": [["Fire Fighter", "Boom Boxer", "Wind Blower"]],
                        "Thunderwind Slashes": [["Wind Blower", "Dark Knight", "Dragon Lore"],
                            ["Wind Blower", "Dark Knight", "Wulfspade"]],
                        "Iceplosion Slashes": [["Boom Boxer", "Icemeister", "White Knight"]],
                        "Darklight Slashes": [["Wind Blower", "White Knight", "Dark Knight"]]};
                    
                    init();
                }       
        );