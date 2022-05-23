// File: QrCodeCard.js
// Date: 2022-05-23
// Author: Gunnar Lidén

// File content
// =============
//
// Functions for the supporter card and other cards to be printed

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Supporter Card Strings ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the string that defines the div supporter card front side
function getElementDivSupporterCardFrontString(i_qr_xml, i_file_number, i_tab)
{
    var ret_card_front_str = '';

    var id_div_card_front = '';

    var cl_div_card_front = getClassDivSupporterCardFront();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab);

    ret_card_front_str = ret_card_front_str + getDivStartString(id_div_card_front, cl_div_card_front);

    ret_card_front_str = ret_card_front_str + getNewLineString();

    ret_card_front_str = ret_card_front_str + getElementDivSupporterLogoString(i_tab + 1);

    ret_card_front_str = ret_card_front_str + getNewLineString();

	ret_card_front_str = ret_card_front_str + getTabs(i_tab + 1) + getElementDivQrCodeNameString(i_qr_xml, i_file_number, i_tab) + getNewLineString();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab + 1) + getElementDivSupporterCardTextCanvasString(i_qr_xml, i_file_number, i_tab + 1) + getNewLineString();

    ret_card_front_str = ret_card_front_str + getNewLineString();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab);

    ret_card_front_str = ret_card_front_str + getDivEndString(id_div_card_front, cl_div_card_front);

    ret_card_front_str = ret_card_front_str + getNewLineString() + getNewLineString();

    return ret_card_front_str;

} // getElementDivSupporterCardFrontString

// Get the string that defines the div supporter card reverse side
function getElementDivSupporterCardReverseString(i_qr_xml, i_file_number, i_tab)
{
    var ret_card_reverse_str = '';

    var id_div_card_reverse = '';

    var cl_div_card_reverse = getClassDivSupporterCardReverse();

    ret_card_reverse_str = ret_card_reverse_str + getTabs(i_tab);

    ret_card_reverse_str = ret_card_reverse_str + getDivStartString(id_div_card_reverse, cl_div_card_reverse);

    ret_card_reverse_str = ret_card_reverse_str + getNewLineString();

    ret_card_reverse_str = ret_card_reverse_str + getTabs(i_tab);

    ret_card_reverse_str = ret_card_reverse_str + getElementDivSupporterCardReverseTextString(i_qr_xml, i_file_number, i_tab + 1);

    ret_card_reverse_str = ret_card_reverse_str + getNewLineString();

    ret_card_reverse_str = ret_card_reverse_str + getTabs(i_tab);

    ret_card_reverse_str = ret_card_reverse_str + getElementDivSupporterCardReverseQrShowString(i_qr_xml, i_file_number, i_tab + 1);

    ret_card_reverse_str = ret_card_reverse_str + getDivEndString(id_div_card_reverse, cl_div_card_reverse);

    ret_card_reverse_str = ret_card_reverse_str + getNewLineString() + getNewLineString();

    return ret_card_reverse_str;

} // getElementDivSupporterCardReverseString

// Get the string that defines the div text logo
function getElementDivSupporterLogoString(i_tab)
{
    var ret_text_logo_str = '';

    var id_div_text_logo = '';

    var cl_div_text_logo = getClassDivSupporterLogo();

    ret_text_logo_str = ret_text_logo_str + getTabs(i_tab);

    ret_text_logo_str = ret_text_logo_str + getDivStartString(id_div_text_logo, cl_div_text_logo);

    ret_text_logo_str = ret_text_logo_str + getNewLineString();
	
	ret_text_logo_str = ret_text_logo_str + getTabs(i_tab + 1) + 'JAZZ <i>live</i> AARAU' + getNewLineString();

    ret_text_logo_str = ret_text_logo_str + getTabs(i_tab);

    ret_text_logo_str = ret_text_logo_str + getDivEndString(id_div_text_logo, cl_div_text_logo);

    ret_text_logo_str = ret_text_logo_str + getNewLineString() + getNewLineString();

    return ret_text_logo_str;

} // getElementDivSupporterLogoString

// Get the string that defines the div supporter name
function getElementDivQrCodeNameString(i_qr_xml, i_file_number, i_tab)
{
    var name_str = i_qr_xml.getQrCodeNameOne(i_file_number);

    var ret_supporter_name_str = '';

    var id_div_supporter_name = '';

    var cl_div_supporter_name = getClassDivQrCodeName();

    ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab);

    ret_supporter_name_str = ret_supporter_name_str + getDivStartString(id_div_supporter_name, cl_div_supporter_name);

    ret_supporter_name_str = ret_supporter_name_str + getNewLineString();
	
	ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab + 1) + name_str + getNewLineString();

    ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab);

    ret_supporter_name_str = ret_supporter_name_str + getDivEndString(id_div_supporter_name, cl_div_supporter_name);

    ret_supporter_name_str = ret_supporter_name_str + getNewLineString() + getNewLineString();

    return ret_supporter_name_str;

} // getElementDivQrCodeNameString

