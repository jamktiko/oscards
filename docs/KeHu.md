<!-- Suositellaan avattavaksi Visual Studio Codessa -->

# KeHu-dokumentti

**Kestävän kehityksen huomiointi tässä työssä**

<!-- Vastaa osaan tai kaikkiin kysymyksiin saamiesi ohjeiden mukaan. -->

<!-- Täydennä ja muokkaa tarvittaessa sekä kysymyksiä että linkkilistaa. -->

<!-- Selkeyden vuoksi kysymyksissä puhutaan vain sovelluksesta, mutta tätä dokumenttia voi käyttää sovellusprojektin lisäksi monenlaisissa kurssitehtävissä sekä opinnäytetyössä. -->

<!-- Kestävä kehitys rakentuu hierarkkisesti. Sen perustana toimii ekologinen kestävyys, jonka toteutuessa on mahdollista rakentaa myös sosiaalista hyvinvointia. Ne kumpikin yhdessä mahdollistavat kestävän liiketoiminnan. -->

<!-- Jotta kestävän kehityksen tavoitteiden ja ohjelmistokehityksen välinen suhde olisi ymmärrettävämpi, jokaisessa kysymyksessä viitataan yhteen Agenda2030:n tavoitteeseen. Sama kysymys voi kuitenkin liittyä useaan eri tavoitteeseen etenkin eri näkökulmia painottamalla. -->

<!-- Kestävyyttä tulisi tarkastella välittömien vaikutusten lisäksi myös pidemmällä aikavälillä sekä siitä näkökulmasta, että sovelluksesta tulisikin todella suosittu. -->

<!-- Sovelluksen ei tarvitse eikä se voikaan olla kestävyydessään täydellinen. Tärkeintä on oppia tunnistamaan ja ymmärtämään kokonaisvaltaisesti, minkälaisia ekologisia ja sosiaalisia vaikutuksia sovelluksella voi olla sen koko elinkaaren ajan. -->

