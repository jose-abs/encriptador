

function encriptar()
			
	{

		let textoInicial = document.getElementById('valor-texto').value;
		let sinResultado = document.getElementById('sin-resultado'); 

		let mensajeFinal = document.getElementById('texto-final');
		let imagen = document.getElementById('imagen'); 

		  
		let textoModificado = textoInicial.replace(/e/gi, 'enter').replace(/i/gi, "imes").replace(/a/gi, "ai")
		.replace(/o/gi, "ober").replace(/u/gi, "ufat");


		if(textoInicial.length !=0)
		
		{
			// document.getElementById('valor-texto').value = textoModificado;
			
			document.getElementById('valor-resultado').value = textoModificado;
			
			mensajeFinal.textContent = 'Encriptado con éxito!';
			sinResultado.textContent = '';
			imagen.src = './img/ok.png';

		} 
		
		else
		
		{
        
			mensajeFinal.textContent = 'Ingresa un texto';
			sinResultado.textContent = 'Ningún texto fue encontrado!';
			imagen.src = './img/oops.png';
		
		}
		
			
    }
	  

function desencriptar() 
	
	{

		// let textoInicial = document.getElementById('valor-texto').value;
		
		let textoInicial = document.getElementById('valor-resultado').value;
		
		let sinResultado = document.getElementById('sin-resultado');
		let mensajeFinal = document.getElementById('texto-final'); 
		let imagen = document.getElementById('imagen');

		
		let textoModificado = textoInicial.replace(/enter/gi, "e").replace(/imes/gi, "i")
		.replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	  
  
  
		if(textoInicial.length !=0)
		
		{

			// document.getElementById('valor-texto').value = textoModificado;
			
			document.getElementById('valor-resultado').value = textoModificado;
			mensajeFinal.textContent = 'Desencriptado con éxito!';
			sinResultado.textContent = '';
			imagen.src = './img/ok.png';

		} 
	
		else 
		{

			imagen.src = './img/oops.png';
			sinResultado.textContent = 'Ningún texto fue encontrado.';
			mensajeFinal.textContent = 'Ingresa un texto';
			
		}
      
	}

	
function cancelar()

	{
		
		let sinResultado = document.getElementById('sin-resultado');
		let mensajeFinal = document.getElementById('texto-final'); 
		let imagen = document.getElementById('imagen');
		
		
		document.getElementById('valor-texto').value = '';
		document.getElementById('valor-resultado').value = '';
		mensajeFinal.textContent = 'Ingresa un texto';
		sinResultado.textContent = '';
		imagen.src = './img/default.png';

	}

	
	
	

	
	
	
	

	
	
	


