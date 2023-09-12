
const btn = document.getElementById('itung')
btn.addEventListener('click', function(){
    const usia = document.getElementById("usia").value
    let tinggi = +document.getElementById("tinggiBadan").value
    const berat = +document.getElementById("beratBadan").value
    let laki = document.getElementById("laki").value
    let cewe = document.getElementById("cewe").value
    

    


    if(tinggi=='' || berat==''||usia==''|| (laki.checked==false && cewe.checked==false)){
        console.log("hehe")
        alert("please fill all fields!");
        return;
    }
    // BMI = weight in KG / height**2

    else {
        tinggi = tinggi/100

        let BMI = (berat/tinggi**2).toFixed(2)
        
        document.getElementById('kondisi').innerHTML = BMI
    
        return false;
    }


});


