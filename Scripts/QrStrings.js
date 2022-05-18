// File: QrStrings.js
// Date: 2022-05-18
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
    ///////////////////////// Start Supporter Emails //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    static getTitleSupporterEmail()
    {
        return 'JAZZ live AARAU Supporter Ausweis als QR Code';

    } // getTitleSupporterEmail

    static getMsgSupporterEmail(i_supporter_name, i_download_code)
    {
        var ret_htm = '';

        ret_htm = ret_htm + 'Guten Tag ' + i_supporter_name + '<br>' + '<br>';

        ret_htm = ret_htm + 'Danke, dass sie ..... ' + '<br>' + '<br>';

        ret_htm = ret_htm + 'Bitte dieser Link ' + 
            '<a href="https://jazzliveaarau.ch/QrCode/QrCodeShow.htm">https://jazzliveaarau.ch/QrCode/QrCodeShow.htm</a>' + 
            ' klicken' + '<br>' + '<br>';

        ret_htm = ret_htm + 'Danach dieser Code  <b>' + i_download_code + '</b> eingeben' + '<br>' + '<br>';

        ret_htm = ret_htm + 'Grüsse ' + '<br>' + '<br>';

        ret_htm = ret_htm + 'Das JAZZ <i>live</i> AARAU Team' + '<br>' + '<br>';

        return ret_htm;

    } // getTitleSupporterEmail

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Supporter Emails ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

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
    ///////////////////////// Start Color Strings /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    static getBackgroundColor()
    {
        return 'rgb(23, 24, 225)';

    } // getBackgroundColor


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Color Strings ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start XML Strings ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get flag value that a node value not have been set
    static getXmlNodeValueNotYetSet()
    {
        return 'NotYetSetNodeValue';

    } // getXmlNodeValueNotYetSet

    // Returns the string for boolean true
    static getBoolTrueString()
    {
        return 'WAHR';

    } // getBoolTrueString

    // Returns the string for boolean false
    static getBoolFalseString()
    {
        return 'FALSCH';

    } // getBoolFalseString

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

    // Caption for the button QR Files send email
    static getCaptionButtonQrFilesSendEmail()
    {
        return 'E-Mail';

    } // getCaptionButtonQrFilesSendEmail

    // Title (tooltip) for the button QR Files send email
    static getTitleButtonQrFilesSendEmail()
    {
        return 'QR Code als E-Mail senden';

    } // getTitleButtonQrFilesSendEmail

    // Caption for the button QR Files send post (mail)
    static getCaptionButtonQrFilesSendPost()
    {
        return 'Brief';

    } // getCaptionButtonQrFilesSendPost

    // Title (tooltip) for the button QR Files send post (mail)
    static getTitleButtonQrFilesSendPost()
    {
        return 'QR Code als Brief senden';

    } // getTitleButtonQrFilesSendPost

    // Caption for the button QR Files print batch
    static getCaptionButtonQrFilesPrintBatch()
    {
        return 'Print';

    } // getCaptionButtonQrFilesPrintBatch

    // Title (tooltip) for the button QR Files print batch
    static getTitleButtonQrFilesPrintBatch()
    {
        return 'Print Batch, d.h. eine Gruppe QR Codes gesammelt drucken';

    } // getTitleButtonQrFilesPrintBatch    

    // Caption for the button QR Files file is done (sent as email, mail or printed)
    static getCaptionButtonQrFilesFileDone()
    {
        return 'Erledigt';

    } // getCaptionButtonQrFilesFileDone

    // Title (tooltip) for the button QR Files file is done (sent as email, mail or printed)
    static getTitleButtonQrFilesFileDone()
    {
        return 'QR Code ist als E-Mail oder Brief gesendet. Oder als Karten gesammelt gedruckt.';

    } // getTitleButtonQrFilesFileDone    
	
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

    // Supporter: Label for the text box QR code name one
    static getLabelQrCodeNameOne()
    {
        return 'QR Code Name';

    } // getLabelQrCodeNameOne getLabelQrCodeNameOneMusician

    // Musician: Label for the text box QR code name one
    static getLabelQrCodeNameOneMusician()
    {
        return 'Name der eingeladenen Person';

    } // getLabelQrCodeNameOne 

    // Supporter: Title (tooltip) for the text box QR code name one
    static getTitleQrCodeNameOne()
    {
        return 'Name der Supporter im QR Code';

    } // getTitleQrCodeNameOne

    // Musician: Title (tooltip) for the text box QR code name one
    static getTitleQrCodeNameOneMusician()
    {
        return 'Name der eingeladenen Person';

    } // getTitleQrCodeNameOne

    // Supporter: Label for the text box QR code name one
    static getLabelQrCodeNameTwo()
    {
        return 'QR Code Name 2';

    } // getLabelQrCodeNameTwo

    // Musician: Label for the text box QR code name one
    static getLabelQrCodeNameTwoMusician()
    {
        return 'Kontaktperson der Band';

    } // getLabelQrCodeNameTwoMusician

    // Supporter: Title (tooltip) for the text box QR code name one
    static getTitleQrCodeNameTwo()
    {
        return 'Der Name für den QR Code 2';

    } // getTitleQrCodeNameTwo 

    // Musician: Title (tooltip) for the text box QR code name one
    static getTitleQrCodeNameTwoMusician()
    {
        return 'Kontaktperson der Band';

    } // getTitleQrCodeNameTwoMusician 

    // Supporter: Label for the text box comment
    static getLabelTextboxQrComment()
    {
        return 'Kommentar';

    } // getLabelTextboxQrComment

    // Supporter: Title (tooltip) for the text box comment
    static getTitleTextboxQrComment()
    {
        return 'Kommentar';

    } // getTitleTextboxQrComment    

    // Supporter: Label for the text box address
    static getLabelTextboxQrAddress()
    {
        return 'Adresse';

    } // getLabelTextboxQrAddress

    // Musician: Label for the text box address
    static getLabelTextboxQrAddressMusician()
    {
        return 'Adresse der Kontakperson';

    } // getLabelTextboxQrAddressMusician

    // Supporter: Title (tooltip) for the text box address
    static getTitleTextboxQrAddress()
    {
        return 'Adresse';

    } // getTitleTextboxQrAddress

    // Musician: Title (tooltip) for the text box address
    static getTitleTextboxQrAddressMusician()
    {
        return 'Adresse der Kontakperson';

    } // getTitleTextboxQrAddressMusician

    // Supporter: Label for the text box email
    static getLabelTextboxQrEmail()
    {
        return 'E-Mail';

    } // getLabelTextboxQrEmail

    // Musician: Label for the text box email
    static getLabelTextboxQrEmailMusician()
    {
        return 'E-Mail der Kontaktperson';

    } // getLabelTextboxQrEmailMusician

    // Supporter: Title (tooltip) for the text box email
    static getTitleTextboxQrEmail()
    {
        return 'E-Mail';

    } // getTitleTextboxQrEmail    

    // Musician: Title (tooltip) for the text box email
    static getTitleTextboxQrEmailMusician()
    {
        return 'E-Mail der Kontaktperson';

    } // getTitleTextboxQrEmailMusician   

    // Supporter: Label for the text box contribution
    static getLabelTextboxQrDistribution()
    {
        return 'Beitrag';

    } // getLabelTextboxQrDistribution

    // Supporter: Title (tooltip) for the text box contribution
    static getTitleTextboxQrDistribution()
    {
        return 'Supporter Beitrag';

    } // getTitleTextboxQrDistribution 

    // Label for the text box concert date
    static getLabelTextboxQrConcertDate()
    {
        return 'Datum Konzert';

    } // getLabelTextboxQrConcertDate

    // Title (tooltip) for the text box concert date
    static getTitleTextboxQrConcertDate()
    {
        return 'Datum Konzert';

    } // getTitleTextboxQrConcertDate    

    // Label for the text box telephone
    static getLabelTextboxTelephone()
    {
        return 'Telefon';

    } // getLabelTextboxTelephone

    // Title (tooltip) for the text box telephone
    static getTitleTextboxTelephone()
    {
        return 'Telefon';

    } // getTitleTextboxTelephone 

    // Label for the season color def string
    static getLabelTextboxSeasonColorDefStr()
    {
        return 'Farbcode';

    } // getLabelTextboxSeasonColorDefStr

    // Title (tooltip) for the season color def string
    static getTitleTextboxSeasonColorDefStr()
    {
        return 'Farbcode';

    } // getTitleTextboxSeasonColorDefStr 

    // Label for the season color display
    static getLabelTextboxSeasonColorDisplay()
    {
        return 'Saison-Farbe';

    } // getLabelTextboxSeasonColorDisplay

    // Title (tooltip) for the season color display
    static getTitleTextboxSeasonColorDisplay()
    {
        return 'Saison-Farbe';

    } // getTitleTextboxSeasonColorDisplay 

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

    static getQrCategoryUndefinedString()
    {
        return 'Undefined';

    } // getQrCategoryUndefinedString

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


