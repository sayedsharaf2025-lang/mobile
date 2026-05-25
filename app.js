function loadClients(){

db.ref('clients').on('value',s=>{
clients=s.val() || {};
});
}

initPackages();
loadPackages();
loadClients();
