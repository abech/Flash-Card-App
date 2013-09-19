var questions = [
    {question: "I am a question",
     answer: "I am an answer"},
    {question: "Second question.",
     answer: "Second answer."},
    {question: "Third question.",
     answer: "Third answer."},
]
var index = 0;

$(document).ready(function(){

    // Load by default the first question
    $('#card').html(questions[index]["question"])

    // When clicked, switch to show the answer.
    $('#card').click(function(){
        card = $('#card')
        text = card.html()
        if (text == questions[index]["question"]) {
            card.html(questions[index]["answer"])
            index++;
        }
        else {
            card.html(questions[index]["question"])
        }
    })
});