// Get the string that defines the div supporter card text canvas
function getElementDivSupporterCardTextCanvasString(i_qr_xml, i_file_number, i_tab)
{
	
    var ret_card_text_canvas_str = '';

    var id_div_card_text_canvas = '';

    var cl_div_card_text_canvas = getClassDivSupporterTextCanvas();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getDivStartString(id_div_card_text_canvas, cl_div_card_text_canvas);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);
	
	ret_card_text_canvas_str = ret_card_text_canvas_str + getElementDivSupporterCardTextString(i_qr_xml, i_file_number, i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getElementDivSupporterQrCanvasString(i_qr_xml, i_file_number, i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getDivEndString(id_div_card_text_canvas, cl_div_card_text_canvas);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString() + getNewLineString();

    return ret_card_text_canvas_str;

} // getElementDivSupporterCardTextCanvasString

// Get the string that defines the div supporter card text
function getElementDivSupporterCardTextString(i_qr_xml, i_file_number, i_tab)
{
	var season_card_str = i_qr_xml.getSupporterCardTextString();
	
    var ret_card_text_str = '';

    var id_div_season_text = '';

    var cl_div_season_text = getClassDivSupporterCardText();

    ret_card_text_str = ret_card_text_str + getTabs(i_tab);

    ret_card_text_str = ret_card_text_str + getDivStartString(id_div_season_text, cl_div_season_text);

    ret_card_text_str = ret_card_text_str + getNewLineString();
	
	ret_card_text_str = ret_card_text_str + getTabs(i_tab + 1) + season_card_str + getNewLineString();

    ret_card_text_str = ret_card_text_str + getTabs(i_tab);

    ret_card_text_str = ret_card_text_str + getDivEndString(id_div_season_text, cl_div_season_text);

    ret_card_text_str = ret_card_text_str + getNewLineString() + getNewLineString();

    return ret_card_text_str;

} // getElementDivSupporterCardTextString

// Get the string that defines the div supporter card QR code canvas
function getElementDivSupporterQrCanvasString(i_qr_xml, i_file_number, i_tab)
{
    var ret_supporter_card_qr_canvas_str = '';

    var id_div_supporter_card_qr_canvas = '';

    var cl_div_supporter_card_qr_canvas = getClassDivSupporterCanvasQrCode();
	
	var id_supporter_card_qr_canvas = getIdSupporterQrCodeCanvas();

    var cl_supporter_card_qr_canvas = getClassSupporterQrCodeCanvas();

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getTabs(i_tab);

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getDivStartString(id_div_supporter_card_qr_canvas, cl_div_supporter_card_qr_canvas);

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getNewLineString();

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getTabs(i_tab + 1);

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + '<canvas ' + ' id= "' + id_supporter_card_qr_canvas + '" '  + ' class= "' + cl_supporter_card_qr_canvas + '" ' + '>';

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getNewLineString();
	
    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getTabs(i_tab + 1);

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + '</canvas>';

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getDivEndString(id_div_supporter_card_qr_canvas, cl_div_supporter_card_qr_canvas);

    ret_supporter_card_qr_canvas_str = ret_supporter_card_qr_canvas_str + getNewLineString() + getNewLineString();

    return ret_supporter_card_qr_canvas_str;

} // getElementDivSupporterQrCanvasString

function MoveToQrStringsgetSupporterCardReverseSideOne()
{
    var ret_all_rows = '';

    ret_all_rows = ret_all_rows + 'Mit diesem Ausweis erhalten Sie einen um Fr. 10.-' + '<br>';

    ret_all_rows = ret_all_rows + 'reduzierten Eintrittspreis in die Konzerte von' + '<br>';

    ret_all_rows = ret_all_rows + 'JAZZ <i>live</i> AARAU' + '<br>' + '<br>';

    ret_all_rows = ret_all_rows + 'info@jazzliveaarau.ch' + '<br>';

    ret_all_rows = ret_all_rows + 'https://jazzliveaarau.ch';

    return ret_all_rows;

} // getSupporterCardReverseSideOne

function MoveToQrStringsgetSupporterCardReverseQrCode(i_download_code)
{
    var ret_str = '';

    ret_str = ret_str + 'Ausweis für das Telefon auf der Webseite:' + '<br><br>';

    ret_str = ret_str + QrStrings.urlQrCodeShowWebPage() + '<br><br>';

    ret_str = ret_str + 'Code für den Ausweis: ' + '<b>' + i_download_code + '</b>';

    return ret_str;

} // MoveToQrStringsgetSupporterCardReverseQrCode

// Get the string that defines the div supporter card reverse text
function getElementDivSupporterCardReverseTextString(i_qr_xml, i_file_number, i_tab)
{
    // TODO Define texts in QrStrings
	var reverse_text = MoveToQrStringsgetSupporterCardReverseSideOne();
	
    var ret_card_reverse_text_str = '';

    var id_div_reverse_text = '';

    var cl_div_reverse_text = getClassDivSupporterCardReverseText();

    ret_card_reverse_text_str = ret_card_reverse_text_str + getTabs(i_tab);

    ret_card_reverse_text_str = ret_card_reverse_text_str + getDivStartString(id_div_reverse_text, cl_div_reverse_text);

    ret_card_reverse_text_str = ret_card_reverse_text_str + getNewLineString();
	
	ret_card_reverse_text_str = ret_card_reverse_text_str + getTabs(i_tab + 1) + reverse_text + getNewLineString();

    ret_card_reverse_text_str = ret_card_reverse_text_str + getTabs(i_tab);

    ret_card_reverse_text_str = ret_card_reverse_text_str + getDivEndString(id_div_reverse_text, cl_div_reverse_text);

    ret_card_reverse_text_str = ret_card_reverse_text_str + getNewLineString() + getNewLineString();

    return ret_card_reverse_text_str;

} // getElementDivSupporterCardReverseTextString

// Get the string that defines the div supporter card reverse text
function getElementDivSupporterCardReverseQrShowString(i_qr_xml, i_file_number, i_tab)
{
    var download_code = i_qr_xml.getDownloadOne(i_file_number);

	var reverse_qr_show_str = MoveToQrStringsgetSupporterCardReverseQrCode(download_code);
	
    var ret_card_reverse_qr_str = '';

    var id_div_reverse_qr = '';

    var cl_div_reverse_qr = getClassDivSupporterCardReverseQrShow();

    ret_card_reverse_qr_str = ret_card_reverse_qr_str + getTabs(i_tab);

    ret_card_reverse_qr_str = ret_card_reverse_qr_str + getDivStartString(id_div_reverse_qr, cl_div_reverse_qr);

    ret_card_reverse_qr_str = ret_card_reverse_qr_str + getNewLineString();
	
	ret_card_reverse_qr_str = ret_card_reverse_qr_str + getTabs(i_tab + 1) + reverse_qr_show_str + getNewLineString();

    ret_card_reverse_qr_str = ret_card_reverse_qr_str + getTabs(i_tab);

    ret_card_reverse_qr_str = ret_card_reverse_qr_str + getDivEndString(id_div_reverse_qr, cl_div_reverse_qr);

    ret_card_reverse_qr_str = ret_card_reverse_qr_str + getNewLineString() + getNewLineString();

    return ret_card_reverse_qr_str;

} // getElementDivSupporterCardReverseQrShowString

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Supporter Card Strings /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns the class for the div supporter card front side
function getClassDivSupporterCardFront()
{
    return 'cl_div_supporter_card_front';

} // getClassDivSupporterCardFront

// Returns the class for the div supporter card reverse side
function getClassDivSupporterCardReverse()
{
    return 'cl_div_supporter_card_reverse'

} // getClassDivSupporterCardReverse

// Returns the class of the div canvas QR code
function getClassDivSupporterCanvasQrCode()
{
    return 'cl_div_supporter_card_qr_canvas';

} // getClassDivSupporterCanvasQrCode


// Get the element supporter card canvas
function getElementSupporterQrCodeCanvas()
{
    return document.getElementById(getIdSupporterQrCodeCanvas());

} // getElementDivQrPrintPageOne

// Returns the identity of the supporter card canvas
function getIdSupporterQrCodeCanvas()
{
    return 'id_supporter_card_qr_canvas';

} // getIdSupporterQrCodeCanvas

// Returns the class for the QR code canvas
function getClassSupporterQrCodeCanvas()
{
    return 'cl_supporter_card_qr_canvas';

} // getClassSupporterQrCodeCanvas

// Returns the class for the supporter name
function getClassDivQrCodeName()
{
    return 'cl_div_supporter_card_name';

} // getClassDivQrCodeName

// Returns the class for the supporter card text
function getClassDivSupporterText()
{
    return 'cl_div_supporter_card_text';

} // getClassDivSupporterText

// Returns the class for the supporter card text and QR canvas
function getClassDivSupporterTextCanvas()
{
    return 'cl_div_supporter_card_text_canvas';

} // getClassDivSupporterTextCanvas

// Returns the class for the div supporter logo
function getClassDivSupporterLogo()
{
    return 'cl_div_supporter_card_logo';

} // getClassDivSupporterLogo

// Returns the class of the canvas element for the QR code
function getClassCanvasQrCode()
{
    return 'cl_canvas_qr_code';

} // getClassCanvasQrCode

// Returns the class for the div supporter card text
function getClassDivSupporterCardText()
{
    return 'cl_div_supporter_card_text';

} // getClassDivSupporterCardText

// Returns the class for the div supporter card reverse text
function getClassDivSupporterCardReverseText()
{
    return 'cl_div_supporter_card_reverse_text';

} // getClassDivSupporterCardReverseText

// Returns the class for the div supporter card reverse text
function getClassDivSupporterCardReverseQrShow()
{
    return 'cl_div_supporter_card_reverse_qr_show';

} // getClassDivSupporterCardReverseQrShow

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////