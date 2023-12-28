export class Validator {
  constructor({ rules }) {
    this.rules = rules;
  }
  validate = ({ object }) => {
    return this.rules.safeParse(object);
  };
  validatePartial = ({ object }) => {
    return this.rules.partial().safeParse(object);
  };
}
