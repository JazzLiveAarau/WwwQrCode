// File: SupporterData.js
// Date: 2022-05-18
// Author: Gunnar Lidén

// File content
// =============
//
// Get and set supporter data

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Global Parameters /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Array with SupporterData objects. Objects only for persons that paid the limit sum or 
// more. The limit is retrieved with function QrStrings.getSupporterContributionLimitValue
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

// Set the array with data from the XML file Supporter.xml (g_supporter_data_array)
// The array is also returned. A global array is hopefully not necessary
function setSupporterDataArrayFromXmlObject(i_xml)
{
    QrProgress.Append('Enter setSupporterDataArrayFromXmlObject');

    g_supporter_data_array = [];

    var n_supporters = i_xml.getNumberOfSupporters();

    var out_index = 0;

    for (var supporter_number = 1; supporter_number <= n_supporters; supporter_number++)
    {
        var contribution_int = i_xml.getContributionInt(supporter_number);

        if (contribution_int - QrStrings.getSupporterContributionLimitValue() >= 0)
        {
            var supporter_data = new SupporterData(i_xml, g_season_start_year, supporter_number);

            g_supporter_data_array[out_index] = supporter_data;

            out_index = out_index + 1;
        }
    }

    QrProgress.Append('g_supporter_data_array is set (' + g_supporter_data_array.length.toString() + ')');
    
    QrProgress.Append('Exit setSupporterDataArrayFromXmlObject');

    return g_supporter_data_array;
    
} // setSupporterDataArrayFromXmlObject


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Set SupporterData Array /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Start Update Qr Files Xml Upload New Supporters /////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Update the QR files XML file (QrFiles.xml) with new supportes and upload their QR files
// Input i_qr_file_xml is the global variable g_qr_files_xml_object
function updateQrFilesXmlUploadQrFilesSupporter(i_supporter_array, i_qr_file_xml)
{
    // TODO Handle the case if first and/or family name is changed

    QrProgress.Append("Enter updateQrFilesXmlUploadQrFilesSupporter");

    if (!checkUpdateQrFilesXmlUploadQrFilesSupporter(i_supporter_array, i_qr_file_xml))
    {
        return;
    }

    var n_supporters = i_supporter_array.length;

    QrProgress.Append("Number of supporters is " + n_supporters.toString());

    var n_qr_files = i_qr_file_xml.getNumberOfQrFiles();

    QrProgress.Append("Number of registered files is " + n_qr_files.toString());

    var registered_files = [];

    var index_registered = 0;

    for (var index_supporter=0; index_supporter < n_supporters; index_supporter++)
    {
        var supporter_data = i_supporter_array[index_supporter];

        var first_name = supporter_data.getFirstName();

        var family_name = supporter_data.getFamilyName();

        for (var qr_file_number = 1; qr_file_number <= n_qr_files; qr_file_number++)
        {
            var first_name_qr_file = i_qr_file_xml.getFirstName(qr_file_number);

            var family_name_qr_file = i_qr_file_xml.getFamilyName(qr_file_number);

            if (first_name_qr_file == first_name && family_name_qr_file == family_name)
            {
                registered_files[index_registered] = index_supporter;

                index_registered = index_registered + 1;
            }

        } // qr_file_number

    } // index_supporter

    QrProgress.Append("Number of already registered files is " + registered_files.length.toString());

    var files_to_register = getIndicesForNotRegisteredFiles(n_supporters, registered_files);

    registerAndUploadQrFilesXmlSupporter(files_to_register, i_supporter_array, i_qr_file_xml);

    QrProgress.Append("Exit updateQrFilesXmlUploadQrFilesSupporter");

    // QrProgress.Msg("QR Codes neue Supporter hochgeladen");

} // updateQrFilesXmlUploadQrFilesSupporter

