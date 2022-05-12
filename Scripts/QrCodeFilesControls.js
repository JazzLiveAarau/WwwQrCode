// File: QrCodeFileControls.js
// Date: 2022-05-12
// Author: Gunnar Lidén

// File content
// =============
//
// Controls for QR Code files

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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

// The text box for the QR code name one
var g_qr_code_name_one_text_box = null;

// The text box for the QR code name two
var g_qr_code_name_two_text_box = null;

// The text box for the comment
var g_comment_text_box = null;

// The text box for the address
var g_address_text_box = null;

// The text box for the email address
var g_email_text_box = null;

// The text box for the supporter contribution
var g_contribution_text_box = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
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

    createTextBoxQrCodeNameOne();

    createTextBoxQrCodeNameTwo();

    createTextBoxQrComment();

    createTextBoxQrAddress();

    createTextBoxQrEmail();

    createTextBoxQrContribution();

} // createAllControls


// Creates the supporter control
function createQrSupporterButton()
{
    g_qr_supporter_button = new JazzButton("id_qr_button_supporter", getIdDivQrSupporterButton());

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
    g_qr_send_email_button = new JazzButton("id_qr_button_send_email", getIdDivQrSendEmailButton());

    g_qr_send_email_button.setOnclickFunctionName("eventClickQrSendEmailButton");

    g_qr_send_email_button.setCaption(QrStrings.getCaptionButtonQrFilesSendEmail());

    g_qr_send_email_button.setWidth("77px");

    g_qr_send_email_button.setLabelText("");

    g_qr_send_email_button.setTitle(QrStrings.getTitleButtonQrFilesSendEmail());

} // createQrSendEmailButton

// Creates the send mail (post) button
function createQrSendPostButton()
{
    g_qr_send_post_button = new JazzButton("id_qr_button_send_post", getIdDivQrSendPostButton());

    g_qr_send_post_button.setOnclickFunctionName("eventClickQrSendPostButton");

    g_qr_send_post_button.setCaption(QrStrings.getCaptionButtonQrFilesSendPost());

    g_qr_send_post_button.setWidth("77px");

    g_qr_send_post_button.setLabelText("");

    g_qr_send_post_button.setTitle(QrStrings.getTitleButtonQrFilesSendPost());

} // createQrSendPostButton

// Creates the print batch button
function createQrPrintBatchButton()
{
    g_qr_print_batch_button = new JazzButton("id_qr_button_print_batch", getIdDivQrPrintBatchButton());

    g_qr_print_batch_button.setOnclickFunctionName("eventClickPrintBatchButton");

    g_qr_print_batch_button.setCaption(QrStrings.getCaptionButtonQrFilesPrintBatch());

    g_qr_print_batch_button.setWidth("77px");

    g_qr_print_batch_button.setLabelText("");

    g_qr_print_batch_button.setTitle(QrStrings.getTitleButtonQrFilesPrintBatch());

} // createQrPrintBatchButton

// Creates the file done button
function createQrFileDoneButton()
{
    g_qr_file_done_button = new JazzButton("id_qr_button_file_done", getIdDivQrFileDoneButton());

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

// Create the QR code name one text box
function createTextBoxQrCodeNameOne()
{
    g_qr_code_name_one_text_box = new JazzTextBox("id_qr_code_name_one_text_box", getIdDivQrCodeNameOne());

    g_qr_code_name_one_text_box.setLabelText(QrStrings.getLabelQrCodeNameOne());

    g_qr_code_name_one_text_box.setSize("42");

    g_qr_code_name_one_text_box.setLabelTextPositionAbove();

    g_qr_code_name_one_text_box.setTitle(QrStrings.getTitleQrCodeNameOne());

    g_qr_code_name_one_text_box.setValue("Test First name and family name");

    // g_qr_code_name_one_text_box.setReadOnlyFlag(true);

    // g_qr_code_name_one_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrCodeNameOne

 // Create the QR code name two text box
 function createTextBoxQrCodeNameTwo()
 {
     g_qr_code_name_two_text_box = new JazzTextBox("id_qr_code_name_two_text_box", getIdDivQrCodeNameTwo());
 
     g_qr_code_name_two_text_box.setLabelText(QrStrings.getLabelQrCodeNameTwo());
 
     g_qr_code_name_two_text_box.setSize("42");
 
     g_qr_code_name_two_text_box.setLabelTextPositionAbove();
 
     g_qr_code_name_two_text_box.setTitle(QrStrings.getTitleQrCodeNameTwo());
 
     g_qr_code_name_two_text_box.setValue("Test Nnnn");
 
     // g_qr_code_name_two_text_box.setReadOnlyFlag(true);
 
     // g_qr_code_name_two_text_box.setOninputFunctionName("oninputTitle");
   
 } // createTextBoxQrCodeNameTwo 

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

    g_contribution_text_box.setValue("Summe");

    // g_email_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrContribution

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Controls /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hide the div qr code name two
function hideDivQrCodeNameTwo()
{
    var el_code_name_two = getElementDivQrCodeNameTwo();

    el_code_name_two.style.display = 'none';

} // hideDivQrCodeNameTwo

// Display the div qr code code name two
function displayDivQrCodeNameTwo()
{
    var el_code_name_two = getElementDivQrCodeNameTwo();

    el_code_name_two.style.display = 'block';

} // displayDivQrCodeNameTwo

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

// Get the element div text box for the QR code name one
function getElementDivQrCodeNameOne()
{
    return document.getElementById(getIdDivQrCodeNameOne());

} // getElementDivQrMusicianButton

// Returns the identity of the div text box for the QR code name one
function getIdDivQrCodeNameOne()
{
    return 'id_div_qr_code_name_one_text_box';

} // getIdDivQrCodeNameOne

 // Get the element div text box for the QR code name two
 function getElementDivQrCodeNameTwo()
 {
     return document.getElementById(getIdDivQrCodeNameTwo());
 
 } // getElementDivQrMusicianButton
 
 // Returns the identity of the div text box for the QR code name two
 function getIdDivQrCodeNameTwo()
 {
     return 'id_div_qr_code_name_two_text_box';
 
 } // getIdDivQrCodeNameTwo 

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
