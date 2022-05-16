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

function afterLoadSeasonXmlFileCreateConcertData(i_xml)
{
    QrProgress.Append('Enter afterLoadSeasonXmlFileCreateConcertData');

    setConcertDataArrayFromXmlObject(i_xml);

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


