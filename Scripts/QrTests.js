// File: QrTest.js
// Date: 2022-05-08
// Author: Gunnar Lidén

// File content
// =============
//
// Test functions and no longer used functions


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Test Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Test of member functions of the class QrFilesXml
function testOfQrFilesXmlFunctions()
{
    console.log("Enter testOfQrFilesXmlFunctions");

    if (g_qr_files_xml_object == null)
    {
        alert("testOfQrFilesXmlFunctions Object QrFilesXml is null");

        return;
    }

    var xml_object = g_qr_files_xml_object;

    number_files = xml_object.getNumberOfQrFiles();

    console.log("number_files= " + number_files.toString());

    for (var file_number=1; file_number <= number_files; file_number++)
    {
        testOfQrFilesXmlOneFileListData(file_number);
    }

    var file_number_change = 3;
    testOfQrFilesXmlOneFileChangeData(file_number_change);

    testOfQrFilesXmlAppendFile();

    testOfQrFilesXmlSave();

    console.log("Exit testOfQrFilesXmlFunctions");

} // testOfQrFilesXmlFunctions

// Test of the append functions in QrFilesXml
function testOfQrFilesXmlSave()
{
    console.log("Enter testOfQrFilesXmlSave");

    if (g_qr_files_xml_object == null)
    {
        alert("testOfQrFilesXmlSave Object QrFilesXml is null");

        return;
    }

    debugDisplayXmlAsText();

    g_qr_files_xml_object.saveXmlFileOnServer();

    console.log("Exit testOfQrFilesXmlSave");

} // testOfQrFilesXmlSave

// Test of get functions in QrFilesXml for one file 
function testOfQrFilesXmlOneFileListData(i_file_number)
{
    console.log("Enter testOfQrFilesXmlOneFileListData File number " + i_file_number.toString());

    if (g_qr_files_xml_object == null)
    {
        alert("testOfQrFilesXmlOneFileListData Object QrFilesXml is null");

        return;
    }

    var xml_object = g_qr_files_xml_object;

	console.log("getFirstName = " + xml_object.getFirstName(i_file_number));

	console.log("getFamilyName = " + xml_object.getFamilyName(i_file_number));

	console.log("getHouseNumber = " + xml_object.getHouseNumber(i_file_number));

	console.log("getPostalCode = " + xml_object.getPostalCode(i_file_number));

	console.log("getDomicil = " + xml_object.getDomicil(i_file_number));

	console.log("getEmail = " + xml_object.getEmail(i_file_number));

	console.log("getSponsor = " + xml_object.getSponsor(i_file_number));

	console.log("getComment = " + xml_object.getComment(i_file_number));

	console.log("getSupporterContribution = " + xml_object.getSupporterContribution(i_file_number));

	console.log("getSupporter = " + xml_object.getSupporter(i_file_number));

	console.log("getSupporterAdmission = " + xml_object.getSupporterAdmission(i_file_number));

	console.log("getMusicianAdmission = " + xml_object.getMusicianAdmission(i_file_number));

	console.log("getFreeAdmission = " + xml_object.getFreeAdmission(i_file_number));

	console.log("getSponsorAdmission = " + xml_object.getSponsorAdmission(i_file_number));

	console.log("getMemberAdmission = " + xml_object.getMemberAdmission(i_file_number));

	console.log("getDownloadOne = " + xml_object.getDownloadOne(i_file_number));

	console.log("getDownloadTwo = " + xml_object.getDownloadTwo(i_file_number));

	console.log("getEmailSent = " + xml_object.getEmailSent(i_file_number));

	console.log("getMailSent = " + xml_object.getMailSent(i_file_number));


    console.log("Exit testOfQrFilesXmlOneFileListData File number " + i_file_number.toString());

} // testOfQrFilesXmlOneFileListData


// Test of set functions in QrFilesXml for one file 
function testOfQrFilesXmlOneFileChangeData(i_file_number)
{
    console.log("Enter testOfQrFilesXmlOneFileChangeData File number " + i_file_number.toString());

    if (g_qr_files_xml_object == null)
    {
        alert("testOfQrFilesXmlOneFileChangeData Object QrFilesXml is null");

        return;
    }

    var xml_object = g_qr_files_xml_object;

    xml_object.setFirstName(i_file_number, "NewFirstName");

    xml_object.setFamilyName(i_file_number, "NewFamilyName");

    xml_object.setHouseNumber(i_file_number, "NewHouseNumber");

    xml_object.setPostalCode(i_file_number, "NewPostalCode");

    xml_object.setDomicil(i_file_number, "NewDomicil");

    xml_object.setEmail(i_file_number, "NewEmail");

    xml_object.setSponsor(i_file_number, "NewSponsor");

    xml_object.setComment(i_file_number, "NewComment");

	xml_object.setSupporterContribution(i_file_number, "NewSupporterContribution");

	xml_object.setSupporter(i_file_number, "NewSupporter");

	xml_object.setSupporterAdmission(i_file_number, "NewSupporterAdmission");

	xml_object.setMusicianAdmission(i_file_number, "NewMusicianAdmission");

	xml_object.setFreeAdmission(i_file_number, "NewFreeAdmission");

	xml_object.setSponsorAdmission(i_file_number, "NewSponsorAdmission");

	xml_object.setMemberAdmission(i_file_number, "NewMemberAdmission");

	xml_object.setDownloadOne(i_file_number, "NewDownLoadOne");

	xml_object.setDownloadTwo(i_file_number, "NewDownLoadTwo");

	xml_object.setEmailSent(i_file_number, "NewEmailSent");

	xml_object.setMailSent(i_file_number, "NewMailSent");


    testOfQrFilesXmlOneFileListData(i_file_number);


    console.log("Exit testOfQrFilesXmlOneFileChangeData File number " + i_file_number.toString());

} // testOfQrFilesXmlOneFileChangeData


