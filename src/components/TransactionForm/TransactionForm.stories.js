import TransactionForm from './TransactionForm';

export default {
  title: 'TransactionForm',
  component: TransactionForm,
};
const Template = (args) => <TransactionForm {...args} />;

export const Primary = Template.bind({});
