# Comparativa con Angular

**NestJS y Angular** comparten varias similitudes porque ambos están inspirados en la arquitectura modular de Angular y utilizan **TypeScript** como lenguaje principal. Sin embargo, tienen objetivos distintos:

- **NestJS** es un **framework backend** para Node.js.
- **Angular** es un **framework frontend** para construir aplicaciones web.

A continuación, **las semejanzas y diferencias clave** entre ambos:

---

## **Semejanzas entre NestJS y Angular**

### 1️⃣ **Arquitectura basada en módulos**

Ambos usan módulos (`@Module`) para organizar el código de manera modular y escalable.

**NestJS:**

```jsx
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

```

Angular:

```jsx
@NgModule({
  declarations: [UserComponent],
  providers: [UserService],
  imports: [CommonModule],
})
export class UserModule {}

```

🔹 **En ambos casos**, un módulo agrupa componentes (en Angular) o controladores/servicios (en NestJS).

### 2️⃣ **Uso de Decoradores**

Ambos frameworks usan **decoradores** para definir clases y sus comportamientos.

| Decorador | NestJS (Backend) | Angular (Frontend) |
| --- | --- | --- |
| @Module() | Define un módulo | Define un módulo |
| @Injectable() | Define un servicio | Define un servicio |
| @Controller() | Define un controlador (API REST) | No aplica |
| @Component() | No aplica | Define un componente de UI |
| @Get(), @Post() | Define rutas HTTP | No aplica |

Ejemplo en **NestJS**:

```jsx
@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    return [{ id: 1, name: 'John Doe' }];
  }
}

```

Ejemplo en Angular:

```jsx
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  users = [{ id: 1, name: 'John Doe' }];
}

```

### 3️⃣ **Uso de Servicios e Inyección de Dependencias (DI)**

Ambos frameworks utilizan el patrón **Inversión de Control (IoC)** para manejar la creación y gestión de dependencias.

**NestJS (Backend)**

```jsx
@Injectable()
export class UserService {
  getUsers() {
    return [{ id: 1, name: 'John Doe' }];
  }
}

```

**Angular (Frontend)**

```jsx
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers() {
    return [{ id: 1, name: 'John Doe' }];
  }
}

```

🔹 La diferencia es que en NestJS los servicios se inyectan en **controladores** y en Angular en **componentes**.

---

## **Diferencias entre NestJS y Angular**

| Característica | NestJS | Angular |
| --- | --- | --- |
| **Uso principal** | Backend (API REST) | Frontend (UI web) |
| **Basado en** | Node.js y Express/Fastify | Navegador y DOM |
| **Manejo de rutas** | Controladores con `@Get(), @Post()` | Enrutador de Angular (`RouterModule`) |
| **Base de datos** | Con TypeORM, Prisma, Mongoose, etc. | No maneja bases de datos |
| **Plantillas HTML** | No usa | Usa archivos `.html` en componentes |
| **Ciclo de vida** | Hooks de módulos y middleware | Ciclo de vida de componentes |
| **SSR (Renderizado en servidor)** | No aplica directamente | Soporta SSR con Angular Universal |

---