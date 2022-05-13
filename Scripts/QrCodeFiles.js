// File: QrCodeFile.js
// Date: 2022-05-13
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

// Active file number
var g_files_active_number = 1;

// File numbers that shall be handled
var g_file_number_array = [];

function getFileNumberFromDropdownNumber(i_option_number)
{
    return g_file_number_array[i_option_number - 1];

} // getFileNumberFromDropdownNumber

// Active category Supporter, Sponsor, Musician, Free, ....
var g_active_category = null;

// Sets the active category Supporter, Sponsor, Musician, Free, ....
function setActiveCategory(i_category_str)
{
    if (!checkActiveCategory(i_category_str))
    {
        return;
    }

    g_active_category = i_category_str;

} // setActiveCategory

// Returns the active category Supporter, Sponsor, Musician, Free, ....
function getActiveCategory()
{
    return g_active_category;
    
} // getActiveCategory

// // Returns true if the input category is Supporter, Sponsor, Musician, Free, ....
function checkActiveCategory(i_category_str)
{
    var ret_b_active = false;

    if (i_category_str == QrStrings.getQrCategoryUndefinedString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategorySupporterString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategorySponsorString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategoryMusicianString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategoryMemberString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategoryFreeString())
    {
        ret_b_active = true;
    }

    if (!ret_b_active)
    {
        alert("checkActiveCategory Not an implemented category= " + i_category_str);
    }

    return ret_b_active;

} // checkActiveCategory

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

    setActiveCategory(QrStrings.getQrCategoryUndefinedString());

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

    createAllControls();

    setControlsCategoryUndefined();
    
    QrProgress.Msg("QR Codes neue Supporter hochgeladen");

} // callbackAfterUpdateAndSaveOfQrFilesXml

// User selected a file
function eventSelectFileDropdown()
{
    // QrProgress.Append('Enter eventSelectFileDropdown');

    var option_number = g_files_drop_down.getSelectOptionNumber();

    g_files_active_number = getFileNumberFromDropdownNumber(option_number);

    if (getActiveCategory() == QrStrings.getQrCategoryUndefinedString())
    {
        setControlsCategoryUndefined();
    }
    else if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        setControlsSupporter();
    }
    else if (getActiveCategory() == QrStrings.getQrCategorySponsorString())
    {
        setControlsSponsor();
    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        setControlsMusician();
    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMemberString())
    {
        setControlsMember();
    }
    else if (getActiveCategory() == QrStrings.getQrCategoryFreeString())
    {
        setControlsFree();
    }


    // QrProgress.Append('g_files_active_number= ' + g_files_active_number.toString());

} // eventSelectFileDropdown

// User clicked the supporter button
function eventClickQrSupporterButton()
{
    setControlsSupporter();

} // eventClickQrSupporterButton

// User clicked the sponsor button
function eventClickQrSponsorButton()
{
    setControlsSponsor();

} // eventClickQrSponsorButton

// User clicked the free button
function eventClickQrFreeButton()
{
    setControlsFree();

} // eventClickQrFreeButton

// User clicked the musician button
function eventClickQrMusicianButton()
{
    setControlsMusician();
    
} // eventClickQrMusicianButton

// User clicked the send email button
function eventClickQrSendEmailButton()
{

} // eventClickQrSendEmailButton

// User clicked the send mail (post) button
function eventClickQrSendPostButton()
{

} // eventClickQrSendPostButton

// User clicked the print batch button
function eventClickPrintBatchButton()
{

} // eventClickPrintBatchButton

// User clicked the file done button
function eventClickQrFileDoneButton()
{

} // eventClickQrFileDoneButton

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

// Set controls for category (case) Supporter
function setControlsSupporter()
{
    setSupporterDropdown();

    setTextBoxQrCodeNameOne();

    setTextBoxQrCodeNameTwo();

    setTextBoxQrComment();

    setTextBoxQrAddress();

    setTextBoxQrEmail();

    setTextBoxQrContribution();

    if (g_qr_files_xml_object.contributionForTwoPersons(g_files_active_number))
    {
        displayDivQrCodeNameTwo();
    }
    else
    {
        hideDivQrCodeNameTwo();
    }

} // setControlsSupporter

// Set controls for category (case) Sponsor
function setControlsSponsor()
{
    setControlsCategoryUndefined();

} // setControlsSponsor

// Set controls for category (case) Musician
function setControlsMusician()
{
    setControlsCategoryUndefined();

} // setControlsMusician

// Set controls for category (case) Member
function setControlsMember()
{
    setControlsCategoryUndefined();

} // setControlsMember

// Set controls for category (case) Free
function setControlsFree()
{
    setControlsCategoryUndefined();

} // setControlsFree

// Sets the contols for category undefined
function setControlsCategoryUndefined()
{
    var name_array_init = [];

    name_array_init[0] = '';  

    g_files_drop_down.setNameArray(name_array_init);

    g_qr_code_name_one_text_box.setValue("");

    g_qr_code_name_two_text_box.setValue("");

    hideDivQrCodeNameTwo();

    g_comment_text_box.setValue("");

    g_address_text_box.setValue("");

    g_email_text_box.setValue("");

    g_contribution_text_box.setValue("");

} // setControlsCategoryUndefined

// Sets the files dropdown control for supporters
function setSupporterDropdown()
{
    var b_supporter_above_limit = true;

    var b_only_not_sent = true;

    g_file_number_array =  g_qr_files_xml_object.getFilteredFileNumberArray(b_supporter_above_limit, b_only_not_sent);

    var name_array = g_qr_files_xml_object.getQrFirstAndFamilyNamesFiltered(g_file_number_array);

    g_files_drop_down.setNameArray(name_array);
    
} // setSupporterDropdown

// Set the text box QR code name one for the active file number
function setTextBoxQrCodeNameOne()
{
    var qr_code_name_one = g_qr_files_xml_object.getQrFirstAndFamilyNameString(g_files_active_number);

    g_qr_code_name_one_text_box.setValue(qr_code_name_one);

} // setTextBoxQrCodeNameOne

// Set the text box QR code name two for the active file number
function setTextBoxQrCodeNameTwo()
{
    var qr_code_name_two = '';

    g_qr_code_name_two_text_box.setValue(qr_code_name_two);

} // setTextBoxQrCodeNameTwo

// Set the text box comment for the active file number
function setTextBoxQrComment()
{
    var person_comment = g_qr_files_xml_object.getComment(g_files_active_number);

    g_comment_text_box.setValue(person_comment);

} // setTextBoxQrComment

// Set the text box address for the active file number
function setTextBoxQrAddress()
{
    var person_address = g_qr_files_xml_object.getFullAddress(g_files_active_number);

    g_address_text_box.setValue(person_address);

} // setTextBoxQrAddress

// Set the text box email for the active file number
function setTextBoxQrEmail()
{
    var person_email = g_qr_files_xml_object.getEmail(g_files_active_number);

    g_email_text_box.setValue(person_email);

} // setTextBoxQrEmail

// Set the text box contribution for the active file number
function setTextBoxQrContribution()
{
    var contribution_int = g_qr_files_xml_object.getSupporterContribution(g_files_active_number);
    
    var contribution_str = contribution_int.toString();

    g_contribution_text_box.setValue(contribution_str);

} // setTextBoxQrContribution


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
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
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


