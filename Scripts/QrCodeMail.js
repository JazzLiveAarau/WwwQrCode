// File: QrCodeMail.js
// Date: 2022-05-21
// Author: Gunnar Lidén

// File content
// =============
//
// Print of mails with QR code

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Print Pages Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set print page one alternative one
function setPrintPageOneAlternativeOne(i_supporter_data, i_season_str)
{
    var n_tabs = 2;

    var el_page_one = getElementDivQrPrintPageOne();

    var el_page_two = getElementDivQrPrintPageTwo();

    var content_page_one_alternative_one = getElementPrintPageOneAlternativeOneString(i_supporter_data, i_season_str, n_tabs);

    // var content_page_two_alternative_one = getElementPrintPageTwoAlternativeOneString(i_supporter_data, i_season_str, n_tabs);

    el_page_one.innerHTML = content_page_one_alternative_one;

    // el_page_two.innerHTML = content_page_two_alternative_one;

    setWidthsHeightsMarginsAltOne();

} // setPrintPageOneAlternativeOne


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Print Pages Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set Heights Margins Functions /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// https://www.w3schools.com/css/css_positioning.asp
// https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute

// Set widths, heights and margins for alternative one
function setWidthsHeightsMarginsAltOne()
{
    var scale_factor = 1.15;

    var a4_height = 297.0;

    // ---------------------------

    var el_page_one = getElementDivQrPrintPageOne();

    var padding_first = 0.7;

    var padding_first_scale = padding_first*scale_factor;

    var padding_first_str = padding_first_scale.toString() + 'mm';

    el_page_one.style.paddingTop =  padding_first_str;

    // ---------------------------

    var el_upper_margin = getElementDivAltOneUpperMargin();

    var margin_height = 17.25;

    var margin_height_scale = margin_height*scale_factor;

    var margin_height_str = margin_height_scale.toString() + 'mm';

    el_upper_margin.style.height =  margin_height_str;

    // ---------------------------

    var margin_top_msg = 31.0;

    var container_height = 131.0;

    var message_height = 70.0;


    var margin_top_msg_scaled = margin_top_msg*scale_factor;

    var container_height_scaled = container_height*scale_factor;

    var message_height_scaled = message_height*scale_factor;


    var margin_top_msg_str = margin_top_msg_scaled.toString() + 'mm';

    var container_height_str = container_height_scaled.toString() + 'mm';

    var message_height_str = message_height_scaled.toString() + 'mm';


    var el_container_msg = getElementDivAltOneContainerMsg();

    var el_message = getElementDivAltOneMessage();

    el_message.style.height = message_height_str;

    el_container_msg.style.height = container_height_str;

    //QQQ el_container_msg.style.paddingTop = margin_top_msg_str;

    el_message.style.marginTop = margin_top_msg_str;

    // ---------------------------
/*
    var el_container_qr_code = getElementDivAltOneContainerQrCode();

    el_container_qr_code.style.height = container_height_str;

    var qr_card_height = 50.0;

    var qr_card_height_scaled = qr_card_height*scale_factor;

    var qr_card_height_str = qr_card_height_scaled.toString() + 'mm';

    var el_two_qr_cards = getElementDivAltOneTwoQrCards();

    el_two_qr_cards.style.height = qr_card_height_str;

    el_two_qr_cards.style.marginTop = margin_top_msg_str; // Should perhaps be different

    // ---------------------------

    var el_lower_margin = getElementDivAltOneLowerMargin();

    el_lower_margin.style.height =  margin_height_str;

    var margin_top = a4_height - padding_first - margin_height - container_height - margin_top_msg - container_height - margin_height;

    var margin_top_scale = margin_top*scale_factor;

    var margin_top_scale_str = margin_top_scale.toString() + 'mm';

    el_lower_margin.style.marginTop = margin_top_scale_str;

    // ---------------------------

    var el_page_two = getElementDivQrPrintPageTwo();
*/

} // setWidthsHeightsMarginsAltOne

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Heights Margins Functions ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Print Page Strings ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the string that defines the PrintPage element for page one alternative one
function getElementPrintPageOneAlternativeOneString(i_supporter_data, i_season_str, i_tab)
{
    var ret_print_page_one_str = '';

    ret_print_page_one_str = ret_print_page_one_str + getTabs(i_tab);

    ret_print_page_one_str = ret_print_page_one_str + '<PrintPage>';

    ret_print_page_one_str = ret_print_page_one_str + getNewLineString();
	
	ret_print_page_one_str = ret_print_page_one_str + getElementDivAltOneUpperMarginString(i_tab + 1);

    ret_print_page_one_str = ret_print_page_one_str + getNewLineString();
	
	ret_print_page_one_str = ret_print_page_one_str + getElementDivAltOneContainerMsgString(i_tab + 1);

    ret_print_page_one_str = ret_print_page_one_str + getNewLineString();

    // ret_print_page_one_str = ret_print_page_one_str + getElementDivAltOneContainerQrCodeString(i_tab + 1);

    ret_print_page_one_str = ret_print_page_one_str + getNewLineString();
	
	ret_print_page_one_str = ret_print_page_one_str + getElementDivAltOneLowerMarginString(i_tab + 1);

    ret_print_page_one_str = ret_print_page_one_str + getTabs(i_tab);

    ret_print_page_one_str = ret_print_page_one_str + '</PrintPage>';;

    ret_print_page_one_str = ret_print_page_one_str + getNewLineString() + getNewLineString();

    return ret_print_page_one_str;

} // getElementPrintPageOneAlternativeOneString

