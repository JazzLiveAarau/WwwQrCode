// File: QrCodePrint.js
// Date: 2022-06-07
// Author: Gunnar Lidén

// File content
// =============
//
// QR Code batch printing functions

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Instance of the class QrFilesXml handling the XML file QrFiles.xml for batch print
var g_qr_files_xml_object_batch_print  = null;

// Array of BatchPrintCard objects holding data for the (batch) print of cards
var g_batch_card_array = null;

// The button print front
var g_print_front_button = null;

// The button print reverse
var g_print_reverse_button = null;

// The button print done
var g_print_done_button = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for the QR code print
function onloadQrCodePrint()
{
    var el_div_logo = getElementDivQrCodePrintLogo();

    el_div_logo.innerHTML = QrStrings.getQrCodePrintTitle();

    createPrintFrontCardsButton();

    createPrintReverseCardsButton();

    createPrintDoneCardsButton();

    getSeasonStartYear(callbackSeasonStartYearPrintBatch);

} // onloadQrCodePrint

// Callback after determining season start year with a PHP function
function callbackSeasonStartYearPrintBatch(i_season_start_year)
{
    g_qr_files_xml_object_batch_print = new QrFilesXml(afterLoadOfQrFilesXmlBatchPrint, i_season_start_year);

} // callbackSeasonStartYearPrintBatch

// Callback after loading QrFile.xml for batch print
function afterLoadOfQrFilesXmlBatchPrint()
{
    console.log("afterLoadOfQrFilesXmlBatchPrint QrFile.xml is loaded");

} // afterLoadOfQrFilesXmlBatchPrint

// User clicked the button generate QR codes for supporters
function clickCreatePrintPagesFromQrFilesXml()
{
    createPrintPagesFromQrFilesXml(); 

} // clickCreatePrintPagesFromQrFilesXml

function clickGenerateSupporterQrReverseSide()
{
    generateReversePage();

} // clickGenerateSupporterQrReverseSide

function clickCardsArePrinted()
{
    if (g_batch_card_array == null || g_batch_card_array.getArray() == null)
    {
        // alert(QrStrings.errorPrintCardsFrontFirst());

        return;
    }

    g_batch_card_array.executeCardsArePrinted(callbackExecuteCardsArePrinted);

} // clickCardsArePrinted

function callbackExecuteCardsArePrinted()
{
    var el_all_pages = getElementDivAllPrintPages();
	
    el_all_pages.innerHTML = '';
 
} // callbackExecuteCardsArePrinted

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Print Pages Functions //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Create print pages from the content of QrFiles.xml (g_qr_files_xml_object_batch_print)
function createPrintPagesFromQrFilesXml()
{
    var to_print_file_number_array = g_qr_files_xml_object_batch_print.getFilteredFileNumberArrayForPrintBatch();

    var card_category = QrStrings.getQrCategorySupporterString();

    g_batch_card_array = new BatchPrintCardArray(g_qr_files_xml_object_batch_print, to_print_file_number_array, card_category);

    g_batch_card_array.createArray(callbackAfterCreatingBatchCardArray);

} // createPrintPagesFromQrFilesXml

function callbackAfterCreatingBatchCardArray(i_batch_card_array)
{
    if (g_batch_card_array.getArray().length == 0)
    {
        alert(QrStrings.msgNoCardsToPrint());

        return;
    }

    var content_all_pages = getContentDivAllPagesString(g_batch_card_array.getArray());

    var el_all_pages = getElementDivAllPrintPages();
	
    el_all_pages.innerHTML = content_all_pages;
 
    setCardQrCodeImages(g_batch_card_array.getArray());

} // callbackAfterCreatingBatchCardArray

// Generate the reverse page
function generateReversePage()
{
    if (g_batch_card_array == null || g_batch_card_array.getArray() == null || g_batch_card_array.getArray().length == 0)
    {
        alert(QrStrings.errorPrintCardsFrontFirst());

        return;
    }

    var el_all_pages = getElementDivAllPrintPages();

    var content_reverse_page = getContentDivReversePageString(g_batch_card_array.getArray());

    el_all_pages.innerHTML = content_reverse_page;

} // generateReversePage

// Set canvas QR codes for the supporters
function setCardQrCodeImages(i_batch_card_array)
{
    for (var index_card=0; index_card < i_batch_card_array.length; index_card++)
    {
        var batch_card = i_batch_card_array[index_card];

        var image_data = batch_card.getQrCodeImage();

        var el_image = getElementImageQrCodeSupporter(index_card);

        el_image.src = image_data;
    }

} // setCanvasSupporterQrCodes

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Print Pages Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Create Button Controls ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Creates the print front button control
function createPrintFrontCardsButton()
{
    g_print_front_button = new JazzButton("id_qr_button_print_front", getIdDivPrintFrontCardsButton());

    g_print_front_button.setOnclickFunctionName("clickCreatePrintPagesFromQrFilesXml");

    g_print_front_button.setCaption(QrStrings.getCaptionButtonPrintFront());

    g_print_front_button.setWidth("90px");

    g_print_front_button.setLabelText("");

    g_print_front_button.setTitle(QrStrings.getTitleButtonPrintFront());

} // createPrintFrontCardsButton

