!function(){"use strict";function e(){window.location="ajax/export_attendance.php"}function t(){var e=$("#service-label-1"),t=$("#service-label-2");e.children().remove(),t.children().remove(),$.each(options.service_labels,function(n,a){e.append('<option value="'+n+'">'+a+"</option>"),t.append('<option value="'+n+'">'+a+"</option>")}),t.append('<option value="">--None--</option>'),e.val(options.default_first_service_label),t.val(options.default_second_service_label),e=$("#campus"),e.children().remove(),$.each(options.campuses,function(t,n){e.append('<option value="'+t+'">'+n+"</option>")}),e.val(options.default_campus)}function n(){try{b()&&($(".attendance-form").mask("Loading..."),setTimeout(a,50))}catch(e){$(".attendance-form").unmask()}}function a(){var e,t,n,a,o,c,r,s,i=[];for(t=$("#attendance-table > tbody:last").children(),e=0;e<t.length;e++)if(null!==t[e].getAttribute("modified")){if(n=t[e].getAttribute("personId"),o=t[e].querySelector("[name=name_description]"),c=q(n),r=E(n),o){if(a=$.trim(o.value),""===a)continue}else a=void 0;-1===n.indexOf("-")&&(s=I(n),s&&(s.first=c,s.second=r)),i.push({id:n,adult:St,display:a,attendanceDate:V,first:c,second:r})}i.length>0||lt!=pt||ut!=ft?x(i):($(".attendance-form").unmask(),$().toastmessage("showWarningToast","No attendance was modified"))}function o(){(yt||confirm("Clear out any unsaved changes?"))&&c()}function c(){r(),p(mt)}function r(){yt=!0,$("#attendance-table > tbody:last").children().remove()}function s(){rt.blur(),yt=!1;var e={id:j(),adult:!0},t=_(e,V);$("#attendance-table > tbody:last").append(t),$("[personid="+e.id+"] input:checkbox").on("change",m),$("#attendance-table-container").animate({scrollTop:$("#attendance-table-container")[0].scrollHeight},$t),$(".attendance-table-attendance-col[service=second]").css("display",at?"":"none")}function i(e){if(!e){var t=new Date,n=t.getDate()-t.getDay();e=new Date(t.setDate(n))}$("#attendance-date").datepicker("setDate",e),V=G.value,Q=e,st.innerHTML=d(e)}function d(e){return gt[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}function l(){if(yt||confirm("If you change the date you will lose any unsaved changes. Continue?")){if(Z.value==et.value)return $().toastmessage("showErrorToast","First and Second Service cannot be the same"),void 0;Q=new Date(G.value),V=G.value,r(),w(!1)}else $("#attendance-date").datepicker("setDate",Q);st.innerHTML=d($("#attendance-date").datepicker("getDate"))}function u(e){var t="#attendance-table-container",n=$(t),a=-1==e.target.id.indexOf("top")?n[0].scrollHeight:0;n.stop().animate({scrollTop:a},$t,"swing",function(){$("<style></style>").appendTo($(document.body)).remove()})}function p(e){O(),N(),$(".attendance-table-attendance-col input:checkbox").off("change"),T(),mt=e;for(var t=V,n="",a=0;a<mt.length;a++)mt[a].active==K.checked&&(n+=f(mt[a],t));S(Lt),$("#attendance-table > tbody:last").append(n),$(".attendance-table-attendance-col input:checkbox").on("change",m),C()}function f(e){F(e.id,e.last_name,e.adult);var t=e.first?"checked":"",n=e.second?"checked":"",a="",o="";return a='<a class="person_name" href="manage-person.php?id='+e.id+'">'+e.display+"</a>",at&&(Tt=D(),o='<td class="attendance-table-attendance-col" service="second" data-th="Second?"><label for="'+Tt+'"><input id="'+Tt+'" type="checkbox" '+n+"/></label></td>"),Tt=D(),'<tr adult="'+e.adult+'" personId="'+e.id+'"><td data-th="Name"><button class="attendance-history-button"><span class="glyphicon glyphicon-folder-close" aria-hidden="true"></span></button>'+a+'</td><td class="attendance-table-attendance-col" service="first" data-th="First?"><label for="'+Tt+'"><input id="'+Tt+'" type="checkbox" '+t+"/></label></td>"+o+"</tr>"}function _(e){var t="";return at&&(Tt=D(),t='<td class="attendance-table-attendance-col" service="second" data-th="Second?"><label for="'+Tt+'"><input id="'+Tt+'" type="checkbox" /></label></td>'),Tt=D(),'<tr adult="'+e.adult+'" personId="'+e.id+'" modified="true"><td data-th="Name"><input name="name_description" type="text" placeholder="Last, First or Description" /></td><td class="attendance-table-attendance-col" service="first" data-th="First?"><label for="'+Tt+'"><input id="'+Tt+'" type="checkbox" /></label></td>'+t+"</tr>"}function v(e){if(yt=!0,e&&0!==e.length){var t,n,a,o,c,r,s=[],i=0;for($("[personid^=-]").remove(),t=0;t<e.length;t++)mt.push(e[t]),s.push(f(e[t],V));for(t=0;t<e.length;t++){for(o=e[t],c=!1,n=0;n<mt.length;n++)if(a=mt[n],i=n,-1===M(o,a)){$(s[t]).insertBefore("[personid="+a.id+"]"),mt.splice(n,0,o),c=!0;break}c===!1&&($("#attendance-table > tbody:last").append(s[t]),mt.splice(i+1,0,o)),r=$("[personid="+o.id+"]"),r.find("a.person_name").on("click",P),r.find("input:checkbox").on("change",m)}}}function m(e){var t=e.target,n=t.parentElement.parentElement.parentElement.getAttribute("personId"),a="first"===t.parentElement.parentElement.getAttribute("service"),o=(St?"adult":"kid")+"_total_count",c=(St?"adult":"kid")+"_"+(a?"first":"second")+"_count",r=at?a?E:q:function(){return!1};yt=!1,t.parentElement.parentElement.parentElement.setAttribute("modified",!0),t.checked?(Lt[c]++,r(n)||Lt[o]++):(Lt[c]--,r(n)||Lt[o]--),h()}function h(){St?(wt.adult_first_count.innerHTML=Lt.adult_first_count+lt,wt.adult_second_count.innerHTML=Lt.adult_second_count+ut,wt.adult_total_count.innerHTML=Lt.adult_total_count+lt+ut,wt.kid_first_count.innerHTML=Lt.kid_first_count+_t,wt.kid_second_count.innerHTML=Lt.kid_second_count+vt,wt.kid_total_count.innerHTML=Lt.kid_total_count+_t+vt):(wt.adult_first_count.innerHTML=Lt.adult_first_count+_t,wt.adult_second_count.innerHTML=Lt.adult_second_count+vt,wt.adult_total_count.innerHTML=Lt.adult_total_count+_t+vt,wt.kid_first_count.innerHTML=Lt.kid_first_count+lt,wt.kid_second_count.innerHTML=Lt.kid_second_count+ut,wt.kid_total_count.innerHTML=Lt.kid_total_count+lt+ut),Lt.total_first_count=Lt.adult_first_count+Lt.kid_first_count,Lt.total_second_count=Lt.adult_second_count+Lt.kid_second_count,Lt.total_total_count=Lt.adult_total_count+Lt.kid_total_count,wt.total_first_count.innerHTML=Lt.total_first_count+lt+_t,wt.total_second_count.innerHTML=Lt.total_second_count+ut+vt,wt.total_total_count.innerHTML=Lt.total_total_count+lt+ut+_t+vt}function b(){var e=parseInt(it.value||0),t=parseInt(dt.value||0),n="";return(isNaN(e)||isNaN(t))&&(n+="Visitor count must be a number"),(0>e||0>t)&&(n+="Number of visitors cannot be negative"),n?($().toastmessage("showErrorToast",n),!1):(lt=e,ut=t,h(),!0)}function y(e){$("#person-attendance-history-table > tbody:last").children().remove(),kt.dialog("open"),kt[0].querySelector("#person-name").innerHTML=H(e,!1);for(var t="",n=0;n<e.attendance.length;n++)t+=k(e.attendance[n]);$("#person-attendance-history-table > tbody:last").append(t)}function k(e){var t=e.first?"checked":"",n="";return at&&(n='<td class="attendance-table-attendance-col" service="second" data-th="Second?"><input type="checkbox" '+(e.second?"checked":"")+" disabled/></td>"),'<tr><td data-th="Date">'+e.date+'</td><td class="attendance-table-attendance-col" service="first" data-th="First?"><input type="checkbox" '+t+" disabled/></td>"+n+"</tr>"}function g(){for(var e in Lt)Lt.hasOwnProperty(e)&&(Lt[e]=parseInt(Lt[e]))}function T(){it.value=lt=pt,dt.value=ut=ft,Lt=jQuery.extend({},B);for(var e in Lt)Lt.hasOwnProperty(e)&&(wt[e].innerHTML=Lt[e]);b()}function S(e){Lt.total_first_count=Lt.adult_first_count+Lt.kid_first_count,Lt.total_second_count=Lt.adult_second_count+Lt.kid_second_count,Lt.total_total_count=Lt.adult_total_count+Lt.kid_total_count;for(var t in e)e.hasOwnProperty(t)&&(Lt[t]=e[t],wt[t].innerHTML=e[t])}function L(e){$(".attendance-form").mask("Loading..."),$.ajax({type:"GET",url:"ajax/get_person_attendance.php",data:{campus:ot,label1:nt,label2:at,id:e}}).done(function(e){$(".attendance-form").unmask();var t=JSON.parse(e);t.success?(y(t.person),at?$(".attendance-table-attendance-col[service=second]").css("display",""):$(".attendance-table-attendance-col[service=second]").css("display","none")):1===t.error?logout():$().toastmessage("showErrorToast","Error loading person's attendance history")}).fail(function(){$(".attendance-form").unmask(),$().toastmessage("showErrorToast","Error loading person's attendance history")})}function w(e){$(".attendance-form").mask("Loading..."),"undefined"==typeof e&&(e=!0),e||$(".attendance-form").mask("Loading..."),$.ajax({type:"POST",url:"ajax/get_attendance.php",data:{date:G.value,active:K.checked,adult:W.checked,campus:tt.value,label1:Z.value,label2:et.value,isDefaultLoad:e}}).done(function(n){var a=JSON.parse(n);if(a.success){if(e&&t(),ft=0,vt=0,a.attendance_dt&&i(new Date(a.attendance_dt)),"undefined"!=typeof a.attendance_adults){var o="true"==a.attendance_adults;W.checked=o,Y.checked=!o}if("undefined"!=typeof a.attendance_active){var c="true"==a.attendance_active;K.checked=c,U.checked=!c}"undefined"!=typeof a.campus&&(tt.value=a.campus),"undefined"!=typeof a.label1&&(Z.value=a.label1),"undefined"!=typeof a.label2&&(et.value=a.label2),St=W.checked,ot=tt.value,nt=Z.value,at=et.value;var r=$("#service-label-2").val();St?(pt=lt=parseInt(a.visitors1.adult_visitors),_t=parseInt(a.visitors1.kid_visitors),r&&(ft=ut=parseInt(a.visitors2.adult_visitors),vt=parseInt(a.visitors2.kid_visitors))):(pt=lt=parseInt(a.visitors1.kid_visitors),_t=parseInt(a.visitors1.adult_visitors),r&&(ft=ut=parseInt(a.visitors2.kid_visitors),vt=parseInt(a.visitors2.adult_visitors))),Lt=a.totals,g(),B=jQuery.extend({},Lt),p(a.people),b(),$("#name-table-header").text(St?"Adults":"Kids");var s=options.service_labels[$("#service-label-1").val()];if($(".first-service-header").text(s),$("#first-service-total-header").text(s+" Attendance"),$("#visitors-first-service-label").text(s+" Visitors"),r?($(".second-service-header").text(options.service_labels[r]),$("#second-service-total-header").text(options.service_labels[r]+" Attendance"),$(".second-service-header").css("display",""),$("#first-service-total-row").css("display",""),$("#second-service-total-row").css("display",""),$(".attendance-table-attendance-col[service=second]").css("display",""),$("#visitors-second-service-label").css("display","").text(options.service_labels[r]+" Visitors"),$("#visitors-second-service").css("display","")):($(".second-service-header").css("display","none"),$("#first-service-total-row").css("display","none"),$("#second-service-total-row").css("display","none"),$(".attendance-table-attendance-col[service=second]").css("display","none"),$("#visitors-second-service-label").css("display","none"),$("#visitors-second-service").css("display","none")),$(".campus-text").text(options.campuses[$("#campus").val()]),a.scroll_to_id&&a.scroll_to_id>=0){var d=$("[personid="+a.scroll_to_id+"]")[0];if(d){var l="#attendance-table-container",u=$(l).offset().top,f=d.offsetTop;$("body").animate({scrollTop:u},300),$(l).animate({scrollTop:f},$t)}}$(".attendance-form").unmask()}else $(".attendance-form").unmask(),1===a.error?logout():$().toastmessage("showErrorToast","Error loading")}).fail(function(){$(".attendance-form").unmask(),$().toastmessage("showErrorToast","Error loading")})}function x(e){$.ajax({type:"POST",url:"ajax/save_people.php",data:{people:JSON.stringify(e),campus:ot,label1:nt,label2:at,visitors1:lt,visitors2:ut,adult:St,date:V}}).done(function(e){$(".attendance-form").unmask();var t=JSON.parse(e);t.success?(B=jQuery.extend({},Lt),v(t.people),$(".attendance-table-attendance-col[service=second]").css("display",at?"":"none"),$().toastmessage("showSuccessToast","Save successful")):1===t.error?logout():$().toastmessage("showErrorToast","Error saving")})}function q(e){return $("[personId="+e+"] input:checkbox:first")[0].checked}function E(e){return $("[personId="+e+"] input:checkbox:last")[0].checked}function M(e,t){if(e==t)return 0;if(null===e)return-1;if(null===t)return 1;var n=H(e,!0),a=H(t,!0);if(e.first_name||e.last_name){if(!t.first_name&&!t.last_name)return-1;if(n==a)return 0;if(n.toLowerCase()<a.toLowerCase())return-1;if(n.toLowerCase()>a.toLowerCase())return 1}else{if(t.first_name||t.last_name)return 1;if(n==a)return 0;if(n.toLowerCase()<a.toLowerCase())return-1;if(n.toLowerCase()>a.toLowerCase())return 1}}function H(e,t){if(null===e)return"";var n="";return e.first_name||e.last_name?(e.last_name&&(n+=e.last_name),e.last_name&&e.first_name?t===!0?n+=", "+e.first_name:n=e.first_name+" "+n:e.first_name&&(n+=e.first_name+" ")):n=e.description,n}function I(e){for(var t=0;t<mt.length;t++)if(mt[t].id===e)return mt[t];return null}function D(){return"id-"+ ++ht}function j(){return--bt}function C(){$("#attendance-nav").on("click",P),$("#reports-nav").on("click",P),$("a.person_name").on("click",P),$("button.attendance-history-button").on("click",A)}function N(){$("#attendance-nav").off("click",P),$("#reports-nav").off("click",P),$("a.person_name").off("click",P),$("button.attendance-history-button").off("click",A)}function A(){var e=this.parentElement.parentElement.getAttribute("personId");L(e)}function O(){document.querySelector("#jump-to").innerHTML="<option>--Jump To Letter--</option>"}function F(e,t){if(t){var n=t.substr(0,1).toUpperCase();if(!($('#jump-to option:contains("'+n+'")').length>0)){var a=document.querySelector("#jump-to"),o=document.createElement("option");o.setAttribute("scroll_to_id",e),o.innerHTML=n,a.appendChild(o)}}}function J(e){var t=e.target.options[e.target.options.selectedIndex];if(t){var n=$("[personid="+t.getAttribute("scroll_to_id")+"]")[0];if(n){var a="#attendance-table-container",o=$(a).offset().top,c=n.offsetTop;$("body").animate({scrollTop:o},300),$(a).animate({scrollTop:c},$t)}}}function P(e){yt||confirm("If you continue you will lose any unsaved changes. Continue?")||e.preventDefault()}$("#attendance-date").datepicker({dateFormat:"m/d/yy"});var Q,V,B,G=document.querySelector("#attendance-date"),K=document.querySelector("#active-true"),U=document.querySelector("#active-false"),W=document.querySelector("#adults-true"),Y=document.querySelector("#adults-false"),z=document.querySelector("#update"),R=document.querySelector("#cancel"),X=document.querySelector("#export"),Z=document.querySelector("#service-label-1"),et=document.querySelector("#service-label-2"),tt=document.querySelector("#campus"),nt=-1,at=-1,ot=-1,ct=document.querySelector("#go-arrow"),rt=document.querySelector("#add-person"),st=document.querySelector("#attendance-date-display"),it=document.querySelector("#visitors-first-service"),dt=document.querySelector("#visitors-second-service"),lt=0,ut=0,pt=0,ft=0,_t=0,vt=0,mt=[],ht=0,bt=-1,yt=!0,$t=1e3,kt=$(".dialog-form").dialog({autoOpen:!1,height:420,width:350,modal:!0,open:function(){$("body").css({overflow:"hidden"})},beforeClose:function(){$("body").css({overflow:"inherit"})}}),gt=["January","February","March","April","May","June","July","August","September","October","November","December"],Tt=-1,St=!0,Lt={},wt={total_first_count:document.querySelector("#total-first-count"),total_second_count:document.querySelector("#total-second-count"),total_total_count:document.querySelector("#total-total-count"),adult_first_count:document.querySelector("#adult-first-count"),adult_second_count:document.querySelector("#adult-second-count"),adult_total_count:document.querySelector("#adult-total-count"),kid_first_count:document.querySelector("#kid-first-count"),kid_second_count:document.querySelector("#kid-second-count"),kid_total_count:document.querySelector("#kid-total-count")};i(),z.addEventListener("click",n),R.addEventListener("click",o),X.addEventListener("click",e),ct.addEventListener("click",l),rt.addEventListener("click",s),$(".jump-to").on("change",J),$(".navigation-links a").on("click",u),$("#refresh-visitors").on("click",b),w()}();