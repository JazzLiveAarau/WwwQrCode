

<?php

// Returns the season start year
// -----------------------------
// Input data is the Support.xml file name from previous and from current year
// Please note that escape characters like \n not is allowed in the string
//
// This function is called from another HTML (or PHP) page this way:
// $.post("SeasonStartYear.php", 
//         {file_name: file_name_str},function(data,status){alert(data);});
//
// $.post():               Method requesting data from the server using an HTTP POST request. 
//                         Hier actually only requesting an execution, i.e. create a file 
// "SeasonStartYear.php":  URL parameter specifies the URL you wish to request
//                         Please note that the whole file will be executed. Not a normal function call
// current_year:          Input PHP parameter for the execution (current_year is the JavaScript parameter) 
// file_name_this:         Input PHP parameter for the execution (file_name_this is the JavaScript parameter) 
// file_name_prev:         Input PHP parameter for the execution (file_name_prev is the JavaScript parameter) 
// function:               The callback function, i.e. defining what to do with the PHP result
//                         In this case nothing needs to be done in the calling JavaScript function
// data:                   The result of the execution. In this case a year as string
//                         The data is a string that is created from calls of PHP function echo
// status:                 Status from the execution. The value is success for a succesfull execution
//
// The function $.post is defined in a jQuery library that has to be included on calling web page
// The library may be downloaded, but also a CDN (Content Delivery Network) library can be referenced with
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
//
// The above things are described on these pages:
// https://www.w3schools.com/jquery/jquery_ajax_get_post.asp
// https://www.w3schools.com/jquery/jquery_get_started.asp
// https://www.youtube.com/watch?v=jVAaxkbmCts
// PHP is_file(file): Returns TRUE if a regular file
// https://www.w3schools.com/php/func_filesystem_is_file.asp
// https://thisinterestsme.com/php-create-file-if-not-exists/


// Passed data from the calling function
$current_year = $_POST['current_year'];
$file_name_this = $_POST['file_name_this'];
$file_name_prev = $_POST['file_name_prev'];


if (is_file($file_name_this))
{
    echo $current_year;
}
else if (is_file($file_name_prev))
{
    $previos_year_int = intval($current_year) - 1;

    $previos_year = strval($previos_year_int);

    echo $previos_year;
}
else
{
    echo "-1";
}


 
?>
 
