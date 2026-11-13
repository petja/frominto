import { strictEqual } from 'assert/strict'
import { frominto, From, In, To, Via } from '../index'

const testdata = [
  ['Tampere', 'Tampereelta', 'Tampereella', 'Tampereelle', 'Tampereen'],
  ['Kauniainen', 'Kauniaisista', 'Kauniaisissa', 'Kauniaisiin', 'Kauniaisten'],
  ['Asikainen', 'Asikaisista', 'Asikaisissa', 'Asikaisiin', 'Asikaisten'],
  ['Inkeroinen', 'Inkeroisista', 'Inkeroisissa', 'Inkeroisiin', 'Inkeroisten'],
  ['Jyväskylä', 'Jyväskylästä', 'Jyväskylässä', 'Jyväskylään', 'Jyväskylän'],
  ['Asema', 'Asemalta', 'Asemalla', 'Asemalle', 'Aseman'],
  ['Leppävaara', 'Leppävaarasta', 'Leppävaarassa', 'Leppävaaraan', 'Leppävaaran'],
  ['Maalaiskunta', 'Maalaiskunnasta', 'Maalaiskunnassa', 'Maalaiskuntaan', 'Maalaiskunnan'],
  ['Mäntyharju', 'Mäntyharjulta', 'Mäntyharjulla', 'Mäntyharjulle', 'Mäntyharjun'],
  ['Hiekkaharju', 'Hiekkaharjusta', 'Hiekkaharjussa', 'Hiekkaharjuun', 'Hiekkaharjun'],
  ['Ii', 'Iistä', 'Iissä', 'Iihin', 'Iin'],
  ['Kera', 'Kerasta', 'Kerassa', 'Keraan', 'Keran'],
  ['Kilo', 'Kilosta', 'Kilossa', 'Kiloon', 'Kilon'],
  ['Oulu', 'Oulusta', 'Oulussa', 'Ouluun', 'Oulun'],
  ['Degerby', 'Degerbystä', 'Degerbyssä', 'Degerbyhyn', 'Degerbyn'],
  ['Hanko', 'Hangosta', 'Hangossa', 'Hankoon', 'Hangon'],
  ['Kuhmo', 'Kuhmosta', 'Kuhmossa', 'Kuhmoon', 'Kuhmon'],
  ['Tammisaari', 'Tammisaaresta', 'Tammisaaressa', 'Tammisaareen', 'Tammisaaren'],
  ['Seinäjoki', 'Seinäjoelta', 'Seinäjoella', 'Seinäjoelle', 'Seinäjoen'],
  ['Kerimäki', 'Kerimäeltä', 'Kerimäellä', 'Kerimäelle', 'Kerimäen'],
  ['Retretti', 'Retretistä', 'Retretissä', 'Retrettiin', 'Retretin'],
  ['Taavetti', 'Taavetista', 'Taavetissa', 'Taavettiin', 'Taavetin'],
  ['Naantali', 'Naantalista', 'Naantalissa', 'Naantaliin', 'Naantalin'],
  ['Laukaa', 'Laukaasta', 'Laukaassa', 'Laukaaseen', 'Laukaan'],
  ['Turku', 'Turusta', 'Turussa', 'Turkuun', 'Turun'],
  ['Pertunmaa', 'Pertunmaalta', 'Pertunmaalla', 'Pertunmaalle', 'Pertunmaan'],
  ['Espoo', 'Espoosta', 'Espoossa', 'Espooseen', 'Espoon'],
  ['Vantaa', 'Vantaalta', 'Vantaalla', 'Vantaalle', 'Vantaan'],
  ['Kuopio', 'Kuopiosta', 'Kuopiossa', 'Kuopioon', 'Kuopion'],
  ['Kouvola', 'Kouvolasta', 'Kouvolassa', 'Kouvolaan', 'Kouvolan'],
  ['Pori', 'Porista', 'Porissa', 'Poriin', 'Porin'],
  ['Joensuu', 'Joensuusta', 'Joensuussa', 'Joensuuhun', 'Joensuun'],
  ['Lappeenranta', 'Lappeenrannasta', 'Lappeenrannassa', 'Lappeenrantaan', 'Lappeenrannan'],
  ['Hämeenlinna', 'Hämeenlinnasta', 'Hämeenlinnassa', 'Hämeenlinnaan', 'Hämeenlinnan'],
  ['Vaasa', 'Vaasasta', 'Vaasassa', 'Vaasaan', 'Vaasan'],
  ['Jaala', 'Jaalasta', 'Jaalassa', 'Jaalaan', 'Jaalan'],
  ['Laajavuori', 'Laajavuoresta', 'Laajavuoressa', 'Laajavuoreen', 'Laajavuoren'],
  ['Palokka', 'Palokasta', 'Palokassa', 'Palokkaan', 'Palokan'],
  ['Ristonmaa', 'Ristonmaalta', 'Ristonmaalla', 'Ristonmaalle', 'Ristonmaan'],
  ['Niipperi', 'Niipperistä', 'Niipperissä', 'Niipperiin', 'Niipperin'],
  ['Lepsämä', 'Lepsämästä', 'Lepsämässä', 'Lepsämään', 'Lepsämän'],
  ['Toivakka', 'Toivakasta', 'Toivakassa', 'Toivakkaan', 'Toivakan'],
  ['Lahti', 'Lahdesta', 'Lahdessa', 'Lahteen', 'Lahden'],
  ['Kitee', 'Kiteeltä', 'Kiteellä', 'Kiteelle', 'Kiteen'],
  ['Joroinen', 'Joroisilta', 'Joroisilla', 'Joroisille', 'Joroisten'],
  ['Vuontispirtti', 'Vuontispirtistä', 'Vuontispirtissä', 'Vuontispirttiin', 'Vuontispirtin'],
  ['Jorvas', 'Jorvaksesta', 'Jorvaksessa', 'Jorvakseen', 'Jorvaksen'],
  ['Nurmes', 'Nurmeksesta', 'Nurmeksessa', 'Nurmekseen', 'Nurmeksen'],
  ['Myllykoski', 'Myllykoskelta', 'Myllykoskella', 'Myllykoskelle', 'Myllykosken'],
  ['Tuuri', 'Tuurista', 'Tuurissa', 'Tuuriin', 'Tuurin'],
  ['Hankasalmi', 'Hankasalmelta', 'Hankasalmella', 'Hankasalmelle', 'Hankasalmen'],
  ['Kolari', 'Kolarista', 'Kolarissa', 'Kolariin', 'Kolarin'],
  ['Lievestuore', 'Lievestuoreelta', 'Lievestuoreella', 'Lievestuoreelle', 'Lievestuoreen'],
  ['Hikiä', 'Hikiältä', 'Hikiällä', 'Hikiälle', 'Hikiän'],
  ['Kirkkonummi', 'Kirkkonummelta', 'Kirkkonummella', 'Kirkkonummelle', 'Kirkkonummen'],
  ['Kilpisjärvi', 'Kilpisjärveltä', 'Kilpisjärvellä', 'Kilpisjärvelle', 'Kilpisjärven'],
  ['Koria', 'Korialta', 'Korialla', 'Korialle', 'Korian'],
  ['Inari', 'Inarista', 'Inarissa', 'Inariin', 'Inarin'],
  ['Ruukki', 'Ruukista', 'Ruukissa', 'Ruukkiin', 'Ruukin'],
  ['Rauma', 'Raumalta', 'Raumalla', 'Raumalle', 'Rauman'],
  ['Lapua', 'Lapualta', 'Lapualla', 'Lapualle', 'Lapuan'],
  ['Kajaani', 'Kajaanista', 'Kajaanissa', 'Kajaaniin', 'Kajaanin'],
  ['Kannelmäki', 'Kannelmäestä', 'Kannelmäessä', 'Kannelmäkeen', 'Kannelmäen'],
  ['Kangasala', 'Kangasalta', 'Kangasalla', 'Kangasalle', 'Kangasalan'],
  ['Punavuori', 'Punavuoresta', 'Punavuoressa', 'Punavuoreen', 'Punavuoren'],
  ['Imatra', 'Imatralta', 'Imatralla', 'Imatralle', 'Imatran'],
  ['Sumatra', 'Sumatralta', 'Sumatralla', 'Sumatralle', 'Sumatran'],
  ['Raahe', 'Raahesta', 'Raahessa', 'Raaheen', 'Raahen'],
  ['Uimaharju', 'Uimaharjusta', 'Uimaharjussa', 'Uimaharjuun', 'Uimaharjun'], // src: http://www.uimaharju.fi/
  ['Hyvinkää', 'Hyvinkäältä', 'Hyvinkäällä', 'Hyvinkäälle', 'Hyvinkään'],
  ['Luosto', 'Luostolta', 'Luostolla', 'Luostolle', 'Luoston'], // luosto.fi
  ['Ruka', 'Rukalta', 'Rukalla', 'Rukalle', 'Rukan'],
  ['Pyhä', 'Pyhältä', 'Pyhällä', 'Pyhälle', 'Pyhän'],
  ['Kiuruvesi', 'Kiuruvedeltä', 'Kiuruvedellä', 'Kiuruvedelle', 'Kiuruveden'],
  ['Karjaa', 'Karjaalta', 'Karjaalla', 'Karjaalle', 'Karjaan'], // www.raasepori.fi
  ['Pukinmäki', 'Pukinmäestä', 'Pukinmäessä', 'Pukinmäkeen', 'Pukinmäen'], // www.raasepori.fi
  ['Dragsvik', 'Dragsvikistä', 'Dragsvikissä', 'Dragsvikiin', 'Dragsvikin'], // https://fi.wikipedia.org/wiki/Uudenmaan_prikaati
  ['Runni', 'Runnilta', 'Runnilla', 'Runnille', 'Runnin'],
  ['Keuruu', 'Keuruulta', 'Keuruulla', 'Keuruulle', 'Keuruun'],
  ['Pihlajavesi', 'Pihlajavedeltä', 'Pihlajavedellä', 'Pihlajavedelle', 'Pihlajaveden'],
  ['Saariselkä', 'Saariselältä', 'Saariselällä', 'Saariselälle', 'Saariselän'],
  ['Harjavalta', 'Harjavallasta', 'Harjavallassa', 'Harjavaltaan', 'Harjavallan'],
  ['Kiilopää', 'Kiilopäältä', 'Kiilopäällä', 'Kiilopäälle', 'Kiilopään'],
  ['Tahko', 'Tahkolta', 'Tahkolla', 'Tahkolle', 'Tahkon'],
  ['Suomu', 'Suomulta', 'Suomulla', 'Suomulle', 'Suomun'],
  ['Malmi', 'Malmilta', 'Malmilla', 'Malmille', 'Malmin'],
  ['Lapinlahti', 'Lapinlahdelta', 'Lapinlahdella', 'Lapinlahdelle', 'Lapinlahden'],
  ['Kauhava', 'Kauhavalta', 'Kauhavalla', 'Kauhavalle', 'Kauhavan'],
  ['Kerava', 'Keravalta', 'Keravalla', 'Keravalle', 'Keravan'],
  ['Orivesi', 'Orivedeltä', 'Orivedellä', 'Orivedelle', 'Oriveden'],
  ['Muhos', 'Muhokselta', 'Muhoksella', 'Muhokselle', 'Muhoksen'],
  ['Kannus', 'Kannuksesta', 'Kannuksessa', 'Kannukseen', 'Kannuksen'],
  ['Varkaus', 'Varkaudesta', 'Varkaudessa', 'Varkauteen', 'Varkauden'],
  ['Koivuhovi', 'Koivuhovista', 'Koivuhovissa', 'Koivuhoviin', 'Koivuhovin'],
  ['Nokia', 'Nokialta', 'Nokialla', 'Nokialle', 'Nokian'],
  ['Vihanti', 'Vihannilta', 'Vihannilla', 'Vihannille', 'Vihannin'],
  ['Järvenpää', 'Järvenpäästä', 'Järvenpäässä', 'Järvenpäähän', 'Järvenpään'],
  ['Savio', 'Saviolta', 'Saviolla', 'Saviolle', 'Savion'],
  ['Myyrmäki', 'Myyrmäestä', 'Myyrmäessä', 'Myyrmäkeen', 'Myyrmäen'],
  ['Juurikorpi', 'Juurikorvesta', 'Juurikorvessa', 'Juurikorpeen', 'Juurikorven'],
  ['Karhukangas', 'Karhukankaalta', 'Karhukankaalla', 'Karhukankaalle', 'Karhukankaan'],
  ['Kinahmi', 'Kinahmilta', 'Kinahmilla', 'Kinahmille', 'Kinahmin'],
  ['Kinni', 'Kinnistä', 'Kinnissä', 'Kinniin', 'Kinnin'],
  ['Kirkniemi', 'Kirkniemeltä', 'Kirkniemellä', 'Kirkniemelle', 'Kirkniemen'],
  ['Kolppi', 'Kolpista', 'Kolpissa', 'Kolppiin', 'Kolpin'],
  ['Larvakytö', 'Larvakydöstä', 'Larvakydössä', 'Larvakytöön', 'Larvakydön'],
  ['Mänttä', 'Mäntästä', 'Mäntässä', 'Mänttään', 'Mäntän'],
  ['Mäntyluoto', 'Mäntyluodosta', 'Mäntyluodossa', 'Mäntyluotoon', 'Mäntyluodon'],
  ['Pihtipudas', 'Pihtiputaalta', 'Pihtiputaalla', 'Pihtiputaalle', 'Pihtiputaan'],
  ['Pyhäkumpu', 'Pyhäkummusta', 'Pyhäkummussa', 'Pyhäkumpuun', 'Pyhäkummun'],
  ['Riippa', 'Riipasta', 'Riipassa', 'Riippaan', 'Riipan'],
  ['Rovaniemi', 'Rovaniemeltä', 'Rovaniemellä', 'Rovaniemelle', 'Rovaniemen'],
  ['Sisättö', 'Sisätöstä', 'Sisätössä', 'Sisättöön', 'Sisätön'],
  ['Sukeva', 'Sukevalta', 'Sukevalla', 'Sukevalle', 'Sukevan'],
  ['Taipale', 'Taipaleelta', 'Taipaleella', 'Taipaleelle', 'Taipaleen'],
  ['Torkkeli', 'Torkkelista', 'Torkkelissa', 'Torkkeliin', 'Torkkelin'],
  ['Tornio-Itäinen', 'Tornio-Itäisestä', 'Tornio-Itäisessä', 'Tornio-Itäiseen', 'Tornio-Itäisen'],
  ['Vesanka', 'Vesangasta', 'Vesangassa', 'Vesankaan', 'Vesangan'],
  ['Villähde', 'Villähteeltä', 'Villähteellä', 'Villähteelle', 'Villähteen'],
  ['Veromies', 'Veromiehestä', 'Veromiehessä', 'Veromieheen', 'Veromiehen'],
  ['Ylivalli', 'Ylivallista', 'Ylivallissa', 'Ylivalliin', 'Ylivallin'],
  ['Iisalmi', 'Iisalmesta', 'Iisalmessa', 'Iisalmeen', 'Iisalmen'],
  ['Moskova', 'Moskovasta', 'Moskovassa', 'Moskovaan', 'Moskovan'],
  ['Pietari', 'Pietarista', 'Pietarissa', 'Pietariin', 'Pietarin'],
  ['Jokioinen', 'Jokioisilta', 'Jokioisilla', 'Jokioisille', 'Jokioisten'],
  ['Puolimatka', 'Puolimatkasta', 'Puolimatkassa', 'Puolimatkaan', 'Puolimatkan'],
  ['Myllynkulma', 'Myllynkulmalta', 'Myllynkulmalla', 'Myllynkulmalle', 'Myllynkulman'],
  ['Jämi', 'Jämiltä', 'Jämillä', 'Jämille', 'Jämin'],
  ['Alavus', 'Alavudelta', 'Alavudella', 'Alavudelle', 'Alavuden'],
  ['Kemi', 'Kemistä', 'Kemissä', 'Kemiin', 'Kemin'],
  ['Gryttjom', 'Gryttjomista', 'Gryttjomissa', 'Gryttjomiin', 'Gryttjomin'],

  // vowel harmony
  ['Ilomantsi', 'Ilomantsista', 'Ilomantsissa', 'Ilomantsiin', 'Ilomantsin'],
  ['Kustavi', 'Kustavista', 'Kustavissa', 'Kustaviin', 'Kustavin'],
  ['Soini', 'Soinista', 'Soinissa', 'Soiniin', 'Soinin'],
  ['Mikkeli', 'Mikkelistä', 'Mikkelissä', 'Mikkeliin', 'Mikkelin'],
  ['Veteli', 'Vetelistä', 'Vetelissä', 'Veteliin', 'Vetelin'],
  ['Muurame', 'Muuramesta', 'Muuramessa', 'Muurameen', 'Muuramen'],
  [
    'Kristiinankaupunki',
    'Kristiinankaupungista',
    'Kristiinankaupungissa',
    'Kristiinankaupunkiin',
    'Kristiinankaupungin',
  ],
  ['Lemi', 'Lemiltä', 'Lemillä', 'Lemille', 'Lemin'],
  ['Kymi', 'Kymistä', 'Kymissä', 'Kymiin', 'Kymin'],
  ['Merimeri', 'Merimerestä', 'Merimeressä', 'Merimereen', 'Merimeren'],

  // new suffix rules
  ['Kruunupyy', 'Kruunupyystä', 'Kruunupyyssä', 'Kruunupyyhyn', 'Kruunupyyn'],
  ['Uusikaarlepyy', 'Uusikaarlepyystä', 'Uusikaarlepyyssä', 'Uusikaarlepyyhyn', 'Uusikaarlepyyn'],
  ['Pyhtää', 'Pyhtäältä', 'Pyhtäällä', 'Pyhtäälle', 'Pyhtään'],
  ['Leppävirta', 'Leppävirralta', 'Leppävirralla', 'Leppävirralle', 'Leppävirran'],
  ['Pyhäntä', 'Pyhännältä', 'Pyhännällä', 'Pyhännälle', 'Pyhännän'],
  ['Vesanto', 'Vesannolta', 'Vesannolla', 'Vesannolle', 'Vesannon'],
  ['Pälkäne', 'Pälkäneeltä', 'Pälkäneellä', 'Pälkäneelle', 'Pälkäneen'],
  ['Kuortane', 'Kuortaneelta', 'Kuortaneella', 'Kuortaneelle', 'Kuortaneen'],
  ['Keitele', 'Keiteleeltä', 'Keiteleellä', 'Keiteleelle', 'Keiteleen'],
  ['Korsnäs', 'Korsnäsistä', 'Korsnäsissä', 'Korsnäsiin', 'Korsnäsin'],
  ['Punkalaidun', 'Punkalaitumelta', 'Punkalaitumella', 'Punkalaitumelle', 'Punkalaitumen'],
  ['Virrat', 'Virroilta', 'Virroilla', 'Virroille', 'Virtojen'],
  ['Liminka', 'Limingasta', 'Limingassa', 'Liminkaan', 'Limingan'],
  ['Puolanka', 'Puolangasta', 'Puolangassa', 'Puolankaan', 'Puolangan'],
  ['Rautalampi', 'Rautalammilta', 'Rautalammilla', 'Rautalammille', 'Rautalammin'],
  ['Toholampi', 'Toholammilta', 'Toholammilla', 'Toholammille', 'Toholammin'],

  // one-offs
  ['Vihti', 'Vihdistä', 'Vihdissä', 'Vihtiin', 'Vihdin'],
  ['Juuka', 'Juuasta', 'Juuassa', 'Juukaan', 'Juuan'],
  ['Lohja', 'Lohjalta', 'Lohjalla', 'Lohjalle', 'Lohjan'],
  ['Juva', 'Juvalta', 'Juvalla', 'Juvalle', 'Juvan'],
  ['Laihia', 'Laihialta', 'Laihialla', 'Laihialle', 'Laihian'],
  ['Merikarvia', 'Merikarvialta', 'Merikarvialla', 'Merikarvialle', 'Merikarvian'],
  ['Ranua', 'Ranualta', 'Ranualla', 'Ranualle', 'Ranuan'],

  // http://www.kielitoimistonohjepankki.fi/ohje/359
  [
    'Uusikaupunki',
    'Uudestakaupungista',
    'Uudessakaupungissa',
    'Uuteenkaupunkiin',
    'Uudenkaupungin',
  ],

  //this is ugly, but Helsinki Lentoasema is really called Helsinki Lentoasema
  [
    'Helsinki Lentoasema',
    'Helsingin Lentoasemalta',
    'Helsingin Lentoasemalla',
    'Helsingin Lentoasemalle',
    'Helsingin Lentoaseman',
  ],

  ['Turenki', 'Turengista', 'Turengissa', 'Turenkiin', 'Turengin'],
  ['Arolampi', 'Arolammilta', 'Arolammilla', 'Arolammille', 'Arolammin'],
  ['Leteensuo', 'Leteensuolta', 'Leteensuolla', 'Leteensuolle', 'Leteensuon'],

  ['XY Motelli', 'XY Motellista', 'XY Motellissa', 'XY Motelliin', 'XY Motellin'],
  ['XY-Tunturi', 'XY-Tunturilta', 'XY-Tunturilla', 'XY-Tunturille', 'XY-Tunturin'],

  ['XYZ', 'kohteesta XYZ', 'kohteessa XYZ', 'kohteeseen XYZ', 'kohteen XYZ'],
]

testdata.map((item) => {
  const [cityName, correctFrom, correctIn, correctTo, correctVia] = item

  describe(`*** ${cityName} ***`, () => {
    it(`From("${cityName}") should be "${correctFrom}"`, () =>
      strictEqual(From(cityName), correctFrom))
    it(`In("${cityName}") should be "${correctIn}"`, () => strictEqual(In(cityName), correctIn))
    it(`To("${cityName}") should be "${correctTo}"`, () => strictEqual(To(cityName), correctTo))
    it(`Via("${cityName}") should be "${correctVia}"`, () => strictEqual(Via(cityName), correctVia))

    const conjugated = frominto(cityName)
    it(`frominto("${cityName}").from should be "${correctFrom}"`, () =>
      strictEqual(conjugated.from, correctFrom))
    it(`frominto("${cityName}").in should be "${correctIn}"`, () =>
      strictEqual(conjugated.in, correctIn))
    it(`frominto("${cityName}").to should be "${correctTo}"`, () =>
      strictEqual(conjugated.to, correctTo))
    it(`frominto("${cityName}").via should be "${correctVia}"`, () =>
      strictEqual(conjugated.via, correctVia))
  })
})
