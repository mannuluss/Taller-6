$(document).ready(function (){
    updateGrid();
});

function updateGrid(){
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        data: "data",
        datatype: "json",
        success: function (response) {
            console.log(response);
            var table = $('table');
            
            response.forEach(element => {
                var str = '<tr data-f>';
                str += '<td data-id="'+element['id']+'">'+element['id']+'</td>';
                str += '<td data-name="'+element['name']+'">'+element['name']+'</td>';
                str += '<td data-user="'+element['username']+'">'+element['username']+'</td>';
                str += '<td>'+element['email']+'</td>';
                str += '<td>'+element['address']['city']+' '+
                        element['address']['street']+' '+
                        element['address']['suite']+' '+
                        element['address']['zipcode']+' '+
                '</td>';
                str += '</tr>';
                table.append(str);
            });   
        }
    });
}

function birthday(){
    var date = $('#fecha').val();
    year = date.substring(0,4);
    console.log(2020-year);
    $('#edad').text(' '+(2020-year));
}

function validateUser(name){
    var textfield = $('[name='+name+']');
    console.log(textfield);
    var str = textfield.val();
    if(/^[a-zA-Z0-9- ]*$/.test(str) == false) {
        alert('el Usuario tiene caracteres raros');
    }
}
function validatePass(namePass,confirPass){//busca por el attributo 'name'
    var pass = $('[name='+namePass+']');
    var passconfir = $('[name='+confirPass+']');
    if (pass.val() == passconfir.val()){
        pass.css('border-color','lawngreen');
        passconfir.css('border-color','lawngreen');
    }else{
        pass.css('border-color','red');
        passconfir.css('border-color','red');
    }
}

var boolEnfermedad = false;
var boolContajioso = false;
function enfermedad(){
    boolEnfermedad = !boolEnfermedad;
    if (boolEnfermedad==true){
        $('#contajioso').css('display','inline');
    }else{
        $('#contajioso').css('display','none');
        $('#cuales').css('display','none');
    }
}
function contajioso(){
    boolContajioso = !boolContajioso;
    if (boolContajioso==true){
        $('#cuales').css('display','inline');
    }else{
        $('#cuales').css('display','none');
    }
}

function filterSearch(attribute_data,filterInput,type) {
    //ejm = attribute_data='data-id' busca el elemento con el attributo data-id
    //filterInput es para buscar un elemento del dom que dice que buscar

    var lista = $('['+attribute_data+']');//el contenedor de la busqueda
    var filtertype = $(type).val();//el valor de la etiqueta select
    var value = $(filterInput).val();//el valor de la etiqueta input 
    console.log(filtertype,typeof(value));
    if (value == ""){//si no hay nada para buscar se sale de inmediato
        lista.each(i=>{
            lista.eq(i).css('display','table-row');
        });
        return;
    }
    var children;
    switch (filtertype) {
        case "id":
            var children = $('[data-id]');
            children.each(i=>{
                if (children.eq(i).data(filtertype) != value){
                    lista.eq(i).css('display','none');
                }else{
                    lista.eq(i).css('display','table-row');
                }
            });
            return;
            break;
        case "name":
            children = $('[data-name]');
            break;
        case "user":
            children = $('[data-user]');
            break;
        default:
            break;
    } 
    children.each(i=>{
        if (children.eq(i).data(filtertype).toLowerCase().indexOf(value) == -1){
            lista.eq(i).css('display','none');
        }else{
            lista.eq(i).css('display','table-row');
        }
    });
    
}

function registro(){
    
}