async function callFuncAfterTimeOut(miliSec, callFunction) {
    await new Promise(resolve => setTimeout(resolve, miliSec));
    return callFunction()
}

async function initializeItiPlaceholder() {
    let input = document.querySelector("#international_PhoneNumber_countrycode")

    let iti = await window.intlTelInput(input, {
        nationalMode: true,
        initialCountry: window.country ?? "US",
        customPlaceholder:  await function (selectedCountryPlaceholder, selectedCountryData) {
            console.log('window.country: ', window.country)
            let returnData = '';
            console.log("selectedCountryPlaceholder: ", selectedCountryPlaceholder)
            console.log("selectedCountryData: ", selectedCountryData)
            let mask = selectedCountryPlaceholder
                .replace(/[0-9]/g, 'x')
                .replace(/[()-]/g, ' ')
            mask = selectedCountryData.dialCode + " " + mask
            console.log("mask: ", mask)
            $("#international_PhoneNumber_countrycode").val('');
            $("#international_PhoneNumber_countrycode").mask("+" + mask);
            returnData = "+" + selectedCountryData.dialCode + " " + selectedCountryPlaceholder;
            return returnData;
        },
        utilsScript: "https://dimakhomiak.github.io/backley-retreat/js/utils.js?1638200991544", // just for formatting/placeholders etc
    });
}


callFuncAfterTimeOut(1000, initializeItiPlaceholder).then()


