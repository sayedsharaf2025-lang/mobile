function importClientsExcel(){

const file=document.getElementById('clientsExcel').files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

const data=new Uint8Array(e.target.result);

const workbook=XLSX.read(data,{type:'array'});

const sheet=workbook.Sheets[workbook.SheetNames[0]];

const rows=XLSX.utils.sheet_to_json(sheet,{header:1});

let updates={};

for(let i=1;i<rows.length;i++){

let phone=String(rows[i][0]).replace(/^0/, '');

updates[phone]={
name:rows[i][1] || '',
packageType:'',
basePrice:0
};
}

db.ref('clients').update(updates);

alert('تم رفع الخطوط');
};

reader.readAsArrayBuffer(file);
}

function importPackagePlans(){

const file=document.getElementById('plansExcel').files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

const data=new Uint8Array(e.target.result);

const workbook=XLSX.read(data,{type:'array'});

const sheet=workbook.Sheets[workbook.SheetNames[0]];

const rows=XLSX.utils.sheet_to_json(sheet,{header:1});

for(let i=1;i<rows.length;i++){

let phone=String(rows[i][0]).replace(/^0/, '');

let packageType=rows[i][1] || '';

let price=packagePrices[packageType] || 0;

db.ref('clients/'+phone).update({
packageType,
basePrice:price
});
}

alert('تم تحديث الخطط');
};

reader.readAsArrayBuffer(file);
}
