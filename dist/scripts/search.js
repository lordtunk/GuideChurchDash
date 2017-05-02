!function(){"use strict";function e(){var e=$("#search-by");$.each(f,function(t,a){e.append("<option value="+t+">"+a+"</option>")}),e.val("1"),e=$("#state"),$.each(v,function(t,a){e.append("<option value="+a.abbreviation+">"+a.name+"</option>")}),e.val("OH")}function t(){var e=parseInt(m.value);if(1===e){var t=$.trim(u.value);if(""===t)return $().toastmessage("showErrorToast","Must enter Name"),void 0;a(t,null)}else if(2===e){var r=$.trim($("#street1").val()),s=$.trim($("#street2").val()),n=$.trim($("#city").val()),o=$.trim($("#state").val()),i=$.trim($("#zip").val());if(""===r&&""===s&&""===n&&""===o&&""===i)return $().toastmessage("showErrorToast","Must enter address"),void 0;a(null,{street1:r,street2:s,city:n,state:o,zip:i})}}function a(e,t){$(".search-form").mask("Loading...");var a={};e?a.text=e:a.address=JSON.stringify(t),$.ajax({type:"POST",url:"ajax/search.php",data:a}).done(function(e){var t=JSON.parse(e);$(".search-form").unmask(),t.success?n(t.people):1===t.error?logout():$().toastmessage("showErrorToast","Error searching people")}).fail(function(){$().toastmessage("showErrorToast","Error searching people")})}function r(){$.ajax({type:"GET",url:"ajax/states.json"}).done(function(t){if($.isArray(t))v=t;else{var a=JSON.parse(t);v=a}e()}).fail(function(){$().toastmessage("showErrorToast","Error loading states")})}function s(e,t){if(null===e)return"";var a="";return e.first_name||e.last_name?(e.last_name&&(a+=e.last_name),e.last_name&&e.first_name?t===!0?a+=", "+e.first_name:a=e.first_name+" "+a:e.first_name&&(a+=e.first_name+" ")):a=e.description,a}function n(e){$("#search-table tbody tr").remove();for(var t=0;t<e.length;t++)o(e[t])}function o(e){var t=s(e);$("#search-table > tbody:last").append('<tr person_id="'+e.id+'"><td data-th="Name" person_name="'+t+'"><a class="person_name" href="manage-person.php?id='+e.id+'">'+t+'</a></td><td data-th="Email">'+e.email+'</td><td data-th="Address">'+i(e)+"</td></tr>")}function i(e){var t="";return t+=e.street1||"",e.street1&&(t+="<br />"),t+=e.street2||"",e.street2&&(t+="<br />"),t+=e.city||"",e.city&&e.state&&(t+=","),t+=" ",t+=e.state||"",t+=" ",t+=e.zip||"",t.trim()}function c(){var e=parseInt(m.value);$("#search-by-address").css("display",2===e?"":"none"),$("#search-by-name").css("display",1===e?"":"none")}function l(e){var t=$("#search-table-container"),a=-1==e.target.id.indexOf("top")?t[0].scrollHeight:0;t.stop().animate({scrollTop:a},p,"swing",function(){$("<style></style>").appendTo($(document.body)).remove()})}var d=document.querySelector("#search"),u=document.querySelector("#search-name"),m=document.querySelector("#search-by"),p=1e3,f={1:"Name",2:"Address"},v={};$(".navigation-links a").on("click",l),m.addEventListener("change",c),d.addEventListener("click",t),u.addEventListener("keydown",function(e){13==e.keyCode&&t()}),r()}();