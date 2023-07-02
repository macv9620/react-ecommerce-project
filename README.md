# Proyecto "Get-Yours" Ecommerce - React

Deploy

https://get-yours.netlify.app/

Pequeño demo del proyecto:

https://i.ibb.co/cx22Z4W/d004b5020ef2.gif

Proyecto creado en React, cuenta con un "pseudo backend" desarollado en JSON Server para la administración de los productos, se anexa el repositorio del JSON Server.

https://github.com/macv9620/ecommerce-json-server.git

### Descripción

El proyecto usa autenticación JWT y manejo de de sesión de usuario en el JSON Server desplegado en "OnRender", la aplicación permite múltiples funcionalidades como:

#### Creación de usuarios.

Se tienen dos tipos de usuarios que pueden ser creados mediante el formulario Sign Up:

* **Customer:** este usuario puede agregar productos al carrito y hacer compras.
* **Admin:** este usuario puede hacer lo mismo que el Customer, adicionalmente puede eliminar productos de la base de datos y también crearlos.

Auque mediante el formulario se pueden crear los usuarios, se dan los siguientes usuarios de prueba:

**Customer (customer@mail.com / clave: 0000)**

**Admin (admin@mail.com / clave: 0000)**

El control de lo que puede o no hacer un usuario se da mediante el JWT payload que contiene información sobre los permisos y accesos que tiene el usuario.

---

#### Rutas ocultas

Dependiendo de si el usuario ha iniciado sesión o no, se muestran algunas rutas relacionadas con autenticación y permisos.

---

#### Diseño responsivo

La aplicación se adapta a pantallas de móviles y computadores.

---

#### Endpoints implementados y soportados por la aplicación que permiten:

* **Log in:** inicio se sesión y genera el JWT que es usado para el acceso de contenidos a los usuarios.
* **Sign up:** creación de usuarios por perfiles (Customer, Admin).
* **Create:** creación de nuevos productos pudiendo adjuntar imagen desde local usando **Base64 Encode** y consumiento una api para host de imágenes o directamente mediante una url (sólo Admin).
* **Post order:** envío de nuevas órdenes de usuario al backend, debido a que la aplicación y el JSON server están desplegados permiten en conjunto persistencia de datos.
* **Get orders:** consulta de órdenes de un usuario.
* **Get products:** consulta de productos creados en la BD.
* **Delete products:** permite al perfil ADMIN eliminar productos.

---

#### Control de errores e información a ususario

La aplicación está diseñada para ser informativa al usuario, controlando errores desde el backend y renderizando ventanas informativas al usuario en caso de ser necesario.
