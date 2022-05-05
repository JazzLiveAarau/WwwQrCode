// File: QrCodeFile.js
// Date: 2022-05-05
// Author: Gunnar Lidén

// File content
// =============
//
// Creation of QR Code files


// References
// Store and get image from local store. Use toDataURL(type, quality)
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Instance of the class SupporterXml handling the XML file Supporter,xml
var g_supporter_xml_object = null;

// Instance of the class QrFilesXml handling the XML file QrFiles,xml
var g_qr_files_xml_object = null;

// Season start year
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

