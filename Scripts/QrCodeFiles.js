// File: QrCodeFile.js
// Date: 2022-05-08
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

// Active supporter index
var g_supportes_active_index = -12345;

// The supporter dropdown control
var g_supporter_drop_down = null;

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

    setAllQrFilesControls();

    hideQrCodeImage();

    hideDivQrDisplayXml();

    getSeasonStartYear(callbackSeasonStartYearFiles);

} // onloadQrCodeFiles

// Callback after determining season start year with a PHP function
function callbackSeasonStartYearFiles(i_season_start_year)
{
    QrProgress.Append('callbackSeasonStartYearFiles ' + i_season_start_year.toString());

    g_season_start_year = i_season_start_year;

     createQrFileXmlIfNotAlreadyExisting(g_season_start_year, afterCreateQrFileXmlIfNotAlreadyExisting);

} // callbackSeasonStartYearFiles

// Callback after creation of QrFile.xml. 
function afterCreateQrFileXmlIfNotAlreadyExisting()
{
    QrProgress.Append('Enter afterCreateQrFileXmlIfNotAlreadyExisting');

    g_qr_files_xml_object = new QrFilesXml(afterLoadOfQrFilesXml, g_season_start_year);

} // afterCreateQrFileXmlIfNotAlreadyExisting

// Afier loading QrFiles.xml
function afterLoadOfQrFilesXml()
{
    QrProgress.Append("Enter afterLoadOfQrFilesXml");

    // testOfQrFilesXmlFunctions();

    g_supporter_xml_object = new SupporterXml(afterLoadOfSupporterXmlFile, g_season_start_year);

} // afterLoadOfQrFilesXml

// Callback function after load of XML file Supporter.xml
function afterLoadOfSupporterXmlFile(i_supporter_xml)
{
    QrProgress.Append('Enter afterLoadOfSupporterXmlFile');

    var supporter_data_array = setSupporterDataArrayFromXmlObject(i_supporter_xml);

    updateQrFilesXmlUploadQrFiles(supporter_data_array, g_qr_files_xml_object);

} // afterLoadOfSupporterXmlFile

// Callback function the update and save of the file QrFiles.xml
function callbackAfterUpdateAndSaveOfQrFilesXml()
{
    QrProgress.Append('Enter callbackAfterUpdateAndSaveOfQrFilesXml');

    createSupporterDropdown();
    
    QrProgress.Msg("QR Codes neue Supporter hochgeladen");

} // callbackAfterUpdateAndSaveOfQrFilesXml

// User selected a supporter
function eventSelectSupporterDropdown()
{

} // eventSelectSupporterDropdown

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set Controls //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set all the controls and title for this web page
function setAllQrFilesControls()
{
    setQrFilesTitle();

} // setAllQrFilesControls

// Set the title for this web page
function setQrFilesTitle()
{
    var el_title = getElementDivQrFilesTitle();

    el_title.innerHTML = QrStrings.getTitleQrCodeFiles();

} // setQrFilesTitle

// Creates the supporter dropdown control
function createSupporterDropdown()
{
    QrProgress.Append('Enter createSupporterDropdown');

    g_supporter_drop_down = new JazzDropdown("id_qr_supporter_dropdown", getIdDivQrSupporterDropdown());

    var supporter_name_array =  g_qr_files_xml_object.getQrFirstAndFamilyNameArray();

    g_supporter_drop_down.setNameArray(supporter_name_array);

    g_supporter_drop_down.setOnchangeFunctionName("eventSelectSupporterDropdown");

    g_supporter_drop_down.setLabelText("Supporter wählen");

    g_supporter_drop_down.setLabelTextPositionAbove();

    g_supporter_drop_down.setTitle("Supporter wählen");

    // g_supporter_drop_down.setAppendString("Neuer Supporter");

} // createSupporterDropdown


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Controls ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Generate QR Code For One Person ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Generate QR code for one supporter, set canvas and return data URL (Bitmap)
function generateQrCodeOnePersonDataUrl(i_qr_text)
{
    g_object_generate_qr_code.set
    (
        {
            foreground: 'black',
            size: QrStrings.getCanvasSizeForDataUrl(),
            value: i_qr_text
        }

    );

    var el_canvas =  getElementCanvasQrCode();

    var image_data_url = el_canvas.toDataURL("image/png");

    return image_data_url;

} // generateQrCodeOneSupporterDataUrl

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Generate QR Code For One Person /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the element div title QRFiles.htm 
function getElementDivQrFilesTitle()
{
    return document.getElementById(getIdDivQrFilesTitle());

} // getElementDivQrFilesTitle

// Returns the identity of the div title QRFiles.htm 
function getIdDivQrFilesTitle()
{
    return 'id_div_qr_files_title';

} // getIdDivQrFilesTitle

// Get the element div supporter dropdown
function getElementDivQrSupporterDropdown()
{
    return document.getElementById(getIdDivQrSupporterDropdown());

} // getElementDivQrSupporterDropdown

// Returns the identity of the div supporter dropdown
function getIdDivQrSupporterDropdown()
{
    return 'id_div_qr_supporter_dropdown';

} // getIdDivQrSupporterDropdown

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr File Xml File ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create the QR files XML file (QrFiles.xml) if not already existing
// TODO Check first that the directory exist. The directory is created by the Windows
//      application Adressen
function createQrFileXmlIfNotAlreadyExisting(i_season_start_year, i_callback_function_name)
{
    QrProgress.Append('Enter createQrFileXmlIfNotAlreadyExisting ');

    QrProgress.Append('i_season_start_year ' + i_season_start_year.toString());

    var b_execute_server = execApplicationOnServer();

    QrProgress.Append('b_execute_server ' + b_execute_server.toString());

    if (!b_execute_server)
    {
        i_callback_function_name();

        return;
    }

    var rel_path_xml_file = QrStrings.getRelativeUrlQrFilesXmlFile(i_season_start_year);

    var xml_content = '<AllQrFiles></AllQrFiles>';

    if (!createFileIfNotExistingWithJQueryPostFunction(rel_path_xml_file, xml_content, i_callback_function_name))
    {
        alert("createQrFileXmlIfNotAlreadyExisting Failure");
    }

} // createQrFileXmlIfNotAlreadyExisting

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Qr File Xml File /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


