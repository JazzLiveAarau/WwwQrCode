// File: QrCodeShow.js
// Date: 2022-06-14
// Author: Gunnar Lidén

// File content
// =============
//
// Show a QR Code file

// References
// Store and get image from local store. Use toDataURL(type, quality)
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/

// https://www.mediaevent.de/javascript/canvas-to-data-url.html

// Learning PWA
// ============
//
// Source code
// https://github.com/iamshaunjp/pwa-tutorial

// Web manifest
// https://developer.mozilla.org/de/docs/Web/Manifest
// https://www.w3.org/TR/appmanifest/#dfn-start_url
// https://web.dev/add-manifest/
//
// Lesson 1 What Are PWA's?
// https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7
// Lesson 2 Setting up a Project
// https://www.youtube.com/watch?v=JQaL5YiSuqE&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=2
// Lesson 3 The Web App Manifest
//https://www.youtube.com/watch?v=AlEdGOLhuM8&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=3
// Lesson 4 Android Emulator
// https://www.youtube.com/watch?v=1VVKhnHNBeQ&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=4
// Lesson 5 iOS Support
// https://www.youtube.com/watch?v=jy6hX48pRHw&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=5
// Lesson 6 Intro to Service Workers
// https://www.youtube.com/watch?v=hxiggHZOGlQ&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=6
// Lesson 7 Service Worker Life-cycle
// https://www.youtube.com/watch?v=NhQfvZoRb2Q&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=7
// Lesson 8 Registering a Service Worker
// https://www.youtube.com/watch?v=6s697AJdlB8&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=8
// Lesson 9 The Install Event
// https://www.youtube.com/watch?v=JnCEXQo_TiI&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=9
// Lesson 10 The 'Activate' Event
// https://www.youtube.com/watch?v=AmWj52zw9R8&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=10
// Lesson 11 Lighthouse Audit
// https://www.youtube.com/watch?v=egmwY9n6qWY&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=11
// Lesson 12 Fetch Events
// https://www.youtube.com/watch?v=C0vh57N7vM4&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=12
// Lesson 13 The Install Banner
// https://www.youtube.com/watch?v=9whdWJ4q7jE&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=13
// Lesson 14 Offline Mode Explained
// https://www.youtube.com/watch?v=Vz1D28zshaI&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=14
// Lesson 15 Pre-Caching Assets
// https://www.youtube.com/watch?v=kT3qSf7jG5c&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=15
// Lesson 16 Getting Cached Assets
// https://www.youtube.com/watch?v=0mAw9Na6hyM&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=16
// Lesson 17 Cache Versioning
// https://www.youtube.com/watch?v=g9LfyCZjeKI&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=17
// Lesson 18 Dynamic Caching
// https://www.youtube.com/watch?v=ChXgikdQJR8&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=18
// Lesson 19 Offline Fallback Page
// https://www.youtube.com/watch?v=KLQELCvb-B0&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=19
// Lesson 20 Conditional Fallbacks
// https://www.youtube.com/watch?v=K9NXQZxKMko&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=20
// Lesson 21 Limiting Cache Size
// https://www.youtube.com/watch?v=CHBoXdVdPi0&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=21
// Lesson 22 Site Audit Refresh
// https://www.youtube.com/watch?v=1tkK-OVno84&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=22
// Lesson 23 Firestore Database
// https://www.youtube.com/watch?v=ZfL61cOUImw&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=23
// Lesson 24 Realtime Data
// https://www.youtube.com/watch?v=JP3L0jIXvrY&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=24
// Lesson 25 Updating the UI
// https://www.youtube.com/watch?v=ezNvFzc0f30&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=25
// Lesson 26 Offline Data
// https://www.youtube.com/watch?v=ciu62KLlwGQ&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=26
// Lesson 27 Adding Recipes
// https://www.youtube.com/watch?v=BHCk5TSNUkI&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=27
// Lesson 28 Deleting Recipes
// https://www.youtube.com/watch?v=zdb8_a0DXTg&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=28
// Lesson 29 Deploying to Firebase
// https://www.youtube.com/watch?v=e-aAAbY0miY&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=29
// Lesson 30 Testing the App
// https://www.youtube.com/watch?v=sI7EdkYiU20&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=30
// Lesson 31 Next Steps
// https://www.youtube.com/watch?v=7y7xlVo4Iio&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&index=31



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// windows.localStorage key for the QR code season_start_year
var g_local_storage_qr_season_start_year = 'qr_season_start_year';

