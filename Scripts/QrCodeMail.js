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

    var content_page_two_alternative_one = getElementPrintPageTwoAlternativeOneString(i_supporter_data, i_season_str, n_tabs);

    el_page_one.innerHTML = content_page_one_alternative_one;

    el_page_two.innerHTML = content_page_two_alternative_one;

    setWidthsHeightsMarginsAltOne();

    var el_two_from_address = getElementDivAltOneFromAddress();

    el_two_from_address.style.transform = 'rotate(180deg)';

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
    // var scale_factor = 1.16;

    var scale_factor = 1.0;

    var a4_height = 297.0;

    var a4_width = 210.0;

    var margin_height = 17.25;

    var upper_margin_top = 0.7;

    var lower_margin_bottom = upper_margin_top;

    var container_height = (a4_height - 2.0*margin_height - upper_margin_top - lower_margin_bottom)/2.0;

    var container_upper_top = 0.0;

    var message_height = 70.0;

    var message_width = 120.0;

    var message_top = 31.0;

    var container_lower_bottom = 0.0;

    var qr_card_height = 50.0;

    var two_qr_card_width = 2.0*80.0 + 1.0;

    var two_qr_card_top = 15.0;

    var to_address_height = 40.0;

    var to_address_width = 80.0;

    var to_address_bottom = 15.0;

    var to_address_top = container_height - to_address_bottom - to_address_height;

    var to_address_right = 15.0;

    var to_adress_left = a4_width - to_address_right - to_address_width;

    var from_address_height = 40.0;

    var from_address_width = 60.0;

    var from_address_bottom = 15.0;

    var from_address_top = container_height - from_address_bottom - from_address_height;

    var from_address_right = 15.0;

    var from_adress_left = a4_width - from_address_right - from_address_width;

    var debug_to_consol = true;

    if (debug_to_consol)
    {
        console.log('a4_height= ' + a4_height.toString());
        console.log('a4_width= ' + a4_width.toString());
        console.log('upper_margin_top= ' + upper_margin_top.toString());
        console.log('lower_margin_bottom= ' + lower_margin_bottom.toString());
        console.log('container_height= ' + container_height.toString());
        console.log('container_upper_top= ' + container_upper_top.toString());
        console.log('message_height= ' + message_height.toString());
        console.log('message_width= ' + message_width.toString());
        console.log('message_top= ' + message_top.toString());
        console.log('container_lower_bottom= ' + container_lower_bottom.toString());
        console.log('qr_card_height= ' + qr_card_height.toString());
        console.log('two_qr_card_width= ' + two_qr_card_width.toString());
        console.log('two_qr_card_top= ' + two_qr_card_top.toString());
        console.log('to_address_height= ' + to_address_height.toString());
        console.log('to_adress_left= ' + to_adress_left.toString());
        console.log('from_address_height= ' + from_address_height.toString());
        console.log('from_address_width= ' + from_address_width.toString());
        console.log('from_address_bottom= ' + from_address_bottom.toString());
        console.log('from_address_top= ' + from_address_top.toString());
        console.log('from_address_right= ' + from_address_right.toString());
        console.log('from_adress_left= ' + from_adress_left.toString());
    }
   
    // ---------------------------

    var el_upper_margin = getElementDivAltOneUpperMargin();

    el_upper_margin.style.height =  scaleHeightValueConvertToMmm(margin_height, scale_factor);

    el_upper_margin.style.top =  scaleHeightValueConvertToMmm(upper_margin_top, scale_factor);

    // ---------------------------

    var el_lower_margin = getElementDivAltOneLowerMargin();

    el_lower_margin.style.height =  scaleHeightValueConvertToMmm(margin_height, scale_factor);

    el_lower_margin.style.bottom = scaleHeightValueConvertToMmm(lower_margin_bottom, scale_factor);

    // ---------------------------

    var el_container_msg = getElementDivAltOneContainerMsg();

    el_container_msg.style.height = scaleHeightValueConvertToMmm(container_height, scale_factor);

    el_container_msg.style.top = scaleHeightValueConvertToMmm(container_upper_top, scale_factor);

    var el_message = getElementDivAltOneMessage();

    el_message.style.height = scaleHeightValueConvertToMmm(message_height, scale_factor);

    el_message.style.top = scaleHeightValueConvertToMmm(message_top, scale_factor);

    el_message.style.width = getWidthInPercentage(message_width);

    el_message.style.left = getLeftInPercentage(message_width);

    // ---------------------------

    var el_container_qr_code = getElementDivAltOneContainerQrCode();

    el_container_qr_code.style.height = scaleHeightValueConvertToMmm(container_height, scale_factor);

    el_container_qr_code.style.bottom = scaleHeightValueConvertToMmm(container_lower_bottom, scale_factor);

    var el_two_qr_cards = getElementDivAltOneTwoQrCards();

    el_two_qr_cards.style.height = scaleHeightValueConvertToMmm(qr_card_height, scale_factor);

    el_two_qr_cards.style.top = scaleHeightValueConvertToMmm(two_qr_card_top, scale_factor);

    el_two_qr_cards.style.width = getWidthInPercentage(two_qr_card_width);

    el_two_qr_cards.style.left = getLeftInPercentage(two_qr_card_width);

    // ---------------------------


    // ---------------------------

    var el_upper_margin_page_two = getElementDivAltOneUpperMarginPageTwo();

    el_upper_margin_page_two.style.height =  scaleHeightValueConvertToMmm(margin_height, scale_factor);

    el_upper_margin_page_two.style.top =  scaleHeightValueConvertToMmm(upper_margin_top, scale_factor);

    // ---------------------------

    var el_lower_margin_page_two = getElementDivAltOneLowerMarginPageTwo();

    el_lower_margin_page_two.style.height =  scaleHeightValueConvertToMmm(margin_height, scale_factor);

    el_lower_margin_page_two.style.bottom = scaleHeightValueConvertToMmm(lower_margin_bottom, scale_factor);

    // ---------------------------

   // ---------------------------

   var el_container_to_address = getElementDivAltOneContainerToAddress();

   el_container_to_address.style.height = scaleHeightValueConvertToMmm(container_height, scale_factor);

   el_container_to_address.style.top = scaleHeightValueConvertToMmm(container_upper_top, scale_factor);

   var el_to_address = getElementDivAltOneToAddress();

   el_to_address.style.height = scaleHeightValueConvertToMmm(to_address_height, scale_factor);

   el_to_address.style.top = scaleHeightValueConvertToMmm(to_address_top, scale_factor);

   el_to_address.style.width = getWidthInPercentage(to_address_width);

   el_to_address.style.left = getWidthInPercentage(to_adress_left);

   // ---------------------------

   var el_container_from_address = getElementDivAltOneContainerFromAddress();

   el_container_from_address.style.height = scaleHeightValueConvertToMmm(container_height, scale_factor);

   el_container_from_address.style.bottom = scaleHeightValueConvertToMmm(container_lower_bottom, scale_factor);

   var el_two_from_address = getElementDivAltOneFromAddress();

   el_two_from_address.style.height = scaleHeightValueConvertToMmm(from_address_height, scale_factor);

   el_two_from_address.style.top = scaleHeightValueConvertToMmm(from_address_top, scale_factor);

   el_two_from_address.style.width = getWidthInPercentage(from_address_width);

   el_two_from_address.style.left = getWidthInPercentage(from_adress_left);

   // ---------------------------

   if (debug_to_consol)
   {
    console.log('el_container_msg');
    console.log(el_container_msg.getBoundingClientRect());
    console.log('el_message');
    console.log(el_message.getBoundingClientRect());
    console.log('el_container_qr_code');
    console.log(el_container_qr_code.getBoundingClientRect());
   }

} // setWidthsHeightsMarginsAltOne

