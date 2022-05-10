// File: QrStrings.js
// Date: 2022-05-10
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
    ///////////////////////// Start Strings Qr Files //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Caption for the button QR Files send or print supporter cards
    static getCaptionButtonQrFilesSupporter()
    {
        return 'Supporter';

    } // getCaptionButtonQrFilesSupporter

    // Title (tooltip) for the button QR Files send or print supporter cards
    static getTitleButtonQrFilesSupporter()
    {
        return 'Supporter-Karten als E-Mail oder Brief senden';

    } // getTitleButtonQrFilesSupporter

    // Caption for the button QR Files send or print sponsor cards
    static getCaptionButtonQrFilesSponsor()
    {
        return 'Sponsor';

    } // getCaptionButtonQrFilesSponsor

    // Title (tooltip) for the button QR Files send or print sponsor cards
    static getTitleButtonQrFilesSponsor()
    {
        return 'Sponsor Gratis-Eintritte als E-Mail oder Brief senden';

    } // getTitleButtonQrFilesSponsor

    // Caption for the button QR Files send or print free cards
    static getCaptionButtonQrFilesFree()
    {
        return 'Gratis';

    } // getCaptionButtonQrFilesFree

    // Title (tooltip) for the button QR Files send or print free cards
    static getTitleButtonQrFilesFree()
    {
        return 'Gratis-Eintritte als E-Mail oder Brief senden';

    } // getTitleButtonQrFilesFree    

    // Caption for the button QR Files send or print musician cards
    static getCaptionButtonQrFilesMusician()
    {
        return 'Musiker';

    } // getCaptionButtonQrFilesMusician

    // Title (tooltip) for the button QR Files send or print musician cards
    static getTitleButtonQrFilesMusician()
    {
        return 'Musiker Gratis-Eintritte als E-Mail oder Brief senden';

    } // getTitleButtonQrFilesMusician    

    // Label for the files dropdown
    static getLabelQrFilesDropdown()
    {
        return 'Person wählen';

    } // getLabelQrFilesDropdown

    // Title (tooltip) for the files dropdown
    static getTitleQrFilesDropdown()
    {
        return 'E-Mail oder Brief an diese Person senden';

    } // getTitleQrFilesDropdown        

    // Label for the text box person name
    static getLabelQrPersonName()
    {
        return 'QR Code Name';

    } // getLabelQrPersonName

    // Title (tooltip) for the text box person name
    static getTitleQrPersonName()
    {
        return 'Der Name für den QR Code. Wird normalerweise nicht geändert';

    } // getTitleQrPersonName

    // Label for the text box comment
    static getLabelTextboxQrComment()
    {
        return 'Kommentar';

    } // getLabelTextboxQrComment

    // Title (tooltip) for the text box comment
    static getTitleTextboxQrComment()
    {
        return 'Kommentar';

    } // getTitleTextboxQrComment    

    // Label for the text box address
    static getLabelTextboxQrAddress()
    {
        return 'Adresse';

    } // getLabelTextboxQrAddress

    // Title (tooltip) for the text box address
    static getTitleTextboxQrAddress()
    {
        return 'Adresse';

    } // getTitleTextboxQrAddress

    // Label for the text box email
    static getLabelTextboxQrEmail()
    {
        return 'E-Mail';

    } // getLabelTextboxQrEmail

    // Title (tooltip) for the text box email
    static getTitleTextboxQrEmail()
    {
        return 'E-Mail';

    } // getTitleTextboxQrEmail    

        // Label for the text box contribution
    static getLabelTextboxQrDistribution()
    {
        return 'Beitrag';

    } // getLabelTextboxQrDistribution

    // Title (tooltip) for the text box contribution
    static getTitleTextboxQrDistribution()
    {
        return 'Supporter Beitrag';

    } // getTitleTextboxQrDistribution 

    // Label for the text box contribution
    static getLabelTextboxQrDistribution()
    {
        return 'Beitrag';

    } // getLabelTextboxQrDistribution

    // Title (tooltip) for the text box contribution
    static getTitleTextboxQrDistribution()
    {
        return 'Supporter Beitrag';

    } // getTitleTextboxQrDistribution    

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Strings Qr Files ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Title Strings /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get title JAZZ live AARAU
    static getTitleJazzLiveAarau()
    {
        return 'JAZZ <i>live</i> AARAU';

    } // getTitleJazzLiveAarau

    // Returns the title for web page QrCodeFiles.htm
    static getTitleQrCodeFiles()
    {
        return this.getTitleJazzLiveAarau() + '<br>' + 'QR Send & Print';

    } // getTitleQrCodeFiles

    // Returns the title for web page QrCodeShow.htm
    static getTitleQrCodeShow()
    {
        return this.getTitleJazzLiveAarau() + '<br>' + 'QR Anzeiger';

    } // getTitleQrCodeShow

    // Returns the title for web page QrCodeScan.htm
    static getTitleQrCodeScan()
    {
        return this.getTitleJazzLiveAarau() + '<br>' + 'QR Scanner';

    } // getTitleQrCodeScan

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Title Strings ///////////////////////////////
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

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Error Strings /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns error code telling that a QR file could not be loaded
    static failureLoadingQrFileCode()
    {
        return 'FailureLoadingQrFile';

    } // failureLoadingQrFileCode

    // Returns the error message that the download code is unvalid
    static errorUnvalidDownloadCode()
    {
        return 'Code zum Herunterladen ist nicht gültig';

    } // errorUnvalidDownloadCode

    // The user did not give the input download code
    static errorDownloadCodeNotSet()
    {
        return "Bitte Code für die QR Code eingeben";

    } // errorDownloadCodeNotSet

    // Input download code has not the right number of characters
    static errorNotTheRightNumberOfCharactersForDownloadCode()
    {
        return 'Anzahl Zeichen im Code muss ' + this.getDownloadCodeLength().toString() + ' sein';

    } // errorNotTheRightNumberOfCharactersForDownloadCode

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Error Strings ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Display Strings Web And Card //////////////
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
    ///////////////////////// End Display Strings Web And Card ////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Supporter Information /////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get the supporter information HTML string for QrCodeShow.htm
    static getSupporterInformationForQrShowString()
    {
        var ret_info_show = '';

        ret_info_show = ret_info_show + this.getSupporterInformationOneString();

        ret_info_show = ret_info_show + this.getSupporterInformationTwoString();

        ret_info_show = ret_info_show + this.getSupporterInformationThreeString();

        ret_info_show = ret_info_show + this.getSupporterInformationFourString();

        return ret_info_show;

    } // getSupporterInformationForQrShowString

	// Get paragraph one supporter information string
	static getSupporterInformationOneString()
	{
		var ret_all_rows = '';

		ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_one" >' + '<br>';

		ret_all_rows = ret_all_rows + 'Mit diesem Ausweis erhalten Sie einen um Fr. 10.- ';

		ret_all_rows = ret_all_rows + 'reduzierten Eintrittspreis in die Konzerte von ';

		ret_all_rows = ret_all_rows + 'JAZZ <i>live</i> AARAU';

		ret_all_rows = ret_all_rows + '</p>';

		return ret_all_rows;

	} // getSupporterInformationOneString

	// Get paragraph two supporter information string
	static getSupporterInformationTwoString()
	{
		var ret_all_rows = '';

		ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_two" >' + '<br>';

		ret_all_rows = ret_all_rows + 'Konzertlokal:' + '<br>';

		ret_all_rows = ret_all_rows + 'Restaurant SPAGI BY MARCELLO' + '<br>';

		ret_all_rows = ret_all_rows + 'Metzgergasse 8, 5000 Aarau';

		ret_all_rows = ret_all_rows + '</p>';

		return ret_all_rows;

	} // getSupporterInformationTwo

	// Get paragraph three supporter information string
	static getSupporterInformationThreeString()
	{
		var ret_all_rows = '';

		ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_three" >' + '<br>';

		ret_all_rows = ret_all_rows + 'Eintrittspreise Fr.25.- / Fr. 15.-';

		ret_all_rows = ret_all_rows + '</p>';

		return ret_all_rows;

	} // getSupporterInformationThree


	// Get paragraph four supporter information string
	static getSupporterInformationFourString()
	{
		var ret_all_rows = '';

		ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_four" >' + '<br>';

		ret_all_rows = ret_all_rows + 'info@jazzliveaarau.ch' + '<br>';

		ret_all_rows = ret_all_rows + 'www.jazzliveaarau.ch';

		ret_all_rows = ret_all_rows + '</p>';

		return ret_all_rows;

	} // getSupporterInformationFourString    

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Supporter Information ///////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Download Code Parameters //////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the allowed characters for the generation of download codes
    static getDownloadCodeAllowedChars()
    {
        return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    } // getDownloadCodeAllowedChars

    // Returns the length (integer) of the download codes
    static getDownloadCodeLength()
    {
        return 8;

    } // getDownloadCodeLength

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Download Code Parameters //////////////////
    ///////////////////////////////////////////////////////////////////////////

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


