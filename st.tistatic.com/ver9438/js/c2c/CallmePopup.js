function userAgent(){var e,i,n,o="-",t=navigator.appVersion,r=navigator.userAgent,s=navigator.appName,a=""+parseFloat(navigator.appVersion),c=parseInt(navigator.appVersion,10);-1!=(i=r.indexOf("Opera"))?(s="Opera",a=r.substring(i+6),-1!=(i=r.indexOf("Version"))&&(a=r.substring(i+8))):-1!=(i=r.indexOf("MSIE"))?(s="Microsoft Internet Explorer",a=r.substring(i+5)):-1!=(i=r.indexOf("Chrome"))?(s="Chrome",a=r.substring(i+7)):-1!=(i=r.indexOf("Safari"))?(s="Safari",a=r.substring(i+7),-1!=(i=r.indexOf("Version"))&&(a=r.substring(i+8))):-1!=(i=r.indexOf("Firefox"))?(s="Firefox",a=r.substring(i+8)):-1!=r.indexOf("Trident/")?(s="Microsoft Internet Explorer",a=r.substring(r.indexOf("rv:")+3)):(e=r.lastIndexOf(" ")+1)<(i=r.lastIndexOf("/"))&&(s=r.substring(e,i),a=r.substring(i+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!=(n=a.indexOf(";"))&&(a=a.substring(0,n)),-1!=(n=a.indexOf(" "))&&(a=a.substring(0,n)),-1!=(n=a.indexOf(")"))&&(a=a.substring(0,n)),c=parseInt(""+a,10),isNaN(c)&&(a=""+parseFloat(navigator.appVersion),c=parseInt(navigator.appVersion,10));var d=/Mobile|mini|Fennec|Android|iP(ad|od|hone)|BlackBerry|BB10/.test(t),l=(navigator.cookieEnabled?!0:!1,o),h=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/},{s:"BlackBerry",r:/BlackBerry/},{s:"BB10",r:/BB10/}];for(var w in h){var u=h[w];if(u.r.test(r)){l=u.s;break}}var g=o;switch(/Windows/.test(l)&&(g=/Windows (.*)/.exec(l)[1],l="Windows"),l){case"Mac OS X":g=/Mac OS X (10[\.\_\d]+)/.exec(r)[1];break;case"Android":g=/Android ([\.\_\d]+)/.exec(r)[1];break;case"iOS":g=/OS (\d+)_(\d+)_?(\d+)?/.exec(t),g=g[1]+"."+g[2]+"."+(0|g[3]);break;case"BlackBerry":g=/BlackBerry\w+\/([\d\.]+)/i.exec(r)[1];break;case"BB10":g=10}return d?"chrome"===s.toLowerCase()?!1:"opera"===s.toLowerCase()&&a>=10?!1:"firefox"===s.toLowerCase()?!1:"android"===l.toLowerCase()&&4>=g?!1:"ios"===l.toLowerCase()&&g>=4?!1:("blackberry"===l.toLowerCase()||"bb10"===l.toLowerCase())&&g>=10?!1:!0:"microsoft internet explorer"===s.toLowerCase()?!0:"chrome"===s.toLowerCase()?"windows"===l.toLowerCase()&&"xp"===g.toLowerCase()&&parseFloat(a)<=6?!0:l.toLowerCase().indexOf("mac os")>-1&&parseFloat(g)<10.5&&parseFloat(a)<=5?!0:!1:"opera"===s.toLowerCase()?parseFloat(a)<=8?!0:!1:"firefox"===s.toLowerCase()?parseFloat(a)<=2?!0:!1:"safari"===s.toLowerCase()?parseFloat(a)<=3?!0:"windows"===l.toLowerCase()&&"xp"===g.toLowerCase()?!0:l.toLowerCase().indexOf("mac os")>-1&&parseFloat(g)<=10.5?!0:!1:void 0}function setDomainName(){userAgent()?(staticResourceURL="//c4c.phonon.in/Click2CallGWT/",nonStaticResourceURL="//c4c.phonon.in/Click2CallGWT/"):(staticResourceURL="//aws.phonon.in/Click2CallGWT/",nonStaticResourceURL="//c4c.phonon.in/Click2CallGWT/")}function getStaticResourceURL(){return setDomainName(),staticResourceURL}function callme(e,i,n,o,t,r){if(-1!==e.indexOf("{")&&(e=getReferrerI(e)),-1!==i.indexOf("{")&&(i=getReferrerI(i)),-1!==n.indexOf("{")&&(n=getReferrerI(n)),-1!==o.indexOf("{")&&(o=getReferrerI(o)),-1!==t.indexOf("{")&&(t=getReferrerI(t)),-1!==r.indexOf("{")&&(r=getReferrerI(r)),/Mobile|mini|Fennec|Android|iP(ad|od|hone)|B(lackBerry|B10)|RIM/.test(navigator.userAgent)&&"8tukl1ao"===e)window.location=nonStaticResourceURL.substring(0,nonStaticResourceURL.indexOf("Click2CallGWT"))+"MobileWidget/index.jsp?custToken="+e+"&udf1="+i+"&udf2="+n+"&udf3="+o+"&udf4="+t+"&udf5="+r+"&udf8=mobilewidget";else{console.log("custtoken in else :"+e),"rj4t7q85"===e?"banner"===o?(height="60",width="905"):"DialB2B"===o?(height="334",width="306"):(height="294",width="306"):"ax890ad"===e?"banner"===o?(height="60",width="905"):"AMEXNEW"===o?(width="600",height="270"):(width="320",height="250"):"31dc78g8"===e?"banner"===o?(height="60",width="905"):(height="250",width="286"):"ct987df"===e?"citibank"===o&&(height="260",width="400"):"1nfrwstj"===e?"banner"===o?(height="60",width="905"):(width="284",height="304"):"8tukl1ao"===e?(closeBtnCSS="cee_closeBtnITC","banner"===o?(height="60",width="905"):(width="404",height="389")):"jfw98uj"===e?(console.log("custtoken:"+e),closeBtnCSS="cee_closeBtnBIJLIPAY","banner"===o?(height="60",width="905"):(width="320",height="305")):"banner"===o?(height="60",width="905"):(width="284",height="304"),console.log("close btn="+closeBtnCSS);var s=staticResourceURL+"CallMePage.jsp";s=s+"?CustToken="+e+"&UDF1="+encodeURIComponent(i)+"&UDF2="+n+"&UDF3="+o+"&UDF4="+t+"&UDF5="+r+"&UDF6=1&sessionID=1234",$("body").append('<div id="cee_overlay" class="cee_close"></div>\n\n<div id="cee_html" class="cee_html divpopup" height="'+height+'" width="'+width+'" >\n\n<a title="Close" class="cee_close" id="'+closeBtnCSS+'" href="javascript:;">close</a>\n \n<div><h2></h2></div>\n\n<div id="cee_ajax">\n\n<iframe id="ceeboxiframe" class="ceeboxiframe" scrolling="no" height="'+height+'" width="'+width+'"src="'+s+"?ver="+Math.random()+'"  frameborder="0" allowTransparency="true">\n</iframe>\n </div>\n </div>'),$("#cee_overlay").show(),$("#cee_html").show();var a=$("#cee_html"),c=$(window).height(),d=$(window).width(),l=d/2-a.width()/2,h=c/2-a.height()/2;a.css({left:l,top:h}),$("#cee_closeBtn,#cee_closeBtnITC,#cee_closeBtnBIJLIPAY,#cee_overlay").click(function(){$("#ceeboxiframe").remove(),$("#cee_overlay").hide(),$("#cee_overlay").remove(),$("#cee_html").remove(),"ax890ad"===e&&_gaq.push(["_trackEvent","Close","Close"])})}}function includeCSS(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=staticResourceURL+"static/CSS/StaticPopup.css",document.getElementsByTagName("head")[0].appendChild(e)}function includeJQuery(){if(!window.jQuery){var e=document.createElement("script");e.src=staticResourceURL+"static/JS/jquery-1.11.2.min.js",e.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(e)}}function getReferrerI(e){return e=e.toString(),e=e.replace("{",""),e=e.replace("}",""),e=getParam(e)}var height="",width="",closeBtnCSS="cee_closeBtn";getStaticResourceURL(),includeCSS(),includeJQuery();var staticResourceURL,nonStaticResourceURL;
