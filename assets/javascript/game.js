$(document).ready(function(){
    //debugger;
    
    var slinger1 = {
        alreadyPicked: false,
        name: 'Billy The Kid',
        baseAttackPower:10,
        baseAttackPowerConst: 10,
        counterAttackPower: 5,
        baseHealth: 50,
        numOfAttacks: 0,
        order: '',
        
    };
    
    var slinger2 = {
        alreadyPicked: false,
        name: 'Pearl Heart',
        baseAttackPower:7,
        baseAttackPowerConst: 7,
        counterAttackPower: 5,
        baseHealth: 50,
        numOfAttacks: 0,
        order: '',
    };
    
    var slinger3 = {
        alreadyPicked: false,
        name: 'Doc Holliday',
        baseAttackPower:5,
        baseAttackPowerConst: 5,
        counterAttackPower: 5,
        baseHealth: 50,
        numOfAttacks: 0,
        order: '',
    };
    
    var slinger4 = {
        alreadyPicked: false,
        name: 'Wyatt Earp',
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
    var paragraph7 = $('<p>')
    var paragraph8 = $('<p>')
    var newImgPlayer = $('<img>')
    var newImgComputer = $('<img>')
    var newDiv = $('<div>')
    
    //$('#slinger1').append(slinger1.name)
    //$('#slinger2').append(slinger2.name)
    //$('#slinger3').append(slinger3.name)
    
    
    $('#slinger1').on('click',function() {
        if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked){        
            player.text(slinger1.name)
            $('#slinger1').empty();
            $('#slinger1').append('Away to WAR!!')
            $('#player').append(paragraph1);
            paragraph1.addClass('test');
            $('#player').append(paragraph2);
            paragraph1.attr('Id','playerattackpwr');
            paragraph2.attr('id', 'playerbasehealth');
            $('#playerattackpwr').text('Base attack power: ' + slinger2.baseAttackPower);
            $('#playerbasehealth').text('Base health: ' + slinger2.baseHealth);
            $('#slinger1').off('click')
            slinger1.alreadyPicked = true;
            slinger1.order = 'mainPlayer';
            $('#player').attr('style',"background-image:url('assets/image/BillyTheKid150X125.jpg');")
            $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
        else {
            var computerOne = slinger1;
            computer.text(computerOne.name)
            $('#computer').append(paragraph4);
            paragraph4.attr('Id','computerBaseHealth');
            $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
            $('#slinger1').off('click');
            slinger1.alreadyPicked = true;
            opponentPicked = false;
            slinger1.order = 'opponent'
            $('#computer').attr('style',"background-image:url('assets/image/BillyTheKid150X125.jpg');")
            $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
    
    });
    
    $('#slinger2').on('click',function() {
        if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked){        
            player.text(slinger2.name)
            $('#slinger2').empty();
            $('#slinger2').append('Away to WAR!!')
            $('#player').append(paragraph1);
            $('#player').append(paragraph2);
            paragraph1.attr('Id','playerattackpwr');
            paragraph2.attr('id', 'playerbasehealth');
            $('#playerattackpwr').text('Base attack power: ' + slinger2.baseAttackPower);
            $('#playerbasehealth').text('Base health: ' + slinger2.baseHealth);
            $('#slinger2').off('click')
            slinger2.alreadyPicked = true;
            slinger2.order = 'mainPlayer';
            $('#player').attr('style',"background-image:url('assets/image/PearlHeart.jpg');")
            $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
        else {
            var computerOne = slinger2;
            computer.text(computerOne.name)
            $('#computer').append(paragraph4);
            paragraph4.attr('Id','computerBaseHealth');
            $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
            $('#slinger2').off('click');
            slinger2.alreadyPicked = true;
            opponentPicked = false;
            slinger2.order = 'opponent';
            $('#computer').attr('style',"background-image:url('assets/image/PearlHeart.jpg');")
            $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
    });
    
    
        $('#slinger3').on('click',function() {
            if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked){        
                player.text(slinger3.name)
                $('#slinger3').empty();
                $('#slinger3').append('Away to WAR!!')
                $('#player').append(paragraph1);
                $('#player').append(paragraph2);
                paragraph1.attr('Id','playerattackpwr');
                paragraph2.attr('id', 'playerbasehealth');
                $('#playerattackpwr').text('Base attack power: ' + slinger3.baseAttackPower);
                $('#playerbasehealth').text('Base health: ' + slinger3.baseHealth);
                $('#slinger3').off('click')
                slinger3.alreadyPicked = true;
                slinger3.order = 'mainPlayer';
                $('#player').attr('style',"background-image:url('assets/image/DocHolliday.jpg');")
                $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
            }
            else {
                var computerOne = slinger3;
                computer.text(computerOne.name)
                $('#computer').append(paragraph4);
                paragraph4.attr('Id','computerBaseHealth');
                $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
                $('#slinger3').off('click');
                slinger3.alreadyPicked = true;
                opponentPicked = false;
                slinger3.order = 'opponent';
                $('#computer').attr('style',"background-image:url('assets/image/DocHolliday.jpg');")
                $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
            }

        });

            $('#slinger4').on('click',function() {
                if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked && !slinger4.alreadyPicked){        
                    player.text(slinger4.name)
                    $('#slinger4').empty();
                    $('#slinger4').append('Away to WAR!!')
                    $('#player').append(paragraph1);
                    $('#player').append(paragraph2);
                    paragraph1.attr('Id','playerattackpwr');
                    paragraph2.attr('id', 'playerbasehealth');
                    $('#playerattackpwr').text('Base attack power: ' + slinger4.baseAttackPower);
                    $('#playerbasehealth').text('Base health: ' + slinger4.baseHealth);
                    $('#slinger4').off('click')
                    slinger4.alreadyPicked = true;
                    slinger4.order = 'mainPlayer';
                    $('#player').attr('style',"background-image:url('assets/image/WyattEarp150X125.png');")
                    $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
                }
                else {
                    var computerOne = slinger4;
                    computer.text(computerOne.name)
                    $('#computer').append(paragraph4);
                    paragraph4.attr('Id','computerBaseHealth');
                    $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
                    $('#slinger4').off('click');
                    slinger4.alreadyPicked = true;
                    opponentPicked = false;
                    slinger4.order = 'opponent';
                    $('#computer').attr('style',"background-image:url('assets/image/WyattEarp150X125.png');")
                    $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
                }
        
    });
    
    
    
    
    
    
    
    player.on('click',function() {
        if (!opponentPicked){
            switch('mainPlayer'){
                case slinger1.order:
                var playerOne = slinger1;
                break;
                case slinger2.order:
                var playerOne = slinger2;
                break;
                case slinger3.order:
                var playerOne = slinger3;
                break;
                case slinger4.order:
                var playerOne = slinger4;
            }
    
            switch('opponent'){
                case slinger1.order:
                var computerOne = slinger1;
                break;
                case slinger2.order:
                var computerOne = slinger2;
                break;
                case slinger3.order:
                var computerOne = slinger3;
                break;
                case slinger4.order:
                var computerOne = slinger4;
            }
            
            //playerOne.baseAttackPower = playerOne.baseAttackPower + playerOne.baseAttackPowerConst;   
            computerOne.baseHealth = computerOne.baseHealth - playerOne.baseAttackPower;
            playerOne.baseHealth = playerOne.baseHealth - computerOne.counterAttackPower;
            $('#computerBaseHealth').text('Base health: ' + computerOne.baseHealth);
            playerOne.baseAttackPower = playerOne.baseAttackPower + playerOne.baseAttackPowerConst;
            $('#playerattackpwr').text('Attack power: ' + playerOne.baseAttackPower);
            $('#playerbasehealth').text('Base health: ' + playerOne.baseHealth);
            if (computerOne.baseHealth < 0){
                $('#computerBaseHealth').text(computerOne.name + ' has been defeated!');
                opponentPicked = true;
            }
    
            if (playerOne.baseHealth < 0){
                $('#playersbasehealth').text(playerOne.name + ' has been defeated!');
                opponentPicked = true;
            }
        }
    });
    
    
    
    
    });