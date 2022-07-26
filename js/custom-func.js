function getSearchParameters() {
    let prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr !== "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    let params = {};
    let prmarr = prmstr.split("&");
    for (let i = 0; i < prmarr.length; i++) {
        let tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function validateEmail(email) {
    if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)) {
        return true;
    }
    return false;
}

function getGeoDataFromIpinfo() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://ipinfo.io?token=eb601a91986a65', false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