// Returns an array of indices defining objects that shall be registered
function getIndicesForNotRegisteredFiles(i_n_array, i_registered_files)
{
    QrProgress.Append("Enter getIndicesForNotRegisteredFiles");

    var files_to_register = [];

    var index_to_register = 0;

    for (var index_array = 0; index_array < i_n_array; index_array++)
    {
        var b_not_equal_to_any_reg = true;

        for (var index_already_reg = 0; index_already_reg < i_registered_files.length; index_already_reg++)
        {
            var index_supporter_already_reg = i_registered_files[index_already_reg];

            if (index_supporter_already_reg == index_array)
            {
                b_not_equal_to_any_reg = false;
            }

        } // index_already_reg

        if (b_not_equal_to_any_reg)
        {
            files_to_register[index_to_register] = index_array;

            index_to_register = index_to_register + 1;
        }

    } // index_array

    if (files_to_register.length >= 2)
    {
        QrProgress.Append("Index for the first  file to register is " + files_to_register[0].toString());

        QrProgress.Append("Index for the second file to register is " + files_to_register[1].toString());
    }

    QrProgress.Append("Number of items to register is " + files_to_register.length.toString());

    QrProgress.Append("Exit getIndicesForNotRegisteredFiles");

    return files_to_register;

} // getIndicesForNotRegisteredFiles

// Register files in XML file QrFiles.xml and upload QR files
function registerAndUploadQrFilesXmlSupporter(i_files_to_register, i_supporter_array, i_qr_file_xml)
{
    QrProgress.Append("Enter registerAndUploadQrFilesXmlSupporter");

    var n_to_reg = i_files_to_register.length;

    if (n_to_reg == 0)
    {
        QrProgress.Append("registerAndUploadQrFilesXmlSupporter No files to register");  

        alert("registerAndUploadQrFilesXmlSupporter No files to register");
        
        return;
    }

    QrProgress.Append("Number of QR file to register and upload is " + n_to_reg.toString());

    QrProgress.Append("Index for the first  file to register is " + i_files_to_register[0].toString());

    if (n_to_reg > 2)
    {
        n_to_reg = 2; // QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
    }

    for (var index_reg = 0; index_reg < n_to_reg; index_reg++)
    {
        var index_supporter_data = i_files_to_register[index_reg];

        var supporter_data = i_supporter_array[index_supporter_data];

        if (supporter_data == null)
        {
            alert("registerAndUploadQrFiles SupporterData object is null. n_to_reg= " + i_files_to_register.length.toString() + 
            ' Debug n_to_reg= ' + n_to_reg.toString() + ' index_reg= ' + n_to_reg.toString());
    
            return;
        }

        i_qr_file_xml.appendNode();

        setDataOfAppendedQrFilesNodeAndUploadSupporter(supporter_data, i_qr_file_xml);
    }

    i_qr_file_xml.saveXmlFileOnServerCallback(callbackAfterUpdateAndSaveOfQrFilesXml);

    debugDisplayXmlAsText();

    QrProgress.Append("Number of registered and uploaded QR files is " + n_to_reg.toString());


    QrProgress.Append("Exit registerAndUploadQrFilesXmlSupporter");

} // registerAndUploadQrFiles

