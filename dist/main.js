(()=>{!function(){let t=document.getElementById("new"),i=document.getElementById("form"),n=document.getElementById("submit");t.addEventListener("click",(()=>{t.style.display="none",i.style.display="grid"})),i.addEventListener("submit",(e=>{e.preventDefault()})),n.addEventListener("click",(()=>{let t=document.getElementById("project-name").value,i=document.getElementById("project-description").value,n=document.getElementById("project-due-date").value,d=document.getElementById("project-priority").value,o=new e(t,i,n,d);console.log(o.info())}))}();class e{constructor(e,t,i,n){this.title=e,this.description=t,this.dueDate=i,this.priority=n}info(){return{Title:this.title,Description:this.description,"Due Date":this.dueDate,Priority:this.priority}}}})();