// Creates the print reverse button control
function createPrintReverseCardsButton()
{
    g_print_reverse_button = new JazzButton("id_qr_button_print_reverse", getIdDivPrintReverseCardsButton());

    g_print_reverse_button.setOnclickFunctionName("clickGenerateSupporterQrReverseSide");

    g_print_reverse_button.setCaption(QrStrings.getCaptionButtonPrintReverse());

    g_print_reverse_button.setWidth("90px");

    g_print_reverse_button.setLabelText("");

    g_print_reverse_button.setTitle(QrStrings.getTitleButtonPrintReverse());

} // createPrintReverseCardsButton

// Creates the print done button control
function createPrintDoneCardsButton()
{
    g_print_done_button = new JazzButton("id_qr_button_print_done", getIdDivPrintDoneCardsButton());

    g_print_done_button.setOnclickFunctionName("clickCardsArePrinted");

    g_print_done_button.setCaption(QrStrings.getCaptionButtonPrintDone());

    g_print_done_button.setWidth("90px");

    g_print_done_button.setLabelText("");

    g_print_done_button.setTitle(QrStrings.getTitleButtonPrintDone());

} // createPrintDoneCardsButton

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Create Button Controls //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Batch Print Card Array ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

class BatchPrintCardArray
{
    constructor(i_qr_xml, i_print_file_numbers, i_category)
    {
        this.m_qr_xml = i_qr_xml;

        this.m_print_file_numbers = i_print_file_numbers;

        this.m_category = i_category;

        this.m_batch_print_card_array = null;

        this.m_start_year = null;

        this.m_download_codes_array = null;

        this.m_callback_array_created = null;
    }

    getNumberOfPrintCards()
    {
        return this.m_batch_print_card_array.length;

    } // getNumberOfPrintCards

    getArray()
    {
        return this.m_batch_print_card_array;

    } // getArray

    createArray(i_callback_array_created)
    {
        this.m_start_year = this.m_qr_xml.getSeasonStartYear();

        this.m_callback_array_created = i_callback_array_created;

        var season_str = this.m_qr_xml.getSeasonStartYear().toString() + '-' +
                        (this.m_qr_xml.getSeasonStartYear() + 1).toString();

        season_str = 'Saison' + '<br>' + season_str;

        var n_files = this.m_print_file_numbers.length;

        this.m_batch_print_card_array = [];

        var n_names = 0;

        for (var index_number=0; index_number < n_files; index_number++)
        {
            var file_number = this.m_print_file_numbers[index_number];
    
            var name_one = this.m_qr_xml.getQrCodeNameOne(file_number);
    
            var download_one = this.m_qr_xml.getDownloadOne(file_number);
    
            var name_two = this.m_qr_xml.getQrCodeNameTwo(file_number);
    
            var download_two = this.m_qr_xml.getDownloadTwo(file_number);
    
            if (name_one.length > 0 && download_one.length > 0)
            {
                n_names = n_names + 1;

                var batch_print_card_one = new BatchPrintCard(name_one, download_one, season_str, this.m_category, file_number);

                var index_one = this.m_batch_print_card_array.length;

                this.m_batch_print_card_array[index_one] = batch_print_card_one;
            }
    
            if (name_two.length > 0 && download_two.length > 0)
            {
                n_names = n_names + 1;

                var batch_print_card_two = new BatchPrintCard(name_two, download_two, season_str, this.m_category, file_number);

                var index_two = this.m_batch_print_card_array.length;

                this.m_batch_print_card_array[index_two] = batch_print_card_two;
            }
    
        } // index_number

        this.loadAllQrCodeImages();

    } // createArray

    executeCardsArePrinted(i_callback_function)
    {
        var batch_card_array = this.getArray();
    
        for (var index_card=0; index_card <  batch_card_array.length; index_card++)
        {
            var batch_card = batch_card_array[index_card];
    
            var file_number = batch_card.m_file_number;

            var b_sent = true;
    
            this.m_qr_xml.setPrintSentBool(file_number, b_sent);
        }

        this.m_qr_xml.saveXmlFileOnServerCallback(i_callback_function);
    
    } // executeCardsArePrinted
        

    getIndexForDownloadedQrCode()
    {
        var ret_index = -1;

        var n_cards = this.getNumberOfPrintCards();

        for (var index_card=0; index_card < n_cards; index_card++)
        {
            var dowload_code =  this.m_download_codes_array[index_card];

            if (dowload_code.length > 0)
            {
                ret_index = index_card - 1;

                break;
            }

        }

        if (ret_index == -1)
        {
            ret_index = n_cards - 1;
        }

        return ret_index;

    } // getIndexForDownloadedQrCode

    getIndexForNextQrCodeToDownload()
    {
        var ret_dowload_code = '';

        var n_cards = this.getNumberOfPrintCards();
        
        for (var index_card=0; index_card < n_cards; index_card++)
        {
            var dowload_code =  this.m_download_codes_array[index_card];

            if (dowload_code.length > 0)
            {
                ret_dowload_code = dowload_code;

                this.m_download_codes_array[index_card] = '';

                break;
            }

        } // index_card

        return ret_dowload_code;

    } // getIndexForNextQrCodeToDownload

    loadAllQrCodeImages()
    {
        var n_cards = this.getNumberOfPrintCards();

        this.m_download_codes_array = [];

        for (var index_card=0; index_card < n_cards; index_card++)
        {
            var print_card =  this.m_batch_print_card_array[index_card];

            var download_code = print_card.m_download_code;

            this.m_download_codes_array[index_card] = download_code;

        }

        console.log("loadAllQrCodeImages Number of downloads is " + this.m_download_codes_array.length);

        loadQrCodeImageRecursive("");


    } // loadAllQrCodeImages

