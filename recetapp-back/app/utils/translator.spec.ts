import {translateObjectKeys} from "./translator";
import {NoTranslationAvailableError} from "./errors";
const translations = {
  prop1: "prep1",
  prop2: "prep2",
  prop3: "prep3",
  prop4: "prep4",
};

it("Returns deep translated object" , () => {
  const objectToTranslate = {
    prop1: 1,
    prop2: {
      prop3: {
        prop4: 4,
      },
    },
  };

  const expected = {
    prep1: 1,
    prep2: {
      prep3: {
        prep4: 4,
      },
    },
  };

  const translated = translateObjectKeys(objectToTranslate, translations);
  expect(translated).toStrictEqual(expected);
});

it("Throws when there is no translation available" , () => {
  const objectToTranslate = {
    prop1: 1,
    prop2: {
      prop3: {
        prup: 4,
      },
    },
  };
  const expectedError = new NoTranslationAvailableError("ingredients", objectToTranslate.prop2.prop3);
  try {
    translateObjectKeys(objectToTranslate, translations);
  } catch (e) {
    expect(e).toStrictEqual(expectedError);
  }
  expect(translateObjectKeys).toThrow(new NoTranslationAvailableError("ingredients", objectToTranslate));

});
