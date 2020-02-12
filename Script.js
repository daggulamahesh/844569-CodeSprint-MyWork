<script>
var prices = new Array();
prices[one]=500;
prices[four]=400*4;
prices[12]=300*12;
function displayRadioValue() { 
            var ele = document.getElementsByName('prices'); 
              
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                document.getElementById("result").innerHTML
                        = "prices: "+ele[i].value; 
            } 
        } 
    

</script>
<script>
var age = +document.getElementById('age1').value;

if ( !( age > 18 && age<60 ) ){

        alert("The age must be a number between 18 and 60");
        return false;
}

return true;
</script>
<script>
var placeSearch, autocomplete;

// List all address components (corresponds to form field IDs and Google address object)
var componentForm = {
  autocomplete: ['street_number', 'route'],
  inputCity: 'locality',
  inputState: 'administrative_area_level_1',
  inputZip: 'postal_code',
  inputCounty: 'administrative_area_level_2',
  inputCountry: 'country'
};

// Create autocomplete object based on the autocomplete ("street") field
// Location type restricted to geocode
function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */ (document.getElementById('autocomplete')),
      {type: ['geocode']});

  // Call fillInAddress when user selects an address from dropdown
  autocomplete.addListener('place_changed', fillInAddress);
}

// Fill fields with values from Google Maps autocomplete object
function fillInAddress() {

  // Get place data from autocomplete object
  var place = autocomplete.getPlace();
  console.log(place);
  
  // Enable each field, then fill them with the corresponding value from the place object
  for (var component in componentForm) {
    document.getElementById(component).disabled = false;
    document.getElementById(component).value = search(componentForm[component], place.address_components);
  }

  // Original Google Implementation - do not use
  // Get each component of the address from the place
  // object and fill the corresponding field
//   for (var i = 0; i < place.address_components.length; i++) {

//     var addressType = place.address_components[i].types[0];

//     if (componentForm[addressType]) {
//       var val = place.address_components[i][componentForm[addressType]];
//       document.getElementById(addressType).value = val;
//     }
//   }
  
  // Fill the autocomplete field with values from the place object
  // If a street number is not found, set the field to route only.
  if (search("street_number", place.address_components) != "") {
    document.getElementById("autocomplete").value = search("street_number", place.address_components) + " ";
  }
  document.getElementById("autocomplete").value += search("route", place.address_components);
  
  // Search the passed object for a specified address component/type and return the short_name value of the matched component/type
  // If requested type does not exist in the placeObject, return an empty string
  function search(type, placeObject) {
    for (var i = 0; i < placeObject.length; i++) {
      if (placeObject[i].types[0] === type) {
        return placeObject[i].short_name;
      } else if (i === placeObject.length - 1) {
        return "";
      }
    }
  }
}

function Validate(txt) {
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}
function validatephone(phone) 
{
    var maintainplus = '';
    var numval = phone.value
    if ( numval.charAt(0)=='+' )
    {
        var maintainplus = '';
    }
    curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
    phone.value = maintainplus + curphonevar;
    var maintainplus = '';
    phone.focus;
}


function email_validate(exampleInputEmail1)
{
var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(exampleInputEmail1) == false)
    {
    document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
    document.getElementById("status").innerHTML	= "<span class='valid'>Thanks, you have entered a valid Email address!</span>";	
    }
}
function validateAge(age) {
    var input = age.value;
    if(input>=18&&input<=60) {
        return true;
    }
    else {
        alert("Age must be between 18 and 25 | You have entered "+input);
        return false;
    }
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



</script>
<script type="text/javascript">
function toggleTextbox(opt)
{
    if (opt == 'T')
        document.getElementById('txtText').disabled = false;
    else
        document.getElementById('txtText1').disabled = true;
}


    </script> 
<script>
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
</script>