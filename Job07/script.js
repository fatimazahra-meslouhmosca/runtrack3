
function jourtravaille(date){
    var weekend = false;
    var ferie = false;

    var _date = new Date(date);

    var jour  = _date.getDate();
    var mois  = _date.getMonth();
    var annee = _date.getFullYear();

    listemois = ["Janvier", "Février", "Mars", "Avril", "Mai","Juin", "Juillet", "Août", "Septembre","Octobre", "Novembre", "Décembre"];


    if((jour==1 && mois==0) || (jour==13 && mois==3)||
          (jour==1 && mois==4)||(jour==8 && mois==4)||
          (jour==21 && mois==4)||(jour==1 && mois==5)||
          (jour==14 && mois==6)||(jour==15 && mois==7)||
          (jour==1 && mois==10)||(jour==11 && mois==10)||
          (jour==25 && mois==11))
    {
    ferie = true;}



    else if(_date.getDay()==6 ||_date.getDay()==0)
    {   
    weekend =true;}


    if(ferie){
        console.log(`Le ${jour} ${listemois[mois]} ${annee} est un jour férié.`);
    }

    if(weekend){
        console.log(`Non, le ${jour} ${listemois[mois]} ${annee} est un week-end.`);
    }
    
    else if(!ferie) {
        console.log(`Oui, le ${jour} ${listemois[mois]} ${annee} est un jour travaillé.`);
    }

}

jourtravaille("9 mars 2020");


