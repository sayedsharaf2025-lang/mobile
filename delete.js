function deleteMonthInvoices(){

const month=document.getElementById('deleteMonth').value;

if(!confirm('تأكيد الحذف؟')) return;

db.ref('invoices/'+month).remove();

alert('تم الحذف');
}

function deleteAllInvoices(){

if(!confirm('حذف كل الفواتير؟')) return;

db.ref('invoices').remove();

alert('تم حذف الفواتير');
}

function deleteAllClients(){

if(!confirm('حذف كل الخطوط؟')) return;

db.ref('clients').remove();

alert('تم حذف الخطوط');
}

function deleteAllPayments(){

if(!confirm('حذف كل المدفوعات؟')) return;

db.ref('paymentHistory').remove();

alert('تم حذف المدفوعات');
}

function deleteEverything(){

if(!confirm('سيتم حذف كل البيانات')) return;

db.ref().remove();

alert('تم حذف قاعدة البيانات');
}
