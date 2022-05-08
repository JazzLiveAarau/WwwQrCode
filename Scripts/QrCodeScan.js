// File: QrCodeScan.js
// Date: 2022-05-08
// Author: Gunnar Lidén

// File content
// =============
//
// QR Code scanning functions

// References
// https://github.com/mebjas/html5-qrcode
// https://blog.minhazav.dev/QR-and-barcode-scanner-using-html-and-javascript/
// https://blog.minhazav.dev/research/html5-qrcode#scan-using-file

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// QR scanner object. Instance of Html5QrcodeScanner
var g_html5_qr_code_scanner = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Scanning was successful
function onScanSuccess(i_decoded_text, i_decode_result) 
{
    console.log(`Code scanned = ${i_decoded_text}`, i_decode_result);

    // alert(`Code scanned = ${i_decoded_text}`, i_decode_result);

    // g_html5_qr_code_scanner.clear();

    var el_div_result = getElementDivQrCodeReaderResult();

    el_div_result.innerHTML = `${i_decoded_text}`, i_decode_result;

    displayDivQrCodeNextScan();

    hideDivQrCodeReader();

    addLineBreaksScanResult();

} // onScanSuccess

function scanNextQrCode()
{
    var el_div_result = getElementDivQrCodeReaderResult();

    el_div_result.innerHTML = '';

    hideDivQrCodeNextScan();

    displayDivQrCodeReader();

    // startScanHideElements();

} // scanNextQrCode

// Start scanning and hide some elements
function startScanHideElements()
{
    g_html5_qr_code_scanner.render(onScanSuccess);

    hideDivLinkToGitHub();

    hideAnchorScanImage();

    hideDivQrCodeNextScan();

} // startScanHideElements

function onloadQrCodeScan()
{
    addLineBreaksScanResult(); 

    // displayDivQrCodeNextScan();
}

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Add line breaks
// TODO Move to class QrStrings
function addLineBreaksScanResult()
{
    var el_div_result = getElementDivQrCodeReaderResult();

    result_string = el_div_result.innerHTML;

    if (result_string.length == 0)
    {
        return;
    }

    category_supporter = QrStrings.getQrCategorySupporterString();

    category_sponsor = QrStrings.getQrCategorySponsorString();

    var ret_str = '';

    var index_name_start = -1;

    if (result_string.indexOf(category_supporter) == 0)
    {
        ret_str = ret_str + category_supporter + '<br>';

        index_name_start = category_supporter.length + 1;
    }
    else if (result_string.indexOf(category_sponsor) == 0)
    {
        ret_str = ret_str + category_supporter + '<br>';

        index_name_start = category_supporter.length + 1;
    }

    if (ret_str.length == 0)
    {
        return;
    }

    var index_twenty = result_string.indexOf('20');

    if (index_twenty < 0)
    {
        ret_str = ret_str + result_string.substring(ret_str.length + 1);

        return ret_str;
    }

    // var n_name_chars = index_twenty - index_name_start;

    var name_part = result_string.substring(index_name_start, index_twenty - 1);

    ret_str = ret_str + name_part + '<br>' + result_string.substring(index_twenty);

    el_div_result.innerHTML = ret_str;

    return ret_str;

} // addLineBreaksScanResult

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Init QR Code Scanner //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create the instance of class QRious and set global parameter g_object_generate_qr_code
function initQrCodeScan()
{
    g_html5_qr_code_scanner = new Html5QrcodeScanner
    (
        getIdDivQrCodeReader(), 

        { 
            fps: 10,
            qrbox: 250 
        }
    );

    startScanHideElements();
  
} // initQrCodeScan

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Init QR Code Scanner ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide Display Functions ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hide the div with the link to the GitHub website
function hideDivLinkToGitHub()
{
    var el_div_qr_scanner = getElementDivQrCodeReader();

    var el_divs = el_div_qr_scanner.getElementsByTagName("div");

    for (var index_div=0; index_div < el_divs.length; index_div++)
    {
        var el_div = el_divs[index_div];

        var inner_html = el_div.innerHTML;

        var index_caption = inner_html.indexOf("Code Scanner");

        if (index_caption >= 0)
        {
            el_div.style.display = 'none';

            break;
        }
    }

} // hideDivLinkToGitHub

