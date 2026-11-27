# Lönekollen

Lönekollen är en app för att visa anställda och deras lönespecifikationer. Det är ett **övningsprojekt**. Utvecklaren gör LIA på SD Worx, där hen jobbar med frontend (Angular) i deras löneapp och gör vissa ändringar i backend (C#). SD Worx kodbas är mycket stor, så den här appen är en enklare egen version för att lära sig samma tekniker och förstå hur en löneapp fungerar.

## Hur AI:n ska hjälpa till
- Utvecklaren är **nybörjare**: har läst 1 år, främst **Java**, och har bara 1–2 månaders erfarenhet av Angular. C# är nytt.
- **Förklara, skriv inte bara kod.** Berätta varför en lösning fungerar och vad koncepten heter. Jämför gärna C# med Java (till exempel LINQ jämfört med Java Streams, properties jämfört med getters och setters).
- Gör små ändringar i taget som utvecklaren kan följa. Föreslå hellre nästa steg än att bygga allt på en gång.
- Välj vanliga och tydliga mönster före smarta lösningar. Om en kortare eller modernare lösning finns, nämn den, men börja med den som är lättast att förstå.
- Använd samma stil som en typisk stor företagsapp i Angular: NgModules, `@Input` och `@Output`, RxJS-`Subject` i services. Använd inte signals eller standalone om utvecklaren inte ber om det.
- Svara på svenska.

## Lärandemål
Följande används mycket i SD Worx löneapp och ska tränas i det här projektet:

| Koncept | Hur det kan övas här |
|---|---|
| `@Input` | Skicka vald anställd till `Detaljpanel` (görs redan) |
| `@Output` + `EventEmitter` | `AnstalldKort` talar om för föräldern att ett kort har klickats |
| `Subject` / `BehaviorSubject` | En service som delar data mellan komponenter som inte är förälder och barn, till exempel "vald anställd" eller notiser |
| `ngOnChanges` | `Detaljpanel` räknar om nettolön, skatt och annat när `@Input` ändras |
| Breadcrumbs | Brödsmulor byggs från routerns `data` och `ActivatedRoute`, till exempel Anställda › Anna Svensson › Lönespec |
| `setTimeout(() => ...)` | Notiser som försvinner efter några sekunder. Förstå också varför `setTimeout` ibland används för att skjuta upp kod till nästa change detection-varv |
| Bootstrap | Layout, kort, tabeller och breadcrumb-komponenten |
| LINQ | Filtrera, summera och gruppera i backend med `Where`, `Select`, `Sum` och `GroupBy`, till exempel lönekostnad per roll |
| Stored procedures | Skriv en procedur i SQL Server (till exempel `sp_BeraknaLonespec` eller lönekostnad per månad), lägg den i en EF Core-migration och anropa den med `FromSql` och `ExecuteSql`. Jämför med samma logik skriven i LINQ. Kräver att databasen är på plats först. |

Lönedomänen som appen kan växa mot: bruttolön, preliminärskatt, nettolön, arbetsgivaravgift, semester, frånvaro och lönespecifikation per månad. Håll beräkningarna förenklade och skriv tydligt i koden att de är förenklade.

Repot har två delar:

- `LonekollenApi/`: backend i ASP.NET Core Web API (.NET 10, C#) med controllers och EF Core mot SQL Server
- `lonekollen/`: frontend i Angular 21 med Bootstrap 5 och SCSS, tester körs med Vitest

## Kommandon

Backend (kör i `LonekollenApi/`):
- `dotnet run`: startar API:t på http://localhost:5137 (eller använd https-profilen: https://localhost:7119)
- `dotnet build`
- API-anrop för manuell testning finns i `LonekollenApi.http`

Frontend (kör i `lonekollen/`):
- `npm start`: startar `ng serve` på http://localhost:4200
- `npm run build`
- `npm test`: kör Vitest-testerna

## Arkitektur

### Backend
- `Program.cs`: registrerar tjänsterna (DI), OpenAPI (bara i Development) och controllers
- `Controllers/EmployeeController.cs`: `GET /api/employee` och `GET /api/employee/{id}`
- `Service/EmployeeService.cs`: läser just nu från en hårdkodad lista i minnet och är registrerad som singleton
- `Data/LonekollenDbContext.cs`: EF Core-kontext med `Employees`. Den är registrerad men används inte än, och connection-strängen `LonekollenDb` saknas i appsettings (lägg den i user secrets)
- `Models/Employee.cs`: innehåller `Id`, `Namn`, `Roll` och `Lon` (decimal)
- `WeatherForecast.cs` blev kvar från mallen och kan tas bort

### Frontend
- Appen använder **NgModules** (`app-module.ts`, `standalone: false`), inte standalone-komponenter. Nya komponenter ska deklareras i `AppModule`.
- Routing finns i `app-routing-module.ts`: `/anstallda` och `/anstallda/:id/lonespec`
- `sidor/` innehåller sidkomponenter som routern visar. Återanvändbara komponenter (`anstalld-kort`, `detaljpanel`) ligger direkt i `src/app/`.
- `anstalld-service.ts` använder hårdkodad data och anropar ännu inte API:t
- Modellen `Anstalld` (`anstalld.ts`) motsvarar backendens `Employee`, med fält i camelCase

## Konventioner
- Domännamnen är på **svenska**, till exempel `Anstalld`, `hamtaMedId`, `Namn` och `Lon`. Fortsätt med det i ny kod, även om vissa klassnamn i backend är på engelska (`Employee`, `EmployeeService`).
- Frontend formateras med Prettier enligt `.prettierrc`
- C# använder nullable reference types, file-scoped namespaces och primary constructors

## Möjliga nästa steg
- Koppla frontend till API:t med `HttpClient` (och CORS i backend). Det övar Observables, som behövs för att förstå `Subject`.
- Byta `EmployeeService` mot `LonekollenDbContext` och lägga till migrationer
