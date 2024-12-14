
document.getElementById('group').addEventListener('change', function() {
  const selectedGroup = this.value;
  if (selectedGroup) {
      console.log(`Таңдалған топ: ${selectedGroup}`);
  }
});


document.getElementById('rating').addEventListener('input', function() {
  const ratingValue = this.value;
  document.getElementById('ratingValue').textContent = ratingValue;
});


document.getElementById('customForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const group = document.getElementById('group').value;
  const comment = document.getElementById('comment').value;
  const rating = document.getElementById('rating').value;
  const commentMessage = document.getElementById('commentMessage');
  const formMessage = document.getElementById('formMessage');

  let isValid = true;


  if (comment.length > 15) {
      commentMessage.textContent = 'Пікір 15 символдан қысқа болуы керек!';
      isValid = false;
  } else {
      commentMessage.textContent = '';
  }

  
  if (isValid) {
      formMessage.textContent = 'Форма сәтті жіберілді!';
      formMessage.className = 'success';
      console.log({
          group: group,
          comment: comment,
          rating: rating
      });
  } else {
      formMessage.textContent = 'Формада қате бар!';
      formMessage.className = 'error';
  }
});
