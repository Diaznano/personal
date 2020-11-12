# Finanzas personales - Proyecto de ejemplo

# Contenido del readme

- [APK para descargar y probar](https://drive.google.com/drive/folders/1tSry0TBnuz67QFXYIVKUBlHhocUn3x4w?usp=sharing)
- [Endpoints](#endpoints)
- [Documentación para correr el código](#getting-started)

## Requerimientos Administrador
- Usuario administrador
- El ingreso a la aplicación se realize mediante un login por email y contraseña.
### Diseño 
#### Login
<img src="https://i.ibb.co/DLsb9NV/Screenshot-2020-11-12-13-10-42-043-com-example.jpg" width="250"/>

## Requerimiento
Los administradores pueden ver, crear, modificar y borrar categorías
### Diseño 
#### Categorías
<img src="https://i.ibb.co/vXT2dHq/Screenshot-2020-11-12-13-08-08-844-com-example.jpg" width="250"/>

<img src="https://i.ibb.co/b299d63/Screenshot-2020-11-12-13-08-11-869-com-example.jpg" width="250"/>

## Requerimiento
Los administradores pueden ver, crear, modificar y borrar monedas
### Diseño 
#### Moneda
<img src="https://i.ibb.co/Bj9WBDH/Screenshot-2020-11-12-12-34-41-529-com-example.jpg" width="250"/>

<img src="https://i.ibb.co/FDYJGzv/Screenshot-2020-11-12-12-34-52-293-com-example.jpg" width="250"/>

## Requerimiento
Los administradores pueden ver, crear, modificar y borrar clientes
### Diseño 
#### Clientes
<img src="https://i.ibb.co/2hyrQpJ/Screenshot-2020-11-12-12-34-36-203-com-example.jpg" width="250"/>

<img src="https://i.ibb.co/yX9kVWq/Screenshot-2020-11-12-13-07-56-461-com-example.jpg" width="250"/>

## Requerimiento Cliente
- Usuario cliente
- El ingreso a la aplicación se realize mediante un login por email y contraseña
### Diseño 
#### Login
<img src="https://i.ibb.co/DLsb9NV/Screenshot-2020-11-12-13-10-42-043-com-example.jpg" width="250"/>

## Requerimiento
Los clientes puden ver el balance actual cuando ingresan al sistema, el cual se calcula como la suma de los ingresos y se le resta la suma de los gastos.
### Diseño 
#### Balance
<img src="https://i.ibb.co/pz43kf0/Screenshot-2020-11-12-13-08-32-079-com-example.jpg" width="250"/>

## Requerimiento
Los clientes pueden crear categorías personales de ingresos y gastos.
### Diseño 
#### Categorias
<img src="https://i.ibb.co/vXT2dHq/Screenshot-2020-11-12-13-08-08-844-com-example.jpg" width="250"/>

## Requerimiento
- Visualización de reportes - Proyección de gastos / Gastos diarios por mes seleccionado / Gastos por categorías por mes / Movimientos
### Diseño 
<img src="https://i.ibb.co/2Z0kB5z/Screenshot-2020-11-12-13-08-34-165-com-example.jpg" width="250"/>

## Requerimiento
- Nuevo movimiento / Listado de movimientos
### Diseño.
<img src="https://i.ibb.co/0jNMqjx/Screenshot-2020-11-12-13-08-36-426-com-example.jpg" width="250"/>

<img src="https://i.ibb.co/0D5WT92/Screenshot-2020-11-12-13-08-50-629-com-example.jpg" width="250"/>


## ENDPOINTS
<div class="container">
<div class="row justify-content-center">
<div class="col-md-12">
<table class="table border--round table--alternate-row table-sm">
<thead class="thead-dark">
<tr>
<th style="width: 35%;">Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>currency-delete</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Currency deleted succesfully"
}</pre>
</td>
</tr>
<tr>
<td>currency-creation</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Currency created succesfully"
}</pre>
</td>
</tr>
<tr>
<td>currency-edited</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Currency edited succesfully"
}</pre>
</td>
</tr>
<tr>
<td>currencies-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"currencies": [{
			"id": 1,
			"name": "Pesos",
			"abreviature": "ARS"
		},
		{
			"id": 2,
			"name": "D&oacute;lares",
			"abreviature": "USD"
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>currency-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"currency": {
		"id": 1,
		"name": "Pesos",
		"abreviature": "ARS"
	}
}</pre>
</td>
</tr>
<tr>
<td>clients-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"clients": [{
			"id": 1,
			"name": "Maximiliano Bravo",
			"email": "maxi.bravo93@gmail.com",
			"date_of_birth": "19/01/93",
			"photo_url": "https://api.adorable.io/avatars/285/maxi.png"
		},
		{
			"id": 2,
			"name": "Lucas Tell",
			"email": "lucas.tell@gmail.com",
			"date_of_birth": "19/02/91",
			"photo_url": "https://api.adorable.io/avatars/285/lucas.png"
		},
		{
			"id": 3,
			"name": "Axel Diaz Colman",
			"email": "axel.diaz@gmail.com",
			"date_of_birth": "11/08/90",
			"photo_url": "https://api.adorable.io/avatars/285/axel.png"
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>client-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"client": {
		"id": 1,
		"name": "Maximiliano Bravo",
		"email": "maxi.bravo93@gmail.com",
		"date_of_birth": "19/01/93",
		"photo_url": "https://api.adorable.io/avatars/285/maxi.png"
	}
}</pre>
</td>
</tr>
<tr>
<td>client-delete</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Client deleted succesfully"
}</pre>
</td>
</tr>
<tr>
<td>client-edit</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Client edited succesfully"
}</pre>
</td>
</tr>
<tr>
<td>client-creation</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Client created succesfully"
}</pre>
</td>
</tr>
<tr>
<td>categories-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"categories": [{
			"id": 1,
			"name": "Food"
		},
		{
			"id": 2,
			"name": "Clothes"
		},
		{
			"id": 3,
			"name": "Party and alcohol"
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>category-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"category": {
		"id": 1,
		"name": "Food"
	}
}</pre>
</td>
</tr>
<tr>
<td>category-deleted</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Category deleted succesfully"
}</pre>
</td>
</tr>
<tr>
<td>category-edited</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Category edited succesfully"
}</pre>
</td>
</tr>
<tr>
<td>category-created</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Category created succesfully"
}</pre>
</td>
</tr>
<tr>
<td>login</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Login succesfully",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}</pre>
</td>
</tr>
<tr>
<td>report-gastos-diarios-por-mes</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"transactions_filtered": [{
			"id": 1,
			"filter_text": "Enero",
			"transactions": [{
					"id": 1,
					"type": "Egreso",
					"category": "AWS",
					"date": "18/01/20",
					"amount": "1234",
					"currency": "USD",
					"accounts": [{
							"id": 1,
							"currency": "ARS",
							"balance": "1123"
						},
						{
							"id": 2,
							"currency": "USD",
							"balance": "2023"
						}
					]
				},
				{
					"id": 2,
					"type": "Ingreso",
					"category": "Freelance",
					"date": "20/01/20",
					"amount": "200",
					"currency": "USD",
					"accounts": [{
							"id": 1,
							"currency": "ARS",
							"balance": "1223"
						},
						{
							"id": 2,
							"currency": "USD",
							"balance": "2223"
						}
					]
				},
				{
					"id": 3,
					"type": "Egreso",
					"category": "Facebook",
					"date": "21/01/20",
					"amount": "223",
					"currency": "ARS",
					"accounts": [{
							"id": 1,
							"currency": "ARS",
							"balance": "1000"
						},
						{
							"id": 2,
							"currency": "USD",
							"balance": "2223"
						}
					]
				}
			]
		},
		{
			"id": 2,
			"filter_text": "Febrero",
			"transactions": [{
				"id": 4,
				"type": "Ingreso",
				"category": "Clothes",
				"date": "01/02/20",
				"amount": "100",
				"currency": "ARS",
				"accounts": [{
						"id": 1,
						"currency": "ARS",
						"balance": "1100"
					},
					{
						"id": 2,
						"currency": "USD",
						"balance": "2223"
					}
				]
			}]
		},
		{
			"id": 3,
			"filter_text": "Marzo",
			"transactions": [{
				"id": 5,
				"type": "Ingreso",
				"category": "Freelance",
				"date": "18/03/20",
				"amount": "2000",
				"currency": "USD",
				"accounts": [{
						"id": 1,
						"currency": "ARS",
						"balance": "1100"
					},
					{
						"id": 2,
						"currency": "USD",
						"balance": "4223"
					}
				]
			}]
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>gastos-por-categoria-por-mes</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"transactions_filtered": [{
			"id": 1,
			"filter_text": "Enero",
			"transactions": [{
					"id": 1,
					"type": "Egreso",
					"category": "AWS",
					"date": "01/01/20 al 31/01/20",
					"amount": "3000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 2,
					"type": "Egreso",
					"category": "Facebook",
					"date": "01/01/20 al 31/01/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 3,
					"type": "Egreso",
					"category": "Instagram",
					"date": "01/01/20 al 31/01/20",
					"amount": "2000",
					"currency": "ARS",
					"accounts": []
				}
			]
		},
		{
			"id": 2,
			"filter_text": "Febrero",
			"transactions": [{
				"id": 4,
				"type": "Egreso",
				"category": "Clothes",
				"date": "01/02/20 al 29/02/20",
				"amount": "100",
				"currency": "ARS",
				"accounts": []
			}]
		},
		{
			"id": 3,
			"filter_text": "Marzo",
			"transactions": [{
					"id": 5,
					"type": "Egreso",
					"category": "Freelance",
					"date": "01/03/20 al 31/03/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 6,
					"type": "Egreso",
					"category": "Linkedin",
					"date": "01/03/20 al 31/03/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 7,
					"type": "Egreso",
					"category": "Google",
					"date": "01/03/20 al 31/03/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				}
			]
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>report-movimientos</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"transactions_filtered": [{
		"id": 1,
		"filter_text": "all",
		"transactions": [{
				"id": 1,
				"type": "Egreso",
				"category": "AWS",
				"date": "18/01/20",
				"amount": "1234",
				"currency": "USD",
				"accounts": []
			},
			{
				"id": 2,
				"type": "Ingreso",
				"category": "Freelance",
				"date": "20/01/20",
				"amount": "200",
				"currency": "USD",
				"accounts": []
			},
			{
				"id": 3,
				"type": "Egreso",
				"category": "Facebook",
				"date": "21/01/20",
				"amount": "223",
				"currency": "ARS",
				"accounts": []
			},
			{
				"id": 4,
				"type": "Ingreso",
				"category": "Clothes",
				"date": "01/02/20",
				"amount": "100",
				"currency": "ARS",
				"accounts": []
			},
			{
				"id": 5,
				"type": "Ingreso",
				"category": "Freelance",
				"date": "18/03/20",
				"amount": "2000",
				"currency": "USD",
				"accounts": []
			}
		]
	}]
}</pre>
</td>
</tr>
<tr>
<td>report-gastos-por-categoria-po r-mes</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"transactions_filtered": [{
			"id": 1,
			"filter_text": "Enero",
			"transactions": [{
					"id": 1,
					"type": "Egreso",
					"category": "AWS",
					"date": "01/01/20 al 31/01/20",
					"amount": "3000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 2,
					"type": "Egreso",
					"category": "Facebook",
					"date": "01/01/20 al 31/01/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 3,
					"type": "Egreso",
					"category": "Instagram",
					"date": "01/01/20 al 31/01/20",
					"amount": "2000",
					"currency": "ARS",
					"accounts": []
				}
			]
		},
		{
			"id": 2,
			"filter_text": "Febrero",
			"transactions": [{
				"id": 4,
				"type": "Egreso",
				"category": "Clothes",
				"date": "01/02/20 al 29/02/20",
				"amount": "100",
				"currency": "ARS",
				"accounts": []
			}]
		},
		{
			"id": 3,
			"filter_text": "Marzo",
			"transactions": [{
					"id": 5,
					"type": "Egreso",
					"category": "Freelance",
					"date": "01/03/20 al 31/03/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 6,
					"type": "Egreso",
					"category": "Linkedin",
					"date": "01/03/20 al 31/03/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				},
				{
					"id": 7,
					"type": "Egreso",
					"category": "Google",
					"date": "01/03/20 al 31/03/20",
					"amount": "2000",
					"currency": "USD",
					"accounts": []
				}
			]
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>report-proyeccion-de-gastos</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"accounts": [{
			"id": 1,
			"account_name": "PESOS",
			"currency": "ARS",
			"label_next_month": "Proyecci&oacute;n de gastos de Marzo",
			"label_next_month_amount": "3000",
			"label_next_month_percent": "15%",
			"label_last_month": "Gastos de enero",
			"label_last_month_amount": "2000",
			"label_two_months_ago": "Gastos de febrero",
			"label_two_months_ago_amount": "100"
		},
		{
			"id": 2,
			"account_name": "D&Oacute;LARES",
			"currency": "USD",
			"label_next_month": "Proyecci&oacute;n de gastos de Marzo",
			"label_next_month_amount": "50",
			"label_next_month_percent": "-20%",
			"label_last_month": "Gastos de enero",
			"label_last_month_amount": "100",
			"label_two_months_ago": "Gastos de febrero",
			"label_two_months_ago_amount": "200"
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>balance</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"accounts": [{
			"id": 1,
			"account_name": "PESOS",
			"currency": "ARS",
			"label_balance": "2000,00",
			"label_total_ingresos": "2000,00",
			"label_total_egresos": "300,00"
		},
		{
			"id": 2,
			"account_name": "D&Oacute;LARES",
			"currency": "USD",
			"label_balance": "300,00",
			"label_total_ingresos": "200,00",
			"label_total_egresos": "100,00"
		}
	]
}</pre>
</td>
</tr>
<tr>
<td>new-transaction-attributes</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"new_transaction_attributes": {
		"currencies": [{
				"id": 1,
				"name": "Pesos",
				"abreviature": "ARS"
			},
			{
				"id": 2,
				"name": "D&oacute;lares",
				"abreviature": "USD"
			}
		],
		"categories": [{
				"id": 1,
				"name": "Food"
			},
			{
				"id": 2,
				"name": "Clothes"
			},
			{
				"id": 3,
				"name": "Party and alcohol"
			}
		],
		"transaction_types": [{
				"id": 1,
				"name": "Egreso"
			},
			{
				"id": 2,
				"name": "Ingreso"
			}
		]
	}
}</pre>
</td>
</tr>
<tr>
<td>transaction-edition</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Transaction edited succesfully"
}</pre>
</td>
</tr>
<tr>
<td>transaction-creation</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Transaction created succesfully"
}</pre>
</td>
</tr>
<tr>
<td>transaction-deletion</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"message": "SERVER SIMULATION - Transaction deleted succesfully"
}</pre>
</td>
</tr>
<tr>
<td>transactions-get</td>
<td><span class="badge badge-dark">200</span>&nbsp;<span class="badge badge-info">application/json</span>&nbsp;<span class="badge badge-warning">UTF-8</span>
<pre class="resume">{
	"transactions": [{
			"id": 1,
			"type": "Egreso",
			"category": "AWS",
			"date": "18/01/20",
			"amount": "1234",
			"currency": "USD",
			"title": "Amazon server",
			"description": "Monthly",
			"accounts": []
		},
		{
			"id": 2,
			"type": "Ingreso",
			"category": "Freelance",
			"date": "20/01/20",
			"amount": "200",
			"currency": "USD",
			"title": "App creation",
			"description": "260 hrs",
			"accounts": []
		},
		{
			"id": 3,
			"type": "Egreso",
			"category": "Facebook",
			"date": "21/01/20",
			"amount": "223",
			"currency": "ARS",
			"title": "Adverstising",
			"description": "Campaign",
			"accounts": []
		},
		{
			"id": 4,
			"type": "Ingreso",
			"category": "Clothes",
			"date": "01/02/20",
			"amount": "100",
			"title": "Watch",
			"description": "Apple Watch",
			"currency": "ARS",
			"accounts": []
		},
		{
			"id": 5,
			"type": "Ingreso",
			"category": "Freelance",
			"date": "18/03/20",
			"amount": "2000",
			"title": "Software development",
			"description": "Hourly",
			"currency": "USD",
			"accounts": []
		}
	]
}</pre>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>



## Getting Started
------------------

### Prerequisites

- Nodejs version: 8.12.0 or newer
- Follow [this instructions](https://reactnative.dev/docs/environment-setup) in **React Native CLI Quickstart** tab. (Not the _Expo CLI Quickstart_ tab).

### Installing

1. While being in the project folder; install all required modules: `yarn install`
    1.1 Install Pods (only for iOS) `npx pod-install ios`
2. Open your preferred emulator (_Android_, _iOS_ or both).
3. Open the terminal
4. Start the bundle process: `npx react-native start`
5. Run project on device: `npx react-native run-android` ~~or `react-native run-ios`

## Deployment

### Generating the release APK (Android)

1. Start Android Studio
2. Open the project `project_folder/android`
3. Update the versionCode and versionName (`android/app/build.gradle`)
4. In the top menu select -> Build -> Generate Signed Bundle/APK
5. Select APK, -> Next
6. Complete
  - Key store path: `project_folder/android/app/persona`
  - Key store password: MYAPP_RELEASE_STORE_PASSWORD (`android/gradle.properties`)
  - Key alias: MYAPP_RELEASE_KEY_ALIAS (`android/gradle.properties`)
  - Key password: MYAPP_RELEASE_KEY_PASSWORD (`android/gradle.properties`)
7. -> next
8. Select `release`
9. Check `V1` and `V2`
10. Finish
11. Apk -> `project_folder/android/app/release`

### iOS

1. Start Xcode
2. Open the project (`project_folder/ios/project_name.xcworkspace`)
3. Update the version and build numbers
4. Sign in to your apple developer account
5. In the top menu, select Generic iOS Device as the build destination if no actual device is connected
6. Menu, Project, Archive
7. Click Distribute
8. Sign in to your apple developer account
9. Submit to the App Store
