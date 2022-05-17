// File: QrCodeFileControls.js
// Date: 2022-05-17
// Author: Gunnar Lidén

// File content
// =============
//
// Create controls for QR Code files

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

// The text box for the concert date
var g_concert_date_text_box = null;

// The text box for the telephone number
var g_telephone_text_box = null;

// The text box for the season color def string
var g_season_color_def_str_text_box = null;

// The text box for the season color display
var g_season_color_display_text_box = null;

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

    createTextboxQrConcertDate();

    createTextBoxQrTelephone();

    createTextBoxSeasonColorDef();

    createTextBoxSeasonColorDisplay();

} // createAllControls


// Creates the supporter control
function createQrSupporterButton()
{
    g_qr_supporter_button = new JazzButton("id_qr_button_supporter", getIdDivQrSupporterButton());

    g_qr_supporter_button.setOnclickFunctionName("eventClickQrSupporterButton");

    g_qr_supporter_button.setCaption(QrStrings.getCaptionButtonQrFilesSupporter());

    g_qr_supporter_button.setWidth("74px");

    g_qr_supporter_button.setLabelText("");

    g_qr_supporter_button.setTitle(QrStrings.getTitleButtonQrFilesSupporter());

} // createQrSupporterButton

// Creates the sponsor button
function createQrSponsorButton()
{
    g_qr_sponsor_button = new JazzButton("id_qr_button_sponsor", getIdDivQrSponsorButton());

    g_qr_sponsor_button.setOnclickFunctionName("eventClickQrSponsorButton");

    g_qr_sponsor_button.setCaption(QrStrings.getCaptionButtonQrFilesSponsor());

    g_qr_sponsor_button.setWidth("74px");

    g_qr_sponsor_button.setLabelText("");

    g_qr_sponsor_button.setTitle(QrStrings.getTitleButtonQrFilesSponsor());

} // createQrSponsorButton

// Creates the free button
function createQrFreeButton()
{
    g_qr_free_button = new JazzButton("id_qr_button_sponsor", getIdDivQrFreeButton());

    g_qr_free_button.setOnclickFunctionName("eventClickQrFreeButton");

    g_qr_free_button.setCaption(QrStrings.getCaptionButtonQrFilesFree());

    g_qr_free_button.setWidth("74px");

    g_qr_free_button.setLabelText("");

    g_qr_free_button.setTitle(QrStrings.getTitleButtonQrFilesFree());

} // createQrFreeButton

// Creates the musician button
function createQrMusicianButton()
{
    g_qr_musician_button = new JazzButton("id_qr_button_musician", getIdDivQrMusicianButton());

    g_qr_musician_button.setOnclickFunctionName("eventClickQrMusicianButton");

    g_qr_musician_button.setCaption(QrStrings.getCaptionButtonQrFilesMusician());

    g_qr_musician_button.setWidth("74px");

    g_qr_musician_button.setLabelText("");

    g_qr_musician_button.setTitle(QrStrings.getTitleButtonQrFilesMusician());

} // createQrMusicianButton

// Creates the send email control
function createQrSendEmailButton()
{
    g_qr_send_email_button = new JazzButton("id_qr_button_send_email", getIdDivQrSendEmailButton());

    g_qr_send_email_button.setOnclickFunctionName("eventClickQrSendEmailButton");

    g_qr_send_email_button.setCaption(QrStrings.getCaptionButtonQrFilesSendEmail());

    g_qr_send_email_button.setWidth("74px");

    g_qr_send_email_button.setLabelText("");

    g_qr_send_email_button.setTitle(QrStrings.getTitleButtonQrFilesSendEmail());

} // createQrSendEmailButton

// Creates the send mail (post) button
function createQrSendPostButton()
{
    g_qr_send_post_button = new JazzButton("id_qr_button_send_post", getIdDivQrSendPostButton());

    g_qr_send_post_button.setOnclickFunctionName("eventClickQrSendPostButton");

    g_qr_send_post_button.setCaption(QrStrings.getCaptionButtonQrFilesSendPost());

    g_qr_send_post_button.setWidth("74px");

    g_qr_send_post_button.setLabelText("");

    g_qr_send_post_button.setTitle(QrStrings.getTitleButtonQrFilesSendPost());

} // createQrSendPostButton