> ##### Kestävän kehityksen periaatteet
>
> - [Kestävän kehityksen tavoitteet YK:n sivuilla](https://sdgs.un.org/goals)
> - [Kestävän kehityksen tavoitteet suomeksi YK-liiton sivuilla](https://www.ykliitto.fi/kestava-kehitys)
> - [Kestävän kehityksen hääkakkumalli](https://www.stockholmresilience.org/research/research-news/2016-06-14-the-sdgs-wedding-cake.html)
> - [Karlskronan kestävän suunnittelun manifesti ohjelmistokehitykselle](https://sustainabilitydesign.org/karlskrona-manifesto/)
>
> ##### Kestävyyden suunnittelu
>
> - [Sustainable Awereness Framework](https://www.suso.academy/en/sustainability-awareness-framework-susaf/)
> - [Sustainable Business Model Canvas](https://www.case-ka.eu/index.html%3Fp=2174.html)
> - [Flourishing Business Canvas](https://flourishingbusiness.org/download-flourishing-business-canvas/)
>
> ##### Keinoja kestävyyteen
>
> - [MitViDi-portaali: kriteereitä ekologisesti kestäville ohjelmistoille](https://mitvidi.tt.utu.fi/mitvidityokalu)
> - [Itsearviointikysely ohjelmistotuotannolle GreenICT-ekosysteemin sivuilla](https://greenict.fi/tyokalut/itsearviointi/itsearviointi-ohjelmistotuotanto/)
> - [Yksinkertaisia ohjeita saavutettavuuteen](https://saavutettavuusvaatimukset.fi/fi/yleista-saavutettavuudesta/ohjeita-suunnittelun-tueksi)
> - [Vaatimukset henkilötietojen käsittelyyn](https://tietosuoja.fi/henkilotietojen-kasittely)
>
> ##### Käytännön ohjeet
>
> - [Markdown-opas](https://www.markdownguide.org/basic-syntax/)
> - Coden lisäosat mahdollistavat mm. md-tiedoston esikatselun (esim. Markdown Preview Enhanced) sekä muunnon pdf:ksi (esim. Markdown PDF)

## Motivaatio

### 1. Miksi kestävä kehitys on tärkeää minulle tai tiimillemme?

Kestävä kehitys parantaa tuotteen laatua, kun ajatellaan tuotteen pitkäikäsiyyttä. Toisin sanoen kestävä kehitys tekee sovelluksestamme tehokkaamman, vastuullisemman sekä pitkäikäisemmän. Lisäksi käyttäjät ja asiakkaat arvostavat sitä, kestävyyttä voidaan siis käyttää kilpailuetuna.

## Aihe

### 2. Miksi sovelluksen aihe on tärkeä? Edistääkö se jotakin kestävän kehityksen tavoitetta?

<!-- ESIMERKIKSI -->
<!-- Tietoisuuden lisääminen kestävästä kehityksestä (SDG4: Hyvä koulutus) -->
<!-- Ruokahävikin vähentäminen (SDG12: Vastuullista kuluttamista) -->
<!-- Vieraslajien torjunta (SDG15: Maanpäällinen elämä) -->
<!-- Kulttuuriperinnön suojeleminen (SDG11: Kestävät kaupungit ja yhteisöt) -->

Sovelluksemme kokoaa yhteen tietoa näyttelijöistä ja ohjaajista, mikä helpottaa oppimista ja kiinnostuksen heräämistä elokuvia kohtaan. Tieto on siis helposti saatavilla ja toimii matalan kynnyksen sovelluksena elokuvienfaneille.

## Toteutus

### 3. Kuinka sovelluksen energiankulutus on minimoitu?

**SDG12: Vastuullista kuluttamista**

<!-- ESIMERKIKSI -->
<!-- Kuinka oleellisia sovelluksen ominaisuudet ja sisältö ovat? -->
<!-- Säilötäänkö sovelluksessa vain välttämätöntä tietoa? -->
<!-- Miten sovelluksen vaatima palvelinkapasiteetti on mitoitettu? -->
<!-- Käytetäänkö sovelluksessa tai sen kehitysprosessissa tekoälyä? -->

Tehokas koodi eli esimerkiksi vältetään turhia toistoja, optimoidaan datan käsittelyä kuten pakkausten käyttämistä ja välimuistit. Optimoidaan myös käyttöliittymää eli kevyemmät animaatiot ja vähemmän jatkuvaa renderöintiä, tumman tilan käyttö ja UI päivittyy vain kun oikeasti on muutoksia.

### 4. Millä tavoin sovellus saattaa välillisesti lisätä tai vähentää luonnonvarojen kulutusta?

**SDG12: Vastuullista kuluttamista**

<!-- ESIMERKIKSI -->
<!-- Edellyttääkö sovelluksen käyttö uusien käyttäjälaitteiden tai lisätarvikkeiden hankintaa? -->
<!-- Kannustaako sovellus muuhun kulutukseen? (esim. sovellus on verkkokauppa) -->
<!-- Millä tavoin sovellus saattaa muuttaa käyttäjän toimintaa? (esim. lisätä tai vähentää yksityisautoilua) -->

Meidän sovellus ei edellytä muiden laitteiden tai lisätarvikkeiden hankintaa.

### 5. Kuinka sovelluksen pitkäikäisyys on varmistettu?

**SDG12: Vastuullista kuluttamista**

<!-- ESIMERKKEJÄ -->
<!-- Kuinka riippuvainen sovellus on ulkoisista kirjastoista ja järjestelmistä? -->
<!-- Onko sovellus mukautettavissa muuttuviin tarpeisiin ja vaatimuksiin? -->
<!-- Onko sovelluksen lähdekoodi ja kehitysprosessi dokumentoitu? -->

Sovelluksen käyttö on ilmaista, asiakkaiden raportoimat vikat tai haitat sovelluksesta korjataan.

### 6. Kuinka sovelluksessa on huomioitu saavutettavuus ja yhdenvertaisuus?

**SDG10: Eriarvoisuuden vähentäminen**

<!-- ESIMERKIKSI -->
<!-- Tekeekö sovellus oletuksia käyttäjän ominaisuuksista? (esim. sukupuoli, ikä, etninen tausta) -->
<!-- Noudattaako sovellus lain määräämiä saavutettavuusvaatimuksia? -->
<!-- Millaista osaamista ja varallisuutta sovelluksen käyttö vaatii? -->
<!-- Millä kielillä sovellus on saatavilla? -->

Pyritään pitämään kontrastit saavutettavina kaikille, sovelluksen teeman saa vaihdettua ja sovelluksen kieli on englanniksi. Pyritään myös pitämään fontit kaikille lueattavissa ja selkeinä.

### 7. Millaisia vaikutuksia sovelluksella voi olla käyttäjälle tai hänen lähipiirilleen?

**SDG3: Terveyttä ja hyvinvointia**

<!-- ESIMERKIKSI -->
<!-- Mitä toimintaa sovelluksen käyttö korvaa, lisää, vähentää tai mahdollistaa? -->
<!-- Millaisia vaikutuksia sovelluksella voi olla sosiaalisiin suhteisiin, terveyteen tai mielialaan? -->
<!-- Millaisia vaikutuksia sovelluksella voi olla elämänhallintaan tai taloudelliseen tilanteeseen? -->

Riippuen käyttäjästä, käyttäjän ollessaan elokuvafani hänen elämään voi lisääntyä posiitivisia vaikutuksia. Sovellus voi mahdollisesti yhdistää ihmisiä jos heillä on sama mielenkiinnon kohde.

### 8. Millaisia vaikutuksia sovelluksella voi olla yhteiskunnallisella tasolla?

**SDG16: Rauha, oikeudenmukaisuus ja hyvä hallinto**

<!-- ESIMERKIKSI -->
<!-- Voiko sovelluksesta ja sen käyttäjistä olla häiriötä ulkopuolisille? -->
<!-- Voiko sovellus vaikuttaa laajasti yhteiskuntaan? (esim. työ- ja asuntomarkkinat, poliittinen ilmapiiri) -->
<!-- Voiko sovellusta hyödyntää rikolliseen toimintaan? -->
<!-- Kuinka sovellusta moderoidaan? (esim. disinformaation ja vihapuheen torjunta) -->
<!-- Kuinka sovelluksessa on huomioitu tietoturvallisuus ja tietosuoja?  -->

Sovelluksen avulla voidaan lisätä tietoa ja ymmärrystä eri kulttuureista, mistä näyttelijät ja ohjaajat tulevat.

### 9. Kuinka sovellusprojektissa on huomioitu inhimilliset ja aineelliset resurssit?

**SDG8: Ihmisarvoista työtä ja talouskasvua**

<!-- ESIMERKIKSI -->
<!-- Ovatko tavoitteet selkeitä ja realistisia? -->
<!-- Kuinka kehittäjien hyvinvointi on huomioitu? -->
<!-- Noudatetaanko ketterää kehitystä? (esim. Scrum) -->
<!-- Pystytäänkö työntekijöille ja alihankkijoille maksamaan asianmukaisesti? -->
<!-- Mahdollistaako rahoitus turvallisen ylläpidon sekä pitkäjänteisen jatkokehittelyn? -->

Työ tiimissä on jaettu kaikille tasaisesti ja osaamisen mukaan, dokumentoidaan mitä teemme milloinkin ja huomioidaan käyttäjämme.