// windows.localStorage key for the QR code download code
var g_local_storage_qr_image_download_code = 'qr_code_image_download_code';

// windows.localStorage key for the QR code image
var g_local_storage_qr_image_data_url = 'qr_code_image_data_url';

// windows.localStorage key for the QR code text data
var g_local_storage_qr_text_data = 'qr_code_text_data';

// An instannce of class QrString. Note that the global variable not is used
var g_gr_strings = null;

// Class Internet has functions to check if Internet is available
var g_internet = null;

// Flag telling if internet is available
var g_internet_is_available = null;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// On load function for show a QR code file
// 1. Start interval function checking that there is connection to Internet
//    Creation of the class Internet
// 2. Hide most of the elements on the web page. Call of hideDisplayElementsOnloadQrCodeShow
// 3. Determine if Internet is available (Internet.isAvailable), if QR Code data is saved
//    in local storage (isQrCodeDataSavedInLocalStorage) and if there is no download code
//    in the query string or if query code is equal to local storaga code. Call of
//    noCodeInQueryStringOrEqualToLocal
// 4. Get season start year (getSeasonStartYear, SeasonStartYear.php) with callback function
//    - displayQrCodeWithDataFromLocalStorage if in local storage and no new code in query string and internet .... TODO Try to find another solution with no internet
//    - callbackSeasonStartYearShow if Internet is available
//    Show error message if there is no Internet (displayDivQrShowInternetConnection)
//
function onloadQrCodeShow()
{
    console.log("Enter onloadQrCodeShow");

    g_gr_strings = new QrStrings();

    var el_logo_title = getElementDivQrCodeShowLogo();

    el_logo_title.innerHTML = QrStrings.getQrCodeShowTitle();

    var check_interval = 10000; // milliseconds Perhaps not necessary

    g_internet = new Internet(eventInternetIsAvailableQrShow, eventInternetIsNotAvailableQrShow, check_interval);

    g_internet_is_available = g_internet.isAvailable();

    setQrInfoText();

    hideDisplayElementsOnloadQrCodeShow();

    var b_qr_code_saved = isQrCodeDataSavedInLocalStorage();

    var b_query_local = noCodeInQueryStringOrEqualToLocal();

    // 2022-06-12 if (b_qr_code_saved && b_query_local && g_internet_is_available) 
    if (b_qr_code_saved && b_query_local) 
    {
        console.log("onloadQrCodeShow  Download code is saved in local storage and there is no query string with download code");

        var season_start_year_int = getSeasonStartYearAsIntFromLocalStorage();

        if (season_start_year_int < 2021)
        {
            alert("onloadQrCodeShow Error season_start_year_int= " + season_start_year_int.toString());

            return;
        }

        displayQrCodeWithDataFromLocalStorage(season_start_year_int);
    }
    else if (g_internet_is_available)
    {
        console.log("onloadQrCodeShow  Internet is available");

        getSeasonStartYear(callbackSeasonStartYearShow);
    }
    else if (!g_internet_is_available)
    {
        displayDivQrShowInternetConnection();
    }
    else
    {
        alert("onloadQrCodeShow Error b_qr_code_saved= " + b_qr_code_saved.toString() + " b_query_local= " + b_query_local.toString());
    }

} // onloadQrCodeShow

// 
function eventInternetIsAvailableQrShow()
{
    g_internet_is_available = true;

    hideDivQrShowInternetConnection();

} // eventInternetIsAvailableQrShow

// 
function eventInternetIsNotAvailableQrShow()
{
    g_internet_is_available = false;

    displayDivQrShowInternetConnection();

} // eventInternetIsNotAvailableQrShow

// Callback function retrieving the season start year
function callbackSeasonStartYearShow(i_season_start_year)
{
    setSeasonStartYearInLocalStorage(i_season_start_year);

    setInputQrQodeElementWithQueryString();

} // callbackSeasonStartYearShow

// Sets the dowload code if input as query string
// The query string is deleted from the URL. 
// The user should save the URL as favorite in the telephone,
// but not with the query string
function setInputQrQodeElementWithQueryString()
{
    var download_code = getDownloadCodeFromQueryString();

    var el_input_code = getElementInputCodeForQrCodeFile();

    el_input_code.value = download_code;

} // setInputQrQodeElementWithQueryString

// Returns the download code extracted from the query string
// If there is no query string an empty string is returned
function getDownloadCodeFromQueryString()
{
    var query_string = window.location.search;

    if (query_string == null || query_string.length < 4)
    {
        return '';
    }

    var download_code = query_string.substring(1);    

    return download_code;

} // getDownloadCodeFromQueryString

// Returns true if there is no download code in the query string or
// if query code is equal to the download code saved in local storage
function noCodeInQueryStringOrEqualToLocal()
{
    var code_query =  getDownloadCodeFromQueryString();

    if (code_query.length == 0)
    {
        console.log("noCodeInQueryStringOrEqualToLocal No code in the query string");

        return true;
    }

    console.log("noCodeInQueryStringOrEqualToLocal Download code in the query string");

    var code_local_storage = getDownloadCodeFromLocalStorage();

    if (code_query == code_local_storage)
    {
        console.log("noCodeInQueryStringOrEqualToLocal Download query code is equal to download code in local storage");

        return true;
    }
    else
    {
        console.log("noCodeInQueryStringOrEqualToLocal Download query code is NOT equal to download code in local storage");

        return false;
    }

} // noCodeInQueryStringOrEqualToLocal

// User clicked button show a QR file
function clickShowQrFile()
{
    console.log("Enter clickShowQrFile");

    var file_name_image = getServerFileNameImageFromInputElement();

    console.log("file_name_image " + file_name_image);

    if (file_name_image.length == 0)
    {
        return;
    }

    displayHideElementsClickShowQrFile();

    var b_image_file = true;

    readTextFileOnServer(b_image_file, file_name_image, showQrCodeImageAndTextAfterLoadFromServer);

} // clickShowQrFile


// User clicked download a new QR code
function clickNewQrFile()
{
    console.log("Enter clickNewQrFile");

    deleteQrCodeDataInLocalStorage();

    displayHideElementsClickNewQrFile();

} // clickNewQrFile

// User clicked the button show information
function clickShowQrInfo()
{
    displayHideElementsClickShowQrInfo();

} // clickShowQrInfo

// User clicked the button close information
function clickCloseQrInfo()
{
    displayHideElementsClickCloseQrInfo();

} // clickCloseQrInfo

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Show Qr File Functions ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Displays QR data from the local storage
function displayQrCodeWithDataFromLocalStorage(i_season_start_year)
{
    console.log("Enter displayQrCodeWithDataFromLocalStorage");

    if (!isQrCodeDataSavedInLocalStorage())
    {
        console.log(" Qr code data is not set");

        alert("displayQrCodeWithDataFromLocalStorage Qr code data is not set");

        return false;
    }

    var local_download_code = getDownloadCodeFromLocalStorage();

    var local_image_data_url = getQrImageDataUrlFromLocalStorage();

    var local_text_data = getQrTextDataFromLocalStorage();

    setDownloadCodeInputElement(local_download_code);

    setQrCodeImageWithDataUrl(local_image_data_url);

    setQrCodeTextFromTextData(local_text_data);

    displayHideElementsClickShowQrFile();

    console.log("Exit displayQrCodeWithDataFromLocalStorage");

} // displayQrCodeWithDataFromLocalStorage

