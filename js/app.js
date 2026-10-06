(() => {
  "use strict";
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const names = { constitucio:"Constitució espanyola", "39":"Llei 39/2015", "40":"Llei 40/2015", "4":"Llei orgànica 4/2015", trafic:"Normativa de trànsit" };
  const banks = {
    constitucio:[
      ["Segons la Constitució espanyola, on resideix la sobirania nacional?",["A les Corts Generals","En el poble espanyol","En el cap de l'Estat","En el Govern"],1,"L'article 1.2 estableix que la sobirania nacional resideix en el poble espanyol, del qual emanen els poders de l'Estat."],
      ["Quin article reconeix la igualtat davant la llei?",["Article 9","Article 14","Article 24","Article 30"],1,"L'article 14 proclama la igualtat davant la llei i prohibeix la discriminació pels motius que enumera."],
      ["Quina és la forma política de l'Estat espanyol?",["República parlamentària","Monarquia absoluta","Monarquia parlamentària","Estat confederal"],2,"L'article 1.3 estableix que la forma política de l'Estat espanyol és la monarquia parlamentària."],
      ["Quin dret protegeix l'article 18.1?",["El dret de reunió","El dret a l'educació","L'honor, la intimitat personal i familiar i la pròpia imatge","La llibertat sindical"],2,"L'article 18.1 garanteix el dret a l'honor, a la intimitat personal i familiar i a la pròpia imatge."],
      ["Qui exerceix la potestat legislativa de l'Estat?",["El Govern exclusivament","Les Corts Generals","El Tribunal Constitucional","El Consell General del Poder Judicial"],1,"Les Corts Generals exerceixen la potestat legislativa, aproven els pressupostos i controlen l'acció del Govern."]
    ],
    "39":[
      ["Quina matèria regula principalment la Llei 39/2015?",["El règim del personal laboral privat","El procediment administratiu comú de les administracions públiques","L'organització del poder judicial","El règim electoral general"],1,"La Llei 39/2015 regula el procediment administratiu comú de les administracions públiques."],
      ["Com es computen, amb caràcter general, els terminis assenyalats per dies?",["Sempre com a dies naturals","Com a dies hàbils, llevat que s'indiquin dies naturals","Només de dilluns a dijous","Com a dies naturals, excepte a l'agost"],1,"La regla general és el còmput en dies hàbils: s'exclouen dissabtes, diumenges i festius, llevat que s'estableixi que són naturals."],
      ["Quin és un dret de les persones interessades en un procediment?",["Exigir una resolució favorable","Conèixer l'estat de tramitació del procediment","Ometre sempre qualsevol identificació","Escollir el sentit de la resolució"],1,"La Llei reconeix el dret de les persones interessades a conèixer l'estat de tramitació del procediment."],
      ["Què ha d'incloure, en general, una notificació administrativa?",["Només el nom de l'òrgan","El text íntegre i la informació sobre els recursos procedents","Únicament la data de signatura","Sempre una còpia de tot l'expedient"],1,"La notificació ha d'incloure el text íntegre de la resolució i la informació legalment exigida sobre recursos."],
      ["Quin és, amb caràcter general, l'efecte del silenci en procediments iniciats a sol·licitud de l'interessat?",["Sempre desestimatori","Sempre estimatori sense excepcions","Estimatori, amb les excepcions legals","La nul·litat automàtica del procediment"],2,"La regla general és el silenci estimatori, amb excepcions legals en què és desestimatori."]
    ],
    "40":[
      ["Quina matèria regula principalment la Llei 40/2015?",["El règim jurídic del sector públic","El Codi penal","El procediment laboral privat","Els arrendaments urbans"],0,"La Llei 40/2015 regula les bases del règim jurídic de les administracions públiques i altres aspectes del sector públic."],
      ["Quin principi ha de respectar l'actuació administrativa?",["Arbitrarietat","Eficàcia i coordinació","Secret absolut en tots els actes","Preferència per interessos particulars"],1,"L'eficàcia i la coordinació són principis de l'actuació i de les relacions entre administracions."],
      ["Què implica el principi d'irrenunciabilitat de la competència?",["Que cada òrgan pot renunciar-hi lliurement","Que l'ha d'exercir l'òrgan que la té atribuïda, llevat dels supòsits legals","Que la competència passa automàticament a un altre òrgan","Que no existeixen delegacions"],1,"La competència és irrenunciable i l'exerceix l'òrgan que la té atribuïda, sens perjudici de les tècniques previstes legalment."],
      ["Quina figura permet encarregar l'exercici d'una competència a un altre òrgan en els termes legals?",["Delegació de competències","Renúncia de competència","Desistiment","Caducitat automàtica"],0,"La delegació de competències és una tècnica prevista a la Llei 40/2015."],
      ["Quin d'aquests requisits es vincula al dany indemnitzable en la responsabilitat patrimonial?",["Qualsevol dany que s'hagi de suportar jurídicament","Dany efectiu, avaluable econòmicament i individualitzat","Només danys intencionats","Només danys contractuals"],1,"Entre els requisits hi ha que el dany sigui efectiu, avaluable econòmicament i individualitzat."]
    ],
    "4":[
      ["Quin és l'objecte de la Llei orgànica 4/2015?",["La protecció de la seguretat ciutadana","Les eleccions municipals","La contractació pública","La protecció civil exclusivament"],0,"La Llei orgànica 4/2015 té per objecte la protecció de la seguretat ciutadana."],
      ["L'actuació policial en matèria de seguretat ciutadana ha de respectar:",["Només les instruccions internes","Els principis de legalitat, proporcionalitat i no-discriminació, entre d'altres","Exclusivament la conveniència","La voluntat del denunciant"],1,"Les actuacions s'han d'ajustar als principis i garanties previstos per la llei i la resta de l'ordenament."],
      ["Quin criteri ha de regir les mesures d'intervenció policial?",["La màxima intensitat en tots els casos","La proporcionalitat segons les circumstàncies i el marc legal","La decisió del particular","La mesura més restrictiva automàticament"],1,"La intervenció ha de respectar la proporcionalitat i les garanties legals aplicables."],
      ["La identificació de persones en l'àmbit de la seguretat ciutadana:",["Es pot fer sense pressupòsit legal","S'ajusta als supòsits, finalitats i garanties establerts legalment","Permet retenir indefinidament","Sempre equival a una detenció penal"],1,"La identificació s'ha de practicar d'acord amb els supòsits i garanties que preveu la normativa."],
      ["Què s'ha de tenir present en imposar una sanció administrativa?",["La tipificació legal i les garanties del procediment","Només la percepció de l'agent","Que no cal motivar la decisió","Que les sancions es creen per instrucció interna"],0,"La potestat sancionadora està sotmesa als principis de legalitat, tipicitat, proporcionalitat i procediment."]
    ],
    trafic:[
      ["Quina és la norma estatal bàsica en matèria de trànsit i seguretat viària?",["Reial decret legislatiu 6/2015","Llei 39/2015 exclusivament","Llei orgànica 4/2015 exclusivament","Codi civil"],0,"El Reial decret legislatiu 6/2015 aprova el text refós de la Llei sobre trànsit, circulació de vehicles de motor i seguretat viària."],
      ["Quina obligació general tenen els usuaris de la via?",["No tenir en compte altres usuaris","No entorpir indegudament la circulació ni causar perill o dany","Respectar només senyals verticals","Aturar-se davant de qualsevol vehicle estacionat"],1,"Els usuaris de la via han d'evitar causar perill, perjudicis o molèsties innecessàries."],
      ["Què ha de fer un conductor davant la llum vermella fixa d'un semàfor?",["Accelerar si no veu vehicles","Aturar-se al lloc reglamentari","Continuar si gira a la dreta en tots els casos","Cedir el pas només als vianants"],1,"La llum vermella fixa prohibeix el pas i obliga a aturar-se en el lloc reglamentari."],
      ["Què obliga a fer un senyal de STOP?",["Reduir la velocitat i continuar si no hi ha ningú","Aturar-se i cedir el pas segons les normes aplicables","Aturar-se només si hi ha un agent","Cedir el pas només als vehicles pesants"],1,"El senyal STOP obliga a aturar-se i cedir el pas conforme a les normes de prioritat."],
      ["L'ús del cinturó de seguretat:",["Només és obligatori en autopistes","És obligatori segons la normativa vigent, amb les excepcions previstes","Només és obligatori per al conductor","Depèn de l'asseguradora"],1,"La normativa estableix l'obligació d'utilitzar els cinturons i preveu excepcions concretes."]
    ]
  };
  const HISTORY_KEY = "oposiprep-history-v1";
  function loadHistory(){
    try {
      const saved = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      return Array.isArray(saved) ? saved.filter(x => x && typeof x.correct === "number" && typeof x.total === "number" && typeof x.percent === "number").slice(0,50) : [];
    } catch (_) { return []; }
  }
  const state = {opposition:"policia",law:"constitucio",count:15,questions:[],index:0,answers:{},checked:{},history:loadHistory()};
  const dialog = $("#messageDialog");
  function message(title,body){$("#dialogTitle").textContent=title;$("#dialogMessage").textContent=body;if(dialog.showModal)dialog.showModal();else alert(title+"\n"+body);}
  function refreshStats(){
    const tests=state.history.length;
    const total=state.history.reduce((n,x)=>n+x.total,0);
    const hits=state.history.reduce((n,x)=>n+x.correct,0);
    $("#statTests").textContent=tests;
    $("#statAccuracy").textContent=total ? Math.round(hits/total*100)+"%" : "—";
    $("#statBest").textContent=tests ? Math.max(...state.history.map(x=>x.percent))+"%" : "—";
    const hist=$(".history-card");
    if(tests){
      const last=state.history[0];
      hist.querySelector("strong").textContent=tests+" test"+(tests===1?" completat":"s completats");
      hist.querySelector("p").textContent=last.date+" · "+last.law+" · "+last.percent+"% d'encerts";
      hist.querySelector(".history-icon").textContent="✓";
    } else {
      hist.querySelector("strong").textContent="Historial de pràctica";
      hist.querySelector("p").textContent="Quan completis un test, aquí veuràs els teus resultats.";
      hist.querySelector(".history-icon").textContent="↗";
    }
  }
  function shuffle(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  $$(".opposition-card").forEach(card=>card.addEventListener("click",()=>{$$(".opposition-card").forEach(c=>c.classList.toggle("selected",c===card));state.opposition=card.dataset.opposition;}));
  $$(".law-item").forEach(item=>item.addEventListener("click",()=>{$$(".law-item").forEach(c=>c.classList.toggle("selected",c===item));state.law=item.dataset.law;}));
  $("#lawSearch").addEventListener("input",e=>{const q=e.target.value.toLocaleLowerCase("ca").trim();$$(".law-item").forEach(item=>item.hidden=!item.textContent.toLocaleLowerCase("ca").includes(q));});
  $$(".count-option").forEach(btn=>btn.addEventListener("click",()=>{if(btn.classList.contains("premium-option")){message("Més preguntes amb Premium","Els tests de 30 i 50 preguntes formaran part de la subscripció. En aquesta demostració pots provar un test de 10 o 15 preguntes.");return;}$$(".count-option").forEach(b=>b.classList.toggle("active",b===btn));state.count=Number(btn.dataset.count);}));
  const premium=()=>message("OposiPrep Premium","La subscripció inclourà tests de diverses normes, sessions més llargues i seguiment ampliat. Els pagaments encara no estan activats: cal connectar un backend segur i un proveïdor de pagaments.");
  $("#upgradeTop").addEventListener("click",premium);$("#upgradeBottom").addEventListener("click",premium);$("#multiToggle").addEventListener("click",premium);$("#closeDialog").addEventListener("click",()=>dialog.close());
  function resetQuizBody(){
    $(".quiz-body").innerHTML='<p class="eyebrow" id="quizLawLabel"></p><h1 id="quizTitle"></h1><p class="quiz-instruction">Selecciona una única resposta.</p><div id="answerOptions" class="answer-options"></div><div id="answerFeedback" class="answer-feedback" hidden></div><div class="quiz-actions"><button class="button button-outline" id="prevQuestion">← Anterior</button><button class="button button-primary" id="nextQuestion">Comprovar resposta →</button></div>';
    $("#prevQuestion").addEventListener("click",previous);$("#nextQuestion").addEventListener("click",next);
  }
  function start(){
    if($("#lawText").value.trim()){message("Generació automàtica pendent","El text que enganxis no s'envia a cap servidor en aquesta demostració. Per generar preguntes a partir d'una norma cal connectar un servei d'IA al backend; aquesta funció encara no està activada.");return;}
    resetQuizBody();
    state.questions=shuffle(banks[state.law]||banks.constitucio).slice(0,Math.min(state.count,(banks[state.law]||banks.constitucio).length));state.index=0;state.answers={};state.checked={};
    $("#quizOverlay").hidden=false;document.body.style.overflow="hidden";render();
    if(state.count>state.questions.length)message("Mode demostració","Aquesta norma disposa de "+state.questions.length+" preguntes de mostra. El banc complet de preguntes encara s'ha d'ampliar.");
  }
  function render(){
    const q=state.questions[state.index],total=state.questions.length;
    $("#quizCounter").textContent="PREGUNTA "+(state.index+1)+" DE "+total;$("#quizPercent").textContent=Math.round((state.index+1)/total*100)+"%";$("#quizProgressBar").style.width=((state.index+1)/total*100)+"%";
    $("#quizLawLabel").textContent=names[state.law].toLocaleUpperCase("ca");$("#quizTitle").textContent=q[0];$("#answerFeedback").hidden=true;$("#answerFeedback").textContent="";
    const list=$("#answerOptions");list.replaceChildren();
    q[1].forEach((answer,i)=>{const b=document.createElement("button");b.type="button";b.className="answer-option";const letter=document.createElement("span");letter.className="answer-letter";letter.textContent=String.fromCharCode(65+i);const text=document.createElement("span");text.textContent=answer;b.append(letter,text);if(state.answers[state.index]===i)b.classList.add("chosen");if(state.checked[state.index]){b.disabled=true;if(i===q[2])b.classList.add("correct");else if(state.answers[state.index]===i)b.classList.add("wrong");}b.addEventListener("click",()=>{if(state.checked[state.index])return;state.answers[state.index]=i;$$(".answer-option",list).forEach(x=>x.classList.remove("chosen"));b.classList.add("chosen");});list.append(b);});
    $("#prevQuestion").disabled=state.index===0;$("#prevQuestion").style.opacity=state.index===0?".45":"1";$("#nextQuestion").textContent=state.checked[state.index]?(state.index===total-1?"Veure resultats →":"Següent pregunta →"):"Comprovar resposta →";
    if(state.checked[state.index]){const f=$("#answerFeedback");f.hidden=false;f.textContent=(state.answers[state.index]===q[2]?"Correcte. ":"Incorrecte. La resposta correcta és "+String.fromCharCode(65+q[2])+". ")+q[3];}
  }
  function results(){
    const total=state.questions.length,correct=state.questions.filter((q,i)=>state.answers[i]===q[2]).length,percent=Math.round(correct/total*100);
    state.history.unshift({date:new Date().toLocaleDateString("ca-ES"),law:names[state.law],correct,total,percent});
    state.history=state.history.slice(0,50);
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(state.history)); } catch (_) {}
    refreshStats();
    $("#quizCounter").textContent="TEST COMPLETAT";$("#quizPercent").textContent="100%";$("#quizProgressBar").style.width="100%";$("#quizLawLabel").textContent="RESULTAT · "+names[state.law].toLocaleUpperCase("ca");$("#quizTitle").textContent="Així ha anat aquesta sessió";$(".quiz-instruction").textContent="Has completat totes les preguntes.";
    $("#answerOptions").replaceChildren();$("#answerFeedback").hidden=true;
    const score=document.createElement("div");score.className="result-score";score.textContent=percent+"%";
    const summary=document.createElement("p");summary.className="result-message";summary.textContent=correct+" de "+total+" respostes correctes · "+(total-correct)+" per revisar.";
    const encouragement=document.createElement("p");encouragement.className="result-message";encouragement.textContent=percent>=80?"Molt bona feina! Continua repassant per consolidar els coneixements.":percent>=60?"Vas pel bon camí. Repassa les preguntes fallades i torna-ho a provar.":"Cada test és una oportunitat per millorar. Revisa les explicacions i practica de nou.";
    const review=document.createElement("div");review.className="result-review";const heading=document.createElement("h3");heading.textContent="Repàs de les respostes";review.append(heading);
    state.questions.forEach((q,i)=>{const row=document.createElement("div");row.className="review-item";const title=document.createElement("strong");title.textContent=(i+1)+". "+q[0];const detail=document.createElement("span");detail.textContent=(state.answers[i]===q[2]?"Correcte. ":"Incorrecte. Resposta correcta: "+String.fromCharCode(65+q[2])+". ")+q[1][q[2]]+" — "+q[3];row.append(title,detail);review.append(row);});
    const body=$(".quiz-body");body.append(score,summary,encouragement,review);
    const actions=$(".quiz-actions");actions.replaceChildren();const exit=document.createElement("button");exit.className="button button-outline";exit.textContent="Tornar a l'inici";exit.addEventListener("click",close);const retry=document.createElement("button");retry.className="button button-primary";retry.textContent="Repetir test →";retry.addEventListener("click",start);actions.append(exit,retry);
    refreshStats();
  }
  function close(){ $("#quizOverlay").hidden=true;document.body.style.overflow="";resetQuizBody();}
  function previous(){if(state.index>0){state.index--;render();}}
  function next(){if(!state.checked[state.index]){if(state.answers[state.index]===undefined){message("Tria una resposta","Selecciona una de les quatre opcions abans de continuar.");return;}state.checked[state.index]=true;render();return;}if(state.index<state.questions.length-1){state.index++;render();}else results();}
  $("#startTest").addEventListener("click",start);$("#prevQuestion").addEventListener("click",previous);$("#nextQuestion").addEventListener("click",next);
  $("#exitQuiz").addEventListener("click",()=>{if(confirm("Vols sortir del test? Perdràs el progrés d'aquesta sessió."))close();});
  refreshStats();
})();