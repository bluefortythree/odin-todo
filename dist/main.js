!function(){let e=document.getElementById("new");e.addEventListener("click",(()=>{e.style.display="none",t.style.display="grid"}));let t=document.getElementById("form");t.addEventListener("submit",(e=>{e.preventDefault()}));let n=document.getElementById("project-view"),d=document.getElementById("submit"),l=[],i=document.getElementById("project-list");d.addEventListener("click",(()=>{let d=document.getElementById("project-name").value,c=document.getElementById("project-description").value,r=document.getElementById("project-due-date").value,o=document.getElementById("project-priority").value;t.reset(),t.style.display="none",e.style.display="grid",l.push([d,c,r,o]);let s=document.createElement("div");s.setAttribute("class","container"),s.addEventListener("click",(()=>{let t=document.getElementById("view-title"),l=document.getElementById("view-description"),i=document.getElementById("view-due-date"),s=document.getElementById("view-priority");t.innerText=d,l.innerText=c,i.innerText=r,s.innerText=o,e.style.display="none",n.style.display="grid";let u=[];document.getElementById("task").addEventListener("click",(()=>{u.push(d),console.log(u)}))}));let u=document.createElement("button"),m=document.createElement("button"),a=document.createElement("button");return u.setAttribute("class","add"),m.setAttribute("class","add2"),a.setAttribute("class","add3"),a.setAttribute("id",l.length+"a"),u.setAttribute("id",l.length+"b"),m.setAttribute("id",l.length+"c"),i.append(s),s.append(a,u,m),a.innerText=""!==o?o:"Normal",u.innerText=d,m.innerText=""!==r?r:"No Due Date",l}))}();