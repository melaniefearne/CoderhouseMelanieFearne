let Hathabool = false; 
let Meditabool = false; 
let Yogabool = false; 
$("#btnHatha").on("click", function(){
    if(Hathabool)
     {
      $("#pText").text("Se caracteriza por una suave transición entre una asana y la siguiente. Se basa en una serie de ejercicios destinados a aumentar gradualmente el dominio físico y mental."); 
      $(this).text("leer menos")
      Hathabool = false;
    }
    else 
    {
      $("#pTextM").text(" "); 
        $("#pText").text("") 
        $(this).text("leer más")
        return Hathabool = true;
    }
});
$("#Meditacion").on("click", function(){
    if(Meditabool)
     {
      $("#pTextM").text("El mindfulness es una técnica muy útil que permite lograr un estado profundo de conciencia durante la sesión y evitar dejarnos llevar por pensamientos que nos alteran y nos impiden disfrutar del momento presente."); 
      $(this).text("leer menos")
      Meditabool = false;
    }
    else 
    {
        $("#pTextM").text("") 
        $(this).text("leer más")
        return Meditabool = true;
    }
});
$("#YogaEnCasa").on("click", function(){
    if(Yogabool)
     {
      $("#pTextY").text("Practicar Yoga desde casa es muy cómodo y sencillo! Diseñamos clases para que se adapten a tus necesidades.Podes encontrar clases de diferentes estilos y duración."); 
      $(this).text("leer menos")

      Yogabool = false;
    }
    else 
    {
        $("#pTextY").text("") 
        $(this).text("leer más")
        return Yogabool = true;
    }
    });