// File: QrCodeFiles.js
// Date: 2022-06-07
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

// windows.localStorage key for the edit supporter text
var g_qr_local_edit_supporter_text = 'qr_local_edit_supporter_text';


var g_user_member_name_address = 'Gunnar Lidén, E-Mail: gunnar.liden@jazzliveaarau.ch'; // TODO Implement!

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

    setActiveExecution(QrStrings. getQrExecutionUndefinedString());

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

    setActiveExecution(QrStrings. getQrExecutionUndefinedString());

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
    setActiveExecution(QrStrings. getQrExecutionEmailString());

    if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        return;
    }

    getInputSetAndSaveQrCodeNames(callbackAfterGetInputSetAndSaveQrCodeNames);

} // eventClickQrSendEmailButton

// Callback after setting and saving QR code names with function getInputSetAndSaveQrCodeNames
function callbackAfterGetInputSetAndSaveQrCodeNames()
{

    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        var supporter_name = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

        var download_code_one = g_qr_files_xml_object.getDownloadOne(g_files_active_number);
    
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

        var send_to = test_address;

        var title_htm = QrStrings.getTitleSupporterEmail();

        var download_code_two = '';

        var person_two = g_qr_files_xml_object.getQrCodeNameTwo(g_files_active_number);

        if (person_two.length > 0)
        {
            download_code_two = g_qr_files_xml_object.getDownloadTwo(g_files_active_number);
        }

        var msg_htm = QrStrings.getMsgSupporterEmail(supporter_name, download_code_one, download_code_two);

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
        alert("Send musician email not yet implemented");
    }

} // callbackAfterGetInputSetAndSaveQrCodeNames

// Callback function for sendEmailWithJQueryPostFunction
function callbackSendEmail(i_b_sent)
{
    if (i_b_sent)
    {
        g_qr_files_xml_object.setEmailSentBool(g_files_active_number, true);

        g_qr_files_xml_object.saveXmlFileOnServer();

        uploadQrFileImageAndTextSupporter(g_files_active_number, g_qr_files_xml_object);

        var supporter_name = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

        alert("E-Mail an " + supporter_name + " ist gesendet und QR Code Datei ist zum Server hochgeladen");

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

    hideDisplayExecutionButtonsSupporter();
}

// User clicked the send mail (post) button
function eventClickQrSendPostButton()
{
    setActiveExecution(QrStrings. getQrExecutionPostString());

    getInputSetAndSaveQrCodeNames(callbackAfterGetInputSetAndSaveQrCodeNamesSendPost);

} // eventClickQrSendPostButton

function callbackAfterGetInputSetAndSaveQrCodeNamesSendPost()
{
    uploadQrFileImageAndTextSupporter(g_files_active_number, g_qr_files_xml_object);

    setTimeout(callbackAfterUploadOfQrCodeFilesSendPost, 3000);

} // callbackAfterGetInputSetAndSaveQrCodeNames

// 
function callbackAfterUploadOfQrCodeFilesSendPost()
{
    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        setPrintPageOneAlternativeOne(g_qr_files_xml_object, g_files_active_number);

        displayDivQrPrintPagesIfExisting();

        displayDivEditTextOptions();

        if (g_edit_text_check_box.getCheck() == "TRUE")
        {
            displayDivTextAreaEdit();
        }
        else
        {
            hideDivTextAreaEdit();
        }

        displayDivQrFileDoneButton();

    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        alert("Send musician mail is not yet implemented");
        
    }

} // callbackAfterGetInputSetAndSaveQrCodeNamesSendPost


// User clicked the print batch button
function eventClickPrintBatchButton()
{

    if (getActiveCategory() != QrStrings.getQrCategorySupporterString())
    {
        alert("eventClickPrintBatchButton Not a yet implemented active category " + getActiveExecution());

        return;
    }

    setActiveExecution(QrStrings. getQrExecutionPrintString());

    getInputSetAndSaveQrCodeNames(callbackPrintBatchAfterGetInputSetAndSaveQrCodeNames);

} // eventClickPrintBatchButton

