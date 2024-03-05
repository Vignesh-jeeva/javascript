let saveData = ()=>{
    const bikeData ={
     bikeName : document.getElementById('bname').value,
     bikecolour : document.getElementById('bcolour').value,
    bikeprice :parseInt (document.getElementById('bprice').value)
    };
    localStorage.setItem('bikeData',JSON.stringify(bikeData));

}
let displayData = () =>{
   const getName =JSON.parse(localStorage.getItem("bikeData"));
   let cardId = document.getElementById('bcard');

   let card2 = document.createElement('div');
   card2.className = 'card1';
   card2.innerHTML = `<h3>Bike Name : ${getName.bikeName}<br>Bike Colour :<b> ${getName.bikeColour}</b> <br> Bike Price : <b>${getName.bikeprice}</b></h3>`;

    cardId.appendChild(card2);
}