// File: QrCodeCard.js
// Date: 2022-05-24
// Author: Gunnar Lidén

// File content
// =============
//
// Functions for the supporter card and other cards to be printed

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set Qr Code Supporter Card ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Sets the supporter card QR code
function setSupporterCardQrCode(i_qr_xml, i_file_number)
{
    var b_person_two = false;

    var file_name_image = constructServerFileNameImage(i_qr_xml, i_file_number, b_person_two);

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
        alert("setSupporterCardQrCodeAfterLoad i_data_url= " + i_data_url);

        return;
    }

  // https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container

  var el_image = getElementSupporterQrCodeImage();

  el_image.src = i_data_url;

} // setSupporterCardQrCodeAfterLoad

// Sets the supporter card QR code link
function setSupporterCardQrCodeLink(i_qr_xml, i_file_number)
{
    var b_person_two = false;

    var file_name_image = constructServerFileNameLink(i_qr_xml, i_file_number, b_person_two);

    if (file_name_image.length == 0)
    {
        return;
    }

    var b_image_file = false;

    readTextFileOnServer(b_image_file, file_name_image, setSupporterCardQrCodeLinkAfterLoad);

} // setSupporterCardQrCodeLink

function setSupporterCardQrCodeLinkAfterLoad(i_data_url)
{
    console.log("Enter setSupporterCardQrCodeLinkAfterLoad");

    if (i_data_url == QrStrings.failureLoadingQrFileCode())
    {
        alert("setSupporterCardQrCodeLinkAfterLoad i_data_url= " + i_data_url);

        return;
    }

  // https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container

  var el_image = getElementAltOneShowQrImgOne();

  el_image.src = i_data_url;

} // setSupporterCardQrCodeLinkAfterLoad

function setSupporterCardQrCodePersonTwo(i_qr_xml, i_file_number)
{
    var person_two = i_qr_xml.getQrCodeNameTwo(i_file_number);

    if (person_two.length == 0)
    {
        return;
    }

    var b_person_two = true;

    var file_name_image = constructServerFileNameImage(i_qr_xml, i_file_number, b_person_two);

    if (file_name_image.length == 0)
    {
        return;
    }

    var b_image_file = true; // TODO Should be false. Only true for QR Code Show

    readTextFileOnServer(b_image_file, file_name_image, setSupporterCardQrCodeAfterLoadPersonTwo);

} // setSupporterCardQrCodePersonTwo

function setSupporterCardQrCodeAfterLoadPersonTwo(i_data_url)
{
    console.log("Enter setSupporterCardQrCodeAfterLoad");

    if (i_data_url == QrStrings.failureLoadingQrFileCode())
    {
        alert("setSupporterCardQrCodeAfterLoad i_data_url= " + i_data_url);

        return;
    }

  // https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container

  var el_image = getElementSupporterQrCodeImagePersonTwo();

  el_image.src = i_data_url;

} // setSupporterCardQrCodeAfterLoad

// Sets the supporter card QR code link for person two
function setSupporterCardQrCodeLinkPersonTwo(i_qr_xml, i_file_number)
{
    var person_two = i_qr_xml.getQrCodeNameTwo(i_file_number);

    if (person_two.length == 0)
    {
        return;
    }

    var b_person_two = true;

    var file_name_image = constructServerFileNameLink(i_qr_xml, i_file_number, b_person_two);

    if (file_name_image.length == 0)
    {
        return;
    }

    var b_image_file = false;

    readTextFileOnServer(b_image_file, file_name_image, setSupporterCardQrCodeLinkPersonTwoAfterLoad);

} // setSupporterCardQrCodeLinkPersonTwo

function setSupporterCardQrCodeLinkPersonTwoAfterLoad(i_data_url)
{
    console.log("Enter setSupporterCardQrCodeLinkPersonTwoAfterLoad");

    if (i_data_url == QrStrings.failureLoadingQrFileCode())
    {
        alert("setSupporterCardQrCodeLinkPersonTwoAfterLoad i_data_url= " + i_data_url);

        return;
    }

  // https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container

  var el_image = getElementAltOneShowQrImgTwo();

  el_image.src = i_data_url;

} // setSupporterCardQrCodeLinkPersonTwoAfterLoad

