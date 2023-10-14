function hitungbmi(){
        let usia = Number(document.getElementById("usia").value);
        let tinggi = Number(document.getElementById("tinggiBadan").value);
        let berat = Number(document.getElementById("beratBadan").value);
        let laki = document.getElementById("laki").value;
        let cewe = document.getElementById("cewe").value;
        
    
        if(tinggi=='' || berat==''||usia==''|| (laki.checked==false && cewe.checked==false)){
            console.log("hehe");
            alert("please fill all fields!");
        }
        // BMI = weight in KG / height**2
    
        else {
            tinggi = tinggi/100;
    
            let BMI = (berat/tinggi**2).toFixed(2);
            
            document.getElementById("kondisi").innerHTML = BMI;
        }
    
}


