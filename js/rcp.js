

let data = JSON.parse(sessionStorage.getItem("basketValue"));

for(i=0 ;i< data.length;i++){
    alert(data[i]);
}