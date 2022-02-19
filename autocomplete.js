/*!
* Stui v1.1.0 Copyright 2016-2018 http://v.shoutu.cn
* Email 726662013@qq.com,admin@shoutu.cn
*/$(function(){$('#wd').keyup(function(){var keywords=$(this).val();if(keywords==''){$('#word').hide();return};$.ajax({url:'/ass.php?wd='+keywords,dataType:'jsonp',jsonp:'cb',beforeSend:function(){$('#word').append('<div class="autocomplete-suggestion">正在加载。。。</div>');},success:function(data){$('#word').empty().show();if(data.s=='')
{$('#word').append('<div class="autocomplete-suggestion">未找到与 "'+keywords+'"相关的结果</div>');}
$.each(data.s,function(){$('#word').append('<div class="autocomplete-suggestion">'+this+'</div>');})},error:function(){$('#word').empty().show();$('#word').append('<div class="autocomplete-suggestion">查找"'+keywords+'"失败</div>');}})})
$(document).on('click','.autocomplete-suggestion',function(){var word=$(this).text();$('#wd').val(word);$('#word').hide();$('#submit').trigger('click');触发搜索事件})
var clear=function(){$('#word').hide();}
$("input").blur(function(){setTimeout(clear,500);})})