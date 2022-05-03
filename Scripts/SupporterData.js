// File: SupporterData.js
// Date: 2022-05-03
// Author: Gunnar Lidén

// File content
// =============
//
// Get and set supporter data

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Array with all supporter names
var g_supporter_names = [];


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Global Parameters ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Event Functions ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Callback function after load of XML file Supporter.xml
function afterLoadOfSupporterXmlFile(i_xml)
{
    var n_supporters = i_xml.getNumberOfSupporters();

    setTestArrayFromXmlObject(i_xml);

    var n_test_array = g_supporter_names.length;

    // alert("Number persons that paid over 60 CHF is " + n_test_array.toString() + ' Less than sixty is ' + (n_supporters - n_test_array).toString());

} // afterLoadOfSupporterXmlFile

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Event Functions /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Test Temporary Functions //////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Set the array with data from the XML file Supporter.xml
function setTestArrayFromXmlObject(i_xml)
{
    g_supporter_names = [];

    var n_supporters = i_xml.getNumberOfSupporters();

    var out_index = 0;

    for (var supporter_number = 1; supporter_number <= n_supporters; supporter_number++)
    {
        var first_name = i_xml.getFirstName(supporter_number);

        var family_name = i_xml.getFamilyName(supporter_number);
    
        var contribution_int = i_xml.getContributionInt(supporter_number);

        if (contribution_int - 60 >= 0)
        {
            g_supporter_names[out_index] = first_name + ' ' + family_name;

            out_index = out_index + 1;
        }
    }
    
} // setTestArrayFromXmlObject

/*QQQQQ
// Set the array g_supporter_names
function setTestArrayWithSupporterName()
{
    g_supporter_names[0] = 'Franz Amrein';
    g_supporter_names[1] = 'Duk Won Barthelmess-Lee';
    g_supporter_names[2] = 'Madlen Bärtschi';
    g_supporter_names[3] = 'Elisabeth Bösch';
    g_supporter_names[4] = 'Andres Brändli';
    g_supporter_names[5] = 'Matthias Bruppacher';
    g_supporter_names[6] = 'Sonja Buchser';
    g_supporter_names[7] = 'Hans Byland';
    g_supporter_names[8] = 'Michel Emmenegger';
    g_supporter_names[9] = 'Annette Farnhammer';
    g_supporter_names[10] = 'Erich Fischer';
    g_supporter_names[11] = 'Noldi Gnädig';
    g_supporter_names[12] = 'Christoph Grathwohl';
    g_supporter_names[13] = 'Ruth Grathwohl';
    g_supporter_names[14] = 'Peter Günthart';
    g_supporter_names[15] = 'Esther Günthart';
    g_supporter_names[16] = 'Beat Hächler';
    g_supporter_names[17] = 'Anne Halter';
    g_supporter_names[18] = 'Lilli Hannak';
    g_supporter_names[19] = 'Johannes Hänggli';
    g_supporter_names[20] = 'Gina Hänggli';
    g_supporter_names[21] = 'Peter Häuptli';
    g_supporter_names[22] = 'Jörg Hauser';

} // setTestArrayWithSupporterName

QQQ*/

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Test Temporary Functions ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


