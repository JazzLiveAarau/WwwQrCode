// File: QrCodeUtils.js
// Date: 2022-06-13
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
function createFileIfNotExistingWithJQueryPostFunction(i_file_name, i_content_string, i_callback_function_name)
{
    QrProgress.Append('Enter createFileIfNotExistingWithJQueryPostFunction ');

    QrProgress.Append('i_file_name= ' + i_file_name);

    var b_execute_server = execApplicationOnServer();

    QrProgress.Append('b_execute_server ' + b_execute_server.toString());

    if (!b_execute_server)
    {
        i_callback_function_name();

        alert("createFileIfNotExistingWithJQueryPostFunction Programming error")

        return false;
    }

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
                i_callback_function_name();
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
///////////////////////// Start Internet Available ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// https://stackoverflow.com/questions/189430/detect-the-internet-connection-is-offline
// https://www.codespeedy.com/check-internet-connection-status-in-javascript/
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// https://www.w3schools.com/jsref/met_win_clearinterval.asp

class Internet
{
    constructor(i_callback_function_on, i_callback_function_off, i_interval)
    {
        this.m_callback_function_on = i_callback_function_on;

        this.m_callback_function_off = i_callback_function_off;

        this.m_interval = i_interval;

        this.m_interval_function = null;

        //2022-06-12 this.startIntervalFunction();

    } 

    isAvailable()
    {
        var b_available = window.navigator.onLine;

        return b_available;

    } // isAvailable

    startIntervalFunction()
    {
        this.m_interval_function = setInterval(this.execIntervalFunction, this.m_interval, this.m_callback_function_on, this.m_callback_function_off);

    } // startIntervalFunction

    execIntervalFunction(callback_function_on, callback_function_off)
    {
        var b_available = window.navigator.onLine;

        if (b_available)
        {
            callback_function_on();
        }
        else
        {
            callback_function_off();
        }

    } // execIntervalFunction

    stopIntervalFunction()
    {
        clearInterval(this.m_interval_function);
    }

} // InternetConnection

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Internet Available ///////////////((/////////////////////////
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

// Returns the season start year
function getSeasonStartYear(i_callback_season_start_year)
{

    if (!execApplicationOnServer())
    {
        alert("getSeasonStartYear Season start year set to 2021");

        i_callback_season_start_year(2021);

        return;
    }


    var ret_start_year = -12345;

    var date_object = new Date();

    var current_year = date_object.getFullYear();

    var qr_file_xml_this_year = QrStrings. getRelativeUrlSupporterXmlFile(current_year);

    var qr_file_xml_prev_year = QrStrings. getRelativeUrlSupporterXmlFile(current_year - 1);

    console.log("getSeasonStartYear qr_file_xml_this_year= " + qr_file_xml_this_year);

    console.log("getSeasonStartYear qr_file_xml_prev_year= " + qr_file_xml_prev_year);

    // QrProgress.Append(qr_file_xml_prev_year);

    seasonStartYearJQueryPost(current_year.toString(), qr_file_xml_this_year, qr_file_xml_prev_year, i_callback_season_start_year);

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

                console.log("seasonStartYearJQueryPost data_year_str= " + data_year_str.trim());
				
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
///////////////////////// Start Read Text File On Server //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Read text file on server
// https://stackoverflow.com/questions/4533018/how-to-read-a-text-file-from-server-using-javascript
function readTextFileOnServer(i_b_image_file, i_file_server, i_callback_function_name) 
{
    console.log("Enter readTextFileOnServer");

    console.log("i_file_server= " + i_file_server);

    var raw_file = new XMLHttpRequest();

    raw_file.open("GET", i_file_server, false);

    raw_file.onreadystatechange = function ()
    {
        if(raw_file.readyState === 4)
        {
            if(raw_file.status === 200 || raw_file.status == 0)
            {
                console.log("File exists");

                var all_text = raw_file.responseText;

                if (i_b_image_file)
                {
                    setQrImageDataUrlInLocalStorageIfNotSet(all_text);
                }
                else
                {
                    setQrTextDataInLocalStorageIfNotSet(all_text);
                }

                i_callback_function_name(all_text);
            }
            else if (raw_file.status == 404)
            {
                console.log("File is missing");

                i_callback_function_name(QrStrings.failureLoadingQrFileCode());
            }
        }
    }

    raw_file.send(null);

} // readTextFileOnServer

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Read Text File On Server ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Send Email ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Send email with the JQuery function "post"
// The callback function returns false for failure, i.e. i_callback_function_name(false)
//    
function sendEmailWithJQueryPostFunction(i_to, i_bcc, i_title_htm, i_msg_htm, i_callback_function_name)
{
    $.post
      ("Php/SendEmail.php", 
        {
            a_subject: i_title_htm,
            a_msg: i_msg_htm,
            a_to: i_to,
            a_bcc: i_bcc
        },
        function(data_send, status_send)
        {	
            if (status_send == "success")
            {
                // alert("data_send= >" + data_send + "<");

                // Additional characters in data_send ????? TODO
                // includes() does not work in Internet Explorer
                var b_ok = false;
                var b_failure = false;
                if (data_send.indexOf("MailIsSent") >= 0)
                {
                    b_ok = true;
                }
                if (data_send.indexOf("MailIsNotSent") >= 0)
                {
                    b_failure = true;
                }
                
                if (b_ok)			
                {
                    // alert("E-Mail ist gesendet");

                    i_callback_function_name(true);
                }
                else if (b_failure)
                {
                    alert("E-Mail ist nicht gesendet");

                    i_callback_function_name(false);
                }
                else 
                {
                    alert("Fehler: data_send= " + data_send);

                    i_callback_function_name(false);
                }			

            } // success
            else
            {
				alert("Execution of SendEmail.php failed. status_send= " + status_send);

				i_callback_function_name(false);
            }   
			

        });	
	
} // sendEmailWithJQueryPostFunction

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Send Email //////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Local Storage Edit Text ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set the edit supporter text in local storage
function setEditSupporterTextInLocalStorage(i_edit_supporter_text)
{
    localStorage.setItem(this.g_qr_local_edit_supporter_text, i_edit_supporter_text);

} // setEditSupporterTextInLocalStorage

// Get the edit supporter text in local storage
function getEditSupporterTextFromLocalStorage()
{
    var edit_supporter_text = localStorage.getItem(this.g_qr_local_edit_supporter_text);

    if (edit_supporter_text == null)
    {
        return "";
    }
    else
    {
        return edit_supporter_text;
    }

} // getEditSupporterTextFromLocalStorage

// Deletes the edit supporter text in local storage
function deleteEditSupporterTextInLocalStorage()
{
	localStorage.setItem(this.g_qr_local_edit_supporter_text, '');
	
} // deleteEditSupporterTextInLocalStorage

// Returns true if the edit supporter text in local storage is defined
function isDefinedEditSupporterTextInLocalStorage()
{
    var edit_supporter_text =  getEditSupporterTextFromLocalStorage();

    if (edit_supporter_text.length > 0)
    {
        return true;
    }
    else
    {
        return false;
    }

} // isDefinedEditSupporterTextInLocalStorage

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Local Storage Edit Text /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Local Storage Functions ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Returns true if QR code data is saved in local storage
function isQrCodeDataSavedInLocalStorage()
{
    var download_code = getDownloadCodeFromLocalStorage();

    var image_data_url = getQrImageDataUrlFromLocalStorage();

    var text_data = getQrTextDataFromLocalStorage();

    if (download_code.length > 0 && image_data_url.length > 0 && text_data.length > 0)
    {
        console.log("isQrCodeDataSavedInLocalStorage Qr Data is saved");

        return true;
    }
    else
    {
        console.log("isQrCodeDataSavedInLocalStorage Qr Data is not saved");

        return false;
    }

} // isQrCodeDataSavedInLocalStorage

// Initialize local storage data if the input download not is equal to the stored code
function initQrCodeDataInLocalStorageIfDownloadCodesNotEqual(i_download_code)
{
    console.log("Enter initQrCodeDataInLocalStorageIfDownloadCodesNotEqual");

    var local_download_code = getDownloadCodeFromLocalStorage();

    if (i_download_code != local_download_code)
    {
        console.log("Download codes are not equal");

        initQrCodeDataInLocalStorage(i_download_code);
    }
    else
    {
        console.log("Download codes are equal");
    }

} // initQrCodeDataInLocalStorageIfDownloadCodesNotEqual

// Set the QR image data URL in the local storage if not set
function setQrImageDataUrlInLocalStorageIfNotSet(i_image_data_url)
{
    console.log("Enter setQrImageDataUrlInLocalStorageIfNotSet");

    var local_image_data_url = getQrImageDataUrlFromLocalStorage();

    if (local_image_data_url.length == 0)
    {
        console.log("A new value is set");

        setQrImageDataUrlInLocalStorage(i_image_data_url)
    }
    else
    {
        console.log("A new value is not set");
    }

} // setQrImageDataUrlInLocalStorageIfNotSet

// Set the QR image data URL in the local storage if not set
function setQrTextDataInLocalStorageIfNotSet(i_text_data)
{
    console.log("Enter setQrTextDataInLocalStorageIfNotSet");

    var local_text_data = getQrTextDataFromLocalStorage();

    if (local_text_data != i_text_data)
    {
        console.log("A new value is set");

        setQrTextDataInLocalStorage(i_text_data);
    }
    else
    {
        console.log("A new value is not set");
    }

} // setQrTextDataInLocalStorageIfNotSet

// Set the download code in the local storage
function setDownloadCodeInLocalStorage(i_download_code)
{
    localStorage.setItem(this.g_local_storage_qr_image_download_code, i_download_code);

} // setDownloadCodeInLocalStorage

// Set the QR image data URL in the local storage
function setQrImageDataUrlInLocalStorage(i_image_data_url)
{
    localStorage.setItem(this.g_local_storage_qr_image_data_url, i_image_data_url);

} // setQrImageDataUrlInLocalStorage

// Set the QR image data URL in the local storage
function setQrTextDataInLocalStorage(i_text_data)
{
    localStorage.setItem(this.g_local_storage_qr_text_data, i_text_data);

} // setQrTextDataInLocalStorage

// Set the season start year in the local storage
function setSeasonStartYearInLocalStorage(i_season_start_year_int)
{
    localStorage.setItem(this.g_local_storage_qr_season_start_year, i_season_start_year_int.toString());

} // setSeasonStartYearInLocalStorage

// Get the download code from the local storage
function getDownloadCodeFromLocalStorage()
{
    var download_code = localStorage.getItem(this.g_local_storage_qr_image_download_code);

    if (download_code == null || download_code.length == 0)
    {
        console.log("getDownloadCodeFromLocalStorage Error not in local storage. Empty string is returned");

        return "";
    }
    else
    {
        return download_code;
    }

} // getDownloadCodeFromLocalStorage

// Get the QR image data URL from the local storage
function getQrImageDataUrlFromLocalStorage()
{
    var image_data_url = localStorage.getItem(this.g_local_storage_qr_image_data_url);

    if (image_data_url == null || image_data_url.length == 0)
    {
        console.log("getQrImageDataUrlFromLocalStorage Error not in local storage. Empty string is returned");

        return "";
    }
    else
    {
        return image_data_url;
    }

} // getQrImageDataUrlFromLocalStorage

// Get the QR image data URL from the local storage
function getQrTextDataFromLocalStorage()
{
    var qr_text_data = localStorage.getItem(this.g_local_storage_qr_text_data);

    if (qr_text_data == null || qr_text_data.length == 0)
    {
        console.log("getQrTextDataFromLocalStorage Error not in local storage. Empty string is returned");

        return "";
    }
    else
    {
        return qr_text_data;
    }

} // getQrTextDataFromLocalStorage

// Get the season start year as integer from the local storage
function getSeasonStartYearAsIntFromLocalStorage()
{
    var season_start_year_str = localStorage.getItem(this.g_local_storage_qr_season_start_year);

    if (season_start_year_str == null || season_start_year_str.length == 0)
    {
        console.log("getSeasonStartYearAsIntFromLocalStorage Error Returned start year is -12345");

        return -12345;
    }
    else
    {
        console.log("getSeasonStartYearAsIntFromLocalStorage Returned start year is " + season_start_year_str);

        return parseInt(season_start_year_str);
    }

} // getSeasonStartYearAsIntFromLocalStorage

// Deletes QR code data in local storage
function deleteQrCodeDataInLocalStorage()
{
    console.log("Enter deleteQrCodeDataInLocalStorage");

    localStorage.setItem(this.g_local_storage_qr_image_download_code, '');

    localStorage.setItem(this.g_local_storage_qr_image_data_url, '');

    localStorage.setItem(this.g_local_storage_qr_text_data, '');

} // deleteQrCodeDataInLocalStorage

// Initialize QR code data in local storage
function initQrCodeDataInLocalStorage(i_download_code)
{
    console.log("Enter initQrCodeDataInLocalStorage");

    localStorage.setItem(this.g_local_storage_qr_image_download_code, i_download_code);

    localStorage.setItem(this.g_local_storage_qr_image_data_url, "");

    localStorage.setItem(this.g_local_storage_qr_text_data, "");

} // initQrCodeDataInLocalStorage

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Local Storage Functions /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Season Color //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Initial season color
var g_qr_season_color_init = QrStrings.getQrCodeColorInitValue();

// windows.localStorage key for the season color
var g_local_storage_qr_season_color = 'qr_season_color';

// Set the season color in the local storage
function setSeasonColorInLocalStorage(i_season_color)
{
    localStorage.setItem(this.g_local_storage_qr_season_color, i_season_color);

} // setSeasonColorInLocalStorage

// Get the download code from the local storage
function getSeasonColorInLocalStorage()
{
    var season_color = localStorage.getItem(this.g_local_storage_qr_season_color);

    if (season_color == null)
    {
        return g_qr_season_color_init;
    }
    else
    {
        return season_color;
    }

} // getSeasonColorInLocalStorage

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Season Color ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Active Execution //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Active execution Email, Post (Mail), Print (Batch)
var g_active_execution = null;

// Sets the active execution Email, Post (Mail), Print (Batch)
function setActiveExecution(i_execution_str)
{
    if (!checkActiveExecution(i_execution_str))
    {
        return;
    }

    g_active_execution = i_execution_str;

    console.log('setActiveExecution g_active_execution= ' + g_active_execution);

} // setActiveExecution

// Returns the active execution Email, Post (Mail), Print (Batch)
function getActiveExecution()
{
    return g_active_execution;
    
} // getActiveExecution

// Returns true if the active execution Email, Post (Mail), Print (Batch)
function checkActiveExecution(i_execution_str)
{
    var ret_b_active = false;

    if (i_execution_str == QrStrings.getQrExecutionUndefinedString())
    {
        ret_b_active = true;
    }
    else if (i_execution_str == QrStrings.getQrExecutionEmailString())
    {
        ret_b_active = true;
    }
    else if (i_execution_str == QrStrings.getQrExecutionPostString())
    {
        ret_b_active = true;
    }
    else if (i_execution_str == QrStrings.getQrExecutionPrintString())
    {
        ret_b_active = true;
    }
    if (!ret_b_active)
    {
        alert("checkActiveExecution Not an implemented execution= " + i_execution_str);
    }

    return ret_b_active;

} // checkActiveExecution

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Active Execution ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Active Category ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Active category Supporter, Sponsor, Musician, Free, ....
var g_active_category = null;

// Sets the active category Supporter, Sponsor, Musician, Free, ....
function setActiveCategory(i_category_str)
{
    if (!checkActiveCategory(i_category_str))
    {
        return;
    }

    g_active_category = i_category_str;

    console.log('setActiveCategory g_active_category= ' + g_active_category);

} // setActiveCategory

// Returns the active category Supporter, Sponsor, Musician, Free, ....
function getActiveCategory()
{
    return g_active_category;
    
} // getActiveCategory

// Returns true if the input category is Supporter, Sponsor, Musician, Free, ....
function checkActiveCategory(i_category_str)
{
    var ret_b_active = false;

    if (i_category_str == QrStrings.getQrCategoryUndefinedString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategorySupporterString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategorySponsorString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategoryMusicianString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategoryMemberString())
    {
        ret_b_active = true;
    }
    else if (i_category_str == QrStrings.getQrCategoryFreeString())
    {
        ret_b_active = true;
    }

    if (!ret_b_active)
    {
        alert("checkActiveCategory Not an implemented category= " + i_category_str);
    }

    return ret_b_active;

} // checkActiveCategory

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Active Category /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Debug Display XML /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// For debug display XML as text
function debugDisplayXmlAsText()
{
    var b_execute_server = execApplicationOnServer();
    
    if (!b_execute_server)
    {
        var el_div_display_xml = getElementDivQrDisplayXml();

        el_div_display_xml.style.display = 'block';

        var el_display_xml_text_area = getElementDisplayXmlTextArea();

        displayQrFilesXmlOnScreen(el_display_xml_text_area);

        hideDivQrDisplayXml(); // Temporarely

        // Temporarely displayDivQrDisplayXml();
    }

} // debugDisplayXmlAsText

// Displays the XML file on the screen if the input control is set
function displayQrFilesXmlOnScreen(i_el_display_ctrl)
{
  if (null == i_el_display_ctrl)
  {
    return;
  }

  var b_html = false;

  var xml_str = xmlToFormattedString(g_qr_files_xml_object.getXmlObject(), b_html);
	
  if (null != xml_str)
  {
    i_el_display_ctrl.innerHTML = xml_str;
  }

} // displayQrFilesXmlOnScreen

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

// Hide the div qr display xml
function hideDivQrDisplayXml()
{
    var el_image = getElementDivQrDisplayXml();

    el_image.style.display = 'none';

} // hideDivQrDisplayXml

// Display the div qr display xml
function displayDivQrDisplayXml()
{
    var el_image = getElementDivQrDisplayXml();

    el_image.style.display = 'block';

} // displayDivQrDisplayXml

// Get the input element for the div qr display xml
function getElementDivQrDisplayXml()
{
    return document.getElementById(getIdDivQrDisplayXml());

} // getElementDivQrDisplayXml

// Returns the identity of the div qr display xml
function getIdDivQrDisplayXml()
{
    return 'id_qr_div_display_xml';

} // getIdDivQrDisplayXml

// Get the text area element for the display of the XML file
function getElementDisplayXmlTextArea()
{
    return document.getElementById(getIdDisplayXmlTextArea());

} // getElementDisplayXmlTextArea

// Returns the identity of the text area element for the display of the XML file
function getIdDisplayXmlTextArea()
{
    return 'id_display_xml_text_area';

} // getIdDisplayXmlTextArea

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Debug Display XML /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
