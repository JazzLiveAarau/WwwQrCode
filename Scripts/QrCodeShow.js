// File: QrCodeShow.js
// Date: 2022-05-07
// Author: Gunnar Lidén

// File content
// =============
//
// Show a QR Code file

// References
// Store and get image from local store. Use toDataURL(type, quality)
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/

// https://www.mediaevent.de/javascript/canvas-to-data-url.html

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Season start year
var g_season_start_year_show = -12345;

var g_gr_strings = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for show a QR code file
function onloadQrCodeShow()
{
    g_gr_strings = new QrStrings();

    hideShowQrCodeImage();

    hideDivQrCodeShowText();

    hideDivButtonShowNewQrFile();

    getSeasonStartYear(callbackSeasonStartYearShow);
 
} // onloadQrCodeShow

// Callback function retrieving the season start year
function callbackSeasonStartYearShow(i_season_start_year)
{
    g_season_start_year_show = i_season_start_year;

} // callbackSeasonStartYearShow

// User clicked button show a QR file
function clickShowQrFile()
{
    var file_name_image = getServerFileNameImageFromInputElement();

    if (file_name_image.length == 0)
    {
        return;
    }

    readTextFileOnServer(file_name_image, showQrCodeImageAndTextAfterLoadFromServer);

    displayShowQrCodeImage();

    displayDivQrCodeShowText();

    hideDivInputDownloadCode();

    hideDivButtonShowQrFile();

    displayDivButtonShowNewQrFile();

} // clickShowQrFile

// User clicked download a new QR code
function clickNewQrFile()
{
    hideShowQrCodeImage();
    
    displayDivInputDownloadCode();

    hideDivQrCodeShowText();

    displayDivButtonShowQrFile();

    hideDivButtonShowNewQrFile();

} // clickNewQrFile

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Show Qr File Functions ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Show the QR code image after getting the file data from the server
function showQrCodeImageAndTextAfterLoadFromServer(i_data_url)
{
    var el_image = getElementQrCodeImage();

    el_image.width = '210';

    el_image.height = '210';

    el_image.src = i_data_url;

    displayShowQrCodeImage();

    var file_name_text = getServerFileNameTextFromInputElement();

    if (file_name_text.length == 0)
    {
        return;
    }

    readTextFileOnServer(file_name_text, showQrCodeTextAfterLoadFromServer);

} // showQrCodeImageAndTextAfterLoadFromServer

// Show the QR code text after getting the file data from the server
function showQrCodeTextAfterLoadFromServer(i_content_file)
{
    var display_text = QrStrings.getTextForQrCodeShow(i_content_file);

    var el_text = getElementDivQrCodeShowText();

    el_text.innerHTML = display_text;

} // showQrCodeTextAfterLoadFromServer

// Construct the server file name from the input code and return the name
function getServerFileNameImageFromInputElement()
{
    var down_load_code = getDownloadCodeFromInputElement();

    var file_name_path_image = '';

    if (execApplicationOnServer())
    {
        file_name_path_image = 'https://jazzliveaarau.ch/QrCode/' + QrStrings.getRelativeUrlQrFileImage(g_season_start_year_show, down_load_code);
    }
    else
    {
        file_name_path_image = QrStrings.getRelativeUrlQrFileImage(g_season_start_year_show, down_load_code);
    }

    return file_name_path_image;

} // getServerFileNameImageFromInputElement

// Construct the server file name from the input code and return the name
function getServerFileNameTextFromInputElement()
{
    var down_load_code = getDownloadCodeFromInputElement();

    var file_name_path_text = '';

    if (execApplicationOnServer())
    {
        file_name_path_text = 'https://jazzliveaarau.ch/QrCode/' + QrStrings.getRelativeUrlQrFileText(g_season_start_year_show, down_load_code);
    }
    else
    {
        file_name_path_text = QrStrings.getRelativeUrlQrFileText(g_season_start_year_show, down_load_code);
    }

    return file_name_path_text;

} // getServerFileNameTextFromInputElement

// Get the dowload code from the input element
function getDownloadCodeFromInputElement()
{
    var ret_code_str = '';

    var el_input_code = getElementInputCodeForQrCodeFile();

    var code_for_qr_file_str = el_input_code.value;

    code_for_qr_file_str = code_for_qr_file_str.trim();

    if (code_for_qr_file_str.length == 0)
    {
        alert("Bitte Code für die QR Code eingeben");

        return ret_code_str;
    }

    if (code_for_qr_file_str.length != 8)
    {
        alert("Der Code hat " + code_for_qr_file_str.length.toString() + ' Zeichen und nicht 8');

        return ret_code_str;
    }

    ret_code_str = code_for_qr_file_str;
    
    return ret_code_str;

} // getDownloadCodeFromInputElement


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Show Qr File Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hide the QR code image
function hideShowQrCodeImage()
{
    var el_image = getElementQrCodeImage();

    el_image.style.display = 'none';

} // hideShowQrCodeImage


// Display the QR code image
function displayShowQrCodeImage()
{
    var el_image = getElementQrCodeImage();

    el_image.style.display = 'block';

} // displayShowQrCodeImage

// Hide the div QR code text
function hideDivQrCodeShowText()
{
    var el_image = getElementDivQrCodeShowText();

    el_image.style.display = 'none';

} // hideDivQrCodeShowText

// Display the div QR code text
function displayDivQrCodeShowText()
{
    var el_image = getElementDivQrCodeShowText();

    el_image.style.display = 'block';

} // displayDivQrCodeShowText

// Hide the div input download code
function hideDivInputDownloadCode()
{
    var el_image = getElementDivInputDownloadCode();

    el_image.style.display = 'none';

} // hideDivInputDownloadCode

// Display the div input download code
function displayDivInputDownloadCode()
{
    var el_image = getElementDivInputDownloadCode();

    el_image.style.display = 'block';

} // displayDivInputDownloadCode

// Hide the div button show QR code
function hideDivButtonShowQrFile()
{
    var el_button = getElementDivButtonShowQrFile();

    el_button.style.display = 'none';

} // hideDivButtonShowQrFile

// Display the div button show QR code
function displayDivButtonShowQrFile()
{
    var el_button = getElementDivButtonShowQrFile();

    el_button.style.display = 'block';

} // displayDivButtonShowQrFile

// Hide the div button show new QR code
function hideDivButtonShowNewQrFile()
{
    var el_button = getElementDivButtonShowNewQrFile();

    el_button.style.display = 'none';

} // hideDivButtonShowNewQrFile

// Display the div button show new QR code
function displayDivButtonShowNewQrFile()
{
    var el_button = getElementDivButtonShowNewQrFile();

    el_button.style.display = 'block';

} // displayDivButtonShowNewQrFile

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Read Text File On Server //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Read text file on server
// https://stackoverflow.com/questions/4533018/how-to-read-a-text-file-from-server-using-javascript
function readTextFileOnServer(i_file_server, i_callback_function_name) 
{
    var raw_file = new XMLHttpRequest();

    raw_file.open("GET", i_file_server, false);

    raw_file.onreadystatechange = function ()
    {
        if(raw_file.readyState === 4)
        {
            if(raw_file.status === 200 || raw_file.status == 0)
            {
                var all_text = raw_file.responseText;

                i_callback_function_name(all_text);
            }
        }
    }

    raw_file.send(null);

} // readTextFileOnServer

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Read Text File On Server ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the div element for the QR code image
function getElementDivQrCodeImage()
{
    return document.getElementById(getIdDivQrCodeImage());

} // getElementDivQrCodeImage

// Returns the identity of the div element for the QR code image
function getIdDivQrCodeImage()
{
    return 'id_div_qr_code_image';

} // getIdDivQrCodeImage

// Returns the class of the div element for the QR code image
function getClassDivQrCodeImage()
{
    return 'cl_div_qr_code_image';

} // getClassDivQrCodeImage

// Get the element for the QR code image
function getElementQrCodeImage()
{
    return document.getElementById(getIdQrCodeImage());

} // getElementQrCodeImage

// Returns the identity of the image element for the QR code image
function getIdQrCodeImage()
{
    return 'id_qr_code_image';

} // getIdQrCodeImage

// Get the input element for the code for the QR file
function getElementInputCodeForQrCodeFile()
{
    return document.getElementById(getIdInputCodeForQrCodeFile());

} // getElementInputCodeForQrCodeFile

// Returns the identity of the for the code for the QR file
function getIdInputCodeForQrCodeFile()
{
    return 'id_input_download_code';

} // getIdInputCodeForQrCodeFile

// Get the input element for the div button show QR code
function getElementDivButtonShowQrFile()
{
    return document.getElementById(getIdDivButtonShowQrFile());

} // getElementDivButtonShowQrFile

// Returns the identity of the the div button show QR code
function getIdDivButtonShowQrFile()
{
    return 'id_div_button_show_qr_file';

} // getIdDivButtonShowQrFile

// Get the input element for the div QR code text
function getElementDivQrCodeShowText()
{
    return document.getElementById(getIdDivQrCodeShowText());

} // getElementDivQrCodeShowText

// Returns the identity of the the div QR code text
function getIdDivQrCodeShowText()
{
    return 'id_div_qr_code_show_text';

} // getIdDivQrCodeShowText

// Get the input element for the div input download code
function getElementDivInputDownloadCode()
{
    return document.getElementById(getIdDivInputDownloadCode());

} // getElementDivInputDownloadCode

// Returns the identity of the the div input download code
function getIdDivInputDownloadCode()
{
    return 'id_div_input_download_code';

} // getIdDivInputDownloadCode

// Get the input element for the div button show new QR code
function getElementDivButtonShowNewQrFile()
{
    return document.getElementById(getIdDivButtonShowNewQrFile());

} // getElementDivButtonShowNewQrFile

// Returns the identity of the the div button show new QR code
function getIdDivButtonShowNewQrFile()
{
    return 'id_div_button_show_new_qr_file';

} // getIdDivButtonShowNewQrFile

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////
