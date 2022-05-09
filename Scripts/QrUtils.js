// File: QrCodeUtils.js
// Date: 2022-05-08
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
        // i_callback_function_name();

        alert("createFileIfNotExistingWithJQueryPostFunction Programming error")
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

        return;
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
        console.log("Download codes arenot equal");

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

// Get the download code from the local storage
function getDownloadCodeFromLocalStorage()
{
    var download_code = localStorage.getItem(this.g_local_storage_qr_image_download_code);

    if (download_code == null)
    {
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

    if (image_data_url == null)
    {
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

    if (qr_text_data == null)
    {
        return "";
    }
    else
    {
        return qr_text_data;
    }

} // getQrTextDataFromLocalStorage

// Saves QR code data in local storage
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
///////////////////////// Start Debug Display XML /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// For debug display XML as text
function debugDisplayXmlAsText()
{
    var b_execute_server = execApplicationOnServer();
    
    if (!b_execute_server)
    {
        var el_div_display_xml = getElementDivDisplayXml();

        el_div_display_xml.style.display = 'block';

        var el_display_xml_text_area = getElementDisplayXmlTextArea();

        displayQrFilesXmlOnScreen(el_display_xml_text_area);

        displayDivQrDisplayXml();
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

// Get the div for the display of the XML file
function getElementDivDisplayXml()
{
    return document.getElementById(getIdDivDisplayXml());

} // getElementDivDisplayXml

// Returns the identity of the div for the display of the XML file
function getIdDivDisplayXml()
{
    return 'id_qr_div_display_xml';

} // getIdDivDisplayXml

// Returns the class of the div for the display of the XML file
function getClassDivDisplayXml()
{
    return 'cl_qr_div_display_xml';

} // getClassDivDisplayXml


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Debug Display XML /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
