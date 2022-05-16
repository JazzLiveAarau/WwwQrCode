// File: ConcertData.js
// Date: 2022-05-15
// Author: Gunnar Lidén

// File content
// =============
//
// Get and set concert data that is used for category Musician
// And in the future for category Ticket

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var g_season_xml = null;

// Array with ConcertData objects.
var g_concert_data_array = [];

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Init Functions ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Initialization of concert data
function loadSeasonXmlFileCreateConcertData(i_start_season_year)
{
    QrProgress.Append('Enter loadSeasonXmlFileCreateConcertData');

    g_season_xml = new JazzSeasonXml(i_start_season_year, afterLoadSeasonXmlFileCreateConcertData);

} // loadSeasonXmlFileCreateConcertData

function afterLoadSeasonXmlFileCreateConcertData(i_season_xml)
{
    QrProgress.Append('Enter afterLoadSeasonXmlFileCreateConcertData');

    var concert_array = setConcertDataArrayFromXmlObject(i_season_xml);

    updateQrFilesXmlUploadQrFilesConcert(concert_array, i_season_xml, g_qr_files_xml_object);

} // afterLoadSeasonXmlFileCreateConcertData

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Init Functions //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Exec Event Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Execute the even click on musician button
function execEventClickQrMusicianButton()
{
    var dropdown_bandname_array = getDropdownBandNameArray();

} // execEventClickQrMusicianButton

// Get dropdown band name array
function getDropdownBandNameArray()
{
    var ret_band_names = [];

    var n_concert_data = g_concert_data_array.length;

    for (var index_concert=0; index_concert < n_concert_data; index_concert++)
    {
        var concer_data = g_concert_data_array[index_concert];

        var band_name = concer_data.getBandName();

        ret_band_names[index_concert] = band_name;
    }

    return ret_band_names;

} // getDropdownBandNameArray


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Exec Event Functions ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set SupporterData Array ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set the array with data from the XML file JazzProgramm_YYYYY_ZZZZ.xml (g_concert_data_array)
// The array is also returned. A global array is hopefully not necessary
function setConcertDataArrayFromXmlObject(i_xml)
{
    QrProgress.Append('Enter setConcertDataArrayFromXmlObject');

    g_concert_data_array = [];

    var n_concerts = i_xml.getNumberOfConcerts();

    var season_start_year = i_xml.getYearAutumnInt(); 

    for (var concert_number = 1; concert_number <= n_concerts; concert_number++)
    {
        var concert_data = new ConcertData(i_xml, season_start_year, concert_number);

        g_concert_data_array[concert_number - 1] = concert_data;
    }

    QrProgress.Append('g_concert_data_array is set (' + g_concert_data_array.length.toString() + ')');
    
    QrProgress.Append('Exit setConcertDataArrayFromXmlObject');

    return g_concert_data_array;
    
} // setConcertDataArrayFromXmlObject

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set SupporterData Array /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Update Qr Files Xml Upload New Musician Guests ////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Update the QR files XML file (QrFiles.xml) with new musician guests and upload their QR files
// Input i_qr_file_xml is the global variable g_qr_files_xml_object
function updateQrFilesXmlUploadQrFilesConcert(i_concert_array, i_season_xml, i_qr_file_xml)
{
    QrProgress.Append("Enter updateQrFilesXmlUploadQrFilesConcert");

    if (!checkUpdateQrFilesXmlUploadQrFilesConcert(i_concert_array, i_qr_file_xml))
    {
        return;
    }

    var n_concerts = i_concert_array.length;

    QrProgress.Append("Number of concerts is " + n_concerts.toString());

    var n_qr_files = i_qr_file_xml.getNumberOfQrFiles();

    QrProgress.Append("Number of registered files is " + n_qr_files.toString());

    var musician_array = [];

    var index_musician_array = 0;

    var registered_files = [];

    var index_registered = 0;

    for (var index_concert=0; index_concert < n_concerts; index_concert++)
    {
        var supporter_data = i_concert_array[index_concert];

        var musician_names = supporter_data.getConcertMusicians();

        var n_musicians = musician_names.length;

        for (var index_musician=0; index_musician < n_musicians; index_musician++)
        {
            var concert_musician_data = new ConcertMusicianData(index_concert, index_musician);

            musician_array[index_musician_array] = concert_musician_data;

            var musician_name = musician_names[index_musician];

            if (musicianIsRegisteredInQrFilesXml(musician_name, i_qr_file_xml))
            {
                registered_files[index_registered] = index_musician_array;

                index_registered = index_registered + 1;    
            }

            index_musician_array = index_musician_array + 1;
        }

    } // index_concert

    QrProgress.Append("Number of already registered files is " + registered_files.length.toString());

    var n_musician_array = musician_array.length;

    QrProgress.Append("Total number of musicians is " + n_musician_array.toString());

    var files_to_register = getIndicesForNotRegisteredFiles(n_musician_array, registered_files);

    var register_cm_data_array = [];

    for (var index_reg = 0; index_reg < files_to_register.length; index_reg++)
    {
        var index_cm_array = files_to_register[index_reg];

        var cm_data = musician_array[index_cm_array];

        register_cm_data_array[index_reg] = cm_data;
    }

    QrProgress.Append("Number of ConcertMusicianData for registration is " + register_cm_data_array.length.toString());

    registerAndUploadQrFilesXmlMusician(register_cm_data_array, i_concert_array, i_season_xml, i_qr_file_xml);

} // updateQrFilesXmlUploadQrFilesConcert

