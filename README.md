# ClinicaTP

Debemos realizar un sistema según las necesidades y deseos del cliente, para eso tenemos una breve
descripción de lo que el cliente nos comenta acerca de su negocio.

“La clínica OnLine, especialista en salud, cuenta actualmente con consultorios (6 en la actualidad),
dos laboratorios (físicos en la clínica), y una sala de espera general. Está abierta al público de lunes a
viernes en el horario de 8:00 a 19:00, y los sábados en el horario de 8:00 a 14:00.
Trabajan en ella profesionales de diversas especialidades, que ocupan los consultorios acorde a su
disponibilidad, y reciben en ellos pacientes con turno para consulta o tratamiento. Dichos turnos son
pedidos por la web seleccionando el profesional o la especialidad. La duración mínima de un turno es
30 minutos.” pero los profesionales pueden cambiar la duración según su especialidad. Estos
profesionales pueden tener más de una especialidad.
También contamos con un sector dentro de la clínica que se encarga de la organización y
administración de la misma.

## Sprint 1

Favicon
Subido a la Web
Loading

En esta entrega debemos tener la posibilidad de registrarse, ingresar al sistema y administrar los
usuarios que van a poder utilizar nuestra plataforma. A continuación se detallan algunas
especificaciones:
### Página de bienvenida
- Tiene que tener los accesos al login y registro del sistema
### Registro
- Desde esta sección vamos a poder registrar Pacientes y Especialistas.
- Para los pacientes los datos serán
-- Nombre
-- Apellido
-- Edad
-- DNI
-- Obra Social
-- Mail
-- Password
-- 2 imágenes para su perfil.
- Para los Especialistas
-- Nombre
-- Apellido
-- Edad
-- DNI
-- Especialidad
--- En este caso se le deberá dar la posibilidad de elegir o agregar alguna
que no se encuentre entre las posibilidades
-- Mail
-- Password
-- Imagen de perfil
- Debemos validar los campos según corresponda
### Login
- Desde esta sección vamos a ingresar al sistema.
- Debe contar con los botones de acceso rápido
- Los usuarios con perfil Especialista solo pueden ingresar si un usuario administrador
aprobó su cuenta y verificó el mail al momento de registrarse.
- Los usuarios con perfil Paciente solo pueden ingresar si verificaron su mail al
momento de registrarse.

### Sección Usuarios
- Esta sección solamente la va a poder ver el usuario con perfil Administrador
- Además de ver la información de los usuarios, desde esta sección se deberá habilitar
o inhabilitar el acceso al sistema de los usuarios Especialista.
- También se podrá generar nuevos usuarios, con el mismo requerimiento que en la
sección registro. Pero desde esta sección se podrá generar un usuario Administrador.
- Para los usuarios Administrador
-- Nombre
-- Apellido
-- Edad
-- DNI
-- Mail
-- Password
-- imágen para su perfil.
