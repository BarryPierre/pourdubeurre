import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnvoiedemailService } from '@services/envoiedemail.service';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider, icons } from 'lucide-angular';

@Component({
  selector: 'app-pourdubeurre-bis',
  standalone: true,
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './pourdubeurre-bis.component.html',
  styleUrl: './pourdubeurre-bis.component.scss',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class PourdubeurreBisComponent {
  paysList=[{
    nom: "Afrique du Sud",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/langfr-1280px-Flag_of_South_Africa.svg.png",
    codePays: "ZA"
  },
  {
    nom: "Algérie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/langfr-1280px-Flag_of_Algeria.svg.png",
    codePays: "DZ"
  },
  {
    nom: "Angola",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/1280px-Flag_of_Angola.svg.png",
    codePays: "AO"
  },
  {
    nom: "Bénin",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/langfr-1280px-Flag_of_Benin.svg.png",
    codePays: "BJ"
  },
  {
    nom: "Botswana",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/1280px-Flag_of_Botswana.svg.png",
    codePays: "BW"
  },
  {
    nom: "Burkina Faso",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/langfr-1280px-Flag_of_Burkina_Faso.svg.png",
    codePays: "BF"
  },
  {
    nom: "Cameroun",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/langfr-1280px-Flag_of_Cameroon.svg.png",
    codePays: "CM"
  },
  {
    nom: "Cap-Vert",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/langfr-1920px-Flag_of_Cape_Verde.svg.png",
    codePays: "CV"
  },
  {
    nom: "République démocratique du Congo",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
    codePays: "CD"
  },
  {
    nom: "Côte d'Ivoire",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/langfr-1280px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
    codePays: "CI"
  },
  {
    nom: "Djibouti",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
    codePays: "DJ"
  },
  {
    nom: "Égypte",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/langfr-1280px-Flag_of_Egypt.svg.png",
    codePays: "EG"
  },
  {
    nom: "Érythrée",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/langfr-120px-Flag_of_Eritrea.svg.png",
    codePays: "ER"
  },
  {
    nom: "Éthiopie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/langfr-1920px-Flag_of_Ethiopia.svg.png",
    codePays: "ET"
  },
  {
    nom: "Gabon",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/1280px-Flag_of_Gabon.svg.png",
    codePays: "GA"
  },
  {
    nom: "Gambie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/1280px-Flag_of_The_Gambia.svg.png",
    codePays: "GM"
  },
  {
    nom: "Ghana",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
    codePays: "GH"
  },
  {
    nom: "Guinée",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
    codePays: "GN"
  },
  {
    nom: "Guinée-Bissau",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
    codePays: "GW"
  },
  {
    nom: "Kenya",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    codePays: "KE"
  },
  {
    nom: "Lesotho",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
    codePays: "LS"
  },
  {
    nom: "Liberia",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
    codePays: "LR"
  },
  {
    nom: "Libye",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
    codePays: "LY"
  },
  {
    nom: "Madagascar",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
    codePays: "MG"
  },
  {
    nom: "Maroc",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    codePays: "MA"
  },
  {
    nom: "Maurice",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
    codePays: "MU"
  },
  {
    nom: "Mozambique",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
    codePays: "MZ"
  },
  {
    nom: "Namibie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
    codePays: "NA"
  },
  {
    nom: "Nigeria ",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    codePays: "NG"
  },
  {
    nom: "Ouganda",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
    codePays: "UG"
  },
  {
    nom: "Sénégal",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
    codePays: "SN"
  },
  {
    nom: "Soudan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
    codePays: "SD"
  },
  {
    nom: "Soudan du Sud",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg",
    codePays: "SS"
  },
  {
    nom: "Tanzanie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
    codePays: "TZ"
  },
  {
    nom: "Tchad",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
    codePays: "TD"
  },
  {
    nom: "Togo",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
    codePays: "TG"
  },
  {
    nom: "Tunisie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
    codePays: "TN"
  },
  {
    nom: "Zambie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
    codePays: "ZM"
  },
  {
    nom: "Zimbabwe",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
    codePays: "ZW"
  },
  {
    nom: "Antigua-et-Barbuda",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
    codePays: "AG"
  },
  {
    nom: "Argentine",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    codePays: "AR"
  },
  {
    nom: "Aruba",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
    codePays: "AW"
  },
  {
    nom: "Bahamas",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
    codePays: "BS"
  },
  {
    nom: "Barbade",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
    codePays: "BB"
  },
  {
    nom: "Bermudes",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
    codePays: "BM"
  },
  {
    nom: "Bolivie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
    codePays: "BO"
  },
  {
    nom: "Brésil",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    codePays: "BR"
  },
  {
    nom: "Canada",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
    codePays: "CA"
  },
  {
    nom: "Chili",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
    codePays: "CL"
  },
  {
    nom: "Colombie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
    codePays: "CO"
  },
  {
    nom: "Costa Rica",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg",
    codePays: "CR"
  },
  {
    nom: "Cuba",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
    codePays: "CU"
  },
  {
    nom: "Dominique",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
    codePays: "DM"
  },
  {
    nom: "Équateur",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
    codePays: "EC"
  },
  {
    nom: "États-Unis",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    codePays: "US"
  },
  {
    nom: "Grenade",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
    codePays: "GD"
  },
  {
    nom: "Guatemala",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
    codePays: "GT"
  },
  {
    nom: "Haïti",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
    codePays: "HT"
  },
  {
    nom: "Honduras",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
    codePays: "HN"
  },
  {
    nom: "Îles Vierges Britaniques",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg",
    codePays: "VG"
  },
  {
    nom: "Îles Vierges des États-Unis",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg",
    codePays: "VI"
  },
  {
    nom: "Jamaïques",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
    codePays: "JM"
  },
  {
    nom: "Mexique",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    codePays: "MX"
  },
  {
    nom: "Nicaragua",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
    codePays: "NI"
  },
  {
    nom: "Panama",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
    codePays: "PA"
  },
  {
    nom: "Paraguay",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
    codePays: "PY"
  },
  {
    nom: "Pérou",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
    codePays: "PE"
  },
  {
    nom: "Porto Rico",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
    codePays: "PR"
  },
  {
    nom: "République Dominicaine",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
    codePays: "DO"
  },
  {
    nom: "Salvador",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
    codePays: "SV"
  },
  {
    nom: "Saint-Vincent-et-les-Grenadines",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
    codePays: "VC"
  },
  {
    nom: "Suriname",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
    codePays: "SR"
  },
  {
    nom: "Trinité-et-Tobago",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
    codePays: "TT"
  },
  {
    nom: "Uruguay",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
    codePays: "UY"
  },
  {
    nom: "Venezvuela",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
    codePays: "VE"
  },
  {
    nom: "Arabie Saoudite",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    codePays: "SA"
  },
  {
    nom: "Bahreïn",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
    codePays: "BH"
  },
  {
    nom: "Bhoutan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
    codePays: "BT"
  },
  {
    nom: "Birmanie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
    codePays: "MM"
  },
  {
    nom: "Chine",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    codePays: "CN"
  },
  {
    nom: "Corée du Nord",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg",
    codePays: "KP"
  },
  {
    nom: "Corée du Sud",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    codePays: "KR"
  },
  {
    nom: "Émirats arabes unis",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    codePays: "AE"
  },
  {
    nom: "Hong Kong",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
    codePays: "HK"
  },
  {
    nom: "Inde",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    codePays: "IN"
  },
  {
    nom: "Indonésie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    codePays: "ID"
  },
  {
    nom: "Irak",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
    codePays: "IQ"
  },
  {
    nom: "Iran",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
    codePays: "IR"
  },
  {
    nom: "Israël",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
    codePays: "IL"
  },
  {
    nom: "Japon",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    codePays: "JP"
  },
  {
    nom: "Jordanie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
    codePays: "JO"
  },
  {
    nom: "Kazakhstan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
    codePays: "KZ"
  },
  {
    nom: "Kirghizistan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
    codePays: "KG"
  },
  {
    nom: "Koweït",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
    codePays: "KW"
  },
  {
    nom: "Laos",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
    codePays: "LA"
  },
  {
    nom: "Liban",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
    codePays: "LB"
  },
  {
    nom: "Malaisie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
    codePays: "MY"
  },
  {
    nom: "Maldives",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
    codePays: "MV"
  },
  {
    nom: "Mongolie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
    codePays: "MN"
  },
  {
    nom: "Népal",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
    codePays: "NP"
  },
  {
    nom: "Ouzbékistan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
    codePays: "UZ"
  },
  {
    nom: "Pakistan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    codePays: "PK"
  },
  {
    nom: "Palestine",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg",
    codePays: "PS"
  },
  {
    nom: "Philippines",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    codePays: "PH"
  },
  {
    nom: "Qatar",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
    codePays: "QA"
  },
  {
    nom: "Singapour",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    codePays: "SG"
  },
  {
    nom: "Sri Lanka",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    codePays: "LK"
  },
  {
    nom: "Syrie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
    codePays: "SY"
  },
  {
    nom: "Tadjikistan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
    codePays: "TJ"
  },
  {
    nom: "Taipei chinois",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/14/Flag_of_Chinese_Taipei_for_Olympic_games.svg",
    codePays: "TW"
  },
  {
    nom: "Thailande",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    codePays: "TH"
  },
  {
    nom: "Turkménistan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
    codePays: "TM"
  },
  {
    nom: "Viêt Nam",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    codePays: "VN"
  },
  {
    nom: "Albanie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    codePays: "AL"
  },
  {
    nom: "Allemagne",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    codePays: "DE"
  },
  {
    nom: "Andorre",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
    codePays: "AD"
  },
  {
    nom: "Arménie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
    codePays: "AM"
  },
  {
    nom: "Autriche",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    codePays: "AT"
  },
  {
    nom: " Azerbaïdjan",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    codePays: "AZ"
  },
  {
    nom: "Belgique",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    codePays: "BE"
  },
  {
    nom: "Bosnie-Herzégovine",
    drapeauSvg: "Bosnie-Herzégovine",
    codePays: ""
  },
  {
    nom: "Bulgarie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
    codePays: "BA"
  },
  {
    nom: "Chypre",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
    codePays: "CY"
  },
  {
    nom: "Croatie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
    codePays: "HR"
  },
  {
    nom: "Danemark",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    codePays: "DK"
  },
  {
    nom: "Espagne",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    codePays: "ES"
  },
  {
    nom: "Estonie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
    codePays: "EE"
  },
  {
    nom: "Finlande",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    codePays: "FI"
  },
  {
    nom: "France",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg",
    codePays: "FR"
  },
  {
    nom: "Géorgie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
    codePays: "GE"
  },
  {
    nom: "Grande Bretagne",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg",
    codePays: "GB"
  },
  {
    nom: "Grèce",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    codePays: "EL"
  },
  {
    nom: "Hongrie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    codePays: "HU"
  },
  {
    nom: "Irlande",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
    codePays: "IE"
  },
  {
    nom: "Islande",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
    codePays: "IS"
  },
  {
    nom: "Italie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
    codePays: "IT"
  },
  {
    nom: "Kosovo",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg",
    codePays: "XK"
  },
  {
    nom: "Lettonie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    codePays: "LV"
  },
  {
    nom: "Liechtenstein",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
    codePays: "LI"
  },
  {
    nom: "Lituanie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
    codePays: "LT"
  },
  {
    nom: "Macédoine du Nord",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
    codePays: "MK"
  },
  {
    nom: "Malte",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
    codePays: "MT"
  },
  {
    nom: "Monaco",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
    codePays: "MC"
  },
  {
    nom: "Moldavie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
    codePays: "MD"
  },
  {
    nom: "Monténégro",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
    codePays: "ME"
  },
  {
    nom: "Norvège",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    codePays: "NO"
  },
  {
    nom: "Pays-Bas",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    codePays: "NL"
  },
  {
    nom: "Pologne",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
    codePays: "PL"
  },
  {
    nom: "Portugual",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    codePays: "PT"
  },
  {
    nom: "Roumanie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    codePays: "RO"
  },
  {
    nom: "Saint-Martin",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg",
    codePays: "SM"
  },
  {
    nom: "Serbie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    codePays: "RS"
  },
  {
    nom: "Slovaquie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
    codePays: "SK"
  },
  {
    nom: "Slovénie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
    codePays: "SI"
  },
  {
    nom: "Suède",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
    codePays: "SE"
  },
  {
    nom: "Suisse",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg",
    codePays: "CH"
  },
  {
    nom: "Tchéquie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
    codePays: "CZ"
  },
  {
    nom: "Turquie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    codePays: "TR"
  },
  {
    nom: "Ukraine",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
    codePays: "UA"
  },
  {
    nom: "Australie",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    codePays: "AU"
  },
  {
    nom: "Îles Cook",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
    codePays: "CK"
  },
  {
    nom: "Fidji",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
    codePays: "FJ"
  },
  {
    nom: "Guam",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
    codePays: "GU"
  },
  {
    nom: "Îles Marshall",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
    codePays: "MH"
  },
  {
    nom: "Nouvelle-Zélande",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    codePays: "NZ"
  },
  {
    nom: "Papouasie-Nouvelle-Guinée",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
    codePays: "PG"
  },
  {
    nom: "Samoua",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
    codePays: "WS"
  },
  {
    nom: "Vanuatu",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",
    codePays: "VU"
  },
  {
    nom: "Équipe olympique des réfugiés",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Olympic_flag.svg",
    codePays: "EO"
  },
  {
    nom: "Athlètes individuels neutres",
    drapeauSvg: "https://upload.wikimedia.org/wikipedia/commons/3/30/Individual_Neutral_Athletes_at_the_2024_Summer_Olympics_Flag.svg",
    codePays: "AI"
  }
  ]

  email: string=""
  erreurMessage: string=""
  year = new Date().getFullYear()

  emailSend = false;
  
  constructor(
    private emailService: EnvoiedemailService) {}

  envoieDeMail(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 
    if (emailPattern.test(this.email)){
          // this.erreurMessage=this.email + " cet email a bient été envoyé"
          
          this.emailService.appelDuBack(this.email).subscribe(
            res => {
            this.emailService.modalSuccess()
            this.emailSend = true
          },(err) => {
            console.log(err)
            this.emailService.modalError()
          })
          
        }
        else {
      // this.erreurMessage=this.email + "cet email est incorrect"
          this.emailService.modalError()
          // console.log("jgjgjhl")
        }
    }

    divIsVisible = false

    showDiv() {
      this.divIsVisible=true
    }
  
}
