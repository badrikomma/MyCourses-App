const reasonInput = document.querySelector('#courseName');
const rateInput = document.querySelector('#rate');
const clearBtn = document.querySelector('#clear');
const addBtn = document.querySelector('#add');
const courseList = document.querySelector('#course-list');

const clear = () =>{

    reasonInput.value = '';
    rateInput.value = '';
}



addBtn.addEventListener('click',() => {
    
    const x = reasonInput.value;
    const y = rateInput.value;
    if( 
        x.trim() <= 0 ||
         y.trim() <= 0 ||
          y > 5 || 
          y <= 0
           ){
            pressAlert();
            return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent= x + '=>' + y +'/5';

    courseList.appendChild(newItem);

    clear();
});

clearBtn.addEventListener('click',clear);

function pressAlert(){
    const alert = document.createElement('ion-alert')
    alert.header = 'WARNING!!';
    alert.subHeader = 'Enter appropriate data';
    alert.message = 'Press OK to return';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}