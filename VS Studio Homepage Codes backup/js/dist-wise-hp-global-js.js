
function openDrawer() {
	
	navDrawer = document.getElementsByClassName("dropdown");
	for (var i = 0; i < navDrawer.length; i++)
		navDrawer[i].style.display = "block";
}

function closeDrawer(){
	navDrawer = document.getElementsByClassName("dropdown");
	for (var i = 0; i < navDrawer.length; i++)
		navDrawer[i].style.display = "none";
}

window.addEventListener("orientationchange", closeDrawer, true);

document.onload = closeDrawer;


function closeAllPopups(){ 
	var allPopups = document.getElementsByClassName("svg-item");
	for (var i = 0; i < allPopups.length; i++) allPopups[i].style.display = "none"; 
}
// Alipurduar
function openAlipurduarPopup() { closeAllPopups(); document.getElementById("alipurduar-popup").style.display = "block"; }
function closeAlipurduarPopup() { document.getElementById("alipurduar-popup").style.display = "none"; }
// Bankura
function openBankuraPopup() {  closeAllPopups(); document.getElementById("bankura-popup").style.display = "block"; }
function closeBankuraPopup() { document.getElementById("bankura-popup").style.display = "none"; }
// Birbhum
function openBirbhumPopup() {  closeAllPopups(); document.getElementById("birbhum-popup").style.display = "block"; }
function closeBirbhumPopup() { document.getElementById("birbhum-popup").style.display = "none"; }
// Cooch Behar
function openCoochBeharPopup() {  closeAllPopups(); document.getElementById("cooch-behar-popup").style.display = "block"; }
function closeCoochBeharPopup() { document.getElementById("cooch-behar-popup").style.display = "none"; }
// Darjeeling
function openDarjeelingPopup() {  closeAllPopups(); document.getElementById("darjeeling-popup").style.display = "block"; }
function closeDarjeelingPopup() { document.getElementById("darjeeling-popup").style.display = "none"; }
// East Burdwan
function openEastBardhamanPopup() {  closeAllPopups(); document.getElementById("east-bardhaman-popup").style.display = "block"; }
function closeEastBardhamanPopup() { document.getElementById("east-bardhaman-popup").style.display = "none"; }
// East Medinipur
function openEastMedinipurPopup() {  closeAllPopups(); document.getElementById("east-medinipur-popup").style.display = "block"; }
function closeEastMedinipurPopup() { document.getElementById("east-medinipur-popup").style.display = "none"; }
// Hooghly
function openHooghlyPopup() {  closeAllPopups(); document.getElementById("hooghly-popup").style.display = "block"; }
function closeHooghlyPopup() { document.getElementById("hooghly-popup").style.display = "none"; }
// Howrah
function openHowrahPopup() {  closeAllPopups(); document.getElementById("howrah-popup").style.display = "block"; }
function closeHowrahPopup() { document.getElementById("howrah-popup").style.display = "none"; }
// Jalpaiguri
function openJalpaiguriPopup() {  closeAllPopups(); document.getElementById("jalpaiguri-popup").style.display = "block"; }
function closeJalpaiguriPopup() { document.getElementById("jalpaiguri-popup").style.display = "none"; }
// Jhargram
function openJhargramPopup() {  closeAllPopups(); document.getElementById("jhargram-popup").style.display = "block"; }
function closeJhargramPopup() { document.getElementById("jhargram-popup").style.display = "none"; }
// Kalimpong
function openKalimpongPopup() {  closeAllPopups(); document.getElementById("kalimpong-popup").style.display = "block"; }
function closeKalimpongPopup() { document.getElementById("kalimpong-popup").style.display = "none"; }
// Kolkata
function openKolkataPopup() {  closeAllPopups(); document.getElementById("kolkata-popup").style.display = "block"; }
function closeKolkataPopup() { document.getElementById("kolkata-popup").style.display = "none"; }
// Malda
function openMaldaPopup() {  closeAllPopups(); document.getElementById("malda-popup").style.display = "block"; }
function closeMaldaPopup() { document.getElementById("malda-popup").style.display = "none"; }
// Murshidabad
function openMurshidabadPopup() {  closeAllPopups(); document.getElementById("murshidabad-popup").style.display = "block"; }
function closeMurshidabadPopup() { document.getElementById("murshidabad-popup").style.display = "none"; }
// Nadia
function openNadiaPopup() {  closeAllPopups(); document.getElementById("nadia-popup").style.display = "block"; }
function closeNadiaPopup() { document.getElementById("nadia-popup").style.display = "none"; }
// North 24 Parganas
function openNorth24ParganasPopup() {  closeAllPopups(); document.getElementById("north-24-parganas-popup").style.display = "block"; }
function closeNorth24ParganasPopup() { document.getElementById("north-24-parganas-popup").style.display = "none"; }
// North Dinajpur
function openNorthDinajpurPopup() {  closeAllPopups(); document.getElementById("north-dinajpur-popup").style.display = "block"; }
function closeNorthDinajpurPopup() { document.getElementById("north-dinajpur-popup").style.display = "none"; }
// Purulia
function openPuruliaPopup() {  closeAllPopups(); document.getElementById("purulia-popup").style.display = "block"; }
function closePuruliaPopup() { document.getElementById("purulia-popup").style.display = "none"; }
// South 24 Parganas
function openSouth24ParganasPopup() {  closeAllPopups(); document.getElementById("south-24-parganas-popup").style.display = "block"; }
function closeSouth24ParganasPopup() { document.getElementById("south-24-parganas-popup").style.display = "none"; }
// South Dinajpur
function openSouthDinajpurPopup() {  closeAllPopups(); document.getElementById("south-dinajpur-popup").style.display = "block"; }
function closeSouthDinajpurPopup() { document.getElementById("south-dinajpur-popup").style.display = "none"; }
// West Burdwan
function openWestBardhamanPopup() {  closeAllPopups(); document.getElementById("west-bardhaman-popup").style.display = "block"; }
function closeWestBardhamanPopup() { document.getElementById("west-bardhaman-popup").style.display = "none"; }
// West Medinipur
function openWestMedinipurPopup() {  closeAllPopups(); document.getElementById("west-medinipur-popup").style.display = "block"; }
function closeWestMedinipurPopup() { document.getElementById("west-medinipur-popup").style.display = "none"; }