// Construct the server file name from the input code and return the name
function constructServerFileNameImage(i_qr_xml, i_file_number, i_b_person_two)
{
    var down_load_code = i_qr_xml.getDownloadOne(i_file_number);

    if (i_b_person_two)
    {
        down_load_code = i_qr_xml.getDownloadTwo(i_file_number);
    }

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

// Construct the server link file name from the input code and return the name
function constructServerFileNameLink(i_qr_xml, i_file_number, i_b_person_two)
{
    var down_load_code = i_qr_xml.getDownloadOne(i_file_number);

    if (i_b_person_two)
    {
        down_load_code = i_qr_xml.getDownloadTwo(i_file_number);
    }

    var season_start_year = i_qr_xml.getSeasonStartYear();

    if (down_load_code.length == 0)
    {
        return '';
    }

    var file_name_path_link = '';

    if (execApplicationOnServer())
    {
        file_name_path_link = 'https://jazzliveaarau.ch/QrCode/' + QrStrings.getRelativeUrlQrFileLink(season_start_year, down_load_code);
    }
    else
    {
        file_name_path_link = QrStrings.getRelativeUrlQrFileLink(season_start_year, down_load_code);
    }

    return file_name_path_link;

} // constructServerFileNameLink

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set Qr Code Supporter Card //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Supporter Card Strings ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the string that defines the div supporter card front side
function getElementDivSupporterCardFrontString(i_name_str, i_season_card_str, i_tab)
{
    var ret_card_front_str = '';

    var id_div_card_front = '';

    var cl_div_card_front = getClassDivSupporterCardFront();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab);

    ret_card_front_str = ret_card_front_str + getDivStartString(id_div_card_front, cl_div_card_front);

    ret_card_front_str = ret_card_front_str + getNewLineString();

    ret_card_front_str = ret_card_front_str + getElementDivSupporterLogoString(i_tab + 1);

    ret_card_front_str = ret_card_front_str + getNewLineString();

	ret_card_front_str = ret_card_front_str + getTabs(i_tab + 1) + getElementDivQrCodeNameString(i_name_str, i_tab) + getNewLineString();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab + 1) + getElementDivSupporterCardTextCanvasString(i_season_card_str, i_tab + 1) + getNewLineString();

    ret_card_front_str = ret_card_front_str + getNewLineString();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab);

    ret_card_front_str = ret_card_front_str + getDivEndString(id_div_card_front, cl_div_card_front);

    ret_card_front_str = ret_card_front_str + getNewLineString() + getNewLineString();

    return ret_card_front_str;

} // getElementDivSupporterCardFrontString

// Get the string that defines the div supporter card reverse side
function getElementDivSupporterCardReverseString(i_download_code_one, i_tab)
{
    var ret_card_reverse_str = '';

    var id_div_card_reverse = '';

    var cl_div_card_reverse = getClassDivSupporterCardReverse();

    ret_card_reverse_str = ret_card_reverse_str + getTabs(i_tab);

    ret_card_reverse_str = ret_card_reverse_str + getDivStartString(id_div_card_reverse, cl_div_card_reverse);

    ret_card_reverse_str = ret_card_reverse_str + getNewLineString();

    ret_card_reverse_str = ret_card_reverse_str + getTabs(i_tab);

    ret_card_reverse_str = ret_card_reverse_str + getElementDivSupporterCardReverseTextString(i_tab + 1);

    ret_card_reverse_str = ret_card_reverse_str + getNewLineString();

    ret_card_reverse_str = ret_card_reverse_str + getTabs(i_tab);

    ret_card_reverse_str = ret_card_reverse_str + getElementDivSupporterCardReverseQrShowString(i_download_code_one, i_tab + 1);

    ret_card_reverse_str = ret_card_reverse_str + getDivEndString(id_div_card_reverse, cl_div_card_reverse);

    ret_card_reverse_str = ret_card_reverse_str + getNewLineString() + getNewLineString();

    return ret_card_reverse_str;

} // getElementDivSupporterCardReverseString

// Get the string that defines the div supporter card front side for person number two
function getElementDivSupporterCardFrontPersonTwoString(i_name_person_two_str, i_season_card_str, i_tab)
{
    var ret_card_front_str = '';

    var id_div_card_front = '';

    var cl_div_card_front = getClassDivSupporterCardFront();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab);

    ret_card_front_str = ret_card_front_str + getDivStartString(id_div_card_front, cl_div_card_front);

    ret_card_front_str = ret_card_front_str + getNewLineString();

    ret_card_front_str = ret_card_front_str + getElementDivSupporterLogoString(i_tab + 1);

    ret_card_front_str = ret_card_front_str + getNewLineString();

	ret_card_front_str = ret_card_front_str + getTabs(i_tab + 1) + getElementDivQrCodeNameString(i_name_person_two_str, i_tab) + getNewLineString();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab + 1) + getElementDivSupporterCardTextCanvasPersonTwoString(i_season_card_str, i_tab + 1) + getNewLineString();

    ret_card_front_str = ret_card_front_str + getNewLineString();

    ret_card_front_str = ret_card_front_str + getTabs(i_tab);

    ret_card_front_str = ret_card_front_str + getDivEndString(id_div_card_front, cl_div_card_front);

    ret_card_front_str = ret_card_front_str + getNewLineString() + getNewLineString();

    return ret_card_front_str;

} // getElementDivSupporterCardFrontPersonTwoString

