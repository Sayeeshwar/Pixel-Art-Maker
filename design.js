var row = $('#row').val();
var curRow=row;
var column = $('#column').val();
var curCol=column;
var set=0;
$('#submit').click(function makeGrid(){
    set++;
    row = $('#row').val();
    column = $('#column').val();
    if(((curCol!==column)||(curRow!==row))||(set===1))
    {
        row = $('#row').val();
        column = $('#column').val();
        color=$('#color').val();

        $('body').append('<table id="grid"></table>');
        $('table').remove();
        $('body').append('<table id="grid"></table>');

        for(var r=0;r<row;r++)
        {
            $('table').append('<tr id=row'+r+'></tr>');
            for(c=0;c<column;c++)
            {
                ($('#row'+r)).append('<td id=cell'+r+c+'></td>');
            }
        }
        color=$('#color').val();
        var oldColor=color;
        

    }
});