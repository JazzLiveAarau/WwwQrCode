// File: QrQrFilesXml.js
// Date: 2022-05-04
// Author: Gunnar Lidén

// File content
// =============
//
// Load and read functions for the files XML file
//

// Class corresponding to the XML element <Supporter> in the file QrFiles.xml
class QrFilesXml
{
    // Creates the instance of the class
    // i_callback_function_name: Function that shall be called after loading
    constructor(i_callback_function_name, i_season_start_year) 
    {
        // Member variables
        // ================

        // Strings
        this.m_strings = new QrStrings();

        // Path to the subdirectory for files and XML files (/www/QrCode/QrFiles)
        this.m_xml_dir_name_server = QrStrings.getPathSubdirectoryQrFiles();

        // Start part of name for subdirectory season. Years will be added 2021-2022
        this.m_xml_dir_start_season = QrStrings.getStartPartSubdirectorySeason();

        // Season start year
        this.m_season_start_year = i_season_start_year;

        // QR files XML file name (QrFiles.xml)
        this.m_xml_file_name = QrStrings.getQrFilesXmlFileName();

        // Call back function name
        this.m_callback_function_name = i_callback_function_name;

        // The QR files xml object
        this.m_file_xml = null;

        // Object holding the tags
        this.m_tags = new QrFilesTags();

        // Flag value that a node value not have been set (NotYetSetNodeValue)
        this.m_not_yet_set_node_value = QrStrings.getXmlNodeValueNotYetSet();

        // Loads the XML object and calls the function m_callback_function_name
        this.loadXmlFile(this, this.getUrlForQrFilesXml(), this.m_callback_function_name);

    } // constructor

    // Sets the XML object
    setXmlObject(i_qr_files_xml)
    {
        this.m_file_xml = i_qr_files_xml;

    } // setXmlObject

    // Returns the XML object
    getXmlObject()
    {
        return this.m_file_xml;

    } // getXmlObject

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Get Qr File Data //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the first name for a given QR File number
    getFirstName(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getFirstName(), i_qr_file_number);
        
    } // getFirstName

    // Returns the family name for a given  QR File number
    getFamilyName(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getFamilyName(), i_qr_file_number);
        
    } // getFamilyName

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Get Qr File Data ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Number Qr Files  //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the number of QR files
    getNumberOfQrFiles()
    {
        var ret_n_qr_files = -12345;

        if (!this.checkXmlObject()){ return ret_n_qr_files; }

        var qr_file_nodes = this.m_file_xml.getElementsByTagName(this.m_tags.getQrFile());

        ret_n_qr_files = qr_file_nodes.length;

        return ret_n_qr_files;

    } // getNumberOfQrFiles 

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Number Qr Files  ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

        
    ///////////////////////////////////////////////////////////////////////////
    /////// Start Node Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the node value for a given QR file number and a tag name
    getNodeValue(i_supporter_tag, i_qr_file_number)
    {
        var ret_data = '';
        
        if (!this.checkXmlObject()){ return ret_data; }

        var n_qr_files = this.getNumberOfQrFiles();
        
        if (i_qr_file_number < 1 || i_qr_file_number > n_qr_files)
        {
            alert("QrFilesXml.getNodeValue QR file number is not between 1 and " + n_qr_files.toString());
            
            return ret_data;		
        }
            
        var qr_file_nodes = this.m_file_xml.getElementsByTagName(this.m_tags.getQrFile());
        
        var qr_file_node = qr_file_nodes[i_qr_file_number-1];
        
        var xml_node_value = this.getNodeValueTagName(qr_file_node, i_supporter_tag);
        
        ret_data = this.removeFlagNodeValueNotSet(xml_node_value);
        
        return ret_data;
        
    } // getNodeValue 

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Node Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Utility Functions ///////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the name and path for QR files XML file (QrFiles.xml)
    getUrlForQrFilesXml()
    {
        var ret_file_name = '';

        ret_file_name = ret_file_name + this.m_xml_dir_name_server;

        var subdir_season = QrStrings.getSubdirectorySeasonName(this.m_season_start_year);

        ret_file_name = ret_file_name + subdir_season +  this.m_xml_file_name;

        return ret_file_name;

    } // getUrlForQrFilesXml

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

// Class defining the tags of the XML file QrFiles.xml
class QrFilesTags 
{
    // Creates the instance of the class
    constructor() 
    {
        // Member variables
        // ================

        this.m_tag_qr_file = "QrFile";
        this.m_tag_first_name = "Vorname";
        this.m_tag_family_name = "FamilienName";
  
    }

    // Get member variable functions
    // =============================

    getQrFile(){return this.m_tag_qr_file;} 
    getFirstName(){return this.m_tag_first_name;} 
    getFamilyName(){return this.m_tag_family_name;} 


} // QrFilesTags