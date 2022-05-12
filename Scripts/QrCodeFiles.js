// File: QrCodeFile.js
// Date: 2022-05-12
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

// The files dropdown control
var g_files_drop_down = null;

// The button supporter
var g_qr_supporter_button = null;

// The button sponsor
var g_qr_sponsor_button = null;

// The button free
var g_qr_free_button = null;

// The button musician
var g_qr_musician_button = null;

// The button send email
var g_qr_send_email_button = null;

// The button send mail (post)
var g_qr_send_post_button = null;

// The button print batch
var g_qr_print_batch_button = null;

// The button file done
var g_qr_file_done_button = null;

// The text box for the person name
var g_person_name_text_box = null;

// The text box for the comment
var g_comment_text_box = null;

// The text box for the address
var g_address_text_box = null;

// The text box for the email address
var g_email_text_box = null;

// The text box for the supporter contribution
var g_contribution_text_box = null;

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

    createAllControls();

    setControlsSupporter();
    
    QrProgress.Msg("QR Codes neue Supporter hochgeladen");

} // callbackAfterUpdateAndSaveOfQrFilesXml

// User selected a file
function eventSelectFileDropdown()
{
    // QrProgress.Append('Enter eventSelectFileDropdown');

    var option_number = g_files_drop_down.getSelectOptionNumber();

    g_files_active_number = getFileNumberFromDropdownNumber(option_number);

    setControlsSupporter();

    // QrProgress.Append('g_files_active_number= ' + g_files_active_number.toString());

} // eventSelectFileDropdown

// User clicked the supporter button
function eventClickQrSupporterButton()
{

} // eventClickQrSupporterButton

// User clicked the sponsor button
function eventClickQrSponsorButton()
{

} // eventClickQrSponsorButton

// User clicked the free button
function eventClickQrFreeButton()
{

} // eventClickQrFreeButton

