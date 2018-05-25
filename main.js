function chrono(){
    this.play = function() {
        timeStart = window.setInterval(affichage, 1000);
            function affichage(){
                if (secondes === 0) {
                    secondes = 60;
                    console.log('premiere iteration');
                    
                }else{
                    secondes = secondes - 1;
                    $('#second').text(secondes)
                    console.log($('#second').text());
                }
            
            }
    
    this.pause = function(){
        timePause = window.clearInterval(timeStart);
    }
    this.stop = function(){

    }
    }
}

$('#minute').text('25');
//$('#second').text('13');

chrono1 = new chrono;

// definition des minutes et secondes en "number"
var minutes  = Number($('#minute').text());
var secondes = Number($('#second').text());

console.log(Number($('#second').text()));
