const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.value = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                form.reset()
                result.value = "Thanks, we'll start soon!";
            } else {
                console.log(response);
                result.value = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.value = "Something went wrong!";
        })
        .then(()=>{
            setTimeout(() => {
                result.value="Start your success story"
            }, 3000);
        })
});