// Get the string that defines the PrintPage element for page two alternative one
function getElementPrintPageTwoAlternativeOneString(i_supporter_data, i_season_str, i_tab)
{
    var ret_print_page_two_str = '';

    ret_print_page_two_str = ret_print_page_two_str + getTabs(i_tab);

    ret_print_page_two_str = ret_print_page_two_str + '<PrintPage>';

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();
	
	ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneUpperMarginString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();
	
	ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneContainerMsgString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();

    ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneContainerQrCodeString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();
	
	ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneLowerMarginString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getTabs(i_tab);

    ret_print_page_two_str = ret_print_page_two_str + '</PrintPage>';;

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString() + getNewLineString();

    return ret_print_page_two_str;

} // getElementPrintPageTwoAlternativeOneString

// Get the string that defines the div alternative one upper margin
function getElementDivAltOneUpperMarginString(i_tab)
{
    var ret_upper_margin_str = '';

    var id_div_upper_margin = getIdDivAltOneUpperMargin();

    var cl_div_upper_margin = getClassDivAltOneUpperMargin();

    ret_upper_margin_str = ret_upper_margin_str + getTabs(i_tab);

    ret_upper_margin_str = ret_upper_margin_str + getDivStartString(id_div_upper_margin, cl_div_upper_margin);

    ret_upper_margin_str = ret_upper_margin_str + getNewLineString();
	
	ret_upper_margin_str = ret_upper_margin_str + getTabs(i_tab + 1) + '<br><br>Upper margin' + getNewLineString();

    ret_upper_margin_str = ret_upper_margin_str + getTabs(i_tab);

    ret_upper_margin_str = ret_upper_margin_str + getDivEndString(id_div_upper_margin, cl_div_upper_margin);

    ret_upper_margin_str = ret_upper_margin_str + getNewLineString() + getNewLineString();

    return ret_upper_margin_str;

} // getElementDivAltOneUpperMarginString

// Get the string that defines the div alternative one lower margin
function getElementDivAltOneLowerMarginString(i_tab)
{
    var ret_lower_margin_str = '';

    var id_div_lower_margin = getIdDivAltOneLowerMargin();

    var cl_div_lower_margin = getClassDivAltOneLowerMargin();

    ret_lower_margin_str = ret_lower_margin_str + getTabs(i_tab);

    ret_lower_margin_str = ret_lower_margin_str + getDivStartString(id_div_lower_margin, cl_div_lower_margin);

    ret_lower_margin_str = ret_lower_margin_str + getNewLineString();
	
	ret_lower_margin_str = ret_lower_margin_str + getTabs(i_tab + 1) + 'Lower margin' + getNewLineString();

    ret_lower_margin_str = ret_lower_margin_str + getTabs(i_tab);

    ret_lower_margin_str = ret_lower_margin_str + getDivEndString(id_div_lower_margin, cl_div_lower_margin);

    ret_lower_margin_str = ret_lower_margin_str + getNewLineString() + getNewLineString();

    return ret_lower_margin_str;

} // getElementDivAltOneLowerMarginString