// Test of the append functions in QrFilesXml
function testOfQrFilesXmlAppendFile()
{
    console.log("Enter testOfQrFilesXmlAppendFile");

    if (g_qr_files_xml_object == null)
    {
        alert("testOfQrFilesXmlAppendFile Object QrFilesXml is null");

        return;
    }
	
    var xml_object = g_qr_files_xml_object;
	
	var number_files = xml_object.getNumberOfQrFiles();
	
	console.log("number_files= " + number_files.toString());
	
	xml_object.appendNode();
	
	var append_number_files = xml_object.getNumberOfQrFiles();
	
	console.log("append_number_files= " + append_number_files.toString());
	
	var file_number = append_number_files;
	
	console.log("file_number= " + file_number.toString());
	
	testOfQrFilesXmlOneFileListData(file_number);
	
    xml_object.setFirstName(file_number, "Gunnar");

    xml_object.setFamilyName(file_number, "Lidén");

    xml_object.setHouseNumber(file_number, "10");

    xml_object.setPostalCode(file_number, "5722");

    xml_object.setDomicil(file_number, "Gränichen");

    xml_object.setEmail(file_number, "gunnar@viewsoncad.ch");

    xml_object.setSponsor(file_number, "FALSH");

    xml_object.setComment(file_number, "Test of append function");

	xml_object.setSupporterContribution(file_number, "70");

	xml_object.setSupporter(file_number, "FALSCH");

	xml_object.setSupporterAdmission(file_number, "FALSCH");

	xml_object.setMusicianAdmission(file_number, "FALSCH");

	xml_object.setFreeAdmission(file_number, "FALSCH");

	xml_object.setSponsorAdmission(file_number, "FALSCH");

	xml_object.setMemberAdmission(file_number, "FALSCH");

	xml_object.setDownloadOne(file_number, "grjuze12");

	xml_object.setDownloadTwo(file_number, "");

	xml_object.setEmailSent(file_number, "FALSCH");

	xml_object.setMailSent(file_number, "FALSCH");


    testOfQrFilesXmlOneFileListData(file_number);


    console.log("Exit testOfQrFilesXmlAppendFile File number " + file_number.toString());

} // testOfQrFilesXmlAppendFile


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Test Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create All QR Files (no longer used) //////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/*
<div>
<button class="cl_button_create_qr_files" onclick="clickCreateQrFiles()">Create QR Files</button>
</div>

.cl_button_create_qr_files 
{
    background-color:#323036;
    padding:8px;
    margin: 30px;
    margin-left: 70px;
    color:white;
    cursor:pointer;
}

*/
/* QQQQQQQQQQQQQ Temporary
// User clicked button create QR files
function clickCreateQrFiles()
{
    createQrFilesForAllSupporters();

} // clickCreateQrFiles

// Create QR files for all supporters
// 1. Generate QR codes for all supporters and set the array g_supporter_image_data
//    Call of generateQrCodeAllSupporters
function createQrFilesForAllSupporters()
{
    QrProgress.Msg('Enter createQrFilesForAllSupporters');

    var qr_case = 'DataUrl'; 

    var canvas_size = 210;

    qr_code_season_str = '2021-2022';

    generateQrCodeAllSupporters(qr_case, canvas_size, qr_code_season_str);

    saveAllQrFilesOnServer();

    QrProgress.Append('Exit createQrFilesForAllSupporters');

} // createQrFilesForAllSupporters

function saveAllQrFilesOnServer()
{
    QrProgress.Append('Enter saveAllQrFilesOnServer');

    var n_end = g_supporter_data_url.length;

    for (var index_supporter=0; index_supporter < n_end; index_supporter++)
    {
        saveOneQrFileOnServer(index_supporter);
    }

    var b_execute_server = execApplicationOnServer();

    if (b_execute_server)
    {
        QrProgress.Append('Number of created files ' + n_end.toString());
    }
    else
    {
        QrProgress.Append('Number files ' + n_end.toString() + '. But not created (exec VSC)');
    }


    QrProgress.Append('Exit saveAllQrFilesOnServer');

} // saveAllQrFilesOnServer

// Saves one QR file on the server.
function saveOneQrFileOnServer(i_index_supporter)
{
    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        return;
    }

    var download_code_str = 'index_' + i_index_supporter.toString();

    var xml_content_str = g_supporter_data_url[i_index_supporter];

    var file_name_path = QrStrings.getRelativeUrlQrFileImage(g_season_start_year, download_code_str);

    if (!saveFileWithJQueryPostFunction(file_name_path, xml_content_str))
    {
        alert("saveOneQrFileOnServer Saving QR file failed");
    }

} // saveOneQrFileOnServer


 */
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create All QR Files (no longer used) ////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////