// Scales a height value and makes it a millimeter string
function scaleHeightValueConvertToMmm(i_height_value, i_scale_factor)
{
    return ret_value = i_height_value*i_scale_factor.toString() + 'mm';

} // scaleHeightValueConvertToMmm

// Calculates width in percentage and returns the value as string
function getWidthInPercentage(i_width_mm)
{
    var a4_width = 210.0;

    var percentage_width_int = parseInt((i_width_mm/a4_width*100.0));

    var percentage_width_str = percentage_width_int.toString() + '%';

    return percentage_width_str;

} // getWidthInPercentage

// Calculates width in percentage and returns the value as string
function getLeftInPercentage(i_width_mm)
{
    var a4_width = 210.0;

    var dist_left_mm = (a4_width - i_width_mm)/2.0;

    var percentage_left_int = parseInt((dist_left_mm/a4_width*100.0));

    var percentage_left_str = percentage_left_int.toString() + '%';

    return percentage_left_str;

} // getLeftInPercentage

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

    ret_print_page_one_str = ret_print_page_one_str + getElementDivAltOneContainerQrCodeString(i_tab + 1);

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
	
	ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneUpperMarginPageTwoString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();
	
	ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneContainerToAddressString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();

    ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneContainerFromAddressString(i_tab + 1);

    ret_print_page_two_str = ret_print_page_two_str + getNewLineString();
	
	ret_print_page_two_str = ret_print_page_two_str + getElementDivAltOneLowerMarginPageTwoString(i_tab + 1);

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