    // Read text file on server
    // https://stackoverflow.com/questions/4533018/how-to-read-a-text-file-from-server-using-javascript
    readImageTextFileOnServer(i_file_server, i_callback_function_name) 
    {
        console.log("Enter readImageTextFileOnServer");

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

    } // readImageTextFileOnServer

} // BatchPrintCardArray

// Holds all data for the (batch) card to print
class BatchPrintCard
{
    constructor(i_name, i_download_code, i_season_str, i_category, i_file_number)
    {
        // Name on the card
        this.m_name = i_name;

        // The download code for the QR code card
        this.m_download_code = i_download_code;

        // Season string
        this.m_season_str = i_season_str;

        // Card category
        this.m_category = i_category;

        // File number in QrFiles.xml
        this.m_file_number = i_file_number;

        // QR code image data
        this.m_qr_code_image = null;
    }

    setQrCodeImage(i_qr_code_image)
    {
        this.m_qr_code_image = i_qr_code_image;

    } // setQrCodeImage

    getQrCodeImage()
    {
        return this.m_qr_code_image;

    } // getQrCodeImage

} // BatchPrintCard

// A recursively called function cannot be a class member function
function loadQrCodeImageRecursive(i_qr_code_image_as_text)
{
    if (i_qr_code_image_as_text.length > 0)
    {
        var index_downloaded_code = g_batch_card_array.getIndexForDownloadedQrCode();

        var print_card =  g_batch_card_array.m_batch_print_card_array[index_downloaded_code];

        print_card.setQrCodeImage(i_qr_code_image_as_text);

        console.log("loadQrCodeImageRecursive Image data as text set for index " + index_downloaded_code.toString());
    }

    var down_load_code = g_batch_card_array.getIndexForNextQrCodeToDownload();

    console.log("loadQrCodeImageRecursive down_load_code is " + down_load_code);

    if (down_load_code.length == 0)
    {
        g_batch_card_array.m_callback_array_created(g_batch_card_array.m_batch_print_card_array);

        return;
    }

    var file_name_path_image = QrStrings.getRelativeUrlQrFileImage(g_batch_card_array.m_start_year, down_load_code);

    g_batch_card_array.readImageTextFileOnServer(file_name_path_image, loadQrCodeImageRecursive);

} // loadQrCodeImageRecursive

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Batch Print Card Array ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Print Page Strings ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the string that defines all print pages
function getContentDivAllPagesString(i_batch_card_array)
{
    console.log("getContentDivAllPagesString Enter");

    var b_reverse = false;

    var ret_content_all_pages = '';

    var n_pages = getNumberOfPrintPages(i_batch_card_array);

    var index_name_start = 0;

    var n_tab = 1;

    for (var page_number=1; page_number <= n_pages; page_number++)
    {
        ret_content_all_pages = ret_content_all_pages + getNewLineString();

        ret_content_all_pages = ret_content_all_pages + getElementDivPrintRowContainerString(b_reverse, index_name_start, i_batch_card_array, n_tab + 1);

        if (page_number != n_pages)
        {
            ret_content_all_pages = ret_content_all_pages + getTabs(n_tab + 1) + '<div class="page-break"></div>';
        }

        index_name_start = index_name_start + 10;
    }

    console.log("getContentDivAllPagesString Exit");

    return ret_content_all_pages;

} // getContentDivAllPagesString

function getNumberOfPrintPages(i_batch_card_array)
{
    var ret_n_pages = -12345;

    var n_names = i_batch_card_array.length;

    console.log("getNumberOfPrintPages n_names= " + n_names.toString());

    ret_n_pages = parseInt(n_names/10.0);

    var diff_int_float = Math.abs(n_names/10.0 - ret_n_pages);

    if (diff_int_float > 0.001 )
    {
        ret_n_pages = ret_n_pages + 1;
    }

    return ret_n_pages;

} // getNumberOfPrintPages


// Get the string that defines the reverse page
function getContentDivReversePageString(i_batch_card_array)
{
    var ret_content_reverse_page = '';

    var b_reverse = true;

    var season_str = 'NotUsedForReversePage';
    
    var n_pages = 1;

    var index_supporter_start = 0;

    var n_tab = 1;

    for (var page_number=1; page_number <= n_pages; page_number++)
    {
        ret_content_reverse_page = ret_content_reverse_page + getNewLineString();

        ret_content_reverse_page = ret_content_reverse_page + getElementDivPrintRowContainerString(b_reverse, index_supporter_start, i_batch_card_array, n_tab + 1);

        if (page_number != n_pages)
        {
            ret_content_reverse_page = ret_content_reverse_page + getTabs(n_tab + 1) + '<div class="page-break"></div>';
        }

        index_supporter_start = index_supporter_start + 10;
    }

    return ret_content_reverse_page;

} // getContentDivReversePageString

// Get the string that defines the div for the print row container
function getElementDivPrintRowContainerString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab)
{
    var ret_print_row_container_str = '';
	
    if (i_index_supporter_start >= i_batch_card_array.length)
    {
		alert("getElementPrintPageString i_index_supporter_start= " + i_index_supporter_start.toString());
		
        return ret_print_row_container_str;
    }

    var id_div_print_row_container = '';

    var cl_div_print_row_container = getClassPrintPageContainer();

    ret_print_row_container_str = ret_print_row_container_str + getTabs(i_tab);

    ret_print_row_container_str = ret_print_row_container_str + getDivStartString(id_div_print_row_container, cl_div_print_row_container);

    ret_print_row_container_str = ret_print_row_container_str + getNewLineString();
	
	ret_print_row_container_str = ret_print_row_container_str + getElementPrintPageString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab  + 1);
	
    ret_print_row_container_str = ret_print_row_container_str + getTabs(i_tab);

    ret_print_row_container_str = ret_print_row_container_str + getDivEndString(id_div_print_row_container, cl_div_print_row_container);

    ret_print_row_container_str = ret_print_row_container_str + getNewLineString() + getNewLineString();

    return ret_print_row_container_str;

} // getElementDivPrintRowContainerString

