

<?php

// Determines if a file exists
// ---------------------------
// Input data is the file name and the full content of the file
// Please note that escape characters like \n not is allowed in the string
//
// This function is called from another HTML (or PHP) page this way:
// $.post("ExistsFile.php", 
//         {file_name: file_name_str},function(data,status){alert(data);});
//
// $.post():               Method requesting data from the server using an HTTP POST request. 
//                         Hier actually only requesting an execution, i.e. create a file 
// "ExistsFile.php":       URL parameter specifies the URL you wish to request
//                         Please note that the whole file will be executed. Not a normal function call
// file_content:           Input PHP parameter for the execution (content_string is the JavaScript parameter) 
// file_name:              Input PHP parameter for the execution (file_name_str is the JavaScript parameter) 
// function:               The callback function, i.e. defining what to do with the PHP result
//                         In this case nothing needs to be done in the calling JavaScript function
// data:                   The result of the execution. In this case TRUE or FALSE
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
$file_name = $_POST['file_name'];

// Check if it is a regular file, i.e. here if it is existing
if (is_file($file_name))
{
    echo "TRUE";
}
else
{
    echo "FALSE";
}


 
?>
 