// Show the QR code image after getting the file data from the server
function showQrCodeImageAndTextAfterLoadFromServer(i_data_url)
{
    console.log("Enter showQrCodeImageAndTextAfterLoadFromServer");

    if (i_data_url == QrStrings.failureLoadingQrFileCode())
    {
        hideShowQrCodeImage();

        hideDivQrCodeButtonShowInfo();

        showQrCodeTextAfterLoadFromServer(QrStrings.errorUnvalidDownloadCode());

        return;
    }

    setQrCodeImageWithDataUrl(i_data_url);

    var file_name_text = getServerFileNameTextFromInputElement();

    console.log("file_name_text " + file_name_text);

    if (file_name_text.length == 0)
    {
        return;
    }

    var b_image_file = false;

    readTextFileOnServer(b_image_file, file_name_text, showQrCodeTextAfterLoadFromServer);

    var download_code_query_str = getDownloadCodeFromQueryString();

    if (download_code_query_str.length != 0)
    {
        location.href = QrStrings.urlFullQrCodeShowWebPage();
    }

} // showQrCodeImageAndTextAfterLoadFromServer

// Set the QR code image with image data URL
function setQrCodeImageWithDataUrl(i_data_url)
{
    console.log("Enter setQrCodeImageWithDataUrl");

    var el_image = getElementQrCodeImage();

    el_image.width = QrStrings.getCanvasSizeForDataUrl();

    el_image.height = QrStrings.getCanvasSizeForDataUrl();

    console.log("Image size is " + el_image.width.toString());

    el_image.src = i_data_url;

} // setQrCodeImageWithDataUrl

// Show the QR code text after getting the file data from the server
function showQrCodeTextAfterLoadFromServer(i_content_file)
{
    console.log("Enter showQrCodeTextAfterLoadFromServer");

    console.log("i_content_file= " + i_content_file);

    if (i_content_file == QrStrings.failureLoadingQrFileCode())
    {
        console.log("Error code " + i_content_file);

        alert("showQrCodeTextAfterLoadFromServer Error code " + i_content_file);

        return;
    }

    setQrCodeTextFromTextData(i_content_file);

    console.log("Exit showQrCodeTextAfterLoadFromServer");

} // showQrCodeTextAfterLoadFromServer

// Set QR code from text data, i.e. text in a file
function setQrCodeTextFromTextData(i_content_file)
{
    var display_text = QrStrings.getTextForQrCodeShow(i_content_file);

    var el_text = getElementDivQrCodeShowText();

    el_text.innerHTML = display_text;

} // setQrCodeTextFromTextData

// Construct the server file name from the input code and return the name
function getServerFileNameImageFromInputElement()
{
    var down_load_code = getDownloadCodeFromInputElement();

    if (down_load_code.length == 0)
    {
        return '';
    }

    initQrCodeDataInLocalStorageIfDownloadCodesNotEqual(down_load_code);

    var file_name_path_image = '';

    var season_start_year = getSeasonStartYearAsIntFromLocalStorage();

    if (season_start_year < 2021)
    {
        alert("getServerFileNameImageFromInputElement Season start year from local storage is " + season_start_year.toString());

        return '';        
    }

    file_name_path_image = QrStrings.getRelativeUrlQrFileImage(season_start_year, down_load_code);

    return file_name_path_image;

} // getServerFileNameImageFromInputElement

// Construct the server file name from the input code and return the name
function getServerFileNameTextFromInputElement()
{
    var down_load_code = getDownloadCodeFromInputElement();

    if (down_load_code.length == 0)
    {
        return '';
    }

    var file_name_path_text = '';

    var season_start_year = getSeasonStartYearAsIntFromLocalStorage();

    if (season_start_year < 2021)
    {
        alert("getServerFileNameTextFromInputElement Season start year from local storage is " + season_start_year.toString());

        return '';        
    }

    file_name_path_text = QrStrings.getRelativeUrlQrFileText(season_start_year, down_load_code);

    return file_name_path_text;

} // getServerFileNameTextFromInputElement