// Get the string that defines the PrintPage element
function getElementPrintPageString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab)
{
    var ret_print_page_str = '';
	
    if (i_index_supporter_start >= i_batch_card_array.length)
    {
		alert("getElementPrintPageString i_index_supporter_start= " + i_index_supporter_start.toString());
		
        return ret_print_page_str;
    }

    ret_print_page_str = ret_print_page_str + getTabs(i_tab);

    ret_print_page_str = ret_print_page_str + '<PrintPage>';

    ret_print_page_str = ret_print_page_str + getNewLineString();
	
	ret_print_page_str = ret_print_page_str + getElementDivAllPrintRowsString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab  + 1);

    ret_print_page_str = ret_print_page_str + getTabs(i_tab);

    ret_print_page_str = ret_print_page_str + '</PrintPage>';;

    ret_print_page_str = ret_print_page_str + getNewLineString() + getNewLineString();

    return ret_print_page_str;

} // getElementPrintPageString

// Get the string that defines the div for all rows
function getElementDivAllPrintRowsString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab)
{
    var ret_all_print_rows_str = '';
	
    if (i_index_supporter_start >= i_batch_card_array.length)
    {
        return ret_all_print_rows_str;
    }

    var id_div_all_print_rows = '';

    var cl_div_all_print_rows = getClassAllPrintRows();

    ret_all_print_rows_str = ret_all_print_rows_str + getTabs(i_tab);

    ret_all_print_rows_str = ret_all_print_rows_str + getDivStartString(id_div_all_print_rows, cl_div_all_print_rows);

    ret_all_print_rows_str = ret_all_print_rows_str + getNewLineString();
	
	ret_all_print_rows_str = ret_all_print_rows_str + getElementDivPrintPageRowString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab  + 1);
	
	ret_all_print_rows_str = ret_all_print_rows_str + getElementDivPrintPageRowString(i_b_reverse, i_index_supporter_start + 2, i_batch_card_array, i_tab  + 1);
	
	ret_all_print_rows_str = ret_all_print_rows_str + getElementDivPrintPageRowString(i_b_reverse, i_index_supporter_start + 4, i_batch_card_array, i_tab  + 1);

	ret_all_print_rows_str = ret_all_print_rows_str + getElementDivPrintPageRowString(i_b_reverse, i_index_supporter_start + 6, i_batch_card_array, i_tab  + 1);

	ret_all_print_rows_str = ret_all_print_rows_str + getElementDivPrintPageRowString(i_b_reverse, i_index_supporter_start + 8, i_batch_card_array, i_tab  + 1);

    ret_all_print_rows_str = ret_all_print_rows_str + getTabs(i_tab);

    ret_all_print_rows_str = ret_all_print_rows_str + getDivEndString(id_div_all_print_rows, cl_div_all_print_rows);

    ret_all_print_rows_str = ret_all_print_rows_str + getNewLineString() + getNewLineString();

    return ret_all_print_rows_str;

} // getElementDivAllPrintRowsString

// Get the string that defines the div print page row
function getElementDivPrintPageRowString(i_b_reverse, i_index_supporter_start, i_batch_card_array, i_tab)
{
    var ret_print_page_row_str = '';

    if (i_index_supporter_start >= i_batch_card_array.length)
    {
        return ret_print_page_row_str;
    }

    var id_div_print_page_row = '';

    var cl_div_print_page_row = getClassPrintPageRow();

    ret_print_page_row_str = ret_print_page_row_str + getTabs(i_tab);

    ret_print_page_row_str = ret_print_page_row_str + getDivStartString(id_div_print_page_row, cl_div_print_page_row);

    ret_print_page_row_str = ret_print_page_row_str + getNewLineString();

    if (!i_b_reverse)
    {
        ret_print_page_row_str = ret_print_page_row_str + getElementDivCardBoxLeftString(i_index_supporter_start, i_batch_card_array, i_tab  + 1);
	
        ret_print_page_row_str = ret_print_page_row_str + getElementDivCardBoxRightString(i_index_supporter_start + 1, i_batch_card_array, i_tab  + 1);
    }
    else
    {
        ret_print_page_row_str = ret_print_page_row_str + getElementDivCardBoxLeftReverseString(i_tab + 1);
	
        ret_print_page_row_str = ret_print_page_row_str + getElementDivCardBoxRightReverseString(i_tab + 1);
    }    

    ret_print_page_row_str = ret_print_page_row_str + getTabs(i_tab);

    ret_print_page_row_str = ret_print_page_row_str + getDivEndString(id_div_print_page_row, cl_div_print_page_row);

    ret_print_page_row_str = ret_print_page_row_str + getNewLineString() + getNewLineString();

    return ret_print_page_row_str;

} // getElementDivPrintPageRowString

