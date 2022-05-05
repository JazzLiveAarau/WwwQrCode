// File: QrStrings.js
// Date: 2022-05-05
// Author: Gunnar Lidén

// File content
// =============
//
// Strings for all QR code web pages

// Class corresponding to the XML element <Supporter> in the file Supporter.xml
class QrStrings
{
    // Creates the instance of the class
    constructor() 
    {

    } // constructor

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Directories And Files /////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get path to the subdirectory for files and XML files (/www/QrCode/QrFiles)
    static getPathSubdirectoryQrFiles()
    {
        return 'QrFiles/'; 

    } // getPathSubdirectoryQrFiles

    // Get start part of name for subdirectory season. Years will be added 2021-2022
    static getStartPartSubdirectorySeason()
    {
        return 'Season_'; 

    } // getStartPartSubdirectorySeason

    // Get the subdirectory season name 
    static getSubdirectorySeasonName(i_season_start_year)
    {
        var subdir_season = this.getStartPartSubdirectorySeason() + 
                     i_season_start_year.toString() + '_' +
                    (i_season_start_year + 1).toString() + '/';

        return subdir_season; 

    } // getSubdirectorySeasonName

    /*QQQQQQ
    // Returns the path to the subdirectory season e.g. QrCode/QrFiles/Season_2021_2022 
    static getRelativeUrlSubdirectorySeasonName(i_season_start_year)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        var path_length = rel_path.length;

        //Test QQQQ  rel_path = rel_path.substring(0, path_length - 1); // Remove last slash

        return rel_path;

    } // getRelativeUrlSubdirectorySeasonName
    QQQQ*/

    // Get supporter XML file name
    static getSupporterXmlFileName()
    {
        return 'Supporter.xml';

    } // getSupporterXmlFileName

   // Returns the path to the QR files XML file e.g. QrCode/QrFiles/Season_2021_2022/QrFiles.xml 
   static getRelativeUrlSupporterXmlFile(i_season_start_year)
   {
       var rel_path = '';

       rel_path = rel_path + this.getPathSubdirectoryQrFiles();

       rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

       rel_path = rel_path + this.getSupporterXmlFileName();

       return rel_path;

   } // getRelativeUrlSupporterXmlFile

    // Get QR files XML file name
    static getQrFilesXmlFileName()
    {
        return 'QrFiles.xml';

    } // getQrFilesXmlFileName

    // Returns the path to the QR files XML file e.g. QrCode/QrFiles/Season_2021_2022/QrFiles.xml 
    static getRelativeUrlQrFilesXmlFile(i_season_start_year)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        rel_path = rel_path + this.getQrFilesXmlFileName();

        return rel_path;

    } // getRelativeUrlQrFilesXmlFile

    // Returns the name and path for the QR image file
    static getRelativeUrlQrFileImage(i_season_start_year, i_download_code_str)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        rel_path = rel_path + 'QrCodeImage_' + i_download_code_str + '.txt';

        return rel_path;

    } // getRelativeUrlQrFileImage

    // Returns the name and path for the QR text file
    static getRelativeUrlQrFileText(i_season_start_year, i_download_code_str)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        rel_path = rel_path + 'QrCodeText_' + i_download_code_str + '.txt';

        return rel_path;

    } // getRelativeUrlQrFileText

    // Returns the name and path for the QR files XML file (QrFiles.xml)
    static getRelativeUrlQrFilesXmlFile(i_season_start_year)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        rel_path = rel_path + this.getQrFilesXmlFileName();

        return rel_path;

    } // getRelativeUrlQrFilesXmlFile


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Directories And Files ///////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start XML Strings ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get flag value that a node value not have been set
    static getXmlNodeValueNotYetSet()
    {
        return 'NotYetSetNodeValue';

    } // getXmlNodeValueNotYetSet

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End XML Strings /////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////


} // QrStrings

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
///////////////////////// Start Season Start Year /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Reurns the season start year
function getSeasonStartYear(i_callbackSeasonStartYear)
{
    QrProgress.Append('Enter getSeasonStartYear');

    var ret_start_year = -12345;

    var date_object = new Date();

    var current_year = date_object.getFullYear();

    var qr_file_xml_this_year = QrStrings. getRelativeUrlSupporterXmlFile(current_year);

    var qr_file_xml_prev_year = QrStrings. getRelativeUrlSupporterXmlFile(current_year - 1);

    QrProgress.Append(qr_file_xml_prev_year);

    seasonStartYearJQueryPost(current_year.toString(), qr_file_xml_this_year, qr_file_xml_prev_year, i_callbackSeasonStartYear);

} // getSeasonStartYear

// Get the season start year using JQuery function "post"
// Please refer to SeasonStartYear.php for a detailed description of "post"
// Input parameter i_file_name is a server file name
// The function returns true if the directory or the file exists
function seasonStartYearJQueryPost(i_current_year, i_file_name_this, i_file_name_prev, i_callback_function_name)
{
    QrProgress.Append('Enter seasonStartYearJQueryPost');

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

                QrProgress.Append('data_year_str = ' + data_year_str.trim());
				
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

/*

*/
