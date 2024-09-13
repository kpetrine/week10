(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  const emailInput = document.getElementById('email');
  const commentInput = document.querySelector('#comment');
  const addButton = document.getElementById('add-comment');
  const commentsTable = document.querySelector('table > tbody');

console.log(emailInput);
console.log(commentInput);
console.log(addButton);
console.log(commentsTable);

addButton.addEventListener('click', (e) =>{
  const emailText = emailInput.value;
  const commentsText = commentInput.value;
  //console.log(emailText);
  //console.log(commentsText);
  const row = createHTMLElement(`
    <tr>
      <td>${ emailText }</td>
      <td>${ commentsText }</td>
      <td><i class="bi bi-trash3-fill"></i></td>
    </tr>
    `);
    commentsTable.append(row);
  });
    addButton.addEventListener('click', (e) => {
      console.log("click", e)
      console.log(e.target.nearest('tr'));
      const row = e.target.closest('tr');
      if (row){
        row.remove();
      }
    });
  

});

 /**
     * Create an HTMLElement without defining new element / class.
     * @param {String} innerHTML The inner HTML contents.
     * @returns An HTML element.
     */
 function createHTMLElement(innerHTML) {
  const template = document.createElement('template');
  template.innerHTML = innerHTML;
  return template.content.firstElementChild;
 };