// Get the string that defines the div card box left
function getElementDivCardBoxLeftString(i_index_supporter, i_batch_card_array, i_tab)
{
    var ret_card_box_left_str = '';

    if (i_index_supporter >= i_batch_card_array.length)
    {
        return ret_card_box_left_str;
    }

    var batch_card = i_batch_card_array[i_index_supporter];

    var card_name = batch_card.m_name;

    var season_str = batch_card.m_season_str;

    var category_str = batch_card.m_category;

    var category_season_str = category_str + '<br>' + season_str;

    var id_div_card_box_left = '';

    var cl_div_card_box_left = getClassCardBoxLeft();

    ret_card_box_left_str = ret_card_box_left_str + getTabs(i_tab);

    ret_card_box_left_str = ret_card_box_left_str + getDivStartString(id_div_card_box_left, cl_div_card_box_left);

    ret_card_box_left_str = ret_card_box_left_str + getNewLineString();

    ret_card_box_left_str = ret_card_box_left_str + getElementDivTextLogoString(i_tab + 1);

    ret_card_box_left_str = ret_card_box_left_str + getNewLineString();
	
	ret_card_box_left_str = ret_card_box_left_str + getTabs(i_tab + 1) + getElementDivSupporterNameString(card_name, i_tab) + getNewLineString();

    ret_card_box_left_str = ret_card_box_left_str + getElementDivSeasonTextString(category_season_str, i_tab + 1);

    ret_card_box_left_str = ret_card_box_left_str + getNewLineString();

    ret_card_box_left_str = ret_card_box_left_str + getElementDivQrCodeImageString(i_index_supporter, i_tab + 1);

    ret_card_box_left_str = ret_card_box_left_str + getNewLineString();

    ret_card_box_left_str = ret_card_box_left_str + getTabs(i_tab);

    ret_card_box_left_str = ret_card_box_left_str + getDivEndString(id_div_card_box_left, cl_div_card_box_left);

    ret_card_box_left_str = ret_card_box_left_str + getNewLineString() + getNewLineString();

    return ret_card_box_left_str;

} // getElementDivCardBoxLeftString

// Get the string that defines the div card box right
function getElementDivCardBoxRightString(i_index_supporter, i_batch_card_array, i_tab)
{
    var ret_card_box_right_str = '';

    if (i_index_supporter >= i_batch_card_array.length)
    {
        return ret_card_box_right_str;
    }

    var batch_card = i_batch_card_array[i_index_supporter];

    var card_name = batch_card.m_name;

    var id_div_card_box_right = '';

    var season_str = batch_card.m_season_str;

    var category_str = batch_card.m_category;

    var category_season_str = category_str + '<br>' + season_str;

    var cl_div_card_box_right = getClassCardBoxRight();

    ret_card_box_right_str = ret_card_box_right_str + getTabs(i_tab);

    ret_card_box_right_str = ret_card_box_right_str + getDivStartString(id_div_card_box_right, cl_div_card_box_right);

    ret_card_box_right_str = ret_card_box_right_str + getNewLineString();

    ret_card_box_right_str = ret_card_box_right_str + getElementDivTextLogoString(i_tab + 1);

    ret_card_box_right_str = ret_card_box_right_str + getNewLineString();
	
	ret_card_box_right_str = ret_card_box_right_str + getTabs(i_tab + 1) + getElementDivSupporterNameString(card_name, i_tab) + getNewLineString();

    ret_card_box_right_str = ret_card_box_right_str + getElementDivSeasonTextString(category_season_str, i_tab + 1);

    ret_card_box_right_str = ret_card_box_right_str + getNewLineString();

    ret_card_box_right_str = ret_card_box_right_str + getElementDivQrCodeImageString(i_index_supporter, i_tab + 1);

    ret_card_box_right_str = ret_card_box_right_str + getNewLineString();

    ret_card_box_right_str = ret_card_box_right_str + getTabs(i_tab);

    ret_card_box_right_str = ret_card_box_right_str + getDivEndString(id_div_card_box_right, cl_div_card_box_right);

    ret_card_box_right_str = ret_card_box_right_str + getNewLineString() + getNewLineString();

    return ret_card_box_right_str;

} // getElementDivCardBoxRightString

// Get the string that defines the div supporter name
function getElementDivSupporterNameString(i_card_name, i_tab)
{
    var ret_supporter_name_str = '';

    var id_div_supporter_name = '';

    var cl_div_supporter_name = getClassSupporterName();

    ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab);

    ret_supporter_name_str = ret_supporter_name_str + getDivStartString(id_div_supporter_name, cl_div_supporter_name);

    ret_supporter_name_str = ret_supporter_name_str + getNewLineString();
	
	ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab + 1) + i_card_name + getNewLineString();

    ret_supporter_name_str = ret_supporter_name_str + getTabs(i_tab);

    ret_supporter_name_str = ret_supporter_name_str + getDivEndString(id_div_supporter_name, cl_div_supporter_name);

    ret_supporter_name_str = ret_supporter_name_str + getNewLineString() + getNewLineString();

    return ret_supporter_name_str;

} // getElementDivSupporterNameString

// Get the string that defines the div card box left reverse side
function getElementDivCardBoxLeftReverseString(i_tab)
{
    var ret_card_box_reverse_left_str = '';

    var id_div_card_box_reverse_left = '';

    var cl_div_card_box_reverse_left = getClassCardBoxLeftReverse();

    ret_card_box_reverse_left_str = ret_card_box_reverse_left_str + getTabs(i_tab);

    ret_card_box_reverse_left_str = ret_card_box_reverse_left_str + getDivStartString(id_div_card_box_reverse_left, cl_div_card_box_reverse_left);

    ret_card_box_reverse_left_str = ret_card_box_reverse_left_str + getElementDivCardBoxBothReverseString(i_tab);

    ret_card_box_reverse_left_str = ret_card_box_reverse_left_str + getTabs(i_tab);

    ret_card_box_reverse_left_str = ret_card_box_reverse_left_str + getDivEndString(id_div_card_box_reverse_left, cl_div_card_box_reverse_left);

    ret_card_box_reverse_left_str = ret_card_box_reverse_left_str + getNewLineString() + getNewLineString();

    return ret_card_box_reverse_left_str;

} // getElementDivCardBoxLeftReverseString

