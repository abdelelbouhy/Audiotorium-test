// TODO line 176 is a bug and if value is undefined is a bug line 61

interface SourceCode {
  body: string;
  visible: boolean;
  editable: boolean;
  splitted: boolean;
  name: string;
}

interface OriginalValueSourceCode extends SourceCode {
  header: string;
  footer: string;
}

export interface Value {
  sourceCode: SourceCode[];
}

interface OriginalValue {
  sourceCode: OriginalValueSourceCode[];
}

interface SourceCodeDictNameProp {
  header: string;
  body: string;
  footer: string;
}

interface SourceCodeDict {
  [name: string]: SourceCodeDictNameProp;
}

export const createUserCodeSubmission = async (value: Value | undefined) => {
  try {
    const originalValue: OriginalValue = {
      sourceCode: [
        {
          body: "this value is coming from DB",
          visible: true,
          editable: true,
          splitted: false,
          name: "main.py",
          header: "this is header",
          footer: "this is footer",
        },
      ],
    };
    let sourceCodeArray = [];

    if (value !== undefined) {
      const userSlideElementValue = value;

      const sourceCodeDict: SourceCodeDict = {};
      originalValue.sourceCode.forEach((file) => {
        sourceCodeDict[file.name] = {
          header: file.header,
          body: file.body,
          footer: file.footer,
        };
      });

      userSlideElementValue.sourceCode.forEach((file) => {
        const val = sourceCodeDict[file.name];
        sourceCodeDict[file.name] = {
          header: val.header,
          body: file.body,
          footer: val.footer,
        };
      });

      for (const [name, code] of Object.entries(sourceCodeDict)) {
        sourceCodeArray.push({
          name,
          code: [code.header, code.body, code.footer]
            .filter(Boolean)
            .join("\n"),
        });
      }
    } else {
      originalValue.sourceCode.forEach((file) => {
        sourceCodeArray.push({
          name: file.name,
          code: [file.header, file.body, file.footer]
            .filter(Boolean)
            .join("\n"),
        });
      });
    }

    // console.log(JSON.stringify(sourceCodeArray));

    return JSON.stringify(sourceCodeArray);
  } catch (error) {
    console.error(error);
  }
};

createUserCodeSubmission(undefined);
