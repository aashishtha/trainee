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
			t1.id=1;t1.name="Shiva Bhusal";t1.age=18;t1.address="Rupandehi";
			trainees.push(t1);

		t1=new Trainee;
			t1.id=2;t1.name="Ajay Sapkota";t1.age=25;t1.address="Chitwan";
			trainees.push(t1);
			
		t1=new Trainee;
			t1.id=3;t1.name="Shiva Bhusal";t1.age=18;t1.address="Rupandehi";
			trainees.push(t1);
			
		t1=new Trainee;
			t1.id=4;t1.name="Shiva Bhusal";t1.age=18;t1.address="Rupandehi";
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
	
	//--handles not needed--GET HANDLES OF ALL ELEMENTS OF EDIT PANEL
	// editName=document.getElementById("editName");
	// editAge=document.getElementById("editAge");
	// editAddress=document.getElementById("editAddress");
	// editSubmit=document.getElementById("editSubmit");
	
	//TRANSFER VALUE TO BE EDITED TO EDIT PANEL ALONG WITH UID
	editUID.value=selItem.id;
	editName.value=selItem.name;
	editAge.value=selItem.age;
	editAddress.value=selItem.address;
	
}
function commitEdit()
{
	curIndex=editUID.value;
	trainees[curIndex].name=editName.value;
	trainees[curIndex].age=editAge.value;
	trainees[curIndex].address=editAddress.value;
	console.log('row-'+editUID.value);
	//NOW CHANGE THE DOM ELEMENTS
	var selRow=document.getElementById('row-'+editUID.value);
	selRow.innerHTML="";
	selRow=createRow(selRow,editUID.value);
	
	
}