// Get the string that defines the div card box left reverse side
function getElementDivCardBoxRightReverseString(i_tab)
{
    var ret_card_box_reverse_right_str = '';

    var id_div_card_box_reverse_right = '';

    var cl_div_card_box_reverse_right = getClassCardBoxRightReverse();

    ret_card_box_reverse_right_str = ret_card_box_reverse_right_str + getTabs(i_tab);

    ret_card_box_reverse_right_str = ret_card_box_reverse_right_str + getDivStartString(id_div_card_box_reverse_right, cl_div_card_box_reverse_right);

    ret_card_box_reverse_right_str = ret_card_box_reverse_right_str + getElementDivCardBoxBothReverseString(i_tab);

    ret_card_box_reverse_right_str = ret_card_box_reverse_right_str + getTabs(i_tab);

    ret_card_box_reverse_right_str = ret_card_box_reverse_right_str + getDivEndString(id_div_card_box_reverse_right, cl_div_card_box_reverse_right);

    ret_card_box_reverse_right_str = ret_card_box_reverse_right_str + getNewLineString() + getNewLineString();

    return ret_card_box_reverse_right_str;

} // getElementDivCardBoxRightReverseString

// Get the string that defines the content of div card box left and right reverse side
function getElementDivCardBoxBothReverseString(i_tab)
{
    var ret_card_box_reverse_both_str = '';

    ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getNewLineString();

    ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getTabs(i_tab + 1) + getSupporterCardReverseSideOne();

    ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getNewLineString();
	
	ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getTabs(i_tab + 1) + getSupporterCardReverseSideTwo();
	
	ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getNewLineString();

    //ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getTabs(i_tab + 1) + getSupporterCardReverseSideFour();

    //ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getNewLineString();

    ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getTabs(i_tab + 1) + getSupporterCardReverseSideThree();

    ret_card_box_reverse_both_str = ret_card_box_reverse_both_str + getNewLineString();

    return ret_card_box_reverse_both_str;

} // getElementDivCardBoxBothReverseString

// Get the string that defines the div text logo
function getElementDivTextLogoString(i_tab)
{
    var ret_text_logo_str = '';

    var id_div_text_logo = '';

    var cl_div_text_logo = getClassTextLogo();

    ret_text_logo_str = ret_text_logo_str + getTabs(i_tab);

    ret_text_logo_str = ret_text_logo_str + getDivStartString(id_div_text_logo, cl_div_text_logo);

    ret_text_logo_str = ret_text_logo_str + getNewLineString();
	
	ret_text_logo_str = ret_text_logo_str + getTabs(i_tab + 1) + 'JAZZ <i>live</i> AARAU' + getNewLineString();

    ret_text_logo_str = ret_text_logo_str + getTabs(i_tab);

    ret_text_logo_str = ret_text_logo_str + getDivEndString(id_div_text_logo, cl_div_text_logo);

    ret_text_logo_str = ret_text_logo_str + getNewLineString() + getNewLineString();

    return ret_text_logo_str;

} // getElementDivTextLogoString

// Get the string that defines the div season text
function getElementDivSeasonTextString(i_season_str, i_tab)
{
    var ret_season_text_str = '';

    var id_div_season_text = '';

    var cl_div_season_text = getClassSeasonText();

    ret_season_text_str = ret_season_text_str + getTabs(i_tab);

    ret_season_text_str = ret_season_text_str + getDivStartString(id_div_season_text, cl_div_season_text);

    ret_season_text_str = ret_season_text_str + getNewLineString();
	
	ret_season_text_str = ret_season_text_str + getTabs(i_tab + 1) + i_season_str + getNewLineString();

    ret_season_text_str = ret_season_text_str + getTabs(i_tab);

    ret_season_text_str = ret_season_text_str + getDivEndString(id_div_season_text, cl_div_season_text);

    ret_season_text_str = ret_season_text_str + getNewLineString() + getNewLineString();

    return ret_season_text_str;

} // getElementDivSeasonTextString

