// File: QrQrFilesXml.js
// Date: 2022-05-04
// Author: Gunnar Lidén

// File content
// =============
//
// Load and read functions for the files XML file
//

// Class corresponding to the XML element <Supporter> in the file Supporter.xml
class QrFilesXml
{
    // Creates the instance of the class
    // i_callback_function_name: Function that shall be called after loading
    constructor(i_callback_function_name, i_season_start_year) 
    {
        // Member variables
        // ================

        // Path and name of XML file on the server /www/QrCode/QrFiles
        this.m_xml_dir_name_server = 'QrFiles/';

        // Start part of name for subdirectory season
        this.m_xml_dir_start_season = 'Season_';

        // Season start year
        this.m_season_start_year = i_season_start_year;

        // Supporter XML file name
        this.m_xml_file_name = 'Files.xml';

        // Call back function name
        this.m_callback_function_name = i_callback_function_name;

        // The jazz tasks xml object
        this.m_file_xml = null;

        // Object holding the tags
        this.m_tags = new QrFilesTags();

        // Flag that a node value not have been set
        this.m_not_yet_set_node_value = "NotYetSetNodeValue";

        // Loads the XML object and calls the function m_callback_function_name
        this.loadXmlFile(this, this.getFileNameSupportXml(), this.m_callback_function_name);

    } // constructor

    // Sets the XML object
    setXmlObject(i_jazz_tasks_xml)
    {
        this.m_file_xml = i_jazz_tasks_xml;

    } // setXmlObject

    // Returns the XML object
    getXmlObject()
    {
        return this.m_file_xml;

    } // getXmlObject

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Get Supporter Data ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the first name for a given supporter number
    getFirstName(i_supporter_number)
    {
        return this.getNodeValue(this.m_tags.getFirstName(), i_supporter_number);
        
    } // getFirstName

    // Returns the family name for a given supporter number
    getFamilyName(i_supporter_number)
    {
        return this.getNodeValue(this.m_tags.getFamilyName(), i_supporter_number);
        
    } // getFamilyName

    // Returns the contribution (as string) for a given supporter number
    getContribution(i_supporter_number)
    {
        return this.getNodeValue(this.m_tags.getContribution(), i_supporter_number);
        
    } // getContribution

    // Returns the contribution (as integer) for a given supporter number
    getContributionInt(i_supporter_number)
    {
        var contribution_str = this.getContribution(i_supporter_number);

        return parseInt(contribution_str);

    } // getContributionInt

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Get Supporter Data //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Number Supporters  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the number of supporters
    getNumberOfSupporters()
    {
        var ret_n_supporters = -12345;

        if (!this.checkXmlObject()){ return ret_n_supporters; }

        var supporter_nodes = this.m_file_xml.getElementsByTagName(this.m_tags.getSupporter());

        ret_n_supporters = supporter_nodes.length;

        return ret_n_supporters;

    } // getNumberOfSupporters 

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Number Supporters  //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

        
    ///////////////////////////////////////////////////////////////////////////
    /////// Start Node Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the node value for a given jazz task number and a tag name
    getNodeValue(i_supporter_tag, i_supporter_number)
    {
        var ret_data = '';
        
        if (!this.checkXmlObject()){ return ret_data; }

        var n_supporters = this.getNumberOfSupporters();
        
        if (i_supporter_number < 1 || i_supporter_number > n_supporters)
        {
            alert("QrFilesXml.getNodeValue Supporter number is not between 1 and " + n_tasks.toString());
            
            return ret_data;		
        }
            
        var supporter_nodes = this.m_file_xml.getElementsByTagName(this.m_tags.getSupporter());
        
        var supporter_node = supporter_nodes[i_supporter_number-1];
        
        var xml_node_value = this.getNodeValueTagName(supporter_node, i_supporter_tag);
        
        ret_data = this.removeFlagNodeValueNotSet(xml_node_value);
        
        return ret_data;
        
    } // getNodeValue 

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Node Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Utility Functions ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the name and path for jazz tasks XML file
    getFileNameSupportXml()
    {
        var ret_file_name = '';

        ret_file_name = ret_file_name + this.m_xml_dir_name_server;

        var subdir_season = this.m_xml_dir_start_season + this.m_season_start_year.toString() + '_' +
        (this.m_season_start_year + 1).toString() + '/';

        ret_file_name = ret_file_name + subdir_season +  this.m_xml_file_name;

        return ret_file_name;

    } // getFileNameSupportXml

