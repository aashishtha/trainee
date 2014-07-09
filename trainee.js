
	//GET HANDLES OF ALL ELEMENTS OF EDIT PANEL
	var editName=document.getElementById("editName");
	var editAge=document.getElementById("editAge");
	var editAddress=document.getElementById("editAddress");
	var editSubmit=document.getElementById("editSubmit");
function Trainee()
{
	this.id;
	this.name="";
	this.age="";
	this.address="";
}
	//CREATE A DATABASE
	var trainees=[];
	//CREATE A NEW INSTANCE OF OBJECT
		var t1=new Trainee;
			t1.id=1;t1.name="Shiva 1";t1.age=18;t1.address="Rupandehi";
			trainees.push(t1);

		t1=new Trainee;
			t1.id=2;t1.name="Ajay 2";t1.age=25;t1.address="Chitwan";
			trainees.push(t1);
			
		t1=new Trainee;
			t1.id=3;t1.name="Shiva 3";t1.age=18;t1.address="Rupandehi";
			trainees.push(t1);
			
		t1=new Trainee;
			t1.id=4;t1.name="Shiva 4";t1.age=18;t1.address="Rupandehi";
			trainees.push(t1);
			
	console.log(trainees);


for(var i=0;i<trainees.length;i++)
{
	var tr=document.createElement('tr');
		tr.id="row-"+(i+1);
	tr=createRow(tr,i);
	document.getElementById('tblTrainees').appendChild(tr);
	
	
	
}
	//CREATES A ROW INSIDE ROW THAT IS PASSED IN
	//PARAM : TR-->TABLE ROW, i--> CUR SN
function createRow(tr,i)
{
	var td1=document.createElement('td');
	var td2=document.createElement('td');
	var td3=document.createElement('td');
	var td4=document.createElement('td');
	var td5=document.createElement('td');
	var deleteButton=document.createElement('a');
		deleteButton.setAttribute('uid',trainees[i].id);
		deleteButton.className="delete-button";
		
		deleteButton.setAttribute('href','#');
		deleteButton.innerHTML="Delete";
		deleteButton.onclick=deleteItem;
	var editButton=document.createElement('a');
		editButton.setAttribute('uid',trainees[i].id);
		editButton.className="edit-button";
		editButton.onclick=editItem;
		editButton.setAttribute('href','#');
		editButton.innerHTML="Edit";
		
	td1.innerHTML=i+1;
	td2.innerHTML=trainees[i].name;
	td3.innerHTML=trainees[i].age;
	td4.innerHTML=trainees[i].address;
	td5.appendChild(deleteButton);
	td5.appendChild(editButton);

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	return tr;
}
function findItemById(uid)
{
	for(i=0;i<trainees.length;i++)
	{
		if(trainees[i].id==uid)
		{
			return i;
		}
	}
}

function deleteItem()
{
	curUID=this.getAttribute('uid');
	curIndex=findItemById(curUID);
	selItem=trainees[curIndex];
	
	//ALERT THAT DATA ARE BEING DELETED
	console.log("Deleting data of "+selItem.name);
	//DELETE FROM ARRAY
	trainees.splice(curIndex,1);
	//DELETE FROM DOM
		var delItem=document.getElementById("row-"+curUID);
		delItem.remove();
	console.log(trainees);
}
function editItem()
{
	curUID=this.getAttribute('uid');
	curIndex=findItemById(curUID);
	selItem=trainees[curIndex];
	

	
	//TRANSFER VALUE TO BE EDITED TO EDIT PANEL ALONG WITH UID
	editUID.value=selItem.id;
	editName.value=selItem.name;
	editAge.value=selItem.age;
	editAddress.value=selItem.address;
	
}
function clearEditField()
	{
		editUID.value="";
		editName.value="";
		editAge.value="";
		editAddress.value="";
		
	}
function router()
{
	if(editUID.value=="")commitAdd();
	else commitEdit();

}
function commitEdit()
{
	curIndex=findItemById(editUID.value);
	console.log("curIndex is "+curIndex);
	
	trainees[curIndex].name=editName.value;
	trainees[curIndex].age=editAge.value;
	trainees[curIndex].address=editAddress.value;
	console.log('row-'+editUID.value);
	//NOW CHANGE THE DOM ELEMENTS
	var selRow=document.getElementById('row-'+editUID.value);
	selRow.innerHTML="";
	selRow=createRow(selRow,findItemById(editUID.value));
	//NOW CLEAR THE EDIT FIELD
	clearEditField();
}

function commitAdd()
{
	var newItem=new Trainee;
	var indexLast=trainees.length-1;
	newItem.id=trainees[indexLast].id+1;
	newItem.name=editName.value;
	newItem.age=editAge.value;
	newItem.address=editAddress.value;
	
	trainees.push(newItem);
	console.log(trainees);
	
	//ADD TO DOM
	var tr=document.createElement('tr');
		tr.id="row-"+(newItem.id);
	tr=createRow(tr,trainees.length-1);
	document.getElementById('tblTrainees').appendChild(tr);
	//NOW CLEAR THE EDIT FIELD
	clearEditField();
}