// Creates the print batch button
function createQrPrintBatchButton()
{
    g_qr_print_batch_button = new JazzButton("id_qr_button_print_batch", getIdDivQrPrintBatchButton());

    g_qr_print_batch_button.setOnclickFunctionName("eventClickPrintBatchButton");

    g_qr_print_batch_button.setCaption(QrStrings.getCaptionButtonQrFilesPrintBatch());

    g_qr_print_batch_button.setWidth("74px");

    g_qr_print_batch_button.setLabelText("");

    g_qr_print_batch_button.setTitle(QrStrings.getTitleButtonQrFilesPrintBatch());

} // createQrPrintBatchButton

// Creates the file done button
function createQrFileDoneButton()
{
    g_qr_file_done_button = new JazzButton("id_qr_button_file_done", getIdDivQrFileDoneButton());

    g_qr_file_done_button.setOnclickFunctionName("eventClickQrFileDoneButton");

    g_qr_file_done_button.setCaption(QrStrings.getCaptionButtonQrFilesFileDone());

    g_qr_file_done_button.setWidth("74px");

    g_qr_file_done_button.setLabelText("");

    g_qr_file_done_button.setTitle(QrStrings.getTitleButtonQrFilesFileDone());

} // createQrFileDoneButton

// Creates the files dropdown control
function createFilesDropdown()
{
    QrProgress.Append('Enter createFilesDropdown');

    g_files_drop_down = new JazzDropdown("id_qr_files_dropdown", getIdDivQrFilesDropdown());

    var name_array_init = [];

    name_array_init[0] = '';

    g_files_drop_down.setNameArray(name_array_init);

    g_files_drop_down.setOnchangeFunctionName("eventSelectFileDropdown");

    g_files_drop_down.setLabelText(QrStrings.getLabelQrFilesDropdown());

    g_files_drop_down.setLabelTextPositionAbove();

    g_files_drop_down.setTitle(QrStrings.getTitleQrFilesDropdown());

    // g_files_drop_down.setAppendString("Neue file");

} // createFilesDropdown

