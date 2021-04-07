console.log("Page was loaded");

// console.log($("#book-list h2").text());
// console.log($("#book-list h2").text('Books that I <b>want</b> to read'));

// console.log($("#book-list h2").html());

// $("#book-list h2").html('Books that I <b>want</b> to read');

// $("#book-list h2").append(' <b> This is the new appended text</b>')
// $("#book-list h2").prepend(' <i> Title: </i>');

$('#add-book').submit(function(e) {
   
    e.preventDefault();

    let new_book_name = $("#new-book-name").val();

    $("#book-list ul").append(`<li>
    <span class="name">${new_book_name}</span>
    <span class="delete">delete</span>
  </li>`);

  $("#new-book-name").val('');
    
});

// $("#book-list h2").css('background-color', 'yellow');


$("#book-list h2").click(function(e) {
    // $("#book-list h2").hide();
    // $("#book-list h2").remove();
    // $(this).hide();
    // document.querySelector("#book-list h2").style.display='none';

    // $("#book-list ul li").first().toggle(2000);

    // $("#book-list ul li").first().slideToggle(2000);
    
    // $("#book-list ul li").first().fadeToggle(2000);

    // if(document.querySelector("#book-list h2").style.display=='none') {
    //     document.querySelector("#book-list h2").style.display='block';
    // } else document.querySelector("#book-list h2").style.display='none'

    // $('#square').animate({
    //     right:'200px',
    //     opacity:'0.5',
    // })

    // fetch('https://reqres.in/api/users').then(res=> console.log(res));

    $.ajax({
      type: 'GET',
      url: 'https://reqres.in/api/users',
      success: logRequest
    });

})

function logRequest(data, status) {
  console.log(data);
  console.log(status);
}


