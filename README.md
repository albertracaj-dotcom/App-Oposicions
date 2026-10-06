# OposiPrep — App per preparar oposicions

Aplicació web inicial per practicar oposicions amb tests, revisar les respostes i seguir l'evolució de l'estudi.

## Funcionalitats de la primera demostració

- Selecció d'àmbit: policia local, Mossos d'Esquadra, administració general, secretaria, intervenció i tresoreria.
- Biblioteca de normes de mostra: Constitució espanyola, Llei 39/2015, Llei 40/2015, Llei orgànica 4/2015 i normativa de trànsit.
- Tests de demostració amb quatre opcions de resposta, correcció i explicació.
- Resum final amb percentatge d'encerts i repàs de cada pregunta.
- Estadístiques bàsiques de les sessions durant la mateixa visita.
- Interfície responsive per a ordinador i mòbil.
- Accés visual a funcions Premium, marcades com a no disponibles fins a connectar els serveis necessaris.

## Com provar-la

Obre `index.html` en un navegador o publica el repositori amb GitHub Pages. No cal instal·lar dependències.

## Important: què és i què no és encara

Aquesta és una **versió inicial de demostració**. Les preguntes són exemples redactats per provar la interfície i no substitueixen el temari oficial ni una revisió jurídica de la normativa vigent. El banc actual és petit i no representa una cobertura completa de les lleis.

Encara no estan implementats:
- Generació automàtica de preguntes amb IA a partir del text íntegre d'una norma pública.
- Importació i actualització fiable de textos legals oficials.
- Comptes d'usuari, sincronització i historial persistent.
- Subscripcions, pagaments i verificació de permisos Premium.
- Tests Premium que combinin diverses normes, estadístiques avançades i un banc ampli de preguntes.
- Tests automatitzats i validació exhaustiva en diferents navegadors.

## Proposta d'arquitectura per a la següent fase

1. Backend segur per obtenir la normativa de fonts oficials i generar preguntes amb un model d'IA. Les claus de servei no s'han d'incloure mai al JavaScript del navegador.
2. Validació de cada pregunta: quatre respostes, una resposta correcta, explicació i referència a l'article concret de la norma.
3. Base de dades per a usuaris, sessions, preguntes, resultats i subscripcions.
4. Proveïdor de pagaments i comprovació de l'estat Premium al servidor.
5. Tests unitaris i d'integració, accessibilitat i revisió de seguretat.

## Estructura

- `index.html`: estructura i pantalles de l'aplicació.
- `css/variables.css`: colors, tipografia i variables de disseny.
- `css/styles.css`: estils responsive.
- `js/app.js`: interaccions, preguntes de mostra, correcció i estadístiques.

## Desenvolupament

La versió actual utilitza HTML, CSS i JavaScript natius, sense dependències de compilació.