// Get the string that defines the div alternative one container message
function getElementDivAltOneContainerMsgString(i_tab)
{
    var ret_container_msg_str = '';

    var id_div_container_msg = getIdDivAltOneContainerMsg();

    var cl_div_container_msg = getClassDivAltOneContainerMsg();

    ret_container_msg_str = ret_container_msg_str + getTabs(i_tab);

    ret_container_msg_str = ret_container_msg_str + getDivStartString(id_div_container_msg, cl_div_container_msg);

    ret_container_msg_str = ret_container_msg_str + getNewLineString();
	
	ret_container_msg_str = ret_container_msg_str + getElementDivAltOneMessageString(i_tab + 1);

    ret_container_msg_str = ret_container_msg_str + getTabs(i_tab);

    ret_container_msg_str = ret_container_msg_str + getDivEndString(id_div_container_msg, cl_div_container_msg);

    ret_container_msg_str = ret_container_msg_str + getNewLineString() + getNewLineString();

    return ret_container_msg_str;

} // getElementDivAltOneContainerMsgString

// Get the string that defines the div alternative one container QR code
function getElementDivAltOneContainerQrCodeString(i_tab)
{
    var ret_container_qr_code_str = '';

    var id_div_container_qr_code = getIdDivAltOneContainerQrCode();

    var cl_div_container_qr_code = getClassDivAltOneContainerQrCode();

    ret_container_qr_code_str = ret_container_qr_code_str + getTabs(i_tab);

    ret_container_qr_code_str = ret_container_qr_code_str + getDivStartString(id_div_container_qr_code, cl_div_container_qr_code);

    ret_container_qr_code_str = ret_container_qr_code_str + getNewLineString();
	
	ret_container_qr_code_str = ret_container_qr_code_str + getElementDivAltOneTwoQrCardsString(i_tab + 1);

    ret_container_qr_code_str = ret_container_qr_code_str + getTabs(i_tab);

    ret_container_qr_code_str = ret_container_qr_code_str + getDivEndString(id_div_container_qr_code, cl_div_container_qr_code);

    ret_container_qr_code_str = ret_container_qr_code_str + getNewLineString() + getNewLineString();

    return ret_container_qr_code_str;

} // getElementDivAltOneContainerQrCodeString

// Get the string that defines the div alternative one message
function getElementDivAltOneMessageString(i_tab)
{
    var ret_message_str = '';

    var id_div_message = getIdDivAltOneMessage();

    var cl_div_message = getClassDivAltOneMessage();

    ret_message_str = ret_message_str + getTabs(i_tab);

    ret_message_str = ret_message_str + getDivStartString(id_div_message, cl_div_message);

    ret_message_str = ret_message_str + getNewLineString();
	
	ret_message_str = ret_message_str + getTabs(i_tab + 1) + '<br><br>Message' + getNewLineString();

    ret_message_str = ret_message_str + getTabs(i_tab);

    ret_message_str = ret_message_str + getDivEndString(id_div_message, cl_div_message);

    ret_message_str = ret_message_str + getNewLineString() + getNewLineString();

    return ret_message_str;

} // getElementDivAltOneMessageString

// Get the string that defines the div alternative one two qr cards
function getElementDivAltOneTwoQrCardsString(i_tab)
{
    var ret_message_str = '';

    var id_div_message = getIdDivAltOneTwoQrCards();

    var cl_div_message = getClassDivAltOneTwoQrCards();

    ret_message_str = ret_message_str + getTabs(i_tab);

    ret_message_str = ret_message_str + getDivStartString(id_div_message, cl_div_message);

    ret_message_str = ret_message_str + getNewLineString();
	
	ret_message_str = ret_message_str + getTabs(i_tab + 1) + '<br><br>Two QR cards' + getNewLineString();

    ret_message_str = ret_message_str + getTabs(i_tab);

    ret_message_str = ret_message_str + getDivEndString(id_div_message, cl_div_message);

    ret_message_str = ret_message_str + getNewLineString() + getNewLineString();

    return ret_message_str;

} // getElementDivAltOneTwoQrCardsString

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Print Page Strings /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the element div div print page one
function getElementDivQrPrintPageOne()
{
    return document.getElementById(getIdDivQrPrintPageOne());

} // getElementDivQrPrintPageOne

