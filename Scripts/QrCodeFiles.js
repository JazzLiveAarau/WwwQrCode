// File: QrCodeFile.js
// Date: 2022-05-23
// Author: Gunnar Lidén

// File content
// =============
//
// Creation of QR Code files
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

// Instance of the class SupporterXml handling the XML file Supporter.xml
var g_supporter_xml_object = null;

// Instance of the class QrFilesXml handling the XML file QrFiles.xml
var g_qr_files_xml_object = null;

// Season start year, that defines the active season directory QrFiles/Season_20NN_20MM
var g_season_start_year = -12345;


var g_user_member_name_address = 'Gunnar Lidén, Kapellenweg 10, 5722 Gränichen'; // TODO Implement!

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Init Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for QR code files
function onloadQrCodeFiles()
{
    QrProgress.Msg("Enter onloadQrCodeFiles");

    console.log('onloadQrCodeFiles Enter');

    g_gr_strings = new QrStrings();

    setActiveCategory(QrStrings.getQrCategoryUndefinedString());

    setAllQrFilesControls();

    hideQrCodeImage();

    hideDivQrDisplayXml();

    hideDivQrShowProgress(); // For debug

    getSeasonStartYear(callbackSeasonStartYearFiles);

} // onloadQrCodeFiles

// Callback after determining season start year with a PHP function
function callbackSeasonStartYearFiles(i_season_start_year)
{
    QrProgress.Append('callbackSeasonStartYearFiles ' + i_season_start_year.toString());

    console.log('callbackSeasonStartYearFiles Enter');

    g_season_start_year = i_season_start_year;

     createQrFileXmlIfNotAlreadyExisting(g_season_start_year, afterCreateQrFileXmlIfNotAlreadyExisting);

} // callbackSeasonStartYearFiles

// Callback after creation of QrFile.xml. 
function afterCreateQrFileXmlIfNotAlreadyExisting()
{
    QrProgress.Append('Enter afterCreateQrFileXmlIfNotAlreadyExisting');

    console.log('afterCreateQrFileXmlIfNotAlreadyExisting Enter');

    g_qr_files_xml_object = new QrFilesXml(afterLoadOfQrFilesXml, g_season_start_year);

} // afterCreateQrFileXmlIfNotAlreadyExisting

// Afier loading QrFiles.xml
function afterLoadOfQrFilesXml()
{
    console.log('afterLoadOfQrFilesXml Enter');

    QrProgress.Append("Enter afterLoadOfQrFilesXml");

    // testOfQrFilesXmlFunctions();

    g_supporter_xml_object = new SupporterXml(afterLoadOfSupporterXmlFile, g_season_start_year);

} // afterLoadOfQrFilesXml

// Callback function after load of XML file Supporter.xml
function afterLoadOfSupporterXmlFile(i_supporter_xml)
{
    QrProgress.Append('Enter afterLoadOfSupporterXmlFile');

    console.log('afterLoadOfSupporterXmlFile Enter');

    var supporter_data_array = setSupporterDataArrayFromXmlObject(i_supporter_xml);

    updateQrFilesXmlUploadQrFilesSupporter(supporter_data_array, g_qr_files_xml_object);

} // afterLoadOfSupporterXmlFile

// Callback function the update and save of the file QrFiles.xml
function callbackAfterUpdateAndSaveOfQrFilesXml()
{
    QrProgress.Append('Enter callbackAfterUpdateAndSaveOfQrFilesXml');

    console.log('callbackAfterUpdateAndSaveOfQrFilesXml Enter');

    createAllControls();

    setControlsCategoryUndefined();

    hideDropdownTextBoxesExecutionButtons();

    setCategoryButtonsNoneSelected();

    setTextBoxesSeasonColor();

    loadSeasonXmlFileCreateConcertData(g_season_start_year);

    console.log('callbackAfterUpdateAndSaveOfQrFilesXml Exit');
    
    // QrProgress.Msg("QR Codes neue Supporter hochgeladen");

} // callbackAfterUpdateAndSaveOfQrFilesXml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Init Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// User selected a file
function eventSelectFileDropdown()
{
    // QrProgress.Append('Enter eventSelectFileDropdown');

    console.log('eventSelectFileDropdown Enter');

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

    console.log('eventSelectFileDropdown Exit');

    // QrProgress.Append('g_files_active_number= ' + g_files_active_number.toString());

} // eventSelectFileDropdown

// User clicked the supporter button
function eventClickQrSupporterButton()
{
    console.log('eventClickQrSupporterButton Enter');

    setActiveCategory(QrStrings.getQrCategorySupporterString());

    setSupporterDropdown();

    option_number = 1;

    g_files_active_number = getFileNumberFromDropdownNumber(option_number);

    setControlsSupporter();

    setStylesSupporter();

    displayControlSupporters();

    setCategoryButtonSupporterSelected();

    console.log('eventClickQrSupporterButton Exit');

} // eventClickQrSupporterButton

// User clicked the sponsor button
function eventClickQrSponsorButton()
{
    console.log('eventClickQrSponsorButton Enter');

    setActiveCategory(QrStrings.getQrCategorySponsorString());

    setControlsSponsor();

    displayControlSponsor();

    setCategoryButtonSponsorSelected();

    console.log('eventClickQrSponsorButton Exit');

} // eventClickQrSponsorButton

// User clicked the free button
function eventClickQrFreeButton()
{
    console.log('eventClickQrFreeButton Enter');

    setActiveCategory(QrStrings.getQrCategoryFreeString());

    setControlsFree();

    displayControlFree();

    setCategoryButtonFreeSelected();

    console.log('eventClickQrFreeButton Exit');

} // eventClickQrFreeButton

// User clicked the musician button
function eventClickQrMusicianButton()
{
    console.log('eventClickQrMusicianButton Enter');

    setActiveCategory(QrStrings.getQrCategoryMusicianString());

    setMusicianDropdown();

    option_number = 1;

    g_files_active_number = getFileNumberFromDropdownNumber(option_number);

    displayControlMusician();

    setControlsMusician();

    setStylesMusician();

    setCategoryButtonMusicianSelected();

    execEventClickQrMusicianButton();

    console.log('eventClickQrMusicianButton Exit');
    
} // eventClickQrMusicianButton

// User clicked the send email button
function eventClickQrSendEmailButton()
{
    if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        return;
    }

    var supporter_name = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

    var download_code = g_qr_files_xml_object.getDownloadOne(g_files_active_number);

    var supporter_email = g_qr_files_xml_object.getEmail(g_files_active_number);

    var send_bcc = 'qrcode@jazzliveaarau.ch';

    if (supporter_email.length == 0)
    {
        alert("Keine E-Mail Adresse vorhanden!");

        return;
    }

    var prompt_str = 'Diese E-Mail Adresse ' + supporter_email + 
        ' wird nicht verwendet. Bitte eine Test-Adresse eingeben';

    var test_address = prompt(prompt_str, 'gunnar@viewsoncad.ch');

    if (test_address == null || test_address.trim().length == 0)
    {
        alert("Unvalid Test-Adresse");

        return;
    }

    var b_execute_server = execApplicationOnServer();

    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        var send_to = test_address;

        var title_htm = QrStrings.getTitleSupporterEmail();

        var msg_htm = QrStrings.getMsgSupporterEmail(supporter_name, download_code);

        if (!b_execute_server)
        {
            g_qr_files_xml_object.setEmailSentBool(g_files_active_number, true);

            debugDisplayXmlAsText();

            return;
        }

        sendEmailWithJQueryPostFunction(send_to, send_bcc, title_htm, msg_htm, callbackSendEmail);

    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        
    }

} // eventClickQrSendEmailButton

// Callback function for sendEmailWithJQueryPostFunction
function callbackSendEmail(i_b_sent)
{
    if (i_b_sent)
    {
        g_qr_files_xml_object.setEmailSentBool(g_files_active_number, true);

        g_qr_files_xml_object.saveXmlFileOnServer();

        var supporter_name = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

        alert("E-Mail an " + supporter_name + " ist gesendet");

        if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
        {
            updateControlsAfterChangeOfQrFilesXmlSupporter();
        }
        else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
        {
            // setControlsMusician();
        } 
    }
    else
    {
        alert("Error: E-Mail an " + supporter_name + " ist nicht gesendet");
    }

} // callbackSendEmail

function updateControlsAfterChangeOfQrFilesXmlSupporter()
{
    setSupporterDropdown();

    option_number = 1;

    g_files_active_number = getFileNumberFromDropdownNumber(option_number);

    setControlsSupporter();

    setStylesSupporter();

    displayControlSupporters();

    setCategoryButtonSupporterSelected();
}

// User clicked the send mail (post) button
function eventClickQrSendPostButton()
{
    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        setPrintPageOneAlternativeOne(g_qr_files_xml_object, g_files_active_number);

    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        
    }


} // eventClickQrSendPostButton

// User clicked the print batch button
function eventClickPrintBatchButton()
{

} // eventClickPrintBatchButton

// User clicked the file done button
function eventClickQrFileDoneButton()
{

} // eventClickQrFileDoneButton

// User changed season color value
function oninputSeasonColor()
{
    var season_color = g_season_color_def_str_text_box.getValue();

    setSeasonColorInLocalStorage(season_color);

    setTextBoxesSeasonColor();

} // oninputSeasonColor

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set Qr Code Supporter Card ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Sets the supporter card QR code
function setSupporterCardQrCode(i_qr_xml, i_file_number)
{
    var file_name_image = constructServerFileNameImage(i_qr_xml, i_file_number);

    if (file_name_image.length == 0)
    {
        return;
    }

    var b_image_file = true;

    readTextFileOnServer(b_image_file, file_name_image, setSupporterCardQrCodeAfterLoad);

} // setSupporterCardQrCode

function setSupporterCardQrCodeAfterLoad(i_data_url)
{
    console.log("Enter setSupporterCardQrCodeAfterLoad");

    if (i_data_url == QrStrings.failureLoadingQrFileCode())
    {
        // hideShowQrCodeImage();

        // hideDivQrCodeButtonShowInfo();

        // showQrCodeTextAfterLoadFromServer(QrStrings.errorUnvalidDownloadCode());

        alert("setSupporterCardQrCodeAfterLoad i_data_url= " + i_data_url);

        return;
    }

    setSupporterCardQrCodeImageWithDataUrl(i_data_url);

} // setSupporterCardQrCodeAfterLoad

// Set the QR code image with image data URL
function setSupporterCardQrCodeImageWithDataUrl(i_data_url)
{
   // https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container

    var el_image = getElementSupporterQrCodeCanvas();

    el_image.src = i_data_url;

} // setSupporterCardQrCodeImageWithDataUrl

// Construct the server file name from the input code and return the name
function constructServerFileNameImage(i_qr_xml, i_file_number)
{
    var down_load_code = i_qr_xml.getDownloadOne(i_file_number);

    var season_start_year = i_qr_xml.getSeasonStartYear();

    if (down_load_code.length == 0)
    {
        return '';
    }

    var file_name_path_image = '';

    if (execApplicationOnServer())
    {
        file_name_path_image = 'https://jazzliveaarau.ch/QrCode/' + QrStrings.getRelativeUrlQrFileImage(season_start_year, down_load_code);
    }
    else
    {
        file_name_path_image = QrStrings.getRelativeUrlQrFileImage(season_start_year, down_load_code);
    }

    return file_name_path_image;

} // constructServerFileNameImage

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Qr Code Supporter Card //////////////////////////////////
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
            foreground: getSeasonColorInLocalStorage(),
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