// Get the string that defines the QR code image
function getElementDivQrCodeImageString(i_index_supporter, i_tab)
{
    var ret_qr_image_str = '';

    var id_div_qr_canvas = '';

    var cl_div_qr_canvas = getClassDivCanvasQrCode();
	
	var id_qr_canvas = 'id_qr_image_' + i_index_supporter.toString();

    var cl_qr_canvas = getClassQrCodeCanvas();

    ret_qr_image_str = ret_qr_image_str + getTabs(i_tab);

    ret_qr_image_str = ret_qr_image_str + getDivStartString(id_div_qr_canvas, cl_div_qr_canvas);

    ret_qr_image_str = ret_qr_image_str + getNewLineString();

    ret_qr_image_str = ret_qr_image_str + getTabs(i_tab + 1);

    ret_qr_image_str = ret_qr_image_str + '<img ' + ' id= "' + id_qr_canvas + '" '  + ' class= "' + cl_qr_canvas + '" ' + '>';

    ret_qr_image_str = ret_qr_image_str + getNewLineString();

    ret_qr_image_str = ret_qr_image_str + getDivEndString(id_div_qr_canvas, cl_div_qr_canvas);

    ret_qr_image_str = ret_qr_image_str + getNewLineString() + getNewLineString();

    return ret_qr_image_str;

} // getElementDivQrCodeCanvasString

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Print Page Strings /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Strings Reverse Side //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get paragraph one string for the reverse side
function getSupporterCardReverseSideOne()
{
    var ret_all_rows = '';

    ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_one" >' + '<br>';

    ret_all_rows = ret_all_rows + 'Mit diesem Ausweis erhalten Sie einen um Fr. 10.-' + '<br>';

    ret_all_rows = ret_all_rows + 'reduzierten Eintrittspreis in die Konzerte von' + '<br>';

    ret_all_rows = ret_all_rows + 'JAZZ <i>live</i> AARAU' + '<br>' + '<br>';

    ret_all_rows = ret_all_rows + 'info@jazzliveaarau.ch' + '<br>';

    ret_all_rows = ret_all_rows + 'www.jazzliveaarau.ch';

    ret_all_rows = ret_all_rows + '</p>';

    return ret_all_rows;

} // getSupporterCardReverseSideOne

// Get paragraph two string for the reverse side
function getSupporterCardReverseSideTwo()
{
    var ret_all_rows = '';

    ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_two" >' + '<br>';

    ret_all_rows = ret_all_rows + 'Konzertlokal:' + '<br>';

    ret_all_rows = ret_all_rows + 'Restaurant SPAGI BY MARCELLO' + '<br>';

    ret_all_rows = ret_all_rows + 'Metzgergasse 8, 5000 Aarau';

    ret_all_rows = ret_all_rows + '</p>';

    return ret_all_rows;

} // getSupporterCardReverseSideTwo

// Get paragraph three string for the reverse side
function getSupporterCardReverseSideThree()
{
    var ret_all_rows = '';

    ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_three" >' + '<br>';

    ret_all_rows = ret_all_rows + 'Eintrittspreise Fr.25.- / Fr. 15.-';

    ret_all_rows = ret_all_rows + '</p>';

    return ret_all_rows;

} // getSupporterCardReverseSideThree


// Get paragraph four string for the reverse side
function getSupporterCardReverseSideFour()
{
    var ret_all_rows = '';

    ret_all_rows = ret_all_rows + '<p class= "cl_p_reverse_four" >' + '<br>';

    ret_all_rows = ret_all_rows + 'info@jazzliveaarau.ch' + '<br>';

    ret_all_rows = ret_all_rows + 'www.jazzliveaarau.ch';

    ret_all_rows = ret_all_rows + '</p>';

    return ret_all_rows;

} // getSupporterCardReverseSideFour

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Strings Reverse Side ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Get the input element for the div qr code print logo and title
function getElementDivQrCodePrintLogo()
{
    return document.getElementById(getIdDivQrCodePrintLogo());

} // getElementDivQrCodePrintLogo

// Returns the identity of the div qr code print logo and title
function getIdDivQrCodePrintLogo()
{
    return 'id_div_qr_print_logo';

} // getIdDivQrCodePrintLogo

// Get the element div qr button print front
function getElementDivPrintFrontCardsButton()
{
    return document.getElementById(getIdDivPrintFrontCardsButton());

} // getElementDivPrintFrontCardsButton

// Returns the identity of the div qr button print front
function getIdDivPrintFrontCardsButton()
{
    return 'id_div_qr_button_print_front';

} // getIdDivPrintFrontCardsButton

// Get the element div qr button print reverse
function getElementDivPrintReverseCardsButton()
{
    return document.getElementById(getIdDivPrintReverseCardsButton());

} // getElementDivPrintReverseCardsButton

// Returns the identity of the div qr button print reverse
function getIdDivPrintReverseCardsButton()
{
    return 'id_div_qr_button_print_reverse';

} // getIdDivPrintReverseCardsButton

// Get the image element for the card QR code
function getElementImageQrCodeSupporter(i_index_card)
{
    return document.getElementById(getIdImageQrCodeSupporter(i_index_card));

} // getElementImageQrCodeSupporter

// Returns the identity of the image element for the vard QR code
function getIdImageQrCodeSupporter(i_index_card)
{
    return 'id_qr_image_' + i_index_card.toString();

} // getIdImageQrCodeSupporter

// Get the canvas context for the supporter QR code
function getCanvasContextQrCodeSupporter(i_index_supporter)
{
    return getElementCanvasQrCodeSupporter(i_index_supporter).getContext("2d");

} // getCanvasContextQrCodeSupporter

// Get the canvas element for the supporter QR code
function getElementCanvasQrCodeSupporter(i_index_supporter)
{
    return document.getElementById(getIdCanvasQrCodeSupporter(i_index_supporter));

} // getElementCanvasQrCodeSupporter

// Returns the identity of the canvas element for the supporter QR code
function getIdCanvasQrCodeSupporter(i_index_supporter)
{
    return 'id_qr_canvas_' + i_index_supporter.toString();

} // getIdCanvasQrCodeSupporter

// Get the canvas context for the QR code
function getCanvasContextQrCode()
{
    return getElementCanvasQrCode().getContext("2d");

} // getCanvasContextQrCode

// Get the canvas element for the QR code
function getElementCanvasQrCode()
{
    return document.getElementById(getIdCanvasQrCode());

} // getElementCanvasQrCode

