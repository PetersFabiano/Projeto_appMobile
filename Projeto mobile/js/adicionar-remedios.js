const KEY="meus_remedios";
const get=()=>JSON.parse(localStorage.getItem(KEY)||"[]");
const set=x=>localStorage.setItem(KEY,JSON.stringify(x));

document.addEventListener("DOMContentLoaded",()=>{
 const voltar=document.getElementById("voltar");
 if(voltar) voltar.onclick=()=>location.href="remedios.html";

 const form=document.getElementById("form");
 if(form) form.onsubmit=e=>{
   e.preventDefault();
   const d=new FormData(form);
   const item={id:Date.now(),nome:d.get("nome").trim(),dosagem:d.get("dosagem").trim(),horario:d.get("horario").trim(),duracao:d.get("duracao")?Number(d.get("duracao")):null,cor:d.get("cor")};
   const lista=get(); lista.push(item); set(lista);
   location.href="remedios.html";
 };

 const lista=document.getElementById("lista");
 if(lista){
   lista.innerHTML="";
   get().forEach(r=>{
     const card=document.createElement("article");
     card.className="card";
     const dias=r.duracao?`Faltam ${r.duracao} dias`:"Uso contínuo";
     card.innerHTML=`<span class="dot ${r.cor}"></span><div class="info"><h2></h2><p></p><small>${dias}</small></div><span class="arrow">›</span>`;
     card.querySelector("h2").textContent=r.nome;
     card.querySelector("p").textContent=`${r.dosagem} • Alarme às ${r.horario}`;
     lista.appendChild(card);
   });
 }
});