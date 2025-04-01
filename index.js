function conversor (){ 

    CotaWonsBR    =  0.0040;
    CotaWonsEUA   =  0.00068;
    CotaWonsEuro  =  0.00063;
 

   Nwons = prompt("Quanto Wons você deseja converter?");


   BRL   =    Nwons * CotaWonsBR ; 
   USD   =    Nwons * CotaWonsEUA ;
   EUR   =    Nwons * CotaWonsEuro ;

   alert ("Seu número de WONS em BRL R$" + BRL); 
   alert ("Seu número de WONS em USD $" + USD);
   alert ("Seu número de WONS em EUR €" + EUR);
}; 