// User clicked the musician button
function eventClickQrMusicianButton()
{

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

// Set all controls for case Supporter
function setControlsSupporter()
{
    setTextBoxQrPersonName();

    setTextBoxQrComment();

    setTextBoxQrAddress();

    setTextBoxQrEmail();

    setTextBoxQrContribution();

} // setControlsSupporter

// Set the text box person name for the active file number
function setTextBoxQrPersonName()
{
    var person_name = g_qr_files_xml_object.getQrFirstAndFamilyNameString(g_files_active_number);

    g_person_name_text_box.setValue(person_name);

} // setTextBoxQrPersonName

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
///////////////////////// Start Create Controls ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create all controle
function createAllControls()
{
    createFilesDropdown();

    createQrSupporterButton();
    
    createQrSponsorButton();

    createQrFreeButton();

    createQrMusicianButton();

    createQrSendEmailButton();

    createQrSendPostButton();

    createQrFileDoneButton();

    createQrPrintBatchButton();

    createTextBoxQrPersonName();

    createTextBoxQrComment();

    createTextBoxQrAddress();

    createTextBoxQrEmail();

    createTextBoxQrContribution();

} // createAllControls


// Creates the supporter control
function createQrSupporterButton()
{
    g_qr_supporter_button = new JazzButton("id_button_delete", getIdDivQrSupporterButton());

    g_qr_supporter_button.setOnclickFunctionName("eventClickQrSupporterButton");

    g_qr_supporter_button.setCaption(QrStrings.getCaptionButtonQrFilesSupporter());

    g_qr_supporter_button.setWidth("77px");

    g_qr_supporter_button.setLabelText("");

    g_qr_supporter_button.setTitle(QrStrings.getTitleButtonQrFilesSupporter());

} // createQrSupporterButton

// Creates the sponsor button
function createQrSponsorButton()
{
    g_qr_sponsor_button = new JazzButton("id_qr_button_sponsor", getIdDivQrSponsorButton());

    g_qr_sponsor_button.setOnclickFunctionName("eventClickQrSponsorButton");

    g_qr_sponsor_button.setCaption(QrStrings.getCaptionButtonQrFilesSponsor());

    g_qr_sponsor_button.setWidth("77px");

    g_qr_sponsor_button.setLabelText("");

    g_qr_sponsor_button.setTitle(QrStrings.getTitleButtonQrFilesSponsor());

} // createQrSponsorButton

// Creates the free button
function createQrFreeButton()
{
    g_qr_free_button = new JazzButton("id_qr_button_sponsor", getIdDivQrFreeButton());

    g_qr_free_button.setOnclickFunctionName("eventClickQrFreeButton");

    g_qr_free_button.setCaption(QrStrings.getCaptionButtonQrFilesFree());

    g_qr_free_button.setWidth("77px");

    g_qr_free_button.setLabelText("");

    g_qr_free_button.setTitle(QrStrings.getTitleButtonQrFilesFree());

} // createQrFreeButton

// Creates the musician button
function createQrMusicianButton()
{
    g_qr_musician_button = new JazzButton("id_qr_button_musician", getIdDivQrMusicianButton());

    g_qr_musician_button.setOnclickFunctionName("eventClickQrMusicianButton");

    g_qr_musician_button.setCaption(QrStrings.getCaptionButtonQrFilesMusician());

    g_qr_musician_button.setWidth("77px");

    g_qr_musician_button.setLabelText("");

    g_qr_musician_button.setTitle(QrStrings.getTitleButtonQrFilesMusician());

} // createQrMusicianButton

// Creates the send email control
function createQrSendEmailButton()
{
    g_qr_send_email_button = new JazzButton("id_button_delete", getIdDivQrSendEmailButton());

    g_qr_send_email_button.setOnclickFunctionName("eventClickQrSendEmailButton");

    g_qr_send_email_button.setCaption(QrStrings.getCaptionButtonQrFilesSendEmail());

    g_qr_send_email_button.setWidth("77px");

    g_qr_send_email_button.setLabelText("");

    g_qr_send_email_button.setTitle(QrStrings.getTitleButtonQrFilesSendEmail());

} // createQrSendEmailButton

// Creates the send mail (post) button
function createQrSendPostButton()
{
    g_qr_send_post_button = new JazzButton("id_qr_button_sponsor", getIdDivQrSendPostButton());

    g_qr_send_post_button.setOnclickFunctionName("eventClickQrSendPostButton");

    g_qr_send_post_button.setCaption(QrStrings.getCaptionButtonQrFilesSendPost());

    g_qr_send_post_button.setWidth("77px");

    g_qr_send_post_button.setLabelText("");

    g_qr_send_post_button.setTitle(QrStrings.getTitleButtonQrFilesSendPost());

} // createQrSendPostButton

// Creates the print batch button
function createQrPrintBatchButton()
{
    g_qr_print_batch_button = new JazzButton("id_qr_button_sponsor", getIdDivQrPrintBatchButton());

    g_qr_print_batch_button.setOnclickFunctionName("eventClickPrintBatchButton");

    g_qr_print_batch_button.setCaption(QrStrings.getCaptionButtonQrFilesPrintBatch());

    g_qr_print_batch_button.setWidth("77px");

    g_qr_print_batch_button.setLabelText("");

    g_qr_print_batch_button.setTitle(QrStrings.getTitleButtonQrFilesPrintBatch());

} // createQrPrintBatchButton

// Creates the file done button
function createQrFileDoneButton()
{
    g_qr_file_done_button = new JazzButton("id_qr_button_musician", getIdDivQrFileDoneButton());

    g_qr_file_done_button.setOnclickFunctionName("eventClickQrFileDoneButton");

    g_qr_file_done_button.setCaption(QrStrings.getCaptionButtonQrFilesFileDone());

    g_qr_file_done_button.setWidth("77px");

    g_qr_file_done_button.setLabelText("");

    g_qr_file_done_button.setTitle(QrStrings.getTitleButtonQrFilesFileDone());

} // createQrFileDoneButton

// Creates the files dropdown control
function createFilesDropdown()
{
    QrProgress.Append('Enter createFilesDropdown');

    g_files_drop_down = new JazzDropdown("id_qr_files_dropdown", getIdDivQrFilesDropdown());

    var b_supporter_above_limit = true;

    var b_only_not_sent = true;

    g_file_number_array =  g_qr_files_xml_object.getFilteredFileNumberArray(b_supporter_above_limit, b_only_not_sent);

    var name_array = g_qr_files_xml_object.getQrFirstAndFamilyNamesFiltered(g_file_number_array);

    g_files_drop_down.setNameArray(name_array);

    g_files_drop_down.setOnchangeFunctionName("eventSelectFileDropdown");

    g_files_drop_down.setLabelText(QrStrings.getLabelQrFilesDropdown());

    g_files_drop_down.setLabelTextPositionAbove();

    g_files_drop_down.setTitle(QrStrings.getTitleQrFilesDropdown());

    // g_files_drop_down.setAppendString("Neuer Supporter");

} // createFilesDropdown

// Create the person name text box
function createTextBoxQrPersonName()
{
    g_person_name_text_box = new JazzTextBox("id_person_name_text_box", getIdDivQrPersonName());

    g_person_name_text_box.setLabelText(QrStrings.getLabelQrPersonName());

    g_person_name_text_box.setSize("42");

    g_person_name_text_box.setLabelTextPositionAbove();

    g_person_name_text_box.setTitle(QrStrings.getTitleQrPersonName());

    g_person_name_text_box.setValue("Test First name and family name");

    // g_person_name_text_box.setReadOnlyFlag(true);

    // g_person_name_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrPersonName

// Create the text box for the comment
function createTextBoxQrComment()
{
    g_comment_text_box = new JazzTextBox("id_comment_text_box", getIdDivQrComment());

    g_comment_text_box.setLabelText(QrStrings.getLabelTextboxQrComment());

    g_comment_text_box.setSize("42");

    g_comment_text_box.setLabelTextPositionAbove();

    g_comment_text_box.setTitle(QrStrings.getTitleTextboxQrComment());
	
	g_comment_text_box.setReadOnlyFlag(true);

    g_comment_text_box.setValue("Test Comment");

    // g_comment_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrComment

// Create the text box for the address
function createTextBoxQrAddress()
{
    g_address_text_box = new JazzTextBox("id_address_text_box", getIdDivQrAddress());

    g_address_text_box.setLabelText(QrStrings.getLabelTextboxQrAddress());

    g_address_text_box.setSize("42");

    g_address_text_box.setLabelTextPositionAbove();

    g_address_text_box.setTitle(QrStrings.getTitleTextboxQrAddress());
	
	g_address_text_box.setReadOnlyFlag(true);

    g_address_text_box.setValue("Test Addrees");


    // g_address_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrAddress

// Create the text box for the email address
function createTextBoxQrEmail()
{
    g_email_text_box = new JazzTextBox("id_email_text_box", getIdDivQrEmail());

    g_email_text_box.setLabelText(QrStrings.getLabelTextboxQrEmail());

    g_email_text_box.setSize("30");

    g_email_text_box.setLabelTextPositionAbove();

    g_email_text_box.setTitle(QrStrings.getTitleTextboxQrEmail());
	
	g_email_text_box.setReadOnlyFlag(true);

    g_email_text_box.setValue("Test Email");

    // g_email_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrEmail

// Create the text box for the supporter contribution
function createTextBoxQrContribution()
{
    g_contribution_text_box = new JazzTextBox("id_contribution_text_box", getIdDivQrDistribution());

    g_contribution_text_box.setLabelText(QrStrings.getLabelTextboxQrDistribution());

    g_contribution_text_box.setSize("5");

    g_contribution_text_box.setLabelTextPositionAbove();

    g_contribution_text_box.setTitle(QrStrings.getTitleTextboxQrDistribution());
	
	g_contribution_text_box.setReadOnlyFlag(true);

    g_contribution_text_box.setValue("Summa");

    // g_email_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrContribution


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Controls /////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the element div qr button supporter
function getElementDivQrSupporterButton()
{
    return document.getElementById(getIdDivQrSupporterButton());

} // getElementDivQrSupporterButton

// Returns the identity of the div qr button supporter
function getIdDivQrSupporterButton()
{
    return 'id_div_qr_button_supporter';

} // getIdDivQrSupporterButton

// Get the element div qr button sponsor
function getElementDivQrSponsorButton()
{
    return document.getElementById(getIdDivQrSponsorButton());

} // getElementDivQrSponsorButton

// Returns the identity of the div qr button sponsor
function getIdDivQrSponsorButton()
{
    return 'id_div_qr_button_sponsor';

} // getIdDivQrSponsorButton

// Get the element div qr button free
function getElementDivQrFreeButton()
{
    return document.getElementById(getIdDivQrFreeButton());

} // getElementDivQrFreeButton

// Returns the identity of the div qr button free
function getIdDivQrFreeButton()
{
    return 'id_div_qr_button_free';

} // getIdDivQrFreeButton

// Get the element div qr button musician
function getElementDivQrMusicianButton()
{
    return document.getElementById(getIdDivQrMusicianButton());

} // getElementDivQrMusicianButton

// Returns the identity of the div qr button musician
function getIdDivQrMusicianButton()
{
    return 'id_div_qr_button_musician';

} // getIdDivQrMusicianButton

// Get the element div qr button send email
function getElementDivQrSendEmailButton()
{
    return document.getElementById(getIdDivQrSendEmailButton());

} // getElementDivQrSendEmailButton

// Returns the identity of the div qr button send email
function getIdDivQrSendEmailButton()
{
    return 'id_div_qr_button_send_email';

} // getIdDivQrSendEmailButton

// Get the element div qr button send post
function getElementDivQrSendPostButton()
{
    return document.getElementById(getIdDivQrSendPostButton());

} // getElementDivQrSendPostButton

// Returns the identity of the div qr button send post
function getIdDivQrSendPostButton()
{
    return 'id_div_qr_button_send_post';

} // getIdDivQrSendPostButton

// Get the element div qr button print batch
function getElementDivQrPrintBatchButton()
{
    return document.getElementById(getIdDivQrPrintBatchButton());

} // getElementDivQrPrintBatchButton

// Returns the identity of the div qr button print batch
function getIdDivQrPrintBatchButton()
{
    return 'id_div_qr_button_print_batch';

} // getIdDivQrPrintBatchButton

// Get the element div qr button file done
function getElementDivQrFileDoneButton()
{
    return document.getElementById(getIdDivQrFileDoneButton());

} // getElementDivQrFileDoneButton

// Returns the identity of the div qr button file done
function getIdDivQrFileDoneButton()
{
    return 'id_div_qr_button_file_done';

} // getIdDivQrFileDoneButton

// Get the element div text box for the person name
function getElementDivQrPersonName()
{
    return document.getElementById(getIdDivQrPersonName());

} // getElementDivQrMusicianButton

// Returns the identity of the div text box for the person name
function getIdDivQrPersonName()
{
    return 'id_div_person_name_text_box';

} // getIdDivQrPersonName

// Get the element div text box for the comment
function getElementDivQrComment()
{
    return document.getElementById(getIdDivQrComment());

} // getElementDivQrComment

// Returns the identity of the div text box for the comment
function getIdDivQrComment()
{
    return 'id_div_comment_text_box';

} // getIdDivQrComment

// Get the element div text box for the address
function getElementDivQrAddress()
{
    return document.getElementById(getIdDivQrAddress());

} // getElementDivQrAddress

// Returns the identity of the div text box for the address
function getIdDivQrAddress()
{
    return 'id_div_address_text_box';

} // getIdDivQrAddress

// Get the element div text box for the email address
function getElementDivQrEmail()
{
    return document.getElementById(getIdDivQrEmail());

} // getElementDivQrEmail

// Returns the identity of the div text box for the email address
function getIdDivQrEmail()
{
    return 'id_div_email_text_box';

} // getIdDivQrEmail

// Get the element div text box for the supporter contribution
function getElementDivQrDistribution()
{
    return document.getElementById(getIdDivQrDistribution());

} // getElementDivQrDistribution

// Returns the identity of the div text box for the supporter contribution
function getIdDivQrDistribution()
{
    return 'id_div_contribution_text_box';

} // getIdDivQrDistribution

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
    return document.getElementById(getIdDivQrFilesDropdown());

} // getElementDivQrSupporterDropdown

// Returns the identity of the div supporter dropdown
function getIdDivQrFilesDropdown()
{
    return 'id_div_qr_files_dropdown';

} // getIdDivQrFilesDropdown

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


