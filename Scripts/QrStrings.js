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

/*

*/