// Returns the identity of the div print page one
function getIdDivQrPrintPageOne()
{
    return 'id_div_qr_print_page_one';

} // getIdDivQrPrintPageOne

// Get the element div div print page two
function getElementDivQrPrintPageTwo()
{
    return document.getElementById(getIdDivQrPrintPageTwo());

} // getElementDivQrPrintPageTwo

// Returns the identity of the div print page two
function getIdDivQrPrintPageTwo()
{
    return 'id_div_qr_print_page_two';

} // getIdDivQrPrintPageTwo

// Returns the class for print page one and two
function getClassDivQrPrintPage()
{
    return 'cl_div_qr_print_page'

} // getClassQrPrintPage

// Get the element div alternative one upper margin
function getElementDivAltOneUpperMargin()
{
    return document.getElementById(getIdDivAltOneUpperMargin());

} // getElementDivAltOneUpperMargin

// Returns the identity of the div alternative one upper margin
function getIdDivAltOneUpperMargin()
{
    return 'id_div_alt_one_upper_margin';

} // getIdDivAltOneUpperMargin

// Returns the class for the div alternative one upper margin
function getClassDivAltOneUpperMargin()
{
    return 'cl_div_alt_one_upper_margin'

} // getClassDivAltOneUpperMargin

// Get the element div alternative one lower margin
function getElementDivAltOneLowerMargin()
{
    return document.getElementById(getIdDivAltOneLowerMargin());

} // getElementDivAltOneLowerMargin

// Returns the identity of the div alternative one lower margin
function getIdDivAltOneLowerMargin()
{
    return 'id_div_alt_one_lower_margin';

} // getIdDivAltOneLowerMargin

// Returns the class for the div alternative one lower margin
function getClassDivAltOneLowerMargin()
{
    return 'cl_div_alt_one_lower_margin'

} // getClassDivAltOneLowerMargin

// Get the element div alternative one container message
function getElementDivAltOneContainerMsg()
{
    return document.getElementById(getIdDivAltOneContainerMsg());

} // getElementDivAltOneContainerMsg

// Returns the identity of the div alternative one container message
function getIdDivAltOneContainerMsg()
{
    return 'id_div_alt_one_container_msg';

} // getIdDivAltOneContainerMsg

// Returns the class for the div alternative one container message
function getClassDivAltOneContainerMsg()
{
    return 'cl_div_alt_one_container_msg'

} // getClassDivAltOneContainerMsg

// Get the element div alternative one container QR code
function getElementDivAltOneContainerQrCode()
{
    return document.getElementById(getIdDivAltOneContainerQrCode());

} // getElementDivAltOneContainerQrCode

// Returns the identity of the div alternative one container QR code
function getIdDivAltOneContainerQrCode()
{
    return 'id_div_alt_one_container_qr_code';

} // getIdDivAltOneContainerQrCode

// Returns the class for the div alternative one container QR code
function getClassDivAltOneContainerQrCode()
{
    return 'cl_div_alt_one_container_qr_code'

} // getClassDivAltOneContainerQrCode


// Get the element div alternative one message
function getElementDivAltOneMessage()
{
    return document.getElementById(getIdDivAltOneMessage());

} // getElementDivAltOneMessage

// Returns the identity of the div alternative one message
function getIdDivAltOneMessage()
{
    return 'id_div_alt_one_message';

} // getIdDivAltOneMessage

// Returns the class for the div alternative one container QR code
function getClassDivAltOneMessage()
{
    return 'cl_div_alt_one_message'

} // getClassDivAltOneMessage

// Get the element div alternative one two qr cards
function getElementDivAltOneTwoQrCards()
{
    return document.getElementById(getIdDivAltOneTwoQrCards());

} // getElementDivAltOneTwoQrCards

// Returns the identity of the div alternative one two qr cards
function getIdDivAltOneTwoQrCards()
{
    return 'id_div_alt_one_two_qr_cards';

} // getIdDivAltOneTwoQrCards

// Returns the class for the div alternative one two qr cards
function getClassDivAltOneTwoQrCards()
{
    return 'cl_div_alt_one_two_qr_cards'

} // getClassDivAltOneTwoQrCards

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////