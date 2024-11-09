# Proyecto de Selección de Columnas

Este proyecto es una interfaz de usuario en React que permite a los usuarios seleccionar y organizar columnas. La interfaz cuenta con dos listas: "Columnas Disponibles" y "Columnas Seleccionadas". Los usuarios pueden buscar entre las columnas, seleccionar las que desean ver y moverlas entre las dos listas. También se puede cerrar el panel de selección de columnas mediante un botón.

## Características

- **Búsqueda en Tiempo Real**: Permite a los usuarios filtrar columnas según el término de búsqueda ingresado.
- **Selección de Columnas**: Los usuarios pueden mover columnas entre "Disponibles" y "Seleccionadas" con solo hacer clic en ellas.
- **Animación de Entrada y Salida**: La ventana de selección de columnas se despliega y oculta suavemente.

## Uso

1. Clonar el repositorio e instalar las dependencias.
2. Iniciar el proyecto en modo de desarrollo con `npm run dev`.
3. Abrir el navegador en `http://localhost:3000` para ver la aplicación en funcionamiento.

## Contexto y Estado

Este proyecto utiliza React junto con un contexto (`useMenuContext`) para manejar el estado global de las columnas disponibles y seleccionadas, y facilitar la manipulación de estos datos desde distintos componentes.
