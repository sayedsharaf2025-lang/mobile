function saveClient(){

const name=document.getElementById('clientName').value;

let phone=document.getElementById('clientPhone').value;

const packageType=document.getElementById('clientPackage').value;

const basePrice=packagePrices[packageType] || 0;

phone=phone.replace(/^0/, '');

db.ref('clients/'+phone).update({
name,
packageType,
basePrice
});

alert('تم حفظ الخط');
}

document.addEventListener('DOMContentLoaded',()=>{

document.getElementById('clientPackage').addEventListener('change',()=>{

const p=document.getElementById('clientPackage').value;

document.getElementById('clientPrice').value=packagePrices[p] || 0;

});
});
