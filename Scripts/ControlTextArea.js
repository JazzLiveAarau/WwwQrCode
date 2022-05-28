// File: ControlTextArae.js
// Date: 2022-05-28
// Author: Gunnar Lidén

// Inhalt
// =============
//
// Classes for the standard control Text area <textarea>
//
// References: 
// https://www.w3schools.com/js/js_classes.asp
// https://www.w3schools.com/tags/tag_textarea.asp
// https://www.w3schools.com/jsref/dom_obj_textarea.asp
// https://www.w3schools.com/jsref/prop_textarea_wrap.asp
// https://www.w3schools.com/jsref/prop_textarea_cols.asp
// https://www.w3schools.com/jsref/prop_textarea_rows.asp

// Class that creates a text area
// The code that will be generated is 
// <label for="id_text_area">Label text</label>
// <textarea id="id_text_area" value="My remark" cols="20" rows="10" oninput="myFunction()" title="Tip ...">  
// Compulsary input is the identity of the text area and the container 
// (normally a <div> element), where the text area shall be placed 
// Here is a sample how an object of the class can be created:
// var text_area = new JazzTextArea("id_text_area", "i_id_container")
class JazzTextArea 
{
    // Function that is executed when an object of this class is created
    constructor(i_id_text_area, i_id_div_container) 
    {
        // Member variables
        // ================

        // The identity of the text area
        this.m_id_text_area = i_id_text_area;

        // The identity of the container for the text area
        this.m_id_div_container = i_id_div_container;

        // The container element for the text area
        this.m_el_div_container = null;

        // The class for the text area
        this.m_class = '';
    
        // The value of the text area
        this.m_value = '';

        // The oninput function name. Only the name is input
        this.m_oninput_function = '';

        // Flag telling if the text area shall be read only
        this.m_read_only_flag = false;        

        // Label text
        this.m_label_text = '';

        // Label position relative the text area
        // left: Left of area right: Right of area above: Above area
        // Default is left of the text area
        this.m_label_text_position = 'left'; 

        // Width of the text area. Width is the number of characters
        // If width not is set there will be no attribute cols= "20"
        // Then the default value for the browser application will be the width
        this.m_text_area_cols = 0;

        // Height of the text area, i.e. the number of visible rows
        this.m_text_area_rows = 5;

        // Maximum length (number of characters) in the text area
        // If the maximum length not is defined there will be no attribute maxlength= "30"
        // Then the default value for the browser application will be the maximum length
        this.m_maxlength = 0;

        // The title attribute specifies extra information about an element.
        // The information is most often shown as a tooltip text when the mouse 
        // moves over the element.
        this.m_title = '';

        // Inner elements of start input m_el_div_container
        this.m_div_container_inner_html_start = "";

        // Initialization
        // ==============        

        this.setDivContainerElement();

        this.setControl();

    } // constructor

    /*QQQQ
    // Set div inner elements if already existing at start
    // Criterion is that '<input' or '<button' is contained in the string 
    // TODO add more elements
    setDivInnerHtmlStartElements()
    {
        var inner_html_start = this.m_el_div_container.innerHTML;

        if (inner_html_start.length > 0)
        {
            var index_input = inner_html_start.indexOf("<input");

            var index_button = inner_html_start.indexOf("<button");

            if (index_input >= 0 || index_button >= 0)
            {
                this.m_div_container_inner_html_start = inner_html_start;
            } // div is set with <input> and/or <button> elements

        } // div is set with something ...

    } // setDivInnerHtmlStartElements

    QQQ*/

    // Set and get functions
    // =====================

    // Sets the value for the text area 
    setValue(i_value) 
    {
      this.m_value = i_value;

      var element_html = this.getHtmlElement();

      element_html.value = this.m_value;

      // Not necessary this.setControl();

    } // setValue

    // Returns the value of the text area
    getValue()
    {
        var element_html = this.getHtmlElement();

        var value = element_html.value;

        this.setValue(value);

        return this.m_value;

    } // getValue    
    
    // Set functions for the layout member variables
    // =============================================

    // Set the oninput function name. Only the name is input
    setOninputFunctionName(i_oninput_function)
    {
        this.m_oninput_function = i_oninput_function;

        this.setControl();

    } // setOninputFunctionName

    // Sets the class for the text area 
    // There will be no class attribute if this function not is called
    setClass(i_class) 
    {
      this.m_class = i_class;

      this.setControl();

    } // setClass

    // Sets the label text for the text area 
    // There will be no label if the text not is set
    setLabelText(i_label_text) 
    {
      this.m_label_text = i_label_text;

      this.setControl();

    } // setLabelText    

    // Sets the label text to the left of the text area
    setLabelTextPositionLeft(i_label_text) 
    {
        this.m_label_text_position = 'left'; 

        this.setControl();

    } // setLabelTextPositionLeft

    // Sets the label text to the right of the text area
    setLabelTextPositionRight() 
    {
        this.m_label_text_position = 'right'; 

        this.setControl();

    } // setLabelTextPositionRight
    
    // Sets the label text above the text area
    setLabelTextPositionAbove() 
    {
        this.m_label_text_position = 'above'; 

        this.setControl();

    } // setLabelTextPositionAbove
    
    // Sets the text area width. The width is the number of characters
    setCols(i_text_area_cols) 
    {
        this.m_text_area_cols = i_text_area_cols;
        
        this.setControl();

    } // SetCols

    // Sets the number of visible rows
    setRows(i_text_area_rows) 
    {
        this.m_text_area_rows = i_text_area_rows;
        
        this.setControl();

    } // SetRows

    // Sets the maximum length in the text area
    // The maximum length value is the number of characters
    setMaxlength(i_maxlength) 
    {
        this.m_maxlength = i_maxlength; 

        this.setControl();

    } // setMaxlength

    // Set read only flag to false or true
    setReadOnlyFlag(i_read_only_flag)
    {
        this.m_read_only_flag = i_read_only_flag; 

        this.setControl();

    } // setReadOnlyFlag

    // Sets the title of this HTML element. The title can be a tool tip
    // In a desktop computer the title is displayed when the mouse is
    // over the HTML element
    setTitle(i_title) 
    {
        this.m_title = i_title; 

        this.setControl();

    } // setTitle

    // Utility functions
    // =================

    // Sets the div element container
    setDivContainerElement()
    {
        this.m_el_div_container = document.getElementById(this.m_id_div_container);

    } // setDivContainerElement

    // Checks
    checkContainerElement()
    {
        var ret_b_check = true;

        if (null == this.m_el_div_container)
        {
            alert("JazzTextArea error: HTML element with id= " + this.m_id_div_container + " does not exist.");

            ret_b_check = false;
        }   
        
        return ret_b_check;

    } // checkContainerElement

    // Sets the control
    // Append if the input div element had elements
    setControl()
    {
        if (!this.checkContainerElement())
        {
            return;
        }

        var html_str = this.getHtmlString();

        this.m_el_div_container.innerHTML = html_str;


        /*QQQQQ
        if (this.m_div_container_inner_html_start.length > 0)
        {

            var appended_html = this.m_div_container_inner_html_start + html_str;

            this.m_el_div_container.innerHTML = appended_html;
        }
        else
        {
            this.m_el_div_container.innerHTML = html_str;
        }       
        QQQ*/

    } // setControl

    // Returns the HTML text area element 
    getHtmlElement()
    {
        return document.getElementById(this.m_id_text_area);

    } // getHtmlElement

    // Returns the string that defines the HTML text area string
    // <input type="text" id="id_text_area" value="My remark" size="20" maxlength="30" title="Tip ...">  
    getHtmlString()
    {
        var ret_html_str = '';

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'left')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_text_area, this.m_title);
        }

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'above')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_text_area, this.m_title) + '<br>';
        }

        ret_html_str = ret_html_str + '<textarea id="' + this.m_id_text_area + '" ';

        if (this.m_class.length > 0)
        {
            ret_html_str = ret_html_str + ' class="' + this.m_class + '" ';
        }        

        ret_html_str = ret_html_str + ' value= "' + this.m_value + '" ';

        if (this.m_text_area_cols.length > 0)
        {
            ret_html_str = ret_html_str + ' cols="' + this.m_text_area_cols + '" ';
        }

        if (this.m_text_area_rows.length > 0)
        {
            ret_html_str = ret_html_str + ' rows="' + this.m_text_area_rows + '" ';
        }

        if (this.m_maxlength.length > 0)
        {
            ret_html_str = ret_html_str + ' maxlength="' + this.m_maxlength + '" ';
        }


        if (this.m_oninput_function.length > 0)
        {
            ret_html_str = ret_html_str + ' oninput="' + this.m_oninput_function + '()" ';
        }

        if (this.m_title.length > 0)
        {
            ret_html_str = ret_html_str + ' title="' + this.m_title + '" ';
        }

        if (this.m_read_only_flag)
        {
            ret_html_str = ret_html_str + ' readonly';
        }

        ret_html_str = ret_html_str + '>';

        if (this.m_label_text.length > 0 && this.m_label_text_position == 'right')
        {
            ret_html_str = ret_html_str + 
                getHtmlElementLabelString(this.m_label_text, this.m_id_text_area, this.m_title);
        }

        return ret_html_str;

    } // getHtmlString

} // JazzTextArea

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// End Control text area ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////