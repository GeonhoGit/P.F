$(function(){
    link_Val = 
    link = ""
    $(".memu_list_target").mouseover(function (e) {
        $(this).css("color", "red")
        $(".list1").css("display", "flex")
    }).mouseout(function () {
        $(this).css("color", "black")
        $(".list1").css("display", "none")
    })
    
    $(".memu_list_1").mouseover(function(){
        $(".list1").css("display", "flex")
    }).mouseout(function () {
        $(".list1").css("display", "none")
    })

    $(".but").mouseover(function(){
        $(this).css("color","red")
    }).mouseout(function(){
        $(this).css("color", "black")
    })
    
    $(".but").click(function(e){
        E = $(e.target)
        location.href = E[0].innerText+"/index.html"
    })
})
