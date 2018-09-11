$(document).ready(function(){
//debugger;

var president1 = {
    alreadyPicked: false,
    name: 'Clinton',
    baseAttackPower:10,
    baseAttackPowerConst: 10,
    counterAttackPower: 5,
    baseHealth: 50,
    numOfAttacks: 0,
    order: '',
    
};

var president2 = {
    alreadyPicked: false,
    name: 'Bush',
    baseAttackPower:7,
    baseAttackPowerConst: 7,
    counterAttackPower: 5,
    baseHealth: 50,
    numOfAttacks: 0,
    order: '',
};

var president3 = {
    alreadyPicked: false,
    name: 'Carter',
    baseAttackPower:5,
    baseAttackPowerConst: 5,
    counterAttackPower: 5,
    baseHealth: 50,
    numOfAttacks: 0,
    order: '',
};

var opponentPicked = true;

var player = $('#player')
var computer = $('#computer')
var paragraph1 = $('<p>')
var paragraph2 = $('<p>')
var paragraph3 = $('<p>')
var paragraph4 = $('<p>')
var paragraph5 = $('<p>')
var paragraph6 = $('<p>')

$('#pres1').append(president1.name)
$('#pres2').append(president2.name)
$('#pres3').append(president3.name)


$('#pres1').on('click',function() {
    if (!president1.alreadyPicked && !president2.alreadyPicked && !president3.alreadyPicked){        
        player.text(president1.name)
        $('#pres1').empty();
        $('#pres1').append('Away to WAR!!')
        $('#player').append(paragraph1);
        $('#player').append(paragraph2);
        paragraph1.attr('Id','playerattackpwr');
        paragraph2.attr('id', 'playerbasehealth');
        $('#playerattackpwr').text('Base attack power: ' + president2.baseAttackPower);
        $('#playerbasehealth').text('Base health: ' + president2.baseHealth);
        $('#pres1').off('click')
        president1.alreadyPicked = true;
        president1.order = 'mainPlayer';
    }
    else {
        var computerOne = president1;
        computer.text(computerOne.name)
        $('#computer').append(paragraph4);
        paragraph4.attr('Id','computerBaseHealth');
        $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
        $('#pres1').off('click');
        president1.alreadyPicked = true;
        opponentPicked = false;
        president1.order = 'opponent'
    }

});

$('#pres2').on('click',function() {
    debugger;
    if (!president1.alreadyPicked && !president2.alreadyPicked && !president3.alreadyPicked){        
        player.text(president2.name)
        $('#pres2').empty();
        $('#pres2').append('Away to WAR!!')
        $('#player').append(paragraph1);
        $('#player').append(paragraph2);
        paragraph1.attr('Id','playerattackpwr');
        paragraph2.attr('id', 'playerbasehealth');
        $('#playerattackpwr').text('Base attack power: ' + president2.baseAttackPower);
        $('#playerbasehealth').text('Base health: ' + president2.baseHealth);
        $('#pres2').off('click')
        president2.alreadyPicked = true;
        president2.order = 'mainPlayer';
    }
    else {
        var computerOne = president2;
        computer.text(computerOne.name)
        $('#computer').append(paragraph4);
        paragraph4.attr('Id','computerBaseHealth');
        $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
        $('#pres2').off('click');
        president2.alreadyPicked = true;
        opponentPicked = false;
        president2.order = 'opponent';
    }
});


    $('#pres3').on('click',function() {
        if (!president1.alreadyPicked && !president2.alreadyPicked && !president3.alreadyPicked){        
            player.text(president3.name)
            $('#pres3').empty();
            $('#pres3').append('Away to WAR!!')
            $('#player').append(paragraph1);
            $('#player').append(paragraph2);
            paragraph1.attr('Id','playerattackpwr');
            paragraph2.attr('id', 'playerbasehealth');
            $('#playerattackpwr').text('Base attack power: ' + president3.baseAttackPower);
            $('#playerbasehealth').text('Base health: ' + president3.baseHealth);
            $('#pres3').off('click')
            president3.alreadyPicked = true;
            president3.order = 'mainPlayer';
        }
        else {
            var computerOne = president3;
            computer.text(computerOne.name)
            $('#computer').append(paragraph4);
            paragraph4.attr('Id','computerBaseHealth');
            $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
            $('#pres3').off('click');
            president3.alreadyPicked = true;
            opponentPicked = false;
            president3.order = 'opponent';
        }
    
});







player.on('click',function() {
    if (!opponentPicked){
        switch('mainPlayer'){
            case president1.order:
            var playerOne = president1;
            break;
            case president2.order:
            var playerOne = president2;
            break;
            case president3.order:
            var playerOne = president3;
            break;
        }

        switch('opponent'){
            case president1.order:
            var computerOne = president1;
            break;
            case president2.order:
            var computerOne = president2;
            break;
            case president3.order:
            var computerOne = president3;
            break;
        }
        
        //playerOne.baseAttackPower = playerOne.baseAttackPower + playerOne.baseAttackPowerConst;   
        computerOne.baseHealth = computerOne.baseHealth - playerOne.baseAttackPower;
        playerOne.baseHealth = playerOne.baseHealth - computerOne.counterAttackPower;
        $('#computerBaseHealth').text('President ' + computerOne.name + ' base health: ' + computerOne.baseHealth);
        playerOne.baseAttackPower = playerOne.baseAttackPower + playerOne.baseAttackPowerConst;
        $('#playerattackpwr').text('President ' + playerOne.name + ' base attack power: ' + playerOne.baseAttackPower);
        $('#playerbasehealth').text('President ' + playerOne.name + ' base health: ' + playerOne.baseHealth);
        if (computerOne.baseHealth < 0){
            $('#computerBaseHealth').text('President ' + computerOne.name + ' has been defeated!');
            opponentPicked = true;
        }

        if (playerOne.baseHealth < 0){
            $('#playersbasehealth').text('President ' + playerOne.name + ' has been defeated!');
            opponentPicked = true;
        }
    }
});




});