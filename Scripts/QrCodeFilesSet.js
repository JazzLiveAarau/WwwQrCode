// File: QrCodeFilesSet.js
// Date: 2022-05-17
// Author: Gunnar Lidén

// File content
// =============
//
// Set controls for QR Code files

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

// Set the season color text boxes
function setTextBoxesSeasonColor()
{
    console.log('setTextBoxesSeasonColor Enter');

    var season_color = getSeasonColorInLocalStorage();

    var el_div_season_display = getElementDivSeasonDisplay();

    var el_season_display = el_div_season_display.getElementsByTagName('input')[0];

    el_season_display.style.backgroundColor = season_color;

    g_season_color_def_str_text_box.setValue(season_color);

} // setTextBoxesSeasonColor

// Set controls for category (case) Supporter
function setControlsSupporter()
{
    console.log('setControlsSupporter Enter');

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

    console.log('setControlsSupporter Exit');

} // setControlsSupporter

// Set controls for category (case) Sponsor
function setControlsSponsor()
{
    console.log('setControlsSponsor Enter');

    setControlsCategoryUndefined();

    console.log('setControlsSponsor Exit');

} // setControlsSponsor

// Set controls for category (case) Musician
function setControlsMusician()
{
    console.log('setControlsMusician Enter');

    setTextBoxQrCodeNameOne();

    setTextBoxQrCodeNameTwo();

    setTextBoxQrAddress();

    setTextBoxQrEmail();

    console.log('setControlsMusician Exit');

} // setControlsMusician

// Set controls for category (case) Member
function setControlsMember()
{
    console.log('setControlsMember Enter');

    setControlsCategoryUndefined();

    console.log('setControlsMember Exit');

} // setControlsMember

// Set controls for category (case) Free
function setControlsFree()
{
    console.log('setControlsFree Enter');

    setControlsCategoryUndefined();

    console.log('setControlsFree Exit');

} // setControlsFree

// Sets the contols for category undefined
function setControlsCategoryUndefined()
{
    console.log('setControlsCategoryUndefined Enter');

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

    console.log('setControlsCategoryUndefined Exit');

} // setControlsCategoryUndefined

// Sets the files dropdown control for supporters
function setSupporterDropdown()
{
    console.log('setSupporterDropdown Enter');

    var b_supporter_above_limit = true;

    var b_only_not_sent = true;

    g_file_number_array =  g_qr_files_xml_object.getFilteredFileNumberArray(b_supporter_above_limit, b_only_not_sent);

    var name_array = g_qr_files_xml_object.getQrFirstAndFamilyNamesFiltered(g_file_number_array);

    g_files_drop_down.setNameArray(name_array);

    console.log('setSupporterDropdown Exit');
    
} // setSupporterDropdown

// Sets the files dropdown control for musicians
function setMusicianDropdown()
{
    console.log('setMusicianDropdown Enter');

    var b_supporter_above_limit = null;

    var b_only_not_sent = true;

    g_file_number_array =  g_qr_files_xml_object.getFilteredFileNumberArray(b_supporter_above_limit, b_only_not_sent);

    var date_musician_array = g_qr_files_xml_object.getDropdownStringArrayMusician(g_file_number_array);

    g_files_drop_down.setNameArray(date_musician_array);

    console.log('setMusicianDropdown Exit');
    
} // setMusicianDropdown

// Set the text box QR code name one for the active file number
function setTextBoxQrCodeNameOne()
{
    var qr_code_name_one = g_qr_files_xml_object.getQrCodeNameOne(g_files_active_number);

    g_qr_code_name_one_text_box.setValue(qr_code_name_one);

} // setTextBoxQrCodeNameOne

// Set the text box QR code name two for the active file number
function setTextBoxQrCodeNameTwo()
{
    var qr_code_name_two = g_qr_files_xml_object.getQrCodeNameTwo(g_files_active_number);

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
///////////////////////// Start Set Styles ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Supporter: Set styles
function setStylesSupporter()
{
    setTextBoxQrCodeNameOneStyleSupporter();

    setTextBoxQrCodeNameTwoStyleSupporter();

} // setStylesSupporter

// Supporter: Set styles for the text box QR code name one for the active file number
function setTextBoxQrCodeNameOneStyleSupporter()
{
    g_qr_code_name_one_text_box.setLabelText(QrStrings.getLabelQrCodeNameOne());

    //g_qr_code_name_one_text_box.setSize("42");

    //g_qr_code_name_one_text_box.setLabelTextPositionAbove();

    g_qr_code_name_one_text_box.setTitle(QrStrings.getTitleQrCodeNameOne());

    g_qr_code_name_one_text_box.setReadOnlyFlag(false);

    g_qr_code_name_one_text_box.setOninputFunctionName("");

} // setTextBoxQrCodeNameOneStyleSupporter

// Supporter: Set styles for the text box QR code name one for the active file number
function setTextBoxQrCodeNameTwoStyleSupporter()
{
    g_qr_code_name_one_text_box.setLabelText(QrStrings.getLabelQrCodeNameTwo());

    //g_qr_code_name_one_text_box.setSize("42");

    //g_qr_code_name_one_text_box.setLabelTextPositionAbove();

    g_qr_code_name_one_text_box.setTitle(QrStrings.getTitleQrCodeNameTwo());

    g_qr_code_name_one_text_box.setReadOnlyFlag(false);

    g_qr_code_name_one_text_box.setOninputFunctionName("");

} // setTextBoxQrCodeNameTwoStyleSupporter

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Styles //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
