// File: QrStrings.js
// Date: 2022-05-04
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

    // Get supporter XML file name
    static getSupporterXmlFileName()
    {
        return 'Supporter.xml';

    } // getSupporterXmlFileName

    // Get QR files XML file name
    static getQrFilesXmlFileName()
    {
        return 'QrFiles.xml';

    } // getQrFilesXmlFileName

    // Returns the name and path for the QR image file
    static getRelativeUrlQrFileImage(i_season_start_year, i_download_code_str)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        rel_path = rel_path + 'QrCodeImage_' + i_download_code_str + '.txt';

        return rel_path;

    } // getRelativeUrlQrFileImage

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
