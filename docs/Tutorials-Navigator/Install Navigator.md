


   Inicio: Clonar previamente los repositorios de Navitagor-data integrator y navigator-taks

   Instalamos pyenv:

1. Instalamos el programa `pyenv`. 

   ```bash
   curl https://pyenv.run | bash
   ```

   Ejecutamos el siguiente comando para exportar la configuración a `.bashrc`:

   ```bash
   echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
   echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
   echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
   ```

2. Una vez instalado `pyenv`, procedemos a validar si está funcionando correctamente con los siguientes comandos:

   ```bash
   pyenv install --list  # Verificar las versiones disponibles
   pyenv install 3.10.12  # Seleccionar una versión para instalar
   ```

3. Dentro del directorio `navigator`, activamos el entorno virtual `env`:

   Crear el ambiente virtual de Python:

   ```bash
   pyenv local 3.10.12
   python -V
   ```

   Luego, activamos el ambiente virtual:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

   Nota: Para desactivar el ambiente, ejecutamos `deactivate` en el directorio.

4. Instalación de Navigator: Una vez que el ambiente está activo (se verifica porque en la terminal aparece `(.venv)` antes del nombre de usuario), se procede a la instalación ejecutando el siguiente comando:

   ```bash
   make install
   ```

5. Ejecución de la aplicación:

   Modificamos los archivos ubicados en:

   - `nano env/staging/.env`
   - `nano env/production/.env`
   - `nano env/qa/.env`
   - `nano env/dev/.env`

   Realizamos los cambios necesarios en los archivos, reemplazando las rutas por la ruta de nuestro usuario:

   ```
   PATH=/home/your_username/symbits/
   ETL_PATH=/home/your_username/symbits/
   TASK_PATH=/home/your_username/navigator-dataintegrator-tasks/programs
   ```

   Nota: Debemos crear la carpeta fuera del directorio `navigator-dataintegrator` con el siguiente comando:

   ```bash
   mkdir ~/symbits
   ```

6. Para ejecutar la aplicación, utilizamos el siguiente comando:

   ```bash
   ENV=staging python run.py
   ```

   Luego, podemos realizar pruebas ejecutando las tareas:

   ```bash
   ENV=staging di --program=walmart --task=hourly_postpaid --no-worker --debug
   ```

7. En la ruta `home/your_username/navigator-dataintegrator/etc`, 

```
[logging]
logdir: /tmp/navigator/log/
logging_echo: true
## Rotating file log:
filehandler_enabled: false
## Logstash
logstash_enabled: false
logstash_logging: INFO
logging_host: 127.0.0.1
logging_port: 6000
# Mail for Errors
mailer_enabled: false
logging_mail_host: localhost
logging_admin: no-reply@mobileinsight.com
logging_email: jlara@trocglobal.com
```