// Returns the identity of the canvas element for the QR code
function getIdCanvasQrCode()
{
    return 'id_canvas_qr_code';

} // getIdCanvasQrCode

// Returns the class of the canvas element for the QR code
function getClassCanvasQrCode()
{
    return 'cl_canvas_qr_code';

} // getClassCanvasQrCode

// Returns the class of the div canvas element for the QR code
function getClassDivCanvasQrCode()
{
    return 'cl_div_qr_canvas';

} // getClassDivCanvasQrCode

// Get the div for all print pages
function getElementDivAllPrintPages()
{
    return document.getElementById(getIdDivAllPrintPages());

} // getElementDivAllPrintPages

// Returns the identity of the div for all print pages
function getIdDivAllPrintPages()
{
    return 'id_all_print_pages';

} // getIdDivAllPrintPages

// Returns the class for the print page
function getClassPrintPageContainer()
{
    return 'cl_print_page_container';

} // getClassPrintPageContainer

// Returns the class for all the print rows
function getClassAllPrintRows()
{
    return 'cl_all_print_rows';

} // getClassAllPrintRows

// Returns the class for the print page row
function getClassPrintPageRow()
{
    return 'cl_print_page_row';

} // getClassPrintPageRow

// Returns the class for the card box left
function getClassCardBoxLeft()
{
    return 'cl_card_box_left';

} // getClassCardBoxLeft

// Returns the class for the card box right
function getClassCardBoxRight()
{
    return 'cl_card_box_right';

} // getClassCardBoxRight

// Returns the class for the text logo
function getClassTextLogo()
{
    return 'cl_text_logo';

} // getClassTextLogo

// Returns the class for the supporter name
function getClassSupporterName()
{
    return 'cl_supporter_name';

} // getClassSupporterName

// Returns the class for the season text
function getClassSeasonText()
{
    return 'cl_season_text';

} // getClassSeasonText

// Returns the class for the QR code canvas
function getClassQrCodeCanvas()
{
    return 'cl_qr_canvas';

} // getClassQrCodeCanvas

// Returns the class for card box left reverse side
function getClassCardBoxLeftReverse()
{
    return 'cl_card_box_reverse_left'

} // getClassCardBoxLeftReverse

// Returns the class for card box left reverse side
function getClassCardBoxRightReverse()
{
    return 'cl_card_box_reverse_right'

} // getClassCardBoxRightReverse

// Get the element div qr button print done
function getElementDivPrintDoneCardsButton()
{
    return document.getElementById(getIdDivPrintDoneCardsButton());

} // getElementDivPrintDoneCardsButton

// Returns the identity of the div qr button print done
function getIdDivPrintDoneCardsButton()
{
    return 'id_div_qr_button_print_done';

} // getIdDivPrintDoneCardsButton

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start String Functions //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Flag telling if there shall be tabs and new lines
// TODO Can probably be removed
var g_with_tabs_and_new_lines = true;

// Number of spaces for one tab
var g_tab_number_spaces = 4;

// Returns a new line
function getNewLineString()
{
    var ret_new_line_str = '';

    if (g_with_tabs_and_new_lines)
    {
        ret_new_line_str = '\n';
    }
 
    return ret_new_line_str;

} // newLine

// Returns tab as spaces
function getTabs(i_number_tabs)
{
    var ret_tabs = '';

    if (g_with_tabs_and_new_lines)
    {
        for (var i_tab=1; i_tab<=i_number_tabs; i_tab++)
        {
            for (var i_space=1; i_space<=g_tab_number_spaces; i_space++ )
            {
                ret_tabs = ret_tabs + ' ';
            } 
        }
    }

    return ret_tabs;

} // getTabs

// Returns start div + id + equal
function getDivIdEqual()
{
    return '<div id= ';

} // getDivIdEqual

// Returns class + equal
function getClassEqual()
{
    return ' class= ';

} // getClassEqual

// Returns the div end tag
function getDivEnd()
{
    return '</div>';

} // getDivEnd

// Returns start div tag. Input data is identity of the div and the class of the div
// Empty identity and/or class string is allowed
function getDivStartString(i_id_element, i_cl_element)
{
    var ret_div_start_str = '';

    if (i_id_element.length > 0)
    {
        ret_div_start_str = ret_div_start_str + getDivIdEqual();

        ret_div_start_str = ret_div_start_str + '"' + i_id_element + '" ';
    }
    else
    {
        ret_div_start_str = ret_div_start_str + '<div';
    }

    if (i_cl_element.length > 0)
    {
        ret_div_start_str = ret_div_start_str + getClassEqual();

        ret_div_start_str = ret_div_start_str + '"' + i_cl_element + '" ';
    }
 
    ret_div_start_str = ret_div_start_str + '>';

    return ret_div_start_str;

} // getDivStartString

// Returns end div tag. Input data is identity of the div and the class of the div
// Output is the class name or the identity as a comment
// Empty identity and/or class string is allowed
function getDivEndString(i_id_element, i_cl_element)
{
    var ret_div_end_str = '';
	
	ret_div_end_str = ret_div_end_str + getDivEnd();
	
	var start_comment_str = '  <!-- ';
	
	var end_comment_str = '  -->';
	
	if (i_cl_element.length > 0)
    {
        ret_div_end_str = ret_div_end_str + start_comment_str + i_cl_element + end_comment_str;
    }
    else if (i_id_element.length > 0)
    {
		ret_div_end_str = ret_div_end_str + start_comment_str + i_id_element + end_comment_str;
    }

    return ret_div_end_str;

} // getDivEndString

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End String Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
