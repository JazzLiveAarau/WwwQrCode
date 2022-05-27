// File: QrStrings.js
// Date: 2022-05-26
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

    static getMsgSupporterEmail(i_supporter_name, i_download_code, i_download_code_two)
    {
        var ret_htm = '';

        ret_htm = ret_htm + 'Vielen Dank ' + i_supporter_name + ', dass Sie uns als Supporter unterstützen.' + '<br>' + '<br>';

        var caption_str = '';

        if (i_download_code_two.length == 0)
        {
            ret_htm = ret_htm + 'Bitte diesen Link ' + this.linkQrCodeShowWebPage(caption_str, i_download_code) + 
            ' klicken' + '<br>' + '<br>';

            ret_htm = ret_htm + 'Der Code wird <b>' + i_download_code + '</b> automatisch eingegeben' + '<br>' + '<br>';
        }
        else
        {
            ret_htm = ret_htm + 'Bitte diese Links ' + this.linkQrCodeShowWebPage(caption_str, i_download_code) + 
            '(für Ausweis eins) und ' +  this.linkQrCodeShowWebPage(caption_str, i_download_code_two) + ' (für Ausweis zwei) klicken' + '<br>' + '<br>';

            ret_htm = ret_htm + 'Der Code  <b>' + i_download_code + '</b>  und der Code ';

            ret_htm = ret_htm + '<b>' + i_download_code_two + '</b> werden automatisch eingegeben' + '<br>' + '<br>';

        }

        ret_htm = ret_htm + '<br>' + 'Die geöffnete Webseite <b>(' 
        + this.urlFullQrCodeShowWebPage() + ')</b> bitte als Lesezeichen (Favorite) speichern.' + '<br>' + '<br>';
        
        ret_htm = ret_htm + 'Grüsse ' + '<br>' + '<br>';

        ret_htm = ret_htm + 'Das JAZZ <i>live</i> AARAU Team' + '<br>' + '<br>';

        return ret_htm;

    } // getMsgSupporterEmail

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Supporter Emails ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Supporter Mails ///////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    static getMsgSupporterPost(i_supporter_name, i_download_code, i_download_code_two)
    {
        var ret_htm = '';

        ret_htm = ret_htm + 'Danke ' + i_supporter_name;

        ret_htm = ret_htm + ', dass Sie uns als Supporter unterstützen. ' + '<br>' + '<br>';

        if (i_download_code_two.length == 0)
        {
            ret_htm = ret_htm + 'Unten ist Ihre Supporter-Karte zum Ausschneiden und Zusammenfalten.' + '<br>' + '<br>';
        }
        else
        {
            ret_htm = ret_htm + 'Unten sind Ihre Supporter-Karten zum Ausschneiden und Zusammenfalten.' + '<br>' + '<br>';
        }

        ret_htm = ret_htm + 'Freundliche Grüsse ' + '<br>' + '<br>';

        ret_htm = ret_htm + 'Das JAZZ <i>live</i> AARAU Team' + '<br>' + '<br>';

        return ret_htm;

    } // getTitleSupporterEmail

    static getInstructionsWebpageQrCodeShow(i_download_code, i_download_code_two)
    {
        var ret_instruct = '';

        ret_instruct = ret_instruct + '<h4>JAZZ <i>live</i> AARAU QR Code Anzeiger</h4>';

        // ret_instruct = ret_instruct + '<p>';

        if (i_download_code_two.length == 0)
        {
            ret_instruct = ret_instruct + 'Mit einem Mobiltelefon kann der Ausweis auch gespeichert und gezeigt werden.' + '<br>' + '<br>';

            ret_instruct = ret_instruct + 'Diesen Link im Telefon eingeben <br>(oder QR Code rechts scannen)' + '<br>';

            ret_instruct = ret_instruct +  '<b>' + this.urlQrCodeShowWebPage()  + '</b>' + '<br>' + '<br>';

            ret_instruct = ret_instruct + 'Der Code für diesen Ausweis ist <b>' + i_download_code + '</b><br>' + '<br>';
        }
        else
        {
            ret_instruct = ret_instruct + 'Mit einem Mobiltelefon können die Ausweise auch gespeichert und gezeigt werden.' + '<br>' + '<br>';

            ret_instruct = ret_instruct + 'Diesen Link im Telefon eingeben <br>(oder QR Codes rechts scannen)' + '<br>';

            ret_instruct = ret_instruct + '<b>' + this.urlQrCodeShowWebPage()  + '</b><br>' + '<br>';

            ret_instruct = ret_instruct + 'Der Code für den ersten Ausweis ist <b>' + i_download_code + '</b><br>';

            ret_instruct = ret_instruct + 'Der Code für den zweiten Ausweis ist <b>' + i_download_code_two + '</b><br>';
        }

        ret_instruct = ret_instruct + '<br>' + 'Der Link soll als Lesezeichen (Favorite) gespeichert werden';

        // ret_instruct = ret_instruct + '</p>';

        return ret_instruct;

    } // getInstructionsWebpageQrCodeShow

    static getToAddressSupporter(i_supporter_name, i_full_address_htm)
    {
        var ret_htm = '';

        ret_htm = ret_htm + i_supporter_name + '<br>';

        ret_htm = ret_htm + i_full_address_htm;

        return ret_htm;

    } // getToAddressSupporter

    static getFromAddressSupporter(i_user_member_name_address)
    {
        var ret_htm = '';

        ret_htm = ret_htm + 'JAZZ <i>live</i> AARAU' + ', ';

        ret_htm = ret_htm + i_user_member_name_address;

        return ret_htm;

    } // getFromAddressSupporter

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Supporter Mails /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Supporter Karte ///////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    static getSupporterCardReverseSideText()
    {
        var ret_reverse_txt = '';
    
        ret_reverse_txt = ret_reverse_txt + 'Mit diesem Ausweis erhalten Sie einen um Fr. 10.-' + '<br>';
    
        ret_reverse_txt = ret_reverse_txt + 'reduzierten Eintrittspreis in die Konzerte von' + '<br>';
    
        ret_reverse_txt = ret_reverse_txt + 'JAZZ <i>live</i> AARAU' + '<br>' + '<br>';
    
        ret_reverse_txt = ret_reverse_txt + 'Homepage: jazzliveaarau.ch' + '<br>';
    
        ret_reverse_txt = ret_reverse_txt + 'E-Mail: qrcode@jazzliveaarau.ch';
    
        return ret_reverse_txt;
    
    } // getSupporterCardReverseSideText

    static getSupporterCardReverseQrCode(i_download_code)
    {
        var ret_reverse_qr = '';
    
        ret_reverse_qr = ret_reverse_qr + 'Mobiltelefon QR Code Anzeiger Link:' + '<br>';
    
        ret_reverse_qr = ret_reverse_qr + this.urlQrCodeShowWebPage() + '<br><br>';
    
        ret_reverse_qr = ret_reverse_qr + 'Der Code für diesen Ausweis ist <br>' + i_download_code;
    
        return ret_reverse_qr;
    
    } // getSupporterCardReverseQrCode

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Supporter Karte /////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Common Strings ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    static linkQrCodeShowWebPage(i_caption_str, i_download_code)
    {
        var caption_str = this.urlQrCodeShowWebPage();

        if (i_caption_str.trim().length > 0)
        {
            caption_str = i_caption_str.trim();
        }

        var ret_link = '';

        var link_qr_show = this.urlDownloadQrCodeShowWebPage(i_download_code);

        ret_link = ret_link + '<a href="' +  link_qr_show + '">';

        ret_link = ret_link + caption_str;

        ret_link = ret_link + '</a>';

        return  ret_link;

    } // linkQrCodeShowWebPage

    static urlQrCodeShowWebPage()
    {
        return  'jazzliveaarau.ch/QrCode/QrCodeShow.htm';

    } // urlQrCodeShowWebPage

    static urlFullQrCodeShowWebPage()
    {
        return  'https://jazzliveaarau.ch/QrCode/QrCodeShow.htm';

    } // urlFullQrCodeShowWebPage

    static urlDownloadQrCodeShowWebPage(i_download_code)
    {
        return  this.urlFullQrCodeShowWebPage() + '?' + i_download_code;

    } // urlDownloadQrCodeShowWebPage

    static getJazzLiveAarauTextLogo()
    {
        return 'JAZZ <i>live</i> AARAU';
        
    } // getJazzLiveAarauTextLogo

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Common Strings //////////////////////////////
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
    
    // Returns the name and path for the QR link (to QR Show web page) file
    static getRelativeUrlQrFileLink(i_season_start_year, i_download_code_str)
    {
        var rel_path = '';

        rel_path = rel_path + this.getPathSubdirectoryQrFiles();

        rel_path = rel_path + this.getSubdirectorySeasonName(i_season_start_year);

        rel_path = rel_path + 'QrCodeLink_' + i_download_code_str + '.txt';

        return rel_path;

    } // getRelativeUrlQrFileLink

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

    static getQrCodeColorInitValue()
    {
        return 'rgb(23, 24, 225)';

    } // getQrCodeColorInitValue

    static getBackgroundColor()
    {
        return 'rgb(223, 224, 225)';

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

    // No Internet connection and QR Code data not saved in local storage
    static errorNoInternetConnectionQrCodeNotSaved()
    {
        return 'Keine Internet-Verbindung und QR Code ist im Telefon nicht gespeichert';

    } // errorNoInternetConnectionQrCodeNotSaved

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

		ret_all_rows = ret_all_rows + 'jazzliveaarau.ch';

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


