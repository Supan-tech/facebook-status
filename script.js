const postDateElement = document.getElementById('post-date');
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
postDateElement.innerText = `Posted on ${formattedDate}`;