var thumbUp = document.getElementsByClassName("fa-thumbs-up");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const postId = this.parentNode.parentNode.childNodes[1].innerText
        const heart = parseFloat(this.parentNode.innerText)
        fetch('makePost', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'postId': postId,
            'heart': heart
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


