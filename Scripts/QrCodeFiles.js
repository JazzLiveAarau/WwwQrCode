// File: QrCodeFile.js
// Date: 2022-05-05
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

// Instance of the class SupporterXml handling the XML file Supporter,xml
var g_supporter_xml_object = null;

// Instance of the class QrFilesXml handling the XML file QrFiles,xml
var g_qr_files_xml_object = null;

var g_season_start_year = -12345;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for QR code files
function onloadQrCodeFiles()
{
    QrProgress.Msg("Enter onloadQrCodeFiles");

    g_gr_strings = new QrStrings();

    hideQrCodeImage();

    getSeasonStartYear(callbackSeasonStartYearFiles);

} // onloadQrCodeFiles

// Callback after determining season start year with a PHP function
function callbackSeasonStartYearFiles(i_season_start_year)
{
    QrProgress.Append('callbackSeasonStartYearFiles ' + i_season_start_year.toString());

    g_season_start_year = i_season_start_year;

    createQrFileXmlIfNotAlreadyExisting(g_season_start_year);

    g_qr_files_xml_object = new QrFilesXml(afterLoadOfQrFilesXml, g_season_start_year);

} // callbackSeasonStartYearFiles

// Afier loading QrFiles.xml
function afterLoadOfQrFilesXml()
{
    QrProgress.Append("Enter afterLoadOfQrFilesXml");

    g_supporter_xml_object = new SupporterXml(afterLoadOfSupporterXmlFile, g_season_start_year);

} // afterLoadOfQrFilesXml

// Callback function after load of XML file Supporter.xml
function afterLoadOfSupporterXmlFile(i_supporter_xml)
{
    QrProgress.Append('Enter afterLoadOfSupporterXmlFile');

    //QQQQ setTestArrayFromXmlObject(i_supporter_xml);

    setSupporterDataArrayFromXmlObject(i_supporter_xml);

} // afterLoadOfSupporterXmlFile

// User clicked button create QR files
function clickCreateQrFiles()
{
    createQrFilesForAllSupporters();

} // clickCreateQrFiles

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr Image And Text Files ////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create QR files for all supporters
// 1. Generate QR codes for all supporters and set the array g_supporter_image_data
//    Call of generateQrCodeAllSupporters
function createQrFilesForAllSupporters()
{
    QrProgress.Msg('Enter createQrFilesForAllSupporters');

    var qr_case = 'DataUrl'; 

    var canvas_size = 210;

    qr_code_season_str = '2021-2022';

    generateQrCodeAllSupporters(qr_case, canvas_size, qr_code_season_str);

    saveAllQrFilesOnServer();

    QrProgress.Append('Exit createQrFilesForAllSupporters');

} // createQrFilesForAllSupporters

function saveAllQrFilesOnServer()
{
    QrProgress.Append('Enter saveAllQrFilesOnServer');

    var n_end = g_supporter_data_url.length;

    for (var index_supporter=0; index_supporter < n_end; index_supporter++)
    {
        saveOneQrFileOnServer(index_supporter);
    }

    var b_execute_server = execApplicationOnServer();

    if (b_execute_server)
    {
        QrProgress.Append('Number of created files ' + n_end.toString());
    }
    else
    {
        QrProgress.Append('Number files ' + n_end.toString() + '. But not created (exec VSC)');
    }


    QrProgress.Append('Exit saveAllQrFilesOnServer');

} // saveAllQrFilesOnServer

// Saves one QR file on the server.
function saveOneQrFileOnServer(i_index_supporter)
{
    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        return;
    }

    var download_code_str = 'index_' + i_index_supporter.toString();

    var xml_content_str = g_supporter_data_url[i_index_supporter];

    var file_name_path = QrStrings.getRelativeUrlQrFileImage(g_season_start_year, download_code_str);

    if (!saveFileWithJQueryPostFunction(file_name_path, xml_content_str))
    {
        alert("saveOneQrFileOnServer Saving QR file failed");
    }

} // saveOneQrFileOnServer

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Qr Image And Text Files //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr Files Xml File //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create the QR files XML file (QrFiles.xml) if not already existing
// TODO Check first that the directory exist. The directory is created by the Windows
//      application Adressen
function createQrFileXmlIfNotAlreadyExisting(i_season_start_year)
{
    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        return;
    }

    var rel_path_xml_file = QrStrings.getRelativeUrlQrFilesXmlFile(i_season_start_year);

    var xml_content = '<AllQrFiles></AllQrFiles>';

    if (!createFileIfNotExistingWithJQueryPostFunction(rel_path_xml_file, xml_content))
    {
        alert("createQrFileXmlIfNotAlreadyExisting Failure");
    }

} // createQrFileXmlIfNotAlreadyExisting

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Qr Files Xml File //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Basic PHP Functions  //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// This function copied from FlyerSave.js
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

// Create a file if not existing with the JQuery function "post"
// Please refer to CreateFileOnServerIfNotExisting.php for a detailed description of "post"
// Input parameter i_file_name is the server file name
// Input parameter i_content_string is the content of the file
// The function returns false for failure
function createFileIfNotExistingWithJQueryPostFunction(i_file_name, i_content_string)
{
  var file_name = '../' + i_file_name;

    $.post
      ('Php/CreateFileOnServerIfNotExisting.php',
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
				alert("Execution of CreateFileOnServerIfNotExisting.php failed");
				return false;
            }          
        } // function
      ); // post
	  
    return true;	  
	
} // createFileIfNotExistingWithJQueryPostFunction

// Determine if a file exists using the JQuery function "post"
// Please refer to ExistsFileOrDirectory.php for a detailed description of "post"
// Input parameter i_file_name is a server file name
// The function returns true if the directory or the file exists
function existsFileJQueryPost(i_file_name, i_callback_function_name)
{
  var file_name = '../' + i_file_name;

    $.post
      ('Php/ExistsFile.php',
        {
          file_name: file_name
        },
        function(data_exists,status_save)
		{
            if (status_save == "success")
            {
                //alert(data_exists);

                QrProgress.Append('data_exists = ' + data_exists.trim());
                
				if (data_exists.trim() == "TRUE")
				{
					//return true;
                    i_callback_function_name(true);
				}
				else
				{
					//return false;
                    i_callback_function_name(false);
				}
            }
            else
            {
				alert("Execution of ExistsFileOrDirectory.php failed");
				
				return false;
            }          
        } // function
      ); // post
	  
	
} // existsFileJQueryPost

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Basic PHP Functions  ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Utility Functions /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hide the div qr show progress
function hideDivQrShowProgress()
{
    var el_image = getElementDivQrShowProgress();

    el_image.style.display = 'none';

} // hideDivQrShowProgress

// Display the div qr show progress
function displayDivQrShowProgress()
{
    var el_image = getElementDivQrShowProgress();

    el_image.style.display = 'block';

} // displayDivQrShowProgress

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

