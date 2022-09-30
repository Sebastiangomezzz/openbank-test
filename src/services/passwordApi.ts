const PRUEBA_KO = "pruebaKO123";

const RESPONSE_OK = { status: 200 };
const RESPONSE_KO = { status: 401 };

export type MockResult = {
<<<<<<<< HEAD:src/services/api.ts
  status: number,
};

const submitForm = (pass: string): Promise<MockResult> => {
========
  status: number;
};

const submitForm = (pass: string):Promise<MockResult> => {
>>>>>>>> 295ac8b26e8b1f753bc5ec7ae373356968e78c00:src/services/passwordApi.ts
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000
    )
  );
};

export { submitForm };