// Get the dowload code from the input element
function getDownloadCodeFromInputElement()
{
    var ret_code_str = '';

    var el_input_code = getElementInputCodeForQrCodeFile();

    var code_for_qr_file_str = el_input_code.value;

    code_for_qr_file_str = code_for_qr_file_str.trim();

    if (code_for_qr_file_str.length == 0)
    {
        alert(QrStrings.errorDownloadCodeNotSet());

        return '';
    }

    if (code_for_qr_file_str.length != QrStrings.getDownloadCodeLength())
    {
        alert(QrStrings.errorNotTheRightNumberOfCharactersForDownloadCode());

        return '';
    }

    ret_code_str = code_for_qr_file_str;
    
    return ret_code_str;

} // getDownloadCodeFromInputElement

// Sets the download code input element
function setDownloadCodeInputElement(i_download_code)
{
    var el_input_code = getElementInputCodeForQrCodeFile();

    el_input_code.value = i_download_code;

} // setDownloadCodeInputElement

// Sets the info text
function setQrInfoText()
{
    var el_div_text = getElementDivQrCodeShowInfoText();

    var info_text = QrStrings.getSupporterInformationForQrShowString();

    el_div_text.innerHTML = info_text;

} // setQrInfoText

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Show Qr File Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Hide And Display Functions ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Hides and displays elements for function onloadQrCodeShow()
function hideDisplayElementsOnloadQrCodeShow()
{
    console.log("Enter hideDisplayElementsOnloadQrCodeShow");

    hideShowQrCodeImage();

    hideDivQrCodeShowText();

    hideDivButtonShowNewQrFile();

    hideDivQrCodeShowInfo();

    hideDivQrCodeButtonShowInfo();

    hideDivQrShowInternetConnection();

} // hideDisplayElementsOnloadQrCodeShow

// Displays and hides elements for function clickShowQrFile()
function displayHideElementsClickShowQrFile()
{
    console.log("Enter hideDisplayElementsOnloadQrCodeShow");

    displayShowQrCodeImage();

    displayDivQrCodeShowText();

    hideDivInputDownloadCode();

    hideDivButtonShowQrFile();

    displayDivButtonShowNewQrFile();

    displayDivQrCodeButtonShowInfo();

} // displayHideElementsClickShowQrFile

// Displays and hides elements for function clickShowQrFile()
function displayHideElementsClickNewQrFile()
{
    console.log("Enter displayHideElementsClickNewQrFile");

    hideShowQrCodeImage();
    
    displayDivInputDownloadCode();

    hideDivQrCodeShowText();

    displayDivButtonShowQrFile();

    hideDivButtonShowNewQrFile();

    hideDivQrCodeShowInfo();

    hideDivQrCodeButtonShowInfo();

} // displayHideElementsClickNewQrFile

// Displays and hides elements for function clickShowQrInfo()
function displayHideElementsClickShowQrInfo()
{
	displayDivQrCodeShowInfo();
	
	hideDivQrCodeButtonShowInfo();

} // displayHideElementsClickShowQrInfo

// Displays and hides elements for function clickCloseQrInfo()
function displayHideElementsClickCloseQrInfo()
{
	hideDivQrCodeShowInfo();
	
	displayDivQrCodeButtonShowInfo();

} // displayHideElementsClickCloseQrInfo

// Hide the QR code image
function hideShowQrCodeImage()
{
    var el_image = getElementQrCodeImage();

    el_image.style.display = 'none';

} // hideShowQrCodeImage

// Display the QR code image
function displayShowQrCodeImage()
{
    var el_image = getElementQrCodeImage();

    el_image.style.display = 'block';

} // displayShowQrCodeImage