// Register files in XML file QrFiles.xml and upload QR files
function registerAndUploadQrFilesXmlMusician(i_register_cm_data_array, i_concert_array, i_season_xml, i_qr_file_xml)
{
    QrProgress.Append("Enter registerAndUploadQrFilesXmlConcert");

    var n_to_reg = i_register_cm_data_array.length;

    if (n_to_reg == 0)
    {
        QrProgress.Append("registerAndUploadQrFilesXmlMusician No files to register");  
        
        return;
    }

    n_to_reg = 4; // QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ

    for (var index_to_reg=0; index_to_reg < n_to_reg; index_to_reg++)
    {
        var concert_musician_data = i_register_cm_data_array[index_to_reg];

        var index_concert_to_reg = concert_musician_data.getIndexConcert();

        var concert_data = i_concert_array[index_concert_to_reg];

        var index_musician_to_reg = concert_musician_data.getIndexMusician();

        var musician_name = concert_data.getConcertMusician(index_musician_to_reg);

        i_qr_file_xml.appendNode();

        setDataOfAppendedQrFilesNodeAndUploadMusician(musician_name, concert_data, i_qr_file_xml)

    } // index_to_reg

    i_qr_file_xml.saveXmlFileOnServerCallback(tempForTest);

    debugDisplayXmlAsText();

    QrProgress.Append("Number of registered and uploaded QR files is " + n_to_reg.toString());


    QrProgress.Append("Exit registerAndUploadQrFilesXmlMusician");

} // registerAndUploadQrFilesXmlMusician

function tempForTest()
{
    QrProgress.Append("Enter tempForTest");
}

