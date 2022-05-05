// File: SupporterData.js
// Date: 2022-05-05
// Author: Gunnar Lidén

// File content
// =============
//
// Get and set supporter data

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Array with SupporterData objects
var g_supporter_data_array = [];

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Set SupporterData Array ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set the array with data from the XML file Supporter.xml
function setSupporterDataArrayFromXmlObject(i_xml)
{
    QrProgress.Append('Enter setSupporterDataArrayFromXmlObject');

    g_supporter_data_array = [];

    var n_supporters = i_xml.getNumberOfSupporters();

    var out_index = 0;

    for (var supporter_number = 1; supporter_number <= n_supporters; supporter_number++)
    {
        var contribution_int = i_xml.getContributionInt(supporter_number);

        if (contribution_int - 60 >= 0)
        {
            var supporter_data = new SupporterData(i_xml, g_season_start_year, supporter_number);

            g_supporter_data_array[out_index] = supporter_data;

            out_index = out_index + 1;
        }
    }

    QrProgress.Append('g_supporter_data_array is set (' + g_supporter_data_array.length.toString() + ')');
    
    QrProgress.Append('Exit setSupporterDataArrayFromXmlObject');
    
} // setSupporterDataArrayFromXmlObject




///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set SupporterData Array /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Class SupporterData ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Class holding data for one supporter
class SupporterData
{
    // Constructor
    constructor(i_supporter_xml, i_season_start_year, i_supporter_number)
    {
        this.m_xml = i_supporter_xml;

        this.m_season_start_year = i_season_start_year;

        this.m_supporter_number = i_supporter_number;

        this.m_first_name = '';

        this.m_family_name = '';

        this.m_house_number = '';

        this.m_postal_code = '';

        this.m_domicil = '';

        this.m_email = '';

        this.m_comment = '';

        this.m_contribution = 0;

        this.setData(i_supporter_number);

    } // constructor

    setData(i_supporter_number)
    {
        this.m_first_name = this.m_xml.getFirstName(this.m_supporter_number);

        this.m_family_name = this.m_xml.getFamilyName(this.m_supporter_number);

        this.m_house_number = this.m_xml.getHouseNumber(this.m_supporter_number);

        this.m_postal_code = this.m_xml.getPostalCode(this.m_supporter_number);

        this.m_domicil = this.m_xml.getDomicil(this.m_supporter_number);

        this.m_email = this.m_xml.getEmail(this.m_supporter_number);

        this.m_comment = this.m_xml.getComment(this.m_supporter_number);

        this.m_contribution = parseInt(this.m_xml.getContribution(this.m_supporter_number, this.m_season_start_year));

    } // setData

    getFirstName() { return this.m_first_name }

    getFamilyName() { return this.m_family_name } 

    getHouseNumber() { return this.m_house_number } 

    getPostalCode() { return this.m_postal_code }

    getDomicil() { return this.m_domicil }

    getEmail() { return this.m_email }

    getComment() { return this.m_comment }

    getContribution() { return this.m_contribution } 

    getFirstAndFamilyName()
    {
        return this.m_first_name + ' ' + this.m_family_name;

    } // getFirstAndFamilyName

} // SupporterData


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Class SupporterData /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////




