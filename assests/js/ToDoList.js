$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});
//Click on X then delete entire li
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
 if(event.which === 13){
    //taking new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //adding new todos in ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")	
 }
});
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle();
});
