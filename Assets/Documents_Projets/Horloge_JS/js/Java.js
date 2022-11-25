let douze = true;
let cache = false;

function changerAffichage12h()
{
    douze = !douze;
    dateHeure();
}

function masquerDate(icone)
{
    icone.classList.toggle("date");
    cache = !cache;
    dateHeure();
}

function dateHeure() {
    let affichageDate = document.getElementById("date");
    let affichageHeure = document.getElementById("hour");

    let dateActuelle = new Date();

    let day = dateActuelle.getDay(); // jour dans la semaine (sun-sat)
    // Doit « traduire les chiffres de la semaine », en lettres 
    if (day == 0)
    {
        day = "Dimanche";
    }
    else if (day == 1)
    {
        day = "Lundi";
    }
    else if (day == 2)
    {
        day = "Mardi";
    }
    else if (day == 3)
    {
        day = "Mercredi";
    }
    else if (day == 4)
    {
        day = "Jeudi";
    }
    else if (day == 5)
    {
        day = "Vendredi";
    }
    else if (day == 6)
    {
        day = "Samedi";
    }

    let month = dateActuelle.getMonth(); // mois
    let date = dateActuelle.getDate(); // date (le jour)
    let year = dateActuelle.getFullYear(); // année

    let heures1_2 = dateActuelle.getHours();
    let minutes = dateActuelle.getMinutes();
    let seconds = dateActuelle.getSeconds();

    let AmPm = "Am";
    let ecrireHeures = heures1_2 + ":" + minutes + ":" + seconds; 

    if (douze) {
        if (heures1_2 >= 12 && heures1_2 < 24)
        {
            AmPm = "Pm";
            if (heures1_2 != 12)
            {
                heures1_2 = heures1_2 - 12;
            }
        }
        if (heures1_2 == 24)
        {
            heures1_2 = heures1_2 - 24;
        }

        ecrireHeures = heures1_2 + ":" + minutes + ":" + seconds + " " + AmPm; 
    }
    


    let ecrireDate = day + "   " + year + "-" + month + "-" + date;
    

    if (cache == false){
        affichageDate.innerHTML = ecrireDate;
    }
    else {
        affichageDate.innerHTML = " ";
    }

    affichageHeure.innerHTML = ecrireHeures;


}
setInterval(dateHeure, 1000);





// Console.Log sert à écrire dans la console si nous allons voir Inspecter sur le site


// onclick = lorsqu'on clique ça fait de quoi 