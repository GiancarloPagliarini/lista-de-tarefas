$(document).ready(function() {
    
    $('form').on('submit', (e) => {
        e.preventDefault();

        const newTask = $('#newTask').val()
        
        const newItem = $('<li></li>')

        $(`<input type="checkbox">`).appendTo(newItem)
        $(`<label> ${newTask} </label>`).appendTo(newItem)

        $(newItem).appendTo('ul')
        
        $(newItem).click(function () { 
            if ($(this).find(':checkbox').prop('checked')) {
                $(this).css('text-decoration', 'line-through')
            } else {
                $(this).css('text-decoration', 'none')
            }
        })

        $('#newTask').val('')
    })
})