function callbackPrintBatchAfterGetInputSetAndSaveQrCodeNames()
{
    g_qr_files_xml_object.setPrintBatchBool(g_files_active_number, true);

    g_qr_files_xml_object.saveXmlFileOnServer();

    uploadQrFileImageAndTextSupporter(g_files_active_number, g_qr_files_xml_object);

    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        updateControlsAfterChangeOfQrFilesXmlSupporter();
    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        // setControlsMusician();
    } 

} // callbackPrintBatchAfterGetInputSetAndSaveQrCodeNames

// User clicked the file done button
function eventClickQrFileDoneButton()
{
    if (getActiveExecution() == QrStrings.getQrExecutionEmailString())
    {
        g_qr_files_xml_object.setEmailSentBool(g_files_active_number, true);
    }
    else if (getActiveExecution() == QrStrings.getQrExecutionPostString())
    {
        g_qr_files_xml_object.setMailSentBool(g_files_active_number, true);
    }
    else
    {
        alert("eventClickQrFileDoneButton Not an implemented active execution " + getActiveExecution());

        return;
    }

    g_qr_files_xml_object.saveXmlFileOnServer();

    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        updateControlsAfterChangeOfQrFilesXmlSupporter();
    }
    else if (getActiveCategory() == QrStrings.getQrCategoryMusicianString())
    {
        // setControlsMusician();
    } 

} // eventClickQrFileDoneButton

// User changed season color value
function oninputSeasonColor()
{
    var season_color = g_season_color_def_str_text_box.getValue();

    setSeasonColorInLocalStorage(season_color);

    setTextBoxesSeasonColor();

} // oninputSeasonColor

// User clicked the check box control edit text
function eventClickCheckBoxEditText()
{
    var supporter_name = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

    if (g_edit_text_check_box.getCheck() == "TRUE")
    {
        displayDivTextAreaEdit();

        var edited_text = getEditSupporterTextFromLocalStorage();

        var edited_text_html = QrStrings.convertWindowsToHtml(edited_text); 

        edited_text_html =QrStrings.replaceSupporterNameKey(edited_text_html, supporter_name);

        setSupporterPostMessageHtml(edited_text_html);
    }
    else
    {
        hideDivTextAreaEdit();

        // var download_code_two = g_qr_files_xml_object.getDownloadTwo(g_files_active_number);

        var person_two = g_qr_files_xml_object.getQrCodeNameTwo(g_files_active_number);

        var b_one_person = true;
    
        if (person_two.length > 0)
        {
            b_one_person = false;
        }
    
        var default_msg_html = QrStrings.getMsgSupporterPost(supporter_name, b_one_person);

        setSupporterPostMessageHtml(default_msg_html);
    }
	
} // eventClickCheckBoxEditText

// User edited text 
function onInputTextAreaEdit()
{
    if (getActiveCategory() == QrStrings.getQrCategorySupporterString())
    {
        var edited_text = g_edit_message_text_area.getValue();

        setEditSupporterTextInLocalStorage(edited_text);

        var edited_text_html = QrStrings.convertWindowsToHtml(edited_text); 

        var supporter_name = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

        edited_text_html =QrStrings.replaceSupporterNameKey(edited_text_html, supporter_name);

        setSupporterPostMessageHtml(edited_text_html)
    }

} // onInputTextAreaEdit

// Sets the supporter post (mail) message
function setSupporterPostMessageHtml(i_supporter_post_msg_htm)
{
    var el_div_msg = getElementDivAltOneMessage();

    el_div_msg.innerHTML = i_supporter_post_msg_htm;

} // setSupporterPostMessageHtml

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Input Save XML ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get QR code name one and two from the input controls, set XML object and save XML file
function getInputSetAndSaveQrCodeNames(i_callback_function)
{
    var qr_name_one = g_qr_code_name_one_text_box.getValue();

    var qr_name_two = g_qr_code_name_two_text_box.getValue();

    g_qr_files_xml_object.setQrCodeNameOne(g_files_active_number, qr_name_one);

    g_qr_files_xml_object.setQrCodeNameTwo(g_files_active_number, qr_name_two);

    g_qr_files_xml_object.saveXmlFileOnServerCallback(i_callback_function)

} // getInputSetAndSaveQrCodeNames


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Input Save XML ////////////////////////////////////////
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


