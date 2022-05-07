// File: QrStrings.js
// Date: 2022-05-07
// Author: Gunnar Lidén

// File content
// =============
//
// Strings and some parameter values for all QR code web pages

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

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Qr Code Strings ///////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    static getQrCategorySupporterString()
    {
        return 'Supporter';

    } // getQrCategorySupporterString

    static getQrCategorySponsorString()
    {
        return 'Sponsor';
        
    } // getQrCategorySponsorString

    static getQrCategoryMusicianString()
    {
        return 'Musiker';
        
    } // getQrCategoryMusicianString

    static getQrCategoryMemberString()
    {
        return 'Vorstand';
        
    } // getQrCategoryMemberString

    static getQrCategoryFreeString()
    {
        return 'Gratis';
        
    } // getQrCategoryFreeString

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Qr Code Strings /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the text to be displayed in QrCodeShow.htm (in telephone)
    static getTextForQrCodeShow(i_content_file)
    {
        var display_text = '';

        var n_underscore = 0;
    
        for (var index_char = 0; index_char < i_content_file.length; index_char++)
        {
            var current_char = i_content_file.substring(index_char, index_char + 1);
    
            if (current_char == "_")
            {
                display_text = display_text + "<br>";
    
                n_underscore = n_underscore + 1;
    
                if (n_underscore == 2)
                {
                    display_text = display_text + 'Saison ';
                }
                else if (n_underscore == 3)
                {
                    break;
                    // display_text = display_text + 'Code ';
                }
            }
            else
            {
                display_text = display_text + current_char;
            }
        }

        return display_text;
    
    } // getTextForQrCodeShow


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Parameter Values //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // The limit contribution value to become a supporter
    static getSupporterContributionLimitValue()
    {
        return 60;

    } // getSupporterContributionLimitValue

    // Get canvas size for QR code data url.
    // This size is for the QR codes that will be stored as text files in
    // the directory QrFiles/Season_NNNNN_MMMMM
    static getCanvasSizeForDataUrl()
    {
        return 210;

    } // getCanvasSizeForDataUrl

    // Get canvas size for QR code image
    // This size is for the printing of all QR codes
    static getCanvasSizeForImageData()
    {
        return 81;

    } // getCanvasSizeForImageData

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Parameter Values ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////


} // QrStrings


