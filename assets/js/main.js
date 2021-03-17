$(document).ready(function () {
  $('.btn').click(function () {
    var addText = $('.addtext').val();
    $('.addtext').val('');



    var template = $('#to-do li').clone();
    template.children('span.title').text(addText);

    template.children('span.delete').click(function() {
      $(this).parent().remove();
    });


    $('#list').append(template);
  });
}); //end document

// Consegna
// Creare una Todo-list in cui si possano aggiungere
//  nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
// Bonus
// Permettiamo la modifica di un todo già aggiunto.


// var addText = $('.addtext').val();
// $('.add-text').val('');
//
// var addedText = $('#to-do li');
// addedText.children('span.title').text(addText);
//
//
// $('span.delete').click(function () {
//   $(this).parent().remove();
// })
//
// addedText.children('span.edit').click(function() {
//   var titleDOM = $(this).siblings('span.title');
//   var title = titleDOM.text();
//   titleDOM.hide();
//
//   $(this).siblings('input').val(title).show();
// });
//
//
//
//
// $('#prova').append(addedText);
