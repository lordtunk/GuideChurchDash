!function(){"use strict";function e(){var e=$("#service-label-1"),t=$("#service-label-2");$.each(options.service_labels,function(a,n){e.append('<option value="'+a+'">'+n+"</option>"),t.append('<option value="'+a+'">'+n+"</option>")}),t.append('<option value="">--None--</option>'),e.val(options.default_first_service_label),t.val(options.default_second_service_label),e=$("#campus"),$.each(options.campuses,function(t,a){e.append('<option value="'+t+'">'+a+"</option>")}),e.val(options.default_campus)}function t(){var e=new Date;w.value=$.datepicker.formatDate("mm/dd/yy",new Date(e.getFullYear(),e.getMonth(),1,0,0,0,0)),T.value=$.datepicker.formatDate("mm/dd/yy",e)}function a(){var e=parseInt(x.value);$("#from-to-dates")[0].style.setProperty("display",3===e||5===e?"none":""),$(".service-label-container").css("display",3===e||4===e||5===e?"none":""),(3===e||4===e||5===e)&&(w.value="",T.value=""),$("#first-last-dates")[0].style.setProperty("display",4===e?"none":"inherit"),$("#communication-card-header")[0].style.setProperty("display",4===e?"inherit":"none"),$("#follow-up-options")[0].style.setProperty("display",4===e?"inline-block":"none"),$("#follow-up-options-spacer")[0].style.setProperty("display",4===e?"inherit":"none")}function n(){var e=parseInt(x.value);if((1===e||2===e)&&D.value==E.value)return $().toastmessage("showErrorToast","First and Second Service cannot be the same"),void 0;if(o(w.value,T.value,1===e||2===e)){switch(s(),I=P.value,O=D.value,j="",e){case 1:$("#attendance-by-date-container")[0].style.setProperty("display","inherit"),N={fromDate:w.value,toDate:T.value,campus:P.value,label1:D.value,label2:E.value},j=E.value,j?($(".service-header").css("display",""),$(".first-service-header").text(options.service_labels[O]),$(".second-service-header").text(options.service_labels[j])):$(".service-header").css("display","none");break;case 2:$("#attendance-by-person-container")[0].style.setProperty("display","inherit"),N={fromDate:w.value,toDate:T.value,campus:P.value,label1:D.value,label2:E.value},j=E.value,j?($(".service-header").css("display",""),$(".first-service-header").text(options.service_labels[O]),$(".second-service-header").text(options.service_labels[j])):$(".service-header").css("display","none");break;case 3:$("#attendance-by-mia-container")[0].style.setProperty("display","inherit"),N={fromDate:"",toDate:"",campus:P.value};break;case 4:$("#follow-up-container")[0].style.setProperty("display","inherit"),N=r(),N.campus=P.value;break;case 5:$("#people-by-attender-status-container")[0].style.setProperty("display","inherit"),N={fromDate:"",toDate:"",campus:P.value}}_(e,N)}}function r(){return{fromDate:w.value,toDate:T.value,active:$("#active").is(":checked"),not_visited:$("#not-visited").is(":checked"),ty_card_not_sent:$("#ty-card-not-sent").is(":checked"),signed_up_for_baptism:$("#signed-up-for-baptism").is(":checked"),baptized:$("#baptized").is(":checked"),interested_in_gkids:$("#interested-in-gkids").is(":checked"),interested_in_next:$("#interested-in-next").is(":checked"),interested_in_ggroups:$("#interested-in-ggroups").is(":checked"),interested_in_gteams:$("#interested-in-gteams").is(":checked"),interested_in_joining:$("#interested-in-joining").is(":checked"),would_like_visit:$("#would-like-visit").is(":checked"),no_agent:$("#no-agent").is(":checked"),commitment_christ:$("#commitment-christ").is(":checked"),recommitment_christ:$("#recommitment-christ").is(":checked"),commitment_tithe:$("#commitment-tithe").is(":checked"),commitment_ministry:$("#commitment-ministry").is(":checked"),attendance_frequency:$("#first-time-visitor").is(":checked")}}function s(){$("#attendance-by-person-container")[0].style.setProperty("display","none"),$("#attendance-by-date-container")[0].style.setProperty("display","none"),$("#attendance-by-mia-container")[0].style.setProperty("display","none"),$("#follow-up-container")[0].style.setProperty("display","none"),$("#people-by-attender-status-container")[0].style.setProperty("display","none")}function o(e,t,a){var n="";return g(e,!0)||(n+="From Date must be a valid date<br />"),g(t,!0)||(n+="To Date must be a valid date<br />"),n?($().toastmessage("showErrorToast",n),!1):!a||e||t?!0:($().toastmessage("showErrorToast","From Date or To Date must be specified"),!1)}function d(e,t){$("#attendance-date-table > tbody:last").empty(),$("#attendance-date-aggregates-table > tbody:last").empty();for(var a="",n=0;n<e.length;n++)a+=c(e[n]);$("#attendance-date-table > tbody:last").append(a),$("#attendance-date-aggregates-table > tbody:last").append(i(t))}function c(e){return J=""===j?"":'<td class="report-attendance-table-attendance-col" data-th="First">'+e.First_Service_Attendance+'</td><td class="report-attendance-table-attendance-col" data-th="Second">'+e.Second_Service_Attendance+"</td>",'<tr><td data-th="Date">'+e.Attendance_dt+'</td><td class="report-attendance-table-attendance-col" data-th="Total">'+e.Total_Attendance+"</td>"+J+"</tr>"}function i(e){var t="";return J=""===j?"":'<td class="report-attendance-table-attendance-col" data-th="Average First">'+e.Avg_First_Service_Attendance+'</td><td class="report-attendance-table-attendance-col" data-th="Average Second">'+e.Avg_Second_Service_Attendance+"</td>",t+='<tr><td data-th="Aggregate">Average</td><td class="report-attendance-table-attendance-col" data-th="Average Total">'+e.Avg_Total_Attendance+"</td>"+J+"</tr>",J=""===j?"":'<td class="report-attendance-table-attendance-col" data-th="Max First">'+e.Max_First_Service_Attendance+'</td><td class="report-attendance-table-attendance-col" data-th="Max Second">'+e.Max_Second_Service_Attendance+"</td>",t+='<tr><td data-th="Aggregate">Max</td><td class="report-attendance-table-attendance-col" data-th="Max Total">'+e.Max_Total_Attendance+"</td>"+J+"</tr>",J=""===j?"":'<td class="report-attendance-table-attendance-col" data-th="Min First">'+e.Min_First_Service_Attendance+'</td><td class="report-attendance-table-attendance-col" data-th="Min Second">'+e.Min_Second_Service_Attendance+"</td>",t+='<tr><td data-th="Aggregate">Min</td><td class="report-attendance-table-attendance-col" data-th="Min Total">'+e.Min_Total_Attendance+"</td>"+J+"</tr>"}function l(e){$("#adult-attendance-table > tbody:last").empty();for(var t="",a=0;a<e.length;a++)t+=y(e[a]);$("#adult-attendance-table > tbody:last").append(t)}function p(e){$("#mia-attendance-table > tbody:last").empty();for(var t="",a=0;a<e.length;a++)t+=v(e[a]);$("#mia-attendance-table > tbody:last").append(t)}function u(e){$("#follow-up-table > tbody:last").empty();for(var t="",a=0;a<e.length;a++)t+=b(e[a]);$("#follow-up-table > tbody:last").append(t)}function m(e){if($("#people-by-attender-status-table > tbody:last").empty(),0!==e.length){for(var t="",a="",n=0;n<e.length;n++)"true"==e[n].adult&&(e[n].attender_status!=a&&(t+=h(L[e[n].attender_status]),a=e[n].attender_status),t+=v(e[n]));$("#people-by-attender-status-table > tbody:last").append(t)}}function h(e){return'<tr class="row-header"><td>'+e+"</td></tr>"}function v(e){var t="";return e.first_name||e.last_name?(e.first_name&&(t+=e.first_name+" "),e.last_name&&(t+=e.last_name)):t=e.description,t='<a class="person_name" href="manage-person.php?id='+e.id+'">'+t+"</a>",'<tr adult="'+e.adult+'" personId="'+e.id+'"><td data-th="Name">'+t+"</td></tr>"}function y(e){return J=""===j?"":'<td class="report-attendance-table-attendance-col" data-th="First">'+e.First_Service_Attendance+'</td><td class="report-attendance-table-attendance-col" data-th="Second">'+e.Second_Service_Attendance+"</td>",'<tr personId="'+e.id+'"><td data-th="Name"><a class="person_name" href="manage-person.php?id='+e.id+'">'+e.display+"</a></td>"+J+'<td class="report-attendance-table-attendance-col" data-th="Total">'+e.Total_Attendance+"</td></tr>"}function b(e){var t="",a=e.primary_phone||"";return e.first_name||e.last_name?(e.first_name&&(t+=e.first_name+" "),e.last_name&&(t+=e.last_name)):t=e.description,t='<a class="person_name" href="manage-person.php?id='+e.id+'">'+t+"</a>",a=k(a),'<tr personId="'+e.id+'"><td data-th="Name">'+t+'</td><td class="checkbox-table-col" data-th="Visited?"><input type="checkbox" disabled '+("true"===e.visited?"checked ":"")+'/></td><td class="checkbox-table-col" data-th="Phone Number">'+a+'</td><td data-th="Thank You<br />Card Sent">'+(e.ty_card_date||"")+'</td><td data-th="Communication Card<br />Received">'+(e.communication_card_date||"")+"</td></tr>"}function f(e){var t="#"+e.target.parentElement.parentElement.parentElement.previousElementSibling.id,a=-1==e.target.id.indexOf("top")?$(t)[0].scrollHeight:0;$(t).animate({scrollTop:a},C,"swing",function(){$("<style></style>").appendTo($(document.body)).remove()})}function _(e,t){$(".reports-form").mask("Loading..."),$.ajax({type:"POST",url:"ajax/get_report.php",data:{type:e,params:JSON.stringify(t)}}).done(function(t){$(".reports-form").unmask();var a=JSON.parse(t);if(a.success)switch(e){case 1:d(a.totals,a.aggregates);break;case 2:l(a.people);break;case 3:p(a.people);break;case 4:u(a.people);break;case 5:m(a.people)}else 1===a.error?logout():$().toastmessage("showErrorToast","Error loading report")}).fail(function(){$(".reports-form").unmask(),$().toastmessage("showErrorToast","Error loading report")})}function g(e,t){var a=e;if(""===a)return!!t;var n=/^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/,r=a.match(n);if(null===r)return!1;var s=r[1],o=r[3],d=r[5];if(1>s||s>12)return!1;if(1>o||o>31)return!1;if((4==s||6==s||9==s||11==s)&&31==o)return!1;if(2==s){var c=d%4===0&&(d%100!==0||d%400===0);if(o>29||29==o&&!c)return!1}return!0}function k(e){if(e=e||"",null===e.match(/\D/g,"")){var t=e.replace(/\D/g);7===t.length?e=t.substr(0,3)+"-"+t.substr(3):10===t.length&&(e="("+t.substr(0,3)+") "+t.substr(3,3)+"-"+t.substr(6))}return e}function S(){var e=$.trim(F.value);return e&&F.checkValidity()?($(".reports-form").mask("Sending..."),$.ajax({type:"POST",url:"ajax/email_follow_up_summary.php",data:{email:e,params:JSON.stringify(N)}}).done(function(e){$(".reports-form").unmask();var t=JSON.parse(e);t.success?$().toastmessage("showSuccessToast","Summary sent successfully"):1===t.error?logout():$().toastmessage("showErrorToast","Error sending summary")}).fail(function(){$(".reports-form").unmask(),$().toastmessage("showErrorToast","Error sending summary")}),void 0):($().toastmessage("showErrorToast","Must specify a valid email"),void 0)}function A(){var e=$("#include-all-checkboxes input[type=checkbox]");$("#toggle-check").is(":checked")?e.each(function(e,t){t.checked=!0}):e.each(function(e,t){t.checked=!1})}$("#from-date").datepicker(),$("#to-date").datepicker();var T=document.querySelector("#to-date"),w=document.querySelector("#from-date"),x=document.querySelector("#report-type"),D=document.querySelector("#service-label-1"),E=document.querySelector("#service-label-2"),P=document.querySelector("#campus"),M=document.querySelector("#go-arrow"),F=document.querySelector("#email"),q=document.querySelector("#email-summary"),N=null,O=-1,j=-1,I=-1,J="",L={1:"Member",2:"Regular",3:"Irregular"},C=300;x.value="1",M.addEventListener("click",n),q.addEventListener("click",S),x.addEventListener("change",a),$(".top-bottom-links a").on("click",f),$("#toggle-check").on("change",A),t(),e()}();