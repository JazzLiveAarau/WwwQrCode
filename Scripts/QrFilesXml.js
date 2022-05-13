// File: QrQrFilesXml.js
// Date: 2022-05-13
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

        // String for boolean true
        this.m_bool_true_str = QrStrings.getBoolTrueString();

        // String for boolean false
        this.m_bool_false_str = QrStrings.getBoolFalseString();

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

    // Returns the street for a given  QR File number
    getStreet(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getStreet(), i_qr_file_number);
        
    } // getStreet

    // Returns the house number for a given  QR File number
    getHouseNumber(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getHouseNumber(), i_qr_file_number);
        
    } // getHouseNumber

    // Returns the postal code for a given  QR File number
    getPostalCode(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getPostalCode(), i_qr_file_number);
        
    } // getPostalCode

    // Returns the domicil for a given  QR File number
    getDomicil(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getDomicil(), i_qr_file_number);
        
    } // getDomicil

    // Returns the email for a given  QR File number
    getEmail(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getEmail(), i_qr_file_number);
        
    } // getEmail

    // Returns the sponsor flag for a given  QR File number
    getSponsor(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getSponsor(), i_qr_file_number);
        
    } // getSponsor

    // Returns the comment for a given  QR File number
    getComment(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getComment(), i_qr_file_number);
        
    } // getComment

    // Returns the supporter contribution for a given  QR File number
    getSupporterContribution(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getSupporterContribution(), i_qr_file_number);
        
    } // getSupporterContribution

    // Returns the supporter flag for a given  QR File number
    getSupporter(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getSupporter(), i_qr_file_number);
        
    } // getSupporter

    // Returns the supporter admission flag for a given  QR File number (WAHR or FALSCH)
    getSupporterAdmission(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getSupporterAdmission(), i_qr_file_number);
        
    } // getSupporterAdmission

    // Returns the supporter admission flag for a given  QR File number (true or false)
    getSupporterAdmissionBool(i_qr_file_number)
    {
        if (this.getSupporterAdmission(i_qr_file_number) == 'WAHR')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // getSupporterAdmissionBool

    // Returns the musician admission flag for a given  QR File number
    getMusicianAdmission(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getMusicianAdmission(), i_qr_file_number);
        
    } // getMusicianAdmission

    // Returns the free admission flag for a given  QR File number
    getFreeAdmission(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getFreeAdmission(), i_qr_file_number);
        
    } // getFreeAdmission

    // Returns the sponsor admission flag for a given  QR File number
    getSponsorAdmission(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getSponsorAdmission(), i_qr_file_number);
        
    } // getSponsorAdmission

    // Returns the member admission flag for a given  QR File number
    getMemberAdmission(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getMemberAdmission(), i_qr_file_number);
        
    } // getMemberAdmission

    // Returns the download one code for a given  QR File number
    getDownloadOne(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getDownloadOne(), i_qr_file_number);
        
    } // getDownloadOne

    // Returns the download two code for a given  QR File number
    getDownloadTwo(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getDownloadTwo(), i_qr_file_number);
        
    } // getDownloadTwo

    // Returns the email sent flag for a given  QR File number (WAHR or TRUE)
    getEmailSent(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getEmailSent(), i_qr_file_number);
        
    } // getEmailSent    

    // Returns the email sent flag for a given  QR File number (true or false)
    getEmailSentBool(i_qr_file_number)
    {
        if (this.getEmailSent(i_qr_file_number) == 'WAHR')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // getEmailSentBool

    // Returns the mail sent flag for a given  QR File number (WAHR or TRUE)
    getMailSent(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getMailSent(), i_qr_file_number);
        
    } // getMailSent

    // Returns the mail sent flag for a given  QR File number (true or false)
    getMailSentBool(i_qr_file_number)
    {
        if (this.getMailSent(i_qr_file_number) == 'WAHR')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // getMailSentBool

    // Returns the print sent flag for a given  QR File number (WAHR or TRUE)
    getPrintSent(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getPrintSent(), i_qr_file_number);
        
    } // getPrintSent

    // Returns the print sent flag for a given  QR File number (true or false)
    getPrintSentBool(i_qr_file_number)
    {
        if (this.getPrintSent(i_qr_file_number) == 'WAHR')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // getPrintSentBool

    // Returns the print batch flag for a given  QR File number (WAHR or TRUE)
    getPrintBatch(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getPrintBatch(), i_qr_file_number);
        
    } // getPrintBatch

    // Returns the print batch flag for a given  QR File number (true or false)
    getPrintBatchBool(i_qr_file_number)
    {
        if (this.getPrintBatch(i_qr_file_number) == 'WAHR')
        {
            return true;
        }
        else
        {
            return false;
        }

    } // getPrintBatchBool

    // Returns the QR code name one for a given  QR File number (WAHR or TRUE)
    getQrCodeNameOne(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getQrCodeNameOne(), i_qr_file_number);
        
    } // getQrCodeNameOne

    // Returns the QR code name two for a given  QR File number
    getQrCodeNameTwo(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getQrCodeNameTwo(), i_qr_file_number);
        
    } // getQrCodeNameTwo

    // Returns the concert year for a given  QR File number
    getConcertYear(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getConcertYear(), i_qr_file_number);
        
    } // getConcertYear

    // Returns the concert month for a given  QR File number
    getConcertMonth(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getConcertMonth(), i_qr_file_number);
        
    } // getConcertMonth

    // Returns the concert day for a given  QR File number
    getConcertDay(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getConcertDay(), i_qr_file_number);
        
    } // getConcertDay

    // Returns the sum paid for a concert for a given  QR File number
    getConcertPaid(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getConcertPaid(), i_qr_file_number);
        
    } // getConcertPaid

    // Returns the telephone number for a given  QR File number
    getTelephone(i_qr_file_number)
    {
        return this.getNodeValue(this.m_tags.getTelephone(), i_qr_file_number);
        
    } // getTelephone

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Get Qr File Data ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Set Qr File Data //////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Sets the first name for a given  QR File number
    setFirstName(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getFirstName(), i_qr_file_number, i_node_value);
        
    } // setFirstName 

    // Sets the family name for a given  QR File number
    setFamilyName(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getFamilyName(), i_qr_file_number, i_node_value);
        
    } // setFamilyName

    // Sets the street for a given  QR File number
    setStreet(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getStreet(), i_qr_file_number, i_node_value);
        
    } // setStreet  

    // Sets the house number for a given  QR File number
    setHouseNumber(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getHouseNumber(), i_qr_file_number, i_node_value);
        
    } // setHouseNumber  

    // Sets the postal code for a given  QR File number
    setPostalCode(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getPostalCode(), i_qr_file_number, i_node_value);
        
    } // setPostalCode  

    // Sets the domicil for a given  QR File number
    setDomicil(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getDomicil(), i_qr_file_number, i_node_value);
        
    } // setDomicil  

    // Sets the email for a given  QR File number
    setEmail(i_qr_file_number, i_node_value)
    {
        this.setQrFileNodeValue(this.m_tags.getEmail(), i_qr_file_number, i_node_value);
        
    } // setEmail 

     // Sets the sponsor flag for a given  QR File number
     setSponsor(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getSponsor(), i_qr_file_number, i_node_value);
         
     } // setSponsor    

     // Sets the comment for a given  QR File number
     setComment(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getComment(), i_qr_file_number, i_node_value);
         
     } // setComment    

     // Sets the supporter contribution for a given  QR File number
     setSupporterContribution(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getSupporterContribution(), i_qr_file_number, i_node_value);
         
     } // setSupporterContribution 

     // Sets the supporter flag  for a given  QR File number
     setSupporter(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getSupporter(), i_qr_file_number, i_node_value);
         
     } // setSupporter 

     // Sets the supporter admission flag for a given  QR File number
     setSupporterAdmission(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getSupporterAdmission(), i_qr_file_number, i_node_value);
         
     } // setSupporterAdmission 

     // Sets the musician admission flag for a given  QR File number
     setMusicianAdmission(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getMusicianAdmission(), i_qr_file_number, i_node_value);
         
     } // setMusicianAdmission

     // Sets the free admission flag for a given  QR File number
     setFreeAdmission(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getFreeAdmission(), i_qr_file_number, i_node_value);
         
     } // setFreeAdmission

     // Sets the sponsor admission flag for a given  QR File number
     setSponsorAdmission(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getSponsorAdmission(), i_qr_file_number, i_node_value);
         
     } // setSponsorAdmission

     // Sets the member admission flag for a given  QR File number
     setMemberAdmission(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getMemberAdmission(), i_qr_file_number, i_node_value);
         
     } // setMemberAdmission

     // Sets the download one code for a given  QR File number
     setDownloadOne(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getDownloadOne(), i_qr_file_number, i_node_value);
         
     } // setDownloadOne

     // Sets the download two code for a given  QR File number
     setDownloadTwo(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getDownloadTwo(), i_qr_file_number, i_node_value);
         
     } // setDownloadTwo

     // Sets the email sent flag  for a given  QR File number (WAHR or FALSCH)
     setEmailSent(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getEmailSent(), i_qr_file_number, i_node_value);
         
     } // setEmailSent

     // Sets the mail sent flag  for a given  QR File number (WAHR or FALSCH)
     setMailSent(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getMailSent(), i_qr_file_number, i_node_value);
         
     } // setMailSent

     // Sets the print sent flag  for a given  QR File number (WAHR or FALSCH)
     setPrintSent(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getPrintSent(), i_qr_file_number, i_node_value);
         
     } // setPrintSent

     // Sets the print batch flag  for a given  QR File number (WAHR or FALSCH)
     setPrintBatch(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getPrintBatch(), i_qr_file_number, i_node_value);
         
     } // setPrintBatch

     // Sets the QR code name one for a given  QR File number 
     setQrCodeNameOne(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getQrCodeNameOne(), i_qr_file_number, i_node_value);
         
     } // setQrCodeNameOne

     // Sets the QR code name two for a given  QR File number 
     setQrCodeNameTwo(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getQrCodeNameTwo(), i_qr_file_number, i_node_value);
         
     } // setQrCodeNameTwo

     // Sets the concert year for a given  QR File number 
     setConcertYear(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getConcertYear(), i_qr_file_number, i_node_value);
         
     } // setConcertYear

     // Sets the concert month for a given  QR File number 
     setConcertMonth(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getConcertMonth(), i_qr_file_number, i_node_value);
         
     } // setConcertMonth

     // Sets the concert day for a given  QR File number 
     setConcertDay(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getConcertDay(), i_qr_file_number, i_node_value);
         
     } // setConcertDay

     // Sets the sum paid for a concert for a given  QR File number 
     setConcertPaid(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getConcertPaid(), i_qr_file_number, i_node_value);
         
     } // setConcertPaid

     // Sets the telephon number for a given  QR File number 
     setTelephone(i_qr_file_number, i_node_value)
     {
         this.setQrFileNodeValue(this.m_tags.getTelephone(), i_qr_file_number, i_node_value);
         
     } // setTelephone

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Set Qr File Data ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
	///////////////////////// Start Get Filtered Arrays  //////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns an array of file numbers
    // i_b_supporters: Supporter contribution >= 
    // i_b_not_sent: Only files that were not sent
    getFilteredFileNumberArray(i_b_supporter, i_b_not_sent)
    {
        console.log('Enter QrFilesXml.getFilteredFileNumberArray');

        var ret_file_numbers = [];

        var n_files = this.getNumberOfQrFiles();

        var index_ret_file = 0;

        var debug_n_sent = 0;

        for (var file_number = 1; file_number <= n_files; file_number++)
        {
            var contribution = this.getSupporterContribution(file_number);

            var b_supporter = this.getSupporterAdmissionBool(file_number);

            var b_email = this.getEmailSentBool(file_number);

            var b_mail = this.getMailSentBool(file_number);

            var b_limit = true;

            if (contribution < QrStrings.getSupporterContributionLimitValue())
            {
                b_limit = false;
            }

            if (b_supporter && b_limit )
            {
                b_supporter = true;
            }

            var b_ret_sent = false;

            if (b_email || b_mail)
            {
                b_ret_sent = true;
            }

            if (b_supporter && !b_ret_sent)
            {
                ret_file_numbers[index_ret_file] = file_number;

                index_ret_file = index_ret_file + 1;
            }
            else
            {
                debug_n_sent = debug_n_sent + 1;
            }
            
        } // file_number

        console.log('Number of already sent (not returned file numbers) is ' + debug_n_sent.toString());

        return ret_file_numbers;

    } // getFilteredFileNumberArray

    // getQrFirstAndFamilyNameString(i_qr_file_number)
    getQrFirstAndFamilyNamesFiltered(i_file_number_array)
    {
        var ret_names = [];

        for (var index_number=0; index_number < i_file_number_array.length; index_number++)
        {
            var file_number = i_file_number_array[index_number];

            var first_family_name = this.getQrFirstAndFamilyNameString(file_number);

            ret_names[index_number] = first_family_name;
        }

        return ret_names;

    } // getQrFirstAndFamilyNamesFiltered


    ///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Get Filtered Arrays  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// Start Append Node  //////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    
	// Appends a node to the XML object
	appendNode()
	{
	   // See also function appendReservation in file ReservationConcerts.js
	   // https://www.webdeveloper.com/forum/d/231973-append-xml-node-in-javascript/3
	   
	   var new_task = this.m_file_xml.createElement(this.m_tags.getQrFile());
	   
	   var first_name_node = this.m_file_xml.createElement(this.m_tags.getFirstName());
	   var first_name_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   first_name_node.appendChild(first_name_text);
	   new_task.appendChild(first_name_node);

	   var family_name_node = this.m_file_xml.createElement(this.m_tags.getFamilyName());
	   var family_name_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   family_name_node.appendChild(family_name_text);
	   new_task.appendChild(family_name_node);

        var street_node = this.m_file_xml.createElement(this.m_tags.getStreet());
        var street_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
        street_node.appendChild(street_text);
        new_task.appendChild(street_node);

	   var house_number_node = this.m_file_xml.createElement(this.m_tags.getHouseNumber());
	   var house_number_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   house_number_node.appendChild(house_number_text);
	   new_task.appendChild(house_number_node);

	   var postal_code_node = this.m_file_xml.createElement(this.m_tags.getPostalCode());
	   var postal_code_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   postal_code_node.appendChild(postal_code_text);
	   new_task.appendChild(postal_code_node);

	   var domicil_node = this.m_file_xml.createElement(this.m_tags.getDomicil());
	   var domicil_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   domicil_node.appendChild(domicil_text);
	   new_task.appendChild(domicil_node);

	   var email_node = this.m_file_xml.createElement(this.m_tags.getEmail());
	   var email_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   email_node.appendChild(email_text);
	   new_task.appendChild(email_node);

	   var sponsor_node = this.m_file_xml.createElement(this.m_tags.getSponsor());
	   var sponsor_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   sponsor_node.appendChild(sponsor_text);
	   new_task.appendChild(sponsor_node);

	   var comment_node = this.m_file_xml.createElement(this.m_tags.getComment());
	   var comment_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   comment_node.appendChild(comment_text);
	   new_task.appendChild(comment_node);

	   var supporter_contribution_node = this.m_file_xml.createElement(this.m_tags.getSupporterContribution());
	   var supporter_contribution_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   supporter_contribution_node.appendChild(supporter_contribution_text);
	   new_task.appendChild(supporter_contribution_node);

	   var supporter_node = this.m_file_xml.createElement(this.m_tags.getSupporter());
	   var supporter_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   supporter_node.appendChild(supporter_text);
	   new_task.appendChild(supporter_node);

	   var supporter_admission_node = this.m_file_xml.createElement(this.m_tags.getSupporterAdmission());
	   var supporter_admission_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   supporter_admission_node.appendChild(supporter_admission_text);
	   new_task.appendChild(supporter_admission_node);

	   var supporter_admission_node = this.m_file_xml.createElement(this.m_tags.getSupporterAdmission());
	   var supporter_admission_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   supporter_admission_node.appendChild(supporter_admission_text);
	   new_task.appendChild(supporter_admission_node);

	   var musician_admission_node = this.m_file_xml.createElement(this.m_tags.getMusicianAdmission());
	   var musician_admission_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   musician_admission_node.appendChild(musician_admission_text);
	   new_task.appendChild(musician_admission_node); 

	   var free_admission_node = this.m_file_xml.createElement(this.m_tags.getFreeAdmission());
	   var free_admission_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   free_admission_node.appendChild(free_admission_text);
	   new_task.appendChild(free_admission_node);

	   var sponsor_admission_node = this.m_file_xml.createElement(this.m_tags.getSponsorAdmission());
	   var sponsor_admission_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   sponsor_admission_node.appendChild(sponsor_admission_text);
	   new_task.appendChild(sponsor_admission_node);

	   var member_admission_node = this.m_file_xml.createElement(this.m_tags.getMemberAdmission());
	   var member_admission_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   member_admission_node.appendChild(member_admission_text);
	   new_task.appendChild(member_admission_node);

	   var download_one_node = this.m_file_xml.createElement(this.m_tags.getDownloadOne());
	   var download_one_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   download_one_node.appendChild(download_one_text);
	   new_task.appendChild(download_one_node);

	   var download_two_node = this.m_file_xml.createElement(this.m_tags.getDownloadTwo());
	   var download_two_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   download_two_node.appendChild(download_two_text);
	   new_task.appendChild(download_two_node);
       
	   var email_sent_node = this.m_file_xml.createElement(this.m_tags.getEmailSent());
	   var email_sent_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   email_sent_node.appendChild(email_sent_text);
	   new_task.appendChild(email_sent_node);

	   var mail_sent_node = this.m_file_xml.createElement(this.m_tags.getMailSent());
	   var mail_sent_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   mail_sent_node.appendChild(mail_sent_text);
	   new_task.appendChild(mail_sent_node);

	   var print_sent_node = this.m_file_xml.createElement(this.m_tags.getPrintSent());
	   var print_sent_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   print_sent_node.appendChild(print_sent_text);
	   new_task.appendChild(print_sent_node);

	   var print_batch_node = this.m_file_xml.createElement(this.m_tags.getPrintBatch());
	   var print_batch_text = this.m_file_xml.createTextNode(this.m_bool_false_str);
	   print_batch_node.appendChild(print_batch_text);
	   new_task.appendChild(print_batch_node);

	   var qr_name_one_node = this.m_file_xml.createElement(this.m_tags.getQrCodeNameOne());
	   var qr_name_one_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   qr_name_one_node.appendChild(qr_name_one_text);
	   new_task.appendChild(qr_name_one_node);

	   var qr_name_two_node = this.m_file_xml.createElement(this.m_tags.getQrCodeNameTwo());
	   var qr_name_two_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   qr_name_two_node.appendChild(qr_name_two_text);
	   new_task.appendChild(qr_name_two_node);

	   var concert_year_node = this.m_file_xml.createElement(this.m_tags.getConcertYear());
	   var concert_year_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   concert_year_node.appendChild(concert_year_text);
	   new_task.appendChild(concert_year_node);

	   var concert_month_node = this.m_file_xml.createElement(this.m_tags.getConcertMonth());
	   var concert_month_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   concert_month_node.appendChild(concert_month_text);
	   new_task.appendChild(concert_month_node);

	   var concert_day_node = this.m_file_xml.createElement(this.m_tags.getConcertDay());
	   var concert_month_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   concert_day_node.appendChild(concert_month_text);
	   new_task.appendChild(concert_day_node);

	   var concert_paid_node = this.m_file_xml.createElement(this.m_tags.getConcertPaid());
	   var concert_paid_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   concert_paid_node.appendChild(concert_paid_text);
	   new_task.appendChild(concert_paid_node);

	   var telephone_node = this.m_file_xml.createElement(this.m_tags.getTelephone());
	   var telephone_text = this.m_file_xml.createTextNode(this.m_not_yet_set_node_value);
	   telephone_node.appendChild(telephone_text);
	   new_task.appendChild(telephone_node);

       this.m_file_xml.documentElement.appendChild(new_task);	

    } // appendNode

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Append Node  ////////////////////////////////
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

    // Returns the season start year
    getSeasonStartYear()
    {
        return this.m_season_start_year;

    } // getSeasonStartYear

    // Returns true if contribution would be enough for two supporter (cards)
    contributionForTwoPersons(i_file_number)
    {
        var contribution = this.getSupporterContribution(i_file_number);

        if (contribution >= 2 * QrStrings.getSupporterContributionLimitValue())
        {
            return true;
        }
        else
        {
            return false;
        }

    } // contributionForTwoPersons

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Number Qr Files  ////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Start Qr String Functions  //////////////////////
    ///////////////////////////////////////////////////////////////////////////

    getQrSeasonString()
    {
        return this.getSeasonStartYear().toString() + '-' +
              (this.getSeasonStartYear() + 1).toString();

    } // getQrSeasonString

    getQrConcertString()
    {
        // Concert date needs to be stored also
        return 'YYYYY-MM-DD TODO';

    } // getQrConcertString

    getQrFirstAndFamilyNameString(i_qr_file_number)
    {
        var first_name = this.getFirstName(i_qr_file_number);

        var family_name = this.getFamilyName(i_qr_file_number);

        return first_name + ' ' + family_name;

    } // getQrFirstAndFamilyNameString

    getFullAddress(i_qr_file_number)
    {
        var street = this.getStreet(i_qr_file_number);

        var house_number = this.getHouseNumber(i_qr_file_number);

        var postal_code = this.getPostalCode(i_qr_file_number);

        var domicil = this.getDomicil(i_qr_file_number);

        return street + ' ' + house_number + ', ' + postal_code + ' ' + domicil;
        
    } // getFullAddress

    getQrCategoryString(i_qr_file_number)
    {
        var ret_category_str = 'Undefined';

        if (this.getSupporterAdmission(i_qr_file_number) == "WAHR")
        {
            ret_category_str = QrStrings.getQrCategorySupporterString();
        }
        else if (this.getMusicianAdmission(i_qr_file_number) == "WAHR")
        {
            ret_category_str = QrStrings.getQrCategoryMusicianString();
        }
        else if (this.getFreeAdmission(i_qr_file_number) == "WAHR")
        {
            ret_category_str = QrStrings.getQrCategoryFreeString();
        }
        else if (this.getSponsorAdmission(i_qr_file_number) == "WAHR")
        {
            ret_category_str = QrStrings.getQrCategorySponsorString();
        }
        else if (this.getMemberAdmission(i_qr_file_number) == "WAHR")
        {
            ret_category_str = QrStrings.getQrCategoryMemberString();
        }

        return ret_category_str;

    } // getQrCategoryString

    getQrCombinedSeasonImageString(i_qr_file_number)
    {
        return this.getQrCategoryString(i_qr_file_number) + ' ' + 
               this.getQrFirstAndFamilyNameString(i_qr_file_number) +  ' ' + 
               this. getQrSeasonString();

    } // getQrCombinedSeasonImageString

    getQrCombinedSeasonTextString(i_qr_file_number, i_download_code)
    {
        return this.getQrCategoryString(i_qr_file_number) + '_' + 
               this.getQrFirstAndFamilyNameString(i_qr_file_number) +  '_' + 
               this. getQrSeasonString() + '_' + i_download_code;

    } // getQrCombinedSeasonImageString

    getQrCombinedConcertString(i_qr_file_number)
    {
        return this.getQrCategoryString(i_qr_file_number) + '_' + 
               this.getQrFirstAndFamilyNameString(i_qr_file_number) +  '_' + 
               this. getQrConcertString();

    } // getQrSupporterCombinedString


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// End Qr String Functions  ////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////////
    /////// Start Node Functions //////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Returns the node value for a given QR file number and a tag name
    getNodeValue(i_qr_file_tag, i_qr_file_number)
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
        
        var xml_node_value = this.getNodeValueTagName(qr_file_node, i_qr_file_tag);
        
        ret_data = this.removeFlagNodeValueNotSet(xml_node_value);
        
        return ret_data;
        
    } // getNodeValue 

    // Sets the node value for a given given QR file  number and a tag name
	setQrFileNodeValue(i_qr_file_tag, i_qr_file_number, i_qr_file_node_value)
	{	
		if (!this.checkXmlObject()){ return; }

		var n_qr_files = this.getNumberOfQrFiles();
		
		if (i_qr_file_number < 1 || i_qr_file_number > n_qr_files)
		{
			alert("QrFilesXml.setNodeValue QR file number is not between 1 and " + n_qr_files.toString());
			
			return;		
		}
			
		var qr_file_nodes = this.m_file_xml.getElementsByTagName(this.m_tags.getQrFile());

		var qr_file_node = qr_file_nodes[i_qr_file_number-1];
		
		var node_value = this.setFlagNodeValueIsNotSetForEmptyString(i_qr_file_node_value);
		
		this.setNodeValue(qr_file_node, i_qr_file_tag, node_value);
		
	} // setQrFileNodeValue

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
    /////// Start Download Code Functions /////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // Get a random download code that not already is used for an existing file
    getRandomDownloadCode()
    {
        var n_try = 100;

        for (var try_number = 1; try_number < n_try; try_number++)
        {
            var random_code = this.getRandomCode();

            var b_unique = this.isUniqueDownloadCode(random_code);

            if (b_unique)
            {
                return random_code;
            }
        }

        alert("QrFilesXml.getRandomDownloadCode Failure creating an unique download code. n_try= " + n_try.toString());

        return "UniqueCodeCouldNotBeGenerated";

    } // getRandomDownloadCode

    // Check if the random code is unique, i.e. not already used
    isUniqueDownloadCode(i_download_code)
    {
        var n_files = this.getNumberOfQrFiles();

        var b_unique = true;

        for (var file_number = 1; file_number <= n_files; file_number++)
        {
            var download_code_one = this.getDownloadOne(file_number);

            var download_code_two = this.getDownloadTwo(file_number);

            if (download_code_one == i_download_code)
            {
                b_unique = false;

                break;

            } // download_code_one

            if (download_code_two.length > 0)
            {
                if (download_code_two == i_download_code)
                {
                    b_unique = false;
    
                    break;
                }
            } // download_code_two

        } // file_number

        if (!b_unique)
        {
            console.log("QrFilesXml.isUniqueDownloadCode There was a not unique code: " + i_download_code);
        }

        return b_unique;

    } // isUniqueDownloadCode

    // Get a random code
    getRandomCode()
    {
        // https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript
        
        var allowed_chars = QrStrings.getDownloadCodeAllowedChars();

        var string_length = QrStrings.getDownloadCodeLength();

        var ret_string = '';

        for (var char_number = 1; char_number <= string_length; char_number++) 
        {
            var random_index = Math.floor(Math.random() * allowed_chars.length);

            ret_string = ret_string + allowed_chars.substring(random_index, random_index + 1);
        }

        return ret_string;

    } // getRandomCode

    ///////////////////////////////////////////////////////////////////////////
    /////// End Download Code Functions ///////////////////////////////////////
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
	///////////////////////// Start Save XML Functions ////////////////////////
	///////////////////////////////////////////////////////////////////////////

	// Saves the XML as a (an updated) file QrFiles.xml on the server.
	// For the case that the application executes locally and the input display element is set
	// the updated XML file will be displayed. 
	saveXmlFileOnServer()
	{
	  var b_execute_server = execApplicationOnServer();
	 
	  if (!b_execute_server)
	  {
		return;
	  }

	  var b_html = false;

	  var xml_content_str = xmlToFormattedString(this.getXmlObject(), b_html);
		
	  var file_name_path = QrStrings. getRelativeUrlQrFilesXmlFile(this.m_season_start_year);
		
	  if (!saveFileWithJQueryPostFunction(file_name_path, xml_content_str))
		{
			alert("QrFilesXml.saveXmlFileOnServer Saving QR files XML file failed");
		}
		
	} // saveXmlFileOnServer

	// Saves the XML as a (an updated) file QrFiles.xml on the server and calls the callback function
	// For the case that the application executes locally and the input display element is set
	// the updated XML file will be displayed. 
	saveXmlFileOnServerCallback(i_callback_function)
	{
	  var b_execute_server = execApplicationOnServer();
	 
	  if (!b_execute_server)
	  {
		i_callback_function();

        return;
	  }

	  var b_html = false;

	  var xml_content_str = xmlToFormattedString(this.getXmlObject(), b_html);
		
	  var file_name_path = QrStrings. getRelativeUrlQrFilesXmlFile(this.m_season_start_year);
		
	  if (!this.saveFileWithJQueryPostFunctionCallback(file_name_path, xml_content_str, i_callback_function))
		{
			alert("QrFilesXml.saveXmlFileOnServer Saving QR files XML file failed");
		}
		
	} // saveXmlFileOnServerCallback

    // Save a file with the JQuery function "post"
    // Please refer to SaveFileOnServer.php for a detailed description of "post"
    // Input parameter i_file_name is the server file name
    // Input parameter i_content_string is the content of the file
    // The function returns false for failure
    saveFileWithJQueryPostFunctionCallback(i_file_name, i_content_string, i_callback_function)
    {
    var file_name = '../' + i_file_name;

        $.post
        ('Php/SaveFileOnServer.php',
            {
            file_content: i_content_string,
            file_name: file_name
            },
            function(data_save,status_save)
            {
                if (status_save == "success")
                {
                    i_callback_function();
                }
                else
                {
                    alert("Execution of SaveFileOnServer.php failed");
                    return false;
                }          
            } // function
        ); // post
        
        return true;	  
        
    } // saveFileWithJQueryPostFunctionCallback

	///////////////////////////////////////////////////////////////////////////
	///////////////////////// End Save XML Functions //////////////////////////
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
        this.m_tag_street = "Strasse";
        this.m_tag_house_number = "Hausnummer";
        this.m_tag_postal_code = "PLZ";
        this.m_tag_domicil = "Wohnort";
        this.m_tag_email = "e-Mail";
        this.m_tag_sponsor = "Sponsor";
        this.m_tag_comment = "Kommentar";
        this.m_tag_supporter_contribution = "SupporterContribution";
        this.m_tag_supporter = "Supporter";
        this.m_tag_supporter_admission = "SupporterAdmission";
        this.m_tag_musician_admission = "MusicianAdmission";
        this.m_tag_free_admission = "FreeAdmission";
        this.m_tag_sponsor_admission = "SponsorAdmission";
        this.m_tag_member_admission = "MemberAdmission";
        this.m_tag_download_one = "DownloadCodeOne";
        this.m_tag_download_two = "DownloadCodeTwo";
        this.m_tag_email_sent = "EmailSent";
        this.m_tag_mail_sent = "MailSent";
        this.m_tag_print_sent = "PrintSent";
        this.m_tag_print_batch = "PrintBatch";
        this.m_tag_qr_code_name_one = "QrCodeNameOne";
        this.m_tag_qr_code_name_two = "QrCodeNameTwo";

        this.m_tag_concert_year = "ConcertYear";
        this.m_tag_concert_month = "ConcertMonth";
        this.m_tag_concert_day = "ConcertDay";
        this.m_tag_concert_paid = "ConcertPaid";
        this.m_tag_telephone = "Telephone";
    }

    // Get member variable functions
    // =============================

    getQrFile(){return this.m_tag_qr_file;} 
    getFirstName(){return this.m_tag_first_name;} 
    getFamilyName(){return this.m_tag_family_name;} 
    getStreet(){return this.m_tag_street;} 
    getHouseNumber(){return this.m_tag_house_number;} 
    getPostalCode(){return this.m_tag_postal_code;} 
    getDomicil(){return this.m_tag_domicil;}
    getEmail(){return this.m_tag_email;}
    getSponsor(){return this.m_tag_sponsor;}
    getComment(){return this.m_tag_comment;}
    getSupporterContribution(){return this.m_tag_supporter_contribution;}
    getSupporter(){return this.m_tag_supporter;}
    getSupporterAdmission(){return this.m_tag_supporter_admission;}
    getMusicianAdmission(){return this.m_tag_musician_admission;}
    getFreeAdmission(){return this.m_tag_free_admission;}
    getSponsorAdmission(){return this.m_tag_sponsor_admission;}
    getMemberAdmission(){return this.m_tag_member_admission;}
    getDownloadOne(){return this.m_tag_download_one;}
    getDownloadTwo(){return this.m_tag_download_two;}
    getEmailSent(){return this.m_tag_email_sent;}
    getMailSent(){return this.m_tag_mail_sent;}
    getPrintSent(){return this.m_tag_print_sent;}
    getPrintBatch(){return this.m_tag_print_batch;}
    getQrCodeNameOne(){return this.m_tag_qr_code_name_one;}
    getQrCodeNameTwo(){return this.m_tag_qr_code_name_two;}

    getConcertYear(){return this.m_tag_concert_year;}
    getConcertMonth(){return this.m_tag_concert_month;}
    getConcertDay(){return this.m_tag_concert_day;}
    getConcertPaid(){return this.m_tag_concert_paid;}
    getTelephone(){return this.m_tag_telephone;}

} // QrFilesTags
