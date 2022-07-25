let final=new Array(90,12,34,"Razak mohamed",2.3);

const lists=()=>{
    let collect="";
    collect+="<table><thead><tr><th>Elements</th></tr></thead><tbody>"
    final.map((elem)=>{
        collect+="<tr><td>"+ elem +"</td></tr>"
    })
    collect+="</tbody></table>";
    document.getElementById("result").innerHTML=collect;
}

const getting=()=>{
    const pos=document.getElementById("data").value;
    //alert("selected pos is: "+pos+" and its value: "+final[pos]);
    const yet=prompt("Enter the new value for: "+final[pos],"");
    final[pos]=yet;
}