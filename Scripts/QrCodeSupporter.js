// File: QrCodeSupporter.js
// Date: 2022-05-18
// Author: Gunnar Lidén

// File content
// =============
//
// QR Code generation functions

// <canvas>
//----------
//
// The HTML <canvas> tag is used to draw graphics, on the fly, via scripting (usually JavaScript).
//
// getContext() 
// The getContext() function returns the drawing context - which is an object that has all the 
// drawing properties and functions you use to draw on the canvas. The getContext() function is 
// the function that you use to get access to the canvas tags 2D drawing functions.
//
// getImageData()	
// Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
//
// toDataURL(type, quality)
// toDataURL() ist eine Methode des Canvas und wandelt das Bild im Canvas in eine Bitmap 
// (64 bit encoded PNG URL) um, um das Bild zu speichern oder in einem img-Tag anzuzeigen. 


// References
// https://www.studytonight.com/post/javascript-qr-code-generator
// https://cdnjs.com/libraries/qrious

// Problem not filling canvas
// https://github.com/neocotic/qrious/issues/105
// https://stackoverflow.com/questions/52825735/generate-and-download-qr-code-from-string-with-qrious-additional-white-spaces

// HTML Canvas Reference
// https://www.w3schools.com/tags/ref_canvas.asp
// HTML canvas getImageData() Method
// https://www.w3schools.com/tags/canvas_getimagedata.asp
// toDataURL(type, quality)
// https://www.mediaevent.de/javascript/canvas-to-data-url.html
// Store and get image from local store. Use toDataURL(type, quality)
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Instance of the class QRious defined in file /QrCodeLib/qrious.js
var g_object_generate_qr_code = null;

// The size of the canvas
var g_supporter_canvas_size = 84;

// Set the size of the canvas
function setSupporterCanvasSize(i_size)
{
    g_supporter_canvas_size = i_size;

} // setSupporterCanvasSize

// Get the size of the canvas
function getSupporterCanvasSize()
{
    return g_supporter_canvas_size;

} // getSupporterCanvasSize

// Season string for the QR code
var g_qr_code_season_str = '2021-2022';

// Set season string for the QR code
function setQrCodeSeasonString(i_qr_code_season_str)
{
    g_qr_code_season_str = i_qr_code_season_str;

} // setQrCodeSeasonString

// Get season string for the QR code
function getQrCodeSeasonString()
{
    return g_qr_code_season_str;

} // getQrCodeSeasonString

// Image data for all QR codes
var g_supporter_image_data = [];

// Image data url (Bitmap) for all QR codes
var g_supporter_data_url = [];

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Generate Qr Code Supporter ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Generate QR codes for all supporters and set the array g_supporter_image_data
// i_qr_case = 'ImageData' or 'DataUrl'
function generateQrCodeAllSupporters(i_qr_case, i_canvas_size, i_qr_code_season_str)
{
    QrProgress.Append('Enter generateQrCodeAllSupporters');
    QrProgress.Append('Case= ' + i_qr_case + ' i_qr_code_season_str= ' + i_qr_code_season_str);

    g_supporter_image_data = [];

    setSupporterCanvasSize(i_canvas_size);

    setQrCodeSeasonString(i_qr_code_season_str);

    var season_str = getQrCodeSeasonString();

    var canvas_context = getCanvasContextQrCode();

    for (var index_name=0; index_name < g_supporter_data_array.length; index_name++)
    {
        var supporter_data = g_supporter_data_array[index_name];

        var name_str = supporter_data.getFirstAndFamilyName();

        if (i_qr_case == 'ImageData')
        {
            var image_data = generateQrCodeOneSupporterImageData(name_str, season_str);

            g_supporter_image_data[index_name] = image_data;
        }
        else if (i_qr_case == 'DataUrl')
        {
            var data_url = generateQrCodeOneSupporterDataUrl(name_str, season_str);

            g_supporter_data_url[index_name] = data_url;            
        }
        else
        {
            alert("generateQrCodeAllSupporters Not an implemented case= " + i_qr_case);

            return;
        }
    }

    if (i_qr_case == 'ImageData')
    {
        QrProgress.Append('g_supporter_image_data Length= ' + g_supporter_image_data.length);
    }
    else if (i_qr_case == 'DataUrl')
    {
        QrProgress.Append('g_supporter_data_url Length= ' + g_supporter_data_url.length);
    }

    QrProgress.Append('Exit generateQrCodeAllSupporters');

} // generateQrCodeAllSupporters

// Generate QR code for one supporter, set canvas and return image data
function generateQrCodeOneSupporterImageData(i_name_str, i_season_str)
{
    var qr_text = i_name_str + ' ' + i_season_str;

    g_object_generate_qr_code.set
    (
        {
            foreground: getSeasonColorInLocalStorage(),
            size: getSupporterCanvasSize(),
            value: qr_text
        }

    );

    var canvas_context = getCanvasContextQrCode();

    var image_data = canvas_context.getImageData(0, 0, getSupporterCanvasSize(), getSupporterCanvasSize());

    return image_data;

} // generateQrCodeOneSupporterImageData

// Generate QR code for one supporter, set canvas and return data URL (Bitmap)
function generateQrCodeOneSupporterDataUrl(i_name_str, i_season_str)
{
    var qr_text = i_name_str + ' ' + i_season_str;

    g_object_generate_qr_code.set
    (
        {
            foreground: getSeasonColorInLocalStorage(),
            size: getSupporterCanvasSize(),
            value: qr_text
        }

    );

    var el_canvas =  getElementCanvasQrCode();

    var image_data_url = el_canvas.toDataURL("image/png");

    return image_data_url;

} // generateQrCodeOneSupporterDataUrl


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Generate Qr Code Supporter //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Init QR Code Generator ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create the instance of class QRious and set global parameter g_object_generate_qr_code
function initQrCodeGenerator()
{
    g_object_generate_qr_code = new QRious
    (
        {
            element: getElementCanvasQrCode(),
            size: getSupporterCanvasSize(),
            value: 'https://studytonight.com'
        }
    );
} // initQrCodeGenerator

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Init QR Code Generator //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hide the QR code image used for the generation of the codes
function hideQrCodeImage()
{
    var el_qr_code = getElementCanvasQrCode();

    el_qr_code.style.display = 'none';

} // hideQrCodeImage

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the canvas context for the QR code
function getCanvasContextQrCode()
{
    return getElementCanvasQrCode().getContext("2d");

} // getCanvasContextQrCode

// Get the canvas element for the QR code
function getElementCanvasQrCode()
{
    return document.getElementById(getIdCanvasQrCode());

} // getElementCanvasQrCode

// Returns the identity of the canvas element for the QR code
function getIdCanvasQrCode()
{
    return 'id_canvas_qr_code';

} // getIdCanvasQrCode

// Returns the class of the canvas element for the QR code
function getClassCanvasQrCode()
{
    return 'cl_canvas_qr_code';

} // getClassCanvasQrCode

// Returns the class of the div canvas element for the QR code
function getClassDivCanvasQrCode()
{
    return 'cl_div_qr_canvas';

} // getClassDivCanvasQrCode

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////