// Get the string that defines the div supporter card reverse side for person number two
function getElementDivSupporterCardReversePersonTwoString(i_download_code_two, i_tab)
{
    var ret_card_reverse_two_str = '';

    var id_div_card_reverse = '';

    var cl_div_card_reverse = getClassDivSupporterCardReverse();

    ret_card_reverse_two_str = ret_card_reverse_two_str + getTabs(i_tab);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getDivStartString(id_div_card_reverse, cl_div_card_reverse);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getNewLineString();

    ret_card_reverse_two_str = ret_card_reverse_two_str + getTabs(i_tab);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getElementDivSupporterCardReverseTextString(i_tab + 1);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getNewLineString();

    ret_card_reverse_two_str = ret_card_reverse_two_str + getTabs(i_tab);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getElementDivSupporterCardReverseQrShowString(i_download_code_two, i_tab + 1);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getDivEndString(id_div_card_reverse, cl_div_card_reverse);

    ret_card_reverse_two_str = ret_card_reverse_two_str + getNewLineString() + getNewLineString();

    return ret_card_reverse_two_str;

} // getElementDivSupporterCardReversePersonTwoString

// Get the string that defines the div text logo
function getElementDivSupporterLogoString(i_tab)
{
    var ret_text_logo_str = '';

    var id_div_text_logo = '';

    var cl_div_text_logo = getClassDivSupporterLogo();

    ret_text_logo_str = ret_text_logo_str + getTabs(i_tab);

    ret_text_logo_str = ret_text_logo_str + getDivStartString(id_div_text_logo, cl_div_text_logo);

    ret_text_logo_str = ret_text_logo_str + getNewLineString();
	
	ret_text_logo_str = ret_text_logo_str + getTabs(i_tab + 1) + QrStrings.getJazzLiveAarauTextLogo() + getNewLineString();

    ret_text_logo_str = ret_text_logo_str + getTabs(i_tab);

    ret_text_logo_str = ret_text_logo_str + getDivEndString(id_div_text_logo, cl_div_text_logo);

    ret_text_logo_str = ret_text_logo_str + getNewLineString() + getNewLineString();

    return ret_text_logo_str;

} // getElementDivSupporterLogoString

// Get the string that defines the div supporter name
function getElementDivQrCodeNameString(i_name_str, i_tab)
{
    var ret_supporter_name_str = '';

    var id_div_supporter_name = '';

    var cl_div_supporter_name = getClassDivQrCodeName();

    ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab);

    ret_supporter_name_str = ret_supporter_name_str + getDivStartString(id_div_supporter_name, cl_div_supporter_name);

    ret_supporter_name_str = ret_supporter_name_str + getNewLineString();
	
	ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab + 1) + i_name_str + getNewLineString();

    ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab);

    ret_supporter_name_str = ret_supporter_name_str + getDivEndString(id_div_supporter_name, cl_div_supporter_name);

    ret_supporter_name_str = ret_supporter_name_str + getNewLineString() + getNewLineString();

    return ret_supporter_name_str;

} // getElementDivQrCodeNameString

