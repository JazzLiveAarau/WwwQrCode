// File: QrCodeUtils.js
// Date: 2022-05-05
// Author: Gunnar Lidén

// File content
// =============
//
// Utility functions for all web pages

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

                // QrProgress.Append('data_exists = ' + data_exists.trim());
                
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
///////////////////////// Start Exec Application //////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Exec Application ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Random Functions //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

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
///////////////////////// End Random Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class QrProgress //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class showing progress messages
// Please note that it is not nessary to create an instance of this class
// The constructor makes nothing and the member functions are static
class QrProgress
{
    constructor()
    {
        this.m_el_div_show_progress = getElementDivQrShowProgress();
    }

    static Msg(i_message_str)
    {
        var el_qr_progress = getElementDivQrShowProgress();

        el_qr_progress.innerHTML = i_message_str;
    }

    static Append(i_append_str)
    {   
        var el_qr_progress = getElementDivQrShowProgress();

        var existing_message_str =  el_qr_progress.innerHTML;

        el_qr_progress.innerHTML = existing_message_str + '<br>' +  i_append_str;
    }

} // QrProgress

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class QrProgress ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Season Start Year /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Reurns the season start year
function getSeasonStartYear(i_callbackSeasonStartYear)
{
    // QrProgress.Append('Enter getSeasonStartYear');


    if (!execApplicationOnServer())
    {
        alert("getSeasonStartYear Season start year set to 2021");

        i_callbackSeasonStartYear(2021);

        return true;
    }


    var ret_start_year = -12345;

    var date_object = new Date();

    var current_year = date_object.getFullYear();

    var qr_file_xml_this_year = QrStrings. getRelativeUrlSupporterXmlFile(current_year);

    var qr_file_xml_prev_year = QrStrings. getRelativeUrlSupporterXmlFile(current_year - 1);

    // QrProgress.Append(qr_file_xml_prev_year);

    seasonStartYearJQueryPost(current_year.toString(), qr_file_xml_this_year, qr_file_xml_prev_year, i_callbackSeasonStartYear);

} // getSeasonStartYear

// Get the season start year using JQuery function "post"
// Please refer to SeasonStartYear.php for a detailed description of "post"
// Input parameter i_file_name is a server file name
// The function returns true if the directory or the file exists
function seasonStartYearJQueryPost(i_current_year, i_file_name_this, i_file_name_prev, i_callback_function_name)
{
    // QrProgress.Append('Enter seasonStartYearJQueryPost');

    var current_year = i_current_year;
    var file_name_this = '../' + i_file_name_this;
    var file_name_prev = '../' + i_file_name_prev;

    $.post
      ('Php/SeasonStartYear.php',
        {
		  current_year: current_year,
          file_name_this: file_name_this,
		  file_name_prev: file_name_prev
        },
        function(data_year_str,status_save)
		{
            if (status_save == "success")
            {
                //alert(data_year_str);

                // QrProgress.Append('data_year_str = ' + data_year_str.trim());
				
				var season_start_year = parseInt(data_year_str.trim());
				
				i_callback_function_name(season_start_year);

                return true;
              
            }
            else
            {
				alert("Execution of SeasonStartYear.php failed");
				
				return false;
            }          
        } // function
      ); // post
	  
	
} // seasonStartYearJQueryPost


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Season Start Year ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the input element for the div qr show progress
function getElementDivQrShowProgress()
{
    return document.getElementById(getIdDivQrShowProgress());

} // getElementDivQrShowProgress

// Returns the identity of the div qr show progress
function getIdDivQrShowProgress()
{
    return 'id_div_qr_show_progress';

} // getIdDivQrShowProgress

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////
