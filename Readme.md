# Taak 1

**Deadline**: 23/05/2023 08:30

**Score**: 40% van het totaalpunt voor dynamic web development

## Opgave

Maak een website met een webshop. Je mag zelf kiezen wat voor items je in je webshop te koop stelt. Stem hier ook je UI op af, laat je eventueel inspireren door bestaande websites. De webshop zelf moet niet werken. Hiermee bedoelen we dat wanneer een gebruiker items wenst te kopen dit niet effectief moet opgevangen worden in een back-end systeem. De frontend moet natuurlijk wel volledig werkzaam zijn.

### Vereisten

De producten van je webshop sla je op in een apart javascript bestand. Hierin plaats je met behulp van JSON alle producten die je te koop stelt. Plaats in je html-bestanden dit script als eerste zodat je in de andere scripts gemakkelijk aan je producten kan.

Een gebruiker moet producten in zijn winkelmandje kunnen plaatsen. Het moet ook mogelijk zijn dit mandje aan te passen. Deze producten blijven in het winkelmandje zitten, ook wanneer de gebruiker de website verlaat.
Bereken steeds de totaal prijs van de producten.

Voorzie een checkout systeem waarbij de gebruiker zijn gegevens invult en zo de betaling afrond. Bij het afronden van de betaling, wordt er naar de contactgegevens van de gebruiker gevraagd, wijze van betaling en eventuele leverdetails. Wanneer de betaling vroegtijdig afgesloten wordt, moet de nodige data bewaard wordt, zodat de gebruiker de volgende keer zonder problemen zijn bestelling kan afronden. Bij het finaliseren van een bestelling willen we geen bot-bestellingen hebben, voeg hiervoor een captcha toe bij het afrekenen. Je kan hiervoor gebruik maken van [ReCaptcha v3 van Google](https://developers.google.com/recaptcha/docs/v3) .

Toon op het einde een pagina dat de gebruiker laat weten dat de bestelling gelukt is. Hierbij is er een link voor de gebruiker waar hij/zij zijn bestelling kan raadplegen. Maak hierbij gebruik van queryparameters.

Gebruik de geziene technieken zoals:

- JSON
- DOM selectie/manipulatie
- Events
- Localstorage
- Queryparameters
- Bootstrap

## Puntenverdeling

Er wordt in totaal op 3 onderdelen gescoord. Elke deel heeft een even groot aandeel in het eindresultaat.

### Codekwaliteit

Schrijf goede code. Vooral de javascript code zal beoordeeld worden, maar vergeet ook de kwaliteit van je HTML en CSS niet (W3C validator). Denk hierbij aan het gebruik van goede naamgevingen, ESLint regels, duidelijke code, code die geen errors geeft, ...

### Gebruiksvriendelijkheid

De website/webapplicatie die je schrijft moet voor de eindgebruiker eenvoudig te gebruiken zijn. Dit wil zeggen dat alles op logische plaatsen staat, de gebruiker geholpen wordt als die verkeerde acties onderneemt, alles leesbaar is, ....

Een goede tip: laat je website gebruiken door een onervaren persoon en kijk of deze persoon alles kan doen wat je voorzien hebt. Het mag in geen geval gebeuren dat een gebruiker vast komt te zitten op je website.

Je hoeft voor deze website geen rekening te houden met responsive design. Je mag je website maken voor een standaard laptopscherm van 15 inch.

### Volledigheid van de requirements

Zorg ervoor dat alle nodige vereisten werken zoals het hoort. Wanneer dit klaar is mag je gerust extra's voorzien.

## Spelregels

- Schrijf alle code zelf
  - Geen code van het internet
  - Geen frameworks of libraries (behalve bootstrap)
  - Geen gegenereerde code
  - Geen code van medestudenten
  - ...
- Respecteer de deadline => Te laat ingediend resulteert in een 0 score voor deze taak
- Werk individueel! Dit is een individuele opdracht. Elke vorm van samenwerken wordt beschouwd als fraude.

## Checklist die je helpt bij het voorzien van de requirements

- [ ] Javascript object met alle producten
- [ ] Item toevoegen aan shopping cart
- [ ] Item verwijderen van shopping cart
- [ ] Hoeveelheid van items wijzigen
- [ ] Berekenen van prijs
- [ ] Checkout systeem (contactgegevens, betaalwijze, leverdetails)
- [ ] Opslaan van shopping cart
- [ ] Opslaan van checkout gegevens (contactgegevens, betaalmanier, leverdetails)
- [ ] Toevoegen van ReCaptcha
- [ ] Pagina met het resultaat van de bestelling
- [ ] Link met bestelling details

## Uitbreiding

Wanneer je klaar bent en tijd over hebt kan je onderstaande uitbreidingen toevoegen:

- Detailpagina van producten
- Sorteren of filteren van producten op je pagina
- Afhankelijk van het bedrag een leverkost toevoegen.
