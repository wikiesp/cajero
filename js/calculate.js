$('#price').focus();
$('#calculate').click(function (e) {
	e.preventDefault();
	const valorCantidad = $('#cash').val();
	const decimalCantidad = Number.parseFloat(valorCantidad).toFixed(2);
	const cantidad = valorCantidad > 100;
	if (cantidad) {
		$('#cash').focus();
		alert('No puede ser mayor que 100€');
		return;
	}

	// Vacía el contenedor cada vez que se pulsa el botón para que
	// no siga apareciendo el cambio que se ha buscado anteriormente
	$('#cambio').html('');

	const totalPagar = $('#price').val();
	const decimalPagar = Number.parseFloat(totalPagar).toFixed(2);

	const calcularResto = Number((decimalCantidad - decimalPagar).toFixed(2));
	$('#cambio').append(`Tenemos que devolver <b>${calcularResto.toFixed(2)}€</b>`);

	/**----------------------
	 *    variables/contador
	 *------------------------**/

	//NOTA: Las variables ya nunca se llaman "var", si es una variable que no va a cambiar, ya siempre se llaman const, y si es una variable que va a cambiar de valor, ya siempre se usa let.

	let resto = calcularResto;
	resto.toFixed(2);
	let sumandoBilletes;

	/**----------------------
	 *    Billetes
	 *------------------------**/
	const cincuenta = 'img/cincuenta-euros.png';
	const veinte = 'img/veinte-euros.png';
	const diez = 'img/diez-euros.png';
	const cinco = 'img/cinco-euros.webp';
	const dosEuros = 'img/dos-euros.png';
	const unEuro = 'img/un-euro.png';
	const cincuentaCent = 'img/cincuenta-centimos.png';
	const veinteCent = 'img/veinte-centimos.png';
	const diezCent = 'img/diez-centimos.png';
	const cincoCent = 'img/cinco-centimos.png';
	const dosCent = 'img/dos-centimos.png';
	const unCent = 'img/un-centimo.png';

	/**----------------------
	 *    Condiciones
	 *------------------------**/
	if (resto > 50) {
		$('#cambio').append(`<p>1 x  <img src='${cincuenta}'></p>`);
		resto -= 50;
	}

	sumandoBilletes = 0;
	while (resto.toFixed(2) >= 20) {
		sumandoBilletes++;
		resto -= 20;

		if (resto < 20) {
			$('#cambio').append(`<p>${sumandoBilletes} x <img src='${veinte}'></p>`);
		}
	}

	if (resto.toFixed(2) >= 10) {
		$('#cambio').append(`<p>1 x <img src='${diez}'></p>`);
		resto -= 10;
	}

	if (resto.toFixed(2) >= 5) {
		$('#cambio').append(`<p>1 x <img src='${cinco}'></p>`);
		resto -= 5;
		console.log('🚀 ~ file: index.html ~ line 106 ~ resto', resto);
	}

	sumandoBilletes = 0;
	while (resto.toFixed(2) >= 2) {
		sumandoBilletes++;
		resto -= 2;

		if (resto.toFixed(2) < 2) {
			$('#cambio').append(`<p>${sumandoBilletes} x <img src='${dosEuros}'></p>`);
		}
	}

	if (resto.toFixed(2) >= 1) {
		$('#cambio').append(`<p>1 x <img src='${unEuro}'></p>`);
		resto -= 1;
	}

	if (resto.toFixed(2) >= 0.5) {
		resto -= 0.5;
		$('#cambio').append(`<p>1 x <img src='${cincuentaCent}'></p>`);
	}
	sumandoBilletes = 0;
	while (resto.toFixed(2) >= 0.2) {
		sumandoBilletes++;
		resto -= 0.2;

		if (resto.toFixed(2) < 0.2) {
			$('#cambio').append(`<p>${sumandoBilletes} x <img src='${veinteCent}'></p>`);
		}
	}

	if (resto.toFixed(2) >= 0.1) {
		$('#cambio').append(`<p>1 x <img src='${diezCent}'></p>`);
		resto -= 0.1;
	}

	if (resto.toFixed(2) >= 0.05) {
		$('#cambio').append(`<p>1 x <img src='${cincoCent}'></p>`);
		resto -= 0.05;
	}
	sumandoBilletes = 0;
	while (resto.toFixed(2) >= 0.02) {
		sumandoBilletes++;
		resto -= 0.02;

		if (resto.toFixed(2) < 0.02) {
			$('#cambio').append(`<p>${sumandoBilletes} x <img src='${dosCent}'></p>`);
		}
	}

	if (resto.toFixed(2) >= 0.01) {
		$('#cambio').append(`<p>1 x <img src='${unCent}'></p>`);
		resto -= 0.01;
	}
});
