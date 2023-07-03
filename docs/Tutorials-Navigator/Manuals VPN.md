

```
## Instalación de OpenVPN 3

### Debian / Ubuntu

1. Asegúrate de que tu sistema admite el transporte HTTPS:
   ```
   # apt install apt-transport-https
   ```

2. Instala la clave del repositorio de OpenVPN utilizada por los paquetes de OpenVPN 3 para Linux:
   ```
   # curl -fsSL https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/openvpn-repo-pkg-keyring.gpg
   ```

3. Instala el repositorio correspondiente. Reemplaza `$DISTRO` con el nombre de la versión de tu distribución Debian/Ubuntu:
   ```
   # curl -fsSL https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list > /etc/apt/sources.list.d/openvpn3.list
   # apt update
   ```

4. Instala el paquete `openvpn3`:
   ```
   # apt install openvpn3
   ```

### Fedora, Red Hat Enterprise Linux, CentOS

1. Agrega el repositorio Copr de Fedora para obtener los paquetes:
   ```
   # dnf copr enable openvpn/openvpn3
   ```

2. Instala el paquete `openvpn3`:
   ```
   # dnf install openvpn3
   ```

**Nota:** Estas instrucciones pueden variar dependiendo de tu sistema operativo y la versión específica. Asegúrate de revisar la documentación oficial del sistema operativo para obtener instrucciones actualizadas.

```

