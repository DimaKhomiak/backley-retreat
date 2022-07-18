let input = document.querySelector("#international_PhoneNumber_countrycode")

let iti = window.intlTelInput(input, {
    nationalMode: true,
    initialCountry: "auto",
    geoIpLookup: function (success, failure) {
        $.get("https://ipinfo.io?token=eb601a91986a65", function () {
        }, "jsonp").always(function (resp) {
            let countryCode = (resp && resp.country) ? resp.country : "us";

            $('#G_City').val((resp && resp.city) ? resp.city : null)
            $('#G_Country').val((resp && resp.country) ? resp.country : null)
            $('#G_Hostname').val((resp && resp.hostname) ? resp.hostname : null)
            $('#G_Ip').val((resp && resp.ip) ? resp.ip : null)
            $('#G_Location').val((resp && resp.loc) ? resp.loc : null)
            $('#G_Org').val((resp && resp.org) ? resp.org : null)
            $('#G_Postal').val((resp && resp.postal) ? resp.postal : null)
            $('#G_Region').val((resp && resp.region) ? resp.region : null)
            $('#G_Timezone').val((resp && resp.timezone) ? resp.timezone : null)

            console.log("resp: ", resp)


            success(countryCode);
        });
    },
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        console.log("selectedCountryPlaceholder: ", selectedCountryPlaceholder)
        console.log("selectedCountryData: ", selectedCountryData)

        let mask = selectedCountryPlaceholder
            .replace(/[0-9]/g, 'x')
            .replace(/[()-]/g, ' ')

        mask = selectedCountryData.dialCode + " " + mask

        console.log("mask: ", mask)

        $("#international_PhoneNumber_countrycode").val('');
        $("#international_PhoneNumber_countrycode").mask("+" + mask);

        return "+" + selectedCountryData.dialCode + " " + selectedCountryPlaceholder;
    },
    utilsScript: "./js/utils.js?1638200991544", // just for formatting/placeholders etc
});

// let handleChange = function() {
//     let text = (iti.isValidNumber()) ? "International: " + iti.getNumber() : "Please enter a number below";
//     console.log("handleChange: ", text)
// };
//
// input.addEventListener('change', handleChange);