        // Returns the node value. Input is an XML node and the tag name
        getNodeValueTagName(i_node, i_xml_tag)
        {
            return i_node.getElementsByTagName(i_xml_tag)[0].childNodes[0].nodeValue;
            
        } // getNodeValueTagName
    
        // Sets a node value. Input is an XML node, the tag name and the node value
        // Copied from FlyerXml.js
        setNodeValue(i_node, i_xml_tag, i_node_value)
        {	
            i_node.getElementsByTagName(i_xml_tag)[0].childNodes[0].nodeValue = i_node_value;
            
        } // setNodeValue
    
        // Returns empty string if i_node_value is equal to m_not_yet_set_node_value
        removeFlagNodeValueNotSet(i_node_value)
        {
            if (!this.nodeValueIsSet(i_node_value))
            {
                return "";
            }
            
            return i_node_value; 
            
        } // removeFlagNodeValueNotSet
    
        // Returns true if the node value is set
        nodeValueIsSet(i_node_value)
        {
            if (i_node_value == this.m_not_yet_set_node_value)
            {
                return false;
            }
            else
            {
                return true;
            }
            
        } // nodeValueIsSet
    
        // Return flag (string) this.m_not_yet_set_node_value if input string is empty
        // Copied from FlyerXml.js
        setFlagNodeValueIsNotSetForEmptyString(i_node_value)
        {
            var trimmed_node_value = i_node_value.trim();
            
            if (trimmed_node_value.length == 0)
            {
                return this.m_not_yet_set_node_value;
            }
            
            return i_node_value;
    
        } // setFlagNodeValueIsNotSetForEmptyString    
    
        // Same as function above. Just a shorter name
        modNodeValue(i_node_value)
        {
            var trimmed_node_value = i_node_value.trim();
            
            if (trimmed_node_value.length == 0)
            {
                return this.m_not_yet_set_node_value;
            }
            
            return i_node_value;
    
        } // modNodeValue
    
    
    ///////////////////////////////////////////////////////////////////////////
    /////// End Utility Functions /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Load Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Load the XML file.
    // https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
    // i_object_xml is the instance of this class. Call of this.setXmlObject
    // does not work, while this= jazz_xmlhttp 
    loadXmlFile(i_object_xml, i_path_file_name_xml, i_callback_function_name)
    {
    // Request server object for the XML file
    var jazz_xmlhttp = new XMLHttpRequest();
    
    // Event function: The server will return state and status 
    // from object functions open and send.
    jazz_xmlhttp.onreadystatechange = function() 
    {
        if (jazz_xmlhttp.readyState == 4 && jazz_xmlhttp.status == 200) 
        {
            var xml_object = jazz_xmlhttp.responseXML;

            i_object_xml.setXmlObject(xml_object);

            i_callback_function_name(i_object_xml);    
        }
        else if (jazz_xmlhttp.readyState == 4 && jazz_xmlhttp.status == 404) 
        {
            alert("Error 404: File " + i_path_file_name_xml + " not found" );
        }	
    };
    
    // Open the file
    jazz_xmlhttp.open("GET", i_path_file_name_xml, true);
    
    jazz_xmlhttp.setRequestHeader('Cache-Control', 'no-cache');
        
    jazz_xmlhttp.send();	

    } // jazzUtilLoadXml

    ///////////////////////////////////////////////////////////////////////////
    /////// End Load Functions ////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////    

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Check Functions /////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Check that the supporter XML object is set
    checkXmlObject()
    {
        if (null == this.m_file_xml)
        {
            alert("QrFilesXml.checkXmlObject Supporter XML object m_file_xml is null");
            
            return false;
        }	
        else
        {
            return true;
        }
        
    } // checkXmlObject

    ///////////////////////////////////////////////////////////////////////////
    /////// End Check Functions ///////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

} // QrFilesXml

// Class defining the tags of the XML file Files.xml
class QrFilesTags 
{
    // Creates the instance of the class
    constructor() 
    {
        // Member variables
        // ================

        this.m_tag_supporter = "Supporter";
        this.m_tag_first_name = "Vorname";
        this.m_tag_family_name = "FamilienName";
        this.m_tag_contribution = "Beitrag-";
    }

    // Get member variable functions
    // =============================

    getSupporter(){return this.m_tag_supporter;} 
    getFirstName(){return this.m_tag_first_name;} 
    getFamilyName(){return this.m_tag_family_name;} 
    getContribution()
    {
        var ret_tag = this.m_tag_contribution + this.m_start_season_year.toString() + '-' +
                        (this.m_start_season_year + 1).toString();

        return ret_tag;

    } // getContribution

} // QrFilesTags