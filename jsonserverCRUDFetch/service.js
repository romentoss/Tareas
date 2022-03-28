

let form = document.getElementById('UserForm');
document.getElementById('insertRecordButton')
.addEventListener('click', () => {
    postFormData(); 
    
});

form.addEventListener('submit', (e) => {
    
    updateFormData(); 
    e.preventDefault();
});

export const getFormData = () =>{
    fetch('http://localhost:3000/personas',{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response)=>{   
        return response.json();
    })
    .then((data)=>{
        setFormValue(data[0]);
       
    })
};
export const updateFormData = () =>{
    const formValue = getFormValues();
    fetch(`http://localhost:3000/personas/${formValue.User}`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getFormValues())
    })
    .then((response)=>{   
        return response.json();
    })
    .then((data)=>{
        setFormValue(data[0]);
        
    })
};

export const postFormData = async () =>{
    
    await fetch('http://localhost:3000/personas',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getFormValues())
    })
   
};


function setFormValue(data){
    form.elements.User.value = data? data.User:'';
    form.elements.Lastname.value =data? data.LastName:'';
    form.elements.Password.value =data? data.Password:'';
    form.elements.Emailcompany.value =data? data.Emailcompany:'';
    form.elements.Email.value =data? data.Email:'';
    form.elements.City.value =data? data.City:'';
    form.elements.UrlImg.value =data? data.UrlImg:'';
    form.elements.DateAdd.value =data? data.DateAdd:'';
    form.elements.Active.checked =data? data.Active:'';
    form.elements.DateEnd.value =data? data.DateEnd:'';
    
}


function getFormValues(){
    return {
        User : form.elements.User.value,
        LastName : form.elements.Lastname.value,
        Password : form.elements.Password.value,
        Emailcompany : form.elements.Emailcompany.value,
        Email : form.elements.Email.value,
        City : form.elements.City.value,
        UrlImg : form.elements.UrlImg.value,
        DateAdd : form.elements.DateAdd.value,
        Active : form.elements.Active.checked,
        DateEnd : form.elements.DateEnd.value   
    } 
}








