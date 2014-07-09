function Trainee()
{
	this.name="";
	this.age="";
	this.address="";
}
var trainees=[];
var t1=new Trainee;
t1.name="Shiva Bhusal";t1.age=18;t1.address="Rupandehi";
trainees.push(t1);
 t1=new Trainee;
t1.name="Ajay Sapkota";t1.age=25;t1.address="Chitwan";
trainees.push(t1);
 t1=new Trainee;
t1.name="Shiva Bhusal";t1.age=18;t1.address="Rupandehi";
trainees.push(t1);
 t1=new Trainee;
t1.name="Shiva Bhusal";t1.age=18;t1.address="Rupandehi";
trainees.push(t1);
console.log(trainees);

function ddel(inn)
{
console.log(inn);
trainees[inn].splice;
}
for(var i=0;i<trainees.length;i++)
{
	var tr=document.createElement('tr');
	var td1=document.createElement('td');
	var td2=document.createElement('td');
	var td3=document.createElement('td');
	var td4=document.createElement('td');
	var td5=document.createElement('td');
	td1.innerHTML=i+1;
	td2.innerHTML=trainees[i].name;
	td3.innerHTML=trainees[i].age;
	td4.innerHTML=trainees[i].address;
	
	var a=document.createElement('a');
		a.setAttribute('index',i);
		a.onclick=function(){alert("Deleting data of "+ trainees[this.getAttribute('index')].name);}
		a.setAttribute('href','#');
		a.innerHTML="Delete";
		
	td5.appendChild(a);
	
	tr.appendChild(td1);tr.appendChild(td2);tr.appendChild(td3);tr.appendChild(td4);
	tr.appendChild(td5);
	
	document.getElementById('tblTrainees').appendChild(tr);
	
	
}
