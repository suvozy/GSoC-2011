__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
	if (!__bCodeFlushed) {
		var span = parent.document.createElement("SPAN");
		span.innerHTML = __ADTECH_CODE__;
		window.frameElement.parentNode.appendChild(span);
		__bCodeFlushed = true;
	}
}

if (typeof inFIF != "undefined") {
	document.write = function(str) {
		__ADTECH_CODE__ += str;
	};
	
	document.writeln = function(str) { document.write(str + "\n"); };

	__theDocument = parent.document;
	__theWindow = parent;
}
document.write("\n");
function VBGetSwfVer_122925(i) {
var sVersion_122925 = "on error resume next\r\n"+
"Dim swControl_, swVersion_\r\n"+
"swVersion_ = 0\r\n"+
"set swControl_ = CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" + CStr("+i+"))\r\n"+
"if (IsObject(swControl_)) then\r\n"+
"swVersion_ = swControl_.GetVariable(\"$version\")\r\n"+
"end if";
window.execScript(sVersion_122925, "VBScript");
return swVersion_;
}
var AT_MULTICLICK=new Array;
var AT_MULTICOUNT=new Array;
var AT_CLICKVAR=new Array;
var AT_CLICK = "http://www.newscientistsubscriptions.com/?prom=5203";
var AT_IMGCLICK="http://www.newscientistsubscriptions.com/?prom=5203";
var AT_TARGET="_blank";
var AT_MICROSITE=""; // width=xxx height=yyy
AT_MULTICLICK[1]="";
AT_MULTICLICK[2]="";
AT_MULTICLICK[3]="";
AT_MULTICLICK[4]="";
AT_MULTICLICK[5]="";
AT_MULTICLICK[6]="";
AT_MULTICLICK[7]="";
AT_MULTICLICK[8]="";
AT_MULTICLICK[9]="";
AT_CLICKVAR[0]="clickTAG";
AT_CLICKVAR[1]="clickTAG1";
AT_CLICKVAR[2]="clickTAG2";
AT_CLICKVAR[3]="clickTAG3";
AT_CLICKVAR[4]="clickTAG4";
AT_CLICKVAR[5]="clickTAG5";
AT_CLICKVAR[6]="clickTAG6";
AT_CLICKVAR[7]="clickTAG7";
AT_CLICKVAR[8]="clickTAG8";
AT_CLICKVAR[9]="clickTAG9";
AT_MULTICOUNT[1]="";
var AT_WIDTH_HEIGHT="width=160 height=190";
var AT_FLASH="http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/skymini20.swf";
var AT_TRANSPARENT=false;
var AT_FLASHVERSION=9;
var AT_FLASH_BGCOLOR="";
var AT_FlaQual="autohigh";
var AT_FlashClick=false;
var AT_LAYERMANUALRESIZE = false;
var AT_BASE="http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/"; // Nachladepfad fuer Flash Filme (http://.../)
var AT_IMAGE="http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/skymini20.jpg";
var AT_TEXT="";
var AT_ALTIMAGEWIDTH  = "160";
var AT_ALTIMAGEHEIGHT = "190";
var AT_ZINDEX         = "0";
var AT_WMODE          = "opaque";
var AT_EXPANDABLE="false"; // width:100px;height:70px; Zus?tzlich Fakepopup an position 0x0 machen
var AT_FAKEPOPUP=false;
var AT_FAKEPOPUP_left=100;
var AT_FAKEPOPUP_top=100;
var AT_FAKEPOPUP_autoclose='';
var AT_FAKEPOPUP_start_opened=true;
var AT_CURRENTDOMAIN= window.location.host;
var AT_VARSTRING;
//make variable names unique on page
var AT_MULTICLICK122925=AT_MULTICLICK;
var AT_CLICK122925=AT_CLICK;
var AT_TARGET122925=AT_TARGET;
var AT_IMGCLICK122925=AT_IMGCLICK;
AT_CLICKVAR[0]=AT_CLICKVAR[0]?AT_CLICKVAR[0]:"clickTAG";
var AT_MULTICLICKSTR="?"+AT_CLICKVAR[0]+"=" + escape("http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link=") + escape(AT_CLICK);
var AT_FLASHVARSSTR= "";
// if use microsite, dont add the first parameter
if (AT_MICROSITE=="") AT_FLASHVARSSTR = AT_CLICKVAR[0]+"=" + escape("http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link=") +escape(AT_CLICK);
//------------------------------------------------------------------------------------------------
// Flash detect
function JSGetSwfVer122925(){
if (navigator.plugins != null && navigator.plugins.length > 0) {
if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
flashVer = flashDescription.split(" ")[2].split(".")[0];
} else {flashVer = -1;}
}
else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
else flashVer = -1;
return flashVer;
}
var AT_DETECT_FLASHVERSION = 0;
if (AT_FLASH)
{
if (AT_FlashClick) {FlashClick = AT_ClickFn122925;}
var ShockMode = 0;
var versionStr = 0;
if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.toLowerCase().indexOf("win") != -1 && !(navigator.userAgent.indexOf("Opera") != -1))
{
for (i=25;i>0;i--) {
versionVB = VBGetSwfVer_122925(i);
if (typeof versionVB != "undefined") {
if (versionVB != 0){
versionStr = versionVB.split(" ")[1].split(",")[0];
if (versionStr>=AT_FLASHVERSION) {i=0;}
}
}
}
}
else {
versionStr = JSGetSwfVer122925();
}
if (versionStr >= AT_FLASHVERSION) { ShockMode = 1;}
AT_DETECT_FLASHVERSION = versionStr;
}
if ('122925'!='_ADFC'+'_CUID_'){
if (AT_FLASH && (AT_FLASH.search(/\w+\:\/\//)!=0)) {AT_FLASH='http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/'+AT_FLASH;}
if (AT_IMAGE && (AT_IMAGE.search(/\w+\:\/\//)!=0)) {AT_IMAGE='http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/'+AT_IMAGE;}
}
AT_MULTICOUNT[0]="http://adserver.adtech.de/adcount|2.0|289|122925|1|2259|AdId=6187407;BnId=1;ct=838768163;st=400;adcid=1;itime=982247101;reqtype=5";	//Support for ViewCount
for (var i_adtech=0;i_adtech<AT_MULTICLICK.length;i_adtech++){
if (AT_MULTICLICK[i_adtech]) {
if (!AT_CLICKVAR[i_adtech]) {
AT_CLICKVAR[i_adtech]="clickTAG"+i_adtech;
}
if (AT_MULTICLICK[i_adtech].substr(0,11)=='javascript:') {
AT_MULTICLICKSTR += "&" + AT_CLICKVAR[i_adtech] + "=" + escape(AT_MULTICLICK[i_adtech]);
AT_FLASHVARSSTR += "&" + AT_CLICKVAR[i_adtech] + "=" + escape(AT_MULTICLICK[i_adtech]);
} else {
AT_MULTICLICKSTR += "&" + AT_CLICKVAR[i_adtech] + "=" + escape("http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link=") + escape(AT_MULTICLICK[i_adtech]);
AT_FLASHVARSSTR  += "&" + AT_CLICKVAR[i_adtech] + "=" + escape("http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link=") + escape(AT_MULTICLICK[i_adtech]);
}
}
}
//## if AT_FLASHVERSION > 5 use FLASHVARS
if (AT_FLASHVERSION >5) {
AT_VARSTRING ="?targetTAG="+AT_TARGET122925+"&clickTarget="+escape(AT_TARGET122925);
AT_VARSTRING += "&pathTAG="+escape(AT_BASE);
} else {
AT_VARSTRING = AT_MULTICLICKSTR;
AT_VARSTRING +="&targetTAG="+AT_TARGET122925+"&clickTarget="+escape(AT_TARGET122925);
AT_VARSTRING += "&pathTAG="+escape(AT_BASE);
AT_FLASHVARSSTR="";
}
//if (AT_FAKEPOPUP) {
AT_VARSTRING += "&closeTAG=" + escape("javascript:closeAdLayer122925()")
//}
//if (AT_FAKEPOPUP_start_opened) {
AT_VARSTRING += "&openTAG=" + escape("javascript:openAdLayer122925()")
//}
AT_VARSTRING += "&expandTAG=" + escape("javascript:expand122925()");
AT_VARSTRING += "&collapseTAG=" + escape("javascript:collapse122925()");
AT_VARSTRING += "&clicktarget=_blank&clickTarget=_blank&clickTARGET=_blank";
var AT_MULTICOUNTARR=new Array;
for (var i_adtech=0;i_adtech<AT_MULTICOUNT.length;i_adtech++)
if (AT_MULTICOUNT[i_adtech])
{ AT_MULTICOUNTARR[i_adtech]=new Image;
AT_MULTICOUNTARR[i_adtech].src=""+AT_MULTICOUNT[i_adtech];
}
AT_WIDTH_HEIGHT=(AT_WIDTH_HEIGHT)?(' '+AT_WIDTH_HEIGHT+' '):'width="160" height="190"';
if (AT_WIDTH_HEIGHT.length<19 && "122925"=="12345") //only on test server
{ alert('Error: AT_WIDTH_HEIGHT must be set for\n1x1 Content Units in the Template config!');}
if (!AT_IMGCLICK) {AT_IMGCLICK=AT_CLICK;};
if (!AT_TEXT) {AT_TEXT="Click Here";};
if (!AT_BASE) {AT_BASE="http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/"}
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false'){
AT_FAKEPOPUP=true;
AT_FAKEPOPUP_left=-0;
AT_FAKEPOPUP_top=-0;
}
if (AT_MICROSITE!=""){
var AT_MICROSITE122925="toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,"+AT_MICROSITE.replace(/ height=/,",height=");
}
if (AT_FlashClick || AT_MICROSITE!="")
{	AT_COUNT=''
if ('122925'!='_ADFC'+'_CUID_') AT_COUNT=escape('http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link=')
AT_VARSTRING="?cli"+"ckTAG=javascript:void(win"+"dow.open('"+AT_COUNT+AT_CLICK+"','','"+AT_MICROSITE122925+"'))";
AT_TARGET122925="_self";
}
window.AT_ClickFn122925= function (click)
{	click=(isNaN(click)?click:AT_MULTICLICK122925[click]);
if(!click) click="";
click=(click!="")?click:AT_CLICK122925;
if (AT_TARGET122925=="_top") top.location.href="http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link="+click;
else if (AT_TARGET122925=="_self") location.href="http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link="+click;
else window.open("http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link="+click,"",AT_MICROSITE122925?AT_MICROSITE122925:"");
};
if (navigator.userAgent.indexOf('MSIE')>0 && navigator.userAgent.indexOf('Opera')<0) {
var sv_ADFC_CUID = 'Sub AT_FLASHO122925_FSCommand(ByVal command, ByVal args)\r\n'+
'call AT_FLASHO122925_DoFSCommand(command, args)\r\n'+
'end sub';
if (typeof inFIF != "undefined") {
parent.window.execScript(sv_ADFC_CUID, "VBScript");
}
else {	window.execScript(sv_ADFC_CUID, "VBScript");
}
}
//### BROWSER CHECK ###
var AT_agent = navigator.userAgent.toLowerCase();
var AT_major = parseInt(navigator.appVersion);
// ####### Different browser types
// ####### Different browser types
var AT_is_nav  = ((AT_agent.indexOf('mozilla')!=-1) && (AT_agent.indexOf('spoofer')==-1) && (AT_agent.indexOf('compatible') == -1) && (AT_agent.indexOf('opera')==-1) && (AT_agent.indexOf('webtv')==-1));
var AT_is_ie=(AT_agent.indexOf("msie") != -1) || (AT_is_nav && AT_major >= 5);
var AT_IS_FIREFOX = AT_agent.indexOf('firefox')!=-1;
var AT_IS_OPERA = AT_agent.indexOf('opera')!=-1;
if (AT_IS_OPERA) AT_is_ie = false;
if (AT_is_nav) AT_is_ie = false;
if (AT_IS_FIREFOX) AT_is_ie = false;
// ## END
adtech_flashinc="";
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false')
adtech_flashinc+='<div id="AT_ANCHOR_DIV122925" style="overflow:hidden;position:relative;width:160px;height:190px;z-index:' + AT_ZINDEX + ';">';
if (AT_FAKEPOPUP) {
adtech_flashinc+='<div id="AT_DIV122925" ' ;
if ( AT_EXPANDABLE && AT_EXPANDABLE != 'false' && !AT_LAYERMANUALRESIZE ) {
adtech_flashinc+=' onmouseout="collapse122925()" onmouseover="expand122925()"';
}
adtech_flashinc+=' style="width:160px;height:190px;z-index:' + AT_ZINDEX + ';position:absolute;top:'+AT_FAKEPOPUP_top+'px;left:'+AT_FAKEPOPUP_left+'px;'+(!AT_FAKEPOPUP_start_opened?"display:none;":"")+'">';
}
if (ShockMode && AT_FLASH){
if (AT_EXPANDABLE && AT_EXPANDABLE !='false') AT_WIDTH_HEIGHT = "width=160 height=190";
adtech_flashinc+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash2/cabs/swflash.cab#version=5,0,0,0" id="AT_FLASHO122925" name="AT_FLASHO122925" '+AT_WIDTH_HEIGHT+'>';
adtech_flashinc+='<param name=movie va'+'lue="'+AT_FLASH+ AT_VARSTRING +'&CURRENTDOMAIN='+AT_CURRENTDOMAIN+ '">';
adtech_flashinc+='<param name=quality value=' + AT_FlaQual + '>';
adtech_flashinc+='<param name="base" value="'+AT_BASE+'">';
if (AT_FLASHVERSION > 5)
adtech_flashinc+='<param name="flashvars" value="'+AT_FLASHVARSSTR+'">';
adtech_flashinc+='<param name="allowscriptaccess" value="always">';
if (AT_FLASH_BGCOLOR) {adtech_flashinc+='<param name="bgcolor" value="'+AT_FLASH_BGCOLOR+'">';}
adtech_flashinc+='<param name="swLiveConnect" value="true">';
adtech_flashinc+='<param name="wmode" value="' + AT_WMODE + '">';
adtech_flashinc+='<embed sr'+'c="'+AT_FLASH+AT_VARSTRING+ '&CURRENTDOMAIN='+AT_CURRENTDOMAIN+ '" id="AT_FLASHO122925"';
if (AT_FLASH_BGCOLOR) {adtech_flashinc+=' bgcolor="'+AT_FLASH_BGCOLOR+'"'}
adtech_flashinc+=' name="AT_FLASHO122925" base="' + AT_BASE + '" quality="' + AT_FlaQual + '"';
if (AT_FLASHVERSION > 5)
adtech_flashinc+=' flashvars="'+AT_FLASHVARSSTR+'"';
adtech_flashinc+=' allowScriptAccess="always" swLiveConnect=true '+AT_WIDTH_HEIGHT;
adtech_flashinc+=' wmode="' + AT_WMODE + '"';
adtech_flashinc+=' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">';
adtech_flashinc+='</embed>';
adtech_flashinc+='</object>';
} else {
if (AT_MICROSITE) {
adtech_flashinc+='<a hr'+'ef="javascript:AT_ClickFn122925(\''+AT_IMGCLICK+'\')" target="_self">';
} else {
adtech_flashinc+='<a href="'+'http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link='+AT_IMGCLICK+'" target="'+AT_TARGET122925+'">';
}
if (AT_IMAGE) {
adtech_flashinc+='<img s'+'rc="'+AT_IMAGE+'" WIDTH="' + AT_ALTIMAGEWIDTH + '" HEIGHT="' + AT_ALTIMAGEHEIGHT + '" alt="'+AT_TEXT+'" title="'+AT_TEXT+'" border="0">';
}
adtech_flashinc+='</a>';
}
if (AT_FAKEPOPUP) {
adtech_flashinc+='</div>' ;
if (AT_is_ie) {
var _zindex = AT_ZINDEX-1;
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false') {_zindex= -4000;}
adtech_flashinc+='<div id="HID_IFRAME_122925" style="'+(!AT_FAKEPOPUP_start_opened?"display:none;":"")+'width:160px;height:190px;position:absolute;top:'+AT_FAKEPOPUP_top+'px;left:'+AT_FAKEPOPUP_left+'px;Z-INDEX:'+ _zindex +'">';
adtech_flashinc+='<iframe id="HIDDER" style="FILTER: alpha (opacity=0);" width="160px" height="190px" src="about:blank"></iframe>';
adtech_flashinc+='</div>';
}
}
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false' )
{
adtech_flashinc+='</div>';
}
if (typeof AD_vars != 'undefined')
document.write('<scr'+'ipt type="text/javascript" src="http://aka-cdn-ns.adtech.de/apps/399/Ad6187407St3Sz2259Sq100271166V0Id1/adtech_flashinc.js"></scr'+'ipt>');
else
document.write(adtech_flashinc);
if (AT_FAKEPOPUP&&AT_FAKEPOPUP_autoclose) window.setTimeout ("closeAdLayer122925()",AT_FAKEPOPUP_autoclose);
if (AT_FAKEPOPUP) {
window.closeAdLayer122925=function(){__theDocument.getElementById("AT_DIV122925").style.display = "none";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_122925');
iframediv.style.display = "none";
}
}
window.openAdLayer122925=function() {__theDocument.getElementById("AT_DIV122925").style.display = "";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_122925');
iframediv.style.display = "";
}
}
}
window.expand122925=function() {
var thediv = __theDocument.getElementById('AT_DIV122925');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV122925');
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_122925');
iframediv.style.display = "";
}
thediv.style.width = "160px";
thediv.style.height = "190px";
thediv2.style.overflow = "";
}
window.expand_width122925 = function(value) {
var thediv = __theDocument.getElementById('AT_DIV122925');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV122925');
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_122925');
iframediv.style.display = "";
}
thediv.style.width = value+"px";
thediv2.style.overflow = "";
}
window.expand_height122925 = function(value) {
var thediv  = __theDocument.getElementById('AT_DIV122925');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV122925');
thediv.style.height = value+"px";
thediv2.style.overflow = "";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_122925');
iframediv.style.display = "";
}
}
window.collapse122925 =function() {
var thediv  = __theDocument.getElementById('AT_DIV122925');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV122925');
thediv.style.width = "160px";
thediv.style.height = "190px";
thediv2.style.overflow = "hidden";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_122925');
iframediv.style.display = "";
}
}
window.restartMovie122925=function(){movie=__theDocument.getElementById("AT_FLASHO122925");movie.REWIND();movie.PLAY()}
window.stopMovie122925=function()	{__theDocument.getElementById("AT_FLASHO122925").STOP();}
window.AT_FLASHO122925_DoFSCommand=function(command,value){
if (command.search(/(click|link|url)/i)>=0){
AT_ClickFn122925(command.replace(/[^0-9]/g,''));
} else if (command.search(/(hide|close|stop|halt|done|quit)/i)>-1) {
closeAdLayer122925();
} else if (command.search(/(show|open|start|spawn|launch)/i)>-1) {
if(command != "showmenu")
openAdLayer122925();
}else if (command == "expand") {
expand122925();
} else if (command == "collapse") {
collapse122925();
} else if (command == "expandwidth") {
expand_width122925(value);
} else if (command == "expandheight") {
expand_height122925(value);
} else if (command == "redirectToPage") {
window.open("http://adserver.adtech.de/adlink|289|122925|1|2259|AdId=6187407;BnId=1;itime=982247101;ku=2929747;key=tech+dn13410+nosbscrbr;nodecode=yes;link="+value, "redirectwin", "");
}
}
var restartMovie=restartMovie122925;
var stopMovie=stopMovie122925;
if (AT_FAKEPOPUP) {
var closeAdLayer=closeAdLayer122925;
var adlayerhider=closeAdLayer;
var openAdLayer=openAdLayer122925;
}
function cleanUp() {
	if (typeof __parent.swappedRefs == "undefined") {
		__parent.swappedRefs = new Array();
	}
		
	while (__parent.swappedRefs.length > 0) {
		var ref = __parent.swappedRefs.pop();
		if (ref != "swappedRefs") {
			__parent[ref] = null;
		}
	}
}

if (typeof inFIF != "undefined" && inFIF == true) {
	__parent = window.parent;
	window.onunload = cleanUp;
	cleanUp();

	
	for (var ref in window) {
		if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
					&& ref != "frameElement" && ref != "event" && ref != "swappedRefs" && ref != "onunload") {
			try {__parent[ref] = window[ref]; __parent.swappedRefs.push(ref);} catch (e) {}
		}
	}	
}	




if (typeof inFIF != "undefined" && inFIF) {
	__flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.AT_ClickFn122925 = AT_ClickFn122925;
} catch (e) {}try {parent.closeAdLayer122925 = closeAdLayer122925;
} catch (e) {}try {parent.openAdLayer122925 = openAdLayer122925;
} catch (e) {}try {parent.expand122925 = expand122925;
} catch (e) {}try {parent.expand_width122925 = expand_width122925;
} catch (e) {}try {parent.expand_height122925 = expand_height122925;
} catch (e) {}try {parent.collapse122925 = collapse122925;
} catch (e) {}try {parent.restartMovie122925 = restartMovie122925;
} catch (e) {}try {parent.stopMovie122925 = stopMovie122925;
} catch (e) {}try {parent.AT_FLASHO122925_DoFSCommand = AT_FLASHO122925_DoFSCommand;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}try {parent.VBGetSwfVer_122925 = VBGetSwfVer_122925;
} catch (e) {}try {parent.JSGetSwfVer122925 = JSGetSwfVer122925;
} catch (e) {}}


