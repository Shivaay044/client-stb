import React from 'react'
import ChannelCard from './ChannelCard'

export default function ChannelList() {

    type Channel =  {
        title: string;
        ch_name: string[];
    }

    const channel:Channel[]  = [
        {
          "title": "Bangla/Bengali Channels",
          "ch_name": [
            "ZEE BANGLA CINEMA",
            "ZEE BANGLA US",
            "STAR JALSHA US",
            "24 GHANTA",
            "TIME TV",
            "NTV BANGLA US",
            "AAKAASH BANGLA",
            "RPLUS",
            "ATN BANGLA",
            "DHOOM MUSIC",
            "NEWS TIME BANGLA",
            "COLORS BANGLA US",
            "ABP BANGLA",
            "CHANNEL I",
            "CHANNEL 9",
            "ATN NEWS HD",
            "INDEPENDENT TV",
            "MOHONA TV",
            "BTV WORLD",
            "EKATTOR BANGLA"
          ]
        },
        {
          "title": "Marathi",
          "ch_name": [
            "9X JHAKAAS US",
            "COLORS MARATI US",
            "ZEE TALIKES US",
            "STAR PRAVAH US",
            "ZEE MARATI IS",
            "ZEE 24 TAAS US",
            "TV9 MAHARASHTRA LIVE",
            "SAAM TV",
            "ABP MAJHA",
            "9X JHAKAAS UK",
            "COLORS MARATI UK",
            "ZEE TALKIES UK",
            "STAR PRAVAH UK",
            "ZEE MARATI UK",
            "ZEE 24 TAAS UK",
            "9X JHAKAAS IND",
            "COLORS MARATHI IND",
            "ZEE TALIES IND",
            "STAR PRAVAH IND",
            "ZEE MARATHI IND"
          ]
        },
        {
          "title": "Kannada",
          "ch_name": [
            "SUVARNA TV USA",
            "COLORS KANNADA US",
            "UDAYA US",
            "ZEE KANNADA US",
            "RAJ MUSIC KANNADA US",
            "PUBLIC TV",
            "NEWS 9 LIVE",
            "JANASARI NEWS LIVE",
            "TV9 KANNADA",
            "SUVARNA NEWS 24X7 LIVE",
            "SRI SANKARA KANNADA",
            "COLORS KANNADA NON-US",
            "SUVARNA TV UK",
            "COLORS KANNADA UK",
            "UDAYA UK",
            "ZEE KANNADA UK",
            "RAJ KANNADA UK",
            "SUVRANA TV IND",
            "COLORS KANADDA IND",
            "UDAYA IND"
          ]
        },
        {
          "title": "Malayalam",
          "ch_name": [
            "SURYA TV US",
            "ASIANET YB US",
            "ASIANET MOVIES US",
            "ASIANET NEWS",
            "ASIANET PLUS US",
            "MATHRUBHUI NEWS",
            "JEEVAN TV",
            "FLOWERS TV",
            "MAZHAVIL MANORAMA US",
            "JAIHIND",
            "SHALOM TV",
            "REPORTER TV",
            "RAJ MUSIC",
            "PEOPLE TV",
            "KIRALI WE TV",
            "GOODNESS TV",
            "MEDIAONE TV",
            "KAUMUDY TV",
            "AMRITA TV",
            "POWER VISION"
          ]
        },
        {
          "title": "Nepalese Channels",
          "ch_name": [
            "HORN CABLE",
            "SOMALI NATIONAL TV",
            "SOMALILAND NATIONAL TV",
            "UNIVERSAL SOMALI TV",
            "KALSAN TV",
            "Afghan Channels",
            "Filipino Channels",
            "GMA LIFE TV",
            "GMA PINOY",
            "KAPATID",
            "Video Club",
            "Thousands of English and international movies on demand",
            "PPV",
            "All boxing, UFC and Major PPV events",
            "HORN CABLE 2",
            "SOMALI TV 2",
            "KALSAN TV 2",
            "UNIVERSAL TV 2",
            "AFGHAN CHANNEL 2",
            "FILIPINO TV 2"
          ]
        },
        {
          "title": "Adult",
          "ch_name": [
            "Playboy",
            "Exxxtasy",
            "Penthouse",
            "Redhot",
            "AOV",
            "PORN XXX 2 HD",
            "BABY SPOTTING HD",
            "HOT SHOT HD",
            "BLUE HUSTLER HD",
            "BELLA CLUB",
            "XXX HD",
            "PORN LOVER HD",
            "BOLLYWOOD BIKINI HD",
            "PORN VOD 1",
            "PORN VOD 2",
            "PORN VOD 3",
            "PORN VOD 4",
            "PORN VOD 5",
            "PORN VOD 6",
            "PORN VOD 7"
          ]
        },
        {
          "title": "Telugu",
          "ch_name": [
            "MAA TV US",
            "MAA MUSIC US",
            "MAA MOVIES US",
            "MAA GOLD US",
            "TOLLYWOOD US",
            "GEMINI TV US",
            "GEMINI COMEDY US",
            "GEMINI MOVIES US",
            "ZEE TELUGU US",
            "VANITHA US",
            "CALVARLY TV",
            "RAJ VISSA",
            "ETV TELUGU US",
            "RAKSHANA",
            "RAJ NEWS TELUGU",
            "ETV ANDRA PRADESH",
            "CVR NEWS",
            "OM CVR",
            "VR ENGLISH NEWS",
            "KAU CINEMA"
          ]
        },
        {
          "title": "Learning and News",
          "ch_name": [
            "CBC NEWS HD",
            "CTV NEWS HD",
            "CP24 HD",
            "CNN HD",
            "BBC NEWS HD",
            "BBC WORLD NEWS",
            "FOX NEWS HD",
            "BNN HD",
            "ABC NEWS HD",
            "BLOOMBERG HD US",
            "BLOOMBERG HD UK",
            "AFRICA NEWS NETWORK HD",
            "RT INTERNATION HD",
            "THE WEATHER CHANNEL HD",
            "NHK WORKD HD",
            "124 NEWS HD",
            "CCTV NEWS HD",
            "CNN INTERNATIONAL HD",
            "CNN INTERNATIONAL",
            "ENCA"
          ]
        },
        {
          "title": "English",
          "ch_name": [
            "CBC HD",
            "CTV HD",
            "GLOBAL HD",
            "CITY TV HD",
            "OMNI 1 HD",
            "OMNI 2 HD",
            "CHCH HD",
            "ABC HD",
            "CBS HD",
            "FOX HD",
            "WPIX HD",
            "AMC HD",
            "H2 HD",
            "FOX NEWS HD",
            "CBC NEWS HD",
            "CTV NEWS HD",
            "CP24 HD",
            "CNN HD",
            "HBO 1 HD",
            "HBO 2 HD"
          ]
        },
        {
          "title": "Tamil",
          "ch_name": [
            "Sun TV",
            "Star Vijay",
            "Zee Tamil",
            "Colors Tamil",
            "Jaya TV",
            "Kalaignar TV",
            "Makkal TV",
            "Mega TV",
            "Polimer TV",
            "Puthuyugam TV",
            "Raj TV",
            "Thanthi TV",
            "Vendhar TV",
            "Sun Movies",
            "Star Vijay Movies",
            "Zee Thirai",
            "Jaya TV Movies",
            "Raj TV Movies",
            "Puthuyugam Movies",
            "Polimer Movies"
          ]
        }
      ]
      

  return (
    <div> 
        <ChannelCard channel={channel}/>
    </div>
  )
}