// Get the string that defines the div alternative one upper margin for page two
function getElementDivAltOneUpperMarginPageTwoString(i_tab)
{
    var ret_upper_margin_str = '';

    var id_div_upper_margin = getIdDivAltOneUpperMarginPageTwo();

    var cl_div_upper_margin = getClassDivAltOneUpperMargin();

    ret_upper_margin_str = ret_upper_margin_str + getTabs(i_tab);

    ret_upper_margin_str = ret_upper_margin_str + getDivStartString(id_div_upper_margin, cl_div_upper_margin);

    ret_upper_margin_str = ret_upper_margin_str + getNewLineString();
	
	ret_upper_margin_str = ret_upper_margin_str + getTabs(i_tab + 1) + '<br><br>Upper margin' + getNewLineString();

    ret_upper_margin_str = ret_upper_margin_str + getTabs(i_tab);

    ret_upper_margin_str = ret_upper_margin_str + getDivEndString(id_div_upper_margin, cl_div_upper_margin);

    ret_upper_margin_str = ret_upper_margin_str + getNewLineString() + getNewLineString();

    return ret_upper_margin_str;

} // getElementDivAltOneUpperMarginPageTwoString

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

// Get the string that defines the div alternative one lower margin for page two
function getElementDivAltOneLowerMarginPageTwoString(i_tab)
{
    var ret_lower_margin_str = '';

    var id_div_lower_margin = getIdDivAltOneLowerMarginPageTwo();

    var cl_div_lower_margin = getClassDivAltOneLowerMargin();

    ret_lower_margin_str = ret_lower_margin_str + getTabs(i_tab);

    ret_lower_margin_str = ret_lower_margin_str + getDivStartString(id_div_lower_margin, cl_div_lower_margin);

    ret_lower_margin_str = ret_lower_margin_str + getNewLineString();
	
	ret_lower_margin_str = ret_lower_margin_str + getTabs(i_tab + 1) + 'Lower margin' + getNewLineString();

    ret_lower_margin_str = ret_lower_margin_str + getTabs(i_tab);

    ret_lower_margin_str = ret_lower_margin_str + getDivEndString(id_div_lower_margin, cl_div_lower_margin);

    ret_lower_margin_str = ret_lower_margin_str + getNewLineString() + getNewLineString();

    return ret_lower_margin_str;

} // getElementDivAltOneLowerMarginPageTwoString

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

// Get the string that defines the div alternative one container to address
function getElementDivAltOneContainerToAddressString(i_tab)
{
    var ret_container_to_address_str = '';

    var id_div_container_to_address = getIdDivAltOneContainerToAddress();

    var cl_div_container_to_address = getClassDivAltOneContainerToAddress();

    ret_container_to_address_str = ret_container_to_address_str + getTabs(i_tab);

    ret_container_to_address_str = ret_container_to_address_str + getDivStartString(id_div_container_to_address, cl_div_container_to_address);

    ret_container_to_address_str = ret_container_to_address_str + getNewLineString();
	
	ret_container_to_address_str = ret_container_to_address_str + getElementDivAltOneToAddressString(i_tab + 1);

    ret_container_to_address_str = ret_container_to_address_str + getTabs(i_tab);

    ret_container_to_address_str = ret_container_to_address_str + getDivEndString(id_div_container_to_address, cl_div_container_to_address);

    ret_container_to_address_str = ret_container_to_address_str + getNewLineString() + getNewLineString();

    return ret_container_to_address_str;

} // getElementDivAltOneContainerToAddressString

// Get the string that defines the div alternative one container from address
function getElementDivAltOneContainerFromAddressString(i_tab)
{
    var ret_container_from_address_str = '';

    var id_div_container_from_address = getIdDivAltOneContainerFromAddress();

    var cl_div_container_from_address = getClassDivAltOneContainerFromAddress();

    ret_container_from_address_str = ret_container_from_address_str + getTabs(i_tab);

    ret_container_from_address_str = ret_container_from_address_str + getDivStartString(id_div_container_from_address, cl_div_container_from_address);

    ret_container_from_address_str = ret_container_from_address_str + getNewLineString();
	
	ret_container_from_address_str = ret_container_from_address_str + getElementDivAltOneFromAddressString(i_tab + 1);

    ret_container_from_address_str = ret_container_from_address_str + getTabs(i_tab);

    ret_container_from_address_str = ret_container_from_address_str + getDivEndString(id_div_container_from_address, cl_div_container_from_address);

    ret_container_from_address_str = ret_container_from_address_str + getNewLineString() + getNewLineString();

    return ret_container_from_address_str;

} // getElementDivAltOneContainerFromAddressString

// Get the string that defines the div alternative one to address
function getElementDivAltOneToAddressString(i_tab)
{
    var ret_to_address_str = '';

    var id_div_to_address = getIdDivAltOneToAddress();

    var cl_div_to_address = getClassDivAltOneToAddress();

    ret_to_address_str = ret_to_address_str + getTabs(i_tab);

    ret_to_address_str = ret_to_address_str + getDivStartString(id_div_to_address, cl_div_to_address);

    ret_to_address_str = ret_to_address_str + getNewLineString();
	
	ret_to_address_str = ret_to_address_str + getTabs(i_tab + 1) + '<br><br>To address' + getNewLineString();

    ret_to_address_str = ret_to_address_str + getTabs(i_tab);

    ret_to_address_str = ret_to_address_str + getDivEndString(id_div_to_address, cl_div_to_address);

    ret_to_address_str = ret_to_address_str + getNewLineString() + getNewLineString();

    return ret_to_address_str;

} // getElementDivAltOneToAddressString

// Get the string that defines the div alternative one from address
function getElementDivAltOneFromAddressString(i_tab)
{
    var ret_from_address_str = '';

    var id_div_from_address = getIdDivAltOneFromAddress();

    var cl_div_from_address = getClassDivAltOneFromAddress();

    ret_from_address_str = ret_from_address_str + getTabs(i_tab);

    ret_from_address_str = ret_from_address_str + getDivStartString(id_div_from_address, cl_div_from_address);

    ret_from_address_str = ret_from_address_str + getNewLineString();
	
	ret_from_address_str = ret_from_address_str + getTabs(i_tab + 1) + '<br><br>From address' + getNewLineString();

    ret_from_address_str = ret_from_address_str + getTabs(i_tab);

    ret_from_address_str = ret_from_address_str + getDivEndString(id_div_from_address, cl_div_from_address);

    ret_from_address_str = ret_from_address_str + getNewLineString() + getNewLineString();

    return ret_from_address_str;

} // getElementDivAltOneFromAddressString

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

// Get the element div alternative one upper margin
function getElementDivAltOneUpperMarginPageTwo()
{
    return document.getElementById(getIdDivAltOneUpperMarginPageTwo());

} // getElementDivAltOneUpperMarginPageTwo

// Returns the identity of the div alternative one upper margin
function getIdDivAltOneUpperMarginPageTwo()
{
    return 'id_div_alt_one_upper_margin_page_two';

} // getIdDivAltOneUpperMarginPageTwo

// Get the element div alternative one lower margin
function getElementDivAltOneLowerMarginPageTwo()
{
    return document.getElementById(getIdDivAltOneLowerMarginPageTwo());

} // getElementDivAltOneLowerMarginPageTwo

// Returns the identity of the div alternative one lower margin
function getIdDivAltOneLowerMarginPageTwo()
{
    return 'id_div_alt_one_lower_margin_page_two';

} // getIdDivAltOneLowerMarginPageTwo

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

// Get the element div alternative one container to address
function getElementDivAltOneContainerToAddress()
{
    return document.getElementById(getIdDivAltOneContainerToAddress());

} // getElementDivAltOneContainerToAddress

// Returns the identity of the div alternative one container to address
function getIdDivAltOneContainerToAddress()
{
    return 'id_div_alt_one_container_to_address';

} // getIdDivAltOneContainerToAddress

// Returns the class for the div alternative one container to address
function getClassDivAltOneContainerToAddress()
{
    return 'cl_div_alt_one_container_to_address'

} // getClassDivAltOneContainerToAddress

// Get the element div alternative one container from address
function getElementDivAltOneContainerFromAddress()
{
    return document.getElementById(getIdDivAltOneContainerFromAddress());

} // getElementDivAltOneContainerFromAddress

// Returns the identity of the div alternative one container from address
function getIdDivAltOneContainerFromAddress()
{
    return 'id_div_alt_one_container_from_address';

} // getIdDivAltOneContainerFromAddress

// Returns the class for the div alternative one container from address
function getClassDivAltOneContainerFromAddress()
{
    return 'cl_div_alt_one_container_from_address'

} // getClassDivAltOneContainerFromAddress


// Get the element div alternative one to address
function getElementDivAltOneToAddress()
{
    return document.getElementById(getIdDivAltOneToAddress());

} // getElementDivAltOneToAddress

// Returns the identity of the div alternative one to address
function getIdDivAltOneToAddress()
{
    return 'id_div_alt_one_to_address';

} // getIdDivAltOneToAddress

// Returns the class for the div alternative one to address
function getClassDivAltOneToAddress()
{
    return 'cl_div_alt_one_to_address'

} // getClassDivAltOneToAddress

// Get the element div alternative one from address
function getElementDivAltOneFromAddress()
{
    return document.getElementById(getIdDivAltOneFromAddress());

} // getElementDivAltOneFromAddress

// Returns the identity of the div alternative one from address
function getIdDivAltOneFromAddress()
{
    return 'id_div_alt_one_two_from_address';

} // getIdDivAltOneFromAddress

// Returns the class for the div alternative one from address
function getClassDivAltOneFromAddress()
{
    return 'cl_div_alt_one_two_from_address'

} // getClassDivAltOneFromAddress

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////