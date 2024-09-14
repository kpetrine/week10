(function() {
  'use strict';
  feather.replace({ 'aria-hidden': 'true' });

  const emailInput = document.getElementById('email');
  const commentInput = document.querySelector('#comment');
  const addButton = document.getElementById('add-comment');
  const commentsTable = document.querySelector('table > tbody');

  console.log(emailInput);
  console.log(commentInput);
  console.log(addButton);
  console.log(commentsTable);

  addButton.addEventListener('click', () => {
    console.log("Button Clicked");
    const emailText = emailInput.value;
    const commentsText = commentInput.value;
    
    const row = createHTMLElement(`
      <tr>
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

