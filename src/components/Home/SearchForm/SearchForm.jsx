import './SearchForm.scss';
import { Form } from 'semantic-ui-react';

const SearchForm = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <input placeholder="Pikachu..." />
        </Form.Field>
      </Form>
    </div>
  );
};

export default SearchForm;
