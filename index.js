function conversor (){ 
   Nwons = prompt("Quanto Wons você deseja converter?");
   CotaWonsBR = 	0.0040;
   CotaWonsEUA =  0.00068;
   BRL = Nwons * CotaWonsBR ; 
   Dolar =  Nwons * CotaWonsEUA ;
   alert ("Seu número de WONS em BRL R$" + BRL + "    Seu número de WONS em USD $" + Dolar);
}; 