// Hide the div QR code text
function hideDivQrCodeShowText()
{
    var el_image = getElementDivQrCodeShowText();

    el_image.style.display = 'none';

} // hideDivQrCodeShowText

// Display the div QR code text
function displayDivQrCodeShowText()
{
    var el_image = getElementDivQrCodeShowText();

    el_image.style.display = 'block';

} // displayDivQrCodeShowText

// Hide the div input download code
function hideDivInputDownloadCode()
{
    var el_image = getElementDivInputDownloadCode();

    el_image.style.display = 'none';

} // hideDivInputDownloadCode

// Display the div input download code
function displayDivInputDownloadCode()
{
    var el_image = getElementDivInputDownloadCode();

    el_image.style.display = 'block';

} // displayDivInputDownloadCode

// Hide the div button show QR code
function hideDivButtonShowQrFile()
{
    var el_button = getElementDivButtonShowQrFile();

    el_button.style.display = 'none';

} // hideDivButtonShowQrFile

// Display the div button show QR code
function displayDivButtonShowQrFile()
{
    var el_button = getElementDivButtonShowQrFile();

    el_button.style.display = 'block';

} // displayDivButtonShowQrFile

// Hide the div button show new QR code
function hideDivButtonShowNewQrFile()
{
    var el_button = getElementDivButtonShowNewQrFile();

    el_button.style.display = 'none';

} // hideDivButtonShowNewQrFile

// Display the div button show new QR code
function displayDivButtonShowNewQrFile()
{
    var el_button = getElementDivButtonShowNewQrFile();

    el_button.style.display = 'block';

} // displayDivButtonShowNewQrFile

// Hide the div qr code show information
function hideDivQrCodeShowInfo()
{
    var el_image = getElementDivQrCodeShowInfo();

    el_image.style.display = 'none';

} // hideDivQrCodeShowInfo

// Display the div qr code show information
function displayDivQrCodeShowInfo()
{
    var el_image = getElementDivQrCodeShowInfo();

    el_image.style.display = 'block';

} // displayDivQrCodeShowInfo

// Hide the div qr code button show information
function hideDivQrCodeButtonShowInfo()
{
    var el_image = getElementDivQrCodeButtonShowInfo();

    el_image.style.display = 'none';

} // hideDivQrCodeButtonShowInfo

// Display the div qr code button show information
function displayDivQrCodeButtonShowInfo()
{
    var el_image = getElementDivQrCodeButtonShowInfo();

    el_image.style.display = 'block';

} // displayDivQrCodeButtonShowInfo

// Hide the div qr show internet connection
function hideDivQrShowInternetConnection()
{
    var el_image = getElementDivQrShowInternetConnection();

    el_image.style.display = 'none';

} // hideDivQrShowInternetConnection

// Display the div qr show internet connection
function displayDivQrShowInternetConnection()
{
    var el_image = getElementDivQrShowInternetConnection();

    el_image.style.display = 'block';

    el_image.innerHTML = QrStrings.errorNoInternetConnectionQrCodeNotSaved();

} // displayDivQrShowInternetConnection

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Hide And Display Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Get Html Elements, Identities And Classes /////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// Get the input element for the div qr code show logo and title
function getElementDivQrCodeShowLogo()
{
    return document.getElementById(getIdDivQrCodeShowLogo());

} // getElementDivQrCodeShowLogo

// Returns the identity of the div qr code show logo and title
function getIdDivQrCodeShowLogo()
{
    return 'id_div_qr_show_logo';

} // getIdDivQrCodeShowLogo

// Get the div element for the QR code image
function getElementDivQrCodeImage()
{
    return document.getElementById(getIdDivQrCodeImage());

} // getElementDivQrCodeImage

// Returns the identity of the div element for the QR code image
function getIdDivQrCodeImage()
{
    return 'id_div_qr_code_image';

} // getIdDivQrCodeImage

// Returns the class of the div element for the QR code image
function getClassDivQrCodeImage()
{
    return 'cl_div_qr_code_image';

} // getClassDivQrCodeImage