// Create the QR code name one text box
function createTextBoxQrCodeNameOne()
{
    g_qr_code_name_one_text_box = new JazzTextBox(getIdQrCodeNameOne(), getIdDivQrCodeNameOne());

    g_qr_code_name_one_text_box.setLabelText(QrStrings.getLabelQrCodeNameOne());

    g_qr_code_name_one_text_box.setSize("36");

    g_qr_code_name_one_text_box.setLabelTextPositionAbove();

    g_qr_code_name_one_text_box.setTitle(QrStrings.getTitleQrCodeNameOne());

    g_qr_code_name_one_text_box.setValue("Test First name and family name");

    // g_qr_code_name_one_text_box.setReadOnlyFlag(true);

    // g_qr_code_name_one_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrCodeNameOne

 // Create the QR code name two text box
 function createTextBoxQrCodeNameTwo()
 {
     g_qr_code_name_two_text_box = new JazzTextBox(getIdQrCodeNameTwo(), getIdDivQrCodeNameTwo());
 
     g_qr_code_name_two_text_box.setLabelText(QrStrings.getLabelQrCodeNameTwo());
 
     g_qr_code_name_two_text_box.setSize("36");
 
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

    g_comment_text_box.setSize("36");

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

    g_address_text_box.setSize("36");

    g_address_text_box.setLabelTextPositionAbove();

    g_address_text_box.setTitle(QrStrings.getTitleTextboxQrAddress());
	
	g_address_text_box.setReadOnlyFlag(true);

    g_address_text_box.setValue("Test Address");


    // g_address_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrAddress

// Create the text box for the email address
function createTextBoxQrEmail()
{
    g_email_text_box = new JazzTextBox("id_email_text_box", getIdDivQrEmail());

    g_email_text_box.setLabelText(QrStrings.getLabelTextboxQrEmail());

    g_email_text_box.setSize("26");

    g_email_text_box.setLabelTextPositionAbove();

    g_email_text_box.setTitle(QrStrings.getTitleTextboxQrEmail());
	
	g_email_text_box.setReadOnlyFlag(true);

    g_email_text_box.setValue("Test Email");

    // g_email_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrEmail

// Create the text box for the supporter contribution
function createTextBoxQrContribution()
{
    g_contribution_text_box = new JazzTextBox("id_contribution_text_box", getIdDivQrContribution());

    g_contribution_text_box.setLabelText(QrStrings.getLabelTextboxQrDistribution());

    g_contribution_text_box.setSize("4");

    g_contribution_text_box.setLabelTextPositionAbove();

    g_contribution_text_box.setTitle(QrStrings.getTitleTextboxQrDistribution());
	
	g_contribution_text_box.setReadOnlyFlag(true);

    g_contribution_text_box.setValue("Summe");

    // g_email_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrContribution

// Create the text box for the concert date
function createTextboxQrConcertDate()
{
    g_concert_date_text_box = new JazzTextBox("id_concert_date_text_box", getIdDivQrConcertDate());

    g_concert_date_text_box.setLabelText(QrStrings.getLabelTextboxQrConcertDate());

    g_concert_date_text_box.setSize("17");

    g_concert_date_text_box.setLabelTextPositionAbove();

    g_concert_date_text_box.setTitle(QrStrings.getTitleTextboxQrConcertDate());
	
	g_concert_date_text_box.setReadOnlyFlag(true);

    g_concert_date_text_box.setValue("Test Email");

    // g_concert_date_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextboxQrConcertDate

// Create the text box for the telephone number
function createTextBoxQrTelephone()
{
    g_telephone_text_box = new JazzTextBox("id_telephone_text_box", getIdDivQrTelephone());

    g_telephone_text_box.setLabelText(QrStrings.getLabelTextboxTelephone());

    g_telephone_text_box.setSize("18");

    g_telephone_text_box.setLabelTextPositionAbove();

    g_telephone_text_box.setTitle(QrStrings.getTitleTextboxTelephone());
	
	g_telephone_text_box.setReadOnlyFlag(true);

    g_telephone_text_box.setValue("Summe");

    // g_concert_date_text_box.setOninputFunctionName("oninputTitle");
  
} // createTextBoxQrTelephone

// Create the text box for the season color def string
function createTextBoxSeasonColorDef()
{
    g_season_color_def_str_text_box = new JazzTextBox("id_season_color_def_str", getIdDivSeasonColorDefStr());

    g_season_color_def_str_text_box.setLabelText(QrStrings.getLabelTextboxSeasonColorDefStr());

    g_season_color_def_str_text_box.setSize("14");

    g_season_color_def_str_text_box.setLabelTextPositionAbove();

    g_season_color_def_str_text_box.setTitle(QrStrings.getTitleTextboxSeasonColorDefStr());
	
	//  g_season_color_def_str_text_box.setReadOnlyFlag(true);

    g_season_color_def_str_text_box.setValue("rgb(25, 213, 230)");

    g_season_color_def_str_text_box.setOninputFunctionName("oninputSeasonColor");
  
} // createTextBoxSeasonColorDef

// Create the text box for the season color display
function createTextBoxSeasonColorDisplay()
{
    g_season_color_display_text_box = new JazzTextBox("id_season_color_display", getIdDivSeasonDisplay());

    g_season_color_display_text_box.setLabelText(QrStrings.getLabelTextboxSeasonColorDisplay());

    g_season_color_display_text_box.setSize("15");

    g_season_color_display_text_box.setLabelTextPositionAbove();

    g_season_color_display_text_box.setTitle(QrStrings.getTitleTextboxSeasonColorDisplay());
	
	g_season_color_display_text_box.setReadOnlyFlag(true);

    g_season_color_display_text_box.setValue("");
  
} // createTextBoxSeasonColorDisplay

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Controls /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set Category Buttons Styles ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set style for category buttons that not have been selected
function setCategoryButtonsNoneSelected()
{
	 var el_div_supporter_button = getElementDivQrSupporterButton();
	 
	 var el_div_sponsor_button = getElementDivQrSponsorButton();
	 
	 var el_div_free_button = getElementDivQrFreeButton();
	 
	 var el_div_musician_button = getElementDivQrMusicianButton();

     var el_supporter_button = el_div_supporter_button.getElementsByTagName('button')[0];

     var el_sponsor_button = el_div_sponsor_button.getElementsByTagName('button')[0];

     var el_free_button = el_div_free_button.getElementsByTagName('button')[0];

     var el_musician_button = el_div_musician_button.getElementsByTagName('button')[0];
	 
	 el_supporter_button.style.borderColor = 'black'; // 'border 1px solid black';
	 
	 el_sponsor_button.style.borderColor = 'black';
	 
	 el_free_button.style.borderColor = 'black';
	 
	 el_musician_button.style.borderColor = 'black';
 
 } setCategoryButtonsNoneSelected
 
 // Set style showing that button supporter is selected
 function setCategoryButtonSupporterSelected()
 {
	setCategoryButtonsNoneSelected();
	
    var el_div_supporter_button = getElementDivQrSupporterButton();

    var el_supporter_button = el_div_supporter_button.getElementsByTagName('button')[0];
	
	 el_supporter_button.style.borderColor = 'blue';
 
 } // setCategoryButtonSupporterSelected

 // Set style showing that button sponsor is selected
 function setCategoryButtonSponsorSelected()
 {
	setCategoryButtonsNoneSelected();
	
    var el_div_sponsor_button = getElementDivQrSponsorButton();

    var el_sponsor_button = el_div_sponsor_button.getElementsByTagName('button')[0];
	
    el_sponsor_button.style.borderColor = 'blue';
 
 } // setCategoryButtonSponsorSelected

 // Set style showing that button free is selected
 function setCategoryButtonFreeSelected()
 {
	setCategoryButtonsNoneSelected();
	
    var el_div_free_button = getElementDivQrFreeButton();

    var el_free_button = el_div_free_button.getElementsByTagName('button')[0];
	
    el_free_button.style.borderColor = 'blue';
 
 } // setCategoryButtonFreeSelected

  // Set style showing that button musician is selected
  function setCategoryButtonMusicianSelected()
  {
     setCategoryButtonsNoneSelected();
     
     var el_div_musician_button = getElementDivQrMusicianButton();
 
     var el_musician_button = el_div_musician_button.getElementsByTagName('button')[0];
     
     el_musician_button.style.borderColor = 'blue';
  
  } // setCategoryButtonMusicianSelected

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Category Buttons Styles /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Displays all supporter controls
function displayControlSupporters()
{
    console.log('displayControlSupporters Enter');

	hideAllTextBoxes();

    displayDivQrFilesDropdown();

	displayDivQrCodeNameOne();
	
	hideDivQrCodeNameTwo();
	
	displayDivQrComment();
	
	displayDivQrAddress();
	
	displayDivQrEmail();
	
	displayDivQrContribution();	

    displayAllExecutionButtons();

} // displayControlSupporters

// Displays all sponsor controls
function displayControlSponsor()
{
    console.log('displayControlSupporters Enter');

    hideDropdownTextBoxesExecutionButtons();

} // displayControlSponsor

// Displays all free controls
function displayControlFree()
{
    console.log('displayControlFree Enter');
    
    hideDropdownTextBoxesExecutionButtons();

} // displayControlFree

// Displays all musician controls
function displayControlMusician()
{
    console.log('displayControlMusicians Enter');
    
    hideDropdownTextBoxesExecutionButtons();

    displayDivQrFilesDropdown();

    hideAllTextBoxes();

	displayDivQrCodeNameOne();
	
	displayDivQrCodeNameTwo();
	
	displayDivQrAddress();
	
	displayDivQrEmail();

    displayAllExecutionButtons();

    // Date is not displayed displayDivQrConcertDate();

    // TODO Function is missing displayDivQrTelephone();

} // displayControlMusician

// Hides dropdow, text boxes and execution buttons
function hideDropdownTextBoxesExecutionButtons()
{
    console.log('hideDropdownTextBoxesExecutionButtons Enter');

    hideDivQrFilesDropdown();

    hideAllTextBoxes();

    hideAllExecutionButtons();

} // hideDropdownTextBoxesExecutionButtons

// Hides all text text boxes
function hideAllTextBoxes()
{
    console.log('hideAllTextBoxes Enter');

	hideDivQrCodeNameOne();
	
	hideDivQrCodeNameTwo();
	
	hideDivQrComment();
	
	hideDivQrAddress();
	
	hideDivQrEmail();
	
	hideDivQrContribution();

    hideDivQrConcertDate();

    hideDivQrTelephone();

} // hideAllTextBoxes

// Displays all text text boxes
function displayAllTextBoxes()
{
    console.log('displayAllTextBoxes Enter');

	displayDivQrCodeNameOne();
	
	displayDivQrCodeNameTwo();
	
	displayDivQrComment();
	
	displayDivQrAddress();
	
	displayDivQrEmail();
	
	displayDivQrContribution();

    displayDivQrConcertDate();

    displayDivQrTelephone();

} // displayAllTextBoxes

// Hides all execution buttons
function hideAllExecutionButtons()
{
    console.log('hideAllExecutionButtons Enter');

    hideDivQrSendEmailButton();

    hideDivQrSendPostButton();

    hideDivQrPrintBatchButton();

    hideDivQrFileDoneButton();

} // hideAllExecutionButtons

// Displays all execution buttons
function displayAllExecutionButtons()
{
    console.log('displayAllExecutionButtons Enter');

    displayDivQrSendEmailButton();

    displayDivQrSendPostButton();

    displayDivQrPrintBatchButton();

    displayDivQrFileDoneButton();

} // displayAllExecutionButtons

// Hide the div qr code files dropdown
function hideDivQrFilesDropdown()
{
    console.log('hideDivQrFilesDropdown Enter');

    var el_dropdown = getElementDivQrFilesDropdown();

    el_dropdown.style.display = 'none';

} // hideDivQrFilesDropdown

// Display the div qr code code files dropdown
function displayDivQrFilesDropdown()
{
    console.log('displayDivQrFilesDropdown Enter');

    var el_dropdown = getElementDivQrFilesDropdown();

    el_dropdown.style.display = 'block';

} // displayDivQrFilesDropdown

// Hide the div qr code name one
function hideDivQrCodeNameOne()
{
    console.log('hideDivQrCodeNameOne Enter');

    var el_code_name_one = getElementDivQrCodeNameOne();

    el_code_name_one.style.display = 'none';

} // hideDivQrCodeNameOne

// Display the div qr code code name one
function displayDivQrCodeNameOne()
{
    console.log('displayDivQrCodeNameOne Enter');

    var el_code_name_one = getElementDivQrCodeNameOne();

    el_code_name_one.style.display = 'block';

} // displayDivQrCodeNameOne

// Hide the div qr code name two
function hideDivQrCodeNameTwo()
{
    console.log('hideDivQrCodeNameTwo Enter');

    var el_code_name_two = getElementDivQrCodeNameTwo();

    el_code_name_two.style.display = 'none';

} // hideDivQrCodeNameTwo

// Display the div qr code code name two
function displayDivQrCodeNameTwo()
{
    console.log('displayDivQrCodeNameTwo Enter');

    var el_code_name_two = getElementDivQrCodeNameTwo();

    el_code_name_two.style.display = 'block';

} // displayDivQrCodeNameTwo

// Hide the div qr code comment
function hideDivQrComment()
{
    console.log('hideDivQrComment Enter');

    var el_comment = getElementDivQrComment();

    el_comment.style.display = 'none';

} // hideDivQrComment

// Display the div qr code code comment
function displayDivQrComment()
{
    console.log('displayDivQrComment Enter');

    var el_comment = getElementDivQrComment();

    el_comment.style.display = 'block';

} // displayDivQrComment

// Hide the div qr code address
function hideDivQrAddress()
{
    console.log('hideDivQrAddress Enter');

    var el_address = getElementDivQrAddress();

    el_address.style.display = 'none';

} // hideDivQrAddress

// Display the div qr code code address
function displayDivQrAddress()
{
    console.log('displayDivQrAddress Enter');

    var el_address = getElementDivQrAddress();

    el_address.style.display = 'block';

} // displayDivQrAddress

// Hide the div qr code email
function hideDivQrEmail()
{
    console.log('hideDivQrEmail Enter');

    var el_email = getElementDivQrEmail();

    el_email.style.display = 'none';

} // hideDivQrEmail

// Display the div qr code code email
function displayDivQrEmail()
{
    console.log('displayDivQrEmail Enter');

    var el_email = getElementDivQrEmail();

    el_email.style.display = 'block';

} // displayDivQrEmail

// Hide the div qr code contribution
function hideDivQrContribution()
{
    console.log('hideDivQrContribution Enter');

    var el_contribution = getElementDivQrContribution();

    el_contribution.style.display = 'none';

} // hideDivQrContribution

// Display the div qr code code contribution
function displayDivQrContribution()
{
    console.log('displayDivQrContribution Enter');

    var el_contribution = getElementDivQrContribution();

    el_contribution.style.display = 'block';

} // displayDivQrContribution


// Hide the div qr code concert date
function hideDivQrConcertDate()
{
    console.log('hideDivQrConcertDate Enter');

    var el_concert_date = getElementDivQrConcertDate();

    el_concert_date.style.display = 'none';

} // hideDivQrConcertDate

// Display the div qr code code concert date
function displayDivQrConcertDate()
{
    console.log('displayDivQrConcertDate Enter');

    var el_concert_date = getElementDivQrConcertDate();

    el_concert_date.style.display = 'block';

} // displayDivQrConcertDate

// Hide the div qr code telephone number
function hideDivQrTelephone()
{
    console.log('hideDivQrTelephone Enter');

    var el_telephone = getElementDivQrTelephone();

    el_telephone.style.display = 'none';

} // hideDivQrTelephone

// Display the div qr code code telephone number
function displayDDivQrTelephone()
{
    console.log('displayDDivQrTelephone Enter');

    var el_telephone = getElementDDivQrTelephone();

    el_telephone.style.display = 'block';

} // displayDDivQrTelephone

// Hide the div qr code supporter button
function hideDivQrSupporterButton()
{
    console.log('hideDivQrSupporterButton Enter');

    var el_supporter_button = getElementDivQrSupporterButton();

    el_supporter_button.style.display = 'none';

} // hideDivQrSupporterButton

// Display the div qr code code supporter button
function displayDivQrSupporterButton()
{
    console.log('displayDivQrSupporterButton Enter');

    var el_supporter_button = getElementDivQrSupporterButton();

    el_supporter_button.style.display = 'block';

} // displayDivQrSupporterButton

// Hide the div qr code sponsor button
function hideDivQrSponsorButton()
{
    console.log('hideDivQrSponsorButton Enter');

    var el_sponsor_button = getElementDivQrSponsorButton();

    el_sponsor_button.style.display = 'none';

} // hideDivQrSponsorButton

// Display the div qr code code sponsor button
function displayDivQrSponsorButton()
{
    console.log('displayDivQrSponsorButton Enter');

    var el_sponsor_button = getElementDivQrSponsorButton();

    el_sponsor_button.style.display = 'block';

} // displayDivQrSponsorButton

// Hide the div qr code free button
function hideDivQrFreeButton()
{
    console.log('hideDivQrFreeButton Enter');

    var el_free_button = getElementDivQrFreeButton();

    el_free_button.style.display = 'none';

} // hideDivQrFreeButton

// Display the div qr code code free button
function displayDivQrFreeButton()
{
    console.log('displayDivQrFreeButton Enter');

    var el_free_button = getElementDivQrFreeButton();

    el_free_button.style.display = 'block';

} // displayDivQrFreeButton

// Hide the div qr code musician button
function hideDivQrMusicianButton()
{
    console.log('hideDivQrMusicianButton Enter');

    var el_musician_button = getElementDivQrMusicianButton();

    el_musician_button.style.display = 'none';

} // hideDivQrMusicianButton

// Display the div qr code code musician button
function displayDivQrMusicianButton()
{
    console.log('displayDivQrMusicianButton Enter');

    var el_musician_button = getElementDivQrMusicianButton();

    el_musician_button.style.display = 'block';

} // displayDivQrMusicianButton

// Hide the div qr code send email button
function hideDivQrSendEmailButton()
{
    console.log('hideDivQrSendEmailButton Enter');

    var el_send_email_button = getElementDivQrSendEmailButton();

    el_send_email_button.style.display = 'none';

} // hideDivQrSendEmailButton

// Display the div qr code code send email button
function displayDivQrSendEmailButton()
{
    console.log('displayDivQrSendEmailButton Enter');

    var el_send_email_button = getElementDivQrSendEmailButton();

    el_send_email_button.style.display = 'block';

} // displayDivQrSendEmailButton

// Hide the div qr code send post button
function hideDivQrSendPostButton()
{
    console.log('hideDivQrSendPostButton Enter');

    var el_send_post_button = getElementDivQrSendPostButton();

    el_send_post_button.style.display = 'none';

} // hideDivQrSendPostButton

// Display the div qr code code send post button
function displayDivQrSendPostButton()
{
    console.log('displayDivQrSendPostButton Enter');

    var el_send_post_button = getElementDivQrSendPostButton();

    el_send_post_button.style.display = 'block';

} // displayDivQrSendPostButton

// Hide the div qr code print batch button
function hideDivQrPrintBatchButton()
{
    console.log('hideDivQrPrintBatchButton Enter');

    var el_print_batch_button = getElementDivQrPrintBatchButton();

    el_print_batch_button.style.display = 'none';

} // hideDivQrPrintBatchButton

// Display the div qr code code print batch button
function displayDivQrPrintBatchButton()
{
    console.log('displayDivQrPrintBatchButton Enter');

    var el_print_batch_button = getElementDivQrPrintBatchButton();

    el_print_batch_button.style.display = 'block';

} // displayDivQrPrintBatchButton

// Hide the div qr code file done button
function hideDivQrFileDoneButton()
{
    console.log('hideDivQrFileDoneButton Enter');

    var el_file_done_button = getElementDivQrFileDoneButton();

    el_file_done_button.style.display = 'none';

} // hideDivQrFileDoneButton

// Display the div qr code code file done button
function displayDivQrFileDoneButton()
{
    console.log('displayDivQrFileDoneButton Enter');

    var el_file_done_button = getElementDivQrFileDoneButton();

    el_file_done_button.style.display = 'block';

} // displayDivQrFileDoneButton


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

// Get the element text box for the QR code name one
function getElementQrCodeNameOne()
{
    return document.getElementById(getIdQrCodeNameOne());

} // getElementDivQrMusicianButton

// Returns the identity of the text box for the QR code name one
function getIdQrCodeNameOne()
{
    return 'id_qr_code_name_one_text_box';

} // getIdQrCodeNameOne

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

  // Get the element text box for the QR code name two
  function getElementQrCodeNameTwo()
  {
      return document.getElementById(getIdQrCodeNameTwo());
  
  } // getElementDivQrMusicianButton
  
  // Returns the identity of the text box for the QR code name two
  function getIdQrCodeNameTwo()
  {
      return 'id_qr_code_name_two_text_box';
  
  } // getIdQrCodeNameTwo 
  
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
function getElementDivQrContribution()
{
    return document.getElementById(getIdDivQrContribution());

} // getElementDivQrContribution

// Returns the identity of the div text box for the supporter contribution
function getIdDivQrContribution()
{
    return 'id_div_contribution_text_box';

} // getIdDivQrContribution

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
function getElementDivQrFilesDropdown()
{
    return document.getElementById(getIdDivQrFilesDropdown());

} // getElementDivQrFilesDropdown

// Returns the identity of the div supporter dropdown
function getIdDivQrFilesDropdown()
{
    return 'id_div_qr_files_dropdown';

} // getIdDivQrFilesDropdown


// Get the element div text box for the concert date
function getElementDivQrConcertDate()
{
    return document.getElementById(getIdDivQrConcertDate());

} // getElementDivQrConcertDate
	  

// Returns the identity of the div text box for the concert date
function getIdDivQrConcertDate()
{
    return 'id_div_concert_date_text_box';

} // getIdDivQrConcertDate

// Get the element div text box for the telephone number
function getElementDivQrTelephone()
{
    return document.getElementById(getIdDivQrTelephone());

} // getElementDivQrTelephone

// Returns the identity of the div text box for the telephone number
function getIdDivQrTelephone()
{
    return 'id_div_telephon_text_box';

} // getIdDivQrTelephone

// Get the element div text box for the season color def string
function getElementDivSeasonColorDefStr()
{
    return document.getElementById(getIdDivSeasonColorDefStr());

} // getElementDivSeasonColorDefStr

// Returns the identity of the div text box for the season color def string
function getIdDivSeasonColorDefStr()
{
    return 'id_div_season_color_def_str';

} // getIdDivSeasonColorDefStr

// Get the element div text box for the season color display
function getElementDivSeasonDisplay()
{
    return document.getElementById(getIdDivSeasonDisplay());

} // getElementDivSeasonDisplay

// Returns the identity of the div text box for the season color display
function getIdDivSeasonDisplay()
{
    return 'id_div_season_color_display';

} // getIdDivSeasonDisplay

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////
