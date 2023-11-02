# Functions Typescript - express




## Acknowledgements

- [inversify.io](https://inversify.io)
- [clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [express.js](https://expressjs.com)
- [sequelize.js](https://sequelize.org)



## Installation

Install my-project with npm

```bash
npm install
```


## Run

Clone the project

Start the server

```bash
npm run start
```




## How to create functions

1 . Create new route in src/infra/routes
- The route should be like others.
- Should use inversify to load the container.
```bash
const myController = myContainer.resolve<myController>(myController);
```


2 . Add routes in src/routes.functions.ts
- Import the route and use it.

```bash
import myRoute from RoutePath
routes.use(myRoute)
```
3 . Create Controller
- Controller will receive on the constructor the invesify useCase reference.
```bash
@inject(TYPES.myUseCase) useCase : myUseCase
```

4 . Create inversify TYPES.
src/infra/TYPES

5 . Add dependencies in inversify.config.ts - Follow inversify doc.

Obs. For each class injected should create new invesify references.

6 . Database resources, should use Sequelize as reference.

7 . Api Integration
- Create apiProviders
src/infra/http/Providers
- Create factory Item
src/infra/http/FactoryProviders.ts

8 . Calling api.

```bash
this.httpClient.getConfig('ProviderName')
.get("endpoint")
.then((result) => {
this.result = result.send();
})catch((error) => {
console.error('Error:', error)
})
```

To call functions

Should use bearer token in the header.

function-domain = local - localhost:8080
```bash
curl --location 'localhost:8080/list/county' \
--header 'Authorization: Bearer Token-Here'
```


## Usage/Example

### Function sum two numbers

1 . create route
src/infra/routes/routes.multiply.numbers.ts

2 . import route in route.functions.ts
import routesMultiply from "./infra/routes/routes.multiply.numbers";
routes.use(routesMultiply);

3 . Creating controller 

src/infra/controllers/MultiplyNumberController.ts

4 . Create injection 

```bash
public constructor(
  @inject(TYPES.MultiplyNumbers) useCase: MultiplyNumbers,
  @inject(TYPES.MultiplyAndSum) useCaseMultiplyAndSum: MultiplyAndSum
) {
  this.useCase = useCase;
  this.useCaseMultiplyAndSum = useCaseMultiplyAndSum;
}
```

5 . Create types - src/infra/types/Types.ts

```bash
import {MultiplyAndSum} from "../../core/usecase/MultiplyAndSum";

    MultiplyNumbers: Symbol.for("MultiplyNumbers"),
    MultiplyAndSum: Symbol.for("MultiplyAndSum"),
```

6 . Import it on src/inversify.config.ts

```bash

import {MultiplyNumbers} from "./core/usecase/MultiplyNumbers";
import {MultiplyAndSum} from "./core/usecase/MultiplyAndSum";

myContainer.bind<MultiplyNumbers>(TYPES.MultiplyNumbers).to(MultiplyNumbers);
myContainer.bind<MultiplyAndSum>(TYPES.MultiplyAndSum).to(MultiplyAndSum);
```

7 . add resolve container on the route you created before (src/infra/routes/routes.multiply.numbers.ts)

```bash
import {myContainer} from './../../inversify.config';

const MultiplyNumber = myContainer.resolve<MultiplyNumberController>(MultiplyNumberController);
```

8 . Create useCase 

src/core/usecase/MultiplyAndSum.ts