// Set data of appended QR files node
function setDataOfAppendedQrFilesNodeAndUploadSupporter(i_supporter_data, i_qr_file_xml)
{
    console.log("Enter setDataOfAppendedQrFilesNodeAndUploadSupporter");

    if (i_supporter_data == null)
    {
        alert("setDataOfAppendedQrFilesNodeAndUploadSupporter Input SupporterData object is null");

        return;
    }

	var append_number_files = i_qr_file_xml.getNumberOfQrFiles();
	
	console.log("append_number_files= " + append_number_files.toString());
	
	var file_number = append_number_files;
	
	console.log("file_number= " + file_number.toString());

    var first_name = i_supporter_data.getFirstName();

    var family_name = i_supporter_data.getFamilyName();

    var first_family_name = first_name + ' ' + family_name;

    var street = i_supporter_data.getStreet();
    
    var house_number = i_supporter_data.getHouseNumber();
    
    var postal_code = i_supporter_data.getPostalCode();
    
    var domicil = i_supporter_data.getDomicil();
    
    var email = i_supporter_data.getEmail();
    
    var comment = i_supporter_data.getComment();
    
    var supporter_contribution_int = i_supporter_data.getContribution();

    var supporter_contribution = supporter_contribution_int.toString();

    var download_code_one = i_qr_file_xml.getRandomDownloadCode();

    var download_code_two = "";

    if (supporter_contribution_int > 2 * QrStrings.getSupporterContributionLimitValue())
    {
        download_code_two = i_qr_file_xml.getRandomDownloadCode();
    }

    // TODO Check that it not already exists

	
    i_qr_file_xml.setFirstName(file_number, first_name);

    i_qr_file_xml.setFamilyName(file_number, family_name);

    i_qr_file_xml.setQrCodeNameOne(file_number, first_family_name);

    i_qr_file_xml.setStreet(file_number, street);

    i_qr_file_xml.setHouseNumber(file_number, house_number);

    i_qr_file_xml.setPostalCode(file_number, postal_code);

    i_qr_file_xml.setDomicil(file_number, domicil);

    i_qr_file_xml.setEmail(file_number, email);

    i_qr_file_xml.setSponsor(file_number, QrStrings.getBoolFalseString());

    i_qr_file_xml.setComment(file_number, comment);

	i_qr_file_xml.setSupporterContribution(file_number, supporter_contribution);

	i_qr_file_xml.setSupporter(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setSupporterAdmission(file_number, QrStrings.getBoolTrueString());

	i_qr_file_xml.setMusicianAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setFreeAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setSponsorAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setMemberAdmission(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setDownloadOne(file_number, download_code_one);

	i_qr_file_xml.setDownloadTwo(file_number, download_code_two);

	i_qr_file_xml.setEmailSent(file_number, QrStrings.getBoolFalseString());

	i_qr_file_xml.setMailSent(file_number, QrStrings.getBoolFalseString());

    i_qr_file_xml.setPrintSent(file_number, QrStrings.getBoolFalseString());

    i_qr_file_xml.setPrintBatch(file_number, QrStrings.getBoolFalseString());

    uploadQrFileImageAndTextSupporter(file_number, i_qr_file_xml);

} // setDataOfAppendedQrFilesNodeAndUploadSupporter

// Upload the QR image and text file for the input file number
function uploadQrFileImageAndTextSupporter(i_file_number, i_qr_file_xml)
{

    if (!checkInputuploadQrFileImageAndTextSupporter(i_file_number, i_qr_file_xml))
    {
        return;
    }

    var download_code_one = i_qr_file_xml.getDownloadOne(i_file_number);

    var qr_text_image = i_qr_file_xml.getQrCombinedSeasonImageString(i_file_number);

    var qr_text_text = i_qr_file_xml.getQrCombinedSeasonTextString(i_file_number, download_code_one);

    var image_data_url = generateQrCodeOnePersonDataUrl(qr_text_image);


    var season_start_year = i_qr_file_xml.getSeasonStartYear();

    var file_name_path_image = QrStrings.getRelativeUrlQrFileImage(season_start_year, download_code_one);

    var file_name_path_text = QrStrings.getRelativeUrlQrFileText(season_start_year, download_code_one)

    var b_execute_server = execApplicationOnServer();

    if (!b_execute_server)
    {
        console.log("uploadQrFileImageAndTextSupporter QR code file not saved. Execution with VSC (Live Server)");
        console.log("File number is " + i_file_number.toString());
        console.log("QR text image: " + qr_text_image);
        console.log("QR text text text:  " + qr_text_text);
        console.log("File name image: " + file_name_path_image);
        console.log("File name text:  " + file_name_path_text);

        return;
    }

    if (!saveFileWithJQueryPostFunction(file_name_path_image, image_data_url))
    {
        alert("uploadQrFileImageAndTextSupporter Saving QR file image failed");

        return;
    }

    console.log("uploadQrFileImageAndTextSupporter Uploaded image file: " + file_name_path_image);

    if (!saveFileWithJQueryPostFunction(file_name_path_text, qr_text_text))
    {
        alert("uploadQrFileImageAndTextSupporter Saving QR file text failed");

        return;
    }

    console.log("uploadQrFileImageAndTextSupporter Uploaded text file: " + file_name_path_text);

    var download_code_two = i_qr_file_xml.getDownloadTwo(i_file_number);

    if (download_code_two.length > 0)
    {
        file_name_path_image = QrStrings.getRelativeUrlQrFileImage(season_start_year, download_code_two);

        file_name_path_text = QrStrings.getRelativeUrlQrFileText(season_start_year, download_code_two);

        if (!saveFileWithJQueryPostFunction(file_name_path_image, image_data_url))
        {
            alert("uploadQrFileImageAndTextSupporter Saving QR file image failed (2)");
    
            return;
        }

        console.log("uploadQrFileImageAndTextSupporter Uploaded image file: " + file_name_path_image + " Second file");

        if (!saveFileWithJQueryPostFunction(file_name_path_text, qr_text_text))
        {
            alert("uploadQrFileImageAndTextSupporter Saving QR file text failed (2)");
    
            return;
        }

        console.log("uploadQrFileImageAndTextSupporter Uploaded text file: " + file_name_path_text + " Second file");
    }


} // uploadQrFileImageAndTextSupporter

// Check input data
function checkInputuploadQrFileImageAndTextSupporter(i_file_number, i_qr_file_xml)
{
    var ret_bool = true; 

    if (null == i_qr_file_xml)
    {
        alert("uploadQrFilesImageAndTest i_qr_file_xml is null");

        ret_bool = false;
    }

    var n_files = i_qr_file_xml.getNumberOfQrFiles();
    if (i_file_number < 1 || i_file_number > n_files)
    {
        alert("uploadQrFilesImageAndTest Input file number " + 
        i_file_number.toString() + ' is not between 1 and ' + n_files.toString());

        ret_bool = false;
    }

    return ret_bool;

} // checkInputuploadQrFileImageAndTextSupporter

// Check the input paramaters to updateQrFilesXmlUploadQrFilesSupporter
function checkUpdateQrFilesXmlUploadQrFilesSupporter(i_supporter_array, i_qr_file_xml)
{
    var ret_bool = true;

    if (null == i_qr_file_xml)
    {
        alert("checkUpdateQrFilesXmlUploadQrFilesSupporter i_qr_file_xml is null");

        ret_bool = false;
    }

    if (i_supporter_array == null)
    {
        alert("checkUpdateQrFilesXmlUploadQrFilesSupporter i_supporter_array is null");

        ret_bool = false;        
    }
    else
    {
        if (i_supporter_array.length == 0)
        {
            alert("checkUpdateQrFilesXmlUploadQrFilesSupporter i_supporter_array has zero length");

            ret_bool = false;           
        }
    }

    if (!ret_bool)
    {
        QrProgress.Append("Input data to checkUpdateQrFilesXmlUploadQrFilesSupporter not OK");       
    }

    return ret_bool;

} // checkUpdateQrFilesXmlUploadQrFilesSupporter


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Update Qr Files Xml Upload New Supporters ///////////////////
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

        this.m_street = '';

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

        this.m_street = this.m_xml.getStreet(this.m_supporter_number);

        this.m_house_number = this.m_xml.getHouseNumber(this.m_supporter_number);

        this.m_postal_code = this.m_xml.getPostalCode(this.m_supporter_number);

        this.m_domicil = this.m_xml.getDomicil(this.m_supporter_number);

        this.m_email = this.m_xml.getEmail(this.m_supporter_number);

        this.m_comment = this.m_xml.getComment(this.m_supporter_number);

        this.m_contribution = parseInt(this.m_xml.getContribution(this.m_supporter_number, this.m_season_start_year));

    } // setData

    getFirstName() { return this.m_first_name }

    getFamilyName() { return this.m_family_name } 

    getStreet() { return this.m_street } 

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




