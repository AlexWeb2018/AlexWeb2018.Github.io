$(document).ready(function (){

//Массив ответов
var answers = {
    'привет': 'И тебе привет!',
    'сколько тебе лет': 'больше чем твоей мамке',
    'кто ты': 'твой хозяин',
    'как создать сайт': '<a href="http://sergey-oganesyan.ru/seo-knigi/kak-sozdat-sajt-na-wordpress.html">Читай эту статью!</a>',
    'как дела': 'У меня отлично! А у тебя я даже спрашивать не буду!',
    'как тебя зовут': 'Konnor version 0.0.0.15.3',
    'кто тебя создал': 'создатель',
    'что ты умеешь?' : 'всякую херню'
};
 
//Флаг того, что найден ответ на вопрос
var have_answer = false; 
 
$('#send').click(function(){
     
    var text = $('#text').val();
     
    if( text != '' ){
         
        for (var i in answers){
             
            if( i == text.toLowerCase().replace(/[/.,!?;]*/g, '').trim() ){
                $('result').append('<p>' + answers[i] + '</p>');
                have_answer = true;
                break;
            }
        }
        if( !have_answer ) $('result').append('<p>говори нормально сука!</p>');
        var have_answer = false;
        $('#text').val('').focus();
         
    }else $('result').append('<p>Не нужно пустых слов..</p>');
 
});
});