// Set data of appended QR files node
function setDataOfAppendedQrFilesNodeAndUploadMusician(i_musician_name, i_concert_data, i_qr_file_xml)
{
    console.log("Enter setDataOfAppendedQrFilesNodeAndUploadMusician");

	var append_number_files = i_qr_file_xml.getNumberOfQrFiles();
	
	console.log("append_number_files= " + append_number_files.toString());
	
	var file_number = append_number_files;
	
	console.log("file_number= " + file_number.toString());

    var download_code_one = i_qr_file_xml.getRandomDownloadCode();

    var download_code_two = "";

    var concert_year = i_concert_data.getConcertYear();

    var concert_month = i_concert_data.getConcertMonth();

    var concert_day = i_concert_data.getConcertDay();

    var contact_person = i_concert_data.getContactPerson();

    var contact_email = i_concert_data.getContactEmail();

    var contact_street = i_concert_data.getContactStreet();

    var contact_post_code = i_concert_data.getContactPostCode();

    var contact_city = i_concert_data.getContactCity();


    i_qr_file_xml.setFirstName(file_number, contact_person);

    i_qr_file_xml.setEmail(file_number, contact_email);

    i_qr_file_xml.setStreet(file_number, contact_street);

    i_qr_file_xml.setPostalCode(file_number, contact_post_code);

    i_qr_file_xml.setDomicil(file_number, contact_city);

    i_qr_file_xml.setQrCodeNameTwo(file_number, i_musician_name);

    i_qr_file_xml.setConcertYear(file_number, concert_year);

    i_qr_file_xml.setConcertMonth(file_number, concert_month);

    i_qr_file_xml.setConcertDay(file_number, concert_day);

	i_qr_file_xml.setSupporter(file_number, QrStrings.getBoolFalseString());
  
    i_qr_file_xml.setSponsor(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setSupporterAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setMusicianAdmission(file_number, QrStrings.getBoolTrueString());

	i_qr_file_xml.setFreeAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setSponsorAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setMemberAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setDownloadOne(file_number, download_code_one);

	i_qr_file_xml.setDownloadTwo(file_number, download_code_two);

	i_qr_file_xml.setEmailSent(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setMailSent(file_number, QrStrings.getBoolFalseString());

    i_qr_file_xml.setPrintSent(file_number, QrStrings.getBoolFalseString());

    i_qr_file_xml.setPrintBatch(file_number, QrStrings.getBoolFalseString());

    uploadQrFileImageAndTextMusician(file_number, i_qr_file_xml);

} // setDataOfAppendedQrFilesNodeAndUploadMusician

// Upload the QR image and text file for the input file number
function uploadQrFileImageAndTextMusician(i_file_number, i_qr_file_xml)
{

    var download_code_one = i_qr_file_xml.getDownloadOne(i_file_number);

    var qr_text_image = i_qr_file_xml.getQrMusicianString(i_file_number);

    var qr_text_text = i_qr_file_xml.getQrMusicianString(i_file_number);

    var image_data_url = generateQrCodeOnePersonDataUrl(qr_text_image);


    var season_start_year = i_qr_file_xml.getSeasonStartYear();

    var file_name_path_image = QrStrings.getRelativeUrlQrFileImage(season_start_year, download_code_one);

    var file_name_path_text = QrStrings.getRelativeUrlQrFileText(season_start_year, download_code_one)

    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        console.log("uploadQrFileImageAndTextMusician QR code file not saved. Execution with VSC (Live Server)");
        console.log("File number is " + i_file_number.toString());
        console.log("QR text image: " + qr_text_image);
        console.log("QR text text text:  " + qr_text_text);
        console.log("File name image: " + file_name_path_image);
        console.log("File name text:  " + file_name_path_text);

        return;
    }

    if (!saveFileWithJQueryPostFunction(file_name_path_image, image_data_url))
    {
        alert("uploadQrFileImageAndTextMusician Saving QR file image failed");

        return;
    }

    console.log("uploadQrFileImageAndTextMusician Uploaded image file: " + file_name_path_image);

    if (!saveFileWithJQueryPostFunction(file_name_path_text, qr_text_text))
    {
        alert("uploadQrFileImageAndTextMusician Saving QR file text failed");

        return;
    }

    console.log("uploadQrFileImageAndTextMusician Uploaded text file: " + file_name_path_text);

} // uploadQrFileImageAndTextMusician

// Help class 
class ConcertMusicianData
{
    constructor(i_index_concert, i_index_musician)
    {
        this.m_index_concert = i_index_concert;

        this.m_index_musician = i_index_musician;

    } // constructor

    getIndexConcert()
    {
        return this.m_index_concert;
    }

    getIndexMusician()
    {
        return this.m_index_musician;
    }

} // ConcertMusicianData

// Returns true if musician is registered in QR files XML (QrFiles.xml)
function musicianIsRegisteredInQrFilesXml(i_musician_name, i_qr_file_xml)
{
    var n_qr_files = i_qr_file_xml.getNumberOfQrFiles();

    for (var qr_file_number = 1; qr_file_number <= n_qr_files; qr_file_number++)
    {
        var qr_code_name_two = i_qr_file_xml.getQrCodeNameTwo(qr_file_number);

        var b_musician_admission = i_qr_file_xml.getMusicianAdmissionBool(qr_file_number);

        if ( qr_code_name_two == i_musician_name && b_musician_admission)
        {
            return true;
        }

    } // qr_file_number

    return false;

} // musicianIsRegisteredInQrFilesXml

// Check the input paramaters to checkUpdateQrFilesXmlUploadQrFilesConcert
function checkUpdateQrFilesXmlUploadQrFilesConcert(i_concert_array, i_qr_file_xml)
{
    var ret_bool = true;

    if (null == i_qr_file_xml)
    {
        alert("checkUpdateQrFilesXmlUploadQrFilesConcert i_qr_file_xml is null");

        ret_bool = false;
    }

    if (i_concert_array == null)
    {
        alert("checkUpdateQrFilesXmlUploadQrFilesConcert i_concert_array is null");

        ret_bool = false;        
    }
    else
    {
        if (i_concert_array.length == 0)
        {
            alert("checkUpdateQrFilesXmlUploadQrFilesConcert i_concert_array has zero length");

            ret_bool = false;           
        }
    }

    if (!ret_bool)
    {
        QrProgress.Append("Input data to checkUpdateQrFilesXmlUploadQrFilesConcert not OK");       
    }

    return ret_bool;

} // checkUpdateQrFilesXmlUploadQrFilesConcert

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Update Qr Files Xml Upload New Musician Guests //////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class ConcertData ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding data for one concert
class ConcertData
{
    // Constructor
    constructor(i_season_xml, i_season_start_year, i_concert_number)
    {
        this.m_xml = i_season_xml;

        this.m_season_start_year = i_season_start_year;

        this.m_concert_number = i_concert_number;

        this.m_band_name = '';

        this.m_concert_year = '';

        this.m_concert_month = '';

        this.m_concert_day = '';

        this.m_concert_day_name = '';

        this.m_concert_start_hour = '';

        this.m_concert_start_minute = '';

        this.m_concert_end_hour = '';

        this.m_concert_end_minute = '';

        this.m_concert_place = '';

        this.m_contact_person = '';

        this.m_contact_email = '';

        this.m_contact_telephone = '';

        this.m_contact_street = '';

        this.m_contact_post_code = '';

        this.m_contact_city = '';

        this.m_contact_iban_number = '';

        this.m_contact_remark = '';

        this.m_concert_musicians = null;


        this.setData(i_concert_number);

    } // constructor

    setData(i_concert_number)
    {
        this.m_band_name = this.m_xml.getBandName(this.m_concert_number);

        this.m_concert_year = this.m_xml.getConcertYear(this.m_concert_number);

        this.m_concert_month = this.m_xml.getConcertMonth(this.m_concert_number);

        this.m_concert_day = this.m_xml.getConcertDay(this.m_concert_number);

        this.m_concert_day_name = this.m_xml.getConcertDayName(this.m_concert_number);

        this.m_concert_start_hour = this.m_xml.getConcertStartHour(this.m_concert_number);

        this.m_concert_start_minute = this.m_xml.getConcertStartMinute(this.m_concert_number);

        this.m_concert_end_hour = this.m_xml.getConcertEndHour(this.m_concert_number);

        this.m_concert_end_minute = this.m_xml.getConcertEndMinute(this.m_concert_number);

        this.m_concert_place = this.m_xml.getConcertPlace(this.m_concert_number);

        this.m_contact_person = this.m_xml.getContactPerson(this.m_concert_number);

        this.m_contact_email = this.m_xml.getContactEmail(this.m_concert_number);

        this.m_contact_telephone = this.m_xml.getContactTelephone(this.m_concert_number);

        this.m_contact_street = this.m_xml.getContactStreet(this.m_concert_number);

        this.m_contact_post_code = this.m_xml.getContactPostCode(this.m_concert_number);

        this.m_contact_city = this.m_xml.getContactCity(this.m_concert_number);

        this.m_contact_iban_number = this.m_xml.getContactIbanNumber(this.m_concert_number);

        this.m_contact_remark = this.m_xml.getContactRemark(this.m_concert_number);

        this.setMusicians();

    } // setData

    setMusicians()
    {
        this.m_concert_musicians = []; 

        var n_musicians = this.m_xml.getNumberOfMusicians(this.m_concert_number);

        for (var musician_number = 1; musician_number <= n_musicians; musician_number++)
        {
            var musician_name = this.m_xml.getMusicianName(this.m_concert_number, musician_number);

            this.m_concert_musicians[musician_number - 1] = musician_name;

        }

    } // setMusicians

    getBandName() { return this.m_band_name }

    getConcertYear() { return this.m_concert_year }

    getConcertMonth() { return this.m_concert_month }

    getConcertDay() { return this.m_concert_day }

    getConcertDayName() { return this.m_concert_day_name }

    getConcertStartHour() { return this.m_concert_start_hour }

    getConcertStartMinute() { return this.m_concert_start_minute }

    getConcertEndHour() { return this.m_concert_end_hour }

    getConcertEndMinute() { return this.m_concert_end_minute }

    getConcertPlace() { return this.m_concert_place }

    getContactPerson() { return this.m_contact_person }

    getContactEmail() { return this.m_contact_email }

    getContactTelephone() { return this.m_contact_telephone } 

    getContactStreet() { return this.m_contact_street } 

    getContactPostCode() { return this.m_contact_post_code } 

    getContactCity() { return this.m_contact_city }

    getContactIbanNumber() { return this.m_contact_iban_number }

    getContactRemark() { return this.m_contact_remark }

    getConcertMusicians() { return this.m_concert_musicians }

    getConcertMusician(i_index_musician) { return this.m_concert_musicians[i_index_musician] }
    
    // Get the date string normally is used in Switzerland
    getSwissDateString()
    {
        var ret_swiss_date_str = '';
    
        var concert_month_name = this.getMonthName(this.m_concert_month);
    
        ret_swiss_date_str = ret_swiss_date_str + this.m_concert_day.toString() + '. ';
    
        ret_swiss_date_str = ret_swiss_date_str + concert_month_name + ' ';
    
        ret_swiss_date_str = ret_swiss_date_str + this.m_concert_year.toString();
    
        return ret_swiss_date_str;
    
    } // getSwissDateString

    // Get the ISO standard date string
    getIsoDateString()
    {
        var ret_iso_date_str = '';
    
        var month_formatted = this.getFormattedTenNumber(this.m_concert_month);
    
        var day_formatted = this.getFormattedTenNumber(this.m_concert_day);
    
        ret_iso_date_str = ret_iso_date_str +  this.m_concert_year.toString() + '-';
    
        ret_iso_date_str = ret_iso_date_str + month_formatted.toString() + '-';
    
        ret_iso_date_str = ret_iso_date_str + day_formatted.toString();
    
        return ret_iso_date_str;
    
    } // getIsoDateString

    // Returns the name of the month for a given month number
    getMonthName(i_concert_month)
    {
        var ret_month = 'Undefined';
    
        if (1 == i_concert_month)
        {
            ret_month = 'Januar';
        }
        else if (2 == i_concert_month)
        {
            ret_month = 'Februar';
        }
        else if (3 == i_concert_month)
        {
            ret_month = 'März';
        }
        else if (4 == i_concert_month)
        {
            ret_month = 'April';
        }
        else if (5 == i_concert_month)
        {
            ret_month = 'Mai';
        }
        else if (6 == i_concert_month)
        {
            ret_month = 'Juni';
        }
        else if (7 == i_concert_month)
        {
            ret_month = 'Juli';
        }
        else if (8 == i_concert_month)
        {
            ret_month = 'August';
        }
        else if (9 == i_concert_month)
        {
            ret_month = 'September';
        }
        else if (10 == i_concert_month)
        {
            ret_month = 'Oktober';
        }
        else if (11 == i_concert_month)
        {
            ret_month = 'November';
        }
        else if (12 == i_concert_month)
        {
            ret_month = 'Dezember';
        }
    
        return ret_month;
    
    } // getMonthName

    // Get formatted number, i.e. starting with '0' for numbers 1 to 9
    getFormattedTenNumber(i_number)
    {
        var ret_number = '';
    
        if (i_number >= 100)
        {
            //alert('getFormattedTenNumber Input number greater than or equal 100');
    
            // Should not occur
    
            return  i_number.toString();
        }
     
        if (i_number <= 9)
        {
            ret_number = '0' + i_number.toString();
        }
        else
        {
            ret_number = i_number.toString();
        }
     
        return ret_number;
    
    } // getFormattedTenNumber
    
} // ConcertData


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class ConcertData /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


