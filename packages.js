const packageList = [
"Flex 45 Revamp",
"Flex 90 Revamp",
"Business Flex 100"
];

function initPackages(){

const select1=document.getElementById('clientPackage');
const select2=document.getElementById('packageName');

packageList.forEach(p=>{

select1.innerHTML += `<option value="${p}">${p}</option>`;

select2.innerHTML += `<option value="${p}">${p}</option>`;
});
}

function savePackagePrice(){

const name=document.getElementById('packageName').value;

const price=parseFloat(document.getElementById('packagePrice').value)||0;

db.ref('packagePrices/'+name).set(price).then(()=>{

Object.keys(clients).forEach(phone=>{

if(clients[phone].packageType===name){

db.ref('clients/'+phone).update({
basePrice:price
});
}
});

alert('تم تحديث الأسعار');
});
}

function loadPackages(){

db.ref('packagePrices').on('value',s=>{

packagePrices=s.val()||{};

renderPackages();
});
}

function renderPackages(){

const tbody=document.getElementById('packagesTable');

tbody.innerHTML='';

Object.keys(packagePrices).forEach(name=>{

tbody.innerHTML += `
<tr>
<td>${name}</td>
<td>${packagePrices[name]}</td>
</tr>
`;
});
}
