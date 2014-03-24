savageApp.controller('DamageCtrl', function ($scope) {
    $scope.characters = [
        { name: 'Test 1', toughness: 6, armor: 2, damageOverflow: 0, wounds: 0 },
        { name: 'Test 2', toughness: 6, armor: 6, damageOverflow: 0, wounds: 0 }
    ];
    $scope.ap = 0;
    $scope.calc = function () {
        for (var i = 0; i < $scope.characters.length; i++) {
            var character = $scope.characters[i],
                armor,
                toughness,
                damage;
            armor = character.armor - $scope.ap;
            armr = armor < 0 ? 0 : armor;
            toughness = character.toughness + armor;
            damage = $scope.damage - toughness;

            character.damageOverflow = damage;
            character.wounds = character.damageOverflow / 4;
        }
    };
});