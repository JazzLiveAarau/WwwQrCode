// File: QrCodeFile.js
// Date: 2022-05-04
// Author: Gunnar Lidén

// File content
// =============
//
// Creation of QR Code files


// References
// Store and get image from local store. Use toDataURL(type, quality)
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Instance of the class SupporterXml
var g_supporter_xml_object = null;

// Path and start part file name of the QR file
var g_qr_start_part_file_name = 'QrFiles/Season_2021_2022/QrCode_';
        

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for QR code files
function onloadQrCodeFiles()
{
    // Temporary QQQQQ hideQrCodeImage();

    var season_start_year = 2021; // TODO

    g_supporter_xml_object = new SupporterXml(afterLoadOfSupporterXmlFile, season_start_year);

} // onloadQrCodeFiles

// User clicked button create QR files
function clickCreateQrFiles()
{
    createQrFilesForAllSupporters();

} // clickCreateQrFiles

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create File Functions /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create QR files for all supporters
// 1. Generate QR codes for all supporters and set the array g_supporter_image_data
//    Call of generateQrCodeAllSupporters
function createQrFilesForAllSupporters()
{
    var qr_case = 'DataUrl'; 

    var canvas_size = 210;

    qr_code_season_str = '2021-2022';

    generateQrCodeAllSupporters(qr_case, canvas_size, qr_code_season_str);

    saveAllQrFilesOnServer();

} // createQrFilesForAllSupporters

function saveAllQrFilesOnServer()
{
    var n_end = g_supporter_data_url.length;

    for (var index_supporter=0; index_supporter < n_end; index_supporter++)
    {
        saveOneQrFileOnServer(index_supporter);
    }

} // saveAllQrFilesOnServer

// Saves one QR file on the server.
function saveOneQrFileOnServer(i_index_supporter)
{
    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        return;
    }

    var supporter_str = 'index_' + i_index_supporter.toString();

    var xml_content_str = g_supporter_data_url[i_index_supporter];

    var file_name_path = getServerQrFileName(supporter_str);

    if (!saveFileWithJQueryPostFunction(file_name_path, xml_content_str))
    {
        alert("saveOneQrFileOnServer Saving QR file failed");
    }

} // saveOneQrFileOnServer

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create File Functions ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Basic Save File Function  /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// Function copied from FlyerSave.js

// Save a file with the JQuery function "post"
// Please refer to SaveFileOnServer.php for a detailed description of "post"
// Input parameter i_file_name is the server file name
// Input parameter i_content_string is the content of the file
// The function returns false for failure
function saveFileWithJQueryPostFunction(i_file_name, i_content_string)
{
  var file_name = '../' + i_file_name;

    $.post
      ('Php/SaveFileOnServer.php',
        {
          file_content: i_content_string,
          file_name: file_name
        },
        function(data_save,status_save)
		{
            if (status_save == "success")
            {
                // alert(data_save);
            }
            else
            {
				alert("Execution of SaveFileOnServer.php failed");
				return false;
            }          
        } // function
      ); // post
	  
    return true;	  
	
} // saveFileWithJQueryPostFunction


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Basic Save File Function  ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Utility Functions /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns the name and path for the QR file
function getServerQrFileName(i_supporter_str)
{
    var start_path = g_qr_start_part_file_name;

    var full_name = g_qr_start_part_file_name + i_supporter_str + '.txt';

    return full_name;

} // getServerQrFileName

// Returns true if the application runs on the server
function execApplicationOnServer()
{
    var current_base = window.location.href;

    var server_url = 'jazzliveaarau.ch';

    var index_url = current_base.indexOf(server_url);

    if (index_url >= 0) 
    {
        return true;
    }
    else
    {
        return false;
    }

} // execApplicationOnServer

// Returns a random download code
function getRandomDownloadCode()
{
    // https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
    
    var allowed_chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    var string_length = 8;

    var ret_string = '';

    for (var char_number = 1; char_number <= string_length; char_number++) 
    {
        var random_index = Math.floor(Math.random() * allowed_chars.length);

        ret_string = ret_string + allowed_chars.substring(random_index, random_index + 1);
    }

    return ret_string;

} // getRandomDownloadCode

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Utility Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