// Get the string that defines the div supporter card text canvas
function getElementDivSupporterCardTextCanvasString(i_season_card_str, i_tab)
{
    var ret_card_text_canvas_str = '';

    var id_div_card_text_canvas = '';

    var cl_div_card_text_canvas = getClassDivSupporterTextCanvas();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getDivStartString(id_div_card_text_canvas, cl_div_card_text_canvas);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);
	
	ret_card_text_canvas_str = ret_card_text_canvas_str + getElementDivSupporterCardTextString(i_season_card_str, i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getElementDivSupporterQrImageString(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getDivEndString(id_div_card_text_canvas, cl_div_card_text_canvas);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString() + getNewLineString();

    return ret_card_text_canvas_str;

} // getElementDivSupporterCardTextCanvasString

// Get the string that defines the div supporter card text canvas person two
function getElementDivSupporterCardTextCanvasPersonTwoString(i_season_card_str, i_tab)
{
    var ret_card_text_canvas_str = '';

    var id_div_card_text_canvas = '';

    var cl_div_card_text_canvas = getClassDivSupporterTextCanvas();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getDivStartString(id_div_card_text_canvas, cl_div_card_text_canvas);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);
	
	ret_card_text_canvas_str = ret_card_text_canvas_str + getElementDivSupporterCardTextString(i_season_card_str, i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getTabs(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getElementDivSupporterQrImagePersonTwoString(i_tab);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString();

    ret_card_text_canvas_str = ret_card_text_canvas_str + getDivEndString(id_div_card_text_canvas, cl_div_card_text_canvas);

    ret_card_text_canvas_str = ret_card_text_canvas_str + getNewLineString() + getNewLineString();

    return ret_card_text_canvas_str;

} // getElementDivSupporterCardTextCanvasPersonTwoString

// Get the string that defines the div supporter card text
function getElementDivSupporterCardTextString(i_season_card_str, i_tab)
{
    var ret_card_text_str = '';

    var id_div_season_text = '';

    var cl_div_season_text = getClassDivSupporterCardText();

    ret_card_text_str = ret_card_text_str + getTabs(i_tab);

    ret_card_text_str = ret_card_text_str + getDivStartString(id_div_season_text, cl_div_season_text);

    ret_card_text_str = ret_card_text_str + getNewLineString();
	
	ret_card_text_str = ret_card_text_str + getTabs(i_tab + 1) + i_season_card_str + getNewLineString();

    ret_card_text_str = ret_card_text_str + getTabs(i_tab);

    ret_card_text_str = ret_card_text_str + getDivEndString(id_div_season_text, cl_div_season_text);

    ret_card_text_str = ret_card_text_str + getNewLineString() + getNewLineString();

    return ret_card_text_str;

} // getElementDivSupporterCardTextString

// Get the string that defines the div supporter card QR code canvas
function getElementDivSupporterQrImageString(i_tab)
{
    var ret_supporter_card_qr_image_str = '';

    var id_div_supporter_card_qr_image = '';

    var cl_div_supporter_card_qr_image = getClassDivSupporterImageQrCode();
	
	var id_supporter_card_qr_image = getIdSupporterQrCodeImage();

    var cl_supporter_card_qr_image = getClassSupporterQrCodeImage();

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getTabs(i_tab);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getDivStartString(id_div_supporter_card_qr_image, cl_div_supporter_card_qr_image);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getNewLineString();

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getTabs(i_tab + 1);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + '<img ' + ' id= "' + id_supporter_card_qr_image + '" '  + ' class= "' + cl_supporter_card_qr_image + '" ' + '>';

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getDivEndString(id_div_supporter_card_qr_image, cl_div_supporter_card_qr_image);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getNewLineString() + getNewLineString();

    return ret_supporter_card_qr_image_str;

} // getElementDivSupporterQrImageString

// Get the string that defines the div supporter card QR code canvas
function getElementDivSupporterQrImagePersonTwoString(i_tab)
{
    var ret_supporter_card_qr_image_str = '';

    var id_div_supporter_card_qr_image = '';

    var cl_div_supporter_card_qr_image = getClassDivSupporterImageQrCode();
	
	var id_supporter_card_qr_image = getIdSupporterQrCodeImagePersonTwo();

    var cl_supporter_card_qr_image = getClassSupporterQrCodeImage();

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getTabs(i_tab);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getDivStartString(id_div_supporter_card_qr_image, cl_div_supporter_card_qr_image);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getNewLineString();

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getTabs(i_tab + 1);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + '<img ' + ' id= "' + id_supporter_card_qr_image + '" '  + ' class= "' + cl_supporter_card_qr_image + '" ' + '>';

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getDivEndString(id_div_supporter_card_qr_image, cl_div_supporter_card_qr_image);

    ret_supporter_card_qr_image_str = ret_supporter_card_qr_image_str + getNewLineString() + getNewLineString();

    return ret_supporter_card_qr_image_str;

} // getElementDivSupporterQrImagePersonTwoString

// Get the string that defines the div supporter card reverse text
function getElementDivSupporterCardReverseTextString(i_tab)
{
	var reverse_text = QrStrings.getSupporterCardReverseSideText();
	
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
function getElementDivSupporterCardReverseQrShowString(i_download_code, i_tab)
{
	var reverse_qr_show_str = QrStrings.getSupporterCardReverseQrCode(i_download_code);
	
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
function getClassDivSupporterImageQrCode()
{
    return 'cl_div_supporter_card_qr_image';

} // getClassDivSupporterImageQrCode


// Get the element supporter card canvas
function getElementSupporterQrCodeImage()
{
    return document.getElementById(getIdSupporterQrCodeImage());

} // getElementDivQrPrintPageOne

// Returns the identity of the supporter card canvas
function getIdSupporterQrCodeImage()
{
    return 'id_supporter_card_qr_image';

} // getIdSupporterQrCodeImage

// Get the element supporter card canvas person two
function getElementSupporterQrCodeImagePersonTwo()
{
    return document.getElementById(getIdSupporterQrCodeImagePersonTwo());

} // getElementDivQrPrintPageOne

// Returns the identity of the supporter card canvas person two
function getIdSupporterQrCodeImagePersonTwo()
{
    return 'id_supporter_card_qr_image_person_two';

} // getIdSupporterQrCodeImagePersonTwo

// Returns the class for the QR code canvas
function getClassSupporterQrCodeImage()
{
    return 'cl_supporter_card_qr_image';

} // getClassSupporterQrCodeImage

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