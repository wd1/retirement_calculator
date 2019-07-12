// -*- indent-tabs-mode: t; tab-width: 4; -*-
void 0===window.console&&(window.console={log:function(){}});var resizeVideos=function(){$(".video-wrapper:visible").each(function(){var e=$(this),t=e.find("iframe"),n=t.width();0===n&&(n=t.css("width"));var i=t.height();0===i&&(i=t.css("height"));var o=e.width();t.width(o),t.height((i/n*o).toFixed(0))})},numberFormat=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};$(function(){if($(".menu-btn").on("click",function(){$(".navigation-container").addClass("visible")}),$(".menu-close-btn").on("click",function(){$(".navigation-container").removeClass("visible")}),$(document).on("click",".btn-expandable",function(){$(this).hide().closest(".expandable-container").find(".expandable-inner:first").addClass("expanded")}),void 0!==window.headerTaglines){var a=1;window.setInterval(function(){if(!document.hidden){a>=window.headerTaglines.length&&(a=0);var t=$(".header-message .text"),n=t.text(),i=n.length,e;(function(){i=0,window.setTimeout(function(){n=window.headerTaglines[a],o()},900)})();var o=function(){if(i++,t.text(n.substr(0,i)),i<n.length){var e=Math.floor(70+80*Math.random());window.setTimeout(o,e)}else a++}}},9e3)}$(document).on("click",".section-instructors-overview li > .name",function(){$(this).closest("li").parent().find("li.active").removeClass("active");var e=$(this).closest("li").addClass("active");$(window).outerWidth()<992&&$(window).scrollTop(e.offset().top-10),resizeVideos()}),$(document).on("click",".section-top-reviews li > .name",function(){$(this).closest("li").parent().find("li.active").removeClass("active");var e=$(this).closest("li").addClass("active");$(window).outerWidth()<992&&$(window).scrollTop(e.offset().top-10),resizeVideos()}),$(document).on("click",".section-contact-form .btn-submit-contact-form:not(.disabled)",function(){var t=$(this),e=$(".section-contact-form"),n={};n.FirstName=e.find("#contact-first-name").val(),n.LastName=e.find("#contact-last-name").val(),n.PhoneNumber=e.find("#contact-phone-number").val(),n.Email=e.find("#contact-email").val().toLowerCase(),n.Subject=e.find("#contact-subject").val(),n.Message=e.find("#contact-message").val(),n.FirstName.length<2?window.alert("Please fill in your first name"):n.LastName.length<2?window.alert("Please fill in your last name"):n.PhoneNumber.length<6?window.alert("Please fill in your phone number"):!1!==/\S+@\S+\.\S+/.test(n.Email)?n.Message.length<40?window.alert("Please fill in your message"):(t.addClass("disabled"),$.post(window.base_url+"contact/submit",{Data:JSON.stringify(n)},function(e){(e=JSON.parse(e)).Success?(window.alert("Thank you for contacting us! We will get back to you as soon as possible."),window.location.reload()):window.alert("Unable to send message. Please try again."),t.removeClass("disabled")},"text")):window.alert("Please fill in your email")}),
// Careers
$(document).on("click",".careers-job-list li a",function(){$(".careers-job-list li a.active").removeClass("active"),$(".careers-job.active").removeClass("active");var e=$(this);e.addClass("active"),$('.careers-job[data-name="'+e.data("name")+'"]').addClass("active")}),
// Resize blog videos
$(".post-content iframe[allow*='autoplay'], .post-content iframe[id*='_ytid_'], .post-content iframe.__youtube_prefs__").each(function(){var e=$(this),t=e.width(),n=e.closest("div").width();e.width(n),e.height((e.height()/t*n).toFixed(0))}),resizeVideos(),
// Retirement
$(document).on("click",".btn-retirement-calculation-form-submit",function(){
        var e=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},
            t=$(".retirement-calculation-container"),
            n=t.find("#retirement-calculation-form-age").val(),
            i=t.find("#retirement-calculation-form-retire-age").val(),
            o=t.find("#retirement-calculation-form-savings").val(),
            a=t.find("#retirement-calculation-form-monthly").val(),
            r=t.find("#retirement-calculation-form-return").val();
            if(void 0===n||n<10)window.alert("Please enter your age.");else if(void 0===i||i<10)window.alert("Please enter your retirement age.");else if(i<=n)window.alert("Retirement age must be higher than your current age.");else if(void 0===o||o<0)window.alert("Please enter your current savings.");else if(void 0===a||a<0)window.alert("Please enter your monthly contribution.");else if(void 0===r||r<=0)window.alert("Please enter your estimated annual return.");
            else{
                window.console.log(r);
                for(var s=(100+parseFloat(r))/100,l=(new Date).getFullYear(),c=i-n,d=o,u={labels:[l.toString()],series:[d]},m=l+1;m<=l+c;m++)
                    d*=s,d+=12*a*s,u.labels.push(m.toString()),u.series.push(d.toFixed(0));
                var p=d.toFixed(0),f=12*a*c,w=p-o-f;
                t.find(".retirement-calculation-result-total-sum .value").text(e(p)),t.find(".retirement-calculation-result-total-years .value").text(c),t.find(".retirement-calculation-result-breakdown-initial .amount .value").text(e(o)),t.find(".retirement-calculation-result-breakdown-initial .percentage .value").text((100*o/p).toFixed(0)),t.find(".retirement-calculation-result-breakdown-contributions .amount .value").text(e(f)),t.find(".retirement-calculation-result-breakdown-contributions .percentage .value").text((100*f/p).toFixed(0)),t.find(".retirement-calculation-result-breakdown-growth .amount .value").text(e(w)),t.find(".retirement-calculation-result-breakdown-growth .percentage .value").text((100*w/p).toFixed(0)),
                // $(window).outerWidth()<768?new window.Chartist.Bar(".retirement-calculation-result-chart",u,{distributeSeries:!0,height:"320px",axisY:{onlyInteger:!0,labelInterpolationFnc:function(e){var t=e.toString();return 5e5<e?t=(e/1e6).toFixed(2)+"M":0<e&&(t=(e/1e3).toFixed(2)+"K"),t=(t=(t=t.replace("0M","M")).replace("0K","K")).replace(".0","")}},axisX:{labelInterpolationFnc:function(e){return e%10==0?e:null}}}).on("draw",function(e){"bar"===e.type&&e.element.attr({style:"stroke-width: 3px"})}):$(window).outerWidth()<992?new window.Chartist.Bar(".retirement-calculation-result-chart",u,{distributeSeries:!0,height:"380px",axisY:{onlyInteger:!0,labelInterpolationFnc:function(e){var t=e.toString();return 5e5<e?t=(e/1e6).toFixed(2)+"M":0<e&&(t=(e/1e3).toFixed(2)+"K"),t=(t=(t=t.replace("0M","M")).replace("0K","K")).replace(".0","")}},axisX:{labelInterpolationFnc:function(e){return e%5==0?e:null}}}).on("draw",function(e){"bar"===e.type&&e.element.attr({style:"stroke-width: 7px"})}):new window.Chartist.Bar(".retirement-calculation-result-chart",u,{distributeSeries:!0,height:"480px",axisY:{onlyInteger:!0,labelInterpolationFnc:function(e){var t=e.toString();return 5e5<e?t=(e/1e6).toFixed(2)+"M":0<e&&(t=(e/1e3).toFixed(2)+"K"),t=(t=(t=t.replace("0M","M")).replace("0K","K")).replace(".0","")}},axisX:{labelInterpolationFnc:function(e){return e%5==0?e:null}}}).on("draw",function(e){"bar"===e.type&&e.element.attr({style:"stroke-width: 11px"})}),
                t.find(".retirement-calculation-result-pre-result-message").hide(),
                t.find(".retirement-calculation-hidden-result").show();
                var chart = am4core.create("chartdiv", am4charts.XYChart);
                console.log(u);
                for(i=0; i<u.labels.length; i++) {
                    var temp = { country: u.labels[i], visits: u.series[i]};
                    chart.data.push(temp);
                }
                
                console.log(chart.data);
                // Create axes
                
                var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "country";
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.minGridDistance = 30;
                
                // categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
                //   if (target.dataItem && target.dataItem.index & 2 == 2) {
                //     return dy + 25;
                //   }
                //   return dy;
                // });
                
                var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                
                // Create series
                var series = chart.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = "visits";
                series.dataFields.categoryX = "country";
                series.name = "Visits";
                series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
                series.columns.template.fill = 'rgb(40, 56, 120)';
                series.columns.template.fillOpacity = 1;
                
                var columnTemplate = series.columns.template;
                columnTemplate.strokeWidth = 2;
                columnTemplate.stroke = 'rgb(40, 56, 120)';
                columnTemplate.strokeOpacity = 1;
                // $(window).outerWidth()<992&&$(window).scrollTop($(".retirement-calculation-result-wrapper").offset().top-40)
                console.log($("[aria-labelledby=id-60-title"));
                $("[aria-labelledby=id-60-title").css('display','none');
        }
    }
),
// Sales Meeting Projection
0<$(".page-sales_meeting_projection").length&&function(){var d="",t=function(){
// Step2
var e=$(".sales_meeting_projection-step2-wrapper"),t=parseInt(e.find("#sales_meeting_projection-step2-number_of_clients").val()),n,i=t*parseInt(e.find("#sales_meeting_projection-step2-price").val());"monthly"===d?(e.find("#sales_meeting_projection-step2-monthly_recurring").text("$ "+numberFormat(i)),e.find("#sales_meeting_projection-step2-annual_revenue").text("$ "+numberFormat(12*i)),e.find(".monthly").show()):(e.find("#sales_meeting_projection-step2-annual_revenue").text("$ "+numberFormat(i)),e.find(".monthly").hide());
// Step3 Projection
var o=$(".sales_meeting_projection-step3-container");o.find("#sales_meeting_projection-step3-number_of_clients").text(numberFormat(t));var a=Math.round(t/(parseInt(o.find("#sales_meeting_projection-step3-conversion_rate").val())/100));o.find("#sales_meeting_projection-step3-number_of_consults").text(numberFormat(a));var r=parseInt(o.find("#sales_meeting_projection-step3-number_of_months").val()),s=Math.round(a/r);o.find("#sales_meeting_projection-step3-consults_per_month").text(numberFormat(s));var l=Math.round(s/4);o.find("#sales_meeting_projection-step3-consults_per_week").text(numberFormat(l));var c=Math.round(t/r);o.find("#sales_meeting_projection-step3-clients_onboarded").text(numberFormat(c))};$(document).on("click",".sales_meeting_projection-step1-container ul li",function(){var e=$(this);d=e.parent().data("service-type"),$(".sales_meeting_projection-step1-container ul li.selected").removeClass("selected"),e.addClass("selected"),$(".sales_meeting_projection-step2-container .sales_meeting_projection-form-headline").text(e.text()),t(),$(".sales_meeting_projection-step1-container").hide(),$(".sales_meeting_projection-step2-container").show(),$(".sales_meeting_projection-step3-container").hide()}),$(document).on("click",".sales_meeting_projection-step2-container .step-back-link",function(){$(".sales_meeting_projection-step1-container").show(),$(".sales_meeting_projection-step2-container").hide(),$(".sales_meeting_projection-step3-container").hide()}),$(document).on("keyup change",".sales_meeting_projection-step2-container input",function(){t()}),$(document).on("click",".btn-sales_meeting_projection-step2-submit",function(){0!==$(".sales_meeting_projection-step1-container ul li.selected").length?($(".sales_meeting_projection-step1-container").hide(),$(".sales_meeting_projection-step2-container").hide(),$(".sales_meeting_projection-step3-container").show()):window.alert("Please select a service.")}),$(document).on("click",".sales_meeting_projection-step3-container .step-back-link",function(){$(".sales_meeting_projection-step1-container").hide(),$(".sales_meeting_projection-step2-container").show(),$(".sales_meeting_projection-step3-container").hide()}),$(document).on("keyup change",".sales_meeting_projection-step3-container input",function(){t()})}.call()});