!function(){"use strict";function e(e){var t=$("#state");$.each(e,function(e,o){t.append("<option value="+o.abbreviation+">"+o.name+"</option>")}),t.val("OH")}function t(){var e=$("#follow-up-frequency");$.each(ln,function(t,o){e.append("<option value="+t+">"+o+"</option>")}),e.val("")}function o(){var e=$("#follow-up-type");$.each(an,function(t,o){e.append("<option value="+t+">"+o+"</option>")}),e.val("2"),e=$("#relationship-type"),$.each(cn,function(t,o){e.append("<option value="+t+">"+o+"</option>")}),e.val("1"),e=$("#attender-status"),$.each(sn,function(t,o){e.append("<option value="+t+">"+o+"</option>")}),e.val("3")}function n(e){St.value=e.first_name,Et.value=e.last_name,qt.value=e.description,Tt.value=e.first_visit,xt.innerHTML=e.first_attendance_dt||'<span style="font-style: italic;">(None)</span>',At.value=e.attender_status,Lt.checked=e.adult,Ot.checked=e.active,Ct.checked=e.baptized,jt.checked=e.saved,Nt.checked=e.visitor,Mt.checked=e.assigned_agent,Pt.checked=e.starting_point_notified,Ht.value=e.street1,It.value=e.street2,Jt.value=e.city,zt.value=e.zip,e.state&&(Yt.value=e.state),Ft.value=e.email,Rt.value=bt(e.primary_phone),Gt.value=e.primary_phone_type,Dt.value=bt(e.secondary_phone),Ut.value=e.secondary_phone_type,r(e),i(e),z(e.follow_ups),D(e.relationships),x()}function r(e){Vt.checked=e.commitment_christ,Bt.checked=e.recommitment_christ,Zt.checked=e.commitment_tithe,Kt.checked=e.commitment_ministry,Qt.checked=e.commitment_baptism,Wt.checked=e.info_next,Xt.checked=e.info_gkids,eo.checked=e.info_ggroups,to.checked=e.info_gteams,oo.checked=e.info_member,no.checked=e.info_visit}function i(e){var t=ut(e);on.innerHTML="OH"===t||""===t?"":'<a href="'+rn+t+'" target="_blank"><img border="0" src="'+nn+t+'" /></a>'}function a(){var e={id:wt.id,first_name:$.trim(St.value),last_name:$.trim(Et.value),description:$.trim(qt.value),first_visit:$.trim(Tt.value),attender_status:At.value,adult:Lt.checked,active:Ot.checked,baptized:Ct.checked,saved:jt.checked,visitor:Nt.checked,assigned_agent:Mt.checked,street1:$.trim(Ht.value),street2:$.trim(It.value),city:$.trim(Jt.value),zip:$.trim(zt.value),state:$.trim(Yt.value),email:$.trim(Ft.value),primary_phone:$.trim(Rt.value),primary_phone_type:Gt.value,secondary_phone:$.trim(Dt.value),secondary_phone_type:Ut.value,commitment_christ:Vt.checked,recommitment_christ:Bt.checked,commitment_tithe:Zt.checked,commitment_ministry:Kt.checked,commitment_baptism:Qt.checked,info_next:Wt.checked,info_gkids:Xt.checked,info_ggroups:eo.checked,info_gteams:to.checked,info_member:oo.checked,info_visit:no.checked};"OH"===$.trim(ut(e))&&(e.state=""),l(e)&&_(e)}function c(){var e=[];return $("#follow-up-table tbody tr").each(function(t,o){var n=o.children[0].getAttribute("typeCd")||"";e.push({id:o.getAttribute("follow_up_id"),typeCd:n,type:an[n],date:o.children[1].innerHTML||"",comments:o.children[3].innerHTML||"",visitorsIds:o.children[2].getAttribute("visitorsIds").split(",")||"",visitors:o.children[2].innerHTML.split(", ")||""})}),e}function s(){var e=[];return $("#relationship-table tbody tr").each(function(t,o){var n=o.children[0].getAttribute("typeCd")||"";e.push({id:o.getAttribute("relationship_id"),typeCd:n,type:cn[n],person_id:wt.id,relation_id:o.children[1].getAttribute("relationid"),name:o.children[1].getAttribute("relationname")})}),e}function l(e){var t="",o=!!e.first_name,n=!!e.last_name,r=!!e.description;return!o&&n?t+="First Name cannot be blank if Last Name is specified<br />":o&&!n?t+="Last Name cannot be blank if First Name is specified<br />":o||n||r||(t+="Must specify either First and Last Name or Description<br />"),e.first_name.length>50&&(t+="First Name cannot exceed 50 characters<br />"),e.last_name.length>50&&(t+="Last Name cannot exceed 50 characters<br />"),e.description.length>250&&(t+="Description cannot exceed 250 characters<br />"),e.email.length>100&&(t+="Email cannot exceed 100 characters<br />"),Ft.checkValidity()||(t+="Email is not valid<br />"),e.primary_phone.length>15?t+="Primary Phone cannot exceed 15 characters<br />":e.primary_phone.length>0&&!tn.test(e.primary_phone)&&(t+="Primary Phone is not a valid phone number format<br />"),e.secondary_phone.length>15?t+="Secondary Phone cannot exceed 15 characters<br />":e.secondary_phone.length>0&&!tn.test(e.secondary_phone)&&(t+="Secondary Phone is not a valid phone number format<br />"),e.street1.length>100&&(t+="Street 1 cannot exceed 100 characters<br />"),e.street2.length>100&&(t+="Street 2 cannot exceed 100 characters<br />"),e.city.length>100&&(t+="City cannot exceed 100 characters<br />"),e.zip.length>5&&(t+="Zip Code cannot exceed 5 characters<br />"),e.street1.length>100&&(t+="Street 1 cannot exceed 100 characters<br />"),t?($().toastmessage("showErrorToast",t),!1):!0}function d(){confirm("Deleting someone also deletes their attendance history. Continue?")&&b()}function u(){confirm("If you continue you will lose any unsaved changes. Continue?")&&(n(wt),en=!0)}function p(){var e=$.trim($o.value);""===e?$().toastmessage("showErrorToast","Must enter Name"):h(e)}function m(){var e=$.trim($o.value);""===e?$().toastmessage("showErrorToast","Must enter Name"):f(e)}function h(e){$.ajax({type:"POST",url:"ajax/create_person.php",data:{person_display:e}}).done(function(e){var t=JSON.parse(e);t.success?L(t.person_id,t.person_name):1===t.error?logout():$().toastmessage("showErrorToast","Error loading visitors")}).fail(function(){$().toastmessage("showErrorToast","Error loading visitors")})}function f(e){$.ajax({type:"GET",url:"ajax/search.php",data:{search:e}}).done(function(e){var t=JSON.parse(e);t.success?C(t.people):1===t.error?logout():$().toastmessage("showErrorToast","Error loading visitors")}).fail(function(){$().toastmessage("showErrorToast","Error loading visitors")})}function y(){$.ajax({type:"GET",url:"ajax/states.json"}).done(function(n){if($.isArray(n))e(n);else{var r=JSON.parse(n);e(r)}o(),t(),v(),g()}).fail(function(){$().toastmessage("showErrorToast","Error loading states")})}function g(){$.ajax({type:"GET",url:"ajax/get_visitors.php"}).done(function(e){var t=JSON.parse(e);t.success?$t=t.people:1===t.error?logout():$().toastmessage("showErrorToast","Error loading visitors")}).fail(function(){$().toastmessage("showErrorToast","Error loading visitors")})}function v(){$.ajax({type:"GET",url:"ajax/get_person.php",data:{id:kt.id}}).done(function(e){var t=JSON.parse(e);t.success?(wt=t.person,n(t.person)):1===t.error?logout():$().toastmessage("showErrorToast","Error loading")}).fail(function(){$().toastmessage("showErrorToast","Error loading person")})}function _(e){$.ajax({type:"POST",url:"ajax/save_person.php",data:{person:JSON.stringify(e)}}).done(function(t){var o=JSON.parse(t);o.success?(e.follow_ups=c(),e.relationships=s(),wt=e,en=!0,i(e),$().toastmessage("showSuccessToast","Save successful")):1===o.error?logout():$().toastmessage("showErrorToast","Error saving person")}).fail(function(){$().toastmessage("showErrorToast","Error saving person")})}function b(){$.ajax({type:"POST",url:"ajax/delete_person.php",data:{id:wt.id}}).done(function(e){var t=JSON.parse(e);t.success?window.location="attendance.html":1===t.error?logout():$().toastmessage("showErrorToast","Error deleting person")}).fail(function(){$().toastmessage("showErrorToast","Error deleting person")})}function k(e,t){$.ajax({type:"POST",url:"ajax/save_follow_up.php",data:{follow_up:JSON.stringify(e)}}).done(function(o){var n=JSON.parse(o);n.success?(e.id=n.follow_up_id,S(n.communication_card_options[0]),r(n.communication_card_options[0]),t.call(this,e),$().toastmessage("showSuccessToast","Follow up save successful")):1===n.error?logout():n.warning?$().toastmessage("showErrorToast",n.warning):$().toastmessage("showErrorToast","Error saving follow up")}).fail(function(){$().toastmessage("showErrorToast","Error saving follow up")})}function w(e){$.ajax({type:"POST",url:"ajax/delete_follow_up.php",data:{id:e,personId:wt.id}}).done(function(t){var o=JSON.parse(t);o.success?($("#follow-up-table tr[follow_up_id="+e+"]").remove(),S(o.communication_card_options[0]),r(o.communication_card_options[0])):1===o.error?logout():o.warning?$().toastmessage("showErrorToast",o.warning):$().toastmessage("showErrorToast","Error deleting follow up")}).fail(function(){$().toastmessage("showErrorToast","Error deleting follow up")})}function S(e){for(var t in e)e.hasOwnProperty(t)&&(e[t]="true"===e[t])}function E(e,t){$.ajax({type:"POST",url:"ajax/save_relationship.php",data:{relationship:JSON.stringify(e)}}).done(function(o){var n=JSON.parse(o);if(n.success)e.id=n.relationship_id,t.call(this,e),x(),$().toastmessage("showSuccessToast","Relationship save successful");else if(1===n.error)logout();else{var r="Error saving relationship";n.msg&&(r=n.msg),$().toastmessage("showErrorToast",r)}}).fail(function(){$().toastmessage("showErrorToast","Error saving relationship")})}function q(e){$.ajax({type:"POST",url:"ajax/delete_relationship.php",data:{id:e}}).done(function(t){var o=JSON.parse(t);o.success?($("#relationship-table tr[relationship_id="+e+"]").remove(),x()):1===o.error?logout():$().toastmessage("showErrorToast","Error deleting relationship")}).fail(function(){$().toastmessage("showErrorToast","Error deleting relationship")})}function T(){$.ajax({type:"POST",url:"ajax/copy_address_to_spouse.php",data:{personId:wt.id}}).done(function(e){var t=JSON.parse(e);t.success?$().toastmessage("showSuccessToast","Address copied successful"):1===t.error?logout():$().toastmessage("showErrorToast","Error copying address")}).fail(function(){$().toastmessage("showErrorToast","Error copying address")})}function x(){so.style.display=$("#relationship-table td[typecd=1]").length>0?"":"none"}function A(e){var t=e.currentTarget.parentElement.parentElement,o=t.getAttribute("person_id"),n=t.children[0].getAttribute("person_name");L(o,n)}function L(e,t){M(),go.innerHTML='<a class="person_name" href="manage-person.html?id='+e+'">'+t+"</a>",go.setAttribute("relationid",e),go.setAttribute("person_name",t)}function O(e){var t=e.currentTarget.parentElement.parentElement,o=t.getAttribute("person_id");window.location="manage-person.html?id="+o}function C(e){$("a.person_name").off("click",A),$("button.search-button").off("click",O),$("#search-table tbody tr").remove();for(var t=0;t<e.length;t++)j(e[t]);$("a.person_name").on("click",A),$("button.search-button").on("click",O)}function j(e){var t=H(e);$("#search-table > tbody:last").append('<tr person_id="'+e.id+'"><td data-th="Name" person_name="'+t+'"><a class="person_name" href="javascript:void(0);">'+t+'</a></td><td data-th="Address">'+P(e)+'</td><td data-th="" class="search-table-button-col"><button class="search-button btn btn-xs btn-info">Manage</button></td></tr>')}function N(){bo.dialog("open")}function M(){bo.dialog("close")}function P(e){var t="";return t+=e.street1||"",e.street1&&(t+="<br />"),t+=e.street2||"",e.street2&&(t+="<br />"),t+=e.city||"",e.city&&e.state&&(t+=","),t+=" ",t+=e.state||"",t+=" ",t+=e.zip||"",t.trim()}function H(e,t){if(null===e)return"";var o="";return e.first_name||e.last_name?(e.last_name&&(o+=e.last_name),e.last_name&&e.first_name?t===!0?o+=", "+e.first_name:o=e.first_name+" "+o:e.first_name&&(o+=e.first_name+" ")):o=e.description,o}function I(){Mo.value="2",Po.value="",Po.disabled=!1,Ho.checked=!1,Wo.value="",Fo.checked=!1,Ro.checked=!1,Do.checked=!1,Go.checked=!1,Uo.checked=!1,Yo.checked=!1,Vo.checked=!1,Bo.checked=!1,Zo.checked=!1,Ko.checked=!1,Qo.checked=!1,ht();var e=$("#relationship-table td[typecd=1]");Co.style.display=e.length>0?"inherit":"none",jo.checked=!0;for(var t=Io.querySelectorAll("input"),o=0;o<t.length;o++)t[o].checked=!1}function J(){var e=$.trim(Po.value),t=$.trim(Mo.value),o=$.trim(Wo.value),n=[],r=[],i={frequency:Jo.value,commitment_christ:!1,recommitment_christ:!1,commitment_tithe:!1,commitment_ministry:!1,commitment_baptism:!1,info_next:!1,info_gkids:!1,info_ggroups:!1,info_gteams:!1,info_member:!1,info_visit:!1},a="",c="";""!==o||1!=t&&2!=t||(a+="Must specify comments<br />"),""!==e||Ho.checked||(a+="Must specify a date or mark it unknown<br />"),o.length>5e3&&(a+="Comments cannot exceed 5000 characters<br />");for(var s=Io.querySelectorAll("input"),l=0;l<s.length;l++)s[l].checked&&(n.push($.trim(s[l].nextSibling.innerHTML)),r.push(s[l].getAttribute("personid")));if(0===r.length&&(a+="Must specify a visitor<br />"),a)return $().toastmessage("showErrorToast",a),!1;var d=$("#relationship-table td[typecd=1]");return d.length>0&&jo.checked&&-1===Oo.dialog("option","title").indexOf("Edit")&&(c=d.next()[0].getAttribute("relationid")),3==t&&(i={frequency:Jo.value,commitment_christ:Fo.checked,recommitment_christ:Ro.checked,commitment_tithe:Do.checked,commitment_ministry:Go.checked,commitment_baptism:Uo.checked,info_next:Yo.checked,info_gkids:Vo.checked,info_ggroups:Bo.checked,info_gteams:Zo.checked,info_member:Ko.checked,info_visit:Qo.checked}),{id:-1===Oo.dialog("option","title").indexOf("Edit")?vt():No.value,personId:wt.id,spouseId:c,date:e,typeCd:t,type:Mo.selectedOptions[0].text,comments:o,visitors:n,visitorsIds:r,communication_card_options:i}}function z(e){gt(),$("#follow-up-table tbody tr").remove();for(var t=0;t<e.length;t++)F(e[t]);yt()}function F(e){!e.type&&e.typeCd&&(e.type=an[e.typeCd]||""),e.date=e.date||"";var t=[];for(var o in e.communication_card_options)e.communication_card_options.hasOwnProperty(o)&&e.communication_card_options[o]===!0&&t.push(o);$("#follow-up-table > tbody:last").append('<tr follow_up_id="'+e.id+'" communication_card_options="'+t.join(",")+'" frequency="'+e.communication_card_options.frequency+'"><td data-th="Type" typeCd="'+e.typeCd+'">'+e.type+'</td><td data-th="Date" class="follow-up-table-date-col">'+e.date+'</td><td data-th="By" visitorsIds="'+e.visitorsIds.join(",")+'">'+e.visitors.join(", ")+'</td><td data-th="Comments" class="follow-up-table-comments-col">'+e.comments+'</td><td data-th="" class="follow-up-table-button-col"><button class="edit-follow-up"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button><button class="delete-follow-up"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span></button></td></tr>')}function R(e){var t=$("#follow-up-table tr[follow_up_id="+e.id+"]"),o=t.children(),n=[];for(var r in e.communication_card_options)e.communication_card_options.hasOwnProperty(r)&&e.communication_card_options[r]===!0&&n.push(r);t[0].setAttribute("frequency",e.communication_card_options.frequency),t[0].setAttribute("communication_card_options",n.join(",")),o[0].setAttribute("typeCd",e.typeCd),o[0].innerHTML=e.type,o[1].innerHTML=e.date,o[2].innerHTML=e.visitors.join(", "),o[2].setAttribute("visitorsIds",e.visitorsIds.join(",")),o[3].innerHTML=e.comments}function D(e){gt(),$("#relationship-table tbody tr").remove();for(var t=0;t<e.length;t++)G(e[t]);yt()}function G(e){!e.type&&e.typeCd&&(e.type=cn[e.typeCd]||""),$("#relationship-table > tbody:last").append('<tr relationship_id="'+e.id+'"><td data-th="Type" typeCd="'+e.typeCd+'">'+e.type+'</td><td data-th="Name" relationId="'+e.relation_id+'" relationname="'+e.name+'"><a class="person_name" href="manage-person.html?id='+e.relation_id+'">'+e.name+'</a></td><td data-th="" class="relationship-table-button-col"><button class="edit-relationship"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button><button class="delete-relationship"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span></button></td></tr>')}function U(e){var t=$("#relationship-table tr[relationship_id="+e.id+"]").children();t[0].setAttribute("typeCd",e.typeCd),t[0].innerHTML=e.type,t[1].innerHTML=e.name}function Y(){if(""===Io.innerHTML.trim())for(var e,t=0;t<$t.length;t++)e=$t[t],Io.innerHTML+='<div class="check-field"><input type="checkbox" personid="'+e.id+'" id="follow-up-by-'+e.id+'"/><label for="follow-up-by-'+e.id+'">'+H(e)+"</label></div>"}function V(){lo.dialog("open"),Z(),lo.dialog("option","title","Add Relationship"),mo.innerHTML=H(wt)}function B(){lo.dialog("close")}function Z(){po.value="1",go.innerHTML="(Select a person)",go.setAttribute("relationid",""),go.setAttribute("person_name",""),vo.style.display="none"}function K(){var e=X();return e===!1?!1:(E(e,function(e){G(e),$("button.edit-relationship:last").on("click",et),$("button.delete-relationship:last").on("click",tt),lo.dialog("close")}),void 0)}function Q(){var e=X();return e===!1?!1:(E(e,function(e){U(e),lo.dialog("close")}),void 0)}function W(){-1===lo.dialog("option","title").indexOf("Edit")?K():Q()}function X(){var e=$.trim(po.value),t=go.getAttribute("relationid"),o="",n="";if(t?t==wt.id&&(o+="Person cannot have a relationship with themself<br />"):o+="Must select a person<br />",o)return $().toastmessage("showErrorToast",o),!1;var r=$("#relationship-table td[typecd=1]");return r.length>0&&"2"===e&&_o.checked&&(n=r.next()[0].getAttribute("relationid")),{id:-1===lo.dialog("option","title").indexOf("Edit")?_t():uo.value,spouseId:n,typeCd:e,type:po.selectedOptions[0].text,person_id:wt.id,relation_id:t,name:go.getAttribute("person_name")}}function et(e){lo.dialog("open");var t=e.currentTarget.parentElement.parentElement;po.value=t.children[0].getAttribute("typeCd")||"",uo.value=t.getAttribute("relationship_id"),L(t.children[1].getAttribute("relationid"),t.children[1].getAttribute("relationname")),lo.dialog("option","title","Edit Relationship")}function tt(e){if(confirm("Are you sure you would like to PERMANENTLY delete this Relationship?")){var t=e.currentTarget.parentElement.parentElement.getAttribute("relationship_id");q(t)}}function ot(){Oo.dialog("open"),I(),Y(),Oo.dialog("option","title","Add Follow Up")}function nt(){Oo.dialog("close")}function rt(e){var t=J();return t===!1?!1:(k(t,function(t){F(t),$("button.edit-follow-up:last").on("click",lt),$("button.delete-follow-up:last").on("click",dt),en=!1,e.call(this)}),void 0)}function it(e){var t=J();return t===!1?!1:(k(t,function(t){R(t),en=!1,e.call(this)}),void 0)}function at(){-1===Oo.dialog("option","title").indexOf("Edit")?rt():it()}function ct(){-1===Oo.dialog("option","title").indexOf("Edit")?rt(I):it(I)}function st(){-1===Oo.dialog("option","title").indexOf("Edit")?rt(nt):it(nt)}function lt(e){Oo.dialog("open"),Co.style.display="none",Y();var t,o=e.currentTarget.parentElement.parentElement,n=o.children[1].innerHTML||"",r=(o.getAttribute("communication_card_options")||"").split(","),i={commitment_christ:!1,recommitment_christ:!1,commitment_tithe:!1,commitment_ministry:!1,commitment_baptism:!1,info_next:!1,info_gkids:!1,info_ggroups:!1,info_gteams:!1,info_member:!1,info_visit:!1};for(t=0;t<r.length;t++)i[r[t]]=!0;Jo.value=o.getAttribute("frequency")||"",Mo.value=o.children[0].getAttribute("typeCd")||"",Po.value=n,Wo.value=o.children[3].innerHTML||"",No.value=o.getAttribute("follow_up_id"),Ho.checked=""===n,Fo.checked=i.commitment_christ,Ro.checked=i.recommitment_christ,Do.checked=i.commitment_tithe,Go.checked=i.commitment_ministry,Uo.checked=i.commitment_baptism,Yo.checked=i.info_next,Vo.checked=i.info_gkids,Bo.checked=i.info_ggroups,Zo.checked=i.info_gteams,Ko.checked=i.info_member,Qo.checked=i.info_visit,Po.disabled=Ho.checked;var a=o.children[2].getAttribute("visitorsIds")||"",c=a.split(","),s=Io.querySelectorAll("input");for(t=0;t<s.length;t++)s[t].checked=c.indexOf(s[t].getAttribute("personid"))>=0;ht(),Oo.dialog("option","title","Edit Follow Up")}function dt(e){if(confirm("Are you sure you would like to PERMANENTLY delete this Follow Up?")){var t=e.currentTarget.parentElement.parentElement.getAttribute("follow_up_id");w(t)}}function ut(e){var t="";return t+=e.street1||"",t+=" ",t+=e.street2||"",t+=" ",t+=e.city||"",t+=" ",t+=e.state||"",t+=" ",t+=e.zip||"",t.trim()}function pt(e){Po.disabled=e.currentTarget.checked,Po.value=""}function mt(){var e=$.trim(po.value);if("2"===e){var t=$("#relationship-table td[typecd=1]");vo.style.display=t.length>0?"inherit":"none",_o.checked=!0}else vo.style.display="none"}function ht(){$("#follow-up-frequency-container").css("display",3==Mo.value?"inherit":"none"),zo.style.display=3==Mo.value?"inherit":"none"}function ft(e){en||confirm("If you continue you will lose any unsaved changes. Continue?")||e.preventDefault()}function yt(){$("#attendance-nav").on("click",ft),$("#reports-nav").on("click",ft),$("button.edit-follow-up").on("click",lt),$("button.delete-follow-up").on("click",dt),$("button.edit-relationship").on("click",et),$("button.delete-relationship").on("click",tt)}function gt(){$("#attendance-nav").off("click",ft),$("#reports-nav").off("click",ft),$("button.edit-follow-up").off("click",lt),$("button.delete-follow-up").off("click",dt),$("button.edit-relationship").off("click",et),$("button.delete-relationship").off("click",tt)}function vt(){return Xo--}function _t(){return qo--}function bt(e){if(e=e||"",null===e.match(/\D/g,"")){var t=e.replace(/\D/g);7===t.length?e=t.substr(0,3)+"-"+t.substr(3):10===t.length&&(e="("+t.substr(0,3)+") "+t.substr(3,3)+"-"+t.substr(6))}return e}$("#follow-up-date").datepicker(),$("#first-visit").datepicker();var kt={},wt={},$t=[],St=document.querySelector("#first-name"),Et=document.querySelector("#last-name"),qt=document.querySelector("#description"),Tt=document.querySelector("#first-visit"),xt=document.querySelector("#first-recorded-visit"),At=document.querySelector("#attender-status"),Lt=document.querySelector("#adult"),Ot=document.querySelector("#active"),Ct=document.querySelector("#baptized"),jt=document.querySelector("#saved"),Nt=document.querySelector("#visitor"),Mt=document.querySelector("#assigned-agent"),Pt=document.querySelector("#starting-point-notified"),Ht=document.querySelector("#street1"),It=document.querySelector("#street2"),Jt=document.querySelector("#city"),zt=document.querySelector("#zip"),Ft=document.querySelector("#email"),Rt=document.querySelector("#primary-phone"),Dt=document.querySelector("#secondary-phone"),Gt=document.querySelector("#primary-phone-type"),Ut=document.querySelector("#secondary-phone-type"),Yt=document.querySelector("#state"),Vt=document.querySelector("#commitment-christ"),Bt=document.querySelector("#recommitment-christ"),Zt=document.querySelector("#commitment-tithe"),Kt=document.querySelector("#commitment-ministry"),Qt=document.querySelector("#commitment-baptism"),Wt=document.querySelector("#info-next"),Xt=document.querySelector("#info-gkids"),eo=document.querySelector("#info-ggroups"),to=document.querySelector("#info-gteams"),oo=document.querySelector("#info-member"),no=document.querySelector("#info-visit"),ro=document.querySelector("#update"),io=document.querySelector("#cancel"),ao=document.querySelector("#delete"),co=document.querySelector("#add-follow-up"),so=document.querySelector("#copy-address-to-spouse"),lo=$(".manage-person-relationship-form").dialog({autoOpen:!1,height:400,width:350,modal:!0,open:function(){$("body").css({overflow:"hidden"})},beforeClose:function(){$("body").css({overflow:"inherit"})}}),uo=lo[0].querySelector("#relationship-id"),po=lo[0].querySelector("#relationship-type"),mo=lo[0].querySelector("#relationship-person-name"),ho=document.querySelector("#add-relationship"),fo=document.querySelector("#add-close-relationship"),yo=document.querySelector("#close-relationship"),go=document.querySelector("#relationship-relation"),vo=lo[0].querySelector("#add-to-spouse-container-relationship"),_o=lo[0].querySelector("#add-to-spouse-relationship"),bo=$(".select-person-form").dialog({autoOpen:!1,height:400,width:350,modal:!0,open:function(){$("body").css({overflow:"hidden"})},beforeClose:function(){$("body").css({overflow:"inherit"})}}),ko=document.querySelector("#add-new-person"),wo=document.querySelector("#search"),$o=document.querySelector("#search-name"),So=bo[0].querySelector("#close-select-person"),Eo=document.querySelector("#select-person-btn"),qo=-1,To=document.querySelector("#add-clear"),xo=document.querySelector("#add-copy"),Ao=document.querySelector("#add-close"),Lo=document.querySelector("#close"),Oo=$(".manage-person-follow-up-form").dialog({autoOpen:!1,height:410,width:350,modal:!0,open:function(){$("body").css({overflow:"hidden"})},beforeClose:function(){$("body").css({overflow:"inherit"})}}),Co=Oo[0].querySelector("#add-to-spouse-container-follow-up"),jo=Oo[0].querySelector("#add-to-spouse-follow-up"),No=Oo[0].querySelector("#follow-up-id"),Mo=Oo[0].querySelector("#follow-up-type"),Po=Oo[0].querySelector("#follow-up-date"),Ho=document.querySelector("#manage-unknown-date"),Io=Oo[0].querySelector("#follow-up-visitors"),Jo=Oo[0].querySelector("#follow-up-frequency"),zo=Oo[0].querySelector(".communication-card-options"),Fo=Oo[0].querySelector("#follow-up-commitment-christ"),Ro=Oo[0].querySelector("#follow-up-recommitment-christ"),Do=Oo[0].querySelector("#follow-up-commitment-tithe"),Go=Oo[0].querySelector("#follow-up-commitment-ministry"),Uo=Oo[0].querySelector("#follow-up-commitment-baptism"),Yo=Oo[0].querySelector("#follow-up-info-next"),Vo=Oo[0].querySelector("#follow-up-info-gkids"),Bo=Oo[0].querySelector("#follow-up-info-ggroups"),Zo=Oo[0].querySelector("#follow-up-info-gteams"),Ko=Oo[0].querySelector("#follow-up-info-member"),Qo=Oo[0].querySelector("#follow-up-info-visit"),Wo=Oo[0].querySelector("#follow-up-comments"),Xo=-1,en=!0,tn=/^((\(?([2-9][0-8][0-9])\))|([2-9][0-8][0-9]))?[-. ]?([2-9][0-9]{2})[-. ]?([0-9]{4})$/,on=document.querySelector("#map-panel"),nn="//maps.googleapis.com/maps/api/staticmap?zoom=11&size=400x400&markers=color:red%7Clabel:A|",rn="https://www.google.com/maps/place/",an={1:"Phone Call",2:"Visit",3:"Communication Card",4:"Entered in The City",5:"Thank You Card Sent"},cn={1:"Spouse",2:"Child",3:"Parent"},sn={1:"Member",2:"Regular",3:"Irregular"},ln={1:"1st Time",2:"2nd Time",3:"Often",4:"Member","":"--None Provided--"};(window.onpopstate=function(){var e,t=/\+/g,o=/([^&=]+)=?([^&]*)/g,n=function(e){return decodeURIComponent(e.replace(t," "))},r=window.location.search.substring(1);for(kt={};null!==(e=o.exec(r));)kt[n(e[1])]=n(e[2])}).call(),kt.id||(window.location="attendance.html"),ro.addEventListener("click",a),io.addEventListener("click",u),ao.addEventListener("click",d),co.addEventListener("click",ot),xo.addEventListener("click",at),To.addEventListener("click",ct),Ao.addEventListener("click",st),Lo.addEventListener("click",nt),so.addEventListener("click",T),$("#follow-up-type").on("change",ht),ho.addEventListener("click",V),fo.addEventListener("click",W),yo.addEventListener("click",B),$("#relationship-type").on("change",mt),Eo.addEventListener("click",N),ko.addEventListener("click",p),wo.addEventListener("click",m),$o.addEventListener("keydown",function(e){13==e.keyCode&&m()}),So.addEventListener("click",M),$("#manage-unknown-date").on("change",pt),checkLoginStatus(y)}();