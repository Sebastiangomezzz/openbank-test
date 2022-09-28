import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: {
          step1: {
            title: "Bienvenido/a a la Cuenta Corriente OpenClose",
            text1:
              "En los siguientes pasos, le pediremos una serie de datos para poder crear su nueva contraseña.",
            text2:
              'Por favor, para continuar, marque la casilla y pulse "Siguiente".',
            checkbox1: "Acepto las",
            checkbox2: "Condiciones del servicio",
            popover:
              "Afirmo que soy mayor de 18 años y acepto que traten mis datos según la politica de protección de datos",
            buttonNext: "Siguiente",
          },
          step2: {
            title: "Creación de password",
            passwordInput: {
              label: "Introduce una contraseña",
              required: "La contraseña es obligatoria",
              minLength: "La contraseña debe tener al menos 8 caracteres",
              maxLength: "La contraseña debe tener como máximo 24 caracteres",
              pattern:
                "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número",
            },
            repassInput: {
              label: "Repite la contraseña",
              match: "Las contraseñas no coinciden",
            },
            hintInput: {
              label:
                "Introduce una pista para recordar tu contraseña (Opcional)",
              tooltip: "La pista debe tener como máximo 255 caracteres",
              maxLength: "La pista debe tener menos de 255 caracteres",
            },
            buttonPrev: "Anterior",
            buttonNext: "Siguiente",
          },
          step3KO: {
            title: "Ha habido un error",
            subheader:
              "No hemos podido crear tu contraseña. Inténtalo más tarde",
            button: "Volver al inicio",
          },
          step3OK: {
            title: "¡Tu nueva contraseña se ha creado con éxito!",
            subheader: "Ahora ya podrás acceder a tu cuenta",
            button: "Acceder",
          },
        },
      },
      en: {
        translation: {
          step1: {
            title: "Welcome to the OpenClose Current Account",
            text1:
              "In the following steps, we will ask you for a series of data to be able to create your new password.",
            text2: 'Please, to continue, check the box and press "Next".',
            checkbox1: "I accept the",
            checkbox2: "Conditions of service",
            popover:
              "I affirm that I am over 18 years of age and I accept that you treat my data according to the data protection policy",
            buttonNext: "Next",
          },
          step2: {
            title: "Password creation",
            passwordInput: {
              label: "Enter a password",
              required: "This field is required",
              minLength: "The password must be at least 8 characters long",
              maxLength: "The password must be less than 24 characters long",
              pattern:
                "The password must contain at least one uppercase letter, one lowercase letter and one number",
            },
            repassInput: {
              label: "Repeat the password",
              match: "The passwords do not match",
            },
            hintInput: {
              label: "Create a hint to remember your password (Optional)",
              tooltip: "The hint must be less than 255 characters long",
              maxLength: "The hint must be less than 255 characters long",
            },
            buttonPrev: "Previous",
            buttonNext: "Next",
          },
          step3KO: {
            title: "An error has occurred",
            subheader:
              "We have not been able to create your password. Try again later",
            button: "Back to the beginning",
          },
          step3OK: {
            title: "Your new password was successfully created!",
            subheader: "Now you can access your account",
            button: "Access",
          },
        },
      },
    },
  });

export default i18n;
