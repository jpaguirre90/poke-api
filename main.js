$(document).ready(function(){
    for(i=1;i<=151;i++){
        $('.pokemon-lista').append(`       
            <div class="col-md-3">
                <img  data-pokemon="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`+i+`.png" 
                alt="">
            </div>`); 
           
    }

    $(document).on('click','img',function(){
        var pokemon_id=$(this).attr('data-pokemon');
        $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_id}/`,
        
            function(pokemon){
                alert('El pokemon qlo es '+pokemon.name); 
                
                var pokemon_html=`
                <div>
                <h3>`+pokemon.name+`</h3>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`+pokemon_id+`.png" alt="">
                <h5>Type</h5>
                <h5>Tipos</h5>
                <ul>
                `;
                for(var i=0; i<pokemon.types.length; i++) {
                    pokemon_html += "<li>" + pokemon.types[i].type.name + "</li>";
                }; 
                pokemon_html += `
                        </ul>
                        <h5>Height</h5>
                        <h5>`+pokemon.height+` ft</h5>
                        <h5>Weight</h5>
                        <h5>`+pokemon.weight+` lb</h5>
                    </div>`;
                $('.pokedex').html(pokemon_html);
            }
    )
    });
    //$.ajax({
    //    URL:"https://pokeapi.co/api/v2/pokemon/1/",
    //    method:"get",
    //    success:function(pokemon){
    //       console.log(pokemon.name);
    //    }
    //});
     

    //$('.pokedex').append(`
    //<div class="col-md-1">
    //    <img data-pokemon="${i}"  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/`+i+`.png" alt="">
    //</div>`); 
});