// Hide the anchor to scan an image
function hideAnchorScanImage()
{
    var el_div_qr_scanner = getElementDivQrCodeReader();

    var el_anchors = el_div_qr_scanner.getElementsByTagName("a");

    for (var index_a=0; index_a < el_anchors.length; index_a++)
    {
        var el_anchor = el_anchors[index_a];

        var inner_html = el_anchor.innerHTML;

        var index_caption = inner_html.indexOf("Scan an Image File");

        if (index_caption >= 0)
        {
            el_anchor.style.display = 'none';

            break;
        }
    }

} // hideAnchorScanImage

// Hides the div for the next scan
function hideDivQrCodeNextScan()
{
    var el_div_next_scan = getElementDivQrCodeNextScan();

    el_div_next_scan.style.display = 'none';

} // hideDivQrCodeNextScan

// Display the div for the next scan
function displayDivQrCodeNextScan()
{
    var el_div_next_scan = getElementDivQrCodeNextScan();

    el_div_next_scan.style.display = 'block';

} // displayDivQrCodeNextScan

// Hides the div for the QR reader
function hideDivQrCodeReader()
{
    var el_div_qr_reader = getElementDivQrCodeReader();

    el_div_qr_reader.style.display = 'none';

} // hideDivQrCodeReader

// Display the div for the QR reader
function displayDivQrCodeReader()
{
    var el_div_qr_reader = getElementDivQrCodeReader();

    el_div_qr_reader.style.display = 'block';

} // displayDivQrCodeReader

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide Display Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the div element for the QR code reader
function getElementDivQrCodeReader()
{
    return document.getElementById(getIdDivQrCodeReader());

} // getElementDivQrCodeReader

// Returns the identity of the diy element for the QR code reader
function getIdDivQrCodeReader()
{
    return 'id_div_qr_reader';

} // getIdDivQrCodeReader

// Returns the class of the div element for the QR code reader
function getClassDivQrCodeReader()
{
    return 'cl_div_qr_reader';

} // getClassDivQrCodeReader

// Get the div element for the QR code reader logo
function getElementDivQrCodeReaderLogo()
{
    return document.getElementById(getIdDivQrCodeReaderLogo());

} // getElementDivQrCodeReaderLogo

// Returns the identity of the diy element for the QR code reader logo
function getIdDivQrCodeReaderLogo()
{
    return 'id_div_qr_reader_logo';

} // getIdDivQrCodeReaderLogo

// Returns the class of the div element for the QR code reader logo
function getClassDivQrCodeReaderLogo()
{
    return 'cl_div_qr_reader_logo';

} // getClassDivQrCodeReaderLogo

// Get the div element for the QR code reader result
function getElementDivQrCodeReaderResult()
{
    return document.getElementById(getIdDivQrCodeReaderResult());

} // getElementDivQrCodeReaderResult

// Returns the identity of the diy element for the QR code reader result
function getIdDivQrCodeReaderResult()
{
    return 'id_div_qr_reader_result';

} // getIdDivQrCodeReaderResult

// Returns the class of the div element for the QR code reader result
function getClassDivQrCodeReaderResult()
{
    return 'cl_div_qr_reader_result';

} // getClassDivQrCodeReaderResult

// Get the div element for the QR code next scan
function getElementDivQrCodeNextScan()
{
    return document.getElementById(getIdDivQrCodeNextScan());

} // getElementDivQrCodeNextScan

// Returns the identity of the diy element for the QR code next scan
function getIdDivQrCodeNextScan()
{
    return 'id_div_next_qr_scan';

} // getIdDivQrCodeNextScan

// Returns the class of the div element for the QR code next scan
function getClassDivQrCodeNextScan()
{
    return 'cl_div_next_qr_scan';

} // getClassDivQrCodeNextScan


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////