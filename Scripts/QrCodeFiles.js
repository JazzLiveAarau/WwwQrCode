// File: QrCodeFile.js
// Date: 2022-05-06
// Author: Gunnar Lidén

// File content
// =============
//
// Creation of QR Code files
//
// This is the way it works for the supporter QR codes
// ---------------------------------------------------
//
// 1. Registration of the supporter contribution
//
// The supporter pays the "fee" and the jazz club register the amount
// in the Windows application Adressen
//
// 2. Upload of XML file to the server directory QrCode/QrFiles/Season_20NN_20MM
// 
// An XML file is created witd data for all persons that have contributed to the
// jazz club. Not only the persons that have paid enough to become a supporter.
// The XML file is uploaded by the checkin (save) after any change.
// To which season directory is dependent on the contribution. The first registered
// sum determines the new 'current' season, i.e. probably short before the first
// concert of the season.
// The URL to the XML file is QrCode/QrFiles/Season_20NN_20MM/Supporter.xml
//
// 3. Determine the current/active season (g_season_start_year)
//
// A global parameter g_season_start_year holds the value for the active season.
// The season start year is determined by the function getSeasonStartYear. Input
// data to this function is the name of a callback function. It is a PHP function
// Php/SeasonStartYear.php that determines the year and the further execution must
// wait until the PHP function is executed.
// It is the supporter XML file Season_20NN_20MM/Supporter.xml that determines 
// the start year. The PHP function tested with the current date year and the
// previous year. If there is a Supporter.xml file in the season directory with
// current year as season start year then current date year will be returned.
// If not, the previous year will be returned.
//
// 4. Load of the QR files XML file (QrFiles.xml)
//
// For each supporter (each object in array g_supporter_data_array) an image file
// with the QR code and a text file with the text of the QR be created in the 
// directory QrCode/QrFiles/Season_20NN_20MM.
// The file QrFiles.xml (in the same folder) registers the names of all files that 
// have been created. Not the full name though. Only the 'download code' that
// the supporter become so that the QR code can be downloaded. The 'download code'
// defines the file name.
// The constructor function of class QrFilesXml loads the QR files XML file, i.e.
// downloads the file and create an XML object corresponding to the XML file.
// The function callbackSeasonStartYearFiles creates the QrFilesXml object
//
// 5. Load of the supporter XML file (Supporter.xml)
//
// The constructor function for class SupporterXml loads the file Supporter.xml.
// The function afterLoadOfQrFilesXml creates the XML object, and the (callback)
// function afterLoadOfSupporterXmlFile is called when the object is created
// 
// 6. Creation of an array SupporterData objects (g_supporter_data_array)
//
// There is a class SupporterData that hold information about a supporter.
// Objects in the array g_supporter_data_array are only for persons that paid 
// QrStrings.getSupporterContributionLimitValue() or more.
// Function setSupporterDataArrayFromXmlObject creates g_supporter_data_array.
// This function called by afterLoadOfSupporterXmlFile
//
// 7. Upload and register QR code files for new supporters
//


// References
// Store and get image from local store. Use toDataURL(type, quality)
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Instance of the class SupporterXml handling the XML file Supporter.xml
var g_supporter_xml_object = null;

// Instance of the class QrFilesXml handling the XML file QrFiles.xml
var g_qr_files_xml_object = null;

// Season start year, that defines the active season directory QrFiles/Season_20NN_20MM
var g_season_start_year = -12345;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for QR code files
function onloadQrCodeFiles()
{
    QrProgress.Msg("Enter onloadQrCodeFiles");

    g_gr_strings = new QrStrings();

    hideQrCodeImage();

    getSeasonStartYear(callbackSeasonStartYearFiles);

} // onloadQrCodeFiles

// Callback after determining season start year with a PHP function
function callbackSeasonStartYearFiles(i_season_start_year)
{
    QrProgress.Append('callbackSeasonStartYearFiles ' + i_season_start_year.toString());

    g_season_start_year = i_season_start_year;

    createQrFileXmlIfNotAlreadyExisting(g_season_start_year);

    g_qr_files_xml_object = new QrFilesXml(afterLoadOfQrFilesXml, g_season_start_year);

} // callbackSeasonStartYearFiles

// Afier loading QrFiles.xml
function afterLoadOfQrFilesXml()
{
    QrProgress.Append("Enter afterLoadOfQrFilesXml");

    testOfQrFilesXmlFunctions(); // QQQQQQQQQQQQQQQQQQQQQQ Test QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ

    g_supporter_xml_object = new SupporterXml(afterLoadOfSupporterXmlFile, g_season_start_year);

} // afterLoadOfQrFilesXml

// Callback function after load of XML file Supporter.xml
function afterLoadOfSupporterXmlFile(i_supporter_xml)
{
    QrProgress.Append('Enter afterLoadOfSupporterXmlFile');

    setSupporterDataArrayFromXmlObject(i_supporter_xml);

} // afterLoadOfSupporterXmlFile

// User clicked button create QR files
function clickCreateQrFiles()
{
    createQrFilesForAllSupporters();

} // clickCreateQrFiles

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr Image And Text Files ////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Qr Image And Text Files //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr Files Xml File //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create the QR files XML file (QrFiles.xml) if not already existing
// TODO Check first that the directory exist. The directory is created by the Windows
//      application Adressen
function createQrFileXmlIfNotAlreadyExisting(i_season_start_year)
{
    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        return;
    }

    var rel_path_xml_file = QrStrings.getRelativeUrlQrFilesXmlFile(i_season_start_year);

    var xml_content = '<AllQrFiles></AllQrFiles>';

    if (!createFileIfNotExistingWithJQueryPostFunction(rel_path_xml_file, xml_content))
    {
        alert("createQrFileXmlIfNotAlreadyExisting Failure");
    }

} // createQrFileXmlIfNotAlreadyExisting

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr Files Xml File //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hide the div qr show progress
function hideDivQrShowProgress()
{
    var el_image = getElementDivQrShowProgress();

    el_image.style.display = 'none';

} // hideDivQrShowProgress

// Display the div qr show progress
function displayDivQrShowProgress()
{
    var el_image = getElementDivQrShowProgress();

    el_image.style.display = 'block';

} // displayDivQrShowProgress

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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

    console.log("Exit testOfQrFilesXmlFunctions");

} // testOfQrFilesXmlFunctions

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


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Test Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


