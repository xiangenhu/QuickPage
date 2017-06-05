<%@ Language=VBScript %>
<%
' calling flex code:
'private var service:HTTPService = null;
'
'service = new HTTPService;
'service.addEventListener("result", updateDataResultHandler);
'service.addEventListener("fault", updateDataFaultHandler);
'
'var url:String = "http://www.x-in-y.com/cb/compile.asp?Folder=" + folder + "&File=" + file+"&SubFolder="+SubFolder
'service.cancel();  // Cancel all previous pending calls.
'service.url = url;
'service.method = "POST"; 
'service.resultFormat = "xml";
'var params:Object = new Object();
'params.Data = xml.toString(); // asp picks this up as Request.Form("Data")
'service.send(params);

'response.write "test"
'response.end

on error resume next
Response.Expires = -1  ' Don't Cache

Data = Request.Form
if Left(Data,5) = "Data=" then Data = Request.Form("Data") ' work with flash or flex
Folder = Request.QueryString("Folder")
SubFolder = Request.QueryString("SubFolder")
File = Request.QueryString("File")

fullFolder=Folder+SubFolder

set msserver = Server.CreateObject("CharacterServer.CharacterServer")
fullpath = Server.MapPath(fullFolder+"/"+File)
fullmpr = fullpath+".mpr"
set fso=Server.CreateObject("Scripting.FileSystemObject")
if not fso.FolderExists(Server.MapPath(Folder)) then fso.CreateFolder(Server.MapPath(Folder))
if not fso.FolderExists(Server.MapPath(fullFolder)) then fso.CreateFolder(Server.MapPath(fullFolder))

if Data="" then Data="<?xml version=""1.0"" encoding=""UTF-8""?><project html5=""false"" useflash=""never"" loader=""standard"" flashversion=""9"" actionscript=""3"" singlefile=""true"" size=""250,400""  template=""Message"">	<stage id=""Stage1"">		<scene id=""Scene1"" name=""Scene 1"">			<character id=""Char1"" name=""Angela"" position=""-125,20"" size=""500,400"" animationlibrary=""Library/Characters/AngelaBody/AngelaBody.xml"" defaultvoice=""Neo Kate"" defaultidle=""simple"" foot=""heels1"" bottom=""pants1"" top=""classictop"" hair=""combeddark""/>			<message id=""Msg1"" name=""Message 1"">				<say>					Hello, and welcome!				</say>			</message>		</scene>	</stage></project>"

set ts = fso.OpenTextFile(fullmpr, 2, true)
 ts.Write Data
 ts.Close

fileactual = msserver.Render(msserver.ConvertUTF8(Data), fullpath)
if Err = 0 then 
     response.Write "<?xml version=""1.0"" encoding=""UTF-8""?>"
     response.Write "<response success=""true""/>"
else
     response.Write "<?xml version=""1.0"" encoding=""UTF-8""?>"
     response.Write "<response success=""false"" error=""" & Err.Description & """/>"
end if
%>