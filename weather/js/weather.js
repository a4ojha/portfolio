const apiKey = "9ab32927c576ec8ee1f6882fa5cbb92e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const background = document.querySelector(".card");

// Converts 2 letter country code to country name
function codeToCountry(code) {
    var countries = {
        'AD': 'Andorra',
        'AE': 'United Arab Emirates',
        'AF': 'Afghanistan',
        'AG': 'Antigua and Barbuda',
        'AI': 'Anguilla',
        'AL': 'Albania',
        'AM': 'Armenia',
        'AO': 'Angola',
        'AQ': 'Antarctica',
        'AR': 'Argentina',
        'AS': 'American Samoa',
        'AT': 'Austria',
        'AU': 'Australia',
        'AW': 'Aruba',
        'AX': 'Åland Islands',
        'AZ': 'Azerbaijan',
        'BA': 'Bosnia and Herzegovina',
        'BB': 'Barbados',
        'BD': 'Bangladesh',
        'BE': 'Belgium',
        'BF': 'Burkina Faso',
        'BG': 'Bulgaria',
        'BH': 'Bahrain',
        'BI': 'Burundi',
        'BJ': 'Benin',
        'BL': 'Saint Barthélemy',
        'BM': 'Bermuda',
        'BN': 'Brunei Darussalam',
        'BO': 'Bolivia',
        'BQ': 'Bonaire, Sint Eustatius and Saba',
        'BR': 'Brazil',
        'BS': 'Bahamas',
        'BT': 'Bhutan',
        'BV': 'Bouvet Island',
        'BW': 'Botswana',
        'BY': 'Belarus',
        'BZ': 'Belize',
        'CA': 'Canada',
        'CC': 'Cocos (Keeling) Islands',
        'CD': 'Democratic Republic of the Congo',
        'CF': 'Central African Republic',
        'CG': 'Congo',
        'CH': 'Switzerland',
        'CI': 'Côte d\'Ivoire',
        'CK': 'Cook Islands',
        'CL': 'Chile',
        'CM': 'Cameroon',
        'CN': 'China',
        'CO': 'Colombia',
        'CR': 'Costa Rica',
        'CU': 'Cuba',
        'CV': 'Cabo Verde',
        'CW': 'Curaçao',
        'CX': 'Christmas Island',
        'CY': 'Cyprus',
        'CZ': 'Czechia',
        'DE': 'Germany',
        'DJ': 'Djibouti',
        'DK': 'Denmark',
        'DM': 'Dominica',
        'DO': 'Dominican Republic',
        'DZ': 'Algeria',
        'EC': 'Ecuador',
        'EE': 'Estonia',
        'EG': 'Egypt',
        'EH': 'Western Sahara',
        'ER': 'Eritrea',
        'ES': 'Spain',
        'ET': 'Ethiopia',
        'FI': 'Finland',
        'FJ': 'Fiji',
        'FK': 'Falkland Islands (Malvinas)',
        'FM': 'Federated States ofMicronesia',
        'FO': 'Faroe Islands',
        'FR': 'France',
        'GA': 'Gabon',
        'GB': 'United Kingdom of Great Britain and Northern Ireland',
        'GD': 'Grenada',
        'GE': 'Georgia',
        'GF': 'French Guiana',
        'GG': 'Guernsey',
        'GH': 'Ghana',
        'GI': 'Gibraltar',
        'GL': 'Greenland',
        'GM': 'Gambia',
        'GN': 'Guinea',
        'GP': 'Guadeloupe',
        'GQ': 'Equatorial Guinea',
        'GR': 'Greece',
        'GS': 'South Georgia and the South Sandwich Islands',
        'GT': 'Guatemala',
        'GU': 'Guam',
        'GW': 'Guinea-Bissau',
        'GY': 'Guyana',
        'HK': 'Hong Kong',
        'HM': 'Heard Island and McDonald Islands',
        'HN': 'Honduras',
        'HR': 'Croatia',
        'HT': 'Haiti',
        'HU': 'Hungary',
        'ID': 'Indonesia',
        'IE': 'Ireland',
        'IL': 'Israel',
        'IM': 'Isle of Man',
        'IN': 'India',
        'IO': 'British Indian Ocean Territory',
        'IQ': 'Iraq',
        'IR': 'Iran',
        'IS': 'Iceland',
        'IT': 'Italy',
        'JE': 'Jersey',
        'JM': 'Jamaica',
        'JO': 'Jordan',
        'JP': 'Japan',
        'KE': 'Kenya',
        'KG': 'Kyrgyzstan',
        'KH': 'Cambodia',
        'KI': 'Kiribati',
        'KM': 'Comoros',
        'KN': 'Saint Kitts and Nevis',
        'KP': 'Democratic People\'s Republic of Korea',
        'KR': 'Republic of Korea',
        'KW': 'Kuwait',
        'KY': 'Cayman Islands',
        'KZ': 'Kazakhstan',
        'LA': 'Lao People\'s Democratic Republic',
        'LB': 'Lebanon',
        'LC': 'Saint Lucia',
        'LI': 'Liechtenstein',
        'LK': 'Sri Lanka',
        'LR': 'Liberia',
        'LS': 'Lesotho',
        'LT': 'Lithuania',
        'LU': 'Luxembourg',
        'LV': 'Latvia',
        'LY': 'Libya',
        'MA': 'Morocco',
        'MC': 'Monaco',
        'MD': 'Republic of Moldova',
        'ME': 'Montenegro',
        'MF': 'Saint Martin (French part)',
        'MG': 'Madagascar',
        'MH': 'Marshall Islands',
        'MK': 'North Macedonia',
        'ML': 'Mali',
        'MM': 'Myanmar',
        'MN': 'Mongolia',
        'MO': 'Macao',
        'MP': 'Northern Mariana Islands',
        'MQ': 'Martinique',
        'MR': 'Mauritania',
        'MS': 'Montserrat',
        'MT': 'Malta',
        'MU': 'Mauritius',
        'MV': 'Maldives',
        'MW': 'Malawi',
        'MX': 'Mexico',
        'MY': 'Malaysia',
        'MZ': 'Mozambique',
        'NA': 'Namibia',
        'NC': 'New Caledonia',
        'NE': 'Niger',
        'NF': 'Norfolk Island',
        'NG': 'Nigeria',
        'NI': 'Nicaragua',
        'NL': 'Kingdom of the Netherlands',
        'NO': 'Norway',
        'NP': 'Nepal',
        'NR': 'Nauru',
        'NU': 'Niue',
        'NZ': 'New Zealand',
        'OM': 'Oman',
        'PA': 'Panama',
        'PE': 'Peru',
        'PF': 'French Polynesia',
        'PG': 'Papua New Guinea',
        'PH': 'Philippines',
        'PK': 'Pakistan',
        'PL': 'Poland',
        'PM': 'Saint Pierre and Miquelon',
        'PN': 'Pitcairn',
        'PR': 'Puerto Rico',
        'PS': 'State of Palestine',
        'PT': 'Portugal',
        'PW': 'Palau',
        'PY': 'Paraguay',
        'QA': 'Qatar',
        'RE': 'Réunion',
        'RO': 'Romania',
        'RS': 'Serbia',
        'RU': 'Russian Federation',
        'RW': 'Rwanda',
        'SA': 'Saudi Arabia',
        'SB': 'Solomon Islands',
        'SC': 'Seychelles',
        'SD': 'Sudan',
        'SE': 'Sweden',
        'SG': 'Singapore',
        'SH': 'Saint Helena, Ascension and Tristan da Cunha',
        'SI': 'Slovenia',
        'SJ': 'Svalbard and Jan Mayen',
        'SK': 'Slovakia',
        'SL': 'Sierra Leone',
        'SM': 'San Marino',
        'SN': 'Senegal',
        'SO': 'Somalia',
        'SR': 'Suriname',
        'SS': 'South Sudan',
        'ST': 'Sao Tome and Principe',
        'SV': 'El Salvador',
        'SX': 'Sint Maarten (Dutch part)',
        'SY': 'Syrian Arab Republic',
        'SZ': 'Eswatini',
        'TC': 'Turks and Caicos Islands',
        'TD': 'Chad',
        'TF': 'French Southern Territories',
        'TG': 'Togo',
        'TH': 'Thailand',
        'TJ': 'Tajikistan',
        'TK': 'Tokelau',
        'TL': 'Timor-Leste',
        'TM': 'Turkmenistan',
        'TN': 'Tunisia',
        'TO': 'Tonga',
        'TR': 'Türkiye',
        'TT': 'Trinidad and Tobago',
        'TV': 'Tuvalu',
        'TW': 'Taiwan, Province of China',
        'TZ': 'United Republic of Tanzania',
        'UA': 'Ukraine',
        'UG': 'Uganda',
        'UM': 'United States Minor Outlying Islands',
        'US': 'United States of America',
        'UY': 'Uruguay',
        'UZ': 'Uzbekistan',
        'VA': 'Holy See',
        'VC': 'Saint Vincent and the Grenadines',
        'VE': 'Bolivarian Republic of Venezuela',
        'VG': 'Virgin Islands (British)',
        'VI': 'Virgin Islands (U.S.)',
        'VN': 'Viet Nam',
        'VU': 'Vanuatu',
        'WF': 'Wallis and Futuna',
        'WS': 'Samoa',
        'YE': 'Yemen',
        'YT': 'Mayotte',
        'ZA': 'South Africa',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe'
      };
    
    return countries[code];
}

function unixToTime(unix) {
    var date = new Date(unix * 1000);

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();

    var formattedTime = hours + ':' + minutes.substr(-2);
    
    return formattedTime;
}

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    // If city does not exist in database
    if (response.status == 404) {
        // Display error message, hide weather information
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML = codeToCountry(data.sys.country);
        document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
        document.querySelector(".sunrise").innerHTML = moment.utc(data.sys.sunrise, 'X').add(data.timezone, 'seconds').format('H:mm a');
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            background.style.backgroundColor = "rgb(20,20,20)";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

// Search with enter key
searchBox.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});

// On click of search button, get value of search bar and call checkWeather()
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
