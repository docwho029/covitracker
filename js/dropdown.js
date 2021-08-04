const bar = document.getElementById('bar');
const list = document.getElementById('list');
const barText = document.getElementById('bar-text');


const hospital1 = document.getElementById('hospital1');
const hospital2 = document.getElementById('hospital2');
const hospital3 = document.getElementById('hospital3');
const hospital4 = document.getElementById('hospital4');
 
const pharmacy1 = document.getElementById('pharmacy1');
const pharmacy2 = document.getElementById('pharmacy2');
const pharmacy3 = document.getElementById('pharmacy3');
const pharmacy4 = document.getElementById('pharmacy4');

bar.addEventListener('click', () => {
    list.classList.toggle('displayNone');
})

const listChildren = document.getElementsByClassName('list-child');
for(item of listChildren) {
    item.addEventListener('click', (Event) => {
        list.classList.toggle('displayNone');
        
        var id = Event.target.getAttribute('id');
        barText.textContent = id;

        switch(id) {
            case 'Kolkata':
                hospital1.innerHTML = '<p>Apollo Gleneagles Medical Centre</p>';
                hospital2.innerHTML = '<p>Fortis Medical Centre</p>';
                hospital3.innerHTML = '<p>AMRI Hospital</p>';
                hospital4.innerHTML = '<p>Peerless Hospital</p>';

                pharmacy1.innerHTML = '<p>Apollo Pharmacy</p>';
                pharmacy2.innerHTML = '<p>Frank Ross Pharmacy</p>';
                pharmacy3.innerHTML = '<p>Life Care</p>';
                pharmacy4.innerHTML = '<p>BMRI Pharmacy</p>';
                break;
            case 'Mumbai':
                hospital1.innerHTML = '<p>Nanavati Super Speciality Hospital</p>';
                hospital2.innerHTML = '<p>Jaslok Hospital and Research Centre</p>';
                hospital3.innerHTML = '<p>Kohinoor Hospital</p>';
                hospital4.innerHTML = '<p>Wockhardt Hospitals, Mumbai Central</p>';

                pharmacy1.innerHTML = '<p>New Empire Chemists</p>';
                pharmacy2.innerHTML = '<p>Amar Medical Stores></p>';
                pharmacy3.innerHTML = '<p>SastaSundar Wellness Chemist</p>';
                pharmacy4.innerHTML = '<p>UNIVERSAL PHARMACY AND CONVENIENCE</p>';
                break;
            case 'Chennai':
                hospital1.innerHTML = '<p>CHENNAI NATIONAL HOSPITAL</p>';
                hospital2.innerHTML = "<p>Dr. Mehta's Hospitals</p>";
                hospital3.innerHTML = '<p>Apollo Hospital Chennai</p>';
                hospital4.innerHTML = '<p>Billroth Hospitals</p>';

                pharmacy1.innerHTML = '<p>Apollo Pharmacy</p>';
                pharmacy2.innerHTML = '<p>Medplus</p>';
                pharmacy3.innerHTML = '<p>Karuppiah Pharmacy</p>';
                pharmacy4.innerHTML = '<p>Muthu Pharmacy</p>';
                break;
            
            case 'Delhi':
                hospital1.innerHTML = '<p>BLK-Max Super Speciality Hospital</p>';
                hospital2.innerHTML = '<p>Indraprastha Apollo Hospitals</p>';
                hospital3.innerHTML = '<p>Eden Hospital</p>';
                hospital4.innerHTML = '<p>Moolchand Medcity</p>';

                pharmacy1.innerHTML = '<p>CITY MEDICOS</p>';
                pharmacy2.innerHTML = '<p>Pal Medicos</p>';
                pharmacy3.innerHTML = '<p>The Medicure Chemists</p>';
                pharmacy4.innerHTML = '<p>Ajay Medical Store</p>';
                break;
           
                
                
        }
    })
}

// const kolkata = document.getElementsByClassName('hospital-output');

// for(elem of card) {

// }
