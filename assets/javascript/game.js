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
    

    
    $('#slinger1').on('click',function() {
        if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked){        
            $('#slinger1').empty();
            $('#slinger1').append('Away to Duel!!')
            $('#player').append(paragraph1);
            paragraph1.addClass('goodGuyStats')
            paragraph1.empty()
            paragraph1.append(slinger1.name)
            paragraph1.append("\n")
            paragraph1.append('AttackPower: '+ slinger1.baseAttackPower)
            paragraph1.append("\n")
            paragraph1.append('BaseHealth: ' + slinger1.baseHealth)
            $('#slinger1').off('click')
            slinger1.alreadyPicked = true;
            slinger1.order = 'mainPlayer';
            $('#player').attr('style',"background-image:url('assets/image/BillyTheKid150X125.jpg');")
            $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
        else {
            $('#computer').text('')
            var computerOne = slinger1;
            $('#computer').append(paragraph2);
            paragraph2.addClass('badGuyStats')
            paragraph2.empty()
            paragraph2.append(slinger1.name)
            paragraph2.append("\n")
            paragraph2.append("CounterAttack: " + slinger1.counterAttackPower)
            paragraph2.append("\n")
            paragraph2.append("BaseHealth: " + slinger1.baseHealth)
            $('#slinger1').off('click');
            slinger1.alreadyPicked = true;
            opponentPicked = false;
            slinger1.order = 'opponent'
            $('#computer').attr('style',"background-image:url('assets/image/BillyTheKid150X125.jpg');")
            $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
    
    });
    
    $('#slinger2').on('click',function() {
        if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked && !slinger4.alreadyPicked){        
            $('#slinger2').empty();
            $('#slinger2').append('Away to Duel!!')
            $('#player').append(paragraph3);
            paragraph3.addClass('goodGuyStats')
            paragraph3.empty()
            paragraph3.append(slinger2.name)
            paragraph3.append("\n")
            paragraph3.append('AttackPower: '+ slinger2.baseAttackPower)
            paragraph3.append("\n")
            paragraph3.append('BaseHealth: ' + slinger2.baseHealth)
            $('#slinger2').off('click')
            slinger2.alreadyPicked = true;
            slinger2.order = 'mainPlayer';
            $('#player').attr('style',"background-image:url('assets/image/PearlHeart.jpg');")
            $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
        else {
            $('#computer').text('')
            var computerOne = slinger2;
            $('#computer').append(paragraph4);
            paragraph4.addClass('badGuyStats')
            paragraph4.empty()
            paragraph4.append(slinger2.name)
            paragraph4.append("\n")
            paragraph4.append("CounterAttack: " + slinger2.counterAttackPower)
            paragraph4.append("\n")
            paragraph4.append('BaseHealth: ' + slinger2.baseHealth)
            $('#slinger2').off('click');
            slinger2.alreadyPicked = true;
            opponentPicked = false;
            slinger2.order = 'opponent'
            $('#computer').attr('style',"background-image:url('assets/image/PearlHeart.jpg');")
            $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
    });
    
    
    $('#slinger3').on('click',function() {
        if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked && !slinger4.alreadyPicked){        
            $('#slinger3').empty();
            $('#slinger3').append('Away to Duel!!')
            $('#player').append(paragraph5);
            paragraph5.addClass('goodGuyStats')
            paragraph5.empty()
            paragraph5.append(slinger3.name)
            paragraph5.append("\n")
            paragraph5.append('AttackPower: '+ slinger3.baseAttackPower)
            paragraph5.append("\n")
            paragraph5.append('BaseHealth: ' + slinger3.baseHealth)
            $('#slinger3').off('click')
            slinger3.alreadyPicked = true;
            slinger3.order = 'mainPlayer';
            $('#player').attr('style',"background-image:url('assets/image/DocHolliday.jpg');")
            $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }
        else {
            $('#computer').text('')
            var computerOne = slinger3;
            $('#computer').append(paragraph6);
            paragraph6.addClass('badGuyStats')
            paragraph6.empty()
            paragraph6.append(slinger3.name)
            paragraph6.append("\n")
            paragraph6.append('CounterAttack: ' + slinger3.counterAttackPower)
            paragraph6.append("\n")
            paragraph6.append('BaseHealth: ' + slinger3.baseHealth)
            $('#slinger3').off('click');
            slinger3.alreadyPicked = true;
            opponentPicked = false;
            slinger3.order = 'opponent'
            $('#computer').attr('style',"background-image:url('assets/image/DocHolliday.jpg');")
            $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
        }

        });

        $('#slinger4').on('click',function() {
            if (!slinger1.alreadyPicked && !slinger2.alreadyPicked && !slinger3.alreadyPicked && !slinger4.alreadyPicked){        
                $('#slinger4').empty();
                $('#slinger4').append('Away to Duel!!')
                $('#player').append(paragraph7);
                paragraph7.addClass('goodGuyStats')
                paragraph7.empty()
                paragraph7.append(slinger4.name)
                paragraph7.append("\n")
                paragraph7.append('AttackPower: '+ slinger4.baseAttackPower)
                paragraph7.append("\n")
                paragraph7.append('BaseHealth: ' + slinger4.baseHealth)
                $('#slinger4').off('click')
                slinger4.alreadyPicked = true;
                slinger4.order = 'mainPlayer';
                $('#player').attr('style',"background-image:url('assets/image/WyattEarp150X125.png');")
                $('.goodGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
            }
            else {
                $('#computer').text('')
                var computerOne = slinger4;
                $('#computer').append(paragraph8);
                paragraph8.addClass('badGuyStats')
                paragraph8.empty()
                paragraph8.append(slinger4.name)
                paragraph8.append("\n")
                paragraph8.append('CounterAttack: ' + slinger4.counterAttackPower)
                paragraph8.append("\n")
                paragraph8.append('BaseHealth: ' + slinger4.baseHealth)
                $('#slinger4').off('click');
                slinger4.alreadyPicked = true;
                opponentPicked = false;
                slinger4.order = 'opponent'
                $('#computer').attr('style',"background-image:url('assets/image/WyattEarp150X125.png');")
                $('.badGuy').css({"border":"black 3px solid", "-webkit-text-stroke": "1px #f0ec08","-webkit-filter": "drop-shadow(2px 2px 20px gold)"})
            }
    
        
    });
    
    
    
    
    
    
    
    player.on('click',function() {
        debugger;
        if (!opponentPicked){
            switch('mainPlayer'){
                case slinger1.order:
                var playerOne = slinger1;
                var paragraphMain = paragraph1;
                break;
                case slinger2.order:
                var playerOne = slinger2;
                var paragraphMain = paragraph3;
                break;
                case slinger3.order:
                var playerOne = slinger3;
                var paragraphMain = paragraph5;
                break;
                case slinger4.order:
                var playerOne = slinger4;
                var paragraphMain = paragraph7;
            }
    
            switch('opponent'){
                case slinger1.order:
                var computerOne = slinger1;
                var paragraphComp = paragraph2;
                break;
                case slinger2.order:
                var computerOne = slinger2;
                var paragraphComp = paragraph4;
                break;
                case slinger3.order:
                var computerOne = slinger3;
                var paragraphComp = paragraph6;
                break;
                case slinger4.order:
                var computerOne = slinger4;
                var paragraphComp = paragraph8;
            }
               
            computerOne.baseHealth = computerOne.baseHealth - playerOne.baseAttackPower;
            playerOne.baseHealth = playerOne.baseHealth - computerOne.counterAttackPower;
            paragraphComp.empty()
            paragraphComp.append(computerOne.name)
            paragraphComp.append("\n")
            paragraphComp.append('AttackPower: '+ computerOne.counterAttackPower)
            paragraphComp.append("\n")
            paragraphComp.append('BaseHealth: ' + computerOne.baseHealth)
            paragraphMain.empty()
            paragraphMain.append(playerOne.name)
            paragraphMain.append("\n")
            paragraphMain.append('AttackPower: '+ playerOne.baseAttackPower)
            paragraphMain.append("\n")
            paragraphMain.append('BaseHealth: ' + playerOne.baseHealth)
            playerOne.baseAttackPower = playerOne.baseAttackPower + playerOne.baseAttackPowerConst;
            if (computerOne.baseHealth < 0){
                paragraphComp.empty()
                paragraphMain.empty()
                $('#computer').text('DEAD!')
                computerOne.alreadyPicked = true;
                computerOne.order = '';
            }
    
            if (playerOne.baseHealth < 0){
                paragraphMain.empty()
                paragraphComp.empty()
                $('#player').text('DEAD!')
                playerOne.alreadyPicked = true;
            }
        }
    });
    

    
    });