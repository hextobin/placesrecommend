const fixedOptions = {
  appId: 'pl4CQ5I7JENG',
  apiKey: 'cf274226f2fc8ac66bb79f97db34f44f',
  container: document.querySelector('#address-input'),

};

const reconfigurableOptions = {
  language: 'en', 
  countries: ['us'],
  type: 'city', 
  aroundLatLngViaIP: false // disable the extra search/boost around the source IP
};
const placesInstance = places(fixedOptions).configure(reconfigurableOptions);



document.getElementById('cityButton').onclick = () => {
  alert(document.getElementById('address-input').value)
  
}
