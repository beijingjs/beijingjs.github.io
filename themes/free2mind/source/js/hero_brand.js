/**
 * @author: eyea
 * @description:
 * @Date: 2017/2/2 22:08
 */
;(function($){
  $.get('/data/beijing.json',function(res){

    for(var i=0,len = res.length;i<len;i++){
      var html;
      html = "<div class='col-md-4 text-center'>"
                 + "<img class='hero_avatar' src= " + res[i]['avatar'] + " alt='avatar'>"
                 + "<h3>" + res[i]['username'] + "</h3>"
                 + "<p class='hero_links'>"
                 +    "<a href= " + res[i]['blog']+  " target='_blank'>博客</a>"
                 +    "<a href= " + res[i]['github']+ " target='_blank'>站点</a>"
                 + "</p>"
                 + "<p class='hero_intro'> " + res[i]['word']+ "</p>";
              +"</div>"

        $('.hero_container')[0].innerHTML += html;
        html = null;
    };

  })










})(jQuery);