// Get the element for the QR code image
function getElementQrCodeImage()
{
    return document.getElementById(getIdQrCodeImage());

} // getElementQrCodeImage

// Returns the identity of the image element for the QR code image
function getIdQrCodeImage()
{
    return 'id_qr_code_image';

} // getIdQrCodeImage

// Get the input element for the code for the QR file
function getElementInputCodeForQrCodeFile()
{
    return document.getElementById(getIdInputCodeForQrCodeFile());

} // getElementInputCodeForQrCodeFile

// Returns the identity of the for the code for the QR file
function getIdInputCodeForQrCodeFile()
{
    return 'id_input_download_code';

} // getIdInputCodeForQrCodeFile

// Get the input element for the div button show QR code
function getElementDivButtonShowQrFile()
{
    return document.getElementById(getIdDivButtonShowQrFile());

} // getElementDivButtonShowQrFile

// Returns the identity of the the div button show QR code
function getIdDivButtonShowQrFile()
{
    return 'id_div_button_show_qr_file';

} // getIdDivButtonShowQrFile

// Get the input element for the div QR code text
function getElementDivQrCodeShowText()
{
    return document.getElementById(getIdDivQrCodeShowText());

} // getElementDivQrCodeShowText

// Returns the identity of the the div QR code text
function getIdDivQrCodeShowText()
{
    return 'id_div_qr_code_show_text';

} // getIdDivQrCodeShowText

// Get the input element for the div input download code
function getElementDivInputDownloadCode()
{
    return document.getElementById(getIdDivInputDownloadCode());

} // getElementDivInputDownloadCode

// Returns the identity of the the div input download code
function getIdDivInputDownloadCode()
{
    return 'id_div_input_download_code';

} // getIdDivInputDownloadCode

// Get the input element for the div button show new QR code
function getElementDivButtonShowNewQrFile()
{
    return document.getElementById(getIdDivButtonShowNewQrFile());

} // getElementDivButtonShowNewQrFile

// Returns the identity of the the div button show new QR code
function getIdDivButtonShowNewQrFile()
{
    return 'id_div_button_show_new_qr_file';

} // getIdDivButtonShowNewQrFile

// Get the input element for the div QR code show info text
function getElementDivQrCodeShowInfoText()
{
    return document.getElementById(getIdDivQrCodeShowInfoText());

} // getElementDivQrCodeShowInfoText

// Returns the identity of the div QR code show info text
function getIdDivQrCodeShowInfoText()
{
    return 'id_div_qr_code_show_info_text';

} // getIdDivQrCodeShowInfoText

// Get the input element for the div qr code show information
function getElementDivQrCodeShowInfo()
{
    return document.getElementById(getIdDivQrCodeShowInfo());

} // getElementDivQrCodeShowInfo

// Returns the identity of the div qr code show information
function getIdDivQrCodeShowInfo()
{
    return 'id_div_qr_code_show_info';

} // getIdDivQrCodeShowInfo

// Get the input element for the div qr code button show information
function getElementDivQrCodeButtonShowInfo()
{
    return document.getElementById(getIdDivQrCodeButtonShowInfo());

} // getElementDivQrCodeButtonShowInfo

// Returns the identity of the div qr code button show information
function getIdDivQrCodeButtonShowInfo()
{
    return 'id_div_button_show_info';

} // getIdDivQrCodeButtonShowInfo

// Get the input element for the div qr show internet connection
function getElementDivQrShowInternetConnection()
{
    return document.getElementById(getIdDivQrShowInternetConnection());

} // getElementDivQrShowInternetConnection

// Returns the identity of the div qr show internet connection
function getIdDivQrShowInternetConnection()
{
    return 'id_div_qr_show_internet_connection';

} // getIdDivQrShowInternetConnection

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Get Html Elements, Identities And Classes ///////////////////
///////////////////////////////////////////////////////////////////////////////////////////
