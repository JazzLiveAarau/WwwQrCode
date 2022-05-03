// File: QrCodeShow.js
// Date: 2022-05-03
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
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for show a QR code file
function onloadQrCodeShow()
{

    hideShowQrCodeImage();
 
} // onloadQrCodeShow

// User clicked button show a QR file
function clickShowQrFile()
{
    var file_name_server = getServerFileNameFromInputElement();

    if (file_name_server.length == 0)
    {
        return;
    }

    if (!execApplicationOnServer())
    {
        return;
    }

    readTextFileOnServer(file_name_server);

} // clickShowQrFile

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Show Qr File Functions ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Show the QR code after getting the file data from the server
function showQrCodeAfterLoadFromServer(i_data_url)
{
    var el_image = getElementQrCodeImage();

    el_image.width = '210';

    el_image.height = '210';

    el_image.src = i_data_url;

    displayShowQrCodeImage();

} // showQrCodeAfterLoadFromServer

// Construct the server file name from the input code and return the name
function getServerFileNameFromInputElement()
{
    var el_input_code = getElementInputCodeForQrCodeFile();

    var code_for_qr_file_str = el_input_code.value;

    code_for_qr_file_str = code_for_qr_file_str.trim();

    if (code_for_qr_file_str.length == 0)
    {
        alert("Bitte Code für die QR Code eingeben");

        return '';
    }

    var code_for_qr_file_int = parseInt(code_for_qr_file_str);

    if (code_for_qr_file_int < 0 || code_for_qr_file_int > 70)
    {
        alert("Code für QR Code ist weniger als 0 oder grösser als 70");

        return '';        
    }

    var supporter_str = 'index_' + code_for_qr_file_int.toString();

    var file_name_path = 'https://jazzliveaarau.ch/SupporterQrCodes/' + getServerQrFileName(supporter_str);

    return file_name_path;

} // getServerFileNameFromInputElement


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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Read Text File On Server //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Read text file on server
// https://stackoverflow.com/questions/4533018/how-to-read-a-text-file-from-server-using-javascript
function readTextFileOnServer(i_file_server) 
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

                showQrCodeAfterLoadFromServer(all_text);
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
    return 'id_input_code';

} // getIdInputCodeForQrCodeFile

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////
