let todoList = (function () {

  let textarea = $('textarea');
  let addButton = $('#button');
  let map = {Enter: false, Control: false};

  function newItem() {

    let li = $('<li></li>');
    let textareaValue = textarea.val();
    li.append(textareaValue);

    if (textareaValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }

    function crossOut() {
      li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append("X");
    // quick way to check if the li background color is white or not
    if (li.css('background')[5] === '0') {
      crossOutButton.addClass('grey-hover');
    }
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem() {
      li.fadeOut(250);
    }
    $('#list').sortable();
  }

  textarea.on('keydown', e => {
    if (e.key in map) {
      map[e.key] = true;
    }
    
    if (Object.values(map)
    .filter(v => v === true)
    .length === 2) {
      newItem();
    }
  });

  textarea.on('keyup', e => {
    if (Object.values(map)
    .filter(v => v === true)
    .length === 2) {
      textarea.val('');
    }

    if (e.key in map) {
      map[e.key] = false;
    }
  });

  addButton.on('click', e => {
    textarea.val('');
    textarea.focus();
  })

  return {
    newItem: newItem
  };

})();
    
    
    
    
    
    
    
    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
    
    
    
    
    
    
    
    
      /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */