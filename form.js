(function() {
  'use strict';
  feather.replace({ 'aria-hidden': 'true' });

  //Create categories
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const commentInput = document.querySelector('#comment');
  const addButton = document.getElementById('add-comment');
  const commentsTable = document.querySelector('table > tbody');

  console.log(nameInput);
  console.log(emailInput);
  console.log(commentInput);
  console.log(addButton);
  console.log(commentsTable);

  // Add event listener add button
  addButton.addEventListener('click', () => {
       console.log("Button Clicked");
    const nameText =nameInput.value;
    const emailText = emailInput.value;
    const commentsText = commentInput.value;
    
    // Create table
    const row = createHTMLElement(`
      <tr>
      <td>${nameText} </td> 
      <td>${emailText}</td>
        <td>${commentsText}</td>
        <td><i class="bi bi-trash3-fill delete-btn"></i></td>
      </tr>
    `);

    // Append row to table
    commentsTable.appendChild(row);

    // Add event listener to the delete button
    row.querySelector('.delete-btn').addEventListener('click', () => {
      row.remove();
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
  }
})();

