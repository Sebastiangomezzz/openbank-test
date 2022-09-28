const PRUEBA_KO = "pruebaKO123";

const RESPONSE_OK = { status: 200 };
const RESPONSE_KO = { status: 401 };

export type MockResult = {
  status: number,
};

const submitForm = (pass: string): Promise<MockResult> => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO)),
      3000
    )
